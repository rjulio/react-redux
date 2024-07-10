import { connect } from 'react-redux';
import Card from './Card';

function Average(props) {
	const { min, max } = props;
	return (
		<Card title="Média dos numeros" green>
			<div>
				<span>
					<span>Resultado: </span>
					<strong>{ (min + max) / 2}</strong>
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

export default connect(mapStateToProps)(Average);