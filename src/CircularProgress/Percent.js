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
        return (
            <div className="circular-progress-percent">
                <span className="circular-progress-word">{this.state.percent}%</span>
            </div>
        )
    }

}

Percent.propTypes = {
    endNum: PropTypes.number
};

Percent.defaultProps = {
    endNum: 100
};