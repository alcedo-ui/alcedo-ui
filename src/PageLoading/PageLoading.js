/**
 * @file PageLoading component
 * @author chao(chao.zhang@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class PageLoading extends Component {

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.unrenderTimeout = null;

        this.loadingArray = [{
            width: 0,
            timeout: 1
        }, {
            width: 50,
            timeout: 200
        }, {
            width: 80,
            timeout: 2000
        }, {
            width: 90,
            timeout: 2500
        }, {
            width: 95,
            timeout: 25000
        }];

        this.finishedArray = [{
            width: 100,
            timeout: 250
        }];

        this.setLoading = ::this.setLoading;

    }

    setLoading(array, index = 0) {
        const {width, timeout} = array[index];
        let highlight = this.refs.highlight;

        if (highlight) {
            highlight.style.width = width + '%';
            highlight.style.transition = 'width ' + timeout + 'ms linear 0ms';
            if (index < array.length - 1) {
                this.unrenderTimeout && clearTimeout(this.unrenderTimeout);
                this.unrenderTimeout = setTimeout(() => {
                    this.setLoading(array, index + 1);
                }, width === 100 ? 0 : timeout);
            }
        }
    }

    componentDidEnter() {

        this.unrenderTimeout && clearTimeout(this.unrenderTimeout);

        this.setLoading(this.loadingArray);

    }

    componentWillLeave(callback) {
        this.unrenderTimeout && clearTimeout(this.unrenderTimeout);

        this.setLoading(this.finishedArray);

        setTimeout(() => {
            callback();
            this.props.onRequestClose();
        }, 250);

    }

    componentWillUnmonut() {
        this.unrenderTimeout && clearTimeout(this.unrenderTimeout);
    }

    render() {

        const {className, style} = this.props,

            loadingClassName = classNames('page-loading', 'page-loading-one', {
                [className]: className
            });

        return (
            <div ref="progress"
                 className={loadingClassName}
                 style={style}>
                <div className="page-loading-background">
                    <div ref="highlight"
                         className={`page-loading-highlight`}>
                    </div>
                </div>
            </div>
        );

    }
};

PageLoading.propTypes = {

    className: PropTypes.string,
    style: PropTypes.object,

    onRequestClose: PropTypes.func

};

PageLoading.defaultProps = {
    className: '',
    style: null
};

export default PageLoading;