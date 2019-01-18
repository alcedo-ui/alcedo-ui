import React, {Component} from 'react';

import MultipleSelect from 'src/MultipleSelect';
import Widget from 'src/Widget';
import WidgetHeader from 'src/WidgetHeader';
import RaisedButton from 'src/RaisedButton';
import Dialog from 'src/Dialog';
import {findDOMNode} from 'react-dom';

import PropTypeDescTable from 'components/PropTypeDescTable';
import doc from 'assets/propTypes/MultipleSelect.json';

import 'scss/containers/app/modules/field/MultipleSelectExamples.scss';


class MultipleSelectExamples extends Component {

    constructor(props) {

        super(props);

        this.state = {
            value: null
        };

        this.data = [{
            value: 1,
            text: 'one'
        }, {
            value: 2,
            text: 'two'
        }, {
            value: 3,
            text: 'three'
        }, {
            value: 4,
            text: 'four'
        }, {
            value: 5,
            text: 'five'
        }, {
            value: 6,
            text: 'six'
        }, {
            value: 7,
            text: 'seven'
        }, {
            value: 8,
            text: 'eight'
        }, {
            value: 9,
            text: 'nine'
        }];

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
            MultipleSelectVisible: {},
            triggerEl: {}
        };

    }

    show = id => {

        const {MultipleSelectVisible} = this.state;

        MultipleSelectVisible[id] = true;

        this.setState({
            MultipleSelectVisible
        });

    };

    hide = id => {

        const {MultipleSelectVisible} = this.state;

        MultipleSelectVisible[id] = false;

        this.setState({
            MultipleSelectVisible
        });

    };

    dialogRenderHandler = () => {

        const triggerEl = this.state.triggerEl;
        triggerEl[1] = findDOMNode(this.refs['trigger1']);

        this.setState({
            triggerEl
        });
    };

    onChangeHandler = value => {

        console.log('value changed: ', value);

        this.setState({
            value: value
        });

    };

    render() {

        const {value, MultipleSelectVisible, triggerEl} = this.state;

        return (
            <div className="example multiple-select-examples">

                <h2 className="example-title">Multiple Select</h2>
                <p>
                    <span>Multiple Select</span> is a user-friendly replacement for select boxes with the multiple
                    attribute.
                </p>

                <h2 className="example-title">Examples</h2>

                <Widget>

                    <WidgetHeader className="example-header" title="Multiple Select Example"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p>Multiple Select simple default example.</p>

                                <div className="field-group">
                                    <label className="multiple-select-label">Number</label>
                                    <MultipleSelect className="multiple-select"
                                                    data={this.data}
                                                    value={value}
                                                    onChange={this.onChangeHandler}
                                                    placeholder="please select number"/>
                                </div>

                            </div>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="Multiple Select Example"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p>Multiple Select simple default example.</p>

                                <div className="field-group">
                                    <label className="multiple-select-label">Number</label>
                                    <MultipleSelect isGrouped={true}
                                                    data={this.groupedData}/>
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

                                <p>Multiple Select simple default example.</p>

                                <RaisedButton className="trigger-button dialog-button"
                                              value="Show Dialog"
                                              onClick={() => this.show(1)}/>

                                <Dialog visible={MultipleSelectVisible[1]}
                                        onRender={this.dialogRenderHandler}
                                        onRequestClose={() => this.hide(1)}>
                                    <div className="popover-dialog-content-scroller">
                                        <div className="field-group">
                                            <label className="multiple-select-label">Number</label>
                                            <MultipleSelect isGrouped={true}
                                                            parentEl={document.querySelector('.dialog-content')}
                                                            triggerEl={triggerEl}
                                                            data={this.groupedData}/>
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

export default MultipleSelectExamples;
