/**
 * @file ArrowStepItem component
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';

// Vendors
import classNames from 'classnames';

class ArrowStepItem extends Component {

    constructor(props, ...restArgs) {
        super(props, ...restArgs);
    }

    handleClick = e => {
        const {isActivatedStep, isFinishedStep, index, onClick} = this.props;
        !isActivatedStep && isFinishedStep && onClick?.(index, e);
    };

    render() {

        const {
            className, style,
            isActivatedStep, isFinishedStep, isFirstStepLeftTriangleVisible, isLastStepRightTriangleVisible,
            index, value, isFirst, isLast
        } = this.props;

        const triangleClassName = isActivatedStep ?
            'activated'
            :
            (isFinishedStep ? 'finished' : '');

        return (
            <div className={classNames('arrow-step-item', isActivatedStep ?
                'activated'
                :
                (isFinishedStep ? 'finished' : ''), {
                first: isFirst,
                last: isLast,
                'has-first-step-left-triangle': isFirst && isFirstStepLeftTriangleVisible,
                'has-last-step-right-triangle': isLast && isLastStepRightTriangleVisible,
                [className]: className
            })}
                 style={style}
                 onClick={this.handleClick}>

                <div className="arrow-step-item-content">
                    <div className="number">
                        {index + 1}
                    </div>
                    <div className="title">
                        {value.title}
                    </div>
                </div>

                {
                    isFirst && !isFirstStepLeftTriangleVisible ?
                        null
                        :
                        <div className="triangle-wrapper triangle-wrapper-left">
                            <div className={classNames('triangle-top', triangleClassName)}/>
                            <div className={classNames('triangle-bottom', triangleClassName)}/>
                        </div>
                }

                {
                    isLast && !isLastStepRightTriangleVisible ?
                        null
                        :
                        <div className="triangle-wrapper triangle-wrapper-right">
                            <div className={classNames('triangle-middle', triangleClassName)}/>
                        </div>
                }

            </div>
        );

    }
}

ArrowStepItem.propTypes = {

    className: PropTypes.string,
    style: PropTypes.object,

    index: PropTypes.number,
    isActivatedStep: PropTypes.bool,
    isFinishedStep: PropTypes.bool,
    value: PropTypes.object,

    isFirst: PropTypes.bool,
    isLast: PropTypes.bool,

    isFirstStepLeftTriangleVisible: PropTypes.bool,
    isLastStepRightTriangleVisible: PropTypes.bool,

    onClick: PropTypes.func

};

ArrowStepItem.defaultProps = {

    index: 0,
    isActivatedStep: false,
    isFinishedStep: false,

    isFirst: true,
    isLast: true,

    isFirstStepLeftTriangleVisible: false,
    isLastStepRightTriangleVisible: false

};

export default ArrowStepItem;
