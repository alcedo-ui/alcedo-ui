/**
 * Created by DT314 on 2017/5/15.
 */
import React, {Component} from 'react';
import AutoComplete from 'dist/AutoComplete';

import Widget from 'dist/Widget';
import WidgetHeader from 'dist/WidgetHeader';

import PropTypeDescTable from '../PropTypeDescTable';
import AutoCompleteDoc from 'assets/propTypes/AutoComplete.json';

import 'sass/containers/app/modules/fields/AutoCompleteExamples.scss';

export default class RemoteAutoCompleteExamples extends Component {

    constructor(props) {
        super(props);

        this.data = ['test1', 'test2', 'test3', 'derby1', 'derby2', 'derby3', 'test4', 'test5', 'test6', 'test7', 'test8', 'test9', 'test10', 'test11'];
        this.searchLength = 2;

        this.state = {
            chooseData: [],
            text: '',
            loading: false
        };

        this.onChange = this :: this.onChange;
        this.onBlur = this :: this.onBlur;
    }

    onChange(text, bool) {
        if (this.timing) {
            clearTimeout(this.timing);
        }
        if (text && text.length >= this.searchLength) {
            if (bool) {
                this.timing = setTimeout(() => {
                    let data = [];
                    this.data.map((value) => {
                        if (value.indexOf(text) === 0) {
                            data.push(value);
                        }
                    });
                    this.setState({
                        chooseData: data,
                        text: text
                    });
                }, 2000);
            } else {
                this.setState({
                    chooseData: [],
                    text: text
                });
            }
        } else {
            this.setState({
                chooseData: [],
                text: text
            });
        }
    }

    onBlur(text) {
        this.setState({
            chooseData: [],
            text
        });
    }

    render() {
        const {chooseData, text, loading} = this.state;

        return (
            <div className="example auto-complete-examples">

                <h2 className="example-title">Remote Auto Complete</h2>

                <p>
                    A <span>Remote Auto Complete</span> is an interface to help users to complete their input.
                </p>

                <h2 className="example-title">Examples</h2>

                <Widget>

                    <WidgetHeader className="example-header" title="Remote Auto Complete Example"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p>Remote Auto Complete simple default example.</p>

                                <AutoComplete data={chooseData}
                                              onChange={this.onChange}
                                              value={text}
                                              onBlur={this.onBlur}
                                              loading={loading}/>

                            </div>

                        </div>
                    </div>

                </Widget>

                <h2 className="example-title">Properties</h2>

                <PropTypeDescTable data={AutoCompleteDoc}/>

            </div>

        );
    }
};