import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './CircularLoading.css';

export default class CircularLoading extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const {className, style, size} = this.props;

        return (
            <div className={`circular-loading circular-loading-size-${size} ${className}`}
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

    className: PropTypes.string,
    style: PropTypes.object,

    size: PropTypes.oneOf(Object.keys(CircularLoading.Size).map(key => CircularLoading.Size[key]))

};

CircularLoading.defaultProps = {

    className: '',
    style: null,

    size: CircularLoading.Size.DEFAULT

};