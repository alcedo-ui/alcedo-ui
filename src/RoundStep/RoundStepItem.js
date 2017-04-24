import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class RoundStepItem extends Component {

    constructor(props) {

        super(props);

        this.clickHandle = this.clickHandle.bind(this);

    }

    clickHandle() {

        const {activatedStep, finishedStep, index, onTouchTap} = this.props;

        activatedStep !== index && finishedStep >= index && onTouchTap(index);

    }

    render() {

        const {className, style, activatedStep, finishedStep, index, value, isFirst, isLast} = this.props;

        return (
            <div className={`round-step-item ${isFirst ? 'first' : ''} ${isLast ? 'last' : ''}
                    ${activatedStep == index ? ' activated' : (finishedStep >= index ? ' finished' : '')} ${className}`}
                 style={style}>

                <div className="bg-bar"></div>
                <div className="bg-round"></div>

                {
                    !isFirst && (finishedStep >= index || activatedStep >= index) ?
                        <div className="left-bar"></div>
                        :
                        null
                }

                {
                    !isLast && (finishedStep > index || activatedStep > index) ?
                        <div className="right-bar"></div>
                        :
                        null
                }

                <div className="round"
                     onClick={this.clickHandle}>
                    {
                        finishedStep > index ?
                            <i className="fa fa-check"
                               aria-hidden="true"></i>
                            :
                            (index + 1)
                    }
                </div>

                <div className="title">
                    {value.title}
                </div>

            </div>
        );

    }
};

RoundStepItem.propTypes = {

    className: PropTypes.string,
    style: PropTypes.object,

    activatedStep: PropTypes.number,
    finishedStep: PropTypes.number,
    index: PropTypes.number,
    value: PropTypes.object,
    isFirst: PropTypes.bool,
    isLast: PropTypes.bool,

    onTouchTap: PropTypes.func

};

RoundStepItem.defaultProps = {

    className: '',
    style: null,

    activatedStep: 0,
    finishedStep: 0,
    index: 0,
    value: {},
    isFirst: true,
    isLast: false

};