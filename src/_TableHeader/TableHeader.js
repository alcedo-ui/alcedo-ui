import React, {Component} from 'react';
import PropTypes from 'prop-types';

import TableHeaderSortIcon from '../_TableHeaderSortIcon';

import './TableHeader.css';

export default class TableHeader extends Component {

    constructor(props) {

        super(props);

        this.headerRenderer = this::this.headerRenderer;
        this.touchTapHandler = this::this.touchTapHandler;

    }

    headerRenderer() {

        const {header, colIndex} = this.props;

        switch (typeof header) {
            case 'function':
                return header(colIndex);
            default:
                return header;
        }

    }

    touchTapHandler(e) {
        e.preventDefault();
        setTimeout(() => {
            const {sortable, onSort} = this.props;
            sortable && onSort && onSort();
        }, 0);
    }

    render() {

        const {className, style, header, sortable, sort, hidden} = this.props,
            finalHeader = this.headerRenderer();

        return (
            <th className={'table-header' + (hidden ? ' hidden' : '') + (className ? ' ' + className : '')}
                style={style}
                title={typeof header === 'string' ? header : null}
                onTouchTap={this.touchTapHandler}>

                {finalHeader}

                {
                    sortable ?
                        <TableHeaderSortIcon sort={sort}/>
                        :
                        null
                }

            </th>
        );

    }
};

TableHeader.propTypes = {

    className: PropTypes.string,
    style: PropTypes.object,

    header: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    colIndex: PropTypes.number,
    sortable: PropTypes.bool,
    sort: PropTypes.object,
    hidden: PropTypes.bool,

    onSort: PropTypes.func

};

TableHeader.defaultProps = {

    className: '',
    style: null,

    header: '',
    colIndex: 0,
    sortable: false,
    sort: null,
    hidden: false

};