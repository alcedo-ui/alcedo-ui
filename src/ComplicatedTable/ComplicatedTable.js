/**
 * @file ComplicatedTable component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Header from '../_ComplicatedTableHeader';
import Content from '../_ComplicatedTableContent';
import Footer from '../_ComplicatedTableFooter';
import Pagination from '../_ComplicatedTablePagination';

import SelectMode from '../_statics/SelectMode';
import SelectAllMode from '../_statics/SelectAllMode';
import SortType from '../_statics/SortType';

class ComplicatedTable extends Component {

    static SelectMode = SelectMode;
    static SelectAllMode = SelectAllMode;
    static SortType = SortType;

    constructor(props, ...restArgs) {
        super(props, ...restArgs);
    }

    render() {

        const {className, style} = this.props,

            tableClassName = classNames('complicated-table', {
                [className]: className
            });

        return (
            <div className={tableClassName}
                 style={style}>

                <Header/>
                <Content/>
                <Footer/>
                <Pagination/>

            </div>
        );
    }
}

ComplicatedTable.propTypes = {

    /**
     * The CSS class name of the root element.
     */
    className: PropTypes.string,

    /**
     * Override the styles of the root element.
     */
    style: PropTypes.object

};

ComplicatedTable.defaultProps = {};

export default ComplicatedTable;
