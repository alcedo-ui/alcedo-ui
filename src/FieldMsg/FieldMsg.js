/**
 * @file FieldMsg component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Tip from '../Tip';

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

        const {children, className, style, type, visible, triggerEl, position, msg} = this.props,

            wrapperClassName = classNames('field-msg', {
                [className]: className
            });

        return (
            <Tip className={wrapperClassName}
                 contentClassName="field-msg-content"
                 style={style}
                 theme={type}
                 visible={visible}
                 triggerEl={triggerEl}
                 position={position}>

                {msg}

                {children}

            </Tip>
        );

    }

};

FieldMsg.propTypes = {

    className: PropTypes.string,
    style: PropTypes.object,
    type: PropTypes.oneOf(Util.enumerateValue(MsgType)),

    visible: PropTypes.bool,
    triggerEl: PropTypes.object,
    position: PropTypes.oneOf(Util.enumerateValue(Position)),
    msg: PropTypes.any

};

FieldMsg.defaultProps = {

    className: null,
    style: null,
    type: MsgType.DEFAULT,

    visible: false,
    triggerEl: null,
    position: Position.BOTTOM_LEFT,
    msg: null

};

export default FieldMsg;