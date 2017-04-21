/**
 * Created by Wendy on 2017/4/10.
 */
import React, {Component, PropTypes} from 'react'
import Widget from 'dist/Widget';
import WidgetHeader from 'dist/WidgetHeader';

import PropTypeDescTable from '../PropTypeDescTable';
import TipDoc from 'docs/Tip.json';

import Tip from '../../../../../dist/Tip/Tip';


export default class DialogExamples extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="example tip-examples">

                <h2 className="example-title">Tip</h2>

                <Widget>

                    <WidgetHeader className="example-header" title="Tip Simple Example"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <Tip text="hello"/>

                            </div>

                        </div>
                    </div>

                </Widget>

                <h2 className="example-title">Properties</h2>

                <PropTypeDescTable data={TipDoc}/>

            </div>
        )
    }
}
