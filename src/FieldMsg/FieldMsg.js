/**
 * @file FieldMsg component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Popover from '../Popover';

import Util from '../_vendors/Util';
import MsgType from '../_statics/MsgType';
import Position from '../_statics/Position';

class FieldMsg extends Component {

    static Type = MsgType;
    static Position = Position;

    constructor(props, ...restArgs) {
        super(props, ...restArgs);
    }

    render() {

        const {children, className, style, type, visible, position, msg} = this.props,

            wrapperClassName = classNames('field-msg', {
                [className]: className
            });

        return (
            <Popover className={wrapperClassName}
                     style={style}
                     theme={type}
                     visible={visible}
                     position={position}>

                {msg}

                {children}

            </Popover>
        );

    }

};

FieldMsg.propTypes = {

    className: PropTypes.string,
    style: PropTypes.object,
    type: PropTypes.oneOf(Util.enumerateValue(MsgType)),

    visible: Position.bool,
    position: PropTypes.oneOf(Util.enumerateValue(Position)),
    msg: PropTypes.any

};

FieldMsg.defaultProps = {

    className: null,
    style: null,
    type: MsgType.DEFAULT,

    visible: false,
    position: Position.BOTTOM_LEFT,
    msg: null

};

export default FieldMsg;