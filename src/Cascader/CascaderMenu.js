/**
 * Created by Wendy on 2017/5/17.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';

import FlatButton from '../FlatButton';

import './CascaderMenu.css';

export default class CascaderMenu extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {className, style, data, isActivated}=this.props;
        const flatButtonStyle = {
            width:'130px',
        };

        return (
            <div className={`cascader-menu ${className}`}
                 style={style}>

                <div ref="options"
                     className="cascader-menu-options">
                    {
                        data.map((item, index)=> {

                            return (
                                <FlatButton key={index}
                                            className={`cascader-menu-option ${isActivated ? 'activated' : ''}`}
                                            rightIconCls={item.rightIconCls}
                                            style={flatButtonStyle}
                                            value={item.text}/>
                            )

                        })
                    }

                </div>

            </div>
        )
    }
}

CascaderMenu.propTypes = {

    /**
     * The CSS class name of the root element.
     */
    className: PropTypes.string,

    /**
     * Override the styles of the root element.
     */
    style: PropTypes.object

};

CascaderMenu.defaultProps = {
    className: '',
    style: null,

};