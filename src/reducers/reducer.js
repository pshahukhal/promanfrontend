import axios from 'axios';

const initialState = {
	boards: [],
}

// local id variable to simulate id generation in a db
let lastId = 1;

// Add news board to boards array
const addNewBoard = (state, data) => {
	//Spread to maintain existing values in state.
	//Take existing boards arr elements and append a new board object

	var boardId = 0;
	var boardTitle = '';

    axios.post(`http://localhost:8000/api/boards/create`, { "title" :data })
      .then((response) => {
	   boardId = (response.data.id);
	   boardTitle = response.data.title;
	  
	  })
	  .catch((err) => {
		console.log(err.message);
	  })

	  return {
		...state,
		boards: [
			...state.boards,
			{
				title: boardTitle,
				id: boardId,
				lists: [],
			}
		]
	    };
}


const updateBoard = (state, boardId,data) => {
	//Spread to maintain existing values in state.
	//Take existing boards arr elements and append a new board object
 
	axios.post(`http://localhost:8000/api/boards/update/` + boardId, { "title" :data })
      .then((response) => {
	   console.log(response);
	  })
	  .catch((err) => {
		console.log(err.message);
	  })	  
}

// Adds new list to board targeting board with it's id
const addListToBoard = (state, listName, boardId) => {

}


// Adds list item to a specific list within a board. boardId and listId required for targeting
const addListItem = (state, itemValue, boardId, listId) => {
	
}

const toggleItemComplete = (state, itemId, listId, boardId) => {
}

const reducer = (state=initialState, action) => {
	switch(action.type) {
		case '[Boards] addNewBoard': return addNewBoard(state, action.data);
		case '[Boards][Board] updateBoard': return updateBoard(state, action.boardId,action.data);
		case '[Boards][Board] addListToBoard': return addListToBoard(state, action.listName, action.boardId);
		case '[Boards][Board][List] addListItem': return addListItem(state, action.itemValue, action.boardId, action.listId);
		case '[Boards][Board][List][Items][Item] toggleItemComplete': return toggleItemComplete(state, action.itemId, action.listId, action.boardId);
		default: 
			return state;
	}
}

// Selectors

const selectBoards = state => state.boards;

const selectBoard = (state, boardId) => state.boards.find(board => board.id === +boardId);

// Returns an array of list items which is board and list specific
const selectListItems = (state, listId, boardId) => [
	// ...state.boards.find(board => board.id === boardId).lists.find(list => list.id === listId).items,
	{id:1,content:'test'},
];

export default reducer;

export {
	selectBoards,
	selectBoard,
	selectListItems
}