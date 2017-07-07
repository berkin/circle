import {
	CHANGE_RANGE,
	FETCH_ARTICLE_REQUEST,
	FETCH_ARTICLE_SUCCESS,
	FETCH_ARTICLE_FAILURE,
} from '../constants'

export const changeRange = value => ({
	type: CHANGE_RANGE,
	value
})

export const fetchArticle = id => (dispatch) => {
	dispatch({
		type: FETCH_ARTICLE_REQUEST,
	})

	fetch('https://jsonplaceholder.typicode.com/posts')
		.then((response) => {
			if (response.status !== 200) {
				return
			}
			response.json().then((data) => {
				const [article] = data.filter(item => id === item.id)
				dispatch({
					type: FETCH_ARTICLE_SUCCESS,
					article,
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
