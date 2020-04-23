import { format } from 'date-fns';

export default (date: Date): string => format(new Date(date), 'dd/MM/yyyy');
