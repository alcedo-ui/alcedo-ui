/**
 * Created by Administrator on 2017/4/6.
 */
import React, {Component, PropTypes} from 'react';
import Event from 'vendors/Event';

export default class _TimeItems extends Component {
    constructor(props) {

        super(props);
        this.state={
            value:this.props.value
        }
        this.clickHandle = this::this.clickHandle;
        this.mousemoveHandle = this::this.mousemoveHandle;
        this.mouseoutHandle = this::this.mouseoutHandle;

    }

    clickHandle(value){
        if(this.refs.timeItems){
            // debugger
            this.refs.timeItems.scrollTop = (+value)*30
        }
        this.props.onChange && this.props.onChange(value);
    }
    mousemoveHandle(e){
        this.refs.timeItems.style.overflowY = 'scroll'
    }
    mouseoutHandle(e){
        this.refs.timeItems.style.overflowY = 'hidden'
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.value!== this.props.value || nextProps.popupVisible!== this.props.popupVisible) {
            if(nextProps.popupVisible){
                if(this.refs.timeItems){
                    this.refs.timeItems.scrollTop = (+(nextProps.value))*30
                }
            }
            this.setState({
                value : nextProps.value
            });
        }
    }
    componentDidMount() {
        const {value}=this.props;
        if(this.refs.timeItems){
            this.refs.timeItems.scrollTop = (+value)*30
        }
        this.setState({
            value : value
        });
        Event.addEvent(this.refs.timeItems, 'mousemove', this.mousemoveHandle);
        Event.addEvent(this.refs.timeItems, 'mouseout', this.mouseoutHandle);
    }

    componentWillUnmount() {
        Event.removeEvent(this.refs.timeItems, 'mousemove', this.mousemoveHandle);
        Event.removeEvent(this.refs.timeItems, 'mouseout', this.mouseoutHandle);
    }
    render(){
        const {className,data}=this.props;
        const {value}=this.state;
        return(
            <ul className={`timeItems ${className ? className : ''}`}
                ref="timeItems">
                {
                    data.map((item,key)=>{
                        return(
                            <li className={`timeItem ${item.value ? '': 'disabled'} ${item.text == value ? 'active': ''}`}
                                key={key}
                                onClick={()=>{
                                    if(item.value){
                                        this.clickHandle(item.text)
                                    }
                                }}>
                                {item.text}
                            </li>
                        )
                    })
                }
            </ul>
        )

    }
}
_TimeItems.PropTypes={

}