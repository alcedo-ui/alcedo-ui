import React, {Component} from 'react';

import RaisedButton from 'src/RaisedButton';
import DownloadField from 'src/DownloadField';
import Widget from 'src/Widget';
import WidgetHeader from 'src/WidgetHeader';
import Theme from 'src/Theme';

import PropTypeDescTable from 'components/PropTypeDescTable';
import DownloadFieldDoc from 'assets/propTypes/DownloadField.json';

import 'sass/containers/app/modules/fields/DownloadFieldExamples.scss';

export default class DownloadFieldExamples extends Component {

    constructor(props) {

        super(props);

        this.download = ::this.download;

    }

    download() {
        this.refs.downloadField.download();
    }

    render() {

        const url = 'https://nodejs.org/dist/v9.0.0/node-v9.0.0.pkg';

        return (
            <div className="example download-field-examples">

                <h2 className="example-title">DownloadField</h2>

                <p>
                    <span>DownloadField</span> allow users to download a file.
                </p>

                <h2 className="example-title">Examples</h2>

                <Widget>

                    <WidgetHeader className="example-header"
                                  title="Basic"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <DownloadField ref="downloadField"
                                               url={url}
                                               onLoad={(e, innerText) => {
                                                   console.log(e, innerText);
                                               }}/>

                                <RaisedButton value="Download NodeJs"
                                              theme={Theme.PRIMARY}
                                              onTouchTap={this.download}/>

                            </div>

                        </div>
                    </div>

                </Widget>

                <h2 className="example-title">Properties</h2>

                <PropTypeDescTable data={DownloadFieldDoc}/>

            </div>
        );
    }
};