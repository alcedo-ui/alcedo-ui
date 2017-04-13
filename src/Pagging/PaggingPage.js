import React, {Component, PropTypes} from 'react';

import RaisedButton from '../RaisedButton';

export default class PaggingPage extends Component {

    constructor(props) {

        super(props);

        this.jump = this::this.jump;

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

        const {page, total} = this.props;

        let pages = null;
        if (total <= 5) {
            pages =
                <div className="pages">
                    {
                        this.getArray(total).map((value, index) => {
                            return (
                                <RaisedButton key={index}
                                              className="page"
                                              value={value}
                                              disabled={index == page}
                                              onTouchTap={() => {
                                                  this.jump(index);
                                              }}/>
                            );
                        })
                    }
                </div>;
        } else {
            if (page < 3) {
                pages =
                    <div className="pages">
                        <RaisedButton className="page"
                                      value="1"
                                      disabled={page == 0}
                                      onTouchTap={() => {
                                          this.jump(0);
                                      }}/>
                        <RaisedButton className="page"
                                      value="2"
                                      disabled={page == 1}
                                      onTouchTap={() => {
                                          this.jump(1);
                                      }}/>
                        <RaisedButton className="page"
                                      value="3"
                                      disabled={page == 2}
                                      onTouchTap={() => {
                                          this.jump(2);
                                      }}/>
                        <RaisedButton className="page"
                                      value="4"
                                      disabled={page == 3}
                                      onTouchTap={() => {
                                          this.jump(3);
                                      }}/>
                        <div className="apostrophe">...</div>
                        <RaisedButton className="page"
                                      value={total}
                                      onTouchTap={() => {
                                          this.jump(total - 1);
                                      }}/>
                    </div>;
            } else if (page > total - 3) {
                pages =
                    <div className="pages">
                        <RaisedButton className="page"
                                      value="1"
                                      onTouchTap={() => {
                                          this.jump(0);
                                      }}/>
                        <div className="apostrophe">...</div>
                        <RaisedButton className="page"
                                      value={total - 3}
                                      disabled={page == total - 4}
                                      onTouchTap={() => {
                                          this.jump(total - 4);
                                      }}/>
                        <RaisedButton className="page"
                                      value={total - 2}
                                      disabled={page == total - 3}
                                      onTouchTap={() => {
                                          this.jump(total - 3);
                                      }}/>
                        <RaisedButton className="page"
                                      value={total - 1}
                                      disabled={page == total - 2}
                                      onTouchTap={() => {
                                          this.jump(total - 2);
                                      }}/>
                        <RaisedButton className="page"
                                      value={total}
                                      disabled={page == total - 1}
                                      onTouchTap={() => {
                                          this.jump(total - 1);
                                      }}/>
                    </div>;
            } else {
                pages =
                    <div className="pages">
                        <RaisedButton className="page"
                                      value="1"
                                      onTouchTap={this.jump.bind(this, 0)}/>
                        <div className="apostrophe">...</div>
                        <RaisedButton className="page"
                                      value={page}
                                      onTouchTap={() => {
                                          this.jump(page - 1);
                                      }}/>
                        <RaisedButton className="page"
                                      value={page + 1}
                                      disabled={true}
                                      onTouchTap={() => {
                                          this.jump(page);
                                      }}/>
                        <RaisedButton className="page"
                                      value={page + 2}
                                      onTouchTap={() => {
                                          this.jump(page + 1);
                                      }}/>
                        <div className="apostrophe">...</div>
                        <RaisedButton className="page"
                                      value={total}
                                      onTouchTap={() => {
                                          this.jump(total - 1);
                                      }}/>
                    </div>;
            }
        }

        return (
            <div className="pagging-page">

                <RaisedButton className="ctrl"
                              iconCls="fa fa-angle-double-left"
                              disabled={page == 0}
                              onTouchTap={() => {
                                  this.jump(0);
                              }}/>

                <RaisedButton className="ctrl"
                              iconCls="fa fa-angle-left"
                              disabled={page == 0}
                              onTouchTap={() => {
                                  this.jump(page - 1 >= 0 ? page - 1 : 0);
                              }}/>

                {pages}

                <RaisedButton className="ctrl"
                              iconCls="fa fa-angle-right"
                              disabled={page == total - 1 || total == 0}
                              onTouchTap={() => {
                                  this.jump(page + 1 <= total - 1 ? page + 1 : total - 1);
                              }}/>

                <RaisedButton className="ctrl"
                              iconCls="fa fa-angle-double-right"
                              disabled={page == total - 1 || total == 0}
                              onTouchTap={() => {
                                  this.jump(total - 1);
                              }}/>

            </div>
        );

    }
};

PaggingPage.propTypes = {

    className: PropTypes.string,
    style: PropTypes.object,

    page: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,

    onPageChange: PropTypes.func

};

PaggingPage.defaultProps = {

    className: '',
    style: null,

    page: 0,
    total: 0

};