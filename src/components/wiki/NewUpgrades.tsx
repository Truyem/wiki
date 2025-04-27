
import React from 'react';

const NewUpgrades: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-[#259e63] dark:text-[#55FFFF] mb-2">
          Nâng cấp
        </h1>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          Danh sách các nâng cấp có sẵn.
        </p>
      </div>
      
      <div className="py-8 text-center">
        <p className="text-lg text-gray-500">Thông tin sẽ được cập nhật sớm.</p>
      </div>
    </div>
  );
};

export default NewUpgrades;
