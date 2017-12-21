import React, {Component} from 'react';

import DraggableGrid from 'src/DraggableGrid';
import Widget from 'src/Widget';
import WidgetHeader from 'src/WidgetHeader';

import PropTypeDescTable from '../../../../components/PropTypeDescTable';
import DraggableGridDoc from 'assets/propTypes/DraggableGrid.json';

import 'sass/containers/app/modules/draggable/DraggableGridExamples.scss';

export default class DraggableGridExamples extends Component {

    constructor(props) {

        super(props);

        this.gridData = [{
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
        this.changeHandler = this::this.changeHandler;

    }

    sequenceChangeHandler(value) {
        console.log('Sequence Changed:', value);
    }

    changeHandler(value) {
        console.log('Value Changed:', value);
    }

    render() {
        return (
            <div className="example list-examples">

                <h2 className="example-title">DraggableGrid</h2>

                <p>
                    <span>DraggableGrid</span> used to move the draggable object by clicking the mouse and dragging it
                    in the viewport.
                </p>

                <h2 className="example-title">Examples</h2>

                <Widget>

                    <WidgetHeader className="example-header" title="DraggableGrid"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p>
                                    A multiple-choice<code> DraggableGrid</code> example.
                                </p>

                                <DraggableGrid selectMode={DraggableGrid.SelectMode.MULTI_SELECT}
                                               data={this.gridData}
                                               onSequenceChange={this.sequenceChangeHandler}
                                               onChange={this.changeHandler}/>

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
                                    A <code>DraggableGrid</code> simple example.
                                </p>

                                <DraggableGrid style={{height: 120}}
                                               data={this.largeListData}
                                               col={5}
                                               onSequenceChange={this.sequenceChangeHandler}
                                               onChange={this.changeHandler}/>

                            </div>

                        </div>
                    </div>

                </Widget>

                <h2 className="example-title">Properties</h2>

                <PropTypeDescTable data={DraggableGridDoc}/>

            </div>
        );
    }
};