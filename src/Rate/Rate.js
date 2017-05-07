import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Event from '../_vendors/Event';

import './Rate.css';

export default class Rate extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: 0
        };
    }

    hoverHandle(value){
        if(value){
            this.setState({
                value
            })
        }
    }
    componentDidMount() {
        const {value} =this.props;
        if(value){
            this.setState({
                value
            })
        }
    }

    render() {
        const {count, className, style ,allowHalf} = this.props;
        const {value} = this.state;

        const items = [];

        if(allowHalf){
            for(let i = 0; i < count; i++){
                let item =(
                    <div className="half-star">
                        <i className={`fa fa-star-half ${i < value ? 'full':'zero'}`}
                           onMouseOver={() => {
                               this.hoverHandle(i);
                           }}></i>
                        <i className={`fa fa-star-half right  ${i < value && i+1 <= value ? 'full':'zero'}`}
                           onMouseOver={() => {
                               this.hoverHandle(i+0.5);
                           }}></i>
                    </div>
                )
                items.push(item)
            }
        }else{
            for(let i = 0; i < count; i++){
                let item =(
                    <div className="star">
                        <i className={`fa fa-star ${i < value ? 'full':'zero'}`}
                           onMouseOver={() => {
                               this.hoverHandle(i+1);
                           }}></i>
                    </div>
                )
                items.push(item)
            }
        }


        return (
            <div className={`rate ${className ? className : ''}`}
                 style={style}>
                {
                    items.map((item,key)=>{
                       return (
                           <div key={key}>{item}</div>
                       )
                    })
                }
            </div>
        );
    }
};

Rate.propTypes = {

    /**
     * The CSS class name of the root element.
     */
    className: PropTypes.string,

    /**
     * Override the styles of the root element.
     */
    style: PropTypes.object,

    /**
     * If true,the slider will have leftPoint.
     */
    value: PropTypes.number,

    allowHalf: PropTypes.bool,

    disabled: PropTypes.bool,

    /**
     * Callback function fired when the slider change.
     */
    onChange: PropTypes.func

};

Rate.defaultProps = {
    className: '',
    style:null,
    count: 5,
    defaultValue: 0,
    disabled: false,
    tip: 'left',
    decimalPlaces: 0
};

