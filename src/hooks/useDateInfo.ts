import { days } from '../data/global';

const XMAS_MONTH = 11;

export const useDateInfo = () => {

    const isXmas = () => new Date().getMonth() === XMAS_MONTH;

    const weekDay = () => days[new Date().getDay()];
  
    return {
        isXmas,
        weekDay,
    }
}
