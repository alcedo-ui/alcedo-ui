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

        this.state = {
            popupVisible: flase
        }
    }

    render() {
        const {cascaderPopupClassName,triggerEl,popupRenderHandle,closePopup,valueField,displayField,itemTouchTapHandle,changeHandle,descriptionField,value,data}=this.props;

        return (
            <div className="cascader-popup-list">
                <Popup ref="popup"
                       className={'cascader-popup' + cascaderPopupClassName}
                       visible={popupVisible}
                       style={cascaderPopupStyle}
                       hasTriangle={false}
                       triggerEl={triggerEl}
                       position={isAbove ? Popup.Position.TOP_LEFT : Popup.Position.BOTTOM_LEFT}
                       onRender={popupRenderHandle}
                       onRequestClose={closePopup}>

                    <List className="cascader-list"
                          value={value}
                          rightIconCls={true}
                          valueField={valueField}
                          displayField={displayField}
                          items={data}
                          descriptionField={descriptionField}
                          onItemTouchTap={()=>{
                              itemTouchTapHandle
                          }}
                          onChange={()=>{
                              changeHandle
                          }}/>
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
    style: PropTypes.object

};