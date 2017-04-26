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
            <div className={`circular-loading ${size} ${className}`}
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

CircularLoading.propTypes = {

    className: PropTypes.string,
    style: PropTypes.object,

    size: PropTypes.string

};

CircularLoading.defaultProps = {

    className: '',
    style: null,

    size: '' // big / small / ''

};