/**
 * @file: /alcedo-ui/examples/containers/app/modules/date/QuarterRangeFiledExamples.js
 * @author: zhongweichao(zhongwei.chao@derbysoft.net)
 */
import React, {Component} from 'react';

import QuarterRangeFiled from 'src/QuarterRangeFiled';
import Widget from 'src/Widget';
import WidgetHeader from 'src/WidgetHeader';

// import PropTypeDescTable from 'components/PropTypeDescTable';
// import doc from 'assets/propTypes/MonthRangeField.json';

class QuarterRangeFiledExamples extends Component {

    constructor(props) {
        super(props);
    }

    onChangeHandler = value => {
        console.log(value);
    };

    render() {
        return (

            <div className="example date-range-picker-examples">

                <h2 className="example-title">Quarter Range Field</h2>

                <p>
                    <span>Quarter Range Field</span> is used to select a date range.
                </p>

                <h2 className="example-title">Examples</h2>

                <Widget>

                    <WidgetHeader className="example-header" title="With value and dateFormat"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p><code>Quarter Range Field</code>simple example.</p>

                                <QuarterRangeFiled value={['2021-3', '2022-3']}
                                                 dateFormat={'YYYY-Q'}
                                                 maxValue={'2023-3'}
                                                 minValue={null}
                                                 onChange={this.onChangeHandler}/>
                            </div>

                        </div>
                    </div>

                </Widget>

                {/* <Widget>

                    <WidgetHeader className="example-header" title="With value and dateFormat"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <QuarterRangeFiled value={['2021-3', '2022-3']}
                                                 dateFormat={'YYYY-Q'}
                                                 maxValue={'2023-3'}
                                                 minValue={null}
                                                 onChange={this.onChangeHandler}/>

                            </div>

                        </div>
                    </div>

                </Widget> */}

                {/* <h2 className="example-title">Properties</h2>

                <PropTypeDescTable data={doc}/> */}

            </div>
        );
    }
}

export default QuarterRangeFiledExamples;
