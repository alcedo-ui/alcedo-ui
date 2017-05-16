import React, {Component} from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import Util from '../_vendors/Util';

import TextField from '../TextField';
import Checkbox from '../Checkbox';


import './Transfer.css';

export default class TransferList extends Component {

    constructor(props) {

        super(props);

        this.state = {
            filter:'',
            selectAll:this.props.selectAll
        };

        this.select = this::this.select;
        this.selectAllHandle = this::this.selectAllHandle;
        this.filterChangeHandle = this::this.filterChangeHandle;
        this.getItemValue = this::this.getItemValue;

    }

    select(item) {
        if(!item.disabled){
            let data = _.cloneDeep(this.props.value);
            let selectAll = this.state.selectAll;
            let flag = false;
            for (let i = 0; i < data.length; i++) {
                if (data[i].id === item.id) {
                    flag = true;
                    break;
                }
            }
            if(flag){
                let index = data.findIndex(function(value, index, arr) {
                    return value.id == item.id;
                })
                data.splice(index, 1);
                selectAll = false;
            }else{
                data.push(item);
                if(data.length == this.props.data.length){
                    selectAll = true;
                }
            }
            this.setState({
                selectAll
            },()=>{
                this.props.onChange && this.props.onChange(data);
            })
        }
    }

    selectAllHandle(){
        const {selectAll,filter}=this.state;
        const {data}=this.props;
        const filterList = this.getFilterList(data, filter);
        let newData=[];
        for(let i = 0;i < filterList.length; i++){
            if(!filterList[i]['disabled']){
                newData.push(filterList[i])
            }
        }
        let value = selectAll ? [] : newData;
        this.setState({
            selectAll:!selectAll
        },()=>{
            this.props.onChange && this.props.onChange(value);
        })
    }

    filterChangeHandle(value) {
        this.setState({
            filter:value,
            selectAll:false
        },()=>{
            this.props.onChange && this.props.onChange([]);
        });
    }

    getItemValue(id) {
        let data = this.props.value;
        let flag = false;
        for (let i = 0; i< data.length; i++) {
            if (data[i].id === id) {
                flag = true;
                break
            }else{
                flag = false;
            }
        }
        return flag;
    }

    getFilterList(list, filter) {
        return list.filter((value) => {
            if (typeof value == 'object') {
                return value.text.toUpperCase().indexOf(filter.toUpperCase()) != -1;
            } else {
                return value.toUpperCase().indexOf(filter.toUpperCase()) != -1;
            }
        });
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.data.length !== this.props.data.length){
            this.setState({
                selectAll:false
            })
        }
    }

    componentDidMount() {

    }

    render() {
        const {className, listStyle, data, value}=this.props;
        const {filter, selectAll }=this.state;
        const {filterChangeHandle, getItemValue, getFilterList, select, selectAllHandle}=this;
        this.filterList = getFilterList(data, filter);

        return (
            <div className={`transfer-list ${className ? className:''}`}
                 style={listStyle}>
                <div className="transfer-header">
                    <Checkbox label={value.length > 0 ? value.length +'/'+this.filterList.length +'items':this.filterList.length +'items'}
                              value={selectAll}
                              onChange={selectAllHandle}/>
                </div>

                <TextField className="search"
                           rightIconCls={'fa fa-search'}
                           onChange={filterChangeHandle}
                           placeholder={'Search here'}
                           value={filter}/>

                <div ref="options"
                     className="options">
                    {

                        this.filterList.map((item, index) => {
                            let itemValue = getItemValue(item.id);
                            return (
                                <div key={index}
                                     className="option">
                                    <Checkbox label={item.text}
                                              value={itemValue}
                                              onChange={()=>{select(item)}}/>
                                </div>
                            );
                        })
                    }
                </div>

            </div>
        );
    }

};

TransferList.propTypes = {

    /**
     * The CSS class name of the root element.
     */
    className: PropTypes.string,

    /**
     * Override the styles of the root element.
     */
    listStyle: PropTypes.object,

    /**
     *
     */
    data: PropTypes.array,

    /**
     *
     */
    value: PropTypes.array


};

TransferList.defaultProps = {
    className: '',
    style: null
};