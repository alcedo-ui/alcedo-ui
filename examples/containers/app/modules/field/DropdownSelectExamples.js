import React, {Component} from 'react';

import DropdownSelect from 'src/DropdownSelect';
import Widget from 'src/Widget';
import WidgetHeader from 'src/WidgetHeader';
import Theme from 'src/Theme';
import RaisedButton from 'src/RaisedButton';
import Dialog from 'src/Dialog';

import PropTypeDescTable from 'components/PropTypeDescTable';
import doc from 'assets/propTypes/DropdownSelect.json';

import 'scss/containers/app/modules/field/DropdownSelectExamples.scss';



class DropdownSelectExamples extends Component {

    constructor(props) {

        super(props);

        this.data = ['test0', {
            text: 'test1', value: 1, children: [{
                text: 'test111', value: 11
            }]
        }, {
            text: 'test2',
            value: 2,
            desc: 'Here is test2.',
            onClick() {
                console.log('test2 selected!');
            }
        }, 'test3', 'test4', 'test5', {
            text: 'test6',
            value: 6,
            desc: 'Here is test6.',
            onClick() {
                console.log('test6 selected!');
            }
        }, 'test7', 'test8', 'test9'];

        this.groupData = [
            {
                name: 'test0', children: [{
                    text: 'test001', value: 1
                }, {
                    text: 'test002', value: 2
                }, {
                    text: 'test003', value: 3
                }, {
                    text: 'test004', value: 4
                }]
            },
            {
                name: 'test1',
                children: [{
                    text: 'test111', value: 11
                }]
            }, {
                name: 'test2',
                children: [{
                    text: 'test221', value: 221
                }, {
                    text: 'test222', value: 222
                }, {
                    text: 'test223', value: 223
                }, {
                    text: 'test224', value: 224
                }]
            }, {
                name: 'test3',
                children: [{
                    text: 'test331', value: 331
                }, {
                    text: 'test332', value: 332
                }, {
                    text: 'test333', value: 333
                }, {
                    text: 'test334', value: 334
                }]
            }];

        this.state = {
            DropdownSelectVisible: {}
        };

    }

    show = id => {

        const {DropdownSelectVisible} = this.state;

        DropdownSelectVisible[id] = true;

        this.setState({
            DropdownSelectVisible
        });

    };

    hide = id => {

        const {DropdownSelectVisible} = this.state;

        DropdownSelectVisible[id] = false;

        this.setState({
            DropdownSelectVisible
        });

    };

    dialogRenderHandler = () => {

    };

    onChange = value => {
        console.log(value);
    };

    render() {

        const {DropdownSelectVisible} = this.state;

        const data = ['a000', 'booo', {
            text: 'c000',
            value: 2,
            desc: 'Here is test2.'
        }, 'dtest3', 'etest4', 'ftest5', {
            text: 'test6',
            value: 6
        }, 'hhhh', 'yywe', 'people'];

        return (
            <div className="example drop-down-select-examples">

                <h2 className="example-title">Dropdown Select</h2>

                <p>
                    <span>Dropdown Select</span>
                    use to store operating elements. Click on the contact
                    and a drop-down menu will appear. You can select from the list and execute the appropriate command.
                </p>

                <h2 className="example-title">Examples</h2>

                <Widget>

                    <WidgetHeader className="example-header" title="Basic"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p><code>Dropdown Select</code> simple example.</p>

                                <div className="field-group">
                                    <DropdownSelect data={this.data}
                                                    renderer={data => {
                                                        return data && typeof data === 'object' ?
                                                            `${data.text} (${data.value})`
                                                            :
                                                            `${data} (${data})`;
                                                    }}
                                                    onChange={this.onChange}/>
                                </div>

                            </div>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="Group"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p><code>Dropdown Select</code> group example.</p>

                                <div className="field-group">
                                    <DropdownSelect data={this.groupData}
                                                    useFilter={true}
                                                    isGrouped={true}
                                                    displayField={'text'}
                                                    valueField={'value'}
                                                    onChange={this.onChange}/>
                                </div>

                            </div>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="Self defined theme"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p>Set the <code>autoClose</code> property to false,the select list will not close when
                                    choose one item.</p>

                                <div className="field-group">
                                    <DropdownSelect theme={Theme.PRIMARY}
                                                    popupTheme={Theme.PRIMARY}
                                                    data={this.data}
                                                    onChange={this.onChange}/>
                                </div>

                            </div>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="With Filter"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <div className="field-group">

                                    <p>Set the <code>filter</code> property to true,the DropdownSelect will have user
                                        search input.</p>

                                    <DropdownSelect data={this.data}
                                                    useFilter={true}
                                                    useSelectAll={true}
                                                    useDynamicRenderList={true}
                                                    selectAllText="All Example Items"
                                                    selectMode={DropdownSelect.SelectMode.MULTI_SELECT}
                                                    autoClose={false}
                                                    checkboxUncheckedIconCls={'far fa-window-close'}
                                                    checkboxCheckedIconCls={'fas fa-window-close'}
                                                    onChange={this.onChange}/>

                                </div>

                            </div>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="With multi"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <div className="field-group">

                                    <p>
                                        Set the <code>mod</code> property to
                                        <code>DropdownSelect.SelectMode.MULTI_SELECT</code>,
                                        the DropdownSelect can be Multiselect.
                                    </p>

                                    <DropdownSelect data={this.data}
                                                    autoClose={false}
                                                    selectMode={DropdownSelect.SelectMode.MULTI_SELECT}
                                                    onChange={this.onChange}/>

                                </div>

                            </div>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="Self defined theme"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p>Set the <code>autoClose</code> property to false,the select list will not close when
                                    choose one item.</p>

                                <div className="field-group">
                                    <DropdownSelect data={data}
                                                    isHiddenInputFilter={true}
                                                    tip="DropdownSelect Example"
                                                    onChange={this.onChange}/>
                                </div>

                            </div>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="In Dialog"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p>Set the <code>autoClose</code> property to false,the select list will not close when
                                    choose one item.</p>

                                <RaisedButton className="trigger-button dialog-button"
                                              value="Show Dialog"
                                              onClick={() => this.show(1)}/>

                                <Dialog visible={DropdownSelectVisible[1]}
                                        onRender={this.dialogRenderHandler}
                                        onRequestClose={() => this.hide(1)}>
                                    {
                                        dialogContentEl =>
                                            <div className="popover-dialog-content-scroller">
                                                <div className="field-group">
                                                    <DropdownSelect data={data}
                                                                    isHiddenInputFilter={true}
                                                                    parentEl={dialogContentEl}
                                                                    tip="DropdownSelect Example"
                                                                    onChange={this.onChange}/>
                                                </div>
                                            </div>
                                    }

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

export default DropdownSelectExamples;
