import React, {Component} from 'react';

import Widget from 'src/Widget';
import WidgetHeader from 'src/WidgetHeader';
import Crumbs from 'src/Crumbs';

import PropTypeDescTable from '../PropTypeDescTable';
import CrumbsDoc from 'assets/propTypes/Crumbs.json';

import 'sass/containers/app/modules/layout/CrumbsExamples.scss';

export default class CrumbsExamples extends Component {

    constructor(props) {

        super(props);

        this.items = [{
            text: 'Root',
            route: '/#/'
        }, {
            text: 'Landing',
            route: '/#/landing'
        }, {
            text: 'Crumbs',
            route: '/#/components/Crumbs'
        }];

    }

    render() {
        return (
            <div className="example paper-examples">

                <h2 className="example-title">Crumbs</h2>

                <p>
                    A <span>Crumbs</span> element.
                </p>

                <h2 className="example-title">Examples</h2>

                <Widget>

                    <WidgetHeader className="example-header" title="Crumbs Example"/>

                    <div className="widget-content">

                        <div className="example-content">

                            <div className="examples-wrapper">

                                <Crumbs items={this.items}/>

                            </div>
                        </div>
                    </div>

                </Widget>

                <h2 className="example-title">Properties</h2>

                <PropTypeDescTable data={CrumbsDoc}/>

            </div>
        );
    }
};