import React, {Component, PropTypes} from 'react';

export default class RoundStepBack extends Component {

    constructor(props) {

        super(props);

        this.clickHandle = this.clickHandle.bind(this);

    }

    clickHandle() {
        this.props.currentStep > 0 && this.props.onClick && this.props.onClick();
    }

    render() {

        const {currentStep, style} = this.props;
        const {clickHandle} = this;

        return (
            <div className={'stepBack' + (currentStep > 0 ? ' active' : '')}
                 style={style}>

                <div className="round"
                     onClick={clickHandle}>
                    <i className="fa fa-chevron-left"
                       aria-hidden="true"></i>
                </div>

                <div className="title">
                    Back
                </div>

            </div>
        );

    }
};

RoundStepBack.propTypes = {

    currentStep: PropTypes.number,

    onClick: PropTypes.func

};

RoundStepBack.defaultProps = {
    currentStep: 0
};