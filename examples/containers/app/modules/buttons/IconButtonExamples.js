import React, {Component} from 'react';

import IconButton from 'dist/IconButton';

import 'sass/containers/app/modules/buttons/IconButtonExamples.scss';

export default class IconButtonExamples extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="example icon-button-examples">

                <div className="examples">
                    <div className="examples-title">Button Style</div>
                    <div className="examples-wrapper">

                        <IconButton iconCls="fa fa-plus"
                                    theme="success"/>

                        <IconButton iconCls="fa fa-trash"
                                    theme="error"/>

                        <IconButton iconCls="fa fa-wrench"
                                    disabled={true}/>

                    </div>
                </div>

            </div>
        );
    }
};