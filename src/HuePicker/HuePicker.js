/**
 * @file HuePicker component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Event from '../_vendors/Event';

export default class HuePicker extends Component {

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.mouseDownHandler = ::this.mouseDownHandler;
        this.mouseMoveHandler = ::this.mouseMoveHandler;

    }

    mouseDownHandler(e) {
        console.log(e.clientX);
    }

    mouseMoveHandler(e) {

    }

    componentDidMount() {
        Event.addEvent(document, 'mousemove', this.mouseMoveHandler);
    }

    componentWillUnmount() {
        Event.removeEvent(document, 'mousemove', this.mouseMoveHandler);
    }

    render() {

        const {className, style} = this.props,

            wrapperClassName = (className ? ' ' + className : '');

        return (
            <div ref="huePicker"
                 className={'hue-picker' + wrapperClassName}
                 style={style}
                 onMouseDown={this.mouseDownHandler}>

                <i className="fa fa-caret-down color-picker-hue-pointer-top"></i>
                <i className="fa fa-caret-up color-picker-hue-pointer-bottom"></i>

            </div>
        );

    }
};

HuePicker.propTypes = {

    /**
     * The CSS class name of the root element.
     */
    className: PropTypes.string,

    /**
     * Override the styles of the root element.
     */
    style: PropTypes.object,



    onChange: PropTypes.func

};

HuePicker.defaultProps = {

    className: null,
    style: null

};