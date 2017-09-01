import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './LazyImage.css';

export default class LazyImage extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const {className, style} = this.props,

            lazyImageClassName = (className ? ' ' + className : '');

        return (
            <img className={'lazy-image' + lazyImageClassName}
                 style={style}/>
        );

    }
};

LazyImage.propTypes = {

    /**
     * The CSS class name of the root element.
     */
    className: PropTypes.string,

    /**
     * Override the styles of the root element.
     */
    style: PropTypes.object

};

LazyImage.defaultProps = {

    className: '',
    style: null

};