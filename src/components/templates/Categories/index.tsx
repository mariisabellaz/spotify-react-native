import React from 'react';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

import { Container } from './styles';
import { Category } from '@components/organisms/Category';
import { Loading } from '@components/atoms/Loading';

import { CategoriesDTO } from '@interfaces/Categories';

type CategoriesProps = {
    categories: CategoriesDTO[];
    isLoading: boolean
}

export function Categories({ categories, isLoading } : CategoriesProps ){
    const navigation = useNavigation();

    function handleClick(color: string, id: string) {
        navigation.navigate('playlist', { category: id, background: color });
    };

    return (
        <Container>
            { isLoading 
                ? <Loading/> 
                : <FlatList 
                    data={categories}
                    numColumns={2}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => ( 
                        <Category 
                            data={item} 
                            onClick={(color) => handleClick(color, item?.id)} 
                        /> 
                    )}
                    columnWrapperStyle={{ justifyContent: 'space-between' }}
                    contentContainerStyle={{  
                        marginTop: 20, 
                        paddingBottom: getBottomSpace() + 40 
                    }}
                    showsVerticalScrollIndicator={false}
                />
            }
        </Container> 
    );
}