/**
 * @file ArrowStepItem component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class ArrowStepItem extends Component {

    static propTypes = {

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
    static defaultProps = {

        className: '',
        style: null,

        index: 0,
        activatedStep: 0,
        finishedStep: 0,
        value: null,

        isFirst: true,
        isLast: true

    };

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

        const {className, style, activatedStep, finishedStep, index, value, isFirst, isLast} = this.props,

            itemClassName = (isFirst ? ' first' : '') + (isLast ? ' last' : '')
                + (activatedStep == index ? ' activated' : (finishedStep >= index ? ' finished' : ''))
                + (className ? ' ' + className : ''),

            triangleClassName = activatedStep === index ? ' activated' : (finishedStep >= index ? ' finished' : '');

        return (
            <div className={'arrow-step-item' + itemClassName}
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
                                <div className={'triangle-top' + triangleClassName}></div>
                                <div className={'triangle-bottom' + triangleClassName}></div>
                            </div>
                        )
                }

                {
                    isLast ?
                        null
                        :
                        (
                            <div className="triangle-wrapper triangle-wrapper-right">
                                <div className={'triangle-middle' + triangleClassName}></div>
                            </div>
                        )
                }

            </div>
        );

    }
};