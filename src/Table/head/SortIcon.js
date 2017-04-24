import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class SortIcon extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const {className, style} = this.props;

        return (
            <span className={`sort-icon ${className}`}
                  style={style}>
				<i className="fa fa-angle-up asc-icon"
                   aria-hidden="true"></i>
				<i className="fa fa-angle-down desc-icon"
                   aria-hidden="true"></i>
			</span>
        );

    }
};

SortIcon.propTypes = {

    className: PropTypes.string,
    style: PropTypes.object,

    sort: PropTypes.object

};

SortIcon.defaultProps = {

    className: '',
    style: null,

    sort: null

};