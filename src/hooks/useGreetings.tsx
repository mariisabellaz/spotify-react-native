import { useLayoutEffect, useState } from 'react';
import { getGreetings } from '@utils/getGreetings';

const useGreetings = () => {
  const [greetings, setGreetings] = useState('');

  useLayoutEffect(() => {
    const newDate = new Date();
    const hours = newDate.getHours();
    setGreetings(getGreetings(hours));
  }, []);

  return {
    greetings
  };
};

export default useGreetings;