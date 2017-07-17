import React, {Component} from 'react';
import PropTypes from 'prop-types';

import IconButton from '../IconButton';

export default class TableHeaderSortIcon extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const {className, style, sort} = this.props,
            iconClassName = (sort && sort.type < 0 ? ' desc' : '') + (className ? ' ' + className : '');

        return sort ?
            (
                <IconButton className={'table-header-sort-icon' + iconClassName}
                            style={style}
                            iconCls="fa fa-angle-up"/>
            )
            :
            <div className="table-header-sort-icon">—</div>;

    }
};

TableHeaderSortIcon.propTypes = {

    className: PropTypes.string,
    style: PropTypes.object,

    sort: PropTypes.object

};

TableHeaderSortIcon.defaultProps = {

    className: '',
    style: null,

    sort: null

};