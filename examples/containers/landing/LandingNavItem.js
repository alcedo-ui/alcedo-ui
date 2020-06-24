/**
 * @file LandingNavItem.js
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {useCallback} from 'react';
import PropTypes from 'prop-types';

// Vendors
import classnames from 'classnames';

// Styles
import 'scss/containers/landing/LandingNavItem.scss';

function LandingNavItem({data, activated, onClick}) {

    const handleClick = useCallback(() => onClick?.(data));

    return (
        <li className={classnames('landing-nav-menu-item', {
            activated
        })}
            onClick={handleClick}>
            {data.name}
        </li>
    );

}

LandingNavItem.propTypes = {

    data: PropTypes.object,
    activated: PropTypes.bool,

    onClick: PropTypes.func

};

export default LandingNavItem;
