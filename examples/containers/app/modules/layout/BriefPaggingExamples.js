import React, {Component} from 'react';

import BriefPagging from 'src/BriefPagging';
import Widget from 'src/Widget';
import WidgetHeader from 'src/WidgetHeader';
import Valid from 'src/_vendors/Valid';

import PropTypeDescTable from 'components/PropTypeDescTable';
import doc from 'assets/propTypes/BriefPagging.json';

class BriefPaggingExamples extends Component {

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
            pagging: {
                pageSize: 10,
                page: 0
            }
        };

    }

    generateData = (size = 100) => {

        let data = [];
        for (let i = 0; i < size; i++) {
            data.push({
                id: i,
                name: `firstName${i}`
            });
        }

        return data.length;

    };

    pageChangedHandler = pagging => {

        if (typeof pagging.pageSize === 'object') {
            pagging.pageSize = pagging.pageSize.value;
        }

        this.setState({
            pagging
        }, () => {
            this.resetPage(this.generateData(100), pagging);
        });

    };

    resetPage = (data = this.generateData(100), pagging = this.state.pagging) => {

        let {page, pageSize} = pagging,
            total = Math.ceil(data / pageSize);

        if (page + 1 > total) {
            this.setState({
                pagging: {
                    pageSize,
                    page: Valid.range(total - 1, 0)
                }
            });
            return;
        }

    };

    render() {

        const {pagging} = this.state,
            totalPage = Math.ceil(this.generateData() / pagging.pageSize);

        return (
            <div className="example brief-pagging-examples">

                <h2 className="example-title">BriefPagging</h2>

                <p>
                    A <span>BriefPagging</span> element used for dividing long list, each time only loads a page.
                </p>

                <h2 className="example-title">Examples</h2>

                <Widget>

                    <WidgetHeader className="example-header" title="With selectedCountVisible"/>

                    <div className="widget-content">

                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p>A simple <code>BriefPagging</code> example.</p>

                                <BriefPagging selectedCountVisible={true}
                                              page={pagging.page}
                                              count={this.generateData()}
                                              total={totalPage}
                                              pageSize={pagging.pageSize}
                                              pageSizes={this.pageSizes}
                                              onChange={this.pageChangedHandler}/>

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

export default BriefPaggingExamples;