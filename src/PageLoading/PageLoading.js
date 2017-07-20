/**
 * Created by DT314 on 2017/7/13.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';


import './PageLoading.css';


export default class PageLoading extends Component {
    constructor(props) {
        super(props);

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

        this.setLoading = this::this.setLoading;
    }

    setLoading(array, index = 0) {
        let {width, timeout} = array[index];

        if (this.refs.highlight) {
            this.refs.highlight.style.width = width + '%';
            this.refs.highlight.style.transition = 'width ' + timeout + 'ms linear 0ms';
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
        const {className, style} = this.props;

        return (
            <div>
                <div className={`page-loading page-loading-one ${className}`}
                     style={style}
                     ref="progress">
                    <div className="page-loading-background">
                        <div className={`page-loading-highlight`} ref="highlight">

                        </div>
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
    style: null,
};

