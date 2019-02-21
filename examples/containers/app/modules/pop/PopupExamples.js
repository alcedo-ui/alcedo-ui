import React, {Component} from 'react';
import {findDOMNode} from 'react-dom';

import RaisedButton from 'src/RaisedButton';
import Popup from 'src/Popup';
import PopupProvider from 'src/PopupProvider';
import List from 'src/List';
import Widget from 'src/Widget';
import WidgetHeader from 'src/WidgetHeader';
import Dialog from 'src/Dialog';

import PropTypeDescTable from 'components/PropTypeDescTable';
import doc from 'assets/propTypes/Popup.json';

import 'scss/containers/app/modules/pop/PopExamples.scss';
import 'scss/containers/app/modules/pop/PopupExamples.scss';

class PopupExamples extends Component {

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
            popVisible: {}
        };

    }

    toggle = id => {

        const popVisible = {...this.state.popVisible};
        popVisible[id] = !popVisible[id];

        this.setState({
            popVisible
        });

    };

    show = id => {

        const popVisible = {...this.state.popVisible};
        popVisible[id] = true;

        this.setState({
            popVisible
        });

    };

    hide = id => {

        const popVisible = {...this.state.popVisible};
        popVisible[id] = false;

        this.setState({
            popVisible
        });

    };

    render() {

        const {popVisible} = this.state;

        return (
            <div className="example pop-examples popup-examples">

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

                                <RaisedButton ref={el => this.trigger0 = findDOMNode(el)}
                                              className="trigger-button"
                                              value="Toggle Popup"
                                              onClick={() => this.toggle(0)}/>

                                <Popup theme={Popup.Theme.PRIMARY}
                                       visible={popVisible[0]}
                                       parentEl={document.querySelector('.popup-examples')}
                                       triggerEl={this.trigger0}
                                       onRequestClose={() => this.hide(0)}>
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

                                <RaisedButton ref={el => this.trigger1 = findDOMNode(el)}
                                              className="trigger-button"
                                              value="Toggle Popup"
                                              onClick={() => this.toggle(1)}/>

                                <Popup visible={popVisible[1]}
                                       triggerEl={this.trigger1}
                                       hasTriangle={false}
                                       onRequestClose={() => this.hide(1)}>
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
                                        <RaisedButton ref={el => this.trigger5 = findDOMNode(el)}
                                                      className="trigger-position-button"
                                                      value="Top Left"
                                                      onClick={() => this.toggle(5)}/>
                                        <RaisedButton ref={el => this.trigger6 = findDOMNode(el)}
                                                      className="trigger-position-button"
                                                      value="Top"
                                                      onClick={() => this.toggle(6)}/>
                                        <RaisedButton ref={el => this.trigger7 = findDOMNode(el)}
                                                      className="trigger-position-button"
                                                      value="Top right"
                                                      onClick={() => this.toggle(7)}/>
                                    </div>

                                    <div className="button-group right">
                                        <RaisedButton ref={el => this.trigger11 = findDOMNode(el)}
                                                      className="trigger-position-button"
                                                      value="Right Top"
                                                      onClick={() => this.toggle(11)}/>
                                        <RaisedButton ref={el => this.trigger12 = findDOMNode(el)}
                                                      className="trigger-position-button"
                                                      value="Right"
                                                      onClick={() => this.toggle(12)}/>
                                        <RaisedButton ref={el => this.trigger13 = findDOMNode(el)}
                                                      className="trigger-position-button"
                                                      value="Right Bottom"
                                                      onClick={() => this.toggle(13)}/>
                                    </div>

                                    <div className="button-group bottom">
                                        <RaisedButton ref={el => this.trigger2 = findDOMNode(el)}
                                                      className="trigger-position-button"
                                                      value="Bottom Left"
                                                      onClick={() => this.toggle(2)}/>
                                        <RaisedButton ref={el => this.trigger3 = findDOMNode(el)}
                                                      className="trigger-position-button"
                                                      value="Bottom"
                                                      onClick={() => this.toggle(3)}/>
                                        <RaisedButton ref={el => this.trigger4 = findDOMNode(el)}
                                                      className="trigger-position-button"
                                                      value="Bottom Right"
                                                      onClick={() => this.toggle(4)}/>
                                    </div>

                                    <div className="button-group left">
                                        <RaisedButton ref={el => this.trigger8 = findDOMNode(el)}
                                                      className="trigger-position-button"
                                                      value="Left Top"
                                                      onClick={() => this.toggle(8)}/>
                                        <RaisedButton ref={el => this.trigger9 = findDOMNode(el)}
                                                      className="trigger-position-button"
                                                      value="Left"
                                                      onClick={() => this.toggle(9)}/>
                                        <RaisedButton ref={el => this.trigger10 = findDOMNode(el)}
                                                      className="trigger-position-button"
                                                      value="Left Bottom"
                                                      onClick={() => this.toggle(10)}/>
                                    </div>

                                    <div className="button-group center">
                                        <RaisedButton ref={el => this.trigger14 = findDOMNode(el)}
                                                      className="trigger-position-button"
                                                      value="Center"
                                                      onClick={() => this.toggle(14)}/>
                                    </div>

                                </div>

                                <Popup visible={popVisible[2]}
                                       triggerEl={this.trigger2}
                                       position={Popup.Position.BOTTOM_LEFT}
                                       onRequestClose={() => this.hide(2)}>
                                    <List data={this.data}/>
                                </Popup>
                                <Popup visible={popVisible[3]}
                                       triggerEl={this.trigger3}
                                       position={Popup.Position.BOTTOM}
                                       onRequestClose={() => this.hide(3)}>
                                    <List data={this.data}/>
                                </Popup>
                                <Popup visible={popVisible[4]}
                                       triggerEl={this.trigger4}
                                       position={Popup.Position.BOTTOM_RIGHT}
                                       onRequestClose={() => this.hide(4)}>
                                    <List data={this.data}/>
                                </Popup>

                                <Popup visible={popVisible[5]}
                                       triggerEl={this.trigger5}
                                       position={Popup.Position.TOP_LEFT}
                                       onRequestClose={() => this.hide(5)}>
                                    <List data={this.data}/>
                                </Popup>
                                <Popup visible={popVisible[6]}
                                       triggerEl={this.trigger6}
                                       position={Popup.Position.TOP}
                                       onRequestClose={() => this.hide(6)}>
                                    <List data={this.data}/>
                                </Popup>
                                <Popup visible={popVisible[7]}
                                       triggerEl={this.trigger7}
                                       position={Popup.Position.TOP_RIGHT}
                                       onRequestClose={() => this.hide(7)}>
                                    <List data={this.data}/>
                                </Popup>

                                <Popup visible={popVisible[8]}
                                       triggerEl={this.trigger8}
                                       position={Popup.Position.LEFT_TOP}
                                       onRequestClose={() => this.hide(8)}>
                                    <List data={this.data}/>
                                </Popup>
                                <Popup visible={popVisible[9]}
                                       triggerEl={this.trigger9}
                                       position={Popup.Position.LEFT}
                                       onRequestClose={() => this.hide(9)}>
                                    <List data={this.data}/>
                                </Popup>
                                <Popup visible={popVisible[10]}
                                       triggerEl={this.trigger10}
                                       position={Popup.Position.LEFT_BOTTOM}
                                       onRequestClose={() => this.hide(10)}>
                                    <List data={this.data}/>
                                </Popup>

                                <Popup visible={popVisible[11]}
                                       triggerEl={this.trigger11}
                                       position={Popup.Position.RIGHT_TOP}
                                       onRequestClose={() => this.hide(11)}>
                                    <List data={this.data}/>
                                </Popup>
                                <Popup visible={popVisible[12]}
                                       triggerEl={this.trigger12}
                                       position={Popup.Position.RIGHT}
                                       onRequestClose={() => this.hide(12)}>
                                    <List data={this.data}/>
                                </Popup>
                                <Popup visible={popVisible[13]}
                                       triggerEl={this.trigger13}
                                       position={Popup.Position.RIGHT_BOTTOM}
                                       onRequestClose={() => this.hide(13)}>
                                    <List data={this.data}/>
                                </Popup>

                                <Popup visible={popVisible[14]}
                                       triggerEl={this.trigger14}
                                       position={Popup.Position.CENTER}
                                       onRequestClose={() => this.hide(14)}>
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

                                <RaisedButton ref={el => this.trigger15 = findDOMNode(el)}
                                              className="trigger-button"
                                              value="Toggle Popup"
                                              onMouseEnter={() => this.show(15)}
                                              onMouseLeave={() => this.hide(15)}/>

                                <Popup theme={Popup.Theme.PRIMARY}
                                       visible={popVisible[15]}
                                       triggerEl={this.trigger15}
                                       onRequestClose={() => this.hide(15)}>
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

                                <RaisedButton ref={el => this.trigger16 = findDOMNode(el)}
                                              className="trigger-button"
                                              value="Toggle Popup"
                                              onClick={() => this.toggle(16)}/>

                                <Popup className="customized-popup"
                                       visible={popVisible[16]}
                                       triggerEl={this.trigger16}
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
                                       onRequestClose={() => this.hide(16)}>
                                    <div style={{padding: 20}}>
                                        Popup Content
                                    </div>
                                </Popup>

                            </div>

                        </div>
                    </div>
                </Widget>

                <Widget>

                    <WidgetHeader className="example-header"
                                  title="Popup Provider"/>

                    <div className="widget-content">
                        <div className="example-content">
                            <div className="popup-example-wrapper">
                                <PopupProvider className="customized-popover"
                                               popupContent={
                                                   <div style={{padding: 20}}>
                                                       Popup Content
                                                   </div>
                                               }>
                                    <RaisedButton className="trigger-button"
                                                  value="Toggle Popup"
                                                  onClick={() => console.log('onClick')}/>
                                </PopupProvider>
                            </div>
                        </div>
                    </div>
                </Widget>

                <Widget>

                    <WidgetHeader className="example-header"
                                  title="In Dialog"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="popup-example-wrapper">

                                <RaisedButton className="trigger-button"
                                              value="Show Dialog"
                                              onClick={() => this.toggle(17)}/>

                                <Dialog className="popup-dialog"
                                        visible={popVisible[17]}
                                        onRequestClose={() => this.hide(17)}>
                                    {
                                        dialogContentEl =>
                                            <div className="popup-dialog-content-scroller">

                                                <RaisedButton ref={el => this.trigger18 = findDOMNode(el)}
                                                              className="dialog-trigger-button"
                                                              value="Toggle Popup"
                                                              onClick={() => this.toggle(18)}/>
                                                <Popup className="customized-popup in-dialog"
                                                       visible={popVisible[18]}
                                                       triggerEl={this.trigger18}
                                                       parentEl={dialogContentEl}
                                                       position={Popup.Position.BOTTOM_LEFT}
                                                       onRequestClose={() => this.hide(18)}>
                                                    <div style={{padding: 20}}>
                                                        Popup Content
                                                    </div>
                                                </Popup>

                                                <PopupProvider className="customized-popover"
                                                               position={PopupProvider.Position.BOTTOM_LEFT}
                                                               parentEl={dialogContentEl}
                                                               popupContent={
                                                                   <div style={{padding: 20}}>
                                                                       Popup Content
                                                                   </div>
                                                               }>
                                                    <RaisedButton className="dialog-trigger-button"
                                                                  value="Toggle PopupProvider"/>
                                                </PopupProvider>

                                                <RaisedButton ref={el => this.trigger19 = findDOMNode(el)}
                                                              className="dialog-trigger-button"
                                                              value="Toggle Popup"
                                                              onClick={() => this.toggle(19)}/>
                                                <Popup className="customized-popup in-dialog"
                                                       visible={popVisible[19]}
                                                       triggerEl={this.trigger19}
                                                       position={Popup.Position.BOTTOM_LEFT}
                                                       isTriggerPositionFixed={true}
                                                       shouldFollowScroll={true}
                                                       onRequestClose={() => this.hide(19)}>
                                                    <div style={{padding: 20}}>
                                                        Popup Content
                                                    </div>
                                                </Popup>

                                                <PopupProvider className="customized-popover"
                                                               position={PopupProvider.Position.BOTTOM_LEFT}
                                                               isTriggerPositionFixed={true}
                                                               popupContent={
                                                                   <div style={{padding: 20}}>
                                                                       Popup Content
                                                                   </div>
                                                               }>
                                                    <RaisedButton className="dialog-trigger-button"
                                                                  value="Toggle PopupProvider"/>
                                                </PopupProvider>

                                            </div>
                                    }
                                </Dialog>
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

export default PopupExamples;
