import * as types from '../src/client/constants/'
import reducers from '../src/client/reducers/'

test('change range', () => {
	const stateBefore = undefined
	const action = {
		type: types.CHANGE_RANGE,
		value: 5,
	}

	const stateAfter = { post: {}, value: 5 }

	expect(reducers(stateBefore, action)).toEqual(stateAfter)
})
