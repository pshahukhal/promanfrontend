import React, {Component} from 'react';
import axios from 'axios';

import BoardLink from './buttons/BoardLink';
import NewBoard from './NewBoard';

class Boards extends Component {
	constructor(props) {
		super(props);
		this.state = {
			addingBoard: false,
			boards:[]
		}
	} 

	addBoard = (data) => {
		this.props.addBoard(data);
		this.setState({addingBoard: false})
	}
	
	showAddBoard = () => {
		this.setState({addingBoard: true})
	}

	componentDidMount(){
		axios.get('http://localhost:8000/api/boards')
		    .then(res =>{
				this.setState({
					boards: res.data
				})
			})

	}

	//List of boards here with board links
	render() {
		return (
			<nav className="boards-menu">
				{this.state.addingBoard ? 
				<NewBoard onSubmit={this.addBoard}/>
				:
				<button
					className="btn-board btn-board--new"
					onClick={this.showAddBoard} 
				>Create a new board...</button>
				}
				{
					this.state.boards.map((board, i) => {
						return <BoardLink 
											key={i} 
											text={board.title} 
											href={"boards/"+board.id} 
											className="btn-board" 
											
										/>
					})
				}
			</nav>
		);
	}
};

export default Boards;