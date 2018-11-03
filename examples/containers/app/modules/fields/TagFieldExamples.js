import React, {Component} from 'react';

import TagField from 'src/TagField';
import Widget from 'src/Widget';
import WidgetHeader from 'src/WidgetHeader';

import PropTypeDescTable from 'components/PropTypeDescTable';
import doc from 'assets/propTypes/TagField.json';

import 'scss/containers/app/modules/fields/TagFieldExamples.scss';

class TagFieldExamples extends Component {

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
        }, {
            className: 'unfound',
            value: 'Hotelcode7'
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

                                <TagField style={{height: 100}}
                                          data={[]}
                                          placeholder="Please input ..."
                                          separators={[',', ';', '|']}
                                          onChange={value => console.log(value)}/>

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

export default TagFieldExamples;
