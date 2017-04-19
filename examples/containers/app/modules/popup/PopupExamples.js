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
                                       position={Popup.Position.RIGHT}
                                       onRequestClose={this.closePopup}>
                                    <List items={[{
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
                                    }]}/>
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
                            <tr>
                                <td className="properties-name">className</td>
                                <td className="properties-type">PropTypes.string</td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td className="properties-name">style</td>
                                <td className="properties-type">PropTypes.object</td>
                                <td>null</td>
                                <td>The description of the dialog box.</td>
                            </tr>
                            <tr>
                                <td className="properties-name">triggerEl</td>
                                <td className="properties-type">PropTypes.object</td>
                                <td>null</td>
                                <td>Whether the button is clickable.</td>
                            </tr>
                            <tr>
                                <td className="properties-name">disabled</td>
                                <td className="properties-type">PropTypes.bool</td>
                                <td>false</td>
                                <td>The css class name of the root element.</td>
                            </tr>
                            <tr>
                                <td className="properties-name">visible</td>
                                <td className="properties-type">PropTypes.bool</td>
                                <td>false</td>
                                <td>Click the Cancel button will trigger this function.</td>
                            </tr>
                            <tr>
                                <td className="properties-name">hasTriangle</td>
                                <td className="properties-type">PropTypes.bool</td>
                                <td>true</td>
                                <td>Click the Commit button will trigger this function.</td>
                            </tr>
                            <tr>
                                <td className="properties-name">onRequestClose</td>
                                <td className="properties-type">PropTypes.func</td>
                                <td></td>
                                <td>Click the Commit button will trigger this function.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        );
    }
};