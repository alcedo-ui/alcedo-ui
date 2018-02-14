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
            enter: false,
            exited: true
        };

        this.enterHandler = ::this.enterHandler;
        this.exitHandler = ::this.exitHandler;
        this.exitedHandler = ::this.exitedHandler;

    }

    reDraw() {
        this.forceUpdate();
    }

    enterHandler() {
        this.setState({
            enter: true
        });
    }

    exitHandler() {
        this.setState({
            enter: false
        });
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
            {enter, exited} = this.state;

        return (
            <Transition appear
                        in={visible}
                        timeout={250}
                        onEnter={this.enterHandler}
                        onExit={this.exitHandler}
                        onExited={this.exitedHandler}>
                <Portal visible={!exited}>
                    <PopupBody {...this.props}
                               visible={enter}/>
                </Portal>
            </Transition>
        );

    }

};

Popup.propTypes = PopupBody.propTypes;
Popup.defaultProps = PopupBody.defaultProps;

export default Popup;