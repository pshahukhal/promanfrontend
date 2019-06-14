import React from 'react';
import { Link } from 'react-router-dom';

const BoardLink = (props) => (
	<div className={props.className}  >
    <Link to={"/" + props.href} > {props.text} </Link>
	<button > Update </button>
	<button> Delete </button>
	</div>
);

export default BoardLink;