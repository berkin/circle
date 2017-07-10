import { combineReducers } from 'redux'
import { value } from './value'
import { post } from './post'
import posts, { isFetching } from './posts'

export default combineReducers({
	value,
	post,
	posts,
	isFetching,
})


export const getIsFetching = state => state.isFetching
export const getIsFetched = state => state.posts.isFetched
export const getPostById = (state, id) => state.posts.posts.filter(item => item.id === id)[0]
