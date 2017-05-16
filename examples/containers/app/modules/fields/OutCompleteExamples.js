/**
 * Created by DT314 on 2017/5/15.
 */
import React, {Component} from 'react';
import OutComplete from 'dist/OutComplete';

import Widget from 'dist/Widget';
import WidgetHeader from 'dist/WidgetHeader';

import PropTypeDescTable from '../PropTypeDescTable';
import OutCompleteDoc from 'assets/propTypes/OutComplete.json';

import 'sass/containers/app/modules/fields/OutCompleteExamples.scss'

export default class OutCompleteExamples extends Component {
    constructor(props) {
        super();

        this.data = ['test1', 'test2', 'test3', 'derby1', 'derby2', 'derby3', 'test4', 'test5', 'test6', 'test7', 'test8', 'test9', 'test10', 'test11'];

        this.state = {
            chooseData: [],
            text: ''
        };

        this.onChange = this :: this.onChange;
        this.onBlur = this :: this.onBlur;
    }

    onChange(text) {
        if (text) {
            let data = [];
            this.data.map((value) => {
                if (value.indexOf(text) === 0 && value !== text) {
                    data.push(value);
                }
            });

            this.setState({
                chooseData: data,
                text: text
            });
        } else {
            this.setState({
                chooseData: [],
                text: text
            });
        }
    }

    onBlur() {
        this.setState({
            chooseData: []
        });
    }

    render() {
        const {chooseData, text} = this.state;

        return (
            <div className="example out-complete-examples">

                <h2 className="example-title">Out Complete</h2>

                <p>
                    A <span>Out Complete</span> is an interface to help users to complete their input.
                </p>

                <h2 className="example-title">Examples</h2>

                <Widget>

                    <WidgetHeader className="example-header" title="Out Complete Example"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p>Out Complete simple default example.</p>

                                <OutComplete data={chooseData} onChange={this.onChange} value={text} onBlur={this.onBlur} searchLength={2}/>

                            </div>

                        </div>
                    </div>

                </Widget>

                <h2 className="example-title">Properties</h2>

                <PropTypeDescTable data={OutCompleteDoc}/>

            </div>

        );
    }
};