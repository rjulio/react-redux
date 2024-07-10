import { connect } from 'react-redux';

import Card from './Card';

function Sort(props) {
	const { min, max } = props;
	const random = parseInt(Math.random() * (max - min)) + min;
	return (
		<Card title="Sorteio dos numeros" purple>
			<div>
				<span>
					<span>Resultado: </span>
					<strong>{ random }</strong>
				</span>
			</div>
		</Card>
	);
}

function mapStateToProps(state) {
	return {
		min: +state.numbers.min,
		max: +state.numbers.max,
	}
}

export default connect(mapStateToProps)(Sort);