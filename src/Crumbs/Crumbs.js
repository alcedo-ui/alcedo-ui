/**
 * @file Crumbs component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Crumb from '../_Crumb';
import Tip from '../Tip';
import Theme from '../Theme';

import Util from '../_vendors/Util';

class Crumbs extends Component {

    static Theme = Theme;

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.itemRender = ::this.itemRender;

    }

    itemRender(item, index) {

        if (item.renderer) {
            return item.renderer(item, index);
        }

        const {itemRenderer, onItemTouchTap} = this.props;
        if (itemRenderer) {
            return itemRenderer(item, index);
        }

        return <Crumb {...item}
                      onClick={e => {
                          item.onClick && item.onClick(e);
                          onItemTouchTap && onItemTouchTap(e, item, index);
                      }}/>;

    }

    render() {

        const {className, style, data, separator, showLastSeparator} = this.props,

            crumbsClassName = classNames('crumbs', {
                [className]: className
            });

        return (
            <div className={crumbsClassName}
                 style={style}>

                {
                    data && data.map((item, index) =>
                        <div key={index}
                             className="crumbs-item-wrapper">

                            {this.itemRender(item, index)}

                            {
                                !showLastSeparator && index === data.length - 1 ?
                                    null
                                    :
                                    <div className="crumbs-separator">
                                        {separator}
                                    </div>
                            }

                        </div>
                    )
                }

            </div>
        );

    }
}

Crumbs.propTypes = {

    /**
     * The CSS class name of the root element.
     */
    className: PropTypes.string,

    /**
     * Override the styles of the root element.
     */
    style: PropTypes.object,

    /**
     * The theme of the Crumbs.
     */
    theme: PropTypes.oneOf(Util.enumerateValue(Theme)),

    /**
     * Crumbs data config.
     */
    data: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.shape({

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
        renderer: PropTypes.func,

        /**
         * Callback function fired when a list item touch-tapped.
         */
        onClick: PropTypes.func

    }), PropTypes.string, PropTypes.number])).isRequired,

    separator: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),

    showLastSeparator: PropTypes.bool,

    /**
     * Crumbs data renderer callback.
     */
    itemRenderer: PropTypes.func,

    onItemTouchTap: PropTypes.func

};

Crumbs.defaultProps = {

    theme: Theme.DEFAULT,

    separator: '>',
    showLastSeparator: false

};

export default Crumbs;