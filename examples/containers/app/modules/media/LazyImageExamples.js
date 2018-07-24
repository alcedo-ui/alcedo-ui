import React, {Component} from 'react';

import Widget from 'src/Widget';
import WidgetHeader from 'src/WidgetHeader';
import LazyImage from 'src/LazyImage';

import PropTypeDescTable from 'components/PropTypeDescTable';
import doc from 'assets/propTypes/LazyImage.json';

class LazyImageExamples extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const src1 = 'https://github.com/alcedo-ui/alcedo-ui/blob/master/assets/alcedo-logo.png?raw=true',
            src2 = 'https://github.com/alcedo-ui/alcedo-ui/blob/master/examples/assets/images/intro-bg.jpg?raw=true';

        return (
            <div className="example lazy-image-examples">

                <h2 className="example-title">Lazy Image</h2>

                <p>
                    <span>Lazy Image</span>use for delayed loading of images.
                </p>

                <h2 className="example-title">Examples</h2>

                <Widget>

                    <WidgetHeader className="example-header" title="Basic"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p>
                                    Long<br/>
                                    ...<br/>...<br/>...<br/>...<br/>...<br/>...<br/>
                                    ...<br/>...<br/>...<br/>...<br/>...<br/>...<br/>
                                    ...<br/>...<br/>...<br/>...<br/>...<br/>...<br/>
                                    Article
                                </p>

                                <LazyImage src={src1}/>

                            </div>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="Specified Size"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p>
                                    Long<br/>
                                    ...<br/>...<br/>...<br/>...<br/>...<br/>...<br/>
                                    ...<br/>...<br/>...<br/>...<br/>...<br/>...<br/>
                                    ...<br/>...<br/>...<br/>...<br/>...<br/>...<br/>
                                    Article
                                </p>

                                <LazyImage src={src2}
                                           width={400}/>

                            </div>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="Prevent Load"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p>
                                    Long<br/>
                                    ...<br/>...<br/>...<br/>...<br/>...<br/>...<br/>
                                    ...<br/>...<br/>...<br/>...<br/>...<br/>...<br/>
                                    ...<br/>...<br/>...<br/>...<br/>...<br/>...<br/>
                                    Article
                                </p>

                                <LazyImage src={src2}
                                           onImageLoadStart={() => {
                                               return false;
                                           }}/>

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

export default LazyImageExamples;