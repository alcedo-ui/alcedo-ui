import moment from 'moment';

function formatDate(timeStamp) {

	if (!timeStamp) {
		return '';
	}

	return moment.utc(new Date(timeStamp).toISOString()).format('MMM DD HH:mm:ss z YYYY');

}

export default {
	formatDate
};