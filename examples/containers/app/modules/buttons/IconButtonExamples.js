import React, {Component} from 'react';

import IconButton from 'dist/IconButton';

import 'sass/containers/app/modules/buttons/IconButtonExamples.scss';

export default class IconButtonExamples extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="icon-button-examples">

                <div className="button-group-wrapper">
                    <div className="button-group-title">Button Style</div>
                    <div className="button-group">

                        <IconButton iconCls="fa fa-plus"
                                    buttonStyle="success"/>

                        <IconButton iconCls="fa fa-trash"
                                    buttonStyle="error"/>

                        <IconButton iconCls="fa fa-wrench"
                                    disabled={true}/>

                    </div>
                </div>

            </div>
        );
    }
};