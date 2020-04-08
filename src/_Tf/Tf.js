/**
 * @file Tf component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';

// Statics
import HorizontalAlign from '../_statics/HorizontalAlign';
import SortingType from '../_statics/SortingType';

// Vendors
import classNames from 'classnames';
import Util from '../_vendors/Util';

class Tf extends Component {

    static Align = HorizontalAlign;
    static SortingType = SortingType;

    constructor(props, ...restArgs) {
        super(props, ...restArgs);
    }

    /**
     * handle th content render
     * @returns {*}
     */
    handleRender = () => {

        const {colIndex, data, scrollEl, renderer} = this.props;

        switch (typeof renderer) {
            case 'function':
                return renderer(data, colIndex, scrollEl);
            default:
                return renderer;
        }

    };

    /**
     * handle th content render
     * @returns {*}
     */
    handleTitle = () => {

        const {colIndex, data, scrollEl, title} = this.props;

        switch (typeof title) {
            case 'function':
                return title(data, colIndex, scrollEl);
            default:
                return title;
        }

    };

    render() {

        const {className, style, align, noWrap, span, onCellClick} = this.props;

        return (
            <td className={classNames({
                [`align-${align}`]: align && align !== HorizontalAlign.LEFT,
                'no-wrap': noWrap,
                [className]: className
            })}
                style={style}
                colSpan={span || null}
                title={this.handleTitle()?.toString() || null}
                onClick={onCellClick}>
                {this.handleRender()}
            </td>
        );

    }
}

Tf.propTypes = {

    className: PropTypes.string,
    style: PropTypes.object,

    colIndex: PropTypes.number,
    data: PropTypes.array,
    title: PropTypes.any,

    renderer: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    align: PropTypes.oneOf(Util.enumerateValue(HorizontalAlign)),
    span: PropTypes.number,
    noWrap: PropTypes.bool,
    scrollEl: PropTypes.object,

    onCellClick: PropTypes.func

};

Tf.defaultProps = {
    colIndex: 0,
    align: HorizontalAlign.LEFT,
    noWrap: false
};

export default Tf;
