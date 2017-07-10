import { FETCH_ARTICLE } from '../constants'

export const post = (state = {}, action) => {
	switch (action.type) {
	case FETCH_ARTICLE:
		return action.post
	default:
		return state
	}
}
