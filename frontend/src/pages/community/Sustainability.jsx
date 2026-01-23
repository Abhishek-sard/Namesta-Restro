import React, { useEffect } from 'react';
import SustainabilityHero from './Sustainability/SustainabilityHero';
import SustainabilityPhilosophy from './Sustainability/SustainabilityPhilosophy';
import LocalResponsibleSourcing from './Sustainability/LocalResponsibleSourcing';
import FoodWasteReduction from './Sustainability/FoodWasteReduction';
import EcoFriendlyPackaging from './Sustainability/EcoFriendlyPackaging';
import EnergyWaterCare from './Sustainability/EnergyWaterCare';
import RespectCultureNature from './Sustainability/RespectCultureNature';
import ClosingPromise from './Sustainability/ClosingPromise';

const Sustainability = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-white">
            <SustainabilityHero />

            <div className="space-y-0">
                <SustainabilityPhilosophy />

                <LocalResponsibleSourcing />

                <FoodWasteReduction />

                <EcoFriendlyPackaging />

                <EnergyWaterCare />

                <RespectCultureNature />

                <ClosingPromise />
            </div>
        </div>
    );
};

export default Sustainability;
