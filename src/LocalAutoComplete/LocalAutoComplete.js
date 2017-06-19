import React, {Component} from 'react';
import PropTypes from 'prop-types';

import TextField from '../TextField';
import Popup from '../Popup';
import List from '../List';
import Theme from '../Theme';

import './LocalAutoComplete.css';

export default class LocalAutoComplete extends Component {

    constructor(props) {

        super(props);

        this.state = {
            popupVisible: false,
            triggerEl: null
        };

        this.changeHandle = this::this.changeHandle;
        this.closePopup = this::this.closePopup;

    }

    changeHandle(value) {
        this.props.onChange(value);
    }

    closePopup() {
        this.setState({
            popupVisible: false
        });
    }

    render() {

        const {className, style, value, data} = this.props;
        const {popupVisible, triggerEl} = this.state;

        return (
            <div className={`auto-complete ${className}`}
                 style={style}>

                <TextField className="trigger-button"
                           value={value}
                           onChange={this.changeHandle}/>

                <Popup visible={popupVisible}
                       triggerEl={triggerEl}
                       onRequestClose={this.closePopup}>
                    <List items={data}/>
                </Popup>

            </div>
        );
    }

};

LocalAutoComplete.propTypes = {

    /**
     * The CSS class name of the root element.
     */
    className: PropTypes.string,

    /**
     * Override the styles of the root element.
     */
    style: PropTypes.object,

    value: PropTypes.string,

    data: PropTypes.arrayOf(PropTypes.shape({

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
         * Callback function fired when a list item touch-tapped.
         */
        onTouchTap: PropTypes.func

    })).isRequired,

    onChange: PropTypes.func

};

LocalAutoComplete.defaultProps = {

    className: '',
    style: {},

    value: '',
    data: []

};