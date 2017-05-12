import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Util from '../_vendors/Util';

import './CircularLoading.css';

export default class CircularLoading extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const {className, style, size,type} = this.props;

        return (

            <div className={`circular-loading circular-loading-size-${size} ${className}`}
                 type={type}
                 style={style}>
                <div className="spinner">
                    <div className="circle left">
                        <div></div>
                    </div>
                    <div className="gap">
                        <div></div>
                    </div>
                    <div className="circle right">
                        <div></div>
                    </div>
                </div>
            </div>

        );

    }
};

CircularLoading.Size = {
    DEFAULT: '',
    SMALL: 'small',
    LARGE: 'large'
};

CircularLoading.propTypes = {

    /**
     * The CSS class name of the root element.
     */
    className: PropTypes.string,

    /**
     * Override the styles of the root element.
     */
    style: PropTypes.object,

    /**
     * Set the size of Loading,can use small or large.
     */
    size: PropTypes.oneOf(Util.enumerateValue(CircularLoading.Size))

};

CircularLoading.defaultProps = {

    className: '',
    style: null,

    size: CircularLoading.Size.DEFAULT

};