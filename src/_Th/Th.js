/**
 * @file Th component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import TableHeaderSortIcon from '../_TableHeaderSortIcon';

class Th extends Component {

    constructor(props, ...restArgs) {
        super(props, ...restArgs);
    }

    handleRender = () => {

        const {renderer, colIndex} = this.props;

        switch (typeof renderer) {
            case 'function':
                return renderer(colIndex);
            default:
                return renderer;
        }

    };

    handleClick = () => {
        const {sortable, onSort} = this.props;
        sortable && onSort && onSort();
    };

    render() {

        const {
                className, style, renderer, hidden,
                sortable, sortProp, sort, sortAscIconCls, sortDescIconCls
            } = this.props,

            tableHeaderClassName = classNames('th', {
                sortable: sortable,
                hidden: hidden,
                [className]: className
            });

        return (
            <th className={tableHeaderClassName}
                style={style}
                title={typeof renderer === 'string' ? renderer : null}
                onClick={this.handleClick}>

                <div className="th-inner">

                    {this.handleRender()}

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
}

Th.propTypes = {

    className: PropTypes.string,
    style: PropTypes.object,

    renderer: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    colIndex: PropTypes.number,
    sortable: PropTypes.bool,
    sortProp: PropTypes.string,
    sort: PropTypes.object,
    sortAscIconCls: PropTypes.string,
    sortDescIconCls: PropTypes.string,
    hidden: PropTypes.bool,

    onSort: PropTypes.func

};

Th.defaultProps = {
    colIndex: 0,
    sortable: false,
    hidden: false
};

export default Th;
