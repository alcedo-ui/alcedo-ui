import React, {Component} from 'react';

// Components
import Badge from 'src/Badge';
import IconButton from 'src/IconButton';
import Widget from 'src/Widget';
import WidgetHeader from 'src/WidgetHeader';

// Docs
import PropTypeDescTable from 'components/PropTypeDescTable';
import doc from 'assets/propTypes/Badge.json';

// Styles
import 'scss/containers/app/modules/layout/BadgeExamples.scss';

class BadgeExamples extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="example badge-examples">

                <h2 className="example-title">Badge</h2>

                <h2 className="example-title">Examples</h2>

                <Widget>

                    <WidgetHeader className="example-header" title="Dot"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <Badge>
                                    <IconButton iconCls="far fa-bell"/>
                                </Badge>

                                <Badge>
                                    <IconButton iconCls="fas fa-bullhorn"/>
                                </Badge>

                                <Badge>
                                    <IconButton iconCls="far fa-envelope"/>
                                </Badge>

                                <Badge>
                                    <IconButton iconCls="fas fa-inbox"/>
                                </Badge>

                                <Badge>
                                    <IconButton iconCls="fas fa-phone"/>
                                </Badge>

                            </div>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="Number"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <Badge type={Badge.Type.NUMBER}
                                       value={0}>
                                    <IconButton iconCls="far fa-bell"/>
                                </Badge>

                                <Badge type={Badge.Type.NUMBER}
                                       value={9}>
                                    <IconButton iconCls="fas fa-bullhorn"/>
                                </Badge>

                                <Badge type={Badge.Type.NUMBER}
                                       value={99}>
                                    <IconButton iconCls="far fa-envelope"/>
                                </Badge>

                                <Badge type={Badge.Type.NUMBER}
                                       value={999}>
                                    <IconButton iconCls="fas fa-inbox"/>
                                </Badge>

                                <Badge type={Badge.Type.NUMBER}
                                       value={9999}
                                       overflowValue={999}>
                                    <IconButton iconCls="fas fa-phone"/>
                                </Badge>

                            </div>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="Use Badge Only"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <Badge type={Badge.Type.NUMBER}
                                       value={0}/>

                                <Badge type={Badge.Type.NUMBER}
                                       value={9}/>

                                <Badge type={Badge.Type.NUMBER}
                                       value={99}/>

                                <Badge type={Badge.Type.NUMBER}
                                       value={999}/>

                                <Badge type={Badge.Type.NUMBER}
                                       value={9999}
                                       overflowValue={999}/>

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

export default BadgeExamples;
