import React, {Component} from 'react';

import Widget from 'src/Widget';
import WidgetHeader from 'src/WidgetHeader';
import TreeSelect from 'src/TreeSelect';
import RaisedButton from 'src/RaisedButton';
import Dialog from 'src/Dialog';
import {findDOMNode} from 'react-dom';

import PropTypeDescTable from 'components/PropTypeDescTable';
import doc from 'examples/assets/propTypes/TreeSelect.json';

import 'scss/containers/app/modules/field/TreeSelectExamples.scss';


class TreeSelectExamples extends Component {

    constructor(props) {

        super(props);

        this.data = {
            id: '0',
            text: 'Root',
            desc: 'Root',
            title: 'Root',
            children: [{
                id: '00',
                text: 'Children 0 - 0',
                desc: 'Children 0 - 0',
                title: 'Children 0 - 0'
            }, {
                id: '01',
                text: 'Children 0 - 1',
                desc: 'Children 0 - 1',
                title: 'Children 0 - 1',
                children: [{
                    id: '010',
                    text: 'Children 0 - 1 - 0',
                    desc: 'Children 0 - 1 - 0',
                    title: 'Children 0 - 1 - 0'
                }, {
                    id: '011',
                    text: 'Children 0 - 1 - 1',
                    desc: 'Children 0 - 1 - 1',
                    title: 'Children 0 - 1 - 1'
                }, {
                    id: '012',
                    text: 'Children 0 - 1 - 2',
                    desc: 'Children 0 - 1 - 2',
                    title: 'Children 0 - 1 - 2'
                }]
            }, {
                id: '02',
                text: 'Children 0 - 2',
                desc: 'Children 0 - 2',
                title: 'Children 0 - 2'
            }]
        };

        this.state = {
            TreeSelectVisible: {},
            triggerEl: {}
        };

    }

    show = id => {

        const {TreeSelectVisible} = this.state;

        TreeSelectVisible[id] = true;

        this.setState({
            TreeSelectVisible
        });

    };

    hide = id => {

        const {TreeSelectVisible} = this.state;

        TreeSelectVisible[id] = false;

        this.setState({
            TreeSelectVisible
        });

    };

    dialogRenderHandler = () => {

        const triggerEl = this.state.triggerEl;
        triggerEl[1] = findDOMNode(this.refs['trigger1']);

        this.setState({
            triggerEl
        });
    };

    changeHandler = value => {
        console.log(value);
    };

    render() {

        const {TreeSelectVisible, triggerEl} = this.state;
        return (
            <div className="example tree-select-examples">

                <h2 className="examples-title">Tree Select</h2>

                <p>
                    <span>Tree Select</span>
                    &nbsp;can fully display the hierarchy, and has interactive functions such as
                    expansion, withdrawal and selection.
                </p>

                <h2 className="example-title">Examples</h2>

                <Widget>

                    <WidgetHeader className="example-header"
                                  title="Basic"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p><code>Tree Select</code>&nbsp;simple example.</p>

                                <TreeSelect data={this.data}
                                            value={{
                                                id: '010',
                                                text: 'Children 0 - 1 - 0',
                                                desc: 'Children 0 - 1 - 0'
                                            }}
                                            onChange={this.changeHandler}/>

                            </div>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header"
                                  title="Multi Select"/>

                    <div className="widget-content">
                        <div className="example-content">
                            <div className="examples-wrapper">
                                <TreeSelect selectMode={TreeSelect.SelectMode.MULTI_SELECT}
                                            data={this.data}
                                            autoClose={false}
                                            isSelectRecursive={true}
                                            collapsedIconCls="far fa-plus-square"
                                            expandedIconCls="far fa-minus-square"
                                            checkboxUncheckedIconCls="far fa-circle"
                                            checkboxCheckedIconCls="fas fa-check-circle"
                                            checkboxIndeterminateIconCls="fas fa-minus-circle"
                                            useFilter={true}
                                            tip="TreeSelect Example"
                                            onChange={this.changeHandler}/>
                            </div>
                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header"
                                  title="In Dialog"/>

                    <div className="widget-content">
                        <div className="example-content">
                            <div className="examples-wrapper">

                                <RaisedButton className="trigger-button dialog-button"
                                              value="Show Dialog"
                                              onClick={() => this.show(1)}/>

                                <Dialog visible={TreeSelectVisible[1]}
                                        onRender={this.dialogRenderHandler}
                                        onRequestClose={() => this.hide(1)}>
                                    <div className="popover-dialog-content-scroller">
                                        <TreeSelect selectMode={TreeSelect.SelectMode.MULTI_SELECT}
                                                    data={this.data}
                                                    autoClose={false}
                                                    isSelectRecursive={true}
                                                    collapsedIconCls="far fa-plus-square"
                                                    expandedIconCls="far fa-minus-square"
                                                    checkboxUncheckedIconCls="far fa-circle"
                                                    checkboxCheckedIconCls="fas fa-check-circle"
                                                    checkboxIndeterminateIconCls="fas fa-minus-circle"
                                                    useFilter={true}
                                                    parentEl={document.querySelector('.dialog-content')}
                                                    triggerEl={triggerEl}
                                                    tip="TreeSelect Example"
                                                    onChange={this.changeHandler}/>
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

export default TreeSelectExamples;
