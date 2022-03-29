import React, { useState, useEffect } from 'react';

import { Container } from './styles';
import { ButtonMenu } from '@components/molecules/Buttons/ButtonMenu';

import { MENU } from '@utils/mocks';
import { MenuDTO } from '@interfaces/Searches';

type BottomMenuProps = {
    onClick: (item: MenuDTO) => void;
}

export function TopMenu( { onClick } : BottomMenuProps ){
    const [indexChecked, setIndexChecked] = useState('');

    function handleSelectedType(item : MenuDTO){
        setIndexChecked(item?.id)
        onClick(item);
    }

    useEffect(() => {
        if(indexChecked === '' || indexChecked === null){
            setIndexChecked(MENU[0].id);
        }
    }, []);

    return (
        <Container>
            { MENU.map((item, index) => {
                return (
                    <ButtonMenu 
                        name={item?.name} 
                        onPress={() => handleSelectedType(item)}
                        isActived={indexChecked === item?.id}
                        key={String(item.id + index)}
                    />
                );
            })}
        </Container>
    );
} 