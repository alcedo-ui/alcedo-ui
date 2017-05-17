/**
 * Created by Wendy on 2017/5/16.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';

import CascaderMenu from './CascaderMenu'

import './Cascader.css';

export default class Cascader extends Component {
    constructor(props) {
        super(props);

    }


    render() {
        const {className, style, above, placeholder, disabled, data,optionsVisible} = this.props;

        return (
            <div className={`cascader ${className}`}
                 disabled={disabled}
                 style={style}>

                <span className="alcedo-cascader-picker" ref="trigger">
                    <input className="alcedo-input alcedo-cascader-input"
                           type="text"
                           readOnly
                           placeholder={placeholder}
                           value=""/>
                    <span className="cascader-picker-label"> </span>
                    <i className={`cascader-icon fa fa-chevron-${above ? 'down' : 'up'}`}> </i>
                </span>

                {
                    optionsVisible
                        ?
                        <CascaderMenu className={`cascader-menu-con ${optionsVisible ? 'visible' : ''}`}
                                      data={data}/>
                        :
                        null
                }


            </div>
        )
    }
}

Cascader.propTypes = {

    /**
     * The CSS class name of the root element.
     */
    className: PropTypes.string,

    /**
     * Override the styles of the root element.
     */
    style: PropTypes.object,

    /**
     * The placeholder of Cascader.
     */
    placeholder: PropTypes.string,

    /**
     * If true,the Cascader will be disabled.
     */
    disabled: PropTypes.bool,

    /**
     * If true,the Cascader options box will be show.
     */
    // optionsVisible: PropTypes.bool

};

Cascader.defaultProps = {

    className: '',
    style: null,

    placeholder: '',
    disabled: false,
    optionsVisible: false


};