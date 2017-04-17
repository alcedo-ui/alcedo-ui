import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as actions from 'reduxes/actions';

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

                <i className="fa fa-bars menu-toggle-button"
                   aria-hidden="true"
                   onClick={this.menuToggleButtonMousedownHandle}></i>

                <div className="brand-name">
                    Alcedo UI Examples
                </div>

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