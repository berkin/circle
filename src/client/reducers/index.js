import { CHANGE_RANGE, FETCH_ARTICLE } from '../constants/'

const changeRange = (state = 0, action) => {
	switch (action.type) {
	case CHANGE_RANGE:
		return action.value
	default:
		return state
	}
}

export default changeRange

const article = (state = {}, action) => {
	switch (action.type) {
		case FETCH_ARTICLE_SUCCESS:
			return {
				...state,
				action.article
			}
		default:
			return state
	}
}

export default article
