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

    }

    setLoading = (progress = this.props.loadingProgress, index = 0) => {

        const {width, timeout} = progress[index],
            highlightStyle = {};

        highlightStyle.width = width + '%';
        highlightStyle.transition = 'width ' + timeout + 'ms linear 0ms';

        this.setState({
            highlightStyle
        }, () => {
            if (index < progress.length - 1) {
                this.clearProgress();
                this.progressTimeout = setTimeout(() => {
                    this.setLoading(progress, index + 1);
                }, width === 100 ? 0 : timeout);
            }
        });

    };

    clearProgress = () => {
        this.progressTimeout && clearTimeout(this.progressTimeout);
    };

    handleEnter = () => {
        this.clearProgress();
        this.setState({
            highlightStyle: this.defaultHighlightStyle
        }, () => {
            this.setLoading();
        });
    };

    handleExit = () => {
        this.clearProgress();
        this.setLoading([{
            width: 100,
            timeout: this.props.finishDuration
        }]);
    };

    componentWillUnmount() {
        this.clearProgress();
    }

    render() {

        const {className, style, visible, duration, finishDuration, showStripes} = this.props,
            {highlightStyle} = this.state;

        return (
            <CSSTransition in={visible}
                           timeout={{exit: duration + finishDuration}}
                           classNames="page-loading"
                           onEnter={this.handleEnter}
                           onExit={this.handleExit}>
                <div className={classNames('page-loading', {
                    striped: showStripes,
                    [className]: className
                })}
                     style={style}>
                    <div className="page-loading-bar"
                         style={highlightStyle}></div>
                </div>
            </CSSTransition>
        );

    }
}

PageLoading.propTypes = {

    className: PropTypes.string,
    style: PropTypes.object,

    visible: PropTypes.bool,
    duration: PropTypes.number,
    finishDuration: PropTypes.number,
    showStripes: PropTypes.bool,

    loadingProgress: PropTypes.arrayOf(PropTypes.shape({
        width: PropTypes.number,
        timeout: PropTypes.number
    }))

};

PageLoading.defaultProps = {

    visible: false,
    duration: 250,
    finishDuration: 100,
    showStripes: true,

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
