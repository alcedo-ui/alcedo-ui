/**
 * @file Tip component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';

import Portal from '../Portal';
import TipBody from '../_TipBody';

import Position from '../_statics/Position';

class Tip extends Component {

    static Position = Position;

    constructor(props, ...restArgs) {
        super(props, ...restArgs);
    }

    render() {

        const {visible} = this.props;

        return (
            <Portal visible={visible}>
                <TipBody {...this.props}/>
            </Portal>
        );

    }

};

Tip.propTypes = TipBody.propTypes;
Tip.defaultProps = TipBody.defaultProps;

export default Tip;