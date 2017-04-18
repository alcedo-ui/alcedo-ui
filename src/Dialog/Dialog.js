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
    className: PropTypes.string,

    title: PropTypes.string,
    desc: PropTypes.string,
    buttonBool: PropTypes.array,

    onHide: PropTypes.func,
    onSure: PropTypes.func
};

Dialog.defaultProps = {
    className: 'hide',

    title: 'Dialog',
    desc: 'here is the dialog description.',
    buttonBool: [true, true]
};