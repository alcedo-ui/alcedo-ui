/**
 * @file ComplicatedTableHeader component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import SelectMode from '../_statics/SelectMode';
import SelectAllMode from '../_statics/SelectAllMode';
import SortType from '../_statics/SortType';

class ComplicatedTableHeader extends Component {

    static SelectMode = SelectMode;
    static SelectAllMode = SelectAllMode;
    static SortType = SortType;

    constructor(props, ...restArgs) {
        super(props, ...restArgs);
    }

    render() {

        const {className, style} = this.props,

            tableClassName = classNames('complicated-table-header', {
                [className]: className
            });

        return (
            <div className={tableClassName}
                 style={style}>

            </div>
        );
    }
}

ComplicatedTableHeader.propTypes = {

    /**
     * The CSS class name of the root element.
     */
    className: PropTypes.string,

    /**
     * Override the styles of the root element.
     */
    style: PropTypes.object

};

ComplicatedTableHeader.defaultProps = {};

export default ComplicatedTableHeader;
