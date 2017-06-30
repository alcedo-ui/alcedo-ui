import React, {Component} from 'react';

import DropdownSelect from 'dist/DropdownSelect';
import Widget from 'dist/Widget';
import WidgetHeader from 'dist/WidgetHeader';

import PropTypeDescTable from '../PropTypeDescTable';
import DropdownSelectDoc from 'assets/propTypes/DropdownSelect.json';

import 'sass/containers/app/modules/fields/DropdownSelectExamples.scss';

export default class DropdownSelectExamples extends Component {

    constructor(props) {

        super(props);

        this.data = ['test0', 'test1', {
            text: 'test2',
            value: 2,
            desc: 'Here is test2.',
            onTouchTap() {
                console.log('test2 selected!');
            }
        }, 'test3', 'test4', 'test5', {
            text: 'test6',
            value: 6,
            desc: 'Here is test6.',
            onTouchTap() {
                console.log('test6 selected!');
            }
        }, 'test7', 'test8', 'test9'];

        this.onChange = this::this.onChange;

    }

    onChange(item) {
        console.log('select item: ', item);
    }

    render() {

        return (
            <div className="example drop-down-select-examples">

                <h2 className="example-title">Dropdown Select</h2>

                <p>
                    <span>Dropdown Select</span> use to store operating elements. Click on the contact
                    and a drop-down menu will appear. You can select from the list and execute the appropriate command.
                </p>

                <h2 className="example-title">Examples</h2>

                <Widget>

                    <WidgetHeader className="example-header" title="Dropdown Select Example"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p>Dropdown Select simply example.</p>

                                <div className="field-group">

                                    {/*<label className="dropdown-select-label">Number</label>*/}
                                    <DropdownSelect data={this.data}
                                                    autoClose={false}
                                                    useFilter={true}
                                                    onChange={this.onChange}/>

                                </div>

                            </div>

                        </div>
                    </div>

                </Widget>

                <h2 className="example-title">Properties</h2>

                <PropTypeDescTable data={DropdownSelectDoc}/>

            </div>
        );
    }
};