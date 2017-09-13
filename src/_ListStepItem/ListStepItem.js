/**
 * @file ListStepItem component
 * @author chao(chao.zhang@derbysoft.com)
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';

import RaisedButton from '../RaisedButton';

import './ListStepItem.css';

export default class ListStepItem extends Component {

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.touchTapHandler = ::this.touchTapHandler;

    }

    touchTapHandler() {
        const {activatedStep, finishedStep, index, onTouchTap} = this.props;
        activatedStep !== index && finishedStep >= index && onTouchTap(index);
    }

    render() {

        const {className, style, activatedStep, finishedStep, index, data} = this.props,

            itemClassName = (activatedStep === index ? ' activated' : (finishedStep >= index ? ' finished' : ''))
                + (className ? ' ' + className : '');


        return (
            <RaisedButton {...data}
                          className={'list-step-item' + itemClassName}
                          style={style}
                          value={data.value}
                          onTouchTap={this.touchTapHandler}/>
        );

    }
};

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
    onTouchTap: PropTypes.func

};

ListStepItem.defaultProps = {
    className: '',
    style: null,
    index: 0,
    activatedStep: 0,
    finishedStep: 0,
    data: null
};