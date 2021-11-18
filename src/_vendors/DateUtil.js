/**
 * @file dateUtils
 * @author
 */

import moment from 'moment';

// eslint-disable-next-line require-jsdoc
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

// eslint-disable-next-line require-jsdoc
function setDateRange(start, end) {

    if (start.year?.toString() === end.year?.toString() && start.month?.toString() === end.month?.toString()) {
        if (start.month?.toString() === '12') {
            end.year = +(end.year) + 1;
            end.month = 1;
        } else {
            end.month = +(end.month) + 1;
        }
    }

    return {
        start,
        end
    };
}


// eslint-disable-next-line require-jsdoc
function getYearArr(num) {
    let yearString = num.toString();
    yearString = yearString.substr(0, yearString.length - 1);
    let YearArr = [];
    for (let i = 0; i < 10; i++) {
        YearArr.push(yearString + i);
    }
    return YearArr;
}

// eslint-disable-next-line require-jsdoc
function getMonth(num) {
    return ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][num - 1];
}

// eslint-disable-next-line require-jsdoc
function getPrevMaxCloserDate(selectedDate, compareDateArray) {
    let prevDateArray = compareDateArray.slice()
                                        .filter(item => new Date(selectedDate) - (new Date(item?.value[1])) > 0)
                                        .map(item => new Date(item?.value[1]).valueOf());
    return compareDateArray.find(item => new Date(item?.value[1]).valueOf() === Math.max(...prevDateArray));
}

// eslint-disable-next-line require-jsdoc
function getNextMinCloserDate(selectedDate, compareDateArray) {
    let nextDateArray = compareDateArray.slice()
                                        .filter(item => new Date(selectedDate) - (new Date(item?.value[0])) < 0)
                                        .map(item => new Date(item?.value[0]).valueOf());
    return compareDateArray.find(item => new Date(item?.value[0]).valueOf() === Math.min(...nextDateArray));
}

export default {
    MonthDays,
    setDateRange,
    getYearArr,
    getMonth,
    getPrevMaxCloserDate,
    getNextMinCloserDate
};
