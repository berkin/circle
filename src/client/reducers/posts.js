import {
	FETCH_ARTICLE_REQUEST,
	FETCH_ARTICLE_SUCCESS,
	FETCH_ARTICLE_FAILURE,
} from '../constants'

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

export const isFetching = (state = false, action) => {
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

export default posts
