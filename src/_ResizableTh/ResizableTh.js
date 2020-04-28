/**
 * @file ResizableTh component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';

// Components
import {Resizable} from 'react-resizable';

// Vendors
import classNames from 'classnames';

class ResizableTh extends Component {

    constructor(props, ...restArgs) {
        super(props, ...restArgs);
    }

    handleResize = (e, {size}) => {
        const {onResize} = this.props;
        onResize && onResize(size?.width, e);
    };

    handleResizeStart = (e, {size}) => {
        const {onResizeStart} = this.props;
        onResizeStart && onResizeStart(size?.width, e);
    };

    handleResizeStop = (e, {size}) => {
        const {onResizeStop} = this.props;
        onResizeStop && onResizeStop(size?.width, e);
    };

    render() {

        const {children, resizable, activated, deactivated, width, minWidth, maxWidth} = this.props;

        return resizable ?
            <Resizable className={classNames('resizable-th', {
                activated,
                deactivated
            })}
                       width={width}
                       height={0}
                       minConstraints={[minWidth, null]}
                       maxConstraints={[maxWidth, null]}
                       onResize={this.handleResize}
                       onResizeStart={this.handleResizeStart}
                       onResizeStop={this.handleResizeStop}>
                {children}
            </Resizable>
            :
            children;

    }

}

ResizableTh.propTypes = {

    children: PropTypes.any,

    resizable: PropTypes.bool,
    activated: PropTypes.bool,
    deactivated: PropTypes.bool,
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
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
