import React from 'react';

export default function Chart(props) {
	const notes = props.notes?.map((note, i) => {
		const _key = 'note_' + i;
		return (
			<div className="note-container" key={_key}>
				<div className="pointer">{i + 1}</div>
				<div className="note">{note}</div>
			</div>
		);
	});

	return (
		<div id="notes">
			{notes}
		</div>
	);
};