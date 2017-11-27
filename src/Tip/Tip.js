/**
 * @file Tip component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';

import Portal from '../Portal';
import TipBody from '../_TipBody';

export default class Tip extends Component {

    static Position = TipBody.Position;

    constructor(props, ...restArgs) {
        super(props, ...restArgs);
    }

    render() {
        return this.props.visible ?
            <Portal>
                <TipBody {...this.props}/>
            </Portal>
            :
            null;
    }

};

Tip.propTypes = TipBody.propTypes;
Tip.defaultProps = TipBody.defaultProps;