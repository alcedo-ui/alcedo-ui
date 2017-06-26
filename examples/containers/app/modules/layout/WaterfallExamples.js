import React, {Component} from 'react';

import Widget from 'dist/Widget';
import WidgetHeader from 'dist/WidgetHeader';
import Waterfall from 'dist/Waterfall';
import Paper from 'dist/Paper';
import RaisedButton from 'dist/RaisedButton';
import Theme from 'dist/Theme';

import PropTypeDescTable from '../PropTypeDescTable';
import WaterfallDoc from 'assets/propTypes/Waterfall.json';

import 'sass/containers/app/modules/layout/WaterfallExamples.scss';

export default class WaterfallExamples extends Component {

    constructor(props) {

        super(props);

        this.state = {
            column: 3
        };

    }

    columnChangeHandle(column) {
        this.setState({
            column
        });
    }

    render() {

        const {column} = this.state;

        return (
            <div className="example waterfall-examples">

                <h2 className="example-title">Waterfall</h2>

                <p>
                    A <span>Waterfall</span> is a container that can display items in multi columns.
                </p>

                <h2 className="example-title">Examples</h2>

                <Widget>

                    <WidgetHeader className="example-header" title="Waterfall Example"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <div className="buttons">
                                    <RaisedButton className="column-button"
                                                  value="One Column"
                                                  theme={Theme.PRIMARY}
                                                  onTouchTap={() => {
                                                      this.columnChangeHandle(1);
                                                  }}/>
                                    <RaisedButton className="column-button"
                                                  value="Two Columns"
                                                  theme={Theme.PRIMARY}
                                                  onTouchTap={() => {
                                                      this.columnChangeHandle(2);
                                                  }}/>
                                    <RaisedButton className="column-button"
                                                  value="Three Columns"
                                                  theme={Theme.PRIMARY}
                                                  onTouchTap={() => {
                                                      this.columnChangeHandle(3);
                                                  }}/>
                                    <RaisedButton className="column-button"
                                                  value="Four Columns"
                                                  theme={Theme.PRIMARY}
                                                  onTouchTap={() => {
                                                      this.columnChangeHandle(4);
                                                  }}/>
                                </div>

                                <Waterfall column={column}>
                                    <Paper style={{height: 20}}/>
                                    <Paper style={{height: 90}}/>
                                    <Paper style={{height: 30}}/>
                                    <Paper style={{height: 40}}/>
                                    <Paper style={{height: 80}}/>
                                    <Paper style={{height: 50}}/>
                                    <Paper style={{height: 60}}/>
                                    <Paper style={{height: 20}}/>
                                    <Paper style={{height: 70}}/>
                                </Waterfall>

                            </div>

                        </div>
                    </div>

                </Widget>

                <h2 className="example-title">Properties</h2>

                <PropTypeDescTable data={WaterfallDoc}/>

            </div>
        );
    }
};