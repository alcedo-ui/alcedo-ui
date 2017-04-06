import React, {Component, PropTypes} from 'react';

import 'sass/components/field/Switcher.scss';

export default class Switcher extends Component {

	constructor(props) {

		super(props);

		this.toggle = this::this.toggle;

	}

	toggle(e) {

		e.preventDefault();

		const {value, disabled, isLoading, onChange} = this.props;

		!disabled && !isLoading && onChange && onChange(!value);

	}

	render() {

		const {className, style, value, disabled, isLoading, size} = this.props;

		return (
			<div className={`switcher ${value == true ? 'active' : 'inactive'} ${size === 'small' ? 'small' : ''} ${className}`}
			     style={style}
			     onMouseDown={this.toggle}
			     disabled={disabled || isLoading}>

				<div className="slider">

					{
						isLoading ?
							<i className="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
							:
							null
					}

				</div>

			</div>
		);

	}
};

Switcher.propTypes = {

	className: PropTypes.string,
	style: PropTypes.object,

	value: PropTypes.bool,
	disabled: PropTypes.bool,
	isLoading: PropTypes.bool,
	size: PropTypes.string,

	onChange: PropTypes.func

};

Switcher.defaultProps = {

	className: '',
	style: null,

	value: false,
	disabled: false,
	isLoading: false,
	size: ''

};