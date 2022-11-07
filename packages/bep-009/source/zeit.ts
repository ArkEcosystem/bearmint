// @ts-expect-error
import dayjs from 'dayjs'

export const zeit = {
	diffInHours(a: number, b?: number): number {
		return dayjs.unix(a).diff(b, 'hours')
	},
	diffInMinutes(a: number, b?: number): number {
		return dayjs.unix(a).diff(b, 'minutes')
	},
	diffInSeconds(a: number, b?: number): number {
		return dayjs.unix(a).diff(b, 'seconds')
	},
	isFuture(value: number): boolean {
		return dayjs.unix(value).isAfter(dayjs())
	},
	isPast(value: number): boolean {
		return dayjs.unix(value).isBefore(dayjs())
	},
	toUnix(): number {
		return dayjs().unix()
	},
}
