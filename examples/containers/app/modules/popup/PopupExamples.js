import React, {Component} from 'react';

import RaisedButton from 'src/RaisedButton';
import Popup from 'src/Popup';
import List from 'src/List';
import Widget from 'src/Widget';
import WidgetHeader from 'src/WidgetHeader';

import PropTypeDescTable from 'components/PropTypeDescTable';
import doc from 'assets/propTypes/Popup.json';

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
            popupVisible10: false,
            popupVisible11: false,
            popupVisible12: false,
            popupVisible13: false,
            popupVisible14: false,
            popupVisible15: false,
            triggerEl1: null,
            triggerEl2: null,
            triggerEl3: null,
            triggerEl4: null,
            triggerEl5: null,
            triggerEl6: null,
            triggerEl7: null,
            triggerEl8: null,
            triggerEl9: null,
            triggerEl10: null,
            triggerEl11: null,
            triggerEl12: null,
            triggerEl13: null,
            triggerEl14: null,
            triggerEl15: null
        };

        this.togglePopup = ::this.togglePopup;
        this.closePopup = ::this.closePopup;

    }

    togglePopup(e, id) {
        this.setState({
            [`popupVisible${id}`]: !this.state[`popupVisible${id}`],
            [`triggerEl${id}`]: e.target
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
                popupVisible7, popupVisible8, popupVisible9, popupVisible10, popupVisible11, popupVisible12,
                popupVisible13, popupVisible14, popupVisible15,
                triggerEl1, triggerEl2, triggerEl3, triggerEl4, triggerEl5, triggerEl6,
                triggerEl7, triggerEl8, triggerEl9, triggerEl10, triggerEl11, triggerEl12
                , triggerEl13, triggerEl14, triggerEl15
            } = this.state,
            data = [{
                iconCls: 'fa fa-facebook',
                value: 'Facebook',
                text: 'Facebook'
            }, {
                iconCls: 'fa fa-twitter',
                value: 'Twitter',
                text: 'Twitter'
            }, {
                iconCls: 'fa fa-google-plus',
                value: 'Google+',
                text: 'Google+'
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
                                  title="Basic"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="popup-example-wrapper">

                                <p><code>Popup</code> simple example.</p>

                                <RaisedButton className="trigger-button"
                                              value="Toggle Popup"
                                              onTouchTap={e => {
                                                  this.togglePopup(e, 1);
                                              }}/>

                                <Popup theme={Popup.Theme.PRIMARY}
                                       visible={popupVisible1}
                                       triggerEl={triggerEl1}
                                       onRequestClose={() => {
                                           this.closePopup(1);
                                       }}>
                                    <div style={{padding: 20, color: '#fff'}}>
                                        Popup Content
                                    </div>
                                </Popup>

                            </div>

                        </div>
                    </div>
                </Widget>

                <Widget>

                    <WidgetHeader className="example-header"
                                  title="Without triangle"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="popup-example-wrapper">

                                <p>
                                    Set <code>hasTriangle</code> to false,the popover will have
                                    no triangle on the top of the DOM element.
                                </p>

                                <RaisedButton className="trigger-button"
                                              value="Toggle Popup"
                                              onTouchTap={e => {
                                                  this.togglePopup(e, 3);
                                              }}/>

                                <Popup visible={popupVisible3}
                                       triggerEl={triggerEl3}
                                       hasTriangle={false}
                                       onRequestClose={() => {
                                           this.closePopup(3);
                                       }}>
                                    <List data={data}/>
                                </Popup>

                            </div>

                        </div>
                    </div>
                </Widget>

                <Widget>

                    <WidgetHeader className="example-header"
                                  title="With value"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="popup-example-wrapper">

                                <p>
                                    Set the <code>value</code> property to show different position of <code>Popup</code>.
                                </p>

                                <div className="button-group-wrapper">

                                    <div className="button-group top">
                                        <RaisedButton className="trigger-position-button"
                                                      value="Top Left"
                                                      onTouchTap={e => {
                                                          this.togglePopup(e, 7);
                                                      }}/>
                                        <RaisedButton className="trigger-position-button"
                                                      value="Top"
                                                      onTouchTap={e => {
                                                          this.togglePopup(e, 8);
                                                      }}/>
                                        <RaisedButton className="trigger-position-button"
                                                      value="Top right"
                                                      onTouchTap={e => {
                                                          this.togglePopup(e, 9);
                                                      }}/>
                                    </div>

                                    <div className="button-group right">
                                        <RaisedButton className="trigger-position-button"
                                                      value="Right Top"
                                                      onTouchTap={e => {
                                                          this.togglePopup(e, 13);
                                                      }}/>
                                        <RaisedButton className="trigger-position-button"
                                                      value="Right"
                                                      onTouchTap={e => {
                                                          this.togglePopup(e, 14);
                                                      }}/>
                                        <RaisedButton className="trigger-position-button"
                                                      value="Right Bottom"
                                                      onTouchTap={e => {
                                                          this.togglePopup(e, 15);
                                                      }}/>
                                    </div>

                                    <div className="button-group bottom">
                                        <RaisedButton className="trigger-position-button"
                                                      value="Bottom Left"
                                                      onTouchTap={e => {
                                                          this.togglePopup(e, 4);
                                                      }}/>
                                        <RaisedButton className="trigger-position-button"
                                                      value="Bottom"
                                                      onTouchTap={e => {
                                                          this.togglePopup(e, 5);
                                                      }}/>
                                        <RaisedButton className="trigger-position-button"
                                                      value="Bottom Right"
                                                      onTouchTap={e => {
                                                          this.togglePopup(e, 6);
                                                      }}/>
                                    </div>

                                    <div className="button-group left">
                                        <RaisedButton className="trigger-position-button"
                                                      value="Left Top"
                                                      onTouchTap={e => {
                                                          this.togglePopup(e, 10);
                                                      }}/>
                                        <RaisedButton className="trigger-position-button"
                                                      value="Left"
                                                      onTouchTap={e => {
                                                          this.togglePopup(e, 11);
                                                      }}/>
                                        <RaisedButton className="trigger-position-button"
                                                      value="Left Bottom"
                                                      onTouchTap={e => {
                                                          this.togglePopup(e, 12);
                                                      }}/>
                                    </div>

                                </div>

                                <Popup visible={popupVisible4}
                                       triggerEl={triggerEl4}
                                       position={Popup.Position.BOTTOM_LEFT}
                                       onRequestClose={() => {
                                           this.closePopup(4);
                                       }}>
                                    <List data={data}/>
                                </Popup>
                                <Popup visible={popupVisible5}
                                       triggerEl={triggerEl5}
                                       position={Popup.Position.BOTTOM}
                                       onRequestClose={() => {
                                           this.closePopup(5);
                                       }}>
                                    <List data={data}/>
                                </Popup>
                                <Popup visible={popupVisible6}
                                       triggerEl={triggerEl6}
                                       position={Popup.Position.BOTTOM_RIGHT}
                                       onRequestClose={() => {
                                           this.closePopup(6);
                                       }}>
                                    <List data={data}/>
                                </Popup>

                                <Popup visible={popupVisible7}
                                       triggerEl={triggerEl7}
                                       position={Popup.Position.TOP_LEFT}
                                       onRequestClose={() => {
                                           this.closePopup(7);
                                       }}>
                                    <List data={data}/>
                                </Popup>
                                <Popup visible={popupVisible8}
                                       triggerEl={triggerEl8}
                                       position={Popup.Position.TOP}
                                       onRequestClose={() => {
                                           this.closePopup(8);
                                       }}>
                                    <List data={data}/>
                                </Popup>
                                <Popup visible={popupVisible9}
                                       triggerEl={triggerEl9}
                                       position={Popup.Position.TOP_RIGHT}
                                       onRequestClose={() => {
                                           this.closePopup(9);
                                       }}>
                                    <List data={data}/>
                                </Popup>

                                <Popup visible={popupVisible10}
                                       triggerEl={triggerEl10}
                                       position={Popup.Position.LEFT_TOP}
                                       onRequestClose={() => {
                                           this.closePopup(10);
                                       }}>
                                    <List data={data}/>
                                </Popup>
                                <Popup visible={popupVisible11}
                                       triggerEl={triggerEl11}
                                       position={Popup.Position.LEFT}
                                       onRequestClose={() => {
                                           this.closePopup(11);
                                       }}>
                                    <List data={data}/>
                                </Popup>
                                <Popup visible={popupVisible12}
                                       triggerEl={triggerEl12}
                                       position={Popup.Position.LEFT_BOTTOM}
                                       onRequestClose={() => {
                                           this.closePopup(12);
                                       }}>
                                    <List data={data}/>
                                </Popup>

                                <Popup visible={popupVisible13}
                                       triggerEl={triggerEl13}
                                       position={Popup.Position.RIGHT_TOP}
                                       onRequestClose={() => {
                                           this.closePopup(13);
                                       }}>
                                    <List data={data}/>
                                </Popup>
                                <Popup visible={popupVisible14}
                                       triggerEl={triggerEl14}
                                       position={Popup.Position.RIGHT}
                                       onRequestClose={() => {
                                           this.closePopup(14);
                                       }}>
                                    <List data={data}/>
                                </Popup>
                                <Popup visible={popupVisible15}
                                       triggerEl={triggerEl15}
                                       position={Popup.Position.RIGHT_BOTTOM}
                                       onRequestClose={() => {
                                           this.closePopup(15);
                                       }}>
                                    <List data={data}/>
                                </Popup>

                            </div>

                        </div>
                    </div>
                </Widget>

                <Widget>

                    <WidgetHeader className="example-header"
                                  title="Customized Popup Triangle"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="popup-example-wrapper">

                                <RaisedButton className="trigger-button"
                                              value="Toggle Popup"
                                              onTouchTap={e => {
                                                  this.togglePopup(e, 2);
                                              }}/>

                                <Popup className="customized-popup"
                                       visible={popupVisible2}
                                       triggerEl={triggerEl2}
                                       triangle={
                                           <svg xmlns="http://www.w3.org/2000/svg"
                                                version="1.1"
                                                className="customized-popup-triangle"
                                                width="17"
                                                height="7">
                                               <polyline points="0,7 9,0 17,7"
                                                         style={{stroke: '#e7e7e7', fill: '#fff'}}/>
                                           </svg>
                                       }
                                       onRequestClose={() => {
                                           this.closePopup(2);
                                       }}>
                                    <div style={{padding: 20}}>
                                        Popup Content
                                    </div>
                                </Popup>

                            </div>

                        </div>
                    </div>
                </Widget>

                <h2 className="example-title">Properties</h2>

                <PropTypeDescTable data={doc}/>

            </div>
        );
    }
};