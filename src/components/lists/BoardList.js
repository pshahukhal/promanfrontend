import React,{Component} from 'react';
import axios from 'axios'
import ListItem from './ListItem';
import Form from '../forms/Form';
import Default from '../Default';

const fields = [
	{
		label: null,
		type: 'text',
		value: '',
	}
];


class BoardList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			listdetail:{}
		}
	}
	
	componentDidMount(){
		const {boardId} = this.props;
		const {listId} = this.props;
		axios.get('http://localhost:8000/api/lists/' + listId)
		    .then(res =>{
				this.setState({
					listdetail: res.data
				})
			})
	}

	render(){
		console.log(this.state.listdetail.cards);

		return (
			<div>
			{ 
			this.state.listdetail ? 
			<section className="board-list-section">
			<h2>{this.state.listdetail.title}</h2>
			<Form 
				fields={fields} 
				btnRequired={false} 
				 
			/>
			<ul className="board-list">
				{ (this.state.listdetail.cards || []) .map(({id, title}) => (
					<ListItem 
						key={id} 
						value={title} 
					/>
					)
				)}
			</ul>
			</section>
			:
			<Default />
			}
			</div>
		)
	}
    

}
// On submit/toggle takes the ids of their specifics to ensure targeting of correct part of state
export default BoardList;

