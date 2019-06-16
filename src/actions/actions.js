const actionTypes = {
	ADD_NEW_BOARD: 'addNewBoard',
	UPDATE_BOARD: 'updateBoard',
	ADD_LIST_TO_BOARD: 'addListToBoard',
	ADD_LIST_ITEM: 'addListItem',
	SET_ITEM_COMPLETE: 'toggleItemComplete',
}

const addNewBoard = (data) => ({
	type: actionTypes.ADD_NEW_BOARD,
	data,
});

const addListToBoard = (listName, boardId) => ({
	type: actionTypes.ADD_LIST_TO_BOARD,
	listName,
	boardId,
});

const addListItem = (itemValue, boardId, listId) => ({
	type: actionTypes.ADD_LIST_ITEM,
	itemValue,
	boardId,
	listId,
});

const toggleItemComplete = (itemId, listId, boardId) => ({
	type: actionTypes.SET_ITEM_COMPLETE,
	itemId,
	listId,
	boardId,
});

export {
	addNewBoard,
	addListToBoard,
	addListItem,
	toggleItemComplete
}