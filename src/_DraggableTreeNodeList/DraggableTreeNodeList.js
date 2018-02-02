/**
 * @file DraggableTreeNodeList component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Droppable} from 'react-beautiful-dnd';

import TreeNode from '../_TreeNode/TreeNode';

class DraggableTreeNodeList extends Component {

    constructor(props, ...restArgs) {
        super(props, ...restArgs);
    }

    render() {

        const {depth, path, data, collapsed} = this.props;

        return (
            <Droppable droppableId="droppable">
                {(provided, snapshot) => (
                    <div ref={provided.innerRef}
                         className={'draggable-tree-node-list' + (collapsed ? ' collapsed' : '')}>

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
                                                      path={path ? [...path, {index, value: item}] : [{
                                                          index,
                                                          value: item
                                                      }]}/>
                                        );
                                    })
                                )
                                :
                                null
                        }

                        {provided.placeholder}

                    </div>
                )}
            </Droppable>
        );

    }
};

DraggableTreeNodeList.propTypes = {

    depth: PropTypes.number,
    path: PropTypes.array,

    data: PropTypes.array,

    collapsed: PropTypes.bool

};

DraggableTreeNodeList.defaultProps = {

    depth: -1,
    path: null,

    data: [],

    collapsed: false

};

export default DraggableTreeNodeList;