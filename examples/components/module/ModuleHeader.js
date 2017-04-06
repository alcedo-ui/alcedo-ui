import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';

import 'sass/components/module/ModuleHeader.scss';

export default class ModuleHeader extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const {className, style, menu, children} = this.props;

        return (
            <div className={`module-header ${className}`}
                 style={style}>

                <div className="module-header-inner">

                    {
                        menu.map((item, index) => {
                            return (
                                <Link key={index}
                                      to={item.route}
                                      activeClassName="router-link-active">
                                    {item.text}
                                </Link>
                            );
                        })
                    }

                    {children}

                </div>

            </div>
        );

    }
};

ModuleHeader.propTypes = {

    className: PropTypes.string,
    style: PropTypes.object,

    menu: PropTypes.arrayOf(PropTypes.shape({

        // 路由显示
        text: PropTypes.string.isRequired,

        // 路由
        route: PropTypes.string.isRequired

    }))

};

ModuleHeader.defaultProps = {

    className: '',
    style: null,

    menu: []

};