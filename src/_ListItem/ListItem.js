import React, {Component} from 'react';
import PropTypes from 'prop-types';

import RaisedButton from '../RaisedButton';
import Theme from '../Theme';

import './ListItem.css';

export default class ListItem extends Component {

    constructor(props) {

        super(props);

        this.displayValue = this::this.displayValue;

    }

    displayValue(data = this.props.data) {

        if (!data) {
            return;
        }

        const {valueField, displayField} = this.props;

        switch (typeof data) {

            case 'object': {

                if (data[displayField]) {
                    return data[displayField];
                }

                return data[valueField];

            }

            default:
                return data;

        }

    }

    render() {

        const {data, disabled} = this.props;

        return typeof data === 'object' ?
            (
                !data.renderer && data.desc ?
                    <RaisedButton {...data}
                                  className={`list-item ${data.className ? data.className : ''}`}
                                  value={this.displayValue(data)}
                                  disabled={disabled || data.disabled}
                                  renderer={(props) => {
                                      return (
                                          <div className="list-item-content">
                                              <div className="list-item-content-value">{props.value}</div>
                                              <div className="list-item-content-desc">{props.desc}</div>
                                          </div>
                                      );
                                  }}/>
                    :
                    data.renderer(data)
            )
            :
            <RaisedButton className="list-item"
                          value={this.displayValue(data)}
                          disabled={disabled}/>;

    }
};

ListItem.propTypes = {

    /**
     * Children passed into the _ListItem.
     */
    data: PropTypes.oneOfType([PropTypes.shape({

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
         * The text value of the list button. Type can be string or number.
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
         * Callback function fired when a list item touch-tapped.
         */
        onTouchTap: PropTypes.func

    }), PropTypes.string, PropTypes.number]).isRequired,

    /**
     * The value field name in data. (default: "value")
     */
    valueField: PropTypes.string,

    /**
     * The display field name in data. (default: "text")
     */
    displayField: PropTypes.string,

    /**
     * If true, the list will be disabled.
     */
    disabled: PropTypes.bool

};

ListItem.defaultProps = {

    data: null,

    valueField: 'value',
    displayField: 'text',
    disabled: false

};