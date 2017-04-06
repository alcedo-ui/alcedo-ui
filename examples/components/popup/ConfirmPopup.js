import React, {Component, PropTypes} from 'react';

import Button from 'components/button/Button';

import 'sass/components/popup/ConfirmPopup.scss';

export default class ConfirmPopup extends Component {

    constructor(props) {
        super(props);

        this.saveClickHandle=this::this.saveClickHandle;
        this.cancelClickHandle=this::this.cancelClickHandle;
    }

    saveClickHandle(){

    }

    cancelClickHandle(){

    }

    render() {

        const {children, className, style, disabled, hidden} = this.props;

        return (
            <div className={`popup ${hidden ? 'hidden' : ''} ${className}`}
                 style={style}>
                <div className="popup-title"></div>

                <div className="popup-content">
                    {children}
                </div>
                <div className="popup-foot">
                    <Button className="save"
                            value="Save"
                            onClick={this.saveClickHandle}
                    />
                    <Button className="cancel"
                            value="Cancel"
                            onClick={this.cancelClickHandle}
                    />
                </div>
            </div>
        );

    }
};

ConfirmPopup.propTypes = {

    className: PropTypes.string,
    style: PropTypes.object,

    disabled: PropTypes.bool,
    hidden: PropTypes.bool

};

ConfirmPopup.defaultProps = {

    className: '',
    style: null,

    disabled: false,
    hidden: true

};