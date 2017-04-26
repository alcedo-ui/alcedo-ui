import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class TableCell extends Component {

	constructor(props) {
		super(props);
	}

	render() {

		const {className, style, data} = this.props;

		return (
			<td className={className}
			    style={style}>
				{data}
			</td>
		);

	}
};

TableCell.propTypes = {

	className: PropTypes.string,
	style: PropTypes.object,

	data: PropTypes.any

};

TableCell.defaultProps = {

	className: '',
	style: null,

	data: ''

};