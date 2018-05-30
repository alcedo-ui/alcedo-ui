/**
 * @file DotStepItem component
 * @author chao(chao.zhang@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class DotStepItem extends Component {

    constructor(props, ...restArgs) {
        super(props, ...restArgs);
    }

    clickHandler = () => {
        const {activatedStep, finishedStep, index, onClick} = this.props;
        activatedStep !== index && finishedStep >= index && onClick(index);
    };

    render() {

        const {className, style, activatedStep, finishedStep, index} = this.props,

            itemClassName = classNames('dot-step-item',
                activatedStep === index ? 'activated' : (finishedStep >= index ? 'finished' : ''), {
                    [className]: className
                });

        return (
            <div className={itemClassName}
                 style={style}
                 onClick={this.clickHandler}></div>
        );

    }
}

DotStepItem.propTypes = {

    /**
     * The CSS class name of the root element.
     */
    className: PropTypes.string,

    /**
     * Override the styles of the root element.
     */
    style: PropTypes.object,

    /**
     * Item index.
     */
    index: PropTypes.number,

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
    onClick: PropTypes.func

};

DotStepItem.defaultProps = {
    index: 0,
    activatedStep: 0,
    finishedStep: 0
};

export default DotStepItem;