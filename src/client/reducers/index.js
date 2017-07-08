import { combineReducers } from 'redux'
import { CHANGE_RANGE, FETCH_ARTICLE_SUCCESS } from '../constants/'

const value = (state = 0, action) => {
	switch (action.type) {
	case CHANGE_RANGE:
		return action.value
	default:
		return state
	}
}

const post = (state = {}, action) => {
	switch (action.type) {
	case FETCH_ARTICLE_SUCCESS:
		return action.post
	default:
		return state
	}
}

export default combineReducers({
	value,
	post,
})
