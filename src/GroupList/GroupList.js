/**
 * @file GroupList component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';

import List from '../List';
import Theme from '../Theme';
import Tip from '../Tip';

import Util from '../_vendors/Util';
import Event from '../_vendors/Event';
import SelectMode from '../_statics/SelectMode';

export default class GroupList extends Component {

    static SelectMode = SelectMode;
    static SEPARATOR = List.SEPARATOR;

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.state = {
            value: this.initValue(props)
        };

        this.initValue = ::this.initValue;
        this.wheelHandler = ::this.wheelHandler;

    }

    initValue(props) {

        if (!props) {
            return;
        }

        const {value, selectMode} = props;

        if (!selectMode) {
            return;
        }

        if (value) {
            return value;
        }

        switch (selectMode) {
            case GroupList.SelectMode.MULTI_SELECT:
                return [];
            case GroupList.SelectMode.SINGLE_SELECT:
                return null;
            default:
                return value;
        }

    }

    wheelHandler(e) {
        const {shouldPreventContainerScroll, onWheel} = this.props;
        shouldPreventContainerScroll && Event.preventContainerScroll(e);
        onWheel && onWheel(e);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.value !== this.state.value) {
            this.setState({
                value: this.initValue(nextProps)
            });
        }
    }

    render() {

        const {

                children, className, style, data, disabled,

                ...restProps

            } = this.props,
            {value} = this.state,

            listClassName = (className ? ' ' + className : '');

        return (
            <div className={'group-list' + listClassName}
                 style={style}
                 disabled={disabled}
                 onWheel={this.wheelHandler}>

                {
                    data && data.length > 0 ?
                        data.map((item, index) => {

                            if (item === GroupList.SEPARATOR) {
                                return <div key={index}
                                            className="list-separator"></div>;
                            }

                            return (
                                <div key={index}>
                                    <div className="group-list-group-title">{item.name}</div>
                                    <List {...restProps}
                                          data={item.children}/>
                                </div>
                            );

                        })
                        :
                        null
                }

                {children}

            </div>
        );

    }
};

GroupList.propTypes = {

    /**
     * The CSS class name of the root element.
     */
    className: PropTypes.string,

    /**
     * Override the styles of the root element.
     */
    style: PropTypes.object,

    /**
     * The theme.
     */
    theme: PropTypes.oneOf(Util.enumerateValue(Theme)),

    /**
     * Children passed into the ListItem.
     */
    data: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.shape({

        // group name
        name: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

        children: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.shape({

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

            /**
             * You can create a complicated renderer callback instead of value and desc prop.
             */
            itemRenderer: PropTypes.func,

            /**
             * Callback function fired when a list item touch-tapped.
             */
            onTouchTap: PropTypes.func

        }), PropTypes.string, PropTypes.number]))

    }), PropTypes.symbol])).isRequired,

    /**
     * The id field name in data. (default: "id")
     */
    idField: PropTypes.string,

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
     * If true, the list will be disabled.
     */
    disabled: PropTypes.bool,

    /**
     * If true, the list will be at loading status.
     */
    isLoading: PropTypes.bool,

    /**
     * The mode of listItem.Can be normal,checkbox.
     */
    selectMode: PropTypes.oneOf(Util.enumerateValue(SelectMode)),

    shouldPreventContainerScroll: PropTypes.bool,

    /**
     * You can create a complicated renderer callback instead of value and desc prop.
     */
    renderer: PropTypes.func,

    /**
     * Callback function fired when the list-item select.
     */
    onItemTouchTap: PropTypes.func,

    /**
     * Callback function fired when the list changed.
     */
    onChange: PropTypes.func,

    /**
     * Callback function fired when wrapper wheeled.
     */
    onWheel: PropTypes.func

};

GroupList.defaultProps = {

    className: null,
    style: null,
    theme: Theme.DEFAULT,

    data: [],

    idField: 'id',
    valueField: 'value',
    displayField: 'text',
    descriptionField: 'desc',
    disabled: false,
    selectMode: SelectMode.NORMAL,
    shouldPreventContainerScroll: true

};