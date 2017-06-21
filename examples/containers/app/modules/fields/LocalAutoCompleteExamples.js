import React, {Component} from 'react';
import LocalAutoComplete from 'dist/LocalAutoComplete';

import Widget from 'dist/Widget';
import WidgetHeader from 'dist/WidgetHeader';

import PropTypeDescTable from '../PropTypeDescTable';
import LocalAutoCompleteDoc from 'assets/propTypes/LocalAutoComplete.json';

import 'sass/containers/app/modules/fields/LocalAutoCompleteExamples.scss';

export default class LocalAutoCompleteExamples extends Component {

    constructor(props) {

        super(props);

        this.data = ['test0', 'test1', {
            value: 'test2',
            onTouchTap() {
                console.log('test2 selected!');
            }
        }, 'test3', 'test4', 'test5', {
            value: 'test6',
            onTouchTap() {
                console.log('test6 selected!');
            }
        }, 'test7', 'test8', 'test9'];
        this.searchLength = 2;

        this.onChange = this::this.onChange;

    }

    onChange(item) {
        console.log('select item: ', item);
    }

    render() {

        return (
            <div className="example auto-complete-examples">

                <h2 className="example-title">Local Auto Complete</h2>

                <p>
                    A <span>Local Auto Complete</span> is an interface to help users to complete their input.
                </p>

                <h2 className="example-title">Examples</h2>

                <Widget>

                    <WidgetHeader className="example-header" title="auto Complete Example"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p>Local Auto Complete simple default example.</p>

                                <LocalAutoComplete data={this.data}
                                                   onChange={this.onChange}/>

                            </div>

                        </div>
                    </div>

                </Widget>

                <h2 className="example-title">Properties</h2>

                <PropTypeDescTable data={LocalAutoCompleteDoc}/>

            </div>

        );
    }
};