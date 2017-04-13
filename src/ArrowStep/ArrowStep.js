import React, {Component, PropTypes} from 'react';

import ArrowStepItem from './ArrowStepItem';

import './ArrowStep.css';

export default class ArrowStep extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const {className, style, data, step} = this.props;

        return (
            <div className={`arrow-step ${className}`}
                 style={style}>

                {
                    data.map((value, index) => {
                        return (
                            <ArrowStepItem key={index}
                                           step={step}
                                           index={index}
                                           value={value}
                                           style={{width: 100 / data.length + '%'}}
                                           isFirst={index === 0}
                                           isLast={index === data.length - 1}/>
                        );
                    })
                }

            </div>
        );

    }
};

ArrowStep.propTypes = {

    className: PropTypes.string,
    style: PropTypes.object,

    data: PropTypes.array,
    step: PropTypes.number

};

ArrowStep.defaultProps = {

    className: '',
    style: null,

    data: [],
    step: 0

};