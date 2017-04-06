import React, {Component, PropTypes} from 'react';

import Button from 'components/button/Button';

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
								<Button key={index}
								        className="page"
								        value={value}
								        disabled={index == page}
								        onClick={() => {
									        this.jump(index);
								        }}/>
							);
						})
					}
				</div>
		} else {
			if (page < 3) {
				pages =
					<div className="pages">
						<Button className="page"
						        value="1"
						        disabled={page == 0}
						        onClick={() => {
							        this.jump(0);
						        }}/>
						<Button className="page"
						        value="2"
						        disabled={page == 1}
						        onClick={() => {
							        this.jump(1);
						        }}/>
						<Button className="page"
						        value="3"
						        disabled={page == 2}
						        onClick={() => {
							        this.jump(2);
						        }}/>
						<Button className="page"
						        value="4"
						        disabled={page == 3}
						        onClick={() => {
							        this.jump(3);
						        }}/>
						<div className="apostrophe">...</div>
						<Button className="page"
						        value={total}
						        onClick={() => {
							        this.jump(total - 1);
						        }}/>
					</div>
			} else if (page > total - 3) {
				pages =
					<div className="pages">
						<Button className="page"
						        value="1"
						        onClick={() => {
							        this.jump(0);
						        }}/>
						<div className="apostrophe">...</div>
						<Button className="page"
						        value={total - 3}
						        disabled={page == total - 4}
						        onClick={() => {
							        this.jump(total - 4);
						        }}/>
						<Button className="page"
						        value={total - 2}
						        disabled={page == total - 3}
						        onClick={() => {
							        this.jump(total - 3);
						        }}/>
						<Button className="page"
						        value={total - 1}
						        disabled={page == total - 2}
						        onClick={() => {
							        this.jump(total - 2);
						        }}/>
						<Button className="page"
						        value={total}
						        disabled={page == total - 1}
						        onClick={() => {
							        this.jump(total - 1);
						        }}/>
					</div>
			} else {
				pages =
					<div className="pages">
						<Button className="page"
						        value="1"
						        onClick={this.jump.bind(this, 0)}/>
						<div className="apostrophe">...</div>
						<Button className="page"
						        value={page}
						        onClick={() => {
							        this.jump(page - 1);
						        }}/>
						<Button className="page"
						        value={page + 1}
						        disabled={true}
						        onClick={() => {
							        this.jump(page);
						        }}/>
						<Button className="page"
						        value={page + 2}
						        onClick={() => {
							        this.jump(page + 1);
						        }}/>
						<div className="apostrophe">...</div>
						<Button className="page"
						        value={total}
						        onClick={() => {
							        this.jump(total - 1);
						        }}/>
					</div>
			}
		}

		return (
			<div className="pagging-page">

				<Button className="ctrl"
				        iconCls="fa fa-angle-double-left"
				        disabled={page == 0}
				        onClick={() => {
					        this.jump(0);
				        }}/>

				<Button className="ctrl"
				        iconCls="fa fa-angle-left"
				        disabled={page == 0}
				        onClick={() => {
					        this.jump(page - 1 >= 0 ? page - 1 : 0);
				        }}/>

				{pages}

				<Button className="ctrl"
				        iconCls="fa fa-angle-right"
				        disabled={page == total - 1 || total == 0}
				        onClick={() => {
					        this.jump(page + 1 <= total - 1 ? page + 1 : total - 1);
				        }}/>

				<Button className="ctrl"
				        iconCls="fa fa-angle-double-right"
				        disabled={page == total - 1 || total == 0}
				        onClick={() => {
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