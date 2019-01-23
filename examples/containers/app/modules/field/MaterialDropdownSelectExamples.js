import React, {Component} from 'react';

import Widget from 'src/Widget';
import WidgetHeader from 'src/WidgetHeader';
import MaterialDropdownSelect from 'src/MaterialDropdownSelect';
import RaisedButton from 'src/RaisedButton';
import Dialog from 'src/Dialog';
import {findDOMNode} from 'react-dom';

import PropTypeDescTable from 'components/PropTypeDescTable';
import MaterialDropdownSelectDoc from 'examples/assets/propTypes/MaterialDropdownSelect.json';

import 'scss/containers/app/modules/field/MaterialDropdownSelectExamples.scss';


class MaterialDropdownSelectExamples extends Component {

    constructor(props) {

        super(props);

        this.data = ['test0', 'test1', {
            text: 'test2',
            value: 2,
            desc: 'Here is test2.',
            onClick() {
                console.log('test2 selected!');
            }
        }, 'test3', 'test4', 'test5', {
            text: 'test6',
            value: 6,
            desc: 'Here is test6.',
            onClick() {
                console.log('test6 selected!');
            }
        }, 'test7', 'test8', 'test9'];

        this.state = {
            MaterialDropdownSelectVisible: {},
            triggerEl: {}
        };

    }

    show = id => {

        const {MaterialDropdownSelectVisible} = this.state;

        MaterialDropdownSelectVisible[id] = true;

        this.setState({
            MaterialDropdownSelectVisible
        });

    };

    hide = id => {

        const {MaterialDropdownSelectVisible} = this.state;

        MaterialDropdownSelectVisible[id] = false;

        this.setState({
            MaterialDropdownSelectVisible
        });

    };

    dialogRenderHandler = () => {

        const triggerEl = this.state.triggerEl;
        triggerEl[1] = findDOMNode(this.refs['trigger1']);

        this.setState({
            triggerEl
        });
    };

    onChangeHandle = value => {
        this.setState({
            value: value
        });
    };

    render() {

        const {MaterialDropdownSelectVisible, triggerEl} = this.state;
        return (
            <div className="example material-dropdown-select-examples">

                <h2 className="examples-title">MaterialDropdownSelect</h2>

                <p>
                    <span>MaterialDropdownSelect</span>
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

                                <p><code>MaterialDropdownSelect</code> simple example.</p>

                                <div className="field-group">
                                    <MaterialDropdownSelect theme={MaterialDropdownSelect.Theme.HIGHLIGHT}
                                                            label="Label"
                                                            placeholder="Placeholder"
                                                            selectMode={MaterialDropdownSelect.SelectMode.MULTI_SELECT}
                                                            useSelectAll={true}
                                                            autoClose={false}
                                                            data={this.data}
                                                            tip="MaterialDropdownSelect Example"/>
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

                                <Dialog visible={MaterialDropdownSelectVisible[1]}
                                        onRender={this.dialogRenderHandler}
                                        onRequestClose={() => this.hide(1)}>
                                    <div className="popover-dialog-content-scroller">
                                        <div className="field-group">
                                            <MaterialDropdownSelect theme={MaterialDropdownSelect.Theme.HIGHLIGHT}
                                                                    label="Label"
                                                                    placeholder="Placeholder"
                                                                    selectMode={MaterialDropdownSelect.SelectMode.MULTI_SELECT}
                                                                    parentEl={document.querySelector('.dialog-content')}
                                                                    triggerEl={triggerEl}
                                                                    useSelectAll={true}
                                                                    autoClose={false}
                                                                    data={this.data}
                                                                    tip="MaterialDropdownSelect Example"/>
                                        </div>
                                    </div>
                                </Dialog>

                            </div>

                        </div>
                    </div>

                </Widget>

                <h2 className="example-title">Properties</h2>

                <PropTypeDescTable data={MaterialDropdownSelectDoc}/>

            </div>

        );
    }
};

export default MaterialDropdownSelectExamples;
