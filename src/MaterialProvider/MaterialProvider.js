/**
 * @file MaterialProvider component
 */

import React, {Component, Children, cloneElement} from 'react';
import PropTypes from 'prop-types';

// Components
import MaterialFieldSeparator from '../_MaterialFieldSeparator';

// Statics
import Theme from '../Theme';

// Vendors
import classNames from 'classnames';
import Util from '../_vendors/Util';

class MaterialProvider extends Component {

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.state = {
            isHover: false,
            isFocus: false
        };

    }

    focus = () => {
        this.setState({
            isFocus: true
        });
    };

    blur = () => {
        this.setState({
            isFocus: false
        });
    };

    setHovered = isHover => {
        this.setState({
            isHover
        });
    };

    render() {

        const {
                children, className, theme, label, isLabelAnimate, hasValue, disabled, required, useSeparator,
                ...restProps
            } = this.props,
            {isHover, isFocus} = this.state;

        return (
            <div {...restProps}
                 className={classNames('material-provider', `theme-${theme}`, {
                     'has-label': label,
                     'has-value': hasValue,
                     'has-separator': useSeparator,
                     animated: isLabelAnimate,
                     focused: isFocus,
                     [className]: className
                 })}
                 disabled={disabled}>

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
                    Children.map(children, child => {

                        const {triggerClassName, placeholderClassName, ...restProps} = child.props,
                            props = {
                                ...restProps,
                                className: classNames('material-provider-field', {
                                    [restProps.className]: restProps.className
                                }),
                                onFocus: (...args) => {
                                    restProps.onFocus && restProps.onFocus(...args);
                                    this.focus();
                                },
                                onBlur: (...args) => {
                                    restProps.onBlur && restProps.onBlur(...args);
                                    this.blur();
                                },
                                onMouseOver: (...args) => {
                                    restProps.onMouseOver && restProps.onMouseOver(...args);
                                    this.setHovered(true);
                                },
                                onMouseOut: (...args) => {
                                    restProps.onMouseOut && restProps.onMouseOut(...args);
                                    this.setHovered(false);
                                }
                            };

                        // react component element
                        if (typeof child.type !== 'string') {
                            props.triggerClassName = classNames('material-provider-field-trigger', {
                                [triggerClassName]: triggerClassName
                            });
                            props.placeholderClassName = classNames('material-provider-field-placeholder', {
                                [placeholderClassName]: placeholderClassName
                            });
                        }

                        return cloneElement(child, props);

                    })
                }

                {
                    useSeparator ?
                        <MaterialFieldSeparator theme={theme}
                                                isHover={isHover}
                                                isFocus={isFocus}
                                                disabled={disabled}/>
                        :
                        null
                }

            </div>
        );

    }
}

MaterialProvider.propTypes = {

    children: PropTypes.any,

    /**
     * The CSS class name of the root element.
     */
    className: PropTypes.string,

    /**
     * Override the styles of the root element.
     */
    style: PropTypes.object,

    theme: PropTypes.oneOf(Util.enumerateValue(Theme)),

    label: PropTypes.any,
    isLabelAnimate: PropTypes.bool,

    hasValue: PropTypes.bool,
    disabled: PropTypes.bool,
    required: PropTypes.bool,

    useSeparator: PropTypes.bool

};

MaterialProvider.defaultProps = {

    theme: Theme.DEFAULT,

    isLabelAnimate: true,

    hasValue: false,
    disabled: false,
    required: false,

    useSeparator: true

};

export default MaterialProvider;
