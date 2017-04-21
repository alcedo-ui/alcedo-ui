/**
 * Created by Wendy on 2017/4/20.
 */
import React, {Component} from 'react';

import IconAnchor from 'dist/IconAnchor';
import Widget from 'dist/Widget';
import WidgetHeader from 'dist/WidgetHeader';

import 'sass/containers/app/modules/buttons/FlatButtonExamples.scss';

export default class FlatButtonExamples extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        let propertiesList = [{
            Name: 'className',
            Type: 'PropTypes.string',
            Default: '',
            Description: 'The css class name of the root element.'
        }, {
            Name: 'style',
            Type: 'PropTypes.object',
            Default: '',
            Description: 'The styles of the root element.'
        }, {
            Name: 'theme',
            Type: 'PropTypes.string',
            Default: '',
            Description: 'The Icon Anchor theme.'
        }, {
            Name: 'disabled',
            Type: 'PropTypes.bool',
            Default: 'false',
            Description: 'Icon anchor disabled.'
        }, {
            Name: 'isLoading',
            Type: 'PropTypes.bool',
            Default: 'false',
            Description: ''
        }, {
            Name: 'iconCls',
            Type: ' PropTypes.string',
            Default: '',
            Description: 'Icon className.'
        }, {
            Name: 'href',
            Type: ' PropTypes.string',
            Default: '',
            Description: 'The icon anchor linked url.'
        }, {
            Name: 'target',
            Type: ' PropTypes.string',
            Default: '_blank',
            Description: 'Where to open the linked document.'
        }, {
            Name: 'onTouchTap',
            Type: ' PropTypes.func',
            Default: '',
            Description: 'The function that trigger when the button is clicked.'
        }];

        return (
            <div className="example flat-button-example">

                <h2 className="example-title">Icon Anchor</h2>

                <Widget>

                    <WidgetHeader className="example-header" title="Icon Anchor Simple Example"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <IconAnchor iconCls="fa fa-github"
                                            style={{fontSize:'14px'}}
                                            className="github-icon"
                                            disabled={true}/>

                                <IconAnchor iconCls="fa fa-github"
                                            style={{fontSize:'18px'}}
                                            className="github-icon"
                                            href="https://github.com/alcedo-ui/alcedo-ui"/>

                                <IconAnchor iconCls="fa fa-github"
                                            style={{fontSize:'24px'}}
                                            className="github-icon"
                                            href="https://github.com/alcedo-ui/alcedo-ui"/>


                            </div>

                        </div>
                    </div>

                </Widget>

                <div className="example-properties">
                    <h3>Properties</h3>
                    <table className="example-table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Type</th>
                                <th>Default</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                propertiesList && propertiesList.length > 0 ?
                                    (
                                        propertiesList.map(function (val) {
                                            return <tr>
                                                <td className="properties-name">{val.Name}</td>
                                                <td className="properties-type">{val.Type}</td>
                                                <td>{val.Default}</td>
                                                <td>{val.Description}</td>
                                            </tr>
                                        })
                                    )
                                    : null
                            }
                        </tbody>
                    </table>
                </div>

            </div>
        );
    }
};