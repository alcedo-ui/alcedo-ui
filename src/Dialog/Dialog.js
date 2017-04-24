/**
 * Created by DT314 on 2017/4/6.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';

import FlatButton from '../FlatButton/FlatButton';

import './dialog.css';

export default class Dialog extends Component {
    constructor(props) {
        super();
    }

    render() {
        const {className, title, desc, buttonBool, onHide, onSure} = this.props;

        return (
            <div className={'dialog-cover ' + className}>
                <div className="dialog-shadow"
                     onClick={onHide}></div>
                <div className="dialog-box">
                    <h3>{title}</h3>
                    <p>{desc}</p>
                    <div className="dialog-button-group">
                        <FlatButton className={'button ' + (buttonBool[0] ? '' : 'disappear')}
                                    onTouchTap={onHide}>cancel</FlatButton>
                        <FlatButton className={'button ' + (buttonBool[1] ? '' : 'disappear')}
                                    onTouchTap={onSure}>commit</FlatButton>
                    </div>
                </div>
            </div>
        );
    }

};

Dialog.propTypes = {

    /**
     * The CSS class name of the root element.
     */
    className: PropTypes.string,

    /**
     * The title to display on the Dialog. Could be number, string, element or an array containing these types.
     */
    title: PropTypes.string,

    /**
     * The description of the dialog box.
     */
    desc: PropTypes.string,

    /**
     * if [true, true],the cancel and commit buttons will be display.
     */
    buttonBool: PropTypes.array,

    /**
     * Callback function fired when the Dialog is requested to be closed by a click outside the Dialog or on the buttons.
     */
    onHide: PropTypes.func,

    /**
     * Callback function fired when the click the commit button.
     */
    onSure: PropTypes.func
};

Dialog.defaultProps = {

    className: 'hide',

    title: 'Dialog',
    desc: 'Here is the dialog description.',
    buttonBool: [true, true]

};