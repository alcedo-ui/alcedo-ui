/**
 * Created by Wendy on 2017/4/20.
 */
import React, {Component} from 'react';

import IconAnchor from 'dist/IconAnchor';
import Widget from 'dist/Widget';
import WidgetHeader from 'dist/WidgetHeader';

import PropTypeDescTable from '../PropTypeDescTable';
import IconAnchorDoc from 'docs/IconAnchor.json';

import 'sass/containers/app/modules/buttons/FlatButtonExamples.scss';

export default class FlatButtonExamples extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="example flat-button-example">

                <h2 className="example-title">Icon Anchor</h2>

                <Widget>

                    <WidgetHeader className="example-header" title="Icon Anchor Simple Example"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <IconAnchor iconCls="fa fa-github"
                                            style={{fontSize: '14px'}}
                                            className="github-icon"
                                            disabled={true}/>

                                <IconAnchor iconCls="fa fa-github"
                                            style={{fontSize: '18px'}}
                                            className="github-icon"
                                            href="https://github.com/alcedo-ui/alcedo-ui"/>

                                <IconAnchor iconCls="fa fa-github"
                                            style={{fontSize: '24px'}}
                                            className="github-icon"
                                            href="https://github.com/alcedo-ui/alcedo-ui"/>

                            </div>

                        </div>
                    </div>

                </Widget>

                <h2 className="example-title">Properties</h2>

                <PropTypeDescTable data={IconAnchorDoc}/>

            </div>
        );
    }
};