/**
 * @file VerticalPointStep component
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';

// Vendors
import classNames from 'classnames';
import VerticalPointStepItem from '../_VerticalPointStepItem';
import ComponentUtil from '../_vendors/ComponentUtil';

class VerticalPointStep extends Component {

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

        const {className, style, steps, disabled} = this.props,
            {activatedStep, finishedStep} = this.state;

        return (
            <div className={classNames('vertical-point-step', {
                [className]: className
            })}
                 style={style}>
                {
                    steps && steps.map((item, index) =>
                        <VerticalPointStepItem key={index}
                                               index={index}
                                               className={item.className}
                                               style={item.style}
                                               activatedStep={activatedStep}
                                               finishedStep={finishedStep}
                                               value={item}
                                               isFirst={index === 0}
                                               isLast={index === steps.length - 1}
                                               disabled={disabled}
                                               onClick={this.handleClick}/>
                    )
                }
            </div>
        );

    }
}

VerticalPointStep.propTypes = {

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

    disabled: PropTypes.bool,

    /**
     * Callback function fired when step change.
     */
    onChange: PropTypes.func

};

VerticalPointStep.defaultProps = {

    activatedStep: 0,
    finishedStep: 0,

    disabled: false

};

export default VerticalPointStep;
