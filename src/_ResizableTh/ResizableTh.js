/**
 * @file ResizableTh component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';

// Components
import {Resizable} from 'react-resizable';

class ResizableTh extends Component {

    constructor(props, ...restArgs) {
        super(props, ...restArgs);
    }

    render() {

        const {children, resizable, width, onResize} = this.props;

        return resizable ?
            <Resizable width={width}
                       onResize={onResize}>
                {children}
            </Resizable>
            :
            children;

    }
}

ResizableTh.propTypes = {

    children: PropTypes.any,

    resizable: PropTypes.bool,
    width: PropTypes.number,
    minWidth: PropTypes.number,
    maxWidth: PropTypes.number,

    onResize: PropTypes.func,
    onResizeStart: PropTypes.func,
    onResizeStop: PropTypes.func

};

ResizableTh.defaultProps = {
    minWidth: 40,
    maxWidth: Infinity
};

export default ResizableTh;
