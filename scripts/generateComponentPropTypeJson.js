'use strict';

var _ = require('lodash'),
    PropTypes = require('prop-types');

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

function splitField(fieldString) {
    return {
        key: _.trim(fieldString.slice(0, fieldString.indexOf(':'))),
        value: _.trim(fieldString.slice(fieldString.indexOf(':') + 1))
    };
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
        lastLineBraceCount = 0, braceCount = 0, commentStart, comment, fieldString, fieldObj;

    for (var i = 0, len = propTypesFileArray.length; i < len; i++) {

        var line = propTypesFileArray[i];

        lastLineBraceCount = braceCount;

        braceCount += (line.split('(').length - 1);
        braceCount += (line.split('[').length - 1);
        braceCount += (line.split('{').length - 1);
        braceCount -= (line.split(')').length - 1);
        braceCount -= (line.split(']').length - 1);
        braceCount -= (line.split('}').length - 1);

        if (lastLineBraceCount > 1 || braceCount > 1) {
            continue;
        }

        if (braceCount < 1) {
            break;
        }

        if (commentStart && line.indexOf('*/') > -1) {

            if (propTypesFileArray[i + 1]) {

                fieldString = propTypesFileArray[i + 1];
                fieldObj = splitField(fieldString);
                comment += _.trim(line.slice(0, line.indexOf('*/')));

                result[fieldObj.key] = {
                    type: formatPropTypes(fieldObj.value),
                    desc: comment
                };

            }

            commentStart = comment = undefined;

        } else if (commentStart) {
            comment += (comment === '' ? '' : ' ') + _.trim(line.slice(line.indexOf('*') + 1));
        } else if (line.indexOf('/**') > -1) {
            commentStart = i;
            comment = _.trim(line.slice(line.indexOf('/**') + 3));
        } else if (line.indexOf('PropTypes') > -1) {

            fieldString = line;
            fieldObj = splitField(fieldString);

            result[fieldObj.key] = {
                type: formatPropTypes(fieldObj.value)
            };

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
        braceCount = 0, fieldObj, fieldName;

    for (var i = 0, len = defaultPropsFileArray.length; i < len; i++) {

        var line = defaultPropsFileArray[i];

        fieldObj = splitField(line);
        fieldName = fieldObj.key;

        if (result[fieldName]) {
            result[fieldName].default = formatDefaultProps(fieldObj.value);
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