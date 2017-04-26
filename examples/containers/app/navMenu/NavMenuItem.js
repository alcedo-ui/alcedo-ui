import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router';

import * as actions from 'reduxes/actions';

import TouchRipple from 'dist/TouchRipple';

class NavMenuItem extends Component {

    constructor(props) {

        super(props);

        this.menuHeight = 50;
        this.subMenuIndent = 20;

        this.menuMousedownHandle = this::this.menuMousedownHandle;

    }

    menuMousedownHandle() {

        const {$expandMenuName, options, expandMenu} = this.props;

        if ($expandMenuName === options.text) {
            expandMenu('');
        } else {
            expandMenu(options.text);
        }

    }

    render() {

        const {$expandMenuName, options, depth} = this.props;
        const {menuHeight, subMenuIndent} = this;

        const collapsed = $expandMenuName !== options.text,
            hasChildren = options.children && options.children.length > 0;

        return (
            <div className={`nav-menu-item ${collapsed ? 'collapsed' : ''} ${hasChildren ? 'hasChildren' : ''}`}>

                {/* title or link */}
                {
                    hasChildren
                        ? (
                        <div className="nav-menu-item-title"
                             disabled={options.disabled}
                             onMouseDown={this.menuMousedownHandle}>

                            <div className="nav-menu-item-name">
                                {options.text}
                            </div>

                            <i className={`fa fa-angle-down nav-menu-item-collapse-button
                                ${collapsed ? 'collapsed' : ''}`}
                               aria-hidden="true"></i>

                            <TouchRipple/>

                        </div>
                    )
                        : (
                        <Link className="nav-menu-item-link"
                              to={options.route}
                              disabled={options.disabled}
                              activeClassName="router-link-active">

                            <div className="nav-menu-item-name"
                                 style={{marginLeft: depth * subMenuIndent}}>
                                {options.text}
                            </div>

                            <TouchRipple/>

                        </Link>
                    )
                }

                {/* sub menu */}
                {
                    hasChildren
                        ? (
                        <div className="nav-menu-children"
                             style={{height: options.children.length * menuHeight}}>
                            {
                                options.children.map((item, index) => {
                                    return (
                                        <NavMenuItem key={index}
                                                     options={item}
                                                     depth={depth + 1}/>
                                    );
                                })
                            }
                        </div>
                    )
                        : null
                }

            </div>
        );

    }
}
;

NavMenuItem.propTypes = {

    $expandMenuName: PropTypes.string,

    options: PropTypes.object,
    depth: PropTypes.number,

    expandMenu: PropTypes.func

};

NavMenuItem.defaultProps = {

    $expandMenuName: '',

    options: null,
    depth: 0

};

function mapStateToProps(state, ownProps) {
    return {
        $expandMenuName: state.navMenu.expandMenuName
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NavMenuItem);