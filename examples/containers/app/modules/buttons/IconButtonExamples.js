import React, {Component} from 'react';

import IconButton from 'src/IconButton';
import Widget from 'src/Widget';
import WidgetHeader from 'src/WidgetHeader';
import RaisedButton from 'src/RaisedButton';
import Dialog from 'src/Dialog';
import {findDOMNode} from 'react-dom';

import PropTypeDescTable from 'components/PropTypeDescTable';
import doc from 'assets/propTypes/IconButton.json';

import 'scss/containers/app/modules/buttons/IconButtonExamples.scss';

class IconButtonExamples extends Component {

    constructor(props) {
        super(props);
        this.state = {
            IcontButtonVisible: {},
            triggerEl: {}
        };

    }

    show = id => {

        const {IcontButtonVisible} = this.state;

        IcontButtonVisible[id] = true;

        this.setState({
            IcontButtonVisible
        });

    };

    hide = id => {

        const {IcontButtonVisible} = this.state;

        IcontButtonVisible[id] = false;

        this.setState({
            IcontButtonVisible
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

        const {IcontButtonVisible, triggerEl} = this.state;

        return (
            <div className="example icon-button-examples">

                <h2 className="example-title">Icon Button</h2>

                <p>
                    An <span>Icon Button</span> generates a button element around an icon.Also,focus styles will happen
                    on click.
                </p>

                <h2 className="example-title">Examples</h2>

                <Widget>

                    <WidgetHeader className="example-header" title="Basic"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p>
                                    <code>Icon Button</code> using icon specified with the <code>iconCls</code> property
                                    example.
                                </p>

                                <IconButton iconCls="fas fa-plus"
                                            tip="Add"/>

                                <IconButton iconCls="fas fa-trash-alt"
                                            tip="Delete"/>

                                <IconButton iconCls="fas fa-wrench"
                                            tip="Tool"/>

                            </div>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="With theme"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p><code>Icon Button</code> using different <code>theme</code> example.</p>

                                <IconButton iconCls="fas fa-plus"
                                            theme={IconButton.Theme.SUCCESS}/>

                                <IconButton iconCls="fas fa-trash-alt"
                                            theme={IconButton.Theme.ERROR}/>

                                <IconButton iconCls="fas fa-wrench"
                                            disabled={true}/>

                            </div>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="In Dialog"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p>
                                    <code>Icon Button</code> using icon specified with the <code>iconCls</code> property
                                    example.
                                </p>

                                <RaisedButton className="trigger-button dialog-button"
                                              value="Show Dialog"
                                              onClick={() => this.show(1)}/>

                                <Dialog visible={IcontButtonVisible[1]}
                                        onRender={this.dialogRenderHandler}
                                        onRequestClose={() => this.hide(1)}>
                                    <div className="popover-dialog-content-scroller">

                                        <IconButton iconCls="fas fa-plus"
                                                    parentEl={document.querySelector('.dialog-content')}
                                                    triggerEl={triggerEl}
                                                    tip="Add"/>

                                        <IconButton iconCls="fas fa-trash-alt"
                                                    parentEl={document.querySelector('.dialog-content')}
                                                    triggerEl={triggerEl}
                                                    tip="Delete"/>

                                        <IconButton iconCls="fas fa-wrench"
                                                    parentEl={document.querySelector('.dialog-content')}
                                                    triggerEl={triggerEl}
                                                    tip="Tool"/>

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

export default IconButtonExamples;
