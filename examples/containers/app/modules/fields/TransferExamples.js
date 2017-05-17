import React, {Component} from 'react';


import Widget from 'dist/Widget';
import WidgetHeader from 'dist/WidgetHeader';
import PropTypeDescTable from '../PropTypeDescTable';
import Transfer from 'dist/Transfer';
import TransferDoc from 'assets/propTypes/Transfer.json';

import 'sass/containers/app/modules/fields/TextFieldExamples.scss';

export default class TransferExamples extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        let leftData = [], rightData = [];
        for(let i = 0 ; i < 30 ; i++){
            let obj={text: 'item' + (i + 1),id:i};
            if(i%2==0){
                obj.disabled = true
            }
            if(Math.random() * 2 > 1) {
                leftData.push(obj)
            }else{
                rightData.push(obj)
            }
        }
        return (
            <div className="example text-field-examples">

                <h2 className="example-title">Transfer</h2>

                <p>
                    <span>Transfer</span>
                </p>

                <h2 className="example-title">Examples</h2>

                <Widget>

                    <WidgetHeader className="example-header"
                                  title="Transfer Example"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p>Transfer</p>
                                <div className="field-group">
                                    <Transfer leftData={leftData}
                                              rightData={rightData}/>
                                </div>
                            </div>

                        </div>
                    </div>

                </Widget>

                <h2 className="example-title">Properties</h2>

                <PropTypeDescTable data={TransferDoc}/>

            </div>
        );
    }
};