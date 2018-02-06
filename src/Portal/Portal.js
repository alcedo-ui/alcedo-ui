/**
 * @file Portal component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Transition from 'react-transition-group/Transition';
import {createPortal} from 'react-dom';
import classNames from 'classnames';

class Portal extends Component {

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.wrapper = null;

        this.renderWrapper = ::this.renderWrapper;

    }

    renderWrapper() {

        if (this.wrapper) {
            return;
        }

        this.wrapper = document.createElement('div');
        this.wrapper.className = 'portal';
        document.body.appendChild(this.wrapper);

    }

    componentWillUnmount() {
        if (this.wrapper) {
            document.body.removeChild(this.wrapper);
        }
    }

    render() {

        const {children, className, style, visible, timeout} = this.props;

        this.renderWrapper();

        return createPortal(
            <Transition className={className}
                        style={style}
                        in={visible}
                        timeout={timeout}>
                {transitionState => (
                    <div className={classNames('portal-content', `transition-${transitionState}`)}>
                        {children}
                    </div>
                )}
            </Transition>,
            this.wrapper
        );

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

    visible: PropTypes.bool,

    timeout: PropTypes.number

};

Portal.defaultProps = {

    className: null,
    style: null,

    visible: false,
    timeout: 250

};

export default Portal;