import { NUM_MIN_CHANGED, NUM_MAX_CHANGED } from './types';

// action creator
export function changeMinNumber(newNumber) {
	return {
		type: NUM_MIN_CHANGED,
		payload: newNumber
	};
}

export function changeMaxNumber(newNumber) {
	return {
		type: NUM_MAX_CHANGED,
		payload: newNumber
	};
}