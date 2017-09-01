import React, {Component} from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import CircularLoading from '../CircularLoading';

import Event from '../_vendors/Event';
import Dom from '../_vendors/Dom';

import './LazyImage.css';

export default class LazyImage extends Component {

    constructor(props) {

        super(props);

        this.state = {
            imageState: 0
        };

        this.scrollHandle = this::this.scrollHandle;
        this.debounceScrollHandle = _.debounce(this::this.debounceScrollHandle, 150);

    }

    debounceScrollHandle() {

        if (!this.wrapperEl) {
            return;
        }

        if (this.wrapperEl.getBoundingClientRect().top < window.innerHeight) {

            this.setState({
                imageState: 1
            }, () => {

                const image = new Image();

                // image.onload = () => {
                //     this.setState({
                //         imageState: 2
                //     });
                // };

                Event.addEvent(image, 'load', () => {
                    this.setState({
                        imageState: 2
                    });
                });

                image.src = this.props.src;

            });

        }

    }

    scrollHandle(e) {

        if (this.state.imageState > 0) {
            return;
        }

        console.log(0);

        this.debounceScrollHandle(e);

    }

    componentDidMount() {

        this.wrapperEl = this.refs.wrapper;

        Event.addEvent(document, 'scroll', this.scrollHandle);

    }

    componentWillUnmount() {
        Event.removeEvent(document, 'scroll', this.scrollHandle);
    }

    render() {

        const {className, style, src, alt, width, height, placeholder} = this.props,
            {imageState} = this.state,

            lazyImageClassName = (className ? ' ' + className : '');

        return (
            <div ref="wrapper"
                 className={'lazy-image' + lazyImageClassName}
                 style={style}>

                <img className="lazy-image-img"
                     src={imageState === 2 ? src : ''}
                     alt={alt}
                     width={width}
                     height={height}/>

                <div className={'lazy-image-placeholder' + (imageState === 2 ? ' hidden' : '')}>
                    {
                        placeholder ?
                            {placeholder}
                            :
                            <CircularLoading className="lazy-image-loading"/>
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
    placeholder: PropTypes.any

};

LazyImage.defaultProps = {

    className: '',
    style: null,

    alt: '',

    width: 100,
    height: 100,

    placeholder: ''

};