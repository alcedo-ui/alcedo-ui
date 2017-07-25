import React, {Component} from 'react';

import TagField from 'dist/TagField';
import Widget from 'dist/Widget';
import WidgetHeader from 'dist/WidgetHeader';

import PropTypeDescTable from '../PropTypeDescTable';
import TagFieldDoc from 'assets/propTypes/TagField.json';

import 'sass/containers/app/modules/fields/TagFieldExamples.scss';

export default class TagFieldExamples extends Component {

    constructor(props) {

        super(props);

        this.data = [{
            text: 'Hotelcode1'
        }, {
            text: 'Hotelcode2'
        }, {
            className: 'duplicate',
            text: 'Hotelcode3'
        }, {
            className: 'duplicate',
            text: 'Hotelcode4'
        }, {
            text: 'Hotelcode5'
        }, {
            className: 'unfound',
            text: 'Hotelcode6'
        }];

    }

    render() {
        return (
            <div className="example tag-field-examples">

                <h2 className="example-title">TagField</h2>

                <p>
                    <span>TagField</span> allow users to input text.
                </p>

                <h2 className="example-title">Examples</h2>

                <Widget>

                    <WidgetHeader className="example-header"
                                  title="With type"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p><code>TagField</code></p>

                                <TagField data={this.data}/>

                            </div>

                        </div>
                    </div>

                </Widget>

                <h2 className="example-title">Properties</h2>

                <PropTypeDescTable data={TagFieldDoc}/>

            </div>
        );
    }
};