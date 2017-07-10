import {
	CHANGE_RANGE,
	FETCH_ARTICLE,
	FETCH_ARTICLE_REQUEST,
	FETCH_ARTICLE_SUCCESS,
	FETCH_ARTICLE_FAILURE,
} from '../constants'
import { getIsFetching, getIsFetched, getPostById } from '../reducers'

export const changeRange = value => ({
	type: CHANGE_RANGE,
	value
})

export const fetchArticle = id => (dispatch, getState) => {
	if (getIsFetching(getState())) {
		return Promise.resolve()
	}

	if (getIsFetched(getState())) {
		dispatch({
			type: FETCH_ARTICLE,
			post: getPostById(getState(), id)
		})
		return Promise.resolve()
	}

	dispatch({
		type: FETCH_ARTICLE_REQUEST,
	})

	return fetch('https://jsonplaceholder.typicode.com/posts')
		.then((response) => {
			if (response.status !== 200) {
				return
			}
			response.json().then((data) => {
				const [post = {}] = data.filter(item => id === item.id)
				dispatch({
					type: FETCH_ARTICLE_SUCCESS,
					posts: data,
				})
				dispatch({
					type: FETCH_ARTICLE,
					post,
				})
			})
		})
		.catch(error =>
			dispatch({
				type: FETCH_ARTICLE_FAILURE,
				error: error.message || 'Something went wrong.'
			})
		)
}
