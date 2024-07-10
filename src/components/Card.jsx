import './Card.css';

function getColor(props) {
	if (props.red) { return 'red'; }
	if (props.green) { return 'green'; }
	if (props.blue) { return 'blue'; }
	if (props.purple) { return 'purple'; }
}

export default function Card(props) {
	return (
		<div className={`card ${ getColor(props) }`}>
			<div className="header">
				<span className="title">{ props.title }</span>
			</div>
			<div className="content">
				{ props.children }
			</div>
		</div>
	);
}