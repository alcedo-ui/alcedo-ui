/**
 * @file Crumb component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import FlatButton from '../FlatButton';
import Tip from '../Tip';
import Theme from '../Theme';

import PureRender from '../_vendors/PureRender';
import Util from '../_vendors/Util';

@PureRender
class Crumb extends Component {

    static Theme = Theme;

    constructor(props, ...restArgs) {
        super(props, ...restArgs);
    }

    render() {

        const {className, href, text, ...restProps} = this.props,

            crumbClassName = classNames('crumb', {
                [className]: className
            });

        return (
            <a href={href}>
                <FlatButton {...restProps}
                            className={crumbClassName}
                            value={text}/>
            </a>
        );

    }
}

Crumb.propTypes = {

    /**
     * The CSS class name of the list button.
     */
    className: PropTypes.string,

    /**
     * Override the styles of the list button.
     */
    style: PropTypes.object,

    /**
     * The theme of the list button.
     */
    theme: PropTypes.oneOf(Util.enumerateValue(Theme)),

    /**
     * The url of crumb.
     */
    href: PropTypes.string,

    /**
     * The text value of the list button.Type can be string or number.
     */
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     * The list item's display text. Type can be string, number or bool.
     */
    text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     * The desc value of the list button. Type can be string or number.
     */
    desc: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     * If true,the list item will be disabled.
     */
    disabled: PropTypes.bool,

    /**
     * If true,the button will be have loading effect.
     */
    isLoading: PropTypes.bool,

    /**
     * If true,the element's ripple effect will be disabled.
     */
    disableTouchRipple: PropTypes.bool,

    /**
     * Use this property to display an icon. It will display on the left.
     */
    iconCls: PropTypes.string,

    /**
     * Use this property to display an icon. It will display on the right.
     */
    rightIconCls: PropTypes.string,

    /**
     * The message of tip.
     */
    tip: PropTypes.string,

    /**
     * The position of tip.
     */
    tipPosition: PropTypes.oneOf(Util.enumerateValue(Tip.Position)),

    /**
     * If true,the item will have center displayed ripple effect.
     */
    rippleDisplayCenter: PropTypes.bool,

    /**
     * You can create a complicated renderer callback instead of value and desc prop.
     */
    itemRenderer: PropTypes.func,

    /**
     * Callback function fired when a list item touch-tapped.
     */
    onTouchTap: PropTypes.func

};

Crumb.defaultProps = {
    theme: Theme.DEFAULT
};

export default Crumb;