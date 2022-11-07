const MODIFIERS = {
	bold: makeFunction(1, 22),
	dim: makeFunction(2, 22),
	hidden: makeFunction(8, 28),
	inverse: makeFunction(7, 27),
	italic: makeFunction(3, 23),
	reset: makeFunction(0, 0),
	strikethrough: makeFunction(9, 29),
	underline: makeFunction(4, 24),
}

const FG_COLORS = {
	black: makeFunction(30, 39),
	blue: makeFunction(34, 39),
	cyan: makeFunction(36, 39),
	gray: makeFunction(90, 39),
	green: makeFunction(32, 39),
	grey: makeFunction(90, 39),
	magenta: makeFunction(35, 39),
	red: makeFunction(31, 39),
	white: makeFunction(37, 39),
	yellow: makeFunction(33, 39),
}

const BG_COLORS = {
	bgBlack: makeFunction(40, 49),
	bgBlue: makeFunction(44, 49),
	bgCyan: makeFunction(46, 49),
	bgGreen: makeFunction(42, 49),
	bgMagenta: makeFunction(45, 49),
	bgRed: makeFunction(41, 49),
	bgWhite: makeFunction(47, 49),
	bgYellow: makeFunction(43, 49),
}

function makeFunction(open: number, close: number) {
	return (message: string) => `\u001B[${open}m${message}\u001B[${close}m`
}

export const chalk = {
	...MODIFIERS,
	...FG_COLORS,
	...BG_COLORS,
}
