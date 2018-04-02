import React, {Component} from 'react';

import Widget from 'src/Widget';
import WidgetHeader from 'src/WidgetHeader';
import Waterfall from 'src/Waterfall';
import Paper from 'src/Paper';
import ButtonRadioGroup from 'src/ButtonRadioGroup';

import PropTypeDescTable from 'components/PropTypeDescTable';
import doc from 'assets/propTypes/Waterfall.json';

import 'sass/containers/app/modules/layout/WaterfallExamples.scss';

class WaterfallExamples extends Component {

    constructor(props) {

        super(props);

        this.data = [{
            label: 'One Column',
            value: 1
        }, {
            label: 'Two Columns',
            value: 2
        }, {
            label: 'Three Column',
            value: 3
        }, {
            label: 'Four Column',
            value: 4
        }];

        this.state = {
            column: 3
        };

        this.columnChangeHandle = ::this.columnChangeHandle;

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
                                    <ButtonRadioGroup data={this.data}
                                                      value={column}
                                                      onChange={this.columnChangeHandle}/>
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

                <PropTypeDescTable data={doc}/>

            </div>
        );
    }
};

export default WaterfallExamples;