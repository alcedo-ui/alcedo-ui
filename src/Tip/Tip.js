import React, {Component} from 'react';
import PropTypes from 'prop-types';

import SubtreeContainer from '../_SubtreeContainer';
import TipBody from './TipBody';
import Theme from '../Theme';

import './Tip.css';

export default class Tip extends Component {

    constructor(props) {

        super(props);

        this.state = {
            visible: !!props.visible
        };

        this.requestCloseHandle = this::this.requestCloseHandle;

    }

    requestCloseHandle() {

        const {onRequestClose} = this.props;

        this.setState({
            visible: false
        }, () => {
            onRequestClose && onRequestClose();
        });

    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.visible !== this.state.visible) {
            this.setState({
                visible: !!nextProps.visible
            });
        }
    }

    render() {

        const {visible} = this.state;

        return (
            <SubtreeContainer visible={visible}>
                <TipBody {...this.props}
                         onRequestClose={this.requestCloseHandle}/>
            </SubtreeContainer>
        );

    }

}

Tip.propTypes = {

    /**
     * The CSS class name of the root element.
     */
    className: PropTypes.string,

    /**
     * Override the styles of the root element.
     */
    style: PropTypes.object,

    /**
     * Override the styles of the root element.
     */
    text: PropTypes.string,

    /**
     * This is the DOM element that will be used to set the position of the popover.
     */
    triggerEl: PropTypes.object,

    /**
     * If true,the popover is visible.
     */
    visible: PropTypes.bool,

    /**
     * The popover theme.Can be primary,highlight,success,warning,error.
     */
    theme: PropTypes.oneOf(Object.keys(Theme).map(key => Theme[key])),

    /**
     * The popover alignment.Possible values are: "bottom-center", "top-center", "bottom-right", "top-right", "bottom-left", "top-left", "left" and "right".
     */
    position: PropTypes.string,

    /**
     * Callback function fired when the popover is requested to be closed.
     */
    onRequestClose: PropTypes.func

};

Tip.defaultProps = {

    className: '',
    style: null,

    text: '',
    triggerEl: null,
    visible: false,
    theme: Theme.DEFAULT,
    position: 'bottom-center'

};
