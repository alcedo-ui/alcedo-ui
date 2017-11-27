/**
 * @file Popup component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';

import Portal from '../Portal';
import PopupBody from '../_PopupBody';
import Position from '../_statics/Position';
import TriggerMode from '../_statics/TriggerMode';

export default class Popup extends Component {

    static Position = Position;
    static TriggerMode = TriggerMode;

    constructor(props, ...restArgs) {
        super(props, ...restArgs);
    }

    render() {
        return this.props.visible ?
            <Portal>
                <PopupBody {...this.props}/>
            </Portal>
            :
            null;
    }

};

Popup.propTypes = PopupBody.propTypes;
Popup.defaultProps = PopupBody.defaultProps;