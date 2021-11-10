/**
 * @file RoundStep component
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';

// Components
import RoundStepItem from '../_RoundStepItem';

// Statics
import Position from '../_statics/Position';

// Vendors
import classNames from 'classnames';
import Util from '../_vendors/Util';
import ComponentUtil from '../_vendors/ComponentUtil';

class RoundStep extends Component {

    static TitlePosition = Position;

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

        const {
                className, style,
                steps, showFinishedStepIcon, finishedStepIconCls, disabled, titlePosition
            } = this.props,
            {activatedStep, finishedStep} = this.state;

        return (
            <div className={classNames('round-step', {
                [className]: className
            })}
                 style={style}>
                {
                    steps?.map((item, index) => item ?
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
                                       showFinishedStepIcon={showFinishedStepIcon}
                                       finishedStepIconCls={finishedStepIconCls}
                                       disabled={disabled}
                                       titlePosition={titlePosition}
                                       onItemClick={item.onClick}
                                       onClick={this.handleClick}/>
                        :
                        null
                    )
                }
            </div>
        );

    }
}

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
        title: PropTypes.string,

        /**
         * The icon class name of step.
         */
        iconCls: PropTypes.string,

        /**
         * Item click callback.
         */
        onClick: PropTypes.func

    })).isRequired,

    /**
     * Sets the step as active.
     */
    activatedStep: PropTypes.number,

    /**
     * The final step.
     */
    finishedStep: PropTypes.number,

    showFinishedStepIcon: PropTypes.bool,
    finishedStepIconCls: PropTypes.string,

    disabled: PropTypes.bool,

    titlePosition: PropTypes.oneOf(Util.enumerateValue(Position)),

    /**
     * Callback function fired when step change.
     */
    onChange: PropTypes.func

};

RoundStep.defaultProps = {

    activatedStep: 0,
    finishedStep: 0,

    showFinishedStepIcon: true,
    finishedStepIconCls: 'fas fa-check',
    disabled: false,

    titlePosition: Position.BOTTOM

};

export default RoundStep;
