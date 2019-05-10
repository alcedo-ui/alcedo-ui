/**
 * @file TransferList component
 * @author sunday(sunday.wei@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import cloneDeep from 'lodash/cloneDeep';
import classNames from 'classnames';

import TextField from '../TextField';
import Checkbox from '../Checkbox';

class TransferList extends Component {

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.state = {
            filter: ''
        };

    }

    select = item => {

        if (!item || item.disabled) {
            return;
        }

        let data = cloneDeep(this.props.value),
            selectAll = this.state.selectAll,
            flag = false;

        for (let i = 0; i < data.length; i++) {
            if (data[i].id === item.id) {
                flag = true;
                break;
            }
        }

        if (flag) {
            let index = data.findIndex(value => value.id == item.id);
            data.splice(index, 1);
            selectAll = false;
        } else {
            data.push(item);
            if (data.length == this.props.data.length) {
                selectAll = true;
            }
        }

        this.setState({
            selectAll
        }, () => {
            const {onChange} = this.props;
            onChange && onChange(data);
        });

    };

    handleSelectAll = () => {
        const {selectAll, filter} = this.state;
        const {data} = this.props;
        const filterList = this.getFilterList(data, filter);
        let newData = [];
        for (let i = 0; i < filterList.length; i++) {
            if (!filterList[i]['disabled']) {
                newData.push(filterList[i]);
            }
        }
        let value = selectAll ? [] : newData;
        this.setState({
            selectAll: !selectAll
        }, () => {
            this.props.onChange && this.props.onChange(value);
        });
    };

    handleFilterChange = value => {
        this.setState({
            filter: value,
            selectAll: false
        }, () => {
            this.props.onChange && this.props.onChange([]);
        });
    };

    getItemValue = id => {
        let data = this.props.value;
        let flag = false;
        for (let i = 0; i < data.length; i++) {
            if (data[i].id === id) {
                flag = true;
                break;
            } else {
                flag = false;
            }
        }
        return flag;
    };

    getFilterList = (list, filter) => {
        return list.filter((value) => {
            if (typeof value == 'object') {
                return value.text.toUpperCase().indexOf(filter.toUpperCase()) != -1;
            } else {
                return value.toUpperCase().indexOf(filter.toUpperCase()) != -1;
            }
        });
    };

    static getDerivedStateFromProps(props, state) {

        if (props && state && state.prevProps
            && (!props.data || !state.prevProps.data || props.data.length !== state.prevProps.data.length)) {
            return {
                prevProps: props,
                selectAll: false
            };
        }

        return {
            prevProps: props
        };

    }

    render() {

        const {className, listStyle, data, value} = this.props,
            {filter, selectAll} = this.state;

        this.filterList = this.getFilterList(data, filter);

        return (
            <div className={classNames('transfer-list', {
                [className]: className
            })}
                 style={listStyle}>

                <div className="transfer-header">
                    <Checkbox label={value && value.length > 0 ?
                        value.length + '/' + this.filterList.length + ' items'
                        :
                        this.filterList.length + ' items'}
                              checked={selectAll}
                              onChange={this.handleSelectAll}/>
                </div>

                <TextField className="search"
                           rightIconCls={'fas fa-search'}
                           onChange={this.handleFilterChange}
                           placeholder={'Search here'}
                           value={filter}/>

                <div className="options">
                    {
                        this.filterList && this.filterList.map(item =>
                            <div key={item.text}
                                 className={`option ${item.disabled ? 'disabled' : ''}`}>
                                <Checkbox label={item.text}
                                          checked={this.getItemValue(item.id)}
                                          disabled={item.disabled ? item.disabled : false}
                                          onChange={() => this.select(item)}/>
                            </div>
                        )
                    }
                </div>

            </div>
        );
    }

}

TransferList.propTypes = {

    /**
     * The CSS class name of the root element.
     */
    className: PropTypes.string,

    /**
     * Override the styles of the root element.
     */
    listStyle: PropTypes.object,

    data: PropTypes.array,
    value: PropTypes.array,

    onChange: PropTypes.func

};

export default TransferList;
