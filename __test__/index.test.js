import * as types from '../src/client/constants/'
import { changeRange } from '../src/client/reducers/'

test('change range', () => {
	const stateBefore = undefined
	const action = {
		type: types.CHANGE_RANGE,
		value: 5,
	}

	const stateAfter = 5

	expect(changeRange(stateBefore, action)).toEqual(stateAfter)
})
