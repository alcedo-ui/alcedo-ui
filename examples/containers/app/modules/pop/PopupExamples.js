import React, {Component} from 'react';
import {findDOMNode} from 'react-dom';

import RaisedButton from 'src/RaisedButton';
import Popup from 'src/Popup';
import List from 'src/List';
import Widget from 'src/Widget';
import WidgetHeader from 'src/WidgetHeader';

import PropTypeDescTable from 'components/PropTypeDescTable';
import doc from 'assets/propTypes/Popup.json';

import 'sass/containers/app/modules/pop/PopupExamples.scss';

export default class PopupExamples extends Component {

    constructor(props) {

        super(props);

        this.data = [{
            iconCls: 'fab fa-facebook',
            value: 'Facebook',
            text: 'Facebook'
        }, {
            iconCls: 'fab fa-twitter',
            value: 'Twitter',
            text: 'Twitter'
        }, {
            iconCls: 'fab fa-google-plus-g',
            value: 'Google+',
            text: 'Google+'
        }];

        this.state = {
            popupVisible: {},
            triggerEl: {}
        };

        this.togglePopup = ::this.togglePopup;
        this.openPopup = ::this.openPopup;
        this.closePopup = ::this.closePopup;

    }

    togglePopup(id) {

        const {popupVisible} = this.state;

        popupVisible[id] = !popupVisible[id];

        this.setState({
            popupVisible
        });

    }

    openPopup(id) {

        const {popupVisible} = this.state;

        popupVisible[id] = true;

        this.setState({
            popupVisible
        });

    }

    closePopup(id) {

        const {popupVisible} = this.state;

        popupVisible[id] = false;

        this.setState({
            popupVisible
        });

    }

    componentDidMount() {

        const triggerEl = {};

        for (let i = 0; i <= 15; i++) {
            triggerEl[i] = findDOMNode(this.refs[`trigger${i}`]);
        }

        this.setState({
            triggerEl
        });

    }

