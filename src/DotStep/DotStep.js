/**
 * @file DotStep component
 * @author chao(chao.zhang@derbysoft.com)
 */

import React, {Component} from 'react';
import classNames from 'classnames';

import DotStepItem from '../_DotStepItem';

import PureRender from '../_vendors/PureRender';

@PureRender
class DotStep extends Component {

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.state = {
            activatedStep: props.activatedStep,
            finishedStep: props.finishedStep
        };

        this.touchTapHandler = ::this.touchTapHandler;

    }

    touchTapHandler(activatedStep) {

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

        const {className, style, steps, displayField, finishedText} = this.props,
            {activatedStep, finishedStep} = this.state,

            stepClassName = classNames('dot-step', {
                [className]: className
            });

        return (
            <div className={stepClassName}
                 style={style}>

                <span className="dot-step-value">
                    {activatedStep < steps.length ? steps[activatedStep][displayField] : finishedText}
                </span>

                <div className="dot-step-menu">
                    {
                        steps.map((item, index) =>
                            <DotStepItem key={index}
                                         index={index}
                                         className={item.className}
                                         style={{
                                             ...item.style,
                                             zIndex: steps.length - index
                                         }}
                                         activatedStep={activatedStep}
                                         finishedStep={finishedStep}
                                         data={item}
                                         onTouchTap={this.touchTapHandler}/>
                        )
                    }
                </div>

            </div>
        );
    }
};

if (process.env.NODE_ENV === 'development') {

    const PropTypes = require('prop-types');

    DotStep.propTypes = {

        /**
         * The CSS class name of the root element.
         */
        className: PropTypes.string,

        /**
         * Override the styles of the root element.
         */
        style: PropTypes.object,

        /**
         * The display field name in data. (default: "text")
         */
        displayField: PropTypes.string,

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
         * The text of finished.
         */
        finishedText: PropTypes.any,

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

}

DotStep.defaultProps = {

    steps: [],

    activatedStep: 0,
    finishedStep: 0,
    displayField: 'text',
    finishedText: ''

};

export default DotStep;