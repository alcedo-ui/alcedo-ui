/**
 * @file PageLoading component
 * @author chao(chao.zhang@derbysoft.com)
 */

import React, {Component} from 'react';
import classNames from 'classnames';
import CSSTransition from 'react-transition-group/CSSTransition';

import PureRender from '../_vendors/PureRender';

@PureRender
class PageLoading extends Component {

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.progressTimeout = null;

        this.finishDuration = 100;

        this.defaultHighlightStyle = {
            width: 0,
            transition: 'width 0s'
        };

        this.state = {
            highlightStyle: this.defaultHighlightStyle
        };

        this.setLoading = ::this.setLoading;
        this.clearProgress = ::this.clearProgress;
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
                this.clearProgress();
                this.progressTimeout = setTimeout(() => {
                    this.setLoading(progress, index + 1);
                }, width === 100 ? 0 : timeout);
            }
        });

    }

    clearProgress() {
        this.progressTimeout && clearTimeout(this.progressTimeout);
    }

    enterHandler() {
        this.clearProgress();
        this.setState({
            highlightStyle: this.defaultHighlightStyle
        }, () => {
            this.setLoading();
        });
    }

    exitHandler() {
        this.clearProgress();
        this.setLoading([{
            width: 100,
            timeout: this.finishDuration
        }]);
    }

    componentWillUnmonut() {
        this.clearProgress();
    }

    render() {

        const {className, style, visible, duration, showStripes} = this.props,
            {highlightStyle} = this.state,

            loadingClassName = classNames('page-loading', {
                striped: showStripes,
                [className]: className
            });

        return (
            <CSSTransition in={visible}
                           timeout={{exit: duration + this.finishDuration}}
                           classNames="page-loading"
                           onEnter={this.enterHandler}
                           onExit={this.exitHandler}>

                <div className={loadingClassName}
                     style={style}>
                    <div className="page-loading-bar"
                         style={highlightStyle}></div>
                </div>

            </CSSTransition>
        );

    }
};

if (process.env.NODE_ENV === 'development') {

    const PropTypes = require('prop-types');

    PageLoading.propTypes = {

        className: PropTypes.string,
        style: PropTypes.object,

        visible: PropTypes.bool,
        duration: PropTypes.number,
        showStripes: PropTypes.bool,

        loadingProgress: PropTypes.arrayOf(PropTypes.shape({
            width: PropTypes.number,
            timeout: PropTypes.number
        }))

    };

}

PageLoading.defaultProps = {

    visible: false,
    duration: 250,
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