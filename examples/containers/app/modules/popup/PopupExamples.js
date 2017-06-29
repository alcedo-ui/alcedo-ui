import React, {Component} from 'react';

import RaisedButton from 'dist/RaisedButton';
import Popup from 'dist/Popup';
import List from 'dist/List';
import Theme from 'dist/Theme';
import Widget from 'dist/Widget';
import WidgetHeader from 'dist/WidgetHeader';

import PropTypeDescTable from '../PropTypeDescTable';
import PopupDoc from 'assets/propTypes/PopupBody.json';

import 'sass/containers/app/modules/popup/PopupExamples.scss';

export default class PopupExamples extends Component {

    constructor(props) {

        super(props);

        this.state = {
            popupVisible1: false,
            popupVisible2: false,
            popupVisible3: false,
            popupVisible4: false,
            popupVisible5: false,
            popupVisible6: false,
            popupVisible7: false,
            popupVisible8: false,
            popupVisible9: false,
            triggerEl1: null,
            triggerEl2: null,
            triggerEl3: null,
            triggerEl4: null,
            triggerEl5: null,
            triggerEl6: null,
            triggerEl7: null,
            triggerEl8: null,
            triggerEl9: null
        };

        this.togglePopup = this::this.togglePopup;
        this.closePopup = this::this.closePopup;

    }

    togglePopup(e, id) {
        this.setState({
            [`popupVisible${id}`]: !this.state[`popupVisible${id}`],
            [`triggerEl${id}`]: e.currentTarget
        });
    }

    closePopup(id) {
        this.setState({
            [`popupVisible${id}`]: false
        });
    }

