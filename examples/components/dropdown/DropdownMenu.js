import React, {Component, PropTypes} from 'react';

import 'sass/components/dropdown/DropdownMenu.scss';

export default class DropdownMenu extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const {children, className, style, isActivated} = this.props;

        return (
            <div className={`dropdown-menu ${isActivated ? 'activated' : ''} ${className}`}
                 style={style}>
                {children}
            </div>
        );

    }
};

DropdownMenu.propTypes = {

    className: PropTypes.string,
    style: PropTypes.object,

    isActivated: PropTypes.bool

};

DropdownMenu.defaultProps = {

    className: '',
    style: null,

    isActivated: false

};