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

    handleResize = () => {
        const {onColumnsWidthChange} = this.props;
    };

    render() {

        const {children, resizable, width} = this.props;

        return resizable && width && !isNaN(width) ?
            <Resizable className="resizable-th"
                       width={width}
                       height={0}
                       onResize={this.handleResize}>
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

    onColumnsWidthChange: PropTypes.func

};

ResizableTh.defaultProps = {
    minWidth: 40,
    maxWidth: Infinity
};

export default ResizableTh;
