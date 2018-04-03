/**
 * @file Transfer component
 * @author sunday(sunday.wei@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import RaisedButton from '../RaisedButton';
import TransferList from '../_TransferList';

class Transfer extends Component {

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.state = {
            leftData: [],
            rightData: [],
            leftSelected: [],
            rightSelected: []
        };

        this.leftSelectHandle = ::this.leftSelectHandle;
        this.rightSelectHandle = ::this.rightSelectHandle;
        this.moveToRightHandle = ::this.moveToRightHandle;
        this.moveToLeftHandle = ::this.moveToLeftHandle;

    }

    leftSelectHandle(data) {
        this.setState({
            leftSelected: data
        });
    }

    rightSelectHandle(data) {
        this.setState({
            rightSelected: data
        });
    }

    moveToRightHandle() {
        let {leftSelected, leftData, rightData} = this.state;
        let newLeftData = [];
        for (let i = 0; i < leftSelected.length; i++) {
            rightData.push(leftSelected[i]);
        }
        for (let i = 0; i < leftData.length; i++) {
            let flag = false;
            for (let j = 0; j < leftSelected.length; j++) {
                if (leftData[i].id === leftSelected[j].id) {
                    flag = true;
                    break;
                }
            }
            if (!flag) {
                newLeftData.push(leftData[i]);
            }
        }
        this.setState({
            leftSelected: [],
            leftData: newLeftData,
            rightData: rightData
        }, () => {
            this.props.onChange && this.props.onChange();
        });

    }

    moveToLeftHandle() {
        let {rightSelected, leftData, rightData} = this.state;
        let newRightData = [];
        for (let i = 0; i < rightSelected.length; i++) {
            leftData.push(rightSelected[i]);
        }
        for (let i = 0; i < rightData.length; i++) {
            let flag = false;
            for (let j = 0; j < rightSelected.length; j++) {
                if (rightData[i].id === rightSelected[j].id) {
                    flag = true;
                    break;
                }
            }
            if (!flag) {
                newRightData.push(rightData[i]);
            }

        }
        this.setState({
            rightSelected: [],
            leftData: leftData,
            rightData: newRightData
        }, () => {
            this.props.onChange && this.props.onChange();
        });
    }

    componentDidMount() {
        const {leftData, rightData, leftSelected, rightSelected} = this.props;
        this.setState({
            leftData,
            rightData,
            leftSelected,
            rightSelected
        });
    }

    render() {

        const {className, style} = this.props,
            {leftData, rightData, leftSelected, rightSelected} = this.state,

            transferClassName = classNames('transfer', {
                [className]: className
            });

        return (
            <div className={transferClassName}
                 style={style}>

                <TransferList className="fl"
                              data={leftData}
                              value={leftSelected}
                              onChange={this.leftSelectHandle}/>

                <div className="transfer-operation fl">
                    <div>
                        <RaisedButton className='action-button'
                                      iconCls="fas fa-angle-right"
                                      disabled={leftSelected && leftSelected.length < 1}
                                      onTouchTap={this.moveToRightHandle}/>
                    </div>
                    <div>
                        <RaisedButton className='action-button'
                                      iconCls="fas fa-angle-left"
                                      disabled={rightSelected && rightSelected.length < 1}
                                      onTouchTap={this.moveToLeftHandle}/>
                    </div>
                </div>

                <TransferList className="fl"
                              data={rightData}
                              value={rightSelected}
                              onChange={this.rightSelectHandle}/>

            </div>
        );

    }

}

Transfer.propTypes = {

    /**
     * The CSS class name of the root element.
     */
    className: PropTypes.string,

    /**
     * Override the styles of the root element.
     */
    style: PropTypes.object,

    /**
     * The data of left select field.
     */
    leftData: PropTypes.array,

    /**
     * The data of left select field.
     */
    rightData: PropTypes.array,

    /**
     * The left-selected data items.
     */
    leftSelected: PropTypes.array,

    /**
     * The left-selected data items.
     */
    rightSelected: PropTypes.array,

    /**
     * Callback function fired when select item changed.
     */
    onChange: PropTypes.func

};

Transfer.defaultProps = {
    leftData: [],
    rightData: [],
    leftSelected: [],
    rightSelected: []
};

export default Transfer;