/**
 * @file TreeNodeList component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';

import TreeNode from '../_TreeNode/TreeNode';

export default class TreeNodeList extends Component {

    constructor(props, ...restArgs) {
        super(props, ...restArgs);
    }

    render() {

        const {depth, path, data, collapsed} = this.props;

        return (
            <div className={'tree-node-list' + (collapsed ? ' collapsed' : '')}>

                {
                    data && data.length > 0 ?
                        (
                            data.map((item, index) => {
                                return (
                                    <TreeNode {...this.props}
                                              key={index}
                                              data={item}
                                              index={index}
                                              depth={depth + 1}
                                              path={path ? [...path, index] : [index]}/>
                                );
                            })
                        )
                        :
                        null
                }

            </div>
        );

    }
};

TreeNodeList.propTypes = {

    depth: PropTypes.number,
    path: PropTypes.array,

    data: PropTypes.array,

    collapsed: PropTypes.bool

};

TreeNodeList.defaultProps = {

    depth: -1,
    path: null,

    data: [],

    collapsed: false

};