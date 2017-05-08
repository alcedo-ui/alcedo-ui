import React, {Component} from 'react';

import IconButton from 'dist/IconButton';
import Widget from 'dist/Widget';
import WidgetHeader from 'dist/WidgetHeader';
import Tip from 'dist/Tip';

import PropTypeDescTable from '../PropTypeDescTable';
import TipDoc from 'assets/propTypes/TipBody.json';

import 'sass/containers/app/modules/message/TipExamples.scss';

export default class TipExamples extends Component {

    constructor(props) {
        super(props);
        this.text = 'This is a icon button';
    }

    render() {
        return (
            <div className="example tip-example">

                <h2 className="example-title">Tip Button</h2>

                <Widget>

                    <WidgetHeader className="example-header" title="Tip Simple Example"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <IconButton iconCls="fa fa-plus"
                                            theme="success"
                                            tip={this.text}
                                            tipPosition={Tip.Position.BOTTOM}/>

                                {/*<IconButton iconCls="fa fa-plus"*/}
                                {/*theme="success"*/}
                                {/*tip={this.text}*/}
                                {/*tipPosition="bottom-right"/>*/}

                                {/*<IconButton iconCls="fa fa-plus"*/}
                                {/*theme="success"*/}
                                {/*tip={this.text}*/}
                                {/*tipPosition="left"/>*/}

                                {/*<IconButton iconCls="fa fa-plus"*/}
                                {/*theme="success"*/}
                                {/*tip={this.text}*/}
                                {/*tipPosition="right"/>*/}

                                {/*<IconButton iconCls="fa fa-plus"*/}
                                {/*theme="success"*/}
                                {/*tip={this.text}*/}
                                {/*tipPosition="top-left"/>*/}

                                {/*<IconButton iconCls="fa fa-plus"*/}
                                {/*theme="success"*/}
                                {/*tip={this.text}*/}
                                {/*tipPosition="top-center"/>*/}

                                {/*<IconButton iconCls="fa fa-plus"*/}
                                {/*theme="success"*/}
                                {/*tip={this.text}*/}
                                {/*tipPosition="top-right"/>*/}

                            </div>

                        </div>
                    </div>

                </Widget>

                <h2 className="example-title">Properties</h2>

                <PropTypeDescTable data={TipDoc}/>

            </div>
        );
    }
};