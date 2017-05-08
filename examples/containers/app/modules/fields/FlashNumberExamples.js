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
            value1: '',
            value2: ''
        };

        this.changeHandleValue1 = this::this.changeHandleValue1;
        this.changeHandleValue2 = this::this.changeHandleValue2;

    }

    changeHandleValue1(value1) {
        this.setState({
            value1
        });
    }

    changeHandleValue2(value2) {
        this.setState({
            value2
        })
    }

    render() {

        const {value1, value2} = this.state;

        return (
            <div className="example flash-number-examples">

                <h2 className="example-title">FlashNumber</h2>

                <p>
                    A <span>FlashNumber</span> is a numerical calculation animation.
                </p>

                <h2 className="example-title">Examples</h2>

                <Widget>

                    <WidgetHeader className="example-header"
                                  title="FlashNumber Example"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p>FlashNumber simple default example.</p>

                                <div className="field-group">
                                    <TextField type="number"
                                               value={value1}
                                               onChange={this.changeHandleValue1}/>
                                    <span>&nbsp;&nbsp;X 2 =&nbsp;</span>
                                    <FlashNumber initValue={0}
                                                 value={value1 * 2}/>
                                </div>

                            </div>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header"
                                  title="FlashNumber Example"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p>Set the flashTime property to reset animation execution time.</p>

                                <div className="field-group">
                                    <TextField type="number"
                                               value={value2}
                                               onChange={this.changeHandleValue2}/>
                                    <span>&nbsp;&nbsp;X 3 =&nbsp;</span>
                                    <FlashNumber initValue={0}
                                                 flashTime={1000}
                                                 value={value2 * 3}/>
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