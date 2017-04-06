import React, {Component, PropTypes} from 'react';

import TextField from './TextField';

import 'sass/components/field/EditText.scss';

export default class EditText extends Component {

    constructor(props) {

        super(props);

        this.state={
            text:this.props.value,
            inputVisible: false
        }

        this.onChangeHandle = this::this.onChangeHandle;
        this.onPressEnterHandle = this::this.onPressEnterHandle;

        this.textClick = this::this.textClick;
    }
    textClick(){
        this.setState({
            inputVisible:true
        })
    }
    onChangeHandle(value){
        this.setState({
            text:value
        })
    }
    onPressEnterHandle(){
        this.setState({
            inputVisible:false
        })
    }

    render() {
        const {className,iconCls}=this.props;
        const {text,inputVisible}=this.state;

        return (
            <div className={`editText ${className}`}>
                {
                    inputVisible ?
                        <TextField value={text}
                                   onChange={this.onChangeHandle}
                                   onPressEnter={this.onPressEnterHandle}/>

                        :
                        <div className="text"
                             onClick={this.textClick}>
                            {
                                iconCls ?
                                    <i className={'td-text-icon ' + iconCls}
                                       aria-hidden="true"></i>
                                    :
                                    null
                            }
                            {text}
                        </div>
                }
            </div>
        );

    }
};

EditText.propTypes = {
    className: PropTypes.string,

};

EditText.defaultProps = {

    className: '',

};