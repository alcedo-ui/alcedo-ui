import React, {Component, PropTypes} from 'react';

import ArrowStep from './ArrowStep';

import 'sass/components/step/arrow/ArrowSteps.scss';

export default class ArrowSteps extends Component {

	constructor(props) {
		super(props);
	}

	render() {

		const {data, step} = this.props;

		return (
			<div className="ArrowSteps">

				{
					data.map((value, index)=> {
						return (
							<ArrowStep key={index}
							           step={step}
							           index={index}
							           value={value}
							           style={{width: 100 / data.length + '%'}}
							           isFirst={index == 0}
							           isLast={index == data.length - 1}/>
						)
					})
				}

			</div>
		);

	}
};

ArrowSteps.propTypes = {
	data: PropTypes.array,
	step: PropTypes.number
};