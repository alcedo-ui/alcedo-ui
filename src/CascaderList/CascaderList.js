/**
 * @file CascaderList component
 * @author wendy(wendy.wei@derbysoft.com)
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';

import CascaderListItem from '../_CascaderListItem/CascaderListItem';
import Theme from '../Theme';
import Tip from '../Tip';

import Util from '../_vendors/Util';
import CascaderCalculation from '../_vendors/CascaderCalculation';

export default class CascaderList extends Component {

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.state = {
            value: props.value,
            path: CascaderCalculation.calPath(props.value, {
                ...props,
                data: props.items
            })
        };

        this.changeHandler = ::this.changeHandler;

    }


    changeHandler(path) {

        const value = path[path.length - 1].value;

        this.setState({
            path,
            value
        }, () => {
            const {onChange} = this.props;
            onChange && onChange(value, path);
        });

    }

    render() {
        const {className, style, listWidth, items, valueField, displayField} = this.props;
        const {path, value} = this.state;

        return (
            <div className={`cascader-list ${className}`}
                 style={style}>
                <CascaderListItem listData={items}
                                  value={value}
                                  path={path}
                                  listWidth={listWidth}
                                  valueField={valueField}
                                  displayField={displayField}
                                  depth={CascaderCalculation.calDepth(items, path)}
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
    items: PropTypes.oneOfType([

        // not grouped
        PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.shape({

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
            theme: PropTypes.oneOf(Object.keys(Theme).map(key => Theme[key])),

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
            onTouchTap: PropTypes.func

        }), PropTypes.string, PropTypes.number])),

        // grouped
        PropTypes.array

    ]).isRequired,

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

    className: '',
    style: null,
    listWidth: 200,

    items: [],

    valueField: 'value',
    displayField: 'text'

};