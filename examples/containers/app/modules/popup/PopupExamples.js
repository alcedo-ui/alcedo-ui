import React, {Component} from 'react';

import RaisedButton from 'dist/RaisedButton';
import Popup from 'dist/Popup';
import List from 'dist/List';
import Widget from 'dist/Widget';
import WidgetHeader from 'dist/WidgetHeader';
import Theme from 'dist/Theme';

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

        // e.stopPropagation();

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

        const {popupVisible, triggerEl} = this.state;
        let items = [{
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

        let propertiesList = [{
            Name: 'className',
            Type: 'PropTypes.string',
            Default: '',
            Description: 'The css class name of the root element.'
        }, {
            Name: 'style',
            Type: 'PropTypes.object',
            Default: '',
            Description: ''
        }, {
            Name: 'triggerEl',
            Type: 'PropTypes.object',
            Default: '',
            Description: ''
        }, {
            Name: 'disabled',
            Type: 'PropTypes.bool',
            Default: 'false',
            Description: ''
        }, {
            Name: 'visible',
            Type: 'PropTypes.bool',
            Default: 'false',
            Description: ''
        }, {
            Name: 'hasTriangle',
            Type: ' PropTypes.bool',
            Default: 'true',
            Description: ''
        }, {
            Name: 'theme',
            Type: 'PropTypes.string',
            Default: '',
            Description: ''
        }, {
            Name: 'position',
            Type: ' PropTypes.string',
            Default: 'Popup.Position.LEFT',
            Description: ''
        }, {
            Name: 'onRequestClose',
            Type: ' PropTypes.func',
            Default: '',
            Description: 'The function that trigger when click submit.'
        }];

        return (
            <div className="example popup-examples">

                <h2 className="example-title">Popup</h2>

                <Widget>

                    <WidgetHeader className="example-header" title="Popup Simple Example"/>

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

                <div className="example-properties">

                    <h3>Properties</h3>
                    <table className="example-table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Type</th>
                                <th>Default</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                propertiesList && propertiesList.length > 0 ?
                                    (
                                        propertiesList.map(function (val) {
                                            return <tr>
                                                <td className="properties-name">{val.Name}</td>
                                                <td className="properties-type">{val.Type}</td>
                                                <td>{val.Default}</td>
                                                <td>{val.Description}</td>
                                            </tr>
                                        })
                                    )
                                    : null
                            }

                        </tbody>
                    </table>
                </div>

            </div>
        );
    }
};