import React, {Component, PropTypes} from 'react';

import Button from 'components/button/Button';

import 'sass/components/field/CheckboxButton.scss';

export default class CheckboxButton extends Component {

	constructor(props) {

		super(props);

		this.state = {
			value: !!props.value
		};

		this.clickHandle = this::this.clickHandle;

	}

	clickHandle() {
		const value = !this.state.value;
		this.setState({
			value
		}, () => {
			!this.props.disabled && this.props.onChange && this.props.onChange(value);
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

		const {className, style, text, disabled} = this.props;
		const {value} = this.state;

		return (
			<Button className={`checkbox-button ${value ? 'activated' : ''} ${className}`}
			        style={style}
			        value={text}
			        disabled={disabled}
			        onClick={this.clickHandle}/>
		);

	}
};

CheckboxButton.propTypes = {

	className: PropTypes.string,
	style: PropTypes.object,

	text: PropTypes.string,
	value: PropTypes.bool,
	disabled: PropTypes.bool,

	onChange: PropTypes.func

};

CheckboxButton.defaultProps = {

	className: '',
	style: null,

	text: '',
	value: false,
	disabled: false

};