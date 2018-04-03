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

        this.renderWrapper = ::this.renderWrapper;
        this.renderPortal = ::this.renderPortal;
        this.unmountWrapper = ::this.unmountWrapper;

    }

    renderWrapper() {

        if (this.wrapper) {
            return;
        }

        const {

            className,

            // not passing down these props
            children, visible,

            ...restProps

        } = this.props;

        this.wrapper = document.createElement('div');
        this.wrapper.className = classNames('portal', {
            [className]: className
        });

        for (let key in restProps) {
            this.wrapper[key] = restProps[key];
        }

        document.body.appendChild(this.wrapper);

    }

    renderPortal() {

        this.renderWrapper();

        return this.portal = createPortal(
            this.props.children,
            this.wrapper
        );

    }

    unmountWrapper() {
        if (this.wrapper) {
            document.body.removeChild(this.wrapper);
            this.wrapper = null;
        }
    }

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
    visible: PropTypes.bool
};

Portal.defaultProps = {
    visible: false
};

export default Portal;