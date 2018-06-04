import React, {Component} from 'react';

import Widget from 'src/Widget';
import WidgetHeader from 'src/WidgetHeader';
import TreeSelect from 'src/TreeSelect';

import PropTypeDescTable from 'components/PropTypeDescTable';
import doc from 'examples/assets/propTypes/TreeSelect.json';

import 'sass/containers/app/modules/fields/TreeSelectExamples.scss';

class TreeSelectExamples extends Component {

    constructor(props) {

        super(props);

        this.data = {
            id: '0',
            text: 'Root',
            desc: 'Root',
            children: [{
                id: '00',
                text: 'Children 0 - 0',
                desc: 'Children 0 - 0'
            }, {
                id: '01',
                text: 'Children 0 - 1',
                desc: 'Children 0 - 1',
                children: [{
                    id: '010',
                    text: 'Children 0 - 1 - 0',
                    desc: 'Children 0 - 1 - 0'
                }, {
                    id: '011',
                    text: 'Children 0 - 1 - 1',
                    desc: 'Children 0 - 1 - 1'
                }, {
                    id: '012',
                    text: 'Children 0 - 1 - 2',
                    desc: 'Children 0 - 1 - 2'
                }]
            }, {
                id: '02',
                text: 'Children 0 - 2',
                desc: 'Children 0 - 2'
            }]
        };

    }

    changeHandler = value => {
        console.log(value);
    };

    render() {
        return (
            <div className="example tree-select-examples">

                <h2 className="examples-title">Tree</h2>

                <p>
                    <span>Tree</span> can fully display the hierarchy, and has interactive functions such as
                    expansion, withdrawal and selection.
                </p>

                <h2 className="example-title">Examples</h2>

                <Widget>

                    <WidgetHeader className="example-header"
                                  title="Basic"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p><code>Tree</code>simple example.</p>

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
                                            onChange={this.changeHandler}/>
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