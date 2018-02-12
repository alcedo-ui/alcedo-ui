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

        this.progressTimeout = null;

        this.defaultHighlightStyle = {
            width: 0,
            transition: 'width 0s'
        };

        this.state = {
            highlightStyle: this.defaultHighlightStyle
        };

        this.setLoading = ::this.setLoading;
        this.enterHandler = ::this.enterHandler;
        this.exitHandler = ::this.exitHandler;

    }

    setLoading(progress = this.props.loadingProgress, index = 0) {

        const {width, timeout} = progress[index],
            highlightStyle = {};

        highlightStyle.width = width + '%';
        highlightStyle.transition = 'width ' + timeout + 'ms linear 0ms';

        this.setState({
            highlightStyle
        }, () => {
            if (index < progress.length - 1) {
                this.progressTimeout && clearTimeout(this.progressTimeout);
                this.progressTimeout = setTimeout(() => {
                    this.setLoading(progress, index + 1);
                }, width === 100 ? 0 : timeout);
            }
        });

    }

    enterHandler() {
        this.progressTimeout && clearTimeout(this.progressTimeout);
        this.setState({
            highlightStyle: this.defaultHighlightStyle
        });
        this.setLoading();
    }

    exitHandler() {
        this.progressTimeout && clearTimeout(this.progressTimeout);
        this.setLoading([{
            width: 100,
            timeout: 250
        }]);
    }

    componentWillUnmonut() {
        this.progressTimeout && clearTimeout(this.progressTimeout);
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
                    <div ref="highlight"
                         className="page-loading-highlight"
                         style={highlightStyle}></div>
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

    loadingProgress: PropTypes.arrayOf(PropTypes.shape({
        width: PropTypes.number,
        timeout: PropTypes.number
    }))

};

PageLoading.defaultProps = {

    className: null,
    style: null,

    visible: false,
    duration: 250,

    loadingProgress: [{
        width: 0,
        timeout: 0
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
    }]

};

export default PageLoading;