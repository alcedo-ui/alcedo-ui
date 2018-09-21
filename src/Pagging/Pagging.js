/**
 * @file Pagging component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import PaggingSize from '../_PaggingSize';
import PaggingPage from '../_PaggingPage';
import Valid from '../_vendors/Valid';

class Pagging extends Component {

    constructor(props, ...restArgs) {
        super(props, ...restArgs);
    }

    pageChangedHandle = page => {

        const {pageSize, onChange} = this.props;

        this.props.page != page && onChange && onChange({
            page,
            pageSize
        });

    };

    pageSizeChangedHandle = pageSize => {

        const {total, onChange} = this.props;

        if (this.props.pageSize != pageSize) {
            const totalPage = Math.ceil(total / pageSize);
            onChange && onChange({
                page: Valid.range(this.props.page, 0, totalPage - 1),
                pageSize
            });
        }

    };

    render() {

        const {
                className, style, total, page, pageSize, pageSizes,
                selectedCount, selectedCountVisible, pageSizeVisible, pageSizeRightIconCls,
                paggingPrevIconCls, paggingNextIconCls, paggingFirstIconCls, paggingLastIconCls,
                paggingCountRenderer
            } = this.props,

            totalPage = Math.ceil(total / pageSize),

            paggingClassNames = classNames('pagging', {
                [className]: className
            });

        return (
            <div className={paggingClassNames}
                 style={style}>

                <div className="pagging-left">

                    {
                        selectedCountVisible ?
                            <div className="pagging-selected">
                                {`Selected: ${selectedCount}`}
                            </div>
                            :
                            null
                    }

                    <div className="pagging-totle">
                        {
                            paggingCountRenderer ?
                                paggingCountRenderer(total, page, totalPage, pageSize, pageSizes)
                                :
                                `Total: ${total}`
                        }
                    </div>

                </div>

                <div className="pagging-right">

                    {
                        pageSizeVisible ?
                            <PaggingSize pageSize={pageSize}
                                         pageSizes={pageSizes}
                                         rightIconCls={pageSizeRightIconCls}
                                         onPageSizeChange={this.pageSizeChangedHandle}/>
                            :
                            null
                    }

                    <PaggingPage page={page}
                                 totalPage={totalPage}
                                 paggingPrevIconCls={paggingPrevIconCls}
                                 paggingNextIconCls={paggingNextIconCls}
                                 paggingFirstIconCls={paggingFirstIconCls}
                                 paggingLastIconCls={paggingLastIconCls}
                                 onPageChange={this.pageChangedHandle}/>

                </div>

            </div>
        );

    }
}

Pagging.propTypes = {

    /**
     * The CSS class name of the root element.
     */
    className: PropTypes.string,

    /**
     * Override the styles of the root element.
     */
    style: PropTypes.object,

    /**
     * The total of data.
     */
    total: PropTypes.number,

    /**
     * The valid page.
     */
    page: PropTypes.number,

    /**
     * The number of per page.
     */
    pageSize: PropTypes.number,

    /**
     * The array of pageSize.
     */
    pageSizes: PropTypes.array,

    /**
     * The total count of selected.
     */
    selectedCount: PropTypes.number,

    /**
     * If true,the selectedCount will show.
     */
    selectedCountVisible: PropTypes.bool,

    /**
     * If false, the pageSize choice box will not show.
     */
    pageSizeVisible: PropTypes.bool,

    /**
     * Use this property to set page size right icon.
     */
    pageSizeRightIconCls: PropTypes.string,

    /**
     * Use this property to set prev button icon.
     */
    paggingPrevIconCls: PropTypes.string,

    /**
     * Use this property to set next button icon.
     */
    paggingNextIconCls: PropTypes.string,

    /**
     * Use this property to set first button icon.
     */
    paggingFirstIconCls: PropTypes.string,

    /**
     * Use this property to set last button icon.
     */
    paggingLastIconCls: PropTypes.string,

    paggingCountRenderer: PropTypes.func,

    /**
     * Callback function fired when Pagging component change.
     */
    onChange: PropTypes.func

};

Pagging.defaultProps = {

    total: 0,
    page: 0,
    pageSize: 10,
    pageSizes: [5, 10, 15, 20],
    selectedCount: 0,

    selectedCountVisible: false,
    pageSizeVisible: true,

    pageSizeRightIconCls: 'fas fa-angle-down',
    paggingPrevIconCls: 'fas fa-angle-left',
    paggingNextIconCls: 'fas fa-angle-right',
    paggingFirstIconCls: 'fas fa-angle-double-left',
    paggingLastIconCls: 'fas fa-angle-double-right'

};

export default Pagging;