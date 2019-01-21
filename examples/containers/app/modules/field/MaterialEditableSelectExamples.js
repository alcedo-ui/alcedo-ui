import React, {Component} from 'react';

import MaterialEditableSelect from 'src/MaterialEditableSelect';
import Widget from 'src/Widget';
import WidgetHeader from 'src/WidgetHeader';
import RaisedButton from 'src/RaisedButton';
import Dialog from 'src/Dialog';
import {findDOMNode} from 'react-dom';

import PropTypeDescTable from 'components/PropTypeDescTable';
import doc from 'examples/assets/propTypes/MaterialEditableSelect.json';

import 'scss/containers/app/modules/field/MaterialEditableSelectExamples.scss';

class MaterialEditableSelectExamples extends Component {

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

        this.groupedData = [{
            name: 'socialNetwork',
            children: [{
                iconCls: 'fab fa-facebook',
                text: 'Facebook',
                desc: 'Here is a Facebook Desc.'
            }, {
                iconCls: 'fab fa-twitter',
                text: 'Twitter',
                desc: 'Here is a Twitter Desc.'
            }, {
                iconCls: 'fab fa-google-plus-g',
                text: 'Google+',
                desc: 'Here is a Google+ Desc.'
            }]
        }, {
            name: 'device',
            children: [{
                iconCls: 'fab fa-android',
                text: 'Android',
                desc: 'Here is a Android Desc.'
            }, {
                iconCls: 'fab fa-apple',
                text: 'Apple',
                desc: 'Here is a Apple Desc.'
            }, {
                iconCls: 'fab fa-windows',
                text: 'Windows',
                desc: 'Here is a Windows Desc.'
            }]
        }];

        this.state = {
            MaterialEditableSelectVisible: {},
            triggerEl: {}
        };

    }

    show = id => {

        const {MaterialEditableSelectVisible} = this.state;

        MaterialEditableSelectVisible[id] = true;

        this.setState({
            MaterialEditableSelectVisible
        });

    };

    hide = id => {

        const {MaterialEditableSelectVisible} = this.state;

        MaterialEditableSelectVisible[id] = false;

        this.setState({
            MaterialEditableSelectVisible
        });

    };

    dialogRenderHandler = () => {

        const triggerEl = this.state.triggerEl;
        triggerEl[1] = findDOMNode(this.refs['trigger1']);

        this.setState({
            triggerEl
        });
    };

    onChange = value => {
        console.log(value);
    };

    render() {

        const {MaterialEditableSelectVisible, triggerEl} = this.state;
        return (
            <div className="example edit-able-select-examples">

                <h2 className="example-title">Editable Select</h2>

                <p>
                    <span>Editable Select</span> use to store operating elements. Click on the contact
                    and a drop-down menu will appear. You can select from the list and execute the appropriate command.
                </p>

                <h2 className="example-title">Examples</h2>

                <Widget>

                    <WidgetHeader className="example-header" title="Basic"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p><code>Editable Select</code> simple example.</p>

                                <div className="field-group">

                                    <MaterialEditableSelect data={this.data}
                                                            label="MaterialEditableSelect"
                                                            valueField={'text'}
                                                            onChange={this.onChange}
                                    />

                                </div>

                            </div>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="Basic"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p><code>Editable Select</code> simple example.</p>

                                <div className="field-group">

                                    <MaterialEditableSelect data={this.data}
                                                            label="MaterialEditableSelect"
                                                            onChange={this.onChange}
                                                            autoClose={false}
                                                            useFilter={true}/>

                                </div>

                            </div>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="In Dialog"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p><code>Editable Select</code> simple example.</p>

                                <RaisedButton className="trigger-button dialog-button"
                                              value="Show Dialog"
                                              onClick={() => this.show(1)}/>

                                <Dialog visible={MaterialEditableSelectVisible[1]}
                                        onRender={this.dialogRenderHandler}
                                        onRequestClose={() => this.hide(1)}>

                                    <div className="popover-dialog-content-scroller">

                                        <div className="field-group">

                                            <MaterialEditableSelect data={this.data}
                                                                    label="MaterialEditableSelect"
                                                                    parentEl={document.querySelector('.dialog-content')}
                                                                    triggerEl={triggerEl}
                                                                    onChange={this.onChange}
                                                                    autoClose={false}
                                                                    useFilter={true}/>

                                        </div>
                                    </div>
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

export default MaterialEditableSelectExamples;