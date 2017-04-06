import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';

import 'sass/components/router/LinkAnchor.scss';

export default class LinkAnchor extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const {className, style, href, disabled, children} = this.props;

        return (
            <Link className={`link-anchor ${className}`}
                  style={style}
                  to={href}
                  disabled={disabled}>

                {children}

            </Link>
        );

    }
};

LinkAnchor.propTypes = {

    className: PropTypes.string,
    style: PropTypes.object,

    href: PropTypes.string.isRequired,
    disabled: PropTypes.bool

};

LinkAnchor.defaultProps = {

    className: '',
    style: null,

    disabled: false

};