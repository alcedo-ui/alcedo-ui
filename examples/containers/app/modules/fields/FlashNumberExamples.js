import React, {Component} from 'react';

import TextField from 'dist/TextField';
import FlashNumber from 'dist/FlashNumber';
import Widget from 'dist/Widget';
import WidgetHeader from 'dist/WidgetHeader';

import PropTypeDescTable from '../PropTypeDescTable';
import FlashNumberDoc from 'assets/propTypes/FlashNumber.json';

import 'sass/containers/app/modules/fields/FlashNumberExamples.scss';

export default class FlashNumberExamples extends Component {

    constructor(props) {

        super(props);

        this.state = {
            value: ''
        };

        this.changeHandle = this::this.changeHandle;

    }

    changeHandle(value) {
        this.setState({
            value
        });
    }

    render() {

        const {value} = this.state;

        return (
            <div className="example flash-number-examples">

                <h2 className="example-title">FlashNumber</h2>

                <Widget>

                    <WidgetHeader className="example-header"
                                  title="FlashNumber Simple Example"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <div className="field-group">
                                    <TextField value={value}
                                               onChange={this.changeHandle}/>
                                    <span>&nbsp;&nbsp;X 2 =&nbsp;</span>
                                    <FlashNumber initValue={0}
                                                 value={value * 2}/>
                                </div>

                            </div>

                        </div>
                    </div>

                </Widget>

                <h2 className="example-title">Properties</h2>

                <PropTypeDescTable data={FlashNumberDoc}/>

            </div>
        );
    }
};