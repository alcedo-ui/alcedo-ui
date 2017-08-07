import React, {Component} from 'react';
import {DragDropContext} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import Paper from 'dist/Paper';
import DraggableList from 'dist/DraggableList';
import Widget from 'dist/Widget';
import WidgetHeader from 'dist/WidgetHeader';

import PropTypeDescTable from '../PropTypeDescTable';
import DraggableListDoc from 'assets/propTypes/DraggableList.json';

import 'sass/containers/app/modules/draggable/DraggableListExamples.scss';

@DragDropContext(HTML5Backend)
export default class DraggableListExamples extends Component {

    constructor(props) {

        super(props);

        this.listData = [{
            iconCls: 'fa fa-facebook',
            text: 'Facebook'
        }, {
            iconCls: 'fa fa-twitter',
            text: 'Twitter'
        }, {
            iconCls: 'fa fa-google-plus',
            text: 'Google+'
        }];

        this.groupedListData = [{
            name: 'socialNetwork',
            children: [{
                iconCls: 'fa fa-facebook',
                text: 'Facebook',
                desc: 'Here is a Facebook Desc.',
                checked: 'true'
            }, {
                iconCls: 'fa fa-twitter',
                text: 'Twitter',
                desc: 'Here is a Twitter Desc.'
            }, {
                iconCls: 'fa fa-google-plus',
                text: 'Google+',
                desc: 'Here is a Google+ Desc.'
            }]
        }, {
            name: 'device',
            children: [{
                iconCls: 'fa fa-android',
                text: 'Android',
                desc: 'Here is a Android Desc.'
            }, {
                iconCls: 'fa fa-apple',
                text: 'Apple',
                desc: 'Here is a Apple Desc.'
            }, {
                iconCls: 'fa fa-windows',
                text: 'Windows',
                desc: 'Here is a Windows Desc.'
            }]
        }];

        this.largeListData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

        this.sequenceChangeHandler = this::this.sequenceChangeHandler;
        this.valueChangeHandler = this::this.valueChangeHandler;

    }

    sequenceChangeHandler(value) {
        console.log('Sequence Changed:', value);
    }

    valueChangeHandler(value) {
        console.log('Value Changed:', value);
    }

    render() {
        return (
            <div className="example list-examples">

                <h2 className="example-title">DraggableList</h2>

                <p>
                    <span>DraggableList</span> are used to present multiple items vertically as a single continuous
                    element. They can be configured for many uses such as a contacts list, nested lists, etc.
                </p>

                <h2 className="example-title">Examples</h2>

                <Widget>

                    <WidgetHeader className="example-header" title="Draggable"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p>
                                    A <code>Draggable List</code>.
                                </p>

                                <Paper style={{width: 240}}>
                                    <DraggableList style={{width: 240}}
                                                   mode={DraggableList.Mode.CHECKBOX}
                                                   items={this.listData}
                                                   onSequenceChange={this.sequenceChangeHandler}
                                                   onValueChange={this.valueChangeHandler}/>
                                </Paper>

                            </div>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="Draggable Group"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p>
                                    A <code>Draggable List</code>.
                                </p>

                                <Paper style={{width: 240}}>
                                    <DraggableList style={{width: 240}}
                                                   mode={DraggableList.Mode.CHECKBOX}
                                                   isGrouped={true}
                                                   items={this.groupedListData}
                                                   onSequenceChange={this.sequenceChangeHandler}
                                                   onValueChange={this.valueChangeHandler}/>
                                </Paper>

                            </div>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="Draggable Group"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p>
                                    A <code>Draggable List</code>.
                                </p>

                                <Paper style={{width: 240}}>
                                    <DraggableList style={{width: 240, height: 240, overflow: 'auto'}}
                                                   items={this.largeListData}
                                                   onSequenceChange={this.sequenceChangeHandler}
                                                   onValueChange={this.valueChangeHandler}/>
                                </Paper>

                            </div>

                        </div>
                    </div>

                </Widget>

                <h2 className="example-title">Properties</h2>

                <PropTypeDescTable data={DraggableListDoc}/>

            </div>
        );
    }
};