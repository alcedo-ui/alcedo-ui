import React, {Component} from 'react';
import PropTypes from 'prop-types';

import TipContainer from '../TipContainer';
import ListItem from '../_ListItem';
import Theme from '../Theme';

import Util from '../_vendors/Util';

import './ListGroup.css';

export default class ListGroup extends Component {

    constructor(props) {

        super(props);

        this.clickHandler = this::this.clickHandler;
        this.mouseEnterHandler = this::this.mouseEnterHandler;
        this.mouseLeaveHandler = this::this.mouseLeaveHandler;

    }

    clickHandler() {
        const {disabled, onTouchTap} = this.props;
        !disabled && onTouchTap && onTouchTap();
    }

    mouseEnterHandler(e) {
        const {onMouseEnter} = this.props;
        onMouseEnter && onMouseEnter(e);
    }

    mouseLeaveHandler(e) {
        const {onMouseLeave} = this.props;
        onMouseLeave && onMouseLeave(e);
    }

    render() {

        const {
                children, className, style, theme, text, iconCls, rightIconCls, tip, tipPosition,
                disabled, isLoading
            } = this.props,

            listGroupClassName = (theme ? ` theme-${theme}` : '') + (className ? ' ' + className : '');

        return (
            <TipContainer className='block'
                          text={tip}
                          tipPosition={tipPosition}>

                <div className={'list-group' + listGroupClassName}
                     style={style}
                     disabled={disabled || isLoading}
                     onClick={this.clickHandler}
                     onMouseEnter={this.mouseEnterHandler}
                     onMouseLeave={this.mouseLeaveHandler}>

                    <ListItem className="list-group-name"
                              text={text}
                              iconCls={iconCls}
                              rightIconCls={rightIconCls}
                              disabled={disabled}
                              isLoading={isLoading}
                              readOnly={true}/>

                    <div className="list-group-item-wrapper">
                        {children}
                    </div>

                </div>
            </TipContainer>
        );

    }
};

ListGroup.propTypes = {

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
    theme: PropTypes.oneOf(Object.keys(Theme).map(key => Theme[key])),

    /**
     * The text value of the list button. Type can be string or number.
     */
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     * The list item's display text. Type can be string, number or bool.
     */
    text: PropTypes.any,

    /**
     * If true, the list button will be disabled.
     */
    disabled: PropTypes.bool,

    /**
     * If true,the button will be have loading effect.
     */
    isLoading: PropTypes.bool,

    /**
     * Use this property to display an icon. It will display on the left.
     */
    iconCls: PropTypes.string,

    /**
     * Use this property to display an icon. It will display on the right.
     */
    rightIconCls: PropTypes.string,

    /**
     *
     */
    tip: PropTypes.string,

    /**
     *
     */
    tipPosition: PropTypes.oneOf(Util.enumerateValue(TipContainer.Position)),

    /**
     * Callback function fired when a list item touch-tapped.
     */
    onTouchTap: PropTypes.func,

    /**
     *
     */
    onMouseEnter: PropTypes.func,

    /**
     *
     */
    onMouseLeave: PropTypes.func

};

ListGroup.defaultProps = {

    className: '',
    style: null,

    theme: Theme.DEFAULT,

    value: '',
    text: '',

    disabled: false,
    isLoading: false,

    iconCls: '',
    rightIconCls: '',

    tip: '',
    tipPosition: TipContainer.Position.BOTTOM

};