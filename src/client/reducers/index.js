import { combineReducers } from 'redux'
import {
	CHANGE_RANGE,
	FETCH_ARTICLE,
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
	case FETCH_ARTICLE:
		return action.post
	default:
		return state
	}
}

const posts = (state = { isFetched: false, posts: [] }, action) => {
	switch (action.type) {
	case FETCH_ARTICLE_SUCCESS:
		return {
			isFetched: true,
			posts: action.posts
		}
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
	posts,
	isFetching,
})

export const getIsFetching = state => state.isFetching
export const getIsFetched = state => state.posts.isFetched
export const getPostById = (state, id) => state.posts.posts.filter(item => item.id === id)[0]
