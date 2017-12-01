/**
 * @file TreeNode component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class TreeNode extends Component {

    constructor(props, ...restArgs) {
        super(props, ...restArgs);
    }

    render() {

        const {data} = this.props;

        return (
            <div className="tree-node">

            </div>
        );

    }
};

TreeNode.propTypes = {

    className: PropTypes.string,
    style: PropTypes.object,

    data: PropTypes.shape({

    }),

};
