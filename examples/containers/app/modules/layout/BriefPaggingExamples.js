import React, {Component} from 'react';

import BriefPagging from 'src/BriefPagging';
import Widget from 'src/Widget';
import WidgetHeader from 'src/WidgetHeader';
import Calculation from '../../../../../src/_vendors/Calculation';

import PropTypeDescTable from 'components/PropTypeDescTable';
import BriefPaggingDoc from 'assets/propTypes/BriefPagging.json';

import 'sass/containers/app/modules/layout/PaperExamples.scss';

export default class BriefPaggingExamples extends Component {

    constructor(props) {
        super(props);

        this.pageSizes = [{
            value: 10,
            text: '10'
        }, {
            value: 20,
            text: '20'
        }, {
            value: 30,
            text: '30'
        }, {
            value: 40,
            text: '40'
        }, {
            value: 50,
            text: '50'
        }];

        this.state = {
            // pagging: {
            //     pageSize: Calculation.pageSize(defaultPageSize, pageSizes, 10),
            //     page: 0
            // }
        }
    }

    generateData(size = 100) {

        let data = [];
        for (let i = 0; i < size; i++) {
            data.push({
                id: i,
                name: `firstName${i}`
            });
        }
        return data.length;
    }

    changeHandler() {

    }

    render() {
        const {pageSize} = this.state;

        const totalPage = Math.ceil(this.generateData() / pageSize);

        return (
            <div className="example brief-pagging-examples">

                <h2 className="example-title">BriefPagging</h2>

                <p>
                    A <span>BriefPagging</span> element used for dividing long list, each time only loads a page.
                </p>

                <h2 className="example-title">Examples</h2>

                <Widget>

                    <WidgetHeader className="example-header" title="BriefPagging Example"/>

                    <div className="widget-content">

                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p>BriefPagging examples showing with default value.</p>

                                <BriefPagging/>

                            </div>
                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="With selectedCountVisible"/>

                    <div className="widget-content">

                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p>A more complex example.Set the <code>selectedCountVisible</code>to true to show
                                    selectedCount.</p>

                                <BriefPagging selectedCountVisible={true}/>

                            </div>
                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="With selectedCountVisible"/>

                    <div className="widget-content">

                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p>A more complex example.Set the <code>selectedCountVisible</code>to true for
                                    selectedCount.</p>

                                <BriefPagging selectedCountVisible={true}
                                              total={totalPage}
                                              page={2}
                                              pageSize={pageSize}
                                              pageSizes={this.pageSizes}
                                              count={this.generateData()}
                                              onChange={this.changeHandler()}/>
                            </div>
                        </div>
                    </div>

                </Widget>

                <h2 className="example-title">Properties</h2>

                <PropTypeDescTable data={BriefPaggingDoc}/>

            </div>
        );
    }
};