/**
 * @file PaggingPage component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';

import IconButton from '../IconButton';

import PureRender from '../_vendors/PureRender';

@PureRender
class PaggingPage extends Component {

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.jump = ::this.jump;

    }

    getArray(number) {
        let array = [];
        for (let i = 1; i <= number; i++) {
            array.push(i);
        }
        return array;
    }

    jump(page) {

        const {onPageChange} = this.props;

        this.props.page != page && onPageChange && onPageChange(page);

    }

    render() {

        const {page, total, paggingPrevIconCls, paggingNextIconCls, paggingFirstIconCls, paggingLastIconCls} = this.props;

        let pages = null;
        if (total <= 7) {
            pages =
                <div className="pages">
                    {
                        this.getArray(total).map((value, index) =>
                            <IconButton key={index}
                                        className="page"
                                        value={value}
                                        disabled={index == page}
                                        onTouchTap={() => {
                                            this.jump(index);
                                        }}/>
                        )
                    }
                </div>;
        } else {
            if (page < 5) {
                pages =
                    <div className="pages">
                        <IconButton className="page"
                                    value="1"
                                    disabled={page == 0}
                                    onTouchTap={() => {
                                        this.jump(0);
                                    }}/>
                        <IconButton className="page"
                                    value="2"
                                    disabled={page == 1}
                                    onTouchTap={() => {
                                        this.jump(1);
                                    }}/>
                        <IconButton className="page"
                                    value="3"
                                    disabled={page == 2}
                                    onTouchTap={() => {
                                        this.jump(2);
                                    }}/>
                        <IconButton className="page"
                                    value="4"
                                    disabled={page == 3}
                                    onTouchTap={() => {
                                        this.jump(3);
                                    }}/>
                        <IconButton className="page"
                                    value="5"
                                    disabled={page == 4}
                                    onTouchTap={() => {
                                        this.jump(4);
                                    }}/>
                        <IconButton className="page"
                                    value="6"
                                    disabled={page == 5}
                                    onTouchTap={() => {
                                        this.jump(5);
                                    }}/>
                        <div className="apostrophe">...</div>
                        <IconButton className="page"
                                    value={total}
                                    onTouchTap={() => {
                                        this.jump(total - 1);
                                    }}/>
                    </div>;
            } else if (page > total - 5) {
                pages =
                    <div className="pages">
                        <IconButton className="page"
                                    value="1"
                                    onTouchTap={() => {
                                        this.jump(0);
                                    }}/>
                        <div className="apostrophe">...</div>
                        <IconButton className="page"
                                    value={total - 5}
                                    disabled={page == total - 6}
                                    onTouchTap={() => {
                                        this.jump(total - 6);
                                    }}/>
                        <IconButton className="page"
                                    value={total - 4}
                                    disabled={page == total - 5}
                                    onTouchTap={() => {
                                        this.jump(total - 5);
                                    }}/>
                        <IconButton className="page"
                                    value={total - 3}
                                    disabled={page == total - 4}
                                    onTouchTap={() => {
                                        this.jump(total - 4);
                                    }}/>
                        <IconButton className="page"
                                    value={total - 2}
                                    disabled={page == total - 3}
                                    onTouchTap={() => {
                                        this.jump(total - 3);
                                    }}/>
                        <IconButton className="page"
                                    value={total - 1}
                                    disabled={page == total - 2}
                                    onTouchTap={() => {
                                        this.jump(total - 2);
                                    }}/>
                        <IconButton className="page"
                                    value={total}
                                    disabled={page == total - 1}
                                    onTouchTap={() => {
                                        this.jump(total - 1);
                                    }}/>
                    </div>;
            } else {
                pages =
                    <div className="pages">
                        <IconButton className="page"
                                    value="1"
                                    onTouchTap={this.jump.bind(this, 0)}/>
                        <div className="apostrophe">...</div>
                        <IconButton className="page"
                                    value={page - 1}
                                    onTouchTap={() => {
                                        this.jump(page - 2);
                                    }}/>
                        <IconButton className="page"
                                    value={page}
                                    onTouchTap={() => {
                                        this.jump(page - 1);
                                    }}/>
                        <IconButton className="page"
                                    value={page + 1}
                                    disabled={true}
                                    onTouchTap={() => {
                                        this.jump(page);
                                    }}/>
                        <IconButton className="page"
                                    value={page + 2}
                                    onTouchTap={() => {
                                        this.jump(page + 1);
                                    }}/>
                        <IconButton className="page"
                                    value={page + 3}
                                    onTouchTap={() => {
                                        this.jump(page + 2);
                                    }}/>
                        <div className="apostrophe">...</div>
                        <IconButton className="page"
                                    value={total}
                                    onTouchTap={() => {
                                        this.jump(total - 1);
                                    }}/>
                    </div>;
            }
        }

        return (
            <div className="pagging-page">

                <IconButton className="ctrl"
                            iconCls={paggingFirstIconCls}
                            disabled={page == 0}
                            onTouchTap={() => {
                                this.jump(0);
                            }}/>

                <IconButton className="ctrl"
                            iconCls={paggingPrevIconCls}
                            disabled={page == 0}
                            onTouchTap={() => {
                                this.jump(page - 1 >= 0 ? page - 1 : 0);
                            }}/>

                {pages}

                <IconButton className="ctrl"
                            iconCls={paggingNextIconCls}
                            disabled={page == total - 1 || total == 0}
                            onTouchTap={() => {
                                this.jump(page + 1 <= total - 1 ? page + 1 : total - 1);
                            }}/>

                <IconButton className="ctrl"
                            iconCls={paggingLastIconCls}
                            disabled={page == total - 1 || total == 0}
                            onTouchTap={() => {
                                this.jump(total - 1);
                            }}/>

            </div>
        );

    }
};

process.env.NODE_ENV !== 'production' && (PaggingPage.propTypes = {

    className: PropTypes.string,
    style: PropTypes.object,

    page: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,

    paggingPrevIconCls: PropTypes.string,
    paggingNextIconCls: PropTypes.string,
    paggingFirstIconCls: PropTypes.string,
    paggingLastIconCls: PropTypes.string,

    onPageChange: PropTypes.func

});

PaggingPage.defaultProps = {

    page: 0,
    total: 0,

    paggingPrevIconCls: 'fas fa-angle-left',
    paggingNextIconCls: 'fas fa-angle-right',
    paggingFirstIconCls: 'fas fa-angle-double-left',
    paggingLastIconCls: 'fas fa-angle-double-right'

};

export default PaggingPage;