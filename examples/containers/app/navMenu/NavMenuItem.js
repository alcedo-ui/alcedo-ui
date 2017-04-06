import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';

import TouchRipple from 'dist/TouchRipple';

export default class NavMenuItem extends Component {

    constructor(props) {

        super(props);

        this.menuMousedownHandle = this::this.menuMousedownHandle;

    }

    menuMousedownHandle() {
        this.props.onTrigger(this.props.index);
    }

    render() {

        const {options} = this.props;

        const hasChildren = options.children && options.children.length > 0;

        return (
            <div className="nav-menu-item">

                <Link className={`nav-menu-item-link ${hasChildren ? 'hasChildren' : ''}`}
                      to={options.route}
                      disabled={options.disabled}
                      activeClassName="router-link-active">

                    {/*<i className={`nav-menu-item-icon ${options.iconCls}`}*/}
                       {/*aria-hidden="true"></i>*/}

                    <div className="nav-menu-item-name">
                        {options.text}
                    </div>

                    <TouchRipple/>

                </Link>

            </div>
        );

    }
};

NavMenuItem.propTypes = {

    options: PropTypes.object,
    index: PropTypes.number,
    activeIndex: PropTypes.number,

    onTrigger: PropTypes.func

};

NavMenuItem.defaultProps = {
    options: null
};