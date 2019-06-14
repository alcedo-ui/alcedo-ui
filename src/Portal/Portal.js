/**
 * @file Portal component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {createPortal} from 'react-dom';
import classNames from 'classnames';
import portalManagement from '../_vendors/PortalManagement';

class Portal extends Component {

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.wrapper = null;
        this.portal = null;

    }

    /**
     * render portal element to dom and return it
     * @returns {*}
     */
    renderWrapper = () => {

        if (this.wrapper) {
            return this.wrapper;
        }

        const {

            className, parentEl,

            // not passing down these props
            children, visible,

            ...restProps

        } = this.props;

        if (!parentEl) {
            return null;
        }

        this.wrapper = document.createElement('div');
        this.wrapper.className = classNames('portal', {
            [className]: className
        });

        for (let key in restProps) {
            this.wrapper[key] = restProps[key];
        }

        // handle all portals in portalManagement
        portalManagement.push(parentEl, this.wrapper);

        return parentEl.appendChild(this.wrapper);

    };

    renderPortal = () => {

        if (!this.renderWrapper()) {
            return null;
        }

        return this.portal = createPortal(
            this.props.children,
            this.wrapper
        );

    };

    unmountWrapper = () => {

        const {parentEl} = this.props;

        if (this.wrapper && parentEl) {

            parentEl.removeChild(this.wrapper);

            // handle all portals in portalManagement
            portalManagement.pop(parentEl, this.wrapper);

            this.wrapper = null;

        }

    };

    componentDidUpdate() {
        if (!this.props.visible) {
            this.unmountWrapper();
        }
    }

    componentWillUnmount() {
        this.unmountWrapper();
    }

    render() {
        return this.props.visible ? this.renderPortal() : null;
    }

}

Portal.propTypes = {

    children: PropTypes.any,

    className: PropTypes.string,

    visible: PropTypes.bool,
    parentEl: PropTypes.object

};

Portal.defaultProps = {
    visible: false,
    parentEl: document.body
};

export default Portal;
