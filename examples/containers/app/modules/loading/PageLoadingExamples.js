import React, {Component} from 'react';

import PageLoading from 'src/PageLoading';
import Widget from 'src/Widget';
import WidgetHeader from 'src/WidgetHeader';
import RaisedButton from 'src/RaisedButton';

import PropTypeDescTable from 'components/PropTypeDescTable';
import doc from 'assets/propTypes/PageLoading.json';

import 'assets/scss/containers/app/modules/loading/PageLoadingExamples.scss';

class PageLoadingExamples extends Component {

    constructor(props) {

        super(props);

        this.loadingProgress = [{
            width: 0,
            timeout: 0
        }, {
            width: 80,
            timeout: 200
        }, {
            width: 99,
            timeout: 2000
        }];

        this.state = {
            visible1: false,
            visible2: false,
            visible3: false
        };

    }

    showLoading = visible => {
        this.setState({
            [visible]: true
        }, () => {
            setTimeout(() => {
                this.setState({
                    [visible]: false
                });
            }, 2000);
        });
    };

    render() {

        const {visible1, visible2, visible3} = this.state;

        return (
            <div className="example page-loading-examples">

                <h2 className="example-title">PageLoading</h2>

                <p>
                    <span>PageLoading</span> use to show pages and blocks loading status.
                </p>

                <h2 className="example-title">Examples</h2>

                <Widget>

                    <WidgetHeader className="example-header"
                                  title="PageLoading Example"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <p>A simple PageLoading example.</p>

                            <RaisedButton value="loading"
                                          onClick={() => {
                                              this.showLoading('visible1');
                                          }}/>

                            <PageLoading visible={visible1}
                                         showStripes={false}/>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header"
                                  title="Self Progress PageLoading Example"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <p>Set self loading progress on PageLoading.</p>

                            <RaisedButton value="loading"
                                          onClick={() => {
                                              this.showLoading('visible2');
                                          }}/>

                            <PageLoading visible={visible2}
                                         showStripes={false}
                                         loadingProgress={this.loadingProgress}/>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header"
                                  title="Striped PageLoading Example"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <p>A striped pageLoading example.</p>

                            <RaisedButton value="loading"
                                          onClick={() => {
                                              this.showLoading('visible3');
                                          }}/>

                            <PageLoading visible={visible3}
                                         showStripes={true}/>

                        </div>
                    </div>

                </Widget>

                <h2 className="example-title">Properties</h2>

                <PropTypeDescTable data={doc}/>

            </div>
        );
    }
};

export default PageLoadingExamples;
