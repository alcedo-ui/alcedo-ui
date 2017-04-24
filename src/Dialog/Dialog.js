/**
 * Created by DT314 on 2017/4/6.
 */
import React, {Component, PropTypes} from 'react';

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
     * The css class name of the root element.
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
     * Whether the button is clickable.
     */
    buttonBool: PropTypes.array,

    /**
     * The function that trigger when click cancel.
     */
    onHide: PropTypes.func,

    /**
     * The function that trigger when click submit.
     */
    onSure: PropTypes.func
};

Dialog.defaultProps = {
    className: 'hide',

    title: 'Dialog',
    desc: 'here is the dialog description.',
    buttonBool: [true, true]
};