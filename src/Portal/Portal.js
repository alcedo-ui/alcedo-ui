/**
 * @file Portal component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {createPortal} from 'react-dom';
import classNames from 'classnames';

class Portal extends Component {

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.wrapper = null;
        this.portal = null;

    }

    renderWrapper = () => {

        if (this.wrapper) {
            return;
        }

        const {

            className, parentEl,

            // not passing down these props
            children, visible,

            ...restProps

        } = this.props;

        if (!parentEl) {
            return;
        }

        this.wrapper = document.createElement('div');
        this.wrapper.className = classNames('portal', {
            [className]: className
        });

        for (let key in restProps) {
            this.wrapper[key] = restProps[key];
        }

        parentEl.appendChild(this.wrapper);

    };

    renderPortal = () => {

        this.renderWrapper();

        return this.portal = createPortal(
            this.props.children,
            this.wrapper
        );

    };

    unmountWrapper = () => {

        const {parentEl} = this.props;

        if (this.wrapper && parentEl) {
            parentEl.removeChild(this.wrapper);
            this.wrapper = null;
        }

    };

    componentWillReceiveProps(nextProps) {
        if (!nextProps.visible) {
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
    visible: PropTypes.bool,
    parentEl: PropTypes.object
};

Portal.defaultProps = {
    visible: false,
    parentEl: document.body
};

export default Portal;
