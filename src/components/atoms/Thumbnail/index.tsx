import React from 'react';

import { Placeholder, PlaceholderImage } from './styles';
import placeholder from '@assets/images/placeholder.png';

type ThumbnailProps = {
    source: string;
    size: number;
    circle?: boolean
}

export function Thumbnail({ source, size, circle = false } : ThumbnailProps ){
    return (
        <Placeholder>
            <PlaceholderImage 
                source={source && source !== null ? { uri: source } : placeholder} 
                size={size} 
                circle={circle}
            />
        </Placeholder>
    )
}