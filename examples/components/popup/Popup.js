import React, {Component, PropTypes} from 'react';

import 'sass/components/popup/Popup.scss';

export default class Popup extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const {children, className, style, disabled, hidden} = this.props;

        return (
            <div className={`popup ${hidden ? 'hidden' : ''} ${className}`}
                 style={style}
                 disabled={disabled}>

                <div className="triangle"></div>

                <div className="content">
                    {children}
                </div>

            </div>
        );

    }
};

Popup.propTypes = {

    className: PropTypes.string,
    style: PropTypes.object,

    disabled: PropTypes.bool,
    hidden: PropTypes.bool

};

Popup.defaultProps = {

    className: '',
    style: null,

    disabled: false,
    hidden: true

};