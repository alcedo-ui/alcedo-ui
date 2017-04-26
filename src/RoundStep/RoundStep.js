import React, {Component} from 'react';
import PropTypes from 'prop-types';

import RoundStepItem from './RoundStepItem';

import './RoundStep.css';

export default class RoundStep extends Component {

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
            <div className={`round-step ${className}`}
                 style={style}>

                {
                    steps.map((item, index) => {
                        return (
                            <RoundStepItem key={index}
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

RoundStep.propTypes = {

    /**
     * The CSS class name of the root element.
     */
    className: PropTypes.string,

    /**
     * Override the styles of the root element.
     */
    style: PropTypes.object,


    /**
     * The render content of step.
     */
    steps: PropTypes.arrayOf(PropTypes.shape({

        /**
         * The CSS class name of step element.
         */
        className: PropTypes.string,

        /**
         * Override the styles of the step element.
         */
        style: PropTypes.object,

        /**
         * The text value of step.
         */
        title: PropTypes.string

    })).isRequired,

    /**
     * Sets the step as active.
     */
    activatedStep: PropTypes.number,

    /**
     * The final step.
     */
    finishedStep: PropTypes.number,

    /**
     * Callback function fired when step change.
     */
    onChange: PropTypes.func

};

RoundStep.defaultProps = {

    className: '',
    style: null,

    steps: [],

    activatedStep: 0,
    finishedStep: 0

};