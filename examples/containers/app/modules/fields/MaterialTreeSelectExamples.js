import React, {Component} from 'react';

import Widget from 'src/Widget';
import WidgetHeader from 'src/WidgetHeader';
import MaterialTreeSelect from 'src/MaterialTreeSelect';

import PropTypeDescTable from 'components/PropTypeDescTable';
import doc from 'examples/assets/propTypes/MaterialTreeSelect.json';

import 'sass/containers/app/modules/fields/MaterialTreeSelectExamples.scss';

class MaterialTreeSelectExamples extends Component {

    constructor(props) {

        super(props);

        this.data = {
            id: '0',
            text: 'Root',
            desc: 'Root',
            children: [{
                id: '00',
                text: 'Children 0 - 0',
                desc: 'Children 0 - 0'
            }, {
                id: '01',
                text: 'Children 0 - 1',
                desc: 'Children 0 - 1',
                children: [{
                    id: '010',
                    text: 'Children 0 - 1 - 0',
                    desc: 'Children 0 - 1 - 0'
                }, {
                    id: '011',
                    text: 'Children 0 - 1 - 1',
                    desc: 'Children 0 - 1 - 1'
                }, {
                    id: '012',
                    text: 'Children 0 - 1 - 2',
                    desc: 'Children 0 - 1 - 2'
                }]
            }, {
                id: '02',
                text: 'Children 0 - 2',
                desc: 'Children 0 - 2'
            }]
        };

    }

    onChangeHandler = value => {
        console.log(value);
    };

    render() {
        return (
            <div className="example material-tree-select-examples">

                <h2 className="examples-title">MaterialTreeSelectExamples</h2>

                <p>
                    <span>MaterialTreeSelect</span> use to store operating elements. Click on the contact and a
                    drop-down menu will appear. You can select from the list and execute the appropriate command.
                </p>

                <h2 className="example-title">Examples</h2>

                <Widget>

                    <WidgetHeader className="example-header"
                                  title="Basic"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p><code>Tree</code>simple example.</p>

                                <MaterialTreeSelect theme={MaterialTreeSelect.Theme.HIGHLIGHT}
                                                    data={this.data}
                                                    value={{
                                                        id: '010',
                                                        text: 'Children 0 - 1 - 0',
                                                        desc: 'Children 0 - 1 - 0'
                                                    }}
                                                    onChange={this.onChangeHandler}/>

                            </div>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header"
                                  title="Basic"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p><code>MaterialDropdownSelect</code> simple example.</p>

                                <div className="field-group">
                                    <MaterialTreeSelect theme={MaterialTreeSelect.Theme.HIGHLIGHT}
                                                        label="Label"
                                                        placeholder="Placeholder"
                                                        selectMode={MaterialTreeSelect.SelectMode.MULTI_SELECT}
                                                        autoClose={false}
                                                        data={this.data}
                                                        collapsedIconCls="far fa-plus-square"
                                                        expandedIconCls="far fa-minus-square"
                                                        onChange={this.onChangeHandler}/>
                                </div>
                            </div>

                        </div>
                    </div>

                </Widget>

                <h2 className="example-title">Properties</h2>

                <PropTypeDescTable data={doc}/>

            </div>

        );
    }
};

export default MaterialTreeSelectExamples;