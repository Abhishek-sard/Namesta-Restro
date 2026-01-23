import React, { useEffect } from 'react';
import LocalHero from './LocalMatters/LocalHero';
import LocalMeaning from './LocalMatters/LocalMeaning';
import LocalSourcing from './LocalMatters/LocalSourcing';
import CommunitySupport from './LocalMatters/CommunitySupport';
import Sustainability from './LocalMatters/Sustainability';
import CustomerConnection from './LocalMatters/CustomerConnection';
import LocalCTA from './LocalMatters/LocalCTA';

const LocalMatters = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-white">
            <LocalHero />

            <div className="space-y-0">
                <LocalMeaning />

                <LocalSourcing />

                <CommunitySupport />

                <Sustainability />

                <CustomerConnection />

                <LocalCTA />
            </div>
        </div>
    );
};

export default LocalMatters;
