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
            popupVisible: false,
            triggerEl: null
        };

        this.togglePopup = this::this.togglePopup;
        this.closePopup = this::this.closePopup;

    }

    togglePopup(e) {
        this.setState({
            popupVisible: !this.state.popupVisible,
            triggerEl: e.currentTarget
        });
    }

    closePopup() {
        this.setState({
            popupVisible: false
        });
    }

    render() {

        const {popupVisible, triggerEl} = this.state,
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

                <Widget>

                    <WidgetHeader className="example-header" title="Popup Example"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="popup-example-wrapper">

                                <RaisedButton className="trigger-button"
                                              value="Toggle Popup"
                                              onTouchTap={this.togglePopup}/>

                                <Popup visible={popupVisible}
                                       triggerEl={triggerEl}
                                       theme={Theme.PRIMARY}
                                       onRequestClose={this.closePopup}>
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