import React, {Component, PropTypes} from 'react';

export default class RoundStep extends Component {

    constructor(props) {

        super(props);

        this.clickHandle = this.clickHandle.bind(this);

    }

    clickHandle() {
        (this.props.currentStep > this.props.index || this.props.finishedStep >= this.props.index)
        && this.props.onClick && this.props.onClick();
    }

    render() {

        const {className, style, currentStep, finishedStep, index, value, isFirst, isLast} = this.props;

        return (
            <div className={`step ${finishedStep >= index ? 'activated' : ''} ${currentStep == index ? 'current' : ''}
            ${currentStep > index ? 'success' : ''} ${isFirst ? 'first' : ''} ${isLast ? 'last' : ''} ${className}`}
                 style={style}>

                <div className="bgBar"></div>
                <div className="bgRound"></div>

                {
                    !isFirst && (finishedStep >= index || currentStep >= index) ?
                        <div className="leftBar"></div>
                        :
                        null
                }

                {
                    !isLast && (finishedStep > index || currentStep > index) ?
                        <div className="rightBar"></div>
                        :
                        null
                }

                <div className="round"
                     onClick={this.clickHandle}>
                    {
                        currentStep > index ?
                            <i className="fa fa-check"
                               aria-hidden="true"></i>
                            :
                            (index + 1)
                    }
                </div>

                <div className="title">
                    {value.title}
                </div>

            </div>
        );

    }
};

RoundStep.propTypes = {

    className: PropTypes.string,
    style: PropTypes.object,

    currentStep: PropTypes.number,
    finishedStep: PropTypes.number,
    index: PropTypes.number,
    value: PropTypes.object,
    isFirst: PropTypes.bool,
    isLast: PropTypes.bool,

    onClick: PropTypes.func

};

RoundStep.defaultProps = {

    className: '',
    style: null,

    currentStep: 0,
    finishedStep: 0,
    index: 0,
    value: {},
    isFirst: true,
    isLast: false

};