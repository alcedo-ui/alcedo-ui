import React, {Component, PropTypes} from 'react';

export default class ArrowStep extends Component {

	constructor(props) {
		super(props);
	}

	render() {

		const {step, index, value, style, isFirst, isLast} = this.props;

		return (
			<div className={'step' + (step == index ? ' active' : (step > index ? ' success' : ''))}
			     style={style}>

				<div className="number">
					{index + 1}
				</div>

				<div className="title">
					{value.title}
				</div>

				{
					isFirst ?
						null
						:
						<div className="triangle left">
							<div className={'rightTop' + (step == index ? ' active' : '') + (step > index ? ' success' : '')}></div>
							<div className={'rightBottom' + (step == index ? ' active' : '') + (step > index ? ' success' : '')}></div>
						</div>
				}

				{
					isLast ?
						null
						:
						<div className="triangle right">
							<div className={'left' + (step == index ? ' active' : '') + (step > index ? ' success' : '')}></div>
						</div>
				}

			</div>
		);

	}
};

ArrowStep.propTypes = {
	step: PropTypes.number,
	index: PropTypes.number,
	value: PropTypes.object,
	style: PropTypes.object,
	isFirst: PropTypes.bool,
	isLast: PropTypes.bool
};