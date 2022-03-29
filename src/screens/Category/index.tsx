import React, { useState, useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Container, Content } from './styles';
import { Heading } from '@components/atoms/Typography/Heading';
import { Categories } from '@components/templates/Categories';

import { categoriesActions } from '@store/slices/categoriesSlice';

export function Category(){
    const dispatch = useDispatch();

    const { isLoading, categories } = useSelector(({ categories: categoriesData }) => categoriesData);
    
    useEffect(() => {
        dispatch(categoriesActions.getCategories());
    }, []);

    return (
        <Container>
            <Content>
                <Heading label='Categories'/>
                <Categories categories={categories.items} isLoading={isLoading}/>
            </Content>
        </Container>
    );
}