// @ts-expect-error
import Table from 'cli-table3'

export function makeTable() {
	return new Table({
		chars: {
			bottom: '',
			'bottom-left': '',
			'bottom-mid': '',
			'bottom-right': '',
			left: '',
			'left-mid': '',
			mid: '',
			'mid-mid': '',
			middle: ' ',
			right: '',
			'right-mid': '',
			top: '',
			'top-left': '',
			'top-mid': '',
			'top-right': '',
		},
		colWidths: [32, 16, 16],
		head: ['Op', 'Per Second', 'Per Op'],
		style: { 'padding-left': 0, 'padding-right': 0 },
	})
}
