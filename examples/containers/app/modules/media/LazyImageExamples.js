import React, {Component} from 'react';

import Widget from 'dist/Widget';
import WidgetHeader from 'dist/WidgetHeader';

import LazyImage from 'dist/LazyImage';

import PropTypeDescTable from '../PropTypeDescTable';
import LazyImageDoc from 'assets/propTypes/LazyImage.json';

import 'sass/containers/app/modules/media/LazyImageExamples.scss';

export default class LazyImageExamples extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const src = 'https://github.com/alcedo-ui/alcedo-ui/blob/master/assets/alcedo-logo.png?raw=true';

        return (
            <div className="example lazy-image-examples">

                <h2 className="example-title">Lazy Image</h2>

                <p>
                    <span>Lazy Image</span>
                </p>

                <h2 className="example-title">Examples</h2>

                <Widget>

                    <WidgetHeader className="example-header" title="Basic"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">
                                <p>
                                    long
                                    <br/>
                                    ...
                                    <br/>
                                    ...
                                    <br/>
                                    ...
                                    <br/>
                                    ...
                                    <br/>
                                    ...
                                    <br/>
                                    ...
                                    <br/>
                                    ...
                                    <br/>
                                    ...
                                    <br/>
                                    ...
                                    <br/>
                                    ...
                                    <br/>
                                    ...
                                    <br/>
                                    ...
                                    <br/>
                                    ...
                                    <br/>
                                    ...
                                    <br/>
                                    ...
                                    <br/>
                                    ...
                                    <br/>
                                    ...
                                    <br/>
                                    ...
                                    <br/>
                                    ...
                                    <br/>
                                    ...
                                    <br/>
                                    ...
                                    <br/>
                                    ...
                                    <br/>
                                    ...
                                    <br/>
                                    ...
                                    <br/>
                                    ...
                                    <br/>
                                    ...
                                    <br/>
                                    ...
                                    <br/>
                                    ...
                                    <br/>
                                    ...
                                    <br/>
                                    ...
                                    <br/>
                                    ...
                                    <br/>
                                    ...
                                    <br/>
                                    article
                                </p>
                                <LazyImage src={src}/>
                            </div>

                        </div>
                    </div>

                </Widget>

                <h2 className="example-title">Properties</h2>

                <PropTypeDescTable data={LazyImageDoc}/>

            </div>
        );
    }
};