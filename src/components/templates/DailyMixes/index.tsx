import React from 'react';
import { FlatList } from 'react-native';

import { Container } from './styles';
import { DailyMix } from '@components/organisms/DailyMix';

import { DailyMixDTO } from '@interfaces/DailyMix';
import { DAILY_MIX } from '@utils/mocks';

export function DailyMixes(){
    const dailyMix: DailyMixDTO[] = DAILY_MIX;

    return (
        <Container>
            <FlatList 
                data={dailyMix}
                numColumns={2}
                columnWrapperStyle= {{ justifyContent: 'space-between' }}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => ( <DailyMix data={item}/> )}
                scrollEnabled={false}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ marginTop: 20 }}
            />
        </Container>
    );
}