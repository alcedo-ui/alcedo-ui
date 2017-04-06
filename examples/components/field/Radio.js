import React, {Component, PropTypes} from 'react';

import 'sass/components/field/Radio.scss';

export default class Radio extends Component {

	constructor(props) {

		super(props);

		this.state = {
			value: !!props.value
		};

		this.clickHandle = this::this.clickHandle;

	}

	clickHandle() {

		let {value} = this.state;

		if (value) {
			return;
		}

		this.setState({
			value: true
		}, () => {
			!this.props.disabled && this.props.onChange && this.props.onChange(true);
		});

	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.value !== this.state.value) {
			this.setState({
				value: !!nextProps.value
			});
		}
	}

	render() {

		const {className, style, name, label, disabled} = this.props;
		const {value} = this.state;

		return (
			<div className={`radio ${value ? 'activated' : ''} ${className}`}
			     style={style}
			     disabled={disabled}>

				<input type="hidden"
				       name={name}
				       value={value}/>

				<i className={`fa ${value ? 'fa-dot-circle-o' : 'fa-circle-o'} radio-icon`}
				   aria-hidden="true"
				   onClick={this.clickHandle}>
				</i>

				<div className="radio-label"
				     onClick={this.clickHandle}>
					{label}
				</div>

			</div>
		);

	}
};

Radio.propTypes = {

	className: PropTypes.string,
	style: PropTypes.object,

	name: PropTypes.string,
	label: PropTypes.string,
	value: PropTypes.bool,
	disabled: PropTypes.bool,

	onChange: PropTypes.func

};

Radio.defaultProps = {

	className: '',
	style: null,

	name: '',
	label: '',
	value: false,
	disabled: false

};