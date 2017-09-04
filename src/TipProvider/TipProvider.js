import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Tip from '../Tip';

import Util from '../_vendors/Util';

import './TipProvider.css';

export default class TipProvider extends Component {

    static Position = Tip.Position;

    constructor(props) {

        super(props);

        this.state = {
            tipVisible: false,
            triggerEl: null
        };

        this.showTip = this::this.showTip;
        this.hideTip = this::this.hideTip;

    }

    showTip(e) {
        if (!this.state.tipVisible) {
            this.setState({
                tipVisible: true,
                triggerEl: e.target
            });
        }
    }

    hideTip() {
        this.setState({
            tipVisible: false
        });
    }

    render() {

        const {children, text} = this.props;

        if (!text) {
            return children;
        }

        const {className, style, position} = this.props,
            {tipVisible, triggerEl} = this.state;

        return (
            <div className={'tip-provider' + (className ? ' ' + className : '')}
                 style={style}>

                <div className="children-wrapper"
                     onMouseOver={e => {
                         this.showTip(e);
                     }}
                     onMouseEnter={e => {
                         this.showTip(e);
                     }}>
                    {children}
                </div>

                <Tip text={text}
                     visible={tipVisible}
                     triggerEl={triggerEl}
                     position={position}
                     onRequestClose={this.hideTip}/>

            </div>
        );
    }

}

TipProvider.propTypes = {

    /**
     * The CSS class name of the root element.
     */
    className: PropTypes.string,

    /**
     * Override the styles of the root element.
     */
    style: PropTypes.object,

    text: PropTypes.string,

    /**
     * The position of Tip.Can be top,left,right,bottom,top-left,top-right,bottom-left,bottom-right.
     */
    position: PropTypes.oneOf(Util.enumerateValue(TipProvider.Position))

};

TipProvider.defaultProps = {

    className: '',
    style: null,

    text: '',

    position: TipProvider.Position.BOTTOM

};