/**
 * Created by DT314 on 2017/7/4.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';

import RaisedButton from '../RaisedButton';

import './ListStepItem.css';

export default class ListStepItem extends Component {

    constructor(props) {

        super(props);

        this.touchTapHandler = this::this.touchTapHandler;

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
                          value={data.value}
                          onTouchTap={this.touchTapHandler}/>
        );

    }
}