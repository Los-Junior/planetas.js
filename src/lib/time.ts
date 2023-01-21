import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/es';

dayjs.locale('es');
dayjs.extend(relativeTime);

export function fromNow(date: Date) {
	return dayjs().from(date, true);
}

export function datef(date: Date, format: string = 'DD/MM/YYYY') {
	return dayjs(date).format(format);
}
