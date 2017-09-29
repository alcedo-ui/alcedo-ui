/**
 * Created by Wendy on 2017/4/20.
 */
import React, {Component} from 'react';

import IconAnchor from 'dist/IconAnchor';
import Widget from 'dist/Widget';
import WidgetHeader from 'dist/WidgetHeader';

import PropTypeDescTable from '../PropTypeDescTable';
import IconAnchorDoc from 'assets/propTypes/IconAnchor.json';

import 'sass/containers/app/modules/buttons/IconAnchorExamples.scss';

export default class IconAnchorExamples extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="example icon-anchor-examples">

                <h2 className="example-title">Icon Anchor</h2>

                <p>
                    An <span>Icon Anchor</span> generates a button element around an icon.Also,Click the button to
                    achieve href address jump.
                </p>

                <h2 className="example-title">Examples</h2>

                <Widget>

                    <WidgetHeader className="example-header" title="Basic"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p><code>Icon Anchor</code> using icon specified with the <code>iconCls</code> property
                                    example.</p>

                                <IconAnchor iconCls="fa fa-github"
                                            style={{fontSize: '14px'}}
                                            className="github-icon"
                                            disabled={true}/>

                                <IconAnchor iconCls="fa fa-github"
                                            style={{fontSize: '14px'}}
                                            className="github-icon"
                                            href="https://github.com/alcedo-ui/alcedo-ui"/>

                                <IconAnchor iconCls="fa fa-github"
                                            style={{fontSize: '14px'}}
                                            className="github-icon"
                                            href="https://github.com/alcedo-ui/alcedo-ui"/>

                            </div>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="With theme and style"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p><code>Icon Anchor</code> using the <code>style</code> property to set size and the
                                    <code>theme</code> property to set different theme.</p>

                                <IconAnchor iconCls="fa fa-github"
                                            style={{fontSize: '14px'}}
                                            theme="primary"
                                            className="github-icon"
                                            disabled={true}/>

                                <IconAnchor iconCls="fa fa-github"
                                            style={{fontSize: '18px'}}
                                            theme="success"
                                            className="github-icon"
                                            href="https://github.com/alcedo-ui/alcedo-ui"/>

                                <IconAnchor iconCls="fa fa-github"
                                            style={{fontSize: '24px'}}
                                            theme="error"
                                            className="github-icon"
                                            href="https://github.com/alcedo-ui/alcedo-ui"/>

                                <IconAnchor iconCls="fa fa-github"
                                            theme="highlight"
                                            style={{fontSize: '28px'}}
                                            className="github-icon"
                                            href="https://github.com/alcedo-ui/alcedo-ui"/>

                                <IconAnchor iconCls="fa fa-github"
                                            theme="warning"
                                            style={{fontSize: '32px'}}
                                            className="github-icon"
                                            href="https://github.com/alcedo-ui/alcedo-ui"/>

                            </div>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="With target"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p><code>Icon Anchor</code> using the <code>target</code> property to set where to open
                                    the connection href.</p>

                                <IconAnchor iconCls="fa fa-github"
                                            style={{fontSize: '14px'}}
                                            className="github-icon"
                                            disabled={true}/>

                                <IconAnchor iconCls="fa fa-github"
                                            style={{fontSize: '18px'}}
                                            className="github-icon"
                                            target="_parent"
                                            href="https://github.com/alcedo-ui/alcedo-ui"/>

                                <IconAnchor iconCls="fa fa-github"
                                            style={{fontSize: '24px'}}
                                            className="github-icon"
                                            target="_self"
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