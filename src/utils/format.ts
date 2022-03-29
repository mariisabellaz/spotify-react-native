import { format, parseISO, addDays } from 'date-fns';

export const fomatDate = (date: string) => {
  return format(addDays(parseISO(date), 1), 'dd MMM, yyyy');
};

export const replaceWithDash = (text: string) => {
  return text.toLocaleLowerCase().replace(/ /g, '-');
};

export function convertMillis(milliseconds: number) {
    const minutes = Math.floor(milliseconds / 60000)
    const seconds = ((milliseconds % 60000) / 1000).toFixed(0)
    return minutes + ":" + (Number(seconds) < 10 ? '0' : '') + seconds
}

export const accentRemover = (text: string) => {
  return text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim();
};

function padTo2Digits(num: number) {
  return num.toString().padStart(2, '0');
}

export function convertMsToTime(milliseconds: number) {
  let seconds = Math.floor(milliseconds / 1000);
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);

  minutes = minutes % 60;
  hours = hours % 24;

  return `${padTo2Digits(hours)}h and ${padTo2Digits(minutes)}min`;
}