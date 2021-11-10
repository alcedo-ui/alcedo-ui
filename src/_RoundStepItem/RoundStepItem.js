/**
 * @file RoundStepItem component
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';

// Statics
import Position from '../_statics/Position';

// Vendors
import classNames from 'classnames';
import Util from '../_vendors/Util';

class RoundStepItem extends Component {

    static TitlePosition = Position;

    constructor(props, ...restArgs) {
        super(props, ...restArgs);
    }

    getRightBarClassName = () => {

        const {activatedStep, finishedStep, index} = this.props;

        if (finishedStep > index || activatedStep > index) {
            return ' full';
        }

        if (activatedStep === index || finishedStep === index) {
            return '';
        }

        return ' hidden';

    };

    handleClick = e => {

        const {value, activatedStep, finishedStep, index, disabled} = this.props;

        if (disabled) {
            return;
        }

        this.props.onItemClick?.(value, index);

        activatedStep !== index && finishedStep >= index && this.props.onClick?.(index, e);

    };

    render() {

        const {
            className, style, activatedStep, finishedStep, index, value, isFirst, isLast,
            showFinishedStepIcon, finishedStepIconCls, disabled, titlePosition
        } = this.props;

        const titleEl = (
            <div className="title"
                 onClick={this.handleClick}>
                {value?.title || ''}
            </div>
        );

        return (
            <div className={classNames('round-step-item',
                activatedStep === index ?
                    'activated'
                    :
                    (finishedStep >= index ? ' finished' : ''), {
                    first: isFirst,
                    last: isLast,
                    disabled: disabled,
                    [className]: className
                })}
                 style={style}>

                {
                    titlePosition === Position.TOP ?
                        titleEl
                        :
                        null
                }

                <div className="round-step-item-content">

                    <div className="bg-bar"/>
                    <div className="bg-round"/>

                    {
                        !isFirst && (finishedStep >= index || activatedStep >= index) ?
                            <div className="left-bar"/>
                            :
                            null
                    }

                    {
                        !isLast ?
                            <div className={'right-bar' + this.getRightBarClassName()}/>
                            :
                            null
                    }

                    <div className="round"
                         onClick={this.handleClick}>
                        {
                            showFinishedStepIcon && finishedStep > index ?
                                <i className={finishedStepIconCls}
                                   aria-hidden="true"/>
                                :
                                value?.iconCls ?
                                    <i className={value?.iconCls}
                                       aria-hidden="true"/>
                                    :
                                    (index + 1)
                        }
                    </div>

                </div>

                {
                    titlePosition !== Position.TOP ?
                        titleEl
                        :
                        null
                }

            </div>
        );

    }
}

RoundStepItem.propTypes = {

    className: PropTypes.string,
    style: PropTypes.object,

    activatedStep: PropTypes.number,
    finishedStep: PropTypes.number,
    index: PropTypes.number,
    value: PropTypes.object,
    isFirst: PropTypes.bool,
    isLast: PropTypes.bool,

    showFinishedStepIcon: PropTypes.bool,
    finishedStepIconCls: PropTypes.string,

    disabled: PropTypes.bool,

    titlePosition: PropTypes.oneOf(Util.enumerateValue(Position)),

    onItemClick: PropTypes.func,
    onClick: PropTypes.func

};

RoundStepItem.defaultProps = {

    activatedStep: 0,
    finishedStep: 0,
    index: 0,
    value: {},
    isFirst: true,
    isLast: false,

    showFinishedStepIcon: true,
    finishedStepIconCls: 'fas fa-check',

    disabled: false,

    titlePosition: Position.BOTTOM

};

export default RoundStepItem;
