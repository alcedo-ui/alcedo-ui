import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as actions from 'reduxes/actions';
import Event from 'vendors/Event';
import Config from 'src/config';

import 'assets/font-awesome/css/font-awesome.min.css';
import 'sass/global.scss';
import 'sass/containers/Root.scss';

class Root extends Component {

    constructor(props) {

        super(props);

        this.resizeHandle = this::this.resizeHandle;

    }

    resizeHandle() {
        window.innerWidth >= Config.desktopMinWidth ?
            (!this.props.$isDesktop && this.props.switchToDesktop())
            :
            (this.props.$isDesktop && this.props.switchToMobile());
    }

    componentDidMount() {
        Event.addEvent(window, 'resize', this.resizeHandle);
    }

    componentWillUnmount() {
        Event.removeEvent(window, 'resize', this.resizeHandle);
    }

    render() {

        const {children, $themeName} = this.props;

        return (
            <div className={`root theme-${$themeName}`}>
                {children}
            </div>
        );

    }

}

Root.propTypes = {

    $isDesktop: PropTypes.bool,

    $themeName: PropTypes.string

};

function mapStateToProps(state, ownProps) {
    return {

        $isDesktop: state.device.isDesktop,

        $themeName: state.theme.themeName

    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Root);