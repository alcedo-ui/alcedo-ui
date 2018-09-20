/**
 * @file PaggingPage component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';

import IconButton from '../IconButton';

class PaggingPage extends Component {

    constructor(props, ...restArgs) {
        super(props, ...restArgs);
    }

    getArray = number => {
        let array = [];
        for (let i = 1; i <= number; i++) {
            array.push(i);
        }
        return array;
    };

    jump = page => {
        const {onPageChange} = this.props;
        this.props.page != page && onPageChange && onPageChange(page);
    };

    render() {

        const {
            page, totalPage,
            paggingPrevIconCls, paggingNextIconCls, paggingFirstIconCls, paggingLastIconCls
        } = this.props;

        let pages = null;
        if (totalPage <= 7) {

            const arr = this.getArray(totalPage);

            pages =
                <div className="pages">
                    {
                        arr && arr.map((value, index) =>
                            <IconButton key={index}
                                        className="page"
                                        value={value}
                                        disabled={index == page}
                                        onClick={() => this.jump(index)}/>
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
                                    onClick={() => this.jump(0)}/>
                        <IconButton className="page"
                                    value="2"
                                    disabled={page == 1}
                                    onClick={() => this.jump(1)}/>
                        <IconButton className="page"
                                    value="3"
                                    disabled={page == 2}
                                    onClick={() => this.jump(2)}/>
                        <IconButton className="page"
                                    value="4"
                                    disabled={page == 3}
                                    onClick={() => this.jump(3)}/>
                        <IconButton className="page"
                                    value="5"
                                    disabled={page == 4}
                                    onClick={() => this.jump(4)}/>
                        <IconButton className="page"
                                    value="6"
                                    disabled={page == 5}
                                    onClick={() => this.jump(5)}/>
                        <div className="apostrophe">...</div>
                        <IconButton className="page"
                                    value={totalPage}
                                    onClick={() => this.jump(totalPage - 1)}/>
                    </div>;
            } else if (page > totalPage - 5) {
                pages =
                    <div className="pages">
                        <IconButton className="page"
                                    value="1"
                                    onClick={() => this.jump(0)}/>
                        <div className="apostrophe">...</div>
                        <IconButton className="page"
                                    value={totalPage - 5}
                                    disabled={page == totalPage - 6}
                                    onClick={() => this.jump(totalPage - 6)}/>
                        <IconButton className="page"
                                    value={totalPage - 4}
                                    disabled={page == totalPage - 5}
                                    onClick={() => this.jump(totalPage - 5)}/>
                        <IconButton className="page"
                                    value={totalPage - 3}
                                    disabled={page == totalPage - 4}
                                    onClick={() => this.jump(totalPage - 4)}/>
                        <IconButton className="page"
                                    value={totalPage - 2}
                                    disabled={page == totalPage - 3}
                                    onClick={() => this.jump(totalPage - 3)}/>
                        <IconButton className="page"
                                    value={totalPage - 1}
                                    disabled={page == totalPage - 2}
                                    onClick={() => this.jump(totalPage - 2)}/>
                        <IconButton className="page"
                                    value={totalPage}
                                    disabled={page == totalPage - 1}
                                    onClick={() => this.jump(totalPage - 1)}/>
                    </div>;
            } else {
                pages =
                    <div className="pages">
                        <IconButton className="page"
                                    value="1"
                                    onClick={this.jump.bind(this, 0)}/>
                        <div className="apostrophe">...</div>
                        <IconButton className="page"
                                    value={page - 1}
                                    onClick={() => this.jump(page - 2)}/>
                        <IconButton className="page"
                                    value={page}
                                    onClick={() => this.jump(page - 1)}/>
                        <IconButton className="page"
                                    value={page + 1}
                                    disabled={true}
                                    onClick={() => this.jump(page)}/>
                        <IconButton className="page"
                                    value={page + 2}
                                    onClick={() => this.jump(page + 1)}/>
                        <IconButton className="page"
                                    value={page + 3}
                                    onClick={() => this.jump(page + 2)}/>
                        <div className="apostrophe">...</div>
                        <IconButton className="page"
                                    value={totalPage}
                                    onClick={() => this.jump(totalPage - 1)}/>
                    </div>;
            }
        }

        return (
            <div className="pagging-page">

                <IconButton className="ctrl"
                            iconCls={paggingFirstIconCls}
                            disabled={page == 0}
                            onClick={() => this.jump(0)}/>

                <IconButton className="ctrl"
                            iconCls={paggingPrevIconCls}
                            disabled={page == 0}
                            onClick={() => this.jump(page - 1 >= 0 ? page - 1 : 0)}/>

                {pages}

                <IconButton className="ctrl"
                            iconCls={paggingNextIconCls}
                            disabled={page == totalPage - 1 || totalPage == 0}
                            onClick={() => this.jump(page + 1 <= totalPage - 1 ? page + 1 : totalPage - 1)}/>

                <IconButton className="ctrl"
                            iconCls={paggingLastIconCls}
                            disabled={page == totalPage - 1 || totalPage == 0}
                            onClick={() => this.jump(totalPage - 1)}/>

            </div>
        );

    }
}

PaggingPage.propTypes = {

    className: PropTypes.string,
    style: PropTypes.object,

    page: PropTypes.number.isRequired,
    totalPage: PropTypes.number.isRequired,

    paggingPrevIconCls: PropTypes.string,
    paggingNextIconCls: PropTypes.string,
    paggingFirstIconCls: PropTypes.string,
    paggingLastIconCls: PropTypes.string,

    onPageChange: PropTypes.func

};

PaggingPage.defaultProps = {

    page: 0,
    totalPage: 0,

    paggingPrevIconCls: 'fas fa-angle-left',
    paggingNextIconCls: 'fas fa-angle-right',
    paggingFirstIconCls: 'fas fa-angle-double-left',
    paggingLastIconCls: 'fas fa-angle-double-right'

};

export default PaggingPage;