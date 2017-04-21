import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as actions from 'reduxes/actions';

import IconButton from 'dist/IconButton';
import IconAnchor from 'dist/IconAnchor';

import 'sass/containers/app/navBar/brand/Brand.scss';

class Brand extends Component {

    constructor(props) {

        super(props);

        this.menuToggleButtonMousedownHandle = this::this.menuToggleButtonMousedownHandle;

    }

    menuToggleButtonMousedownHandle(e) {
        e.stopPropagation();
        this.props.toggleNavMenu();
    }

    render() {
        return (
            <div className="brand">

                <IconButton className="menu-toggle-button"
                            iconCls="fa fa-bars"
                            onTouchTap={this.menuToggleButtonMousedownHandle}/>

                <div className="brand-name">
                    <IconAnchor className="brand-logo"
                                href="/"
                                target="_self"/>
                    Alcedo-UI Examples
                </div>

                <IconAnchor className="github-icon"
                            iconCls="fa fa-github"
                            href="https://github.com/alcedo-ui/alcedo-ui"/>

            </div>
        );
    }
}

Brand.propTypes = {
    toggleNavMenu: PropTypes.func
};

function mapStateToProps(state, ownProps) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Brand);