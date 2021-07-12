// !! substring is symbol-replacement for flat symbol
export const majorNotes = {
	'C': ['C', 'Dm', 'Em', 'F', 'G', 'Am', 'Bm!!5'],
	'C#': ['C#', 'D#m', 'E#m', 'F#', 'G#', 'A#m', 'B#m!!5'],
	'D!!': ['D!!', 'E!!m', 'Fm', 'G!!', 'A!!', 'B!!m', 'Cm!!5'],
	'D': ['D', 'Em', 'F#m', 'G', 'A', 'Bm', 'C#m!!5'],
	'E!!': ['E!!', 'Fm', 'Gm', 'A!!', 'B!!', 'Cm', 'Dm!!5'],
	'E': ['E', 'F#m', 'G#m', 'A', 'B', 'C#m', 'D#m!!5'],
	'F': ['F', 'Gm', 'Am', 'B!!', 'C', 'Dm', 'Em!!5'],
	'F#': ['F#', 'G#m', 'A#m', 'B', 'C#', 'D#m', 'E#m!!5'],
	'G!!': ['G!!', 'A!!m', 'B!!m', 'C!!', 'D!!', 'E!!m', 'Fm!!5'],
	'G': ['G', 'Am', 'Bm', 'C', 'D', 'Em', 'F#m!!5'],
	'A!!': ['A!!', 'B!!m', 'Cm', 'D!!', 'E!!m', 'Fm', 'Gm!!5'],
	'A': ['A', 'Bm', 'C#m', 'D', 'E', 'F#m', 'G#m!!5'],
	'B!!': ['B!!', 'Cm', 'Dm', 'E!!', 'F', 'Gm', 'Am!!5'],
	'B': ['B', 'C#', 'D#', 'E', 'F#', 'G#m', 'A#m!!5']
};
export const minorNotes = {
	'': ['', '', '', '', '', '', ''],
	'': ['', '', '', '', '', '', ''],
	'': ['', '', '', '', '', '', ''],
	'': ['', '', '', '', '', '', ''],
	'': ['', '', '', '', '', '', ''],
	'': ['', '', '', '', '', '', ''],
	'': ['', '', '', '', '', '', ''],
	'': ['', '', '', '', '', '', ''],
	'': ['', '', '', '', '', '', ''],
	'': ['', '', '', '', '', '', ''],
	'': ['', '', '', '', '', '', ''],
	'': ['', '', '', '', '', '', ''],
	'': ['', '', '', '', '', '', ''],
	'': ['', '', '', '', '', '', '']
};
export const masterNotes = {...majorNotes, ...minorNotes}