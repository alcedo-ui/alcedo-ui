/**
 * @file Tf component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import HorizontalAlign from '../_statics/HorizontalAlign';
import SortingType from '../_statics/SortingType';

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

        const {colIndex, data, renderer} = this.props;

        switch (typeof renderer) {
            case 'function':
                return renderer(data, colIndex);
            default:
                return renderer;
        }

    };

    render() {

        const {className, style, align, span, onCellClick} = this.props;

        return (
            <td className={classNames({
                [`align-${align}`]: align && align !== HorizontalAlign.LEFT,
                [className]: className
            })}
                style={style}
                colSpan={span || null}
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

    renderer: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    align: PropTypes.oneOf(Util.enumerateValue(HorizontalAlign)),
    span: PropTypes.number,

    onCellClick: PropTypes.func

};

Tf.defaultProps = {
    colIndex: 0,
    align: HorizontalAlign.LEFT
};

export default Tf;
