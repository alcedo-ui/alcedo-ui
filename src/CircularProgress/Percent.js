/**
 * Created by DT314 on 2017/4/10.
 */
import React, {Component, PropTypes} from 'react';

export default class Percent extends Component{
    constructor(props) {
        super();
        this.state = {
            percent: 0
        }
    }

    componentDidMount() {
        this.timer = setTimeout( () => this.numberChange(), 30);
    }

    componentWillUnmount() {
        clearTimeout(this.timer);
    }

    numberChange() {
        if (this.state.percent < 100) {
            if (this.state.percent < this.props.endNum) {
                this.setState({
                    percent: this.state.percent + 1
                });
                const time = 300 / (this.props.endNum - this.state.percent);
                this.timer = setTimeout( () => this.numberChange(), time);
                return;
            }
            this.timer = setTimeout( () => this.numberChange(), 30);
        }
    }

    render() {
        const widthStyle = {
            width: this.props.endNum + '%',
            textAlign: 'right',
            ...this.props.style
        };
        return (
            <div>
                {
                    this.props.move === true ? (
                        <div className="circular-progress-percent" style={widthStyle}>
                            <span className="circular-progress-word">{this.state.percent}%</span>
                        </div>) : (
                        <div className="circular-progress-percent" style={this.props.style}>
                            <span className="circular-progress-word">{this.state.percent}%</span>
                        </div>)
                }
            </div>
        )
    }
}

Percent.propTypes = {
    endNum: PropTypes.number,
    style: PropTypes.object,
    move: PropTypes.bool
};

Percent.defaultProps = {
    endNum: 100,
    style: {},
    move: false
};