/**
 * @file CascaderList component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import CascaderListItem from '../_CascaderListItem/CascaderListItem';
import Theme from '../Theme';
import Tip from '../Tip';

import SelectMode from '../_statics/SelectMode';

import Util from '../_vendors/Util';
import TreeCalculation from '../_vendors/TreeCalculation';

class CascaderList extends Component {

    static SelectMode = SelectMode;
    static Theme = Theme;

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.state = {
            value: props.value,
            path: TreeCalculation.calPath(props.value, {children: props.data}, props)
        };

    }

    changeHandler = path => {

        const value = path[path.length - 1].node;

        this.setState({
            path,
            value
        }, () => {
            const {onChange} = this.props;
            onChange && onChange(value, path);
        });

    };

    render() {

        const {className, style, selectMode, listWidth, data, valueField, displayField} = this.props,
            {path, value} = this.state,

            listClassName = classNames('cascader-list', {
                [className]: className
            });

        return (
            <div className={listClassName}
                 style={style}>
                <CascaderListItem data={data}
                                  value={value}
                                  path={path}
                                  selectMode={selectMode}
                                  listWidth={listWidth}
                                  valueField={valueField}
                                  displayField={displayField}
                                  depth={TreeCalculation.calDepth(data, path)}
                                  onChange={this.changeHandler}/>
            </div>
        );
    }
}

CascaderList.propTypes = {

    /**
     * The CSS class name of the root element.
     */
    className: PropTypes.string,

    /**
     * Override the styles of the root element.
     */
    style: PropTypes.object,

    /**
     * The select mode of CascaderList.
     */
    selectMode: PropTypes.oneOf(Util.enumerateValue(SelectMode)),

    /**
     * The value of CascaderList.
     */
    value: PropTypes.any,

    /**
     * The width of CascaderList.
     */
    listWidth: PropTypes.number,

    /**
     * The item-data of CascaderList.
     */
    data: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.shape({

        /**
         * The CSS class name of the list button.
         */
        className: PropTypes.string,

        /**
         * Override the styles of the list button.
         */
        style: PropTypes.object,

        /**
         * The theme of the list button.
         */
        theme: PropTypes.oneOf(Util.enumerateValue(Theme)),

        /**
         * The text value of the list button.Type can be string or number.
         */
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

        /**
         * The list item's display text. Type can be string, number or bool.
         */
        text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

        /**
         * The desc value of the list button. Type can be string or number.
         */
        desc: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

        /**
         * If true,the list item will be disabled.
         */
        disabled: PropTypes.bool,

        /**
         * If true,the button will be have loading effect.
         */
        isLoading: PropTypes.bool,

        /**
         * If true,the element's ripple effect will be disabled.
         */
        disableTouchRipple: PropTypes.bool,

        /**
         * Use this property to display an icon. It will display on the left.
         */
        iconCls: PropTypes.string,

        /**
         * Use this property to display an icon. It will display on the right.
         */
        rightIconCls: PropTypes.string,

        /**
         * The message of tip.
         */
        tip: PropTypes.string,

        /**
         * The position of tip.
         */
        tipPosition: PropTypes.oneOf(Util.enumerateValue(Tip.Position)),

        /**
         * If true,the item will have center displayed ripple effect.
         */
        rippleDisplayCenter: PropTypes.bool,


        children: PropTypes.array,

        /**
         * You can create a complicated renderer callback instead of value and desc prop.
         */
        itemRenderer: PropTypes.func,

        /**
         * Callback function fired when a list item touch-tapped.
         */
        onClick: PropTypes.func

    }), PropTypes.string, PropTypes.number])),

    /**
     * The value field name in data. (default: "value")
     */
    valueField: PropTypes.string,

    /**
     * The display field name in data. (default: "text")
     */
    displayField: PropTypes.string,

    /**
     * The depth of CascaderList.
     */
    depth: PropTypes.number

};

CascaderList.defaultProps = {

    selectMode: SelectMode.SINGLE_SELECT,

    listWidth: 200,

    valueField: 'value',
    displayField: 'text'

};

export default CascaderList;