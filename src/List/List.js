import React, {Component} from 'react';
import PropTypes from 'prop-types';

import RaisedButton from '../RaisedButton';
import Theme from '../Theme';

import './List.css';

export default class List extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const {children, className, style, items, disabled} = this.props;

        return (
            <div className={`list ${className}`}
                 disabled={disabled}
                 style={style}>

                {
                    items.length > 0
                        ? (
                        items.map((item, index) => {
                            return typeof item === 'object' ?
                                <RaisedButton {...item}
                                              key={index}
                                              className={`list-item ${item.className ? item.className : ''}`}
                                              rightIconCls={item.iconPosition}
                                              disabled={disabled || item.disabled}/>
                                :
                                <RaisedButton key={index}
                                              className="list-item"
                                              value={item}
                                              disabled={disabled}/>;
                        })
                    )
                        : null
                }

                {children}

            </div>
        );

    }
};

List.propTypes = {

    /**
     * The CSS class name of the root element.
     */
    className: PropTypes.string,

    /**
     * Override the styles of the root element.
     */
    style: PropTypes.object,

    /**
     * If true, the list will be disabled.
     */
    disabled: PropTypes.bool,

    /**
     * Children passed into the ListItem.
     */
    items: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.shape({

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
         * Use this property to display an icon.
         */
        iconCls: PropTypes.string,

        /**
         * The position of the icon.
         */
        iconPosition: PropTypes.string,

        /**
         * You can create a complicated renderer callback instead of value prop.
         */
        renderer: PropTypes.func,

        /**
         * Callback function fired when a list item touch-tapped.
         */
        onTouchTap: PropTypes.func

    }), PropTypes.string, PropTypes.number])).isRequired

};

List.defaultProps = {

    className: '',
    style: null,

    disabled: false,

    items: []

};