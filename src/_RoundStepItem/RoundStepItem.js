/**
 * @file RoundStepItem component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
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
        const {activatedStep, finishedStep, index, disabled, onClick} = this.props;
        !disabled && activatedStep !== index && finishedStep >= index && onClick && onClick(index, e);
    };

    render() {

        const {
                className, style, activatedStep, finishedStep, index, value, isFirst, isLast,
                showFinishedStepIcon, finishedStepIconCls, disabled, titlePosition
            } = this.props,

            titleEl = (
                <div className="title">
                    {value.title}
                </div>
            );

        return (
            <div className={classNames('round-step-item',
                activatedStep == index ? ' activated' : (finishedStep >= index ? ' finished' : ''), {
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

                    <div className="bg-bar"></div>
                    <div className="bg-round"></div>

                    {
                        !isFirst && (finishedStep >= index || activatedStep >= index) ?
                            <div className="left-bar"></div>
                            :
                            null
                    }

                    {
                        !isLast ?
                            <div className={'right-bar' + this.getRightBarClassName()}></div>
                            :
                            null
                    }

                    <div className="round"
                         onClick={this.handleClick}>
                        {
                            showFinishedStepIcon && finishedStep > index ?
                                <i className={finishedStepIconCls}
                                   aria-hidden="true"></i>
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
