/**
 * @file MeasureTd component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component, createRef} from 'react';
import PropTypes from 'prop-types';

// Statics
import HorizontalAlign from '../_statics/HorizontalAlign';
import SortingType from '../_statics/SortingType';

// Vendors
import Util from '../_vendors/Util';

class MeasureTd extends Component {

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.td = createRef();
        this.tdEl = null;

        this.width = null;

    }

    componentDidMount() {
        this.tdEl = this.td?.current;
        this.handleReize();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.handleReize();
    }

    handleReize = () => {

        const width = this.tdEl.offsetWidth;

        if (width !== this.width) {

            this.width = width;

            const {index, onResize} = this.props;
            onResize && onResize(index, width);

        }

    };

    render() {
        return (
            <td ref={this.td}
                className="measure-td"></td>
        );
    }

}

MeasureTd.propTypes = {

    className: PropTypes.string,
    style: PropTypes.object,

    index: PropTypes.number,

    onResize: PropTypes.func

};

export default MeasureTd;
