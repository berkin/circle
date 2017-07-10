import { CHANGE_RANGE } from '../constants'

export const value = (state = 0, action) => {
	switch (action.type) {
	case CHANGE_RANGE:
		return action.value
	default:
		return state
	}
}
