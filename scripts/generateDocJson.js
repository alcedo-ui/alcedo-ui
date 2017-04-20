'use strict';

var _ = require('lodash'),
    react = require('react'),
    PropTypes = react.PropTypes;

/**
 * format propTypes according to react.PropTypes
 * @param fieldPropType
 * @returns {*}
 */
function formatPropTypes(fieldPropType) {
    for (var key in PropTypes) {
        if (fieldPropType.indexOf(key) > -1) {
            return 'PropTypes.' + key;
        }
    }
    return '';
}

/**
 * remove end comma
 * @param fieldDefaultProps
 * @returns {*}
 */
function formatDefaultProps(fieldDefaultProps) {

    var result = fieldDefaultProps;

    if (result.slice(-1) === ',') {
        result = result.slice(0, -1);
    }

    if ((result.slice(0, 1) === '\'' && result.slice(-1) === '\'')
        || (result.slice(0, 1) === '"' && result.slice(-1) === '"')) {
        result = result.slice(1, -1);
    }

    return result;

}

/**
 * generate fieldName and comment into result
 * @param componentName
 * @param fileString
 * @param result
 */
function generatePropTypes(componentName, fileString, result) {

    var propTypesFileString = fileString.slice(fileString.indexOf(componentName + '.propTypes')),
        propTypesFileArray = propTypesFileString.split('\n'),
        braceCount = 0, commentStart, comment, fieldString, fieldArray, fieldName;

    for (var i = 0, len = propTypesFileArray.length; i < len; i++) {

        var line = propTypesFileArray[i];

        if (commentStart && line.indexOf('*/') > -1) {

            if (propTypesFileArray[i + 1]) {

                fieldString = propTypesFileArray[i + 1];
                fieldArray = fieldString.split(':');

                fieldName = _.trim(fieldArray[0]);
                comment += _.trim(line.slice(0, line.indexOf('*/')));

                result[fieldName] = {
                    propType: formatPropTypes(_.trim(fieldArray[1])),
                    comment: comment
                };

            }

            commentStart = comment = undefined;

        } else if (commentStart) {
            comment += (comment === '' ? '' : ' ') + _.trim(line.slice(line.indexOf('*') + 1));
        } else if (line.indexOf('/**') > -1) {
            commentStart = i;
            comment = _.trim(line.slice(line.indexOf('/**') + 3));
        } else {

            braceCount += (line.split('{').length - 1);
            braceCount -= (line.split('}').length - 1);

            if (braceCount == 0) {
                break;
            }

        }

    }

}

/**
 * generate defaultProps into result
 * @param componentName
 * @param fileString
 * @param result
 */
function generateDefaultProps(componentName, fileString, result) {

    var defaultPropsFileString = fileString.slice(fileString.indexOf(componentName + '.defaultProps')),
        defaultPropsFileArray = defaultPropsFileString.split('\n'),
        braceCount = 0, fieldArray, fieldName;

    for (var i = 0, len = defaultPropsFileArray.length; i < len; i++) {

        var line = defaultPropsFileArray[i];

        fieldArray = line.split(':');
        fieldName = _.trim(fieldArray[0]);

        if (result[fieldName]) {
            result[fieldName].defaultProps = formatDefaultProps(_.trim(fieldArray[1]));
        }

        braceCount += (line.split('{').length - 1);
        braceCount -= (line.split('}').length - 1);

        if (braceCount == 0) {
            break;
        }


    }

}

module.exports = function (componentName, fileString) {

    if (!fileString) {
        return fileString;
    }

    var result = {};

    generatePropTypes(componentName, fileString, result);
    generateDefaultProps(componentName, fileString, result);

    return JSON.stringify(result, null, 4);

};