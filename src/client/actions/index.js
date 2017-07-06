import * as types from '../constants'

export const changeRange = value => ({
	type: types.CHANGE_RANGE,
	value
})

export const fetchArticle = value => ({
	type: types.FETCH_ARTICLE,
	value
})
