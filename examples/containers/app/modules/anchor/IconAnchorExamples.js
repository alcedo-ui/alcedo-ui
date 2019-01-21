import React, {Component} from 'react';

import IconAnchor from 'src/IconAnchor';
import Widget from 'src/Widget';
import WidgetHeader from 'src/WidgetHeader';
import RaisedButton from 'src/RaisedButton';
import Dialog from 'src/Dialog';
import {findDOMNode} from 'react-dom';

import PropTypeDescTable from 'components/PropTypeDescTable';
import doc from 'examples/assets/propTypes/IconAnchor.json';

import 'scss/containers/app/modules/anchor/IconAnchorExamples.scss'


class IconAnchorExamples extends Component {

    constructor(props) {
        super(props);
        this.state = {
            IncoAnchorVisible: {},
            triggerEl: {}
        };

    }

    show = id => {

        const {IncoAnchorVisible} = this.state;

        IncoAnchorVisible[id] = true;

        this.setState({
            IncoAnchorVisible
        });

    };

    hide = id => {

        const {IncoAnchorVisible} = this.state;

        IncoAnchorVisible[id] = false;

        this.setState({
            IncoAnchorVisible
        });

    };

    dialogRenderHandler = () => {

        const triggerEl = this.state.triggerEl;
        triggerEl[1] = findDOMNode(this.refs['trigger1']);

        this.setState({
            triggerEl
        });
    };

    render() {

        const {IncoAnchorVisible, triggerEl} = this.state;

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

                                <IconAnchor iconCls="fab fa-github"
                                            style={{fontSize: '14px'}}
                                            className="github-icon"
                                            tip="Github"/>

                                <IconAnchor iconCls="fab fa-github"
                                            style={{fontSize: '14px'}}
                                            className="github-icon"
                                            href="https://github.com/alcedo-ui/alcedo-ui"
                                            tip="Github"/>

                                <IconAnchor iconCls="fab fa-github"
                                            style={{fontSize: '14px'}}
                                            className="github-icon"
                                            href="https://github.com/alcedo-ui/alcedo-ui"
                                            tip="Github"/>

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

                                <IconAnchor iconCls="fab fa-github"
                                            style={{fontSize: '14px'}}
                                            theme="primary"
                                            className="github-icon"
                                            disabled={true}/>

                                <IconAnchor iconCls="fab fa-github"
                                            style={{fontSize: '18px'}}
                                            theme="success"
                                            className="github-icon"
                                            href="https://github.com/alcedo-ui/alcedo-ui"/>

                                <IconAnchor iconCls="fab fa-github"
                                            style={{fontSize: '24px'}}
                                            theme="error"
                                            className="github-icon"
                                            href="https://github.com/alcedo-ui/alcedo-ui"/>

                                <IconAnchor iconCls="fab fa-github"
                                            theme="highlight"
                                            style={{fontSize: '28px'}}
                                            className="github-icon"
                                            href="https://github.com/alcedo-ui/alcedo-ui"/>

                                <IconAnchor iconCls="fab fa-github"
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

                                <IconAnchor iconCls="fab fa-github"
                                            style={{fontSize: '14px'}}
                                            className="github-icon"
                                            disabled={true}/>

                                <IconAnchor iconCls="fab fa-github"
                                            style={{fontSize: '18px'}}
                                            className="github-icon"
                                            target="_parent"
                                            href="https://github.com/alcedo-ui/alcedo-ui"/>

                                <IconAnchor iconCls="fab fa-github"
                                            style={{fontSize: '24px'}}
                                            className="github-icon"
                                            target="_self"
                                            href="https://github.com/alcedo-ui/alcedo-ui"/>

                            </div>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="In Dialog"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p><code>Icon Anchor</code> using icon specified with the <code>iconCls</code> property
                                    example.</p>

                                <RaisedButton className="trigger-button dialog-button"
                                              value="Show Dialog"
                                              onClick={() => this.show(1)}/>

                                <Dialog visible={IncoAnchorVisible[1]}
                                        onRender={this.dialogRenderHandler}
                                        onRequestClose={() => this.hide(1)}>
                                    <div className="popover-dialog-content-scroller">

                                        <IconAnchor iconCls="fab fa-github"
                                                    style={{fontSize: '14px'}}
                                                    className="github-icon"
                                                    parentEl={document.querySelector('.dialog-content')}
                                                    triggerEl={triggerEl}
                                                    tip="Github"/>

                                        <IconAnchor iconCls="fab fa-github"
                                                    style={{fontSize: '14px'}}
                                                    className="github-icon"
                                                    href="https://github.com/alcedo-ui/alcedo-ui"
                                                    parentEl={document.querySelector('.dialog-content')}
                                                    triggerEl={triggerEl}
                                                    tip="Github"/>

                                        <IconAnchor iconCls="fab fa-github"
                                                    style={{fontSize: '14px'}}
                                                    className="github-icon"
                                                    href="https://github.com/alcedo-ui/alcedo-ui"
                                                    parentEl={document.querySelector('.dialog-content')}
                                                    triggerEl={triggerEl}
                                                    tip="Github"/>

                                    </div>

                                </Dialog>

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

export default IconAnchorExamples;
