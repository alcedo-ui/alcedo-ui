import React, {Component, PropTypes} from 'react';

import RoundStep from './RoundStep';
import RoundStepBack from './RoundStepBack';

import 'sass/components/step/round/RoundSteps.scss';

export default class RoundSteps extends Component {

    constructor(props) {

        super(props);

        this.back = this.back.bind(this);

    }

    back() {
        this.props.currentStep > 0 && this.props.onChange && this.props.onChange(this.props.currentStep - 1);
    }

    render() {

        const {className, style, data, currentStep, finishedStep, onChange, backButtonVisible} = this.props;

        return (
            <div className={`RoundSteps ${className}`}
                 style={style}>

                {
                    backButtonVisible ?
                        <RoundStepBack currentStep={currentStep}
                                       style={{width: 50 / data.length + '%'}}
                                       onClick={this.back}/>
                        :
                        null
                }

                {
                    data.map((value, index) => {
                        return (
                            <RoundStep key={index}
                                       currentStep={currentStep}
                                       finishedStep={finishedStep}
                                       index={index}
                                       value={value}
                                       style={{width: 100 / data.length + '%'}}
                                       isFirst={index == 0}
                                       isLast={index == data.length - 1}
                                       onClick={() => {
                                           onChange(index);
                                       }}/>
                        );
                    })
                }

            </div>
        );

    }
};

RoundSteps.propTypes = {

    className: PropTypes.string,
    style: PropTypes.object,

    data: PropTypes.array,

    // 当前激活的 step 索引
    currentStep: PropTypes.number,

    // 当前已完成的 step 索引
    finishedStep: PropTypes.number,

    backButtonVisible: PropTypes.bool,

    onChange: PropTypes.func

};

RoundSteps.defaultProps = {

    className: '',
    style: null,

    data: [],
    currentStep: 0,
    finishedStep: 0,
    backButtonVisible: false

};