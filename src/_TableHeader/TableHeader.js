/**
 * @file TableHeader component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import TableHeaderSortIcon from '../_TableHeaderSortIcon';

import PureRender from '../_vendors/PureRender';

@PureRender
class TableHeader extends Component {

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.headerRenderer = ::this.headerRenderer;
        this.touchTapHandler = ::this.touchTapHandler;

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
        const {sortable, onSort} = this.props;
        sortable && onSort && onSort();
    }

    render() {

        const {
                className, style, header, hidden,
                sortable, sortProp, sort, sortAscIconCls, sortDescIconCls
            } = this.props,

            finalHeader = this.headerRenderer(),

            tableHeaderClassName = classNames('table-header', {
                sortable: sortable,
                hidden: hidden,
                [className]: className
            });

        return (
            <th className={tableHeaderClassName}
                style={style}
                title={typeof header === 'string' ? header : null}
                onTouchTap={this.touchTapHandler}>

                <div className="table-header-inner">

                    {finalHeader}

                    {
                        sortable ?
                            <TableHeaderSortIcon sort={sort}
                                                 sortProp={sortProp}
                                                 sortAscIconCls={sortAscIconCls}
                                                 sortDescIconCls={sortDescIconCls}/>
                            :
                            null
                    }

                </div>

            </th>
        );

    }
};

process.env.NODE_ENV !== 'production' && (TableHeader.propTypes = {

    className: PropTypes.string,
    style: PropTypes.object,

    header: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    colIndex: PropTypes.number,
    sortable: PropTypes.bool,
    sortProp: PropTypes.string,
    sort: PropTypes.object,
    sortAscIconCls: PropTypes.string,
    sortDescIconCls: PropTypes.string,
    hidden: PropTypes.bool,

    onSort: PropTypes.func

});

TableHeader.defaultProps = {
    colIndex: 0,
    sortable: false,
    hidden: false
};

export default TableHeader;