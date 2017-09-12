import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ReactCSSTransitionGroup from 'react-addons-transition-group';
import {unstable_renderSubtreeIntoContainer, unmountComponentAtNode} from 'react-dom';

import './SubtreeContainer.css';

export default class SubtreeContainer extends Component {

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.wrapper = null;
        this.element = null;

        this.renderWrapper = ::this.renderWrapper;
        this.renderer = ::this.renderer;
        this.dorender = ::this.dorender;
        this.unrender = ::this.unrender;

    }

    renderWrapper() {

        if (this.wrapper) {
            return;
        }

        this.wrapper = document.createElement('div');
        this.wrapper.className = 'subtree-container';
        document.body.appendChild(this.wrapper);

    }

    dorender() {
        if (this.props.visible) {
            this.renderWrapper();
            this.element = unstable_renderSubtreeIntoContainer(this, this.renderer(), this.wrapper);
        } else {
            this.unrender();
        }
    }

    unrender() {

        if (!this.wrapper) {
            return;
        }

        unmountComponentAtNode(this.wrapper);
        document.body.removeChild(this.wrapper);
        this.element = null;
        this.wrapper = null;

    }

    renderer() {

        const {className, style} = this.props;

        return (
            <ReactCSSTransitionGroup component="div"
                                     className={className}
                                     style={style}>
                {this.props.children}
            </ReactCSSTransitionGroup>
        );
    }

    componentDidUpdate() {
        this.dorender();
    }

    componentWillUnmount() {
        this.unrender();
    }

    render() {
        return null;
    }

};

SubtreeContainer.propTypes = {

    /**
     * The css class name of the root element.
     */
    className: PropTypes.string,

    /**
     * The styles of the root element.
     */
    style: PropTypes.object,

    visible: PropTypes.bool

};

SubtreeContainer.defaultProps = {
    className: '',
    style: null,
    visible: false
};