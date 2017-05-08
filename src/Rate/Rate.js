import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Event from '../_vendors/Event';

import './Rate.css';

export default class Rate extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: 0,
            items:[]
        };

        this.hoverHandle = this::this.hoverHandle;
        this.createItems = this::this.createItems;
        this.renderStar = this::this.renderStar;
    }

    triggerEventHandle(el, triggerEl) {

        while (el) {
            if (el == triggerEl) {
                return true;
            }
            el = el.parentNode;
        }

        return false;

    }

    hoverHandle(e){
        const mouseEnterFalg = this.triggerEventHandle(e.target , require('react-dom').findDOMNode(this.refs.rate));
        let {value}=this.state;
        if(mouseEnterFalg){
            if(e.target.className.indexOf('filter') != -1) {

            }
        }else{
            value = 0;
        }
        const items = this.createItems(value);
        this.setState({
            items
        })
    }

    createItems(value){
        const {allowHalf,count} =this.props;
        let items=[];
        if(allowHalf){
            for(let i = 0; i < count; i++){
                if(i <= value - 1){
                    items.push('full')
                }else if(i < value && i > value - 1){
                    items.push('full-zero')
                }else if(i > value){
                    items.push('full')
                }else{
                    items.push('zero')
                }
            }
        }else{
            for(let i = 0; i < count; i++){
                if( i < value){
                    items.push('full')
                }else if(i > value){
                    items.push('zero')
                }else{
                    items.push('zero')
                }
            }
        }
        return items
    }

    renderStar(type,key){
        const {allowHalf} = this.props;
        if(allowHalf){
            switch (type){
                case 'zero':
                    return (<div className="half-star"
                                  key={key}>
                        <div className="half-star-left">
                            <i className={`fa fa-star-half zero`}></i>
                        </div>
                        <div className="half-star-right">
                            <i className={`fa fa-star-half zero`}></i>
                        </div>
                    </div>)
                    break;
                case 'full':
                    return (<div className="half-star"
                                  key={key}>
                        <div className="half-star-left">
                            <i className={`fa fa-star-half full`}></i>
                        </div>
                        <div className="half-star-right">
                            <i className={`fa fa-star-half full`}></i>
                        </div>
                    </div>)
                    break;
                case 'full-zero':
                    return (<div className="half-star"
                                  key={key}>
                        <div className="half-star-left">
                            <i className={`fa fa-star-half full`}></i>
                        </div>
                        <div className="half-star-right">
                            <i className={`fa fa-star-half zero`}></i>
                        </div>
                    </div>)
                    break;
                default:
                    return (<div className="half-star"
                                  key={key}>
                        <div className="half-star-left">
                            <i className={`fa fa-star-half zero`}></i>
                        </div>
                        <div className="half-star-right">
                            <i className={`fa fa-star-half zero`}></i>
                        </div>
                    </div>)
            }
        }else{
            switch (type){
                case 'zero':
                    return (<div className="star"
                                  key={key}>
                        <i className={`fa fa-star zero`}></i>
                    </div>)
                    break;
                case 'full':
                    return (<div className="star"
                                  key={key}>
                        <i className={`fa fa-star full`}></i>
                    </div>)
                    break;
                default:
                    return (<div className="star"
                                  key={key}>
                        <i className={`fa fa-star zero`}></i>
                    </div>)
            }
        }

    }

    componentDidMount() {
        const {value} =this.props;
        const items = this.createItems(value);
        this.setState({
            value,
            items
        })
        Event.addEvent(document, 'mousemove', this.mouseMoveHandle);
    }

    componentWillUnmount() {
        Event.removeEvent(document, 'mousemove', this.mouseMoveHandle);
        this.unrenderTimeout && clearTimeout(this.unrenderTimeout);
    }




    render() {
        const {count, className, style ,allowHalf} = this.props;
        const {value,items} = this.state;


        return (
            <div className={`rate ${className ? className : ''}`}
                 style={style}
                 ref = "rate">
                {
                    items.map((item,key)=>{
                       return (
                           this.renderStar(item,key)
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

