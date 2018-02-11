/**
 * @file PageLoading component
 * @author chao(chao.zhang@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import CSSTransition from 'react-transition-group/CSSTransition';

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

        this.state = {
            highlightStyle: {
                width: 0
            }
        };

        this.setLoading = ::this.setLoading;
        this.enterHandler = ::this.enterHandler;
        this.exitHandler = ::this.exitHandler;

    }

    setLoading(array, index = 0) {

        const {width, timeout} = array[index],
            highlightStyle = {};

        highlightStyle.width = width + '%';
        highlightStyle.transition = 'width ' + timeout + 'ms linear 0ms';

        this.setState({
            highlightStyle
        }, () => {
            if (index < array.length - 1) {
                this.unrenderTimeout && clearTimeout(this.unrenderTimeout);
                this.unrenderTimeout = setTimeout(() => {
                    this.setLoading(array, index + 1);
                }, width === 100 ? 0 : timeout);
            }
        });

    }

    enterHandler() {
        this.unrenderTimeout && clearTimeout(this.unrenderTimeout);
        this.setLoading(this.loadingArray);
    }

    exitHandler() {

        this.unrenderTimeout && clearTimeout(this.unrenderTimeout);

        this.setLoading(this.finishedArray);
        setTimeout(() => {
            this.props.onRequestClose();
        }, 250);

    }

    componentWillUnmonut() {
        this.unrenderTimeout && clearTimeout(this.unrenderTimeout);
    }

    render() {

        const {className, style, visible, duration} = this.props,
            {highlightStyle} = this.state,

            loadingClassName = classNames('page-loading', {
                [className]: className
            });

        return (
            <CSSTransition in={visible}
                           timeout={{exit: duration}}
                           classNames="page-loading"
                           onEnter={this.enterHandler}
                           onExit={this.exitHandler}>
                <div className={loadingClassName}
                     style={style}>
                    <div className="page-loading-background">
                        <div ref="highlight"
                             className="page-loading-highlight"
                             style={highlightStyle}></div>
                    </div>
                </div>
            </CSSTransition>
        );

    }
};

PageLoading.propTypes = {

    className: PropTypes.string,
    style: PropTypes.object,

    visible: PropTypes.bool,
    duration: PropTypes.number,

    onRequestClose: PropTypes.func

};

PageLoading.defaultProps = {

    className: null,
    style: null,

    visible: false,
    duration: 250

};

export default PageLoading;