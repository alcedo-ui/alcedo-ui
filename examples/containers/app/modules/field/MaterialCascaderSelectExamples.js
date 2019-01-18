import React, {Component} from 'react';

import Widget from 'src/Widget';
import WidgetHeader from 'src/WidgetHeader';
import MaterialCascaderSelect from 'src/MaterialCascaderSelect';
import RaisedButton from 'src/RaisedButton';
import Dialog from 'src/Dialog';
import {findDOMNode} from 'react-dom';

import PropTypeDescTable from 'components/PropTypeDescTable';
import doc from 'examples/assets/propTypes/MaterialCascaderSelect.json';

import 'scss/containers/app/modules/field/MaterialCascaderSelectExamples.scss';


class MaterialCascaderSelectExamples extends Component {

    constructor(props) {

        super(props);

        this.data = [{
            text: 'Asia',
            value: 'Asia',
            children: [{
                text: 'Korea',
                value: 'Korea'
            }, {
                text: 'Japan',
                value: 'Japan',
                children: [{
                    text: 'Tokyo',
                    value: 'Tokyo'
                }, {
                    text: 'Yokohama',
                    value: 'Yokohama'
                }, {
                    text: 'Osaka',
                    value: 'Osaka'
                }]
            }, {
                text: 'China',
                value: 'China',
                children: [{
                    text: 'Shanghai',
                    value: 'Shanghai'
                }, {
                    text: 'Beijing',
                    value: 'Beijing'
                }, {
                    text: 'Shenzhen',
                    value: 'Shenzhen'
                }]
            }]
        }, {
            text: 'Europe',
            value: 'Europe',
            children: [{
                text: 'Germany',
                value: 'Germany'
            }, {
                text: 'France',
                value: 'France'
            }]
        }, {
            text: 'North America',
            value: 'North America',
            children: [{
                text: 'Canada',
                value: 'Canada'
            }, {
                text: 'America',
                value: 'America'
            }]
        }, {
            text: 'South America',
            value: 'South America'
        }, {
            text: 'Africa',
            value: 'Africa'
        }, {
            text: 'Oceania',
            value: 'Oceania'
        }, {
            text: 'Antarctica',
            value: 'Antarctica'
        }];

        this.state = {
            MaterialCascaderSelectVisible: {},
            triggerEl: {}
        };

    }

    show = id => {

        const {MaterialCascaderSelectVisible} = this.state;

        MaterialCascaderSelectVisible[id] = true;

        this.setState({
            MaterialCascaderSelectVisible
        });

    };

    hide = id => {

        const {MaterialCascaderSelectVisible} = this.state;

        MaterialCascaderSelectVisible[id] = false;

        this.setState({
            MaterialCascaderSelectVisible
        });

    };

    dialogRenderHandler = () => {

        const triggerEl = this.state.triggerEl;
        triggerEl[1] = findDOMNode(this.refs['trigger1']);

        this.setState({
            triggerEl
        });
    };

    onChangeHandler = value => {
        console.log(value);
    };

    render() {

        const {MaterialCascaderSelectVisible, triggerEl} = this.state;
        return (
            <div className="example material-cascader-select-examples">

                <h2 className="examples-title">MaterialCascaderSelectExamples</h2>

                <p>
                    <span>MaterialCascaderSelect</span>
                </p>

                <h2 className="example-title">Examples</h2>

                <Widget>

                    <WidgetHeader className="example-header"
                                  title="Basic"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p><code>Material Cascader Select</code>simple example.</p>

                                <MaterialCascaderSelect theme={MaterialCascaderSelect.Theme.HIGHLIGHT}
                                                        data={this.data}
                                                        value={{
                                                            id: '010',
                                                            text: 'Children 0 - 1 - 0',
                                                            desc: 'Children 0 - 1 - 0'
                                                        }}
                                                        onChange={this.onChangeHandler}/>

                            </div>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header"
                                  title="Basic"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p><code>Material Cascader Select</code> simple example.</p>

                                <div className="field-group">
                                    <MaterialCascaderSelect theme={MaterialCascaderSelect.Theme.HIGHLIGHT}
                                                            label="Label"
                                                            placeholder="Placeholder"
                                                            selectMode={MaterialCascaderSelect.SelectMode.MULTI_SELECT}
                                                            position={MaterialCascaderSelect.Position.BOTTOM_RIGHT}
                                                            expandDirection={MaterialCascaderSelect.ExpandDirection.LEFT}
                                                            autoClose={false}
                                                            data={this.data}
                                                            tip="MaterialCascaderSelect Example"
                                                            renderer={node => {
                                                                return (
                                                                    <div className="self-define-node">
                                                                        <span
                                                                            className="self-define-node-text">{node.text}</span>
                                                                        {
                                                                            node.children && node.children.length > 0 ?
                                                                                <span className="self-define-node-desc">
                                                                                    ({node.children.length})
                                                                                </span>
                                                                                :
                                                                                null
                                                                        }
                                                                    </div>
                                                                );
                                                            }}
                                                            checkboxUncheckedIconCls="far fa-circle"
                                                            checkboxCheckedIconCls="fas fa-check-circle"
                                                            checkboxIndeterminateIconCls="fas fa-minus-circle"
                                                            onChange={this.onChangeHandler}/>
                                </div>
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

                                <p><code>Material Cascader Select</code> simple example.</p>

                                <RaisedButton className="trigger-button dialog-button"
                                              value="Show Dialog"
                                              onClick={() => this.show(1)}/>

                                <Dialog visible={MaterialCascaderSelectVisible[1]}
                                        onRender={this.dialogRenderHandler}
                                        onRequestClose={() => this.hide(1)}>
                                    <div className="popover-dialog-content-scroller">
                                        <div className="field-group">
                                            <MaterialCascaderSelect theme={MaterialCascaderSelect.Theme.HIGHLIGHT}
                                                                    label="Label"
                                                                    placeholder="Placeholder"
                                                                    selectMode={MaterialCascaderSelect.SelectMode.MULTI_SELECT}
                                                                    position={MaterialCascaderSelect.Position.BOTTOM_RIGHT}
                                                                    expandDirection={MaterialCascaderSelect.ExpandDirection.LEFT}
                                                                    autoClose={false}
                                                                    data={this.data}
                                                                    parentEl={document.querySelector('.dialog-content')}
                                                                    triggerEl={triggerEl}
                                                                    tip="MaterialCascaderSelect Example"
                                                                    renderer={node => {
                                                                        return (
                                                                            <div className="self-define-node">
                                                                        <span
                                                                            className="self-define-node-text">{node.text}</span>
                                                                                {
                                                                                    node.children && node.children.length > 0 ?
                                                                                        <span className="self-define-node-desc">
                                                                                    ({node.children.length})
                                                                                </span>
                                                                                        :
                                                                                        null
                                                                                }
                                                                            </div>
                                                                        );
                                                                    }}
                                                                    checkboxUncheckedIconCls="far fa-circle"
                                                                    checkboxCheckedIconCls="fas fa-check-circle"
                                                                    checkboxIndeterminateIconCls="fas fa-minus-circle"
                                                                    onChange={this.onChangeHandler}/>
                                        </div>
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

export default MaterialCascaderSelectExamples;
