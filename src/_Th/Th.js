/**
 * @file Th component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import ThSortIcon from '../_ThSortIcon';

class Th extends Component {

    constructor(props, ...restArgs) {
        super(props, ...restArgs);
    }

    handleRender = () => {

        const {colIndex, data, renderer} = this.props;

        switch (typeof renderer) {
            case 'function':
                return renderer(data, colIndex);
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
            className, style, renderer,
            sortable, sortProp, sort, sortAscIconCls, sortDescIconCls
        } = this.props;

        return (
            <th className={classNames('th', {
                sortable: sortable,
                [className]: className
            })}
                style={style}
                title={typeof renderer === 'string' ? renderer : null}
                onClick={this.handleClick}>

                <div className="th-inner">

                    {this.handleRender()}

                    {
                        sortable ?
                            <ThSortIcon sort={sort}
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
    data: PropTypes.array,
    sortable: PropTypes.bool,
    sortProp: PropTypes.string,
    sort: PropTypes.object,
    sortAscIconCls: PropTypes.string,
    sortDescIconCls: PropTypes.string,

    onSort: PropTypes.func

};

Th.defaultProps = {

    colIndex: 0,
    sortable: false,

    sortAscIconCls: 'fas fa-angle-up',
    sortDescIconCls: 'fas fa-angle-down'

};

export default Th;
