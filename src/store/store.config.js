import { createStore, combineReducers } from 'redux';

import numberReducers from './reducers/numbers';

const reducers = combineReducers({
	numbers: numberReducers,
	names: function(state, action) {
		return ['Ana', 'Bia', 'Carlos']
	}
});

function storeConfig() {
	return createStore(reducers);
}

export default storeConfig;