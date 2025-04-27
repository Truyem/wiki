
import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

type Trinket = {
  name: string;
  effects: string[];
};

type TrinketsFlipperProps = {
  regularTrinkets: Trinket[];
  upgradedTrinkets: Trinket[];
};

const TrinketsFlipper: React.FC<TrinketsFlipperProps> = ({ regularTrinkets, upgradedTrinkets }) => {
  const [showUpgraded, setShowUpgraded] = useState(false);

  const toggleTrinketType = () => {
    setShowUpgraded(!showUpgraded);
  };

  const displayedTrinkets = showUpgraded ? upgradedTrinkets : regularTrinkets;

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">
          {showUpgraded ? "Bản Nâng Cấp" : "Bản Thường"}
        </h2>
        <button 
          onClick={toggleTrinketType}
          className="flex items-center gap-2 px-4 py-2 bg-purple-700 hover:bg-purple-800 text-white rounded-md transition-all"
        >
          Xem {showUpgraded ? "Bản Thường" : "Bản Nâng Cấp"}
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {displayedTrinkets.map((trinket, index) => (
          <div 
            key={index} 
            className="bg-gray-800 border border-gray-700 rounded-lg p-4 hover:border-purple-500 transition-all"
          >
            <h3 className="text-lg font-semibold text-white mb-2">{trinket.name}</h3>
            <ul className="text-gray-300">
              {trinket.effects.map((effect, idx) => (
                <li key={idx} className="mb-1">{effect}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrinketsFlipper;
