import React, {Component} from 'react';
import PropTypes from 'prop-types';

import SortIcon from './SortIcon';

export default class TableHeader extends Component {

    constructor(props) {

        super(props);

        this.headerRenderer = this::this.headerRenderer;
        this.clickHandle = this::this.clickHandle;

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

    clickHandle() {
        const {sortable, onSort} = this.props;
        sortable && onSort && onSort();
    }

    render() {

        const {className, style, header, sortable, sort} = this.props,
            finalHeader = this.headerRenderer();

        return (
            <th className={className}
                style={style}
                title={typeof header === 'string' ? header : null}
                onClick={this.clickHandle}>

                {finalHeader}

                {
                    sortable ?
                        <SortIcon sort={sort}/>
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

    onSort: PropTypes.func

};

TableHeader.defaultProps = {

    className: '',
    style: null,

    header: '',
    colIndex: 0,
    sortable: false,
    sort: null

};