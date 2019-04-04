import React, {Component} from 'react';

import Pagination from 'src/Pagination';
import Widget from 'src/Widget';
import WidgetHeader from 'src/WidgetHeader';
import RaisedButton from 'src/RaisedButton';
import Dialog from 'src/Dialog';
import Valid from 'src/_vendors/Valid';

import PropTypeDescTable from 'components/PropTypeDescTable';
import doc from 'assets/propTypes/Pagination.json';

import 'scss/containers/app/modules/layout/PaginationExamples.scss';

class PaginationExamples extends Component {

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
                pageSize: 30,
                page: 0
            },
            PaginationVisible: {}
        };

    }

    show = id => {

        const {PaginationVisible} = this.state;

        PaginationVisible[id] = true;

        this.setState({
            PaginationVisible
        });

    };

    hide = id => {

        const {PaginationVisible} = this.state;

        PaginationVisible[id] = false;

        this.setState({
            PaginationVisible
        });

    };

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

        console.log('Page Changed::', pagging);

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

        const {pagging, PaginationVisible} = this.state;

        return (
            <div className="example pagging-examples">

                <h2 className="example-title">Pagination</h2>

                <p>
                    A <span>Pagination</span> element used for dividing long list, each time only loads a page.
                </p>

                <h2 className="example-title">Examples</h2>

                <Widget>

                    <WidgetHeader className="example-header" title="With "/>

                    <div className="widget-content">
                        <div className="example-content">
                            <p>A simple <code>Pagination</code> example.</p>
                            <Pagination selectedCountVisible={true}
                                        page={pagging.page}
                                        total={this.generateData()}
                                        pageSize={pagging.pageSize}
                                        pageSizes={this.pageSizes}
                                        onChange={this.pageChangedHandler}/>
                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="In Dialog"/>

                    <div className="widget-content">
                        <div className="example-content">
                            <p>A simple <code>Pagination</code> example.</p>

                            <RaisedButton className="trigger-button dialog-button"
                                          value="Show Dialog"
                                          onClick={() => this.show(1)}/>

                            <Dialog visible={PaginationVisible[1]}
                                    onRequestClose={() => this.hide(1)}>
                                {
                                    dialogContentEl =>
                                        <div className="popover-dialog-content-scroller">
                                            <Pagination selectedCountVisible={true}
                                                        parentEl={dialogContentEl}
                                                        page={pagging.page}
                                                        total={this.generateData()}
                                                        pageSize={pagging.pageSize}
                                                        pageSizes={this.pageSizes}
                                                        onChange={this.pageChangedHandler}/>
                                        </div>
                                }
                            </Dialog>

                        </div>
                    </div>

                </Widget>

                <h2 className="example-title">Properties</h2>

                <PropTypeDescTable data={doc}/>

            </div>
        );
    }
};

export default PaginationExamples;