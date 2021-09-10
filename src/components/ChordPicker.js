import React from 'react';

export default function ChordPicker(props) {
	const chords = props.chords?.map((chord, i) => {
		return <li onClick={props.onChordClick} key={"_chord_" + i} className="chord">{chord}</li>;
	});

	return (
		<div>
			<p>Select your key</p>
			<ul id="chord-picker">
				{chords}
			</ul>
		</div>
	);
};