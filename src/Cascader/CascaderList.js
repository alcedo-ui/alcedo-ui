import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {findDOMNode} from 'react-dom';

import Popup from '../Popup';
import List from '../List';

import Util from '../_vendors/Util';

import './Cascader.css';

export default class CascaderList extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        const {listData, className, style, visible, cascaderPopupStyle, popupClassName, triggerEl}=this.props;

        return (
            <div className={`cascader-list ${className}`}
                 style={style}>

                <Popup ref="popup"
                       style={cascaderPopupStyle}
                       visible={visible}
                       className={`cascader-popup ${popupClassName}`}
                       triggerEl={triggerEl}
                       hasTriangle={false}>

                    <List className={`cascader-popup-list`}
                          items={listData}/>
                </Popup>

            </div>
        )

    }
}

CascaderList.propTypes = {

    /**
     * The CSS class name of the root element.
     */
    className: PropTypes.string,

    /**
     * Override the styles of the root element.
     */
    style: PropTypes.object,

    items: PropTypes.array

};