import React, {Component} from 'react';

import EditableSelect from 'src/EditableSelect';
import Widget from 'src/Widget';
import WidgetHeader from 'src/WidgetHeader';

import PropTypeDescTable from 'components/PropTypeDescTable';
import doc from 'assets/propTypes/EditableSelect.json';

import 'scss/containers/app/modules/field/EditableSelectExamples.scss';

class EditableSelectExamples extends Component {

    constructor(props) {

        super(props);

        this.data = [{value: 0, text: 'test0'}, {value: 1, text: 'test1'}, {
            text: 'test2',
            value: 2,
            desc: 'Here is test2.',
            onClick() {
                console.log('test2 selected!');
            }
        }, {value: 3, text: 'test3'}, {value: 4, text: 'test4'}, {value: 5, text: 'test5'}, {
            text: 'test6',
            value: 6,
            desc: 'Here is test6.',
            onClick() {
                console.log('test6 selected!');
            }
        }, {value: 6, text: 'test6'}, {value: 7, text: 'test7'}, {value: 8, text: 'test8'}];

        this.groupedData = [{
            name: 'socialNetwork',
            children: [{
                iconCls: 'fab fa-facebook',
                text: 'Facebook',
                desc: 'Here is a Facebook Desc.'
            }, {
                iconCls: 'fab fa-twitter',
                text: 'Twitter',
                desc: 'Here is a Twitter Desc.'
            }, {
                iconCls: 'fab fa-google-plus-g',
                text: 'Google+',
                desc: 'Here is a Google+ Desc.'
            }]
        }, {
            name: 'device',
            children: [{
                iconCls: 'fab fa-android',
                text: 'Android',
                desc: 'Here is a Android Desc.'
            }, {
                iconCls: 'fab fa-apple',
                text: 'Apple',
                desc: 'Here is a Apple Desc.'
            }, {
                iconCls: 'fab fa-windows',
                text: 'Windows',
                desc: 'Here is a Windows Desc.'
            }]
        }];

    }

    onChange = value => {
        console.log(value);
    };

    render() {
        return (
            <div className="example editable-select-examples">

                <h2 className="example-title">Editable Select</h2>

                <p>
                    <span>Editable Select</span> use to store operating elements. Click on the contact
                    and a drop-down menu will appear. You can select from the list and execute the appropriate command.
                </p>

                <h2 className="example-title">Examples</h2>

                <Widget>

                    <WidgetHeader className="example-header" title="Basic"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p><code>Editable Select</code> simple example.</p>

                                <div className="field-group">

                                    <EditableSelect data={this.data}
                                                    onChange={this.onChange}
                                                    useDynamicRenderList={true}
                                                    useFilter={true}
                                                    renderer={data => {
                                                        return data ?
                                                            `[${data.value}] ${data.text}` : null;
                                                    }}
                                    />

                                </div>

                            </div>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="Basic"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p><code>Editable Select</code> simple example.</p>

                                <div className="field-group">

                                    <EditableSelect data={[]}
                                                    onChange={this.onChange}
                                                    valueField={'text'}
                                                    useFilter={true}/>

                                </div>

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

export default EditableSelectExamples;
