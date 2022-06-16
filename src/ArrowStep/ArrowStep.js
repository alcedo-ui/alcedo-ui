/**
 * @file ArrowStep component
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';

// Components
import ArrowStepItem from '../_ArrowStepItem';

// Vendors
import classNames from 'classnames';
import ComponentUtil from '../_vendors/ComponentUtil';

class ArrowStep extends Component {

    static getDerivedStateFromProps(props, state) {
        return {
            prevProps: props,
            activatedStep: ComponentUtil.getDerivedState(props, state, 'activatedStep'),
            finishedStep: ComponentUtil.getDerivedState(props, state, 'finishedStep')
        };
    }

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.state = {
            activatedStep: props.activatedStep,
            finishedStep: props.finishedStep
        };

    }

    handleClick = activatedStep => {

        const {onChange} = this.props;

        if (activatedStep === this.state.activatedStep) {
            return;
        }

        if (this.props.beforeStepChange?.(activatedStep) === false) {
            return;
        }

        this.setState({
            activatedStep
        }, () => {
            onChange && onChange({
                activatedStep,
                finishedStep: this.state.finishedStep
            });
        });

    };

    render() {

        const {className, style, steps, isFirstStepLeftTriangleVisible, isLastStepRightTriangleVisible} = this.props,
            {activatedStep, finishedStep} = this.state;

        return (
            <div className={classNames('arrow-step', {
                [className]: className
            })}
                 style={style}>
                {
                    steps?.map((item, index) => item ?
                        <ArrowStepItem key={index}
                                       index={index}
                                       className={item.className}
                                       style={{
                                           ...item.style,
                                           width: `${100 / steps.length}%`,
                                           zIndex: steps.length - index
                                       }}
                                       isActivatedStep={activatedStep === index}
                                       isFinishedStep={finishedStep >= index}
                                       value={item}
                                       isFirst={index === 0}
                                       isLast={index === steps.length - 1}
                                       isFirstStepLeftTriangleVisible={isFirstStepLeftTriangleVisible}
                                       isLastStepRightTriangleVisible={isLastStepRightTriangleVisible}
                                       onClick={this.handleClick}/>
                        :
                        null
                    ) || null
                }
            </div>
        );

    }
}

ArrowStep.propTypes = {

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
     * The visibility of first step left triangle.
     */
    isFirstStepLeftTriangleVisible: PropTypes.bool,

    /**
     * The visibility of last step right triangle.
     */
    isLastStepRightTriangleVisible: PropTypes.bool,

    /**
     * Callback function fired when step change.
     */
    onChange: PropTypes.func,
    beforeStepChange: PropTypes.func

};

ArrowStep.defaultProps = {

    steps: [],

    activatedStep: 0,
    finishedStep: 0,

    isFirstStepLeftTriangleVisible: false,
    isLastStepRightTriangleVisible: false

};

export default ArrowStep;
