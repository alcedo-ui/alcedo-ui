/**
 * Created by DT314 on 2017/4/7.
 */
import React, {Component, PropTypes} from 'react';

import Dialog from 'dist/Dialog';
import FlatButton from 'dist/FlatButton';
import Widget from 'dist/Widget';
import WidgetHeader from 'dist/WidgetHeader';

import PropTypeDescTable from '../PropTypeDescTable';
import DialogDoc from 'docs/Dialog.json';

import 'sass/containers/app/modules/popup/DialogExamples.scss';

export default class DialogExamples extends Component {
    constructor(props) {
        super();
        this.clickHandle = this::this.clickHandle;
        this.hideHandle = this::this.hideHandle;
        this.state = {
            hide: 'hide'
        }
    }

    clickHandle() {
        this.setState({
            hide: ''
        })
    }

    hideHandle() {
        this.setState({
            hide: 'hide'
        })
    }

    render() {

        return (
            <div className="example dialog-example">

                <h2 className="example-title">Dialog</h2>

                <Widget>

                    <WidgetHeader className="example-header" title="Dialog Simple Example"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <p>Please click this button to show Dialog.</p>

                            <FlatButton onTouchTap={this.clickHandle} value="Dialog"/>

                            <Dialog className={this.state.hide}
                                    onHide={this.hideHandle}
                                    onSure={this.hideHandle}/>

                        </div>
                    </div>

                </Widget>

                <h2 className="example-title">Properties</h2>

                <PropTypeDescTable data={DialogDoc}/>

            </div>

        );
    }
}