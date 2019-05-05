/**
 * @file LazyImage component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component, createRef} from 'react';
import PropTypes from 'prop-types';
import debounce from 'lodash/debounce';
import classNames from 'classnames';
import eventOn from 'dom-helpers/events/on';
import eventOff from 'dom-helpers/events/off';

import CircularLoading from '../CircularLoading';

import Event from '../_vendors/Event';

class LazyImage extends Component {

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.wrapper = createRef();

        this.state = {
            imageState: 0
        };

    }

    scrollHandler = debounce(() => {

        if (this.state.imageState > 0 || !this.wrapperEl
            || this.wrapperEl.getBoundingClientRect().top > window.innerHeight) {
            return;
        }

        const {onImageLoadStart} = this.props;
        let result;

        if (onImageLoadStart) {
            result = onImageLoadStart();
        }

        if (result === false) {
            return;
        }

        this.setState({
            imageState: 1
        }, () => {

            const image = new Image();

            Event.addEvent(image, 'load', e => {
                this.setState({
                    imageState: 2
                }, () => {
                    const {onImageLoaded} = this.props;
                    onImageLoaded && onImageLoaded(e);
                });
            });

            image.src = this.props.src;

        });

    }, 250);

    componentDidMount() {
        this.wrapperEl = this.wrapper && this.wrapper.current;
        eventOn(this.props.scrollEl, 'scroll', this.scrollHandler);
        this.scrollHandler();
    }

    componentWillUnmount() {
        eventOff(this.props.scrollEl, 'scroll', this.scrollHandler);
    }

    render() {

        const {className, style, src, alt, loadingWidth, loadingHeight, width, height, placeholder} = this.props,
            {imageState} = this.state,

            lazyImageClassName = classNames('lazy-image', {
                [className]: className
            }),
            lazyImageStyle = {
                ...style,
                width: imageState === 2 ? width : loadingWidth,
                height: imageState === 2 ? height : loadingHeight
            },

            placeholderClassName = classNames('lazy-image-placeholder', {
                hidden: imageState === 2
            });

        return (
            <div ref={this.wrapper}
                 className={lazyImageClassName}
                 style={lazyImageStyle}>

                <img className="lazy-image-img"
                     src={imageState === 2 ? src : ''}
                     alt={alt}
                     width={width}
                     height={height}/>

                <div className={placeholderClassName}>
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
}

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
     * Loading width.
     */
    loadingWidth: PropTypes.number,

    /**
     * Loading height.
     */
    loadingHeight: PropTypes.number,

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

    scrollEl: PropTypes.object,

    /**
     * Image load start callback.
     */
    onImageLoadStart: PropTypes.func,

    /**
     * Image load end callback.
     */
    onImageLoaded: PropTypes.func

};

LazyImage.defaultProps = {

    alt: '',

    placeholder: '',
    scrollEl: document,

    loadingWidth: 100,
    loadingHeight: 100

};

export default LazyImage;
