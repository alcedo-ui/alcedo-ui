import React, {Component} from 'react';

import Rate from 'src/Rate';
import Widget from 'src/Widget';
import WidgetHeader from 'src/WidgetHeader';

import PropTypeDescTable from 'components/PropTypeDescTable';
import doc from 'assets/propTypes/Rate.json';

class RateExamples extends Component {

    constructor(props) {

        super(props);

        this.state = {
            value: 3,
            value2: 3.5
        };

    }

    onChangeHandle = value => {
        this.setState({
            value
        });
    };

    onChangeHandle2 = value2 => {
        this.setState({
            value2
        });
    };

    render() {

        const {value, value2} = this.state;

        return (
            <div className="example rate-examples">

                <h2 className="example-title">Rate</h2>

                <p>
                    The <span>Rate</span> is used to evaluate something.
                </p>

                <h2 className="example-title">Examples</h2>

                <Widget>

                    <WidgetHeader className="example-header" title="Basic"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <p>A simple <code>Rate</code> example.</p>

                            <Rate value={value}
                                  onChange={(value) => {
                                      this.onChangeHandle(value);
                                  }}/>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="With allowHalf"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <p>Set the <code>allowHalf</code> property to display half star.</p>

                            <Rate value={value2}
                                  allowHalf={true}
                                  onChange={(value2) => {
                                      this.onChangeHandle2(value2);
                                  }}/>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="With disabled"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <p>Set the <code>disabled</code> property to disabled the <code>Rate</code> component.</p>

                            <Rate value={value2}
                                  allowHalf={true}
                                  disabled={true}
                                  onChange={(value2) => {
                                      this.onChangeHandle2(value2);
                                  }}/>

                        </div>
                    </div>

                </Widget>

                <h2 className="example-title">Properties</h2>

                <PropTypeDescTable data={doc}/>

            </div>
        );
    }
}

export default RateExamples;