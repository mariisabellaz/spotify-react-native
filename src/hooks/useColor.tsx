import { useLayoutEffect, useState } from 'react';
import { getGreetings } from '@utils/getGreetings';

const useColor = () => {
  const [greetings, setGreetings] = useState('');

  function random_rgba() {
    const o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
  }
  
  useLayoutEffect(() => {
    random_rgba();
  }, []);

  return {
    greetings
  };
};

export default useColor;