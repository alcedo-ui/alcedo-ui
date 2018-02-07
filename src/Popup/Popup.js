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

        this.state = {
            visible: props.visible
        };

        this.requestCloseHandler = ::this.requestCloseHandler;

    }

    reDraw() {
        this.forceUpdate();
    }

    requestCloseHandler(e) {
        this.setState({
            visible: false
        }, () => {
            const {onRequestClose} = this.props;
            onRequestClose && onRequestClose(e);
        });
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.visible !== this.state.visible) {
            this.setState({
                visible: nextProps.visible
            });
        }
    }

    render() {

        const {visible} = this.state;

        return (
            <Portal visible={visible}>
                <PopupBody {...this.props}
                           visible={visible}
                           onRequestClose={this.requestCloseHandler}/>
            </Portal>
        );

    }

};

Popup.propTypes = PopupBody.propTypes;
Popup.defaultProps = PopupBody.defaultProps;

export default Popup;