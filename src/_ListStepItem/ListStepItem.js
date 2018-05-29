/**
 * @file ListStepItem component
 * @author chao(chao.zhang@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import RaisedButton from '../RaisedButton';
import Theme from '../Theme';

class ListStepItem extends Component {

    static Theme = Theme;

    constructor(props, ...restArgs) {
        super(props, ...restArgs);
    }

    clickHandler = () => {
        const {activatedStep, finishedStep, index, onClick} = this.props;
        activatedStep !== index && finishedStep >= index && onClick(index);
    };

    render() {

        const {className, style, activatedStep, finishedStep, index, data} = this.props,

            state = activatedStep === index ? 'activated' : (finishedStep >= index ? 'finished' : ''),
            itemClassName = classNames('list-step-item', {
                [state]: state,
                [className]: className
            });

        return (
            <RaisedButton {...data}
                          className={itemClassName}
                          style={style}
                          theme={state === 'activated' ? Theme.HIGHLIGHT : (state === 'finished' ? Theme.PRIMARY : '')}
                          value={data.value}
                          onClick={this.clickHandler}/>
        );

    }
}

ListStepItem.propTypes = {

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
     * The data of step item.
     */
    data: PropTypes.object,

    /**
     * Callback function fired when step change.
     */
    onClick: PropTypes.func

};

ListStepItem.defaultProps = {
    index: 0,
    activatedStep: 0,
    finishedStep: 0
};

export default ListStepItem;