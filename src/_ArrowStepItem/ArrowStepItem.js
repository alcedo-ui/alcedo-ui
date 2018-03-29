/**
 * @file ArrowStepItem component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import PureRender from '../_vendors/PureRender';

@PureRender
class ArrowStepItem extends Component {

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.touchTapHandler = ::this.touchTapHandler;

    }

    touchTapHandler(e) {
        e.preventDefault();
        const {activatedStep, finishedStep, index, onTouchTap} = this.props;
        activatedStep !== index && finishedStep >= index && onTouchTap && onTouchTap(index, e);
    }

    render() {

        console.log(111);

        const {className, style, activatedStep, finishedStep, index, value, isFirst, isLast} = this.props,

            itemClassName = classNames('arrow-step-item',
                activatedStep === index ? 'activated' : (finishedStep >= index ? 'finished' : ''), {
                    first: isFirst,
                    last: isLast,
                    [className]: className
                }),

            triangleClassName = activatedStep === index ? 'activated' : (finishedStep >= index ? 'finished' : ''),
            triangleTopClassName = classNames('triangle-top', triangleClassName),
            triangleMiddleClassName = classNames('triangle-middle', triangleClassName),
            triangleBottomClassName = classNames('triangle-bottom', triangleClassName);

        return (
            <div className={itemClassName}
                 style={style}
                 onTouchTap={this.touchTapHandler}>

                <div className="arrow-step-item-content">
                    <div className="number">
                        {index + 1}
                    </div>
                    <div className="title">
                        {value.title}
                    </div>
                </div>

                {
                    isFirst ?
                        null
                        :
                        (
                            <div className="triangle-wrapper triangle-wrapper-left">
                                <div className={triangleTopClassName}></div>
                                <div className={triangleBottomClassName}></div>
                            </div>
                        )
                }

                {
                    isLast ?
                        null
                        :
                        (
                            <div className="triangle-wrapper triangle-wrapper-right">
                                <div className={triangleMiddleClassName}></div>
                            </div>
                        )
                }

            </div>
        );

    }
};

if (process.env.NODE_ENV !== 'production') {
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
}

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

export default ArrowStepItem;