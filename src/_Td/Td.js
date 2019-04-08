/**
 * @file Td component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import HorizontalAlign from '../_statics/HorizontalAlign';

import Util from '../_vendors/Util';

class Td extends Component {

    static Align = HorizontalAlign;

    constructor(props, ...restArgs) {
        super(props, ...restArgs);
    }

    stringContentRenderer = (data, template) => {

        if (!data) {
            return template;
        }

        if (/\$\{.+\}/.test(template)) { // handle replacement in template
            let result = template;
            for (let key in data) {
                result = result.replace(new RegExp('\\$\\{' + key + '\\}', 'g'), data[key]);
            }
            return result;
        } else { // show prop value directly
            return data[template];
        }

    };

    handleRenderer = () => {

        const {renderer, rowIndex, colIndex, data} = this.props;

        switch (typeof renderer) {
            case 'string':
                return this.stringContentRenderer(data, renderer);
            case 'function':
                return renderer(data, rowIndex, colIndex);
            default:
                return renderer;
        }

    };

    handleClick = e => {
        const {data, rowIndex, colIndex, disabled, onCellClick} = this.props;
        !disabled && onCellClick && onCellClick(data, rowIndex, colIndex, e);
    };

    render() {

        const {className, style, align, span} = this.props;

        return (
            <td className={classNames({
                [`align-${align}`]: align && align !== HorizontalAlign.LEFT,
                [className]: className
            })}
                style={style}
                colSpan={span || null}
                onClick={this.handleClick}>
                {this.handleRenderer()}
            </td>
        );

    }
}

Td.propTypes = {

    className: PropTypes.string,
    style: PropTypes.object,

    rowIndex: PropTypes.number,
    colIndex: PropTypes.number,

    data: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    renderer: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    align: PropTypes.oneOf(Util.enumerateValue(HorizontalAlign)),
    span: PropTypes.number,

    isChecked: PropTypes.bool,
    disabled: PropTypes.bool,

    onRowClick: PropTypes.func,
    onCellClick: PropTypes.func

};

Td.defaultProps = {

    rowIndex: 0,
    colIndex: 0,

    isChecked: false,
    disabled: false

};

export default Td;
