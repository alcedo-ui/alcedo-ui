import React, {Component} from 'react';
import PropTypes from 'prop-types';

import PopupContainer from '../_PopupContainer';
import PopupBody from './PopupBody';
import Theme from '../Theme';

import './Popup.css';

export default class Popup extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <PopupContainer>
                <PopupBody {...this.props}
                           onRequestClose={this.requestCloseHandle}/>
            </PopupContainer>
        );
    }

};

Popup.Position = {
    LEFT: 'left',
    RIGHT: 'right'
};

Popup.propTypes = {

    /**
     * The CSS class name of the root element.
     */
    className: PropTypes.string,

    /**
     * Override the styles of the root element.
     */
    style: PropTypes.object,

    /**
     * This is the DOM element that will be used to set the position of the popover.
     */
    triggerEl: PropTypes.object,

    /**
     * If true,the popover is visible.
     */
    visible: PropTypes.bool,

    /**
     * If true,the popover will have a triangle on the top of the DOM element.
     */
    hasTriangle: PropTypes.bool,

    /**
     * The popover theme.Can be primary,highlight,success,warning,error.
     */
    theme: PropTypes.oneOf(Object.keys(Theme).map(key => Theme[key])),

    /**
     * The popover alignment.The value can be Popup.Position.LEFT or Popup.Position.RIGHT.
     */
    position: PropTypes.oneOf(Object.keys(Popup.Position).map(key => Popup.Position[key])),

    /**
     * Callback function fired when the popover is requested to be closed.
     */
    onRequestClose: PropTypes.func

};

Popup.defaultProps = {

    className: '',
    style: null,

    triggerEl: null,
    visible: false,
    hasTriangle: true,
    theme: Theme.DEFAULT,
    position: Popup.Position.LEFT

};