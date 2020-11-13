/**
 * @file dateUtils
 * @author
 */

import moment from 'moment';

function value2Timestamp(value, format) {

    const defaultValue = new Date().getTime();

    if (typeof value === 'number') {
        return new Date(value).toString() === 'Invalid Date' ? defaultValue : value;
    } else if (typeof value === 'string') {
        let date = moment(value, format);
        return date.isValid() ? date.valueOf() : defaultValue;
    } else if (moment.isDate(value)) {
        let date = moment(value);
        return date.isValid() ? date.valueOf() : defaultValue;
    }

    return defaultValue;

}

function value2Moment(value, format) {

    const defaultValue = moment();

    if (typeof value === 'string') {
        let date = moment(value, format);
        return date.isValid() ? date : defaultValue;
    } else {
        let date = moment(value);
        return date.isValid() ? date : defaultValue;
    }

}

function MonthDays(year) {
    // debugger
    let dateArray = [];
    for (let i = 0; i < 12; i++) {
        switch (i + 1) {
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:
                dateArray.push(31);
                break;
            case 4:
            case 6:
            case 9:
            case 11:
                dateArray.push(30);
                break;
            case 2:
                if (moment(year + '-02-29', 'YYYY-MM-DD', true).isValid()) {
                    dateArray.push(29);
                } else {
                    dateArray.push(28);
                }
                break;
            default:
                break;
        }
    }
    return dateArray;
}

function setDateRange(start, end) {

    if (start.year == end.year && start.month == end.month) {
        if (start.month == 12) {
            end.year = +(end.year) + 1;
            end.month = 1;
        } else {
            end.year = end.year;
            end.month = +(end.month) + 1;
        }
    } else {
        end.year = end.year;
        end.month = end.month;
    }

    return {
        start,
        end
    };
}


function getYearArr(num) {
    let yearString = num.toString();
    yearString = yearString.substr(0, yearString.length - 1);
    let YearArr = [];
    for (let i = 0; i < 10; i++) {
        YearArr.push(yearString + i);
    }
    return YearArr;
}

function getMonth(num) {
    return ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][num - 1];
}


function getPrevMaxCloserDate(selectedDate, compareDateArray) {
    let prevDateArray = compareDateArray.slice().filter(item => new Date(selectedDate) - (new Date(item?.value[1])) > 0).map(item => new Date(item?.value[1]).valueOf());
    return compareDateArray.find(item => new Date(item?.value[1]).valueOf() === Math.max(...prevDateArray));
}

function getNextMinCloserDate(selectedDate, compareDateArray) {
    let nextDateArray = compareDateArray.slice().filter(item => new Date(selectedDate) - (new Date(item?.value[0])) < 0).map(item => new Date(item?.value[0]).valueOf());
    return compareDateArray.find(item => new Date(item?.value[0]).valueOf() === Math.min(...nextDateArray));
}

export default {
    value2Timestamp,
    value2Moment,
    MonthDays,
    setDateRange,
    getYearArr,
    getMonth,
    getPrevMaxCloserDate,
    getNextMinCloserDate
};
