/**
 * @file VerticalPointStepItem component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class VerticalPointStepItem extends Component {

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.getRightBarClassName = ::this.getRightBarClassName;
        this.touchTapHandler = ::this.touchTapHandler;

    }

    getRightBarClassName() {

        const {activatedStep, finishedStep, index} = this.props;

        if (finishedStep > index || activatedStep > index) {
            return ' full';
        }

        if (activatedStep === index || finishedStep === index) {
            return '';
        }

        return ' hidden';

    }

    touchTapHandler(e) {
        e.preventDefault();
        const {activatedStep, finishedStep, index, disabled, onClick} = this.props;
        !disabled && activatedStep !== index && finishedStep >= index && onClick && onClick(index, e);
    }

    render() {

        const {className, style, activatedStep, finishedStep, index, value, isFirst, isLast, disabled} = this.props,

            itemClassName = classNames('vertical-point-step-item',
                activatedStep == index ? ' activated' : (finishedStep >= index ? ' finished' : ''), {
                    first: isFirst,
                    last: isLast,
                    disabled: disabled,
                    [className]: className
                });

        return (
            <div className={itemClassName}
                 style={style}>

                <div className="bg-bar"></div>

                <div className="bg-round">
                    <div className="round"
                         onClick={this.touchTapHandler}></div>
                </div>

                <div className="title">
                    {value.title}
                </div>

            </div>
        );

    }
}

VerticalPointStepItem.propTypes = {

    className: PropTypes.string,
    style: PropTypes.object,

    activatedStep: PropTypes.number,
    finishedStep: PropTypes.number,
    index: PropTypes.number,
    value: PropTypes.object,
    isFirst: PropTypes.bool,
    isLast: PropTypes.bool,

    disabled: PropTypes.bool,

    onClick: PropTypes.func

};

VerticalPointStepItem.defaultProps = {

    activatedStep: 0,
    finishedStep: 0,
    index: 0,
    value: {},
    isFirst: true,
    isLast: false,

    disabled: false

};

export default VerticalPointStepItem;