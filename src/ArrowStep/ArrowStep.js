import React, {Component, PropTypes} from 'react';

import ArrowStepItem from './ArrowStepItem';

import './ArrowStep.css';

export default class ArrowStep extends Component {

    constructor(props) {

        super(props);

        this.state = {
            activatedStep: props.activatedStep,
            finishedStep: props.finishedStep
        };

        this.tapHandle = this::this.tapHandle;

    }

    tapHandle(activatedStep) {

        const {onChange} = this.props;

        this.setState({
            activatedStep
        }, () => {
            onChange && onChange({
                activatedStep,
                finishedStep: this.state.finishedStep
            });
        });
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.activatedStep !== this.state.activatedStep
            || nextProps.finishedStep !== this.state.finishedStep) {
            this.setState({
                activatedStep: nextProps.activatedStep,
                finishedStep: nextProps.finishedStep
            });
        }
    }

    render() {

        const {className, style, steps} = this.props;
        const {activatedStep, finishedStep} = this.state;

        return (
            <div className={`arrow-step ${className}`}
                 style={style}>

                {
                    steps.map((item, index) => {
                        return (
                            <ArrowStepItem key={index}
                                           index={index}
                                           className={item.className}
                                           style={{
                                               ...item.style,
                                               width: `${100 / steps.length}%`,
                                               zIndex: steps.length - index
                                           }}
                                           activatedStep={activatedStep}
                                           finishedStep={finishedStep}
                                           value={item}
                                           isFirst={index === 0}
                                           isLast={index === steps.length - 1}
                                           onTouchTap={this.tapHandle}/>
                        );
                    })
                }

            </div>
        );

    }
};

ArrowStep.propTypes = {

    className: PropTypes.string,
    style: PropTypes.object,

    steps: PropTypes.arrayOf(PropTypes.shape({

        className: PropTypes.string,
        style: PropTypes.object,

        title: PropTypes.string

    })).isRequired,

    activatedStep: PropTypes.number,
    finishedStep: PropTypes.number,

    onChange: PropTypes.func

};

ArrowStep.defaultProps = {

    className: '',
    style: null,

    steps: [],

    activatedStep: 0,
    finishedStep: 0

};