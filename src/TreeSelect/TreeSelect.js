/**
 * @file TreeSelect component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Dropdown from '../Dropdown';
import Tree from '../Tree';
import Theme from '../Theme';
import Tip from '../Tip';

import Util from '../_vendors/Util';
import Event from '../_vendors/Event';
import TreeCalculation from '../_vendors/TreeCalculation';
import SelectMode from '../_statics/SelectMode';

export default class TreeSelect extends Component {

    static SelectMode = SelectMode;
    static Theme = Theme;

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.state = {
            value: props.value,
            popupVisible: false,
            path: props.selectMode === SelectMode.SINGLE_SELECT ?
                TreeCalculation.calPath(props.value, props.data, props) : undefined
        };

        this.closePopup = ::this.closePopup;
        this.getTriggerValue = ::this.getTriggerValue;
        this.nodeSelectHandler = ::this.nodeSelectHandler;
        this.changeHandler = ::this.changeHandler;
        this.popupClosedHandler = ::this.popupClosedHandler;

    }

    closePopup() {
        this.refs.dropdown.closePopup();
    }

    getTriggerValue(props = this.props) {

        const {data, selectMode, placeholder, triggerRenderer, renderer, displayField, valueField} = props,
            {value, path} = this.state,

            isMultiSelect = selectMode === SelectMode.MULTI_SELECT;

        if (!value) {
            return placeholder;
        }

        if (triggerRenderer) {
            return triggerRenderer(value, path);
        }

        if (isMultiSelect) {
            return value.length > 0 ?
                value.length + ' selected'
                :
                placeholder;
        }

        let result = [];

        function addNode(node, i) {
            result.push(
                renderer ?
                    <div key={2 * i + 1}
                         className="tree-select-trigger-value-node">
                        {renderer(node, path.slice(0, i + 1))}
                    </div>
                    :
                    Util.getTextByDisplayField(node, displayField, valueField)
            );
        }

        addNode(data, -1);
        if (path) {
            for (let i = 0, len = path.length; i < len; i++) {

                result.push(
                    <i key={2 * i}
                       className="fa fa-angle-right tree-select-trigger-value-separator"/>
                );

                addNode(path[i].value, i);

            }
        }

        return result;

    }

    nodeSelectHandler(value, path) {

        if (this.props.selectMode !== SelectMode.SINGLE_SELECT) {
            return;
        }

        this.setState({
            path
        });

    }

    changeHandler(value) {

        const {autoClose} = this.props;
        if (autoClose) {
            this.closePopup();
        }

        this.setState({
            value
        }, () => {
            const {onChange} = this.props;
            onChange && onChange(value);
        });

    }

    popupClosedHandler(e) {
        this.setState({
            popupVisible: false
        }, () => {
            const {onClosePopup} = this.props;
            onClosePopup && onClosePopup(e);
        });
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.value !== this.props.value) {
            this.setState({
                value: nextProps.value
            });
        }
    }

    render() {

        const {

                className, popupClassName, style, name, popupTheme, data, renderer,
                selectMode, valueField, displayField, descriptionField,
                onItemTouchTap, popupChildren,

                // not passing down these props
                disableTouchRipple, onTriggerMouseOver, onTriggerMouseOut,

                ...restProps

            } = this.props,
            {value, popupVisible} = this.state,

            triggerClassName = (popupVisible ? ' activated' : '') + (value ? '' : ' empty'),
            triggerValue = this.getTriggerValue();

        return (
            <div ref="dropdownSelect"
                 className={'tree-select' + (className ? ' ' + className : '')}
                 style={style}>

                {
                    name ?
                        <input type="hidden"
                               name={name}
                               value={Util.getValueByValueField(value, valueField, displayField)}/>
                        :
                        null
                }

                <Dropdown {...restProps}
                          ref="dropdown"
                          triggerClassName={triggerClassName}
                          popupClassName={'tree-select-popup' + (popupClassName ? ' ' + popupClassName : '')}
                          popupTheme={popupTheme}
                          triggerValue={triggerValue}
                          onClosePopup={this.popupClosedHandler}>

                    <div className="tree-select-list-scroller"
                         onWheel={e => {
                             Event.wheelHandler(e, this.props);
                         }}>

                        <Tree className="tree-select-list"
                              theme={popupTheme}
                              selectMode={selectMode}
                              data={data}
                              value={value}
                              valueField={valueField}
                              displayField={displayField}
                              descriptionField={descriptionField}
                              renderer={renderer}
                              onItemTouchTap={onItemTouchTap}
                              onNodeSelect={this.nodeSelectHandler}
                              onChange={this.changeHandler}/>

                    </div>

                    {popupChildren}

                </Dropdown>

            </div>
        );

    }
};

TreeSelect.propTypes = {

    /**
     * The CSS class name of the root element.
     */
    className: PropTypes.string,

    /**
     * The class name of the popup element.
     */
    popupClassName: PropTypes.string,

    /**
     * Override the styles of the root element.
     */
    style: PropTypes.object,

    /**
     * Override the styles of the popup element.
     */
    popupStyle: PropTypes.object,

    /**
     * The theme.
     */
    theme: PropTypes.oneOf(Util.enumerateValue(Theme)),

    /**
     * The theme.
     */
    popupTheme: PropTypes.oneOf(Util.enumerateValue(Theme)),

    /**
     * The name of the dropDownSelect.
     */
    name: PropTypes.string,

    /**
     * The value of the dropDownSelect.
     */
    value: PropTypes.any,

    /**
     * The placeholder of the dropDownSelect.
     */
    placeholder: PropTypes.string,

    rightIconCls: PropTypes.string,

    /**
     * The options data.
     */
    data: PropTypes.shape({

        /**
         * The CSS class name of the tree node.
         */
        className: PropTypes.string,

        /**
         * Override the styles of the tree node.
         */
        style: PropTypes.object,

        /**
         * The theme of the tree button.
         */
        theme: PropTypes.oneOf(Util.enumerateValue(Theme)),

        /**
         * The text value of the tree button.Type can be string or number.
         */
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

        /**
         * The tree node's display text. Type can be string, number or bool.
         */
        text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

        /**
         * The desc value of the tree node. Type can be string or number.
         */
        desc: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

        /**
         * If true,the tree node will be disabled.
         */
        disabled: PropTypes.bool,

        /**
         * If true,the button will be have loading effect.
         */
        isLoading: PropTypes.bool,

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

        children: PropTypes.array,

        /**
         * You can create a complicated renderer callback instead of value and desc prop.
         */
        itemRenderer: PropTypes.func,

        /**
         * Callback function fired when a tree node touch-tapped.
         */
        onTouchTap: PropTypes.func

    }),

    /**
     * The invalid message of dropDownSelect.
     */
    invalidMsg: PropTypes.string,

    /**
     * If true,the dropDownSelect will be disabled.
     */
    disabled: PropTypes.bool,

    /**
     * The select mode of listItem.Can be normal,checkbox.
     */
    selectMode: PropTypes.oneOf(Util.enumerateValue(SelectMode)),

    /**
     * The value field name in data. (default: "value")
     */
    valueField: PropTypes.string,

    /**
     * The display field name in data. (default: "text")
     */
    displayField: PropTypes.string,

    /**
     * The description field name in data. (default: "desc")
     */
    descriptionField: PropTypes.string,

    /**
     * The message of the dropDownSelect.
     */
    infoMsg: PropTypes.string,

    /**
     * Use this function to format the options's text.
     */
    textFormat: PropTypes.func,

    /**
     * If true,the drop-down box automatically closed after selection.
     */
    autoClose: PropTypes.bool,

    shouldPreventContainerScroll: PropTypes.bool,

    popupChildren: PropTypes.any,

    renderer: PropTypes.func,

    triggerRenderer: PropTypes.func,

    /**
     * Callback function fired when the button is touch-tapped.
     */
    onItemTouchTap: PropTypes.func,

    /**
     * Callback function fired when the popup is closed.
     */
    onClosePopup: PropTypes.func,

    /**
     * Callback function fired when a menu item is selected.
     */
    onChange: PropTypes.func,

    onWheel: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    onTriggerMouseOver: PropTypes.func,
    onTriggerMouseOut: PropTypes.func

};

TreeSelect.defaultProps = {

    className: null,
    popupClassName: null,
    style: null,
    popupStyle: null,
    theme: Theme.DEFAULT,
    popupTheme: Theme.DEFAULT,

    name: null,
    value: null,
    placeholder: 'Please select ...',
    rightIconCls: 'fa fa-angle-down',
    data: null,
    invalidMsg: null,
    disabled: false,
    selectMode: SelectMode.SINGLE_SELECT,

    valueField: 'value',
    displayField: 'text',
    descriptionField: 'desc',

    infoMsg: null,
    autoClose: true,

    shouldPreventContainerScroll: true,

    popupChildren: null

};