/**
 * @file MaterialProvider component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component, Children, cloneElement} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import MaterialFieldSeparator from '../_MaterialFieldSeparator';
import Theme from '../Theme';

import Util from '../_vendors/Util';

class MaterialProvider extends Component {

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.state = {
            isHover: false,
            isFocus: false
        };

        this.setFocused = ::this.setFocused;
        this.setHovered = ::this.setHovered;

    }

    setFocused(isFocus) {
        this.setState({
            isFocus
        });
    }

    setHovered(isHover) {
        this.setState({
            isHover
        });
    }

    render() {

        const {

                children, className, theme, label, isLabelAnimate, hasValue, required, useSeparator,

                ...restProps

            } = this.props,
            {isHover, isFocus} = this.state,

            providerClassName = classNames('material-provider', {
                'has-label': label,
                'has-value': hasValue,
                'has-separator': useSeparator,
                animated: isLabelAnimate,
                focused: isFocus,
                [className]: className
            });

        return (
            <div {...restProps}
                 className={providerClassName}>

                <div className="material-provider-label-wrapper">

                    <span className="material-provider-label">{label}</span>

                    {
                        required ?
                            <div className="material-provider-required-dot"></div>
                            :
                            null
                    }

                </div>

                {
                    Children.map(children, child => cloneElement(child, {
                        ...child.props,
                        className: classNames('material-provider-field', {
                            [child.props.className]: child.props.className
                        }),
                        inputClassName: classNames('material-provider-field-input', {
                            [child.props.inputClassName]: child.props.inputClassName
                        }),
                        placeholderClassName: classNames('material-provider-field-placeholder', {
                            [child.props.placeholderClassName]: child.props.placeholderClassName
                        }),
                        onFocus: (...args) => {
                            child.props.onFocus && child.props.onFocus(...args);
                            this.setFocused(true);
                        },
                        onBlur: (...args) => {
                            child.props.onBlur && child.props.onBlur(...args);
                            this.setFocused(false);
                        },
                        onMouseOver: (...args) => {
                            child.props.onMouseOver && child.props.onMouseOver(...args);
                            this.setHovered(true);
                        },
                        onMouseOut: (...args) => {
                            child.props.onMouseOut && child.props.onMouseOut(...args);
                            this.setHovered(false);
                        }
                    }))
                }

                {
                    useSeparator ?
                        <MaterialFieldSeparator theme={theme}
                                                isHover={isHover}
                                                isFocus={isFocus}/>
                        :
                        null
                }

            </div>
        );

    }
};

MaterialProvider.propTypes = {

    /**
     * The CSS class name of the root element.
     */
    className: PropTypes.string,

    /**
     * Override the styles of the root element.
     */
    style: PropTypes.object,

    theme: PropTypes.oneOf(Util.enumerateValue(Theme)),

    label: PropTypes.string,
    isLabelAnimate: PropTypes.bool,

    hasValue: PropTypes.bool,
    required: PropTypes.bool,

    useSeparator: PropTypes.bool

};

MaterialProvider.defaultProps = {

    className: null,
    style: null,
    theme: Theme.DEFAULT,

    label: null,
    isLabelAnimate: true,

    hasValue: false,
    required: false,

    useSeparator: true

};

export default MaterialProvider;