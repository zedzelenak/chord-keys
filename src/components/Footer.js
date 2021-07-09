import React from 'react';
import LinkList from './LinkList';

export default function Footer(props) {
	return (
		<footer>
			<LinkList links={props.linkList} />
		</footer>
	);
};