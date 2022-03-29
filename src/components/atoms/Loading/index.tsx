import React from 'react';
import LottieView from 'lottie-react-native';

import { LoadingWrapper } from './styles';

import loading from '@assets/animation/loading.json';

export function Loading() {
    return <LoadingWrapper source={loading} autoPlay loop />;
}