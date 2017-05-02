import React, {Component} from 'react';

import IconButton from 'dist/IconButton';
import Widget from 'dist/Widget';
import WidgetHeader from 'dist/WidgetHeader';
import Tip from 'dist/Tip';

import PropTypeDescTable from '../PropTypeDescTable';
import TipDoc from 'assets/propTypes/Tip.json';

import 'sass/containers/app/modules/message/TipExamples.scss';

export default class TipExamples extends Component {

    constructor(props) {
        super(props);
        this.text="This is a icon button";
        this.state = {
            popupVisible: false,
            triggerEl: null
        };

        this.openTip = this::this.openTip;
        this.closeTip = this::this.closeTip;
    }

   openTip(e) {
        this.setState({
            popupVisible: !this.state.popupVisible,
            triggerEl: e.currentTarget
        });
    }

    closeTip() {
        this.setState({
            popupVisible: false
        });
    }

    render() {
        const {popupVisible, triggerEl} = this.state;
        const {text} = this;
        return (
            <div className="example tip-example">

                <h2 className="example-title">Tip Button</h2>

                <Widget>

                    <WidgetHeader className="example-header" title="Tip Simple Example"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <IconButton iconCls="fa fa-plus"
                                            theme="success"
                                            onMouseOver={this.openTip}/>
                                            {/*onMouseOut={this.closeTip}/>*/}

                                <Tip text={text}
                                     visible={popupVisible}
                                     triggerEl={triggerEl}
                                     onRequestClose={this.closeTip}
                                />
                            </div>

                        </div>
                    </div>

                </Widget>

                <h2 className="example-title">Properties</h2>

                <PropTypeDescTable data={TipDoc}/>

            </div>
        );
    }
};