import React, {Component} from 'react';

import Widget from 'src/Widget';
import WidgetHeader from 'src/WidgetHeader';
import MaterialTreeSelect from 'src/MaterialTreeSelect';
import RaisedButton from 'src/RaisedButton';
import Dialog from 'src/Dialog';

import PropTypeDescTable from 'components/PropTypeDescTable';
import doc from 'examples/assets/propTypes/MaterialTreeSelect.json';

import 'scss/containers/app/modules/field/MaterialTreeSelectExamples.scss';


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

        this.state = {
            MaterialTreeSelectVisible: {}
        };

    }

    show = id => {

        const {MaterialTreeSelectVisible} = this.state;

        MaterialTreeSelectVisible[id] = true;

        this.setState({
            MaterialTreeSelectVisible
        });

    };

    hide = id => {

        const {MaterialTreeSelectVisible} = this.state;

        MaterialTreeSelectVisible[id] = false;

        this.setState({
            MaterialTreeSelectVisible
        });

    };

    onChangeHandler = value => {
        console.log(value);
    };

    render() {

        const {MaterialTreeSelectVisible} = this.state;
        return (
            <div className="example material-tree-select-examples">

                <h2 className="examples-title">MaterialTreeSelectExamples</h2>

                <p>
                    <span>MaterialTreeSelect</span>
                    use to store operating elements. Click on the contact and a
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
                                                        isSelectRecursive={true}
                                                        useFilter={true}
                                                        collapsedIconCls="far fa-plus-square"
                                                        expandedIconCls="far fa-minus-square"
                                                        checkboxUncheckedIconCls="far fa-circle"
                                                        checkboxCheckedIconCls="fas fa-check-circle"
                                                        checkboxIndeterminateIconCls="fas fa-minus-circle"
                                                        tip="MaterialTreeSelect Example"
                                                        onChange={this.onChangeHandler}/>
                                </div>
                            </div>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header"
                                  title="In Dialog"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p><code>MaterialDropdownSelect</code> simple example.</p>

                                <RaisedButton className="trigger-button dialog-button"
                                              value="Show Dialog"
                                              onClick={() => this.show(1)}/>

                                <Dialog visible={MaterialTreeSelectVisible[1]}
                                        onRequestClose={() => this.hide(1)}>
                                    {
                                        dialogContentEl =>
                                            <div className="popover-dialog-content-scroller">
                                                <div className="field-group">
                                                    <MaterialTreeSelect theme={MaterialTreeSelect.Theme.HIGHLIGHT}
                                                                        label="Label"
                                                                        placeholder="Placeholder"
                                                                        selectMode={MaterialTreeSelect.SelectMode.MULTI_SELECT}
                                                                        autoClose={false}
                                                                        data={this.data}
                                                                        isSelectRecursive={true}
                                                                        useFilter={true}
                                                                        parentEl={dialogContentEl}
                                                                        collapsedIconCls="far fa-plus-square"
                                                                        expandedIconCls="far fa-minus-square"
                                                                        checkboxUncheckedIconCls="far fa-circle"
                                                                        checkboxCheckedIconCls="fas fa-check-circle"
                                                                        checkboxIndeterminateIconCls="fas fa-minus-circle"
                                                                        tip="MaterialTreeSelect Example"
                                                                        onChange={this.onChangeHandler}/>
                                                </div>
                                            </div>
                                    }

                                </Dialog>

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
