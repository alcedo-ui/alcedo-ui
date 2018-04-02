/**
 * @file FieldMsg component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import classNames from 'classnames';

import Tip from '../Tip';

import MsgType from '../_statics/MsgType';
import Position from '../_statics/Position';

import PureRender from '../_vendors/PureRender';
import Util from '../_vendors/Util';

@PureRender
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

if (process.env.NODE_ENV === 'development') {

    const PropTypes = require('prop-types');

    FieldMsg.propTypes = {

        className: PropTypes.string,
        style: PropTypes.object,
        type: PropTypes.oneOf(Util.enumerateValue(MsgType)),

        visible: PropTypes.bool,
        triggerEl: PropTypes.object,
        position: PropTypes.oneOf(Util.enumerateValue(Position)),
        msg: PropTypes.any

    };

}

FieldMsg.defaultProps = {

    type: MsgType.DEFAULT,

    visible: false,
    position: Position.BOTTOM_LEFT

};

export default FieldMsg;