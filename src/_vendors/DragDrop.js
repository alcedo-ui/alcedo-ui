/**
 * @file DragDrop vendor
 */

import {findDOMNode} from 'react-dom';

function getSource() {
    return {
        beginDrag(props) {
            return {
                index: props.index,
                groupIndex: props.groupIndex
            };
        }
    };
}

function getVerticalTarget() {
    return {
        hover(props, monitor, component) {

            // if in different group
            if (monitor.getItem().groupIndex !== props.groupIndex) {
                return;
            }

            const dragIndex = monitor.getItem().index;
            const hoverIndex = props.index;

            // Don't replace items with themselves
            if (dragIndex === hoverIndex) {
                return;
            }

            // Determine rectangle on screen
            const hoverBoundingRect = findDOMNode(component).getBoundingClientRect();

            // Get vertical middle
            const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

            // Determine mouse position
            const clientOffset = monitor.getClientOffset();

            // Get pixels to the top
            const hoverClientY = clientOffset.y - hoverBoundingRect.top;

            // Only perform the move when the mouse has crossed half of the items height
            // When dragging downwards, only move when the cursor is below 50%
            // When dragging upwards, only move when the cursor is above 50%

            // Dragging downwards
            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return;
            }

            // Dragging upwards
            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return;
            }

            // Time to actually perform the action
            props.onMove(dragIndex, hoverIndex, props);

            // Note: we're mutating the monitor item here!
            // Generally it's better to avoid mutations,
            // but it's good here for the sake of performance
            // to avoid expensive index searches.
            monitor.getItem().index = hoverIndex;

        }
    };
}

function getHorizontalTarget() {
    return {
        hover(props, monitor, component) {

            // if in different group
            if (monitor.getItem().groupIndex !== props.groupIndex) {
                return;
            }

            const dragIndex = monitor.getItem().index;
            const hoverIndex = props.index;

            // Don't replace items with themselves
            if (dragIndex === hoverIndex) {
                return;
            }

            // Determine rectangle on screen
            const hoverBoundingRect = findDOMNode(component).getBoundingClientRect();

            // Get vertical middle
            const hoverMiddleX = (hoverBoundingRect.right - hoverBoundingRect.left) / 2;

            // Determine mouse position
            const clientOffset = monitor.getClientOffset();

            // Get pixels to the top
            const hoverClientX = clientOffset.x - hoverBoundingRect.left;

            // Only perform the move when the mouse has crossed half of the items height
            // When dragging downwards, only move when the cursor is below 50%
            // When dragging upwards, only move when the cursor is above 50%

            // Dragging downwards
            if (dragIndex < hoverIndex && hoverClientX < hoverMiddleX) {
                return;
            }

            // Dragging upwards
            if (dragIndex > hoverIndex && hoverClientX > hoverMiddleX) {
                return;
            }

            // Time to actually perform the action
            props.onMove(dragIndex, hoverIndex, props);

            // Note: we're mutating the monitor item here!
            // Generally it's better to avoid mutations,
            // but it's good here for the sake of performance
            // to avoid expensive index searches.
            monitor.getItem().index = hoverIndex;

        }
    };
}

export default {
    getSource,
    getVerticalTarget,
    getHorizontalTarget
};
