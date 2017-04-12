import React, {Component} from 'react';

import RaisedButton from 'dist/RaisedButton';
import Popup from 'dist/Popup';

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

                <div className="examples">
                    <div className="examples-title">Popup</div>
                    <div className="examples-wrapper">

                        <div>

                            <RaisedButton value="Toggle Popup"
                                          onTouchTap={this.togglePopup}/>

                            <Popup visible={popupVisible}
                                   triggerEl={triggerEl}
                                   onRequestClose={this.closePopup}>
                                123
                            </Popup>

                        </div>

                    </div>
                </div>

            </div>
        );
    }
};