/**
 * @file Popup component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import Transition from 'react-transition-group/Transition';

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
            exited: true
        };

        this.exitedHandler = ::this.exitedHandler;

    }

    reDraw() {
        this.forceUpdate();
    }

    exitedHandler() {
        this.setState({
            exited: true
        });
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.visible) {
            this.setState({
                exited: false
            });
        }
    }

    render() {

        const {visible} = this.props,
            {exited} = this.state;

        return (
            <Transition in={visible}
                        timeout={250}
                        onExited={this.exitedHandler}>
                <Portal visible={!exited}>
                    <PopupBody {...this.props}/>
                </Portal>
            </Transition>
        );

    }

};

Popup.propTypes = PopupBody.propTypes;
Popup.defaultProps = PopupBody.defaultProps;

export default Popup;