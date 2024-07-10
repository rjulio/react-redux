import { connect } from 'react-redux';
import './Range.css';

import Card from './Card';
import { changeMinNumber, changeMaxNumber } from '../store/actions/numbers';


function Range(props) {
	const { min, max } = props;

	return (
		<Card title="Intervalo de numeros" red>
			<div className="range">
				<span>
					<strong>Mínimo: </strong>
					<input type="number" value={ min } onChange={ (ev) => props.changeMin(ev.target.value) } />
				</span>
				<span>
					<strong>Máximo: </strong>
					<input type="number" value={ max } onChange={ (ev) => props.changeMax(ev.target.value) } />
				</span>
			</div>
		</Card>
	);
}

function mapStateToProps(state) {
	return {
		min: state.numbers.min,
		max: state.numbers.max,
	}
}

function mapDispatchToProps(dispatch) {
	return {
		changeMin(newNumber) {
			// action creator => action
			const action = changeMinNumber(newNumber)
			dispatch(action);
		},
		changeMax(newNumber) {
			// action creator => action
			const action = changeMaxNumber(newNumber)
			dispatch(action);
		}
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Range);