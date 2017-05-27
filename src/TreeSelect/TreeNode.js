import React, {Component} from 'react';

import Checkbox from 'dist/Checkbox';
export default class TreeNode extends Component {

    constructor(props) {

        super(props);
        this.state = {
            expaned: true
        };

        this.selectedHandle = this::this.selectedHandle;
        this.treeSwitcherHandle = this::this.treeSwitcherHandle;
    }

    selectedHandle(node) {
        this.props.selectedHandle && this.props.selectedHandle(node);
    }

    treeSwitcherHandle() {
        // debugger
        const {expaned} = this.state;
        this.setState({
            expaned: !expaned
        });
    }

    renderHeader(node) {
        const {value} = this.props;
        const {expaned} = this.state;
        let text;
        text = (typeof value === 'object') ? value.text : value;
        // debugger
        return (
            <div className="parentNode">
                { node && node.children ?
                    <span className={`tree-switcher ${expaned ? '' : 'down'}`} onClick={this.treeSwitcherHandle}>
                        <i className={`fa fa-caret-right`} aria-hidden="true"></i>
                    </span>
                    :
                    <span className="tree-switcher"></span>
                }
                <span className={`node-text ${ text == node.text ? 'active' : ''}`} onClick={() => {
                    this.selectedHandle(node);
                }}>{node.text}</span>
            </div>
        );
    }

    renderDrawer(node) {
        const {expaned} = this.state;
        return node && node.children && expaned ? this.renderChildren(node.children) : null;
    }

    renderChildren(data) {
        const {value} = this.props;
        let childList = data;
        if (!Array.isArray(childList)) {
            childList = childList ? [childList] : [];
        }
        return (
            <div ref="subtree"
                 className="sub-options">
                {childList.map((child, index) =>
                    <TreeNode key={child.id || index}
                              node={child}
                              value={value}
                              selectedHandle={(value) => {
                                  this.selectedHandle(value);
                              }}
                    />
                )}
            </div>
        );
    }


    componentDidMount() {
        if (window.addEventListener) {
            window.addEventListener('click', this.toggle);
            window.addEventListener('resize', this.setPosition);
        } else {
            window.attachEvent('click', this.toggle);
            window.attachEvent('resize', this.setPosition);
        }


    }

    componentWillUnmount() {
        if (window.removeEventListener) {
            window.removeEventListener('click', this.toggle);
            window.removeEventListener('resize', this.setPosition);
        } else {
            window.detachEvent('click', this.toggle);
            window.detachEvent('resize', this.setPosition);
        }
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

TreeNode.propTypes = {};
