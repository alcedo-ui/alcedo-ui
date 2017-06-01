import React, {Component} from 'react';
import PropTypes from 'prop-types';
import TreeNode from './TreeNode';

import './Tree.css';

export default class Tree extends Component {

    constructor(props) {

        super(props);

        this.state = {
            filter: this.props.filter,
            value: this.props.value
        };

        this.onChangeHandle = this::this.onChangeHandle;
        this.filterChangeHandle = this::this.filterChangeHandle;

    }

    onChangeHandle(item) {
        this.setState({
            filter: '',
            value: item
        }, () => {
            this.props.onChange && this.props.onChange(item);
        });
    }

    filterChangeHandle(e) {
        const filter = e.target.value;
        this.setState({
            filter: filter
        }, ()=> {
            this.props.filterChangeHandle && this.props.filterChangeHandle(filter)
        });
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

    filterListLength(list) {
        let length = 0;
        for (let i = 0; i < list.length; i++) {
            if (list[i].children) {
                length += list[i].children.length;
                this.filterListLength(list[i].children);
            }
        }
    }

    componentWillReceiveProps(nextProps) {
        if (JSON.stringify(nextProps.value) !== JSON.stringify(this.props.value)) {
            this.setState({
                value: nextProps.value
            });
        }
    }

    componentDidMount() {
        this.setState({
            value: this.props.value
        });
    }

    render() {

        const {data, className, style, multiple, placeholder} = this.props;
        const {filter, value} = this.state;
        const {getFilterList, filterChangeHandle} = this;
        this.filterList = getFilterList(data, filter);

        return (
            <div ref="Tree"
                 className={`tree ${className ? className : ''}`}
                 style={style}>
                <div className="tree-inner">
                    <input ref="filter"
                           type="text"
                           className="filter"
                           value={filter}
                           placeholder={placeholder}
                           onChange={filterChangeHandle}
                    />
                    {
                        this.filterList.length == 0 ?
                            <div ref="options"
                                 className="options noValue">
                                <div className="option disabled">
                                    No value matched
                                </div>
                            </div>
                            :
                            <div ref="options"
                                 className="options">
                                {
                                    this.filterList.map((item, index) => {
                                        return (
                                            <TreeNode key={item.id}
                                                      node={item}
                                                      multiple={multiple}
                                                      data={this.filterList}
                                                      className="option"
                                                      value={value}
                                                      onChangeHandle={(value) => {
                                                          this.onChangeHandle(value);
                                                      }}/>
                                        );
                                    })
                                }
                            </div>
                    }
                </div>
            </div>
        );

    }
};

Tree.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    value: PropTypes.array,
    data: PropTypes.array,
    onChange: PropTypes.func,
    placeholder: PropTypes.string
};

Tree.defaultProps = {
    value: [],
    placeholder: 'Search',
    filter: ''
};