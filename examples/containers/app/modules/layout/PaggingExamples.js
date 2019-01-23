import React, {Component} from 'react';

import Pagging from 'src/Pagging';
import Widget from 'src/Widget';
import WidgetHeader from 'src/WidgetHeader';
import RaisedButton from 'src/RaisedButton';
import Dialog from 'src/Dialog';
import Valid from 'src/_vendors/Valid';
import {findDOMNode} from 'react-dom';

import PropTypeDescTable from 'components/PropTypeDescTable';
import doc from 'assets/propTypes/Pagging.json';

import 'scss/containers/app/modules/layout/PaggingExamples.scss';

class PaggingExamples extends Component {

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
            PaggingVisible: {},
            triggerEl: {}
        };

    }

    show = id => {

        const {PaggingVisible} = this.state;

        PaggingVisible[id] = true;

        this.setState({
            PaggingVisible
        });

    };

    hide = id => {

        const {PaggingVisible} = this.state;

        PaggingVisible[id] = false;

        this.setState({
            PaggingVisible
        });

    };

    dialogRenderHandler = () => {

        const triggerEl = this.state.triggerEl;
        triggerEl[1] = findDOMNode(this.refs['trigger1']);

        this.setState({
            triggerEl
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

        const {pagging, PaggingVisible, triggerEl} = this.state;

        return (
            <div className="example pagging-examples">

                <h2 className="example-title">Pagging</h2>

                <p>
                    A <span>Pagging</span> element used for dividing long list, each time only loads a page.
                </p>

                <h2 className="example-title">Examples</h2>

                <Widget>

                    <WidgetHeader className="example-header" title="With "/>

                    <div className="widget-content">
                        <div className="example-content">
                            <p>A simple <code>Pagging</code> example.</p>
                            <Pagging selectedCountVisible={true}
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
                            <p>A simple <code>Pagging</code> example.</p>

                            <RaisedButton className="trigger-button dialog-button"
                                          value="Show Dialog"
                                          onClick={() => this.show(1)}/>

                            <Dialog visible={PaggingVisible[1]}
                                    onRender={this.dialogRenderHandler}
                                    onRequestClose={() => this.hide(1)}>

                                <div className="popover-dialog-content-scroller">
                                    <Pagging selectedCountVisible={true}
                                             parentEl={document.querySelector('.dialog-content')}
                                             triggerEl={triggerEl}
                                             page={pagging.page}
                                             total={this.generateData()}
                                             pageSize={pagging.pageSize}
                                             pageSizes={this.pageSizes}
                                             onChange={this.pageChangedHandler}/>
                                </div>

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

export default PaggingExamples;