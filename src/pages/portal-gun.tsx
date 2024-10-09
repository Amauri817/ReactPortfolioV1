import React from 'react';
import NavTabs from '../components/DesignDevelop/NavTabs';
import PortalBod from '../components/DesignDevelop/portalBod';

const Portal: React.FC = () => {
    return (
        <div id='portalP'>
            <NavTabs />
            <PortalBod />
        </div>
    )
};

export default Portal;