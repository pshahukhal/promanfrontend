import React, {Component} from 'react';
import axios from 'axios';
import Form from './forms/Form';
import AddListButton from './buttons/AddListButton';
import BoardList from '../containers/BoardList';
import Default from './Default';

const fields = [{label: 'Name your list', type: 'text', value:''}];


class Board extends Component {
	constructor(props) {
		super(props);
		this.state = {
			addingList: false,
			boarddetail:[]
		}
	}

	showListForm = () => {
		this.setState({addingList: true});
	}
	
	hideListForm = () => {
		this.setState({addingList: false});
	}

	onSubmit = (fields) => {
		const listName = fields[0].value;
		this.props.onAddList(listName);
		this.setState({addingList: false});
	}	
	
	componentDidMount(){
		const {boardId} = this.props;
		axios.get('http://localhost:8000/api/boards/' + boardId)
		    .then(res =>{
				this.setState({
					boarddetail: res.data
				})
			})

	}

	render() {
		const {boarddetail} = this.state;
		// Show 404 if no board using id
		return  (
			<div>
				{this.state.boarddetail ? 
				<section className="section-board">
					<h2>{boarddetail.title}</h2>
					<div className="board-lists">

					{ (boarddetail.lists || []).map(item => {
						return (<BoardList 
									key={item.id} 
									name={item.title} 
									boardId={this.props.boardId} 
									listId={item.id}
								/>
							)})
					} 
					{ !this.state.addingList ? 
						/*Toggle between button to add list and form to add new list*/
						<AddListButton onClick={this.showListForm} />
						:
						<section className="form-new-list">
							<Form 
								fields={fields} 
								submitText="Add list" 
								onSubmit={this.onSubmit} 
								submitClass="new-board-submit" 
								btnRequired={true}
							/>
							<button 
								className="new-board-cancel"
								onClick={this.hideListForm}
							>
							X
							</button>
						</section>
					}
					</div>
				</section>
				:
				<Default />
				}
			</div>
		)
	}
						
}

export default Board;