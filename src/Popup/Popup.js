/**
 * @file Popup component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';

import Portal from '../Portal';
import PopupBody from '../_PopupBody';
import Theme from '../Theme';

import Position from '../_statics/Position';
import TriggerMode from '../_statics/TriggerMode';

class Popup extends Component {

    static Position = Position;
    static TriggerMode = TriggerMode;
    static Theme = Theme;

    constructor(props, ...restArgs) {
        super(props, ...restArgs);
    }

    reDraw() {
        this.forceUpdate();
    }

    render() {

        const {visible} = this.props;

        return (
            <Portal visible={visible}>
                <PopupBody {...this.props}/>
            </Portal>
        );

    }

};

Popup.propTypes = PopupBody.propTypes;
Popup.defaultProps = PopupBody.defaultProps;

export default Popup;