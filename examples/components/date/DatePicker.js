import React, {Component, PropTypes} from 'react';

import Util from '../../vendor/Util';
import Event from '../../vendor/Event';

import TextField from '../field/TextField';

import 'sass/components/date/DatePicker.scss';

export default class DatePicker extends Component {

	constructor(props) {

		super(props);

		const initValue = Util.value2Moment(props.value, props.dateFormat);
		this.state = {
			value: initValue, // Moment object
			textFieldValue: initValue.format(props.dateFormat),
			popupVisible: false
		};

		this.textFieldChangeHandle = this::this.textFieldChangeHandle;
		this.mousedownHandle = this::this.mousedownHandle;

	}

	textFieldChangeHandle(textFieldValue) {
		this.setState({
			textFieldValue
		});
	}

	mousedownHandle(e) {
		!this.props.disabled && this.setState({
			popupVisible: Event.triggerPopupEventHandle(
				e.target,
				require('react-dom').findDOMNode(this.refs.trigger),
				this.refs.popup,
				this.state.popupVisible
			)
		});
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.value !== this.props.value || nextProps.dateFormat !== this.props.dateFormat) {
			const value = Util.value2Moment(nextProps.value, nextProps.dateFormat);
			this.setState({
				value,
				textFieldValue: value.format(nextProps.dateFormat)
			});
		}
	}

	componentDidMount() {
		Event.addEvent(window, 'mousedown', this.mousedownHandle);
	}

	componentWillUnmount() {
		Event.removeEvent(window, 'mousedown', this.mousedownHandle);
	}

	render() {

		const {className, style, name, placeholder, dateFormat} = this.props;
		const {value, textFieldValue, popupVisible} = this.state;

		return (
			<div className={`date-picker ${className}`}
			     style={style}>

				<TextField ref="trigger"
				           className="date-picker-field"
				           name={name}
				           placeholder={placeholder}
				           value={textFieldValue}
				           iconCls="fa fa-calendar"
				           readOnly={true}
				           onChange={this.textFieldChangeHandle}/>

				<div ref="popup"
				     className={`date-picker-popup ${popupVisible ? '' : 'hidden'}`}>
					{

					}
				</div>

			</div>
		);
	}
};

DatePicker.propTypes = {

	className: PropTypes.string,
	style: PropTypes.object,

	name: PropTypes.string,

	// timestamp
	value: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.object]),
	placeholder: PropTypes.string,
	dateFormat: PropTypes.string

};

DatePicker.defaultProps = {

	className: '',
	style: null,

	name: '',
	value: new Date().getTime(),
	placeholder: 'Date',
	dateFormat: 'YYYY-MM-DD'

};