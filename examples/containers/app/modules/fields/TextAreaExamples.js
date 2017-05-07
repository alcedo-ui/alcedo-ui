/**
 * Created by DT314 on 2017/5/5.
 */
import React, {Component} from 'react';
import TextArea from 'dist/TextArea';

import Widget from 'dist/Widget';
import WidgetHeader from 'dist/WidgetHeader';

export default class TextAreaExamples extends Component{
    constructor(props){
        super();
    }

    render() {
        return (
            <div>
                <h2 className="example-title">TextArea</h2>

                <p>
                    A <span>TextArea</span> is an interface for users to input a value in a range. TextArea can be
                    continuous or discrete.
                </p>

                <h2 className="example-title">Examples</h2>
                <TextArea />
            </div>
        )
    }
}