    render() {

        const {popupVisible, triggerEl} = this.state;

        return (
            <div className="example popup-examples">

                <h2 className="example-title">Popup</h2>

                <p>
                    A <span>Popup</span> can be used as an alternative to a Drop Down that can contain elements inside.
                </p>

                <h2 className="example-title">Examples</h2>

                <Widget>

                    <WidgetHeader className="example-header"
                                  title="Basic"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="popup-example-wrapper">

                                <p><code>Popup</code> simple example.</p>

                                <RaisedButton ref="trigger0"
                                              className="trigger-button"
                                              value="Toggle Popup"
                                              onTouchTap={() => {
                                                  this.togglePopup(0);
                                              }}/>

                                <Popup theme={Popup.Theme.PRIMARY}
                                       visible={popupVisible[0]}
                                       triggerEl={triggerEl[0]}
                                       onRequestClose={() => {
                                           this.closePopup(0);
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

                                <RaisedButton ref="trigger1"
                                              className="trigger-button"
                                              value="Toggle Popup"
                                              onTouchTap={() => {
                                                  this.togglePopup(1);
                                              }}/>

                                <Popup visible={popupVisible[1]}
                                       triggerEl={triggerEl[1]}
                                       hasTriangle={false}
                                       onRequestClose={() => {
                                           this.closePopup(1);
                                       }}>
                                    <List data={this.data}/>
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
                                        <RaisedButton ref="trigger5"
                                                      className="trigger-position-button"
                                                      value="Top Left"
                                                      onTouchTap={() => {
                                                          this.togglePopup(5);
                                                      }}/>
                                        <RaisedButton ref="trigger6"
                                                      className="trigger-position-button"
                                                      value="Top"
                                                      onTouchTap={() => {
                                                          this.togglePopup(6);
                                                      }}/>
                                        <RaisedButton ref="trigger7"
                                                      className="trigger-position-button"
                                                      value="Top right"
                                                      onTouchTap={() => {
                                                          this.togglePopup(7);
                                                      }}/>
                                    </div>

                                    <div className="button-group right">
                                        <RaisedButton ref="trigger11"
                                                      className="trigger-position-button"
                                                      value="Right Top"
                                                      onTouchTap={() => {
                                                          this.togglePopup(11);
                                                      }}/>
                                        <RaisedButton ref="trigger12"
                                                      className="trigger-position-button"
                                                      value="Right"
                                                      onTouchTap={() => {
                                                          this.togglePopup(12);
                                                      }}/>
                                        <RaisedButton ref="trigger13"
                                                      className="trigger-position-button"
                                                      value="Right Bottom"
                                                      onTouchTap={() => {
                                                          this.togglePopup(13);
                                                      }}/>
                                    </div>

                                    <div className="button-group bottom">
                                        <RaisedButton ref="trigger2"
                                                      className="trigger-position-button"
                                                      value="Bottom Left"
                                                      onTouchTap={() => {
                                                          this.togglePopup(2);
                                                      }}/>
                                        <RaisedButton ref="trigger3"
                                                      className="trigger-position-button"
                                                      value="Bottom"
                                                      onTouchTap={() => {
                                                          this.togglePopup(3);
                                                      }}/>
                                        <RaisedButton ref="trigger4"
                                                      className="trigger-position-button"
                                                      value="Bottom Right"
                                                      onTouchTap={() => {
                                                          this.togglePopup(4);
                                                      }}/>
                                    </div>

                                    <div className="button-group left">
                                        <RaisedButton ref="trigger8"
                                                      className="trigger-position-button"
                                                      value="Left Top"
                                                      onTouchTap={() => {
                                                          this.togglePopup(8);
                                                      }}/>
                                        <RaisedButton ref="trigger9"
                                                      className="trigger-position-button"
                                                      value="Left"
                                                      onTouchTap={() => {
                                                          this.togglePopup(9);
                                                      }}/>
                                        <RaisedButton ref="trigger10"
                                                      className="trigger-position-button"
                                                      value="Left Bottom"
                                                      onTouchTap={() => {
                                                          this.togglePopup(10);
                                                      }}/>
                                    </div>

                                </div>

                                <Popup visible={popupVisible[2]}
                                       triggerEl={triggerEl[2]}
                                       position={Popup.Position.BOTTOM_LEFT}
                                       onRequestClose={() => {
                                           this.closePopup(2);
                                       }}>
                                    <List data={this.data}/>
                                </Popup>
                                <Popup visible={popupVisible[3]}
                                       triggerEl={triggerEl[3]}
                                       position={Popup.Position.BOTTOM}
                                       onRequestClose={() => {
                                           this.closePopup(3);
                                       }}>
                                    <List data={this.data}/>
                                </Popup>
                                <Popup visible={popupVisible[4]}
                                       triggerEl={triggerEl[4]}
                                       position={Popup.Position.BOTTOM_RIGHT}
                                       onRequestClose={() => {
                                           this.closePopup(4);
                                       }}>
                                    <List data={this.data}/>
                                </Popup>

                                <Popup visible={popupVisible[5]}
                                       triggerEl={triggerEl[5]}
                                       position={Popup.Position.TOP_LEFT}
                                       onRequestClose={() => {
                                           this.closePopup(5);
                                       }}>
                                    <List data={this.data}/>
                                </Popup>
                                <Popup visible={popupVisible[6]}
                                       triggerEl={triggerEl[6]}
                                       position={Popup.Position.TOP}
                                       onRequestClose={() => {
                                           this.closePopup(6);
                                       }}>
                                    <List data={this.data}/>
                                </Popup>
                                <Popup visible={popupVisible[7]}
                                       triggerEl={triggerEl[7]}
                                       position={Popup.Position.TOP_RIGHT}
                                       onRequestClose={() => {
                                           this.closePopup(7);
                                       }}>
                                    <List data={this.data}/>
                                </Popup>

                                <Popup visible={popupVisible[8]}
                                       triggerEl={triggerEl[8]}
                                       position={Popup.Position.LEFT_TOP}
                                       onRequestClose={() => {
                                           this.closePopup(8);
                                       }}>
                                    <List data={this.data}/>
                                </Popup>
                                <Popup visible={popupVisible[9]}
                                       triggerEl={triggerEl[9]}
                                       position={Popup.Position.LEFT}
                                       onRequestClose={() => {
                                           this.closePopup(9);
                                       }}>
                                    <List data={this.data}/>
                                </Popup>
                                <Popup visible={popupVisible[10]}
                                       triggerEl={triggerEl[10]}
                                       position={Popup.Position.LEFT_BOTTOM}
                                       onRequestClose={() => {
                                           this.closePopup(10);
                                       }}>
                                    <List data={this.data}/>
                                </Popup>

                                <Popup visible={popupVisible[11]}
                                       triggerEl={triggerEl[11]}
                                       position={Popup.Position.RIGHT_TOP}
                                       onRequestClose={() => {
                                           this.closePopup(11);
                                       }}>
                                    <List data={this.data}/>
                                </Popup>
                                <Popup visible={popupVisible[12]}
                                       triggerEl={triggerEl[12]}
                                       position={Popup.Position.RIGHT}
                                       onRequestClose={() => {
                                           this.closePopup(12);
                                       }}>
                                    <List data={this.data}/>
                                </Popup>
                                <Popup visible={popupVisible[13]}
                                       triggerEl={triggerEl[13]}
                                       position={Popup.Position.RIGHT_BOTTOM}
                                       onRequestClose={() => {
                                           this.closePopup(13);
                                       }}>
                                    <List data={this.data}/>
                                </Popup>

                            </div>

                        </div>
                    </div>
                </Widget>

                <Widget>

                    <WidgetHeader className="example-header"
                                  title="With Mouse Events"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="popup-example-wrapper">

                                <p>Show a <code>Popup</code> with <code>Mouse Events</code>.</p>

                                <RaisedButton ref="trigger14"
                                              className="trigger-button"
                                              value="Toggle Popup"
                                              onMouseEnter={() => {
                                                  this.openPopup(14);
                                              }}
                                              onMouseLeave={() => {
                                                  this.closePopup(14);
                                              }}/>

                                <Popup theme={Popup.Theme.PRIMARY}
                                       visible={popupVisible[14]}
                                       triggerEl={triggerEl[14]}
                                       onRequestClose={() => {
                                           this.closePopup(14);
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
                                  title="Customized Popup Triangle"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="popup-example-wrapper">

                                <RaisedButton ref="trigger15"
                                              className="trigger-button"
                                              value="Toggle Popup"
                                              onTouchTap={() => {
                                                  this.togglePopup(15);
                                              }}/>

                                <Popup className="customized-popup"
                                       visible={popupVisible[15]}
                                       triggerEl={triggerEl[15]}
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
                                           this.closePopup(15);
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