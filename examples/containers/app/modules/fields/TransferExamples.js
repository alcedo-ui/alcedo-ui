import React, {Component} from 'react';

import Widget from 'src/Widget';
import WidgetHeader from 'src/WidgetHeader';
import Transfer from 'src/Transfer';

import PropTypeDescTable from 'components/PropTypeDescTable';
import doc from 'assets/propTypes/Transfer.json';

import 'sass/containers/app/modules/fields/TransferExamples.scss';

class TransferExamples extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        let leftData = [], rightData = [];
        for (let i = 0; i < 30; i++) {
            let obj = {text: 'item' + (i + 1), id: i};
            if (i % 2 == 0) {
                obj.disabled = true;
            }
            if (Math.random() * 2 > 1) {
                leftData.push(obj);
            } else {
                rightData.push(obj);
            }
        }

        return (
            <div className="example transfer-examples">

                <h2 className="example-title">Transfer</h2>

                <p>
                    <span>Transfer</span> double column shuttle selection box.
                </p>

                <h2 className="example-title">Examples</h2>

                <Widget>

                    <WidgetHeader className="example-header"
                                  title="Basic"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p><code>Transfer</code> simple example.</p>
                                <div className="field-group">
                                    <Transfer leftData={leftData}
                                              rightData={rightData}/>
                                </div>
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

export default TransferExamples;