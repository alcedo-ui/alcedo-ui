import React, {Component} from 'react';
import {DragDropContext} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import DraggableTree from 'src/DraggableTree';
import Paper from 'src/Paper';
import Widget from 'src/Widget';
import WidgetHeader from 'src/WidgetHeader';

import PropTypeDescTable from '../PropTypeDescTable';
import doc from 'assets/propTypes/DraggableTree.json';

import 'sass/containers/app/modules/draggable/DraggableTreeExamples.scss';

@DragDropContext(HTML5Backend)
export default class DraggableTreeExamples extends Component {

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
            <div className="example draggable-tree-examples">

                <h2 className="example-title">DraggableTree</h2>

                <p>
                    <span>DraggableTree</span> is a list of elements that allow you to move elements with the mouse.
                </p>

                <h2 className="example-title">Examples</h2>

                <Widget>

                    <WidgetHeader className="example-header" title="Draggable"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p>
                                    A multiple-choice <code>DraggableTree</code> example.
                                </p>

                                <Paper className="tree-wrapper">
                                    <DraggableTree data={this.data}
                                                   onChange={this.changeHandler}/>
                                </Paper>

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