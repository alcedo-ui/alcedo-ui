import React, {Component} from 'react';
import PropTypes from 'prop-types';

import CircularLoading from '../CircularLoading';

import Event from '../_vendors/Event';

import './LazyImage.css';

export default class LazyImage extends Component {

    constructor(props) {

        super(props);

        this.state = {
            isLoading: true
        };

    }

    componentDidMount() {

    }

    render() {

        const {className, style, alt, placeholder} = this.props,
            {isLoading} = this.state,

            lazyImageClassName = (className ? ' ' + className : '');

        return (
            <div className="lazy-image-wrapper">

                <img className={'lazy-image' + lazyImageClassName}
                     style={style}
                     alt={alt}/>

                {
                    isLoading ?
                        (
                            placeholder ?
                                <div className="lazy-image-placeholder">
                                    {placeholder}
                                </div>
                                :
                                <CircularLoading className="lazy-image-loading"/>
                        )
                        :
                        null
                }

            </div>
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
    style: PropTypes.object,

    /**
     * Image src url.
     */
    src: PropTypes.string.isRequired,

    /**
     * Image alt text.
     */
    alt: PropTypes.string,

    /**
     * Image placeholder.
     */
    placeholder: PropTypes.any

};

LazyImage.defaultProps = {

    className: '',
    style: null,

    alt: '',
    placeholder: ''

};