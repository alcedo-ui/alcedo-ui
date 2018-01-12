/**
 * @file ColorPicker component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';

import HuePicker from '../HuePicker';

export default class ColorPicker extends Component {

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.state = {
            value: props.value
        };

    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.value !== this.state.value) {
            this.setState({
                value: nextProps.value
            });
        }
    }

    render() {

        const {className, style} = this.props;

        return (
            <div className={'color-picker' + (className ? ' ' + className : '')}
                 style={style}>

                <div className="color-picker-area">

                </div>

                <HuePicker/>

            </div>
        );

    }
};

ColorPicker.propTypes = {

    /**
     * The CSS class name of the root element.
     */
    className: PropTypes.string,

    /**
     * Override the styles of the root element.
     */
    style: PropTypes.object,

    value: PropTypes.array

};

ColorPicker.defaultProps = {

    className: null,
    style: null,

    value: [255, 0, 0]

};