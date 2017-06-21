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
            triggerEl: null
        };

        this.togglePopup = this::this.togglePopup;
        this.closePopup = this::this.closePopup;

    }

    togglePopup(e, id) {
        this.setState({
            [`popupVisible${id}`]: !this.state[`popupVisible${id}`],
            triggerEl: e.currentTarget
        });
    }

    closePopup(id) {
        this.setState({
            [`popupVisible${id}`]: false
        });
    }

    render() {

        const {popupVisible1, popupVisible2, popupVisible3, triggerEl} = this.state,
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

                    <WidgetHeader className="example-header" title="Popup Example"/>

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
                                       triggerEl={triggerEl}
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

                    <WidgetHeader className="example-header" title="Popup Example"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="popup-example-wrapper">

                                <p>Set position property to Popup.Position.RIGHT and triggerEl to true the popover will
                                    align right.</p>

                                <RaisedButton className="trigger-button"
                                              value="Toggle Popup"
                                              onTouchTap={(e) => {
                                                  this.togglePopup(e, 2);
                                              }}/>

                                <Popup visible={popupVisible2}
                                       triggerEl={triggerEl}
                                       position={Popup.Position.RIGHT}
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

                    <WidgetHeader className="example-header" title="Popup No Triangle Example"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="popup-example-wrapper">

                                <p>Set hasTriangle to false,the popover will have no triangle on the top of the DOM
                                    element.</p>

                                <RaisedButton className="trigger-button"
                                              value="Toggle Popup"
                                              onTouchTap={(e) => {
                                                  this.togglePopup(e, 3);
                                              }}/>

                                <Popup visible={popupVisible3}
                                       triggerEl={triggerEl}
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

                <h2 className="example-title">Properties</h2>

                <PropTypeDescTable data={PopupDoc}/>

            </div>
        );
    }
};