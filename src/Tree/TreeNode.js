import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Util from '../_vendors/Util';

import Checkbox from '../Checkbox';
export default class TreeNode extends Component {

    constructor(props) {

        super(props);
        this.state = {
            expaned: true
        };

        this.selectedHandle = this::this.selectedHandle;
        this.treeSwitcherHandle = this::this.treeSwitcherHandle;
        this.checkboxSelected = this::this.checkboxSelected;
    }

    selectedHandle(node) {
        let arr = [];
        arr.push(node);
        this.props.onChangeHandle && this.props.onChangeHandle(arr);
    }

    treeSwitcherHandle() {
        // debugger
        const {expaned} = this.state;
        this.setState({
            expaned: !expaned
        });
    }

    checkboxSelected(node) {
        const {data, value} = this.props;
        let flag = false;
        let posCode = '';
        Util.tree(data, function (item, index, pos) {
            if (node.id === item.id) {
                posCode = pos;
            }
        });
        if (node.children) {
            var selectedNodes = [];
            Util.tree(data, function (item, index, pos) {
                if (pos.indexOf(posCode) === 0) {
                    selectedNodes.push(item);
                }
            });
        }

        for (let i = 0; i < value.length; i++) {
            if (value[i].id === node.id) {
                flag = true;
                break
            } else {
                flag = false;
            }
        }
        // debugger
        if (flag) {
            if (node.children) {
                for (let i = 0; i < selectedNodes.length; i++) {
                    let index = value.findIndex(function (item, index, arr) {
                        return item.id == selectedNodes[i].id;
                    })
                    value.splice(index, 1);
                }
            } else {
                let index = value.findIndex(function (item, index, arr) {
                    return item.id == node.id;
                })
                value.splice(index, 1);
            }
            for (let i = node.deep; i > 0; i--) {
                let arr = posCode.split('-');
                arr.pop();
                let parentPos = arr.join('-');
                let parentNode, parentNodeArr = [];
                Util.tree(data, function (item, index, pos) {
                    if (pos.indexOf(parentPos) === 0 && parentPos !== pos) {
                        parentNodeArr.push(item)
                    }
                    if (parentPos == pos) {
                        parentNode = item;
                    }
                });
                let index = value.findIndex(function (item, index, arr) {
                    return item.id == parentNode.id;
                })
                if (index !== -1) {
                    value.splice(index, 1);
                }
                posCode = parentPos;
            }
        } else {
            if (node.children) {
                for (let i = 0; i < selectedNodes.length; i++) {
                    let flag = true;
                    for (let j = 0; j < value.length; j++) {
                        if (selectedNodes[i].id == value[j].id) {
                            flag = false;
                            break;
                        }
                    }
                    if (flag) {
                        value.push(selectedNodes[i]);
                    }
                }
            } else {
                value.push(node);
            }
            for (let i = node.deep; i > 0; i--) {
                let arr = posCode.split('-');
                arr.pop();
                let parentPos = arr.join('-');
                let parentNode, parentNodeArr = [];
                let nodeFlag = true;
                //debugger
                Util.tree(data, function (item, index, pos) {
                    if (pos.indexOf(parentPos) === 0 && parentPos !== pos) {
                        parentNodeArr.push(item)
                    }
                    if (parentPos == pos) {
                        parentNode = item;
                    }
                });
                for (let i = 0; i < parentNodeArr.length; i++) {
                    let index = value.findIndex(function (item, index, arr) {
                        return item.id == parentNodeArr[i].id;
                    })
                    if (index == -1) {
                        nodeFlag = false
                    }
                }
                if (!nodeFlag) {
                    let index = value.findIndex(function (item, index, arr) {
                        return item.id == parentNode.id;
                    })
                    if (index !== -1) {
                        value.splice(index, 1);
                    }
                    break;
                } else {
                    let flag = false;
                    for (let i = 0; i < value.length; i++) {
                        if (parentNode.id === value[i].id) {
                            flag = true;
                            break;
                        }
                    }
                    if (!flag) {
                        value.push(parentNode);
                    }
                    posCode = parentPos;
                }
            }
        }
        this.props.onChangeHandle && this.props.onChangeHandle(value)
    }

    renderIcon(icon, text) {
        return (
            icon ?
                <span>
                    <i className={`fa ${icon}`} aria-hidden="true"></i>
                    {text}
                </span>
                :
                text
        )

    }


    getItemValue(node) {
        let data = this.props.value;
        let flag = false;
        for (let i = 0; i < data.length; i++) {
            if (data[i].id === node.id) {
                flag = true;
                break
            } else {
                flag = false;
            }
        }
        return flag;
    }


    renderHeader(node) {
        const {value, multiple, iconCls} = this.props;
        const {expaned} = this.state;
        let id = (value && value.length) ? value[0].id : '';
        let checkboxValue = this.getItemValue(node);
        return (
            <div className="parentNode">
                { node && node.children ?
                    <span className={`tree-switcher ${expaned ? '' : 'down'} ${multiple ? 'multiple-tree-switcher':''}`}
                          onClick={this.treeSwitcherHandle}
                    >
                        <i className={`fa fa-caret-right`} aria-hidden="true"></i>
                    </span>
                    :
                    <span className="tree-switcher"></span>
                }
                {
                    multiple ?
                        <Checkbox label={this.renderIcon(iconCls, node.text)}
                                  value={checkboxValue}
                                  onChange={()=> {
                                      this.checkboxSelected(node)
                                  }}/>
                        :
                        <span className={`node-text ${ id == node.id ? 'active' : ''}`}
                              onClick={() => {
                                  this.selectedHandle(node);
                              }}>
                            {
                                iconCls ?
                                    <i className={`fa ${iconCls}`} aria-hidden="true"></i>
                                    :
                                    null
                            }
                            {node.text}
                        </span>
                }
            </div>
        );
    }

    renderDrawer(node) {
        const {expaned} = this.state;
        return node && node.children && expaned ? this.renderChildren(node.children) : null;
    }

    renderChildren(arr) {
        const {data, value, multiple, iconCls} = this.props;
        let childList = arr;
        if (!Array.isArray(childList)) {
            childList = childList ? [childList] : [];
        }
        return (
            <div ref="subtree"
                 className="sub-options">
                {childList.map((child, index) =>
                    <TreeNode key={child.id}
                              data={data}
                              node={child}
                              value={value}
                              multiple={multiple}
                              iconCls={iconCls}
                              onChangeHandle={(value) => {
                                  this.props.onChangeHandle(value);
                              }}
                    />
                )}
            </div>
        );
    }

    render() {
        const {node} = this.props;
        return (
            <div ref="option"
                 className="option">
                {this.renderHeader(node)}
                {this.renderDrawer(node)}
            </div>
        );

    }
};

TreeNode.propTypes = {
    className: PropTypes.string,
    value: PropTypes.array,
    data: PropTypes.array,
    onChange: PropTypes.func
};
