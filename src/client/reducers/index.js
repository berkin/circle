import { combineReducers } from 'redux'
import {
	CHANGE_RANGE,
	FETCH_ARTICLE_REQUEST,
	FETCH_ARTICLE_SUCCESS,
	FETCH_ARTICLE_FAILURE,
} from '../constants/'

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

const isFetching = (state = false, action) => {
	switch (action.type) {
	case FETCH_ARTICLE_REQUEST:
		return true
	case FETCH_ARTICLE_SUCCESS:
	case FETCH_ARTICLE_FAILURE:
		return false
	default:
		return state
	}
}

export default combineReducers({
	value,
	post,
	isFetching,
})
