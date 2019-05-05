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

import LazyLoadStatus from '../_statics/LazyLoadStatus';
import Event from '../_vendors/Event';

class LazyImage extends Component {

    static Status = LazyLoadStatus;

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.wrapper = createRef();

        this.state = {
            status: LazyLoadStatus.PENDING
        };

    }

    handleScroll = debounce(() => {

        if (this.state.status > LazyLoadStatus.PENDING || !this.wrapperEl
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
            status: LazyLoadStatus.LOADING
        }, () => {

            const image = new Image();

            Event.addEvent(image, 'load', e => {
                this.setState({
                    status: LazyLoadStatus.FINISH
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
        eventOn(this.props.scrollEl, 'scroll', this.handleScroll);
        this.handleScroll();
    }

    componentWillUnmount() {
        eventOff(this.props.scrollEl, 'scroll', this.handleScroll);
    }

    render() {

        const {className, style, src, alt, loadingWidth, loadingHeight, width, height, placeholder} = this.props,
            {status} = this.state,

            isFinish = status === LazyLoadStatus.FINISH;

        return (
            <div ref={this.wrapper}
                 className={classNames('lazy-image', {
                     [className]: className
                 })}
                 style={{
                     ...style,
                     width: isFinish ? width : loadingWidth,
                     height: isFinish ? height : loadingHeight
                 }}>

                <img className="lazy-image-img"
                     src={isFinish ? src : ''}
                     alt={alt}
                     width={width}
                     height={height}/>

                <div className={classNames('lazy-image-placeholder', {
                    hidden: isFinish
                })}>
                    {
                        placeholder ?
                            placeholder
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
