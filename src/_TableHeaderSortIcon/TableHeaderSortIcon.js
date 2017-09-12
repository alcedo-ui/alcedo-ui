import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './TableHeaderSortIcon.css';

export default class TableHeaderSortIcon extends Component {

    constructor(props, ...restArgs) {
        super(props, ...restArgs);
    }

    render() {

        const {sort} = this.props;

        return (
            <div className={'table-header-sort-icon-wrapper' + (sort ? (sort.type > 0 ? ' asc' : ' desc') : '')}>
                <i className={`table-header-sort-icon fa fa-angle-up up`}
                   aria-hidden="true"></i>
                <i className={`table-header-sort-icon fa fa-angle-down down`}
                   aria-hidden="true"></i>
            </div>
        );

    }
};

TableHeaderSortIcon.propTypes = {
    sort: PropTypes.object
};

TableHeaderSortIcon.defaultProps = {
    sort: null
};