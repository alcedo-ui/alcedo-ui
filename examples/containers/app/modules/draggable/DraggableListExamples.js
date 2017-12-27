import React, {Component} from 'react';

import DraggableList from 'src/DraggableList';
import Widget from 'src/Widget';
import WidgetHeader from 'src/WidgetHeader';

import PropTypeDescTable from 'components/PropTypeDescTable';
import DraggableListDoc from 'assets/propTypes/DraggableList.json';

import 'sass/containers/app/modules/draggable/DraggableListExamples.scss';

export default class DraggableListExamples extends Component {

    constructor(props) {

        super(props);

        this.listData = [{
            iconCls: 'fa fa-facebook',
            text: 'Facebook',
            tip: 'Facebook'
        }, {
            iconCls: 'fa fa-twitter',
            text: 'Twitter',
            tip: 'Twitter'
        }, {
            iconCls: 'fa fa-google-plus',
            text: 'Google+',
            tip: 'Google+'
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
            <div className="example draggable-list-examples">

                <h2 className="example-title">DraggableList</h2>

                <p>
                    <span>DraggableList</span> is a list of elements that allow you to move elements with the mouse.
                </p>

                <h2 className="example-title">Examples</h2>

                <Widget>

                    <WidgetHeader className="example-header" title="Draggable"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p>
                                    A multiple-choice <code>DraggableList</code> example.
                                </p>

                                <div style={{width: 240}}>
                                    <DraggableList style={{width: 240}}
                                                   selectMode={DraggableList.SelectMode.MULTI_SELECT}
                                                   data={this.listData}
                                                   onSequenceChange={this.sequenceChangeHandler}
                                                   onChange={this.valueChangeHandler}/>
                                </div>

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
                                    A radio <code>DraggableList</code> example.
                                </p>

                                <div style={{width: 240, height: 240}}>
                                    <DraggableList style={{width: 240, height: 240}}
                                                   data={this.largeListData}
                                                   onSequenceChange={this.sequenceChangeHandler}
                                                   onChange={this.valueChangeHandler}/>
                                </div>

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