import React, {Component} from 'react';
import PropTypes from 'prop-types';
import TreeNode from '../_TreeNode';

import './Tree.css';

export default class Tree extends Component {

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.state = {
            filter: props.filter,
            value: props.value
        };

        this.onChangeHandle = ::this.onChangeHandle;
        this.filterChangeHandle = ::this.filterChangeHandle;

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
        }, () => {
            this.props.filterChangeHandle && this.props.filterChangeHandle(filter);
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

        const {data, className, style, multiple, placeholder, iconCls} = this.props,
            {filter, value} = this.state,
            {getFilterList, filterChangeHandle} = this;

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
                                                      iconCls={iconCls}
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

    /**
     * The CSS class name of the root element.
     */
    className: PropTypes.string,

    /**
     * Override the styles of the root element.
     */
    style: PropTypes.object,

    /**
     * The value of default selected item.
     */
    value: PropTypes.array,

    /**
     * The data of tree items.
     */
    data: PropTypes.array,

    /**
     * If true,the tree-node can be multi-select.
     */
    multiple: PropTypes.bool,

    /**
     * Use this property to display an icon.It will display on the left.
     */
    iconCls: PropTypes.string,

    /**
     * Callback function fired when the tree-node is touch-tapped.
     */
    onChange: PropTypes.func,

    /**
     * The placeholder of the text field.
     */
    placeholder: PropTypes.string

};

Tree.defaultProps = {

    className: '',
    style: null,

    value: [],
    placeholder: 'Search',
    filter: '',
    iconCls: ''

};