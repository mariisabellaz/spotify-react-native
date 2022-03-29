import React, { useState, useCallback, useEffect } from 'react';
import { Audio } from 'expo-av';

export function useAudio() {
    const [sound, setSound] = useState<Audio.Sound>();
    const [isPlay, setPlay] = useState(false);

    async function loadSound(track: string) {
        try {
            const payload = { uri: track };
            const { sound } = await Audio.Sound.createAsync(payload);
        
            setSound(sound);
            await sound.playAsync();

            setPlay(true);
        } catch (error) {
           console.error(error);
        }
    }

    const toggleTrack = useCallback(async (track: string) => {
        if (sound && isPlay) {
          setPlay(false)
          return await sound.stopAsync()
        }
    
        loadSound(track)
      }, [sound, isPlay])

    useEffect(() => {
         return sound 
            ? () => { sound.unloadAsync() } 
            : undefined 
    }, [sound]);

    return {
        isPlay,
        toggleTrack
    }
}
