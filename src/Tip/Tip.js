/**
 * @file Tip component
 * @author sunday(sunday.wei@derbysoft.com)
 */
import React, {Component} from 'react';

import SubtreeContainer from '../_SubtreeContainer';
import TipBody from '../_TipBody';

export default class Tip extends Component {

    static Position = TipBody.Position;

    constructor(props, ...restArgs) {
        super(props, ...restArgs);
    }

    render() {

        const {visible} = this.props;

        return (
            <SubtreeContainer visible={visible}>
                <TipBody {...this.props}/>
            </SubtreeContainer>
        );

    }

}

Tip.propTypes = TipBody.propTypes;
Tip.defaultProps = TipBody.defaultProps;