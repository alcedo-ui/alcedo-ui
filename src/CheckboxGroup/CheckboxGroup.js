/**
 * @file CheckboxGroup component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';

// Components
import Checkbox from '../Checkbox';

// Statics
import Theme from '../Theme';
import Position from '../_statics/Position';

// Vendors
import cloneDeep from 'lodash/cloneDeep';
import isArray from 'lodash/isArray';
import classNames from 'classnames';
import Util from '../_vendors/Util';
import ComponentUtil from '../_vendors/ComponentUtil';

class CheckboxGroup extends Component {

    static Theme = Theme;

    static getDerivedStateFromProps(props, state) {
        return {
            prevProps: props,
            value: ComponentUtil.getDerivedState(props, state, 'value')
        };
    }

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.state = {
            value: props.value
        };

    }

    handleChange = item => {

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

    };

    render() {

        const {data} = this.props;

        if (!data) {
            return null;
        }

        const {
                className, style, theme, name, disabled, idProp, valueField, labelField,
                uncheckedIconCls, checkedIconCls, indeterminateIconCls,
                onCheck, onUncheck
            } = this.props,
            {value} = this.state;

        return (
            <div className={classNames('checkbox-group', {
                [className]: className
            })}
                 style={style}
                 disabled={disabled}>
                {
                    data && data.map((item, index) =>
                        <Checkbox key={item && idProp in item ? item[idProp] : index}
                                  className={item.className ? item.className : ''}
                                  style={item.style}
                                  theme={item.theme || theme}
                                  uncheckedIconCls={item.uncheckedIconCls || uncheckedIconCls}
                                  checkedIconCls={item.checkedIconCls || checkedIconCls}
                                  indeterminateIconCls={item.indeterminateIconCls || indeterminateIconCls}
                                  name={name}
                                  label={Util.getTextByDisplayField(item, labelField, valueField)}
                                  value={Util.getValueByValueField(item, valueField, labelField)}
                                  disabled={disabled || item.disabled}
                                  checked={value && value.findIndex(v => v.value === item.value) > -1}
                                  tip={item.tip}
                                  tipPosition={item.tipPosition}
                                  onChange={() => this.handleChange(item)}
                                  onCheck={e => onCheck && onCheck(item, e)}
                                  onUncheck={e => onUncheck && onUncheck(item, e)}/>
                    )
                }
            </div>
        );

    }
}

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
    valueField: PropTypes.string,
    labelField: PropTypes.string,

    uncheckedIconCls: PropTypes.string,
    checkedIconCls: PropTypes.string,
    indeterminateIconCls: PropTypes.string,

    onChange: PropTypes.func,

    onCheck: PropTypes.func,

    onUncheck: PropTypes.func

};

CheckboxGroup.defaultProps = {

    theme: Theme.DEFAULT,

    disabled: false,
    idProp: 'id',
    valueField: 'value',
    labelField: 'label'

};

export default CheckboxGroup;
