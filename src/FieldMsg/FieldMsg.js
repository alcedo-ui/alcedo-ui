/**
 * @file FieldMsg component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Tip from '../Tip';

import MsgType from '../_statics/MsgType';
import Position from '../_statics/Position';

import Util from '../_vendors/Util';

class FieldMsg extends Component {

    static Type = MsgType;
    static Position = Position;

    constructor(props, ...restArgs) {
        super(props, ...restArgs);
    }

    render() {

        const {
                children, className, style, type, visible,
                triggerEl, position, msg, parentEl
            } = this.props,

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
                 parentEl={parentEl}
                 position={position}>

                {msg}

                {children}

            </Tip>
        );

    }

}

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

    type: MsgType.DEFAULT,

    visible: false,
    position: Position.BOTTOM_LEFT

};

export default FieldMsg;