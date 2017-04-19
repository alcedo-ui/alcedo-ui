import React, {Component, PropTypes} from 'react';

export default class ArrowStepItem extends Component {

    constructor(props) {

        super(props);

        this.clickHandle = this::this.clickHandle;

    }

    clickHandle() {

        const {activatedStep, finishedStep, index, onTouchTap} = this.props;

        activatedStep !== index && finishedStep >= index && onTouchTap(index);

    }

    render() {

        const {className, style, activatedStep, finishedStep, index, value, isFirst, isLast} = this.props;

        return (
            <div className={`arrow-step-item ${isFirst ? 'first' : ''} ${isLast ? 'last' : ''}
                ${activatedStep == index ? ' activated' : (finishedStep >= index ? ' finished' : '')}
                ${className ? className : ''}`}
                 style={style}
                 onClick={this.clickHandle}>

                <div className="number">
                    {index + 1}
                </div>

                <div className="title">
                    {value.title}
                </div>

                {
                    isFirst
                        ? null
                        : (
                        <div className="triangle-wrapper triangle-wrapper-left">
                            <div className={`triangle-top
                                    ${activatedStep == index ? ' activated' : (finishedStep >= index ? ' finished' : '')}`}>
                            </div>
                            <div className={`triangle-bottom
                                    ${activatedStep == index ? ' activated' : (finishedStep >= index ? ' finished' : '')}`}>
                            </div>
                        </div>
                    )
                }

                {
                    isLast
                        ? null
                        : (
                        <div className="triangle-wrapper triangle-wrapper-right">
                            <div className={`triangle-middle
                                    ${activatedStep == index ? ' activated' : (finishedStep >= index ? ' finished' : '')}`}>
                            </div>
                        </div>
                    )
                }

            </div>
        );

    }
};

ArrowStepItem.propTypes = {

    className: PropTypes.string,
    style: PropTypes.object,

    index: PropTypes.number,
    activatedStep: PropTypes.number,
    finishedStep: PropTypes.number,
    value: PropTypes.object,

    isFirst: PropTypes.bool,
    isLast: PropTypes.bool,

    onTouchTap: PropTypes.func

};

ArrowStepItem.defaultProps = {

    className: '',
    style: null,

    index: 0,
    activatedStep: 0,
    finishedStep: 0,
    value: null,

    isFirst: true,
    isLast: true

};