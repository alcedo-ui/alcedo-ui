/**
 * @file CheckboxGroup component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import cloneDeep from 'lodash/cloneDeep';
import isArray from 'lodash/isArray';
import classNames from 'classnames';

import Checkbox from '../Checkbox';
import Theme from '../Theme';

import Position from '../_statics/Position';

import PureRender from '../_vendors/PureRender';
import Util from '../_vendors/Util';

@PureRender
class CheckboxGroup extends Component {

    static Theme = Theme;

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.state = {
            value: props.value
        };

        this.changeHandler = ::this.changeHandler;

    }

    changeHandler(item) {

        let value = cloneDeep(this.state.value);

        if (!value || !isArray(value)) {
            value = [item];
        } else {

            const index = value.findIndex(v => v.value === item.value);

            if (index > -1) {
                value.splice(index, 1);
            } else {
                value.push(item);
            }

        }

        this.setState({
            value
        }, () => {
            const {disabled, onChange} = this.props;
            !disabled && onChange && onChange(value);
        });

    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.value && nextProps.value !== this.state.value) {
            this.setState({
                value: nextProps.value
            });
        }
    }

    render() {

        const {data} = this.props;

        if (!data) {
            return null;
        }

        const {
                className, style, theme, name, disabled, idProp, uncheckedIconCls, checkedIconCls, indeterminateIconCls,
                onCheck, onUncheck
            } = this.props,
            {value} = this.state,

            groupClassName = classNames('checkbox-group', {
                [className]: className
            });

        return (
            <div className={groupClassName}
                 style={style}
                 disabled={disabled}>
                {
                    data && data.map((item, index) =>
                        <Checkbox key={idProp in item ? item[idProp] : index}
                                  className={item.className ? item.className : ''}
                                  style={item.style}
                                  theme={item.theme || theme}
                                  uncheckedIconCls={item.uncheckedIconCls || uncheckedIconCls}
                                  checkedIconCls={item.checkedIconCls || checkedIconCls}
                                  indeterminateIconCls={item.indeterminateIconCls || indeterminateIconCls}
                                  name={name}
                                  label={item.label}
                                  value={item.value}
                                  disabled={disabled || item.disabled}
                                  checked={value && value.findIndex(v => v.value === item.value) > -1}
                                  tip={item.tip}
                                  tipPosition={item.tipPosition}
                                  onChange={() => {
                                      this.changeHandler(item);
                                  }}
                                  onCheck={() => {
                                      onCheck && onCheck(item);
                                  }}
                                  onUncheck={() => {
                                      onUncheck && onUncheck(item);
                                  }}/>
                    )
                }
            </div>
        );

    }
};

if (process.env.NODE_ENV === 'development') {

    const PropTypes = require('prop-types');

    CheckboxGroup.propTypes = {

        className: PropTypes.string,
        style: PropTypes.object,

        /**
         * The CheckboxGroup theme.
         */
        theme: PropTypes.oneOf(Util.enumerateValue(Theme)),

        name: PropTypes.string,

        data: PropTypes.arrayOf(PropTypes.shape({

            className: PropTypes.string,
            style: PropTypes.object,
            theme: PropTypes.oneOf(Util.enumerateValue(Theme)),

            label: PropTypes.any,
            value: PropTypes.any,

            disabled: PropTypes.bool,

            tip: PropTypes.any,
            tipPosition: PropTypes.oneOf(Util.enumerateValue(Position))

        })).isRequired,
        value: PropTypes.array,
        disabled: PropTypes.bool,

        idProp: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

        uncheckedIconCls: PropTypes.string,
        checkedIconCls: PropTypes.string,
        indeterminateIconCls: PropTypes.string,

        onChange: PropTypes.func,

        onCheck: PropTypes.func,

        onUncheck: PropTypes.func

    };

}

CheckboxGroup.defaultProps = {

    theme: Theme.DEFAULT,

    disabled: false,
    idProp: 'id'

};

export default CheckboxGroup;