    render() {

        const {
                popupVisible1, popupVisible2, popupVisible3, popupVisible4, popupVisible5, popupVisible6,
                popupVisible7, popupVisible8, popupVisible9,
                triggerEl1, triggerEl2, triggerEl3, triggerEl4, triggerEl5, triggerEl6,
                triggerEl7, triggerEl8, triggerEl9
            } = this.state,
            items = [{
                iconCls: 'fa fa-facebook',
                value: 'Facebook',
                theme: Theme.PRIMARY
            }, {
                iconCls: 'fa fa-twitter',
                value: 'Twitter',
                theme: Theme.PRIMARY
            }, {
                iconCls: 'fa fa-google-plus',
                value: 'Google+',
                theme: Theme.PRIMARY
            }];

        return (
            <div className="example popup-examples">

                <h2 className="example-title">Popup</h2>

                <p>
                    A <span>Popup</span> can be used as an alternative to a Drop Down Menu that can contain elements
                    inside.
                </p>

                <h2 className="example-title">Examples</h2>

                <Widget>

                    <WidgetHeader className="example-header"
                                  title="Popup Example"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="popup-example-wrapper">

                                <p>Popup simple example.</p>

                                <RaisedButton className="trigger-button"
                                              value="Toggle Popup"
                                              onTouchTap={(e) => {
                                                  this.togglePopup(e, 1);
                                              }}/>

                                <Popup visible={popupVisible1}
                                       triggerEl={triggerEl1}
                                       theme={Theme.PRIMARY}
                                       onRequestClose={() => {
                                           this.closePopup(1);
                                       }}>
                                    <List items={items}/>
                                </Popup>

                            </div>

                        </div>
                    </div>
                </Widget>

                <Widget>

                    <WidgetHeader className="example-header"
                                  title="Popup Example"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="popup-example-wrapper">

                                <p>
                                    Set position property to Popup.Position.BOTTOM_RIGHT and triggerEl to true
                                    the popover will align right.
                                </p>

                                <RaisedButton className="trigger-button"
                                              value="Toggle Popup"
                                              onTouchTap={(e) => {
                                                  this.togglePopup(e, 2);
                                              }}/>

                                <Popup visible={popupVisible2}
                                       triggerEl={triggerEl2}
                                       theme={Theme.PRIMARY}
                                       position={Popup.Position.BOTTOM_RIGHT}
                                       onRequestClose={() => {
                                           this.closePopup(2);
                                       }}>
                                    <List items={items}/>
                                </Popup>

                            </div>

                        </div>
                    </div>
                </Widget>

                <Widget>

                    <WidgetHeader className="example-header"
                                  title="Popup No Triangle Example"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="popup-example-wrapper">

                                <p>
                                    Set hasTriangle to false,the popover will have
                                    no triangle on the top of the DOM element.
                                </p>

                                <RaisedButton className="trigger-button"
                                              value="Toggle Popup"
                                              onTouchTap={(e) => {
                                                  this.togglePopup(e, 3);
                                              }}/>

                                <Popup visible={popupVisible3}
                                       triggerEl={triggerEl3}
                                       hasTriangle={false}
                                       onRequestClose={() => {
                                           this.closePopup(3);
                                       }}>
                                    <List items={items}/>
                                </Popup>

                            </div>

                        </div>
                    </div>
                </Widget>

                <Widget>

                    <WidgetHeader className="example-header"
                                  title="Popup display position Example"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="popup-example-wrapper">

                                <p>

                                </p>

                                <RaisedButton className="trigger-position-button"
                                              value="Bottom Left"
                                              onTouchTap={(e) => {
                                                  this.togglePopup(e, 4);
                                              }}/>

                                <RaisedButton className="trigger-position-button"
                                              value="Bottom"
                                              onTouchTap={(e) => {
                                                  this.togglePopup(e, 5);
                                              }}/>

                                <RaisedButton className="trigger-position-button"
                                              value="Bottom Right"
                                              onTouchTap={(e) => {
                                                  this.togglePopup(e, 6);
                                              }}/>

                                <RaisedButton className="trigger-position-button"
                                              value="Top Left"
                                              onTouchTap={(e) => {
                                                  this.togglePopup(e, 7);
                                              }}/>

                                <RaisedButton className="trigger-position-button"
                                              value="Top"
                                              onTouchTap={(e) => {
                                                  this.togglePopup(e, 8);
                                              }}/>

                                <RaisedButton className="trigger-position-button"
                                              value="Top right"
                                              onTouchTap={(e) => {
                                                  this.togglePopup(e, 9);
                                              }}/>

                                <Popup visible={popupVisible4}
                                       triggerEl={triggerEl4}
                                       theme={Theme.PRIMARY}
                                       position={Popup.Position.BOTTOM_LEFT}
                                       onRequestClose={() => {
                                           this.closePopup(4);
                                       }}>
                                    <List items={items}/>
                                </Popup>

                                <Popup visible={popupVisible5}
                                       triggerEl={triggerEl5}
                                       theme={Theme.PRIMARY}
                                       position={Popup.Position.BOTTOM}
                                       onRequestClose={() => {
                                           this.closePopup(5);
                                       }}>
                                    <List items={items}/>
                                </Popup>

                                <Popup visible={popupVisible6}
                                       triggerEl={triggerEl6}
                                       theme={Theme.PRIMARY}
                                       position={Popup.Position.BOTTOM_RIGHT}
                                       onRequestClose={() => {
                                           this.closePopup(6);
                                       }}>
                                    <List items={items}/>
                                </Popup>

                                <Popup visible={popupVisible7}
                                       triggerEl={triggerEl7}
                                       theme={Theme.PRIMARY}
                                       position={Popup.Position.TOP_LEFT}
                                       onRequestClose={() => {
                                           this.closePopup(7);
                                       }}>
                                    <List items={items}/>
                                </Popup>

                                <Popup visible={popupVisible8}
                                       triggerEl={triggerEl8}
                                       theme={Theme.PRIMARY}
                                       position={Popup.Position.TOP}
                                       onRequestClose={() => {
                                           this.closePopup(8);
                                       }}>
                                    <List items={items}/>
                                </Popup>

                                <Popup visible={popupVisible9}
                                       triggerEl={triggerEl9}
                                       theme={Theme.PRIMARY}
                                       position={Popup.Position.TOP_RIGHT}
                                       onRequestClose={() => {
                                           this.closePopup(9);
                                       }}>
                                    <List items={items}/>
                                </Popup>

                            </div>

                        </div>
                    </div>
                </Widget>

                <h2 className="example-title">Properties</h2>

                <PropTypeDescTable data={PopupDoc}/>

            </div>
        );
    }
};