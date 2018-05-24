import React, {Component} from 'react';

import Widget from 'src/Widget';
import WidgetHeader from 'src/WidgetHeader';
import CascaderField from 'src/CascaderField';

import PropTypeDescTable from 'components/PropTypeDescTable';
import doc from 'assets/propTypes/CascaderField.json';

class CascaderFieldExamples extends Component {

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

    }

    changeHandler = (value, path) => {
        console.log(value, path);
    };

    render() {

        return (
            <div className="example cascader-examples">
                <h2 className="example-title">CascaderField</h2>

                <p>
                    <span>CascaderField</span> is a selection box.
                </p>

                <h2 className="example-title">Examples</h2>

                <Widget>

                    <WidgetHeader className="example-header" title="Basic"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p>CascaderField simple example.</p>

                                <CascaderField data={this.data}
                                               value={'Shanghai'}
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
}

export default CascaderFieldExamples;