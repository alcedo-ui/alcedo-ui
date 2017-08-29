/**
 * Created by Wendy on 2017/5/16.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {findDOMNode} from 'react-dom';

import Popup from '../Popup';
// import CascaderList from './CascaderListItem';
import CascaderListItem from './CascaderListItem';
import RaisedButton from '../RaisedButton';
import Theme from '../Theme';

import Util from '../_vendors/Util';
import Dom from '../_vendors/Dom';

import './CascaderField.css';

export default class CascaderField extends Component {

    constructor(props) {

        super(props);

        this.rootSymbol = Symbol('root');

        this.state = {
            popupVisible: false,
            isAbove: false,
            value: props.value,
            path: this.calPath(props.value)
        };

        this.togglePopup = this::this.togglePopup;
        this.closePopup = this::this.closePopup;
        this.isAbove = this::this.isAbove;
        this.calValue = this::this.calValue;
        this.calPath = this::this.calPath;
        this.popupRenderHandle = this::this.popupRenderHandle;
        this.changeHandler = this::this.changeHandler;

    }

    togglePopup() {
        this.setState({
            popupVisible: !this.state.popupVisible
        });
    }

    closePopup() {
        this.setState({
            popupVisible: false
        });
    }

    isAbove() {

        const cascader = this.refs.cascader;

        if (!this.popupHeight || !cascader) {
            return false;
        }

        const {top} = Dom.getOffset(cascader),
            scrollTop = Dom.getScrollTop();

        if (top + this.triggerHeight + this.popupHeight - scrollTop > window.innerHeight) {
            return true;
        }

        return false;

    }

    calValue(path, props = this.props) {

        if (!path || path.length < 1) {
            return;
        }

        const {valueField, displayField, separator} = props;
        return path.map(item => Util.getTextByDisplayField(item.value, displayField, valueField))
            .join(` ${separator} `);

    }

    traverseData(node, value, props, index = 0) {

        if (!node || node.length < 1 || !value) {
            return;
        }

        const {valueField, displayField} = props;

        // find in children
        if (node.children && node.children.length > 0) {

            for (let i = 0, len = node.children.length; i < len; i++) {

                // traverse child node
                const path = this.traverseData(node.children[i], value, props, i);

                // if finded in child node
                if (path) {

                    if (node[this.rootSymbol]) {
                        return path;
                    }

                    path.unshift({
                        value: node,
                        index: index
                    });
                    return path;

                }

            }
        }

        if (Util.getValueByValueField(node, valueField, displayField)
            === Util.getValueByValueField(value, valueField, displayField)) {
            return [{
                value: node,
                index
            }];
        }

        return;

    }

    calPath(value, props = this.props) {

        const {data} = props;

        if (!value || !data) {
            return;
        }

        return this.traverseData({
            [this.rootSymbol]: true,
            children: data
        }, value, props);

    }

    calDepth(data, path) {

        let list = data,
            depth = 0;

        for (let item of path) {
            if (item.index in list) {
                list = list[item.index].children;
                depth++;
            } else {
                return depth;
            }
        }

        if (list && list.length > 0) {
            return depth + 1;
        }

        return depth;

    }

    popupRenderHandle(popupEl) {

        this.popupEl = findDOMNode(popupEl);
        this.popupHeight = this.popupEl.offsetHeight;

        const isAbove = this.isAbove();

        if (isAbove !== this.state.isAbove) {
            this.setState({
                isAbove
            });
        }

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

    componentDidMount() {
        this.triggerEl = findDOMNode(this.refs.trigger);
        this.triggerHeight = this.triggerEl.clientHeight;
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.value !== this.props.value) {
            this.setState({
                value: nextProps.value,
                path: this.calPath(nextProps.value, nextProps)
            });
        }
    }

    render() {

        const {
                className, style, popupClassName, popupStyle, listWidth, theme,
                disabled, valueField, displayField, name, data, placeholder
            } = this.props,

            {value, popupVisible, isAbove, path} = this.state,

            triggerClassName = (popupVisible ? ' activated' : '') + (isAbove ? ' above' : ' blow')
                + (value ? '' : ' empty'),

            popupRenderClassName = (isAbove ? ' above' : ' blow') + (popupClassName ? ' ' + popupClassName : '');

        return (

            <div ref="cascader"
                 className={`cascader ${className}`}
                 style={style}>

                {
                    name ?
                        <input type="hidden"
                               name={name}
                               value={Util.getValueByValueField(value, valueField, displayField)}/>
                        :
                        null
                }

                <RaisedButton ref="trigger"
                              className={'cascader-trigger' + triggerClassName}
                              rightIconCls={`fa fa-angle-${isAbove ? 'up' : 'down'} cascader-trigger-icon`}
                              disabled={disabled}
                              value={this.calValue(path) || placeholder}
                              theme={theme}
                              onTouchTap={this.togglePopup}/>

                <Popup ref="popup"
                       className={'cascader-popup' + popupRenderClassName}
                       style={popupStyle}
                       visible={popupVisible}
                       triggerEl={this.triggerEl}
                       hasTriangle={false}
                       position={isAbove ? Popup.Position.TOP_LEFT : Popup.Position.BOTTOM_LEFT}
                       onRender={this.popupRenderHandle}
                       onRequestClose={this.closePopup}>

                    <CascaderListItem listData={data}
                                  listWidth={listWidth}
                                  path={path}
                                  valueField={valueField}
                                  displayField={displayField}
                                  depth={this.calDepth(data, path)}
                                  onChange={this.changeHandler}/>

                </Popup>

            </div>
        );
    }
}

CascaderField.propTypes = {

    /**
     * The CSS class name of the root element.
     */
    className: PropTypes.string,

    /**
     * Override the styles of the root element.
     */
    style: PropTypes.object,

    /**
     * The className of popup container.
     */
    popupClassName: PropTypes.string,

    /**
     * Override the styles of the popup container.
     */
    popupStyle: PropTypes.object,

    /**
     * The width of cascader list-item.
     */
    listWidth: PropTypes.number,

    /**
     * The theme of button.Can be primary,highlight,success,warning,error.
     */
    theme: PropTypes.oneOf(Util.enumerateValue(Theme)),

    /**
     * The name of the hidden input.
     */
    name: PropTypes.string,

    /**
     * The cascader list data.
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
         * The desc value of the list button. Type can be string or number.
         */
        desc: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

        /**
         * If true, the list button will be disabled.
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
         * You can create a complicated renderer callback instead of value and desc prop.
         */
        renderer: PropTypes.func,

        /**
         * The children of list-item.
         */
        children: PropTypes.array,

        /**
         * Callback function fired when a list item touch-tapped.
         */
        onTouchTap: PropTypes.func

    }), PropTypes.string, PropTypes.number])),

    /**
     * The placeholder of CascaderField field.
     */
    placeholder: PropTypes.string,

    /**
     * If true,the cascader will be disabled.
     */
    disabled: PropTypes.bool,

    /**
     * The value field name in data. (default: "value")
     */
    valueField: PropTypes.string,

    /**
     * The display field name in data. (default: "text")
     */
    displayField: PropTypes.string,

    /**
     * The connector of cascader value.
     */
    separator: PropTypes.string

};

CascaderField.defaultProps = {

    className: '',
    style: null,
    popupClassName: '',
    popupStyle: null,
    listWidth: 200,
    theme: Theme.DEFAULT,

    name: '',
    data: [],
    placeholder: 'Please select ...',
    disabled: false,

    valueField: 'value',
    displayField: 'text',

    separator: '/'

};