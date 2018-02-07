/**
 * @file Portal component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {createPortal} from 'react-dom';

class Portal extends Component {

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.wrapper = null;
        this.portal = null;

        this.renderWrapper = ::this.renderWrapper;
        this.renderPortal = ::this.renderPortal;

    }

    renderWrapper() {

        if (this.wrapper) {
            return;
        }

        this.wrapper = document.createElement('div');
        this.wrapper.className = 'portal';
        document.body.appendChild(this.wrapper);

    }

    renderPortal() {

        this.renderWrapper();

        const {children} = this.props;

        return this.portal = createPortal(
            children,
            this.wrapper
        );

    }

    componentWillUnmount() {
        if (this.wrapper) {
            document.body.removeChild(this.wrapper);
        }
    }

    render() {

        if (this.portal) {
            return this.portal;
        }

        if (!this.props.visible) {
            return null;
        }

        return this.renderPortal();

    }

};

Portal.propTypes = {

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

Portal.defaultProps = {

    className: null,
    style: null,

    visible: PropTypes.bool

};

export default Portal;