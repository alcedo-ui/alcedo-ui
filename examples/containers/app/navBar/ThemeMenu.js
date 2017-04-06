import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as actions from 'reduxes/actions';
import Event from 'vendors/Event';

import DropdownMenu from 'components/dropdown/DropdownMenu';
import ThemeThumbnail from 'components/theme/ThemeThumbnail';

import 'sass/containers/app/navBar/themeMenu/ThemeMenu.scss';
import 'sass/containers/app/navBar/themeMenu/ThemeMenuDark.scss';
import 'sass/containers/app/navBar/themeMenu/ThemeMenuLight.scss';

class ThemeMenu extends Component {

    constructor(props) {

        super(props);

        this.state = {
            dropdownMenuVisible: false
        };

        this.themeChangeHandle = this::this.themeChangeHandle;
        this.mousedownHandle = this::this.mousedownHandle;

    }

    themeChangeHandle(themeName) {
        this.props.switchTheme(themeName);
    }

    mousedownHandle(e) {
        this.setState({
            dropdownMenuVisible: Event.triggerPopupEventHandle(
                e.target,
                this.refs.button,
                require('react-dom').findDOMNode(this.refs.dropdownMenu),
                this.state.dropdownMenuVisible
            )
        });
    }

    componentDidMount() {
        Event.addEvent(document, 'mousedown', this.mousedownHandle);
    }

    componentWillUnmount() {
        Event.removeEvent(document, 'mousedown', this.mousedownHandle);
    }

    render() {

        const {$isDesktop, $themeList, $themeName} = this.props;
        const {dropdownMenuVisible} = this.state;

        return (
            <div className="theme-menu">

                <div ref="button"
                     className="toggle-button">

                    {
                        $isDesktop ?
                            <div>
                                Theme
                                <i className="fa fa-angle-down dropdown-icon"
                                   aria-hidden="true"></i>
                            </div>
                            :
                            <i className="fa fa-paint-brush mobile-dropdown-icon"
                               aria-hidden="true"></i>
                    }

                </div>

                <DropdownMenu ref="dropdownMenu"
                              className="theme-dropdown-menu floatfix"
                              isActivated={dropdownMenuVisible}>

                    <div className="theme-thumbnail-wrapper">
                        {
                            $themeList.map((item, index) => {
                                return (
                                    <ThemeThumbnail key={index}
                                                    name={item.name}
                                                    isActivated={item.name == $themeName}
                                                    onChange={this.themeChangeHandle}/>
                                );
                            })
                        }
                    </div>

                </DropdownMenu>

            </div>
        );

    }
}

ThemeMenu.propTypes = {

    $isDesktop: PropTypes.bool,

    $themeList: PropTypes.array,
    $themeName: PropTypes.string,

    switchTheme: PropTypes.func

};

function mapStateToProps(state, ownProps) {
    return {

        $isDesktop: state.device.isDesktop,

        $themeList: state.theme.themeList,
        $themeName: state.theme.themeName

    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ThemeMenu);