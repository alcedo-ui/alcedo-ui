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

        const {className, style, alt, placeholder, placeholderWidth, placeholderHeight} = this.props,
            {isLoading} = this.state,

            lazyImageClassName = (className ? ' ' + className : ''),
            lazyImageStyle = {
                ...style,
                width: placeholderWidth,
                height: placeholderHeight
            },

            placeholderStyle = {
                width: placeholderWidth,
                height: placeholderHeight
            };

        return (
            <div className={'lazy-image' + lazyImageClassName}
                 style={lazyImageStyle}>

                <img className="lazy-image-img"
                     alt={alt}/>

                <div className="lazy-image-placeholder"
                     style={placeholderStyle}>
                    {
                        isLoading ?
                            (
                                placeholder ?
                                    placeholder
                                    :
                                    <CircularLoading className="lazy-image-loading"/>
                            )
                            :
                            null
                    }
                </div>

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
     * Image width.
     */
    width: PropTypes.number,

    /**
     * Image height.
     */
    height: PropTypes.number,

    /**
     * Image placeholder.
     */
    placeholder: PropTypes.any,

    /**
     * Image placeholder width.
     */
    placeholderWidth: PropTypes.number,

    /**
     * Image placeholder height.
     */
    placeholderHeight: PropTypes.number

};

LazyImage.defaultProps = {

    className: '',
    style: null,

    alt: '',
    placeholder: '',
    placeholderWidth: 100,
    placeholderHeight: 100

};