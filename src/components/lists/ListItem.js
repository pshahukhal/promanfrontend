import React from 'react';

const ListItem = (props) => (
	<li 
		className="board-list-item"
	>
		{props.value} 
		{props.complete ? 
			<button 
				onClick={props.onClick} 
				className="btn-item btn-item-complete"></button>
		: 
			<button 
				onClick={props.onClick} 
				className="btn-item btn-item-incomplete"></button>
		}
	</li>
);

export default ListItem;