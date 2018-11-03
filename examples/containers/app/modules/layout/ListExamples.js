import React, {Component} from 'react';

import List from 'src/List';
import Widget from 'src/Widget';
import WidgetHeader from 'src/WidgetHeader';
import Paper from 'src/Paper';

import PropTypeDescTable from 'components/PropTypeDescTable';
import doc from 'assets/propTypes/List.json';

import 'scss/containers/app/modules/layout/ListExamples.scss';

class ListExamples extends Component {

    constructor(props) {

        super(props);

        this.listData = [{
            iconCls: 'fab fa-facebook',
            value: 'Facebook',
            text: 'Facebook'
        }, {
            iconCls: 'fab fa-twitter',
            value: 'Twitter',
            text: 'Twitter'
        }, {
            iconCls: 'fab fa-google-plus-g',
            value: 'Google+',
            text: 'Google+'
        }];

        this.disabledListData = [{
            iconCls: 'fab fa-firefox',
            value: 'Firefox',
            text: 'Firefox',
            disabled: (listItem, listValue, listData) => true
        }, {
            iconCls: 'fab fa-chrome',
            value: 'Chrome',
            text: 'Chrome'
        }, {
            iconCls: 'fab fa-safari',
            value: 'Safari',
            text: 'Safari',
            disabled: true
        }];

        this.themeListData = [{
            value: 'Success',
            text: 'Success',
            theme: 'success',
            rightIconCls: 'fas fa-check-circle'
        }, {
            value: 'Error',
            text: 'Error',
            theme: 'error',
            rightIconCls: 'far fa-times-circle'
        }, {
            value: 'Warning',
            text: 'Warning',
            theme: 'warning',
            rightIconCls: 'fas fa-exclamation-triangle'
        }, {
            value: 'Primary',
            text: 'Primary',
            theme: 'primary',
            rightIconCls: 'fab fa-gratipay'
        }];

        this.descListData = [{
            iconCls: 'fab fa-facebook',
            value: 'Facebook',
            text: 'Facebook',
            desc: 'Here is a Facebook Desc.'
        }, {
            iconCls: 'fab fa-twitter',
            value: 'Twitter',
            text: 'Twitter',
            desc: 'Here is a Twitter Desc.'
        }, {
            iconCls: 'fab fa-google-plus-g',
            value: 'Google+',
            text: 'Google+',
            desc: 'Here is a Google+ Desc.'
        }];

        this.customizedListData = [{
            radioUncheckedIconCls: 'fab fa-facebook',
            radioCheckedIconCls: 'fab fa-facebook',
            value: 'Facebook',
            text: 'Facebook'
        }, {
            radioUncheckedIconCls: 'fab fa-twitter',
            radioCheckedIconCls: 'fab fa-twitter',
            value: 'Twitter',
            text: 'Twitter'
        }, {
            radioUncheckedIconCls: 'fab fa-google-plus-g',
            radioCheckedIconCls: 'fab fa-google-plus-g',
            value: 'Google+',
            text: 'Google+'
        }];

    }

    changeHandler = value => {
        console.log('changed::', value);
    };

    itemClickHandler = item => {
        console.log('clicked::', item);
    };

    itemSelectHandler = value => {
        console.log('selected::', value);
    };

    itemDeselectHandler = value => {
        console.log('deselected::', value);
    };

    render() {
        return (
            <div className="example list-examples">

                <h2 className="example-title">List</h2>

                <p>
                    <span>List</span>
                    are used to present multiple items vertically as a single continuous
                    element. They can be configured for many uses such as a contacts list, nested lists, etc.
                </p>

                <h2 className="example-title">Examples</h2>

                <Widget>

                    <WidgetHeader className="example-header" title="Basic"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p>A <code>List</code> simple example with left icons.</p>

                                <Paper>
                                    <List data={this.listData}
                                          onChange={this.changeHandler}
                                          onItemClick={this.itemClickHandler}
                                          onItemSelect={this.itemSelectHandler}
                                          onItemDeselect={this.itemDeselectHandler}/>
                                </Paper>

                            </div>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="With disabled"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p>Set the <code>disabled</code> property to true for disabled items.</p>

                                <Paper>
                                    <List data={this.disabledListData}
                                          itemDisabled={(listItem, listValue, listData) =>
                                              listItem && listItem.value === 'Chrome'
                                          }/>
                                </Paper>

                            </div>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="With theme and rightIconCls"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p>Set the <code>theme</code> property to "success","error","warning","primary" and set
                                    the <code>rightIconCls</code> property to get rightIcons.</p>

                                <Paper>
                                    <List data={this.themeListData}/>
                                </Paper>

                            </div>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="With desc"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p>
                                    A <code>List</code> with desc.
                                </p>

                                <Paper style={{width: 240}}>
                                    <List style={{width: 240}}
                                          data={this.descListData}
                                          onChange={this.changeHandler}
                                          onItemClick={this.itemClickHandler}/>
                                </Paper>

                            </div>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="Select Mode"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p>
                                    A <code>List</code> with select mode.Can
                                    be <code>SINGLE_SELECT</code>, <code>MULTI_SELECT</code>.
                                </p>

                                <Paper style={{width: 240, marginTop: 20}}>
                                    <List style={{width: 240}}
                                          selectMode={List.SelectMode.MULTI_SELECT}
                                          data={this.descListData}
                                          onChange={this.changeHandler}
                                          onItemClick={this.itemClickHandler}
                                          onItemSelect={this.itemSelectHandler}
                                          onItemDeselect={this.itemDeselectHandler}/>
                                </Paper>

                                <Paper style={{width: 240, marginTop: 20}}>
                                    <List style={{width: 240}}
                                          selectTheme={List.Theme.HIGHLIGHT}
                                          data={this.customizedListData}
                                          onChange={this.changeHandler}
                                          onItemClick={this.itemClickHandler}
                                          onItemSelect={this.itemSelectHandler}
                                          onItemDeselect={this.itemDeselectHandler}/>
                                </Paper>

                            </div>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="Select only when click checkbox"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <Paper style={{width: 240, marginTop: 20}}>
                                    <List style={{width: 240}}
                                          selectMode={List.SelectMode.MULTI_SELECT}
                                          data={this.descListData}
                                          autoSelect={false}
                                          disableTouchRipple={true}
                                          onChange={this.changeHandler}
                                          onItemClick={this.itemClickHandler}
                                          onItemSelect={this.itemSelectHandler}
                                          onItemDeselect={this.itemDeselectHandler}/>
                                </Paper>

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

export default ListExamples;
