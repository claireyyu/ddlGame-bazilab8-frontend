import React from 'react';
import { useTranslations } from 'next-intl';

interface ResultButtonsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const ResultButtons: React.FC<ResultButtonsProps> = ({ activeTab, setActiveTab }) => {
  const t = useTranslations('ResultButtons');

  return (
    <div className="flex justify-center xl:flex-col space-x-4 xl:space-x-0 xl:space-y-4">
      <button
        className={`px-2 xl:px-12 py-2 flex justify-center rounded-custom shadow-button ${activeTab === 'bazi' ? 'bg-gradient-to-r from-bStart to-bEnd text-foreground' : 'bg-foreground text-black'}`}
        onClick={() => setActiveTab('bazi')}
      >
        {t('bazi')}
      </button>
      <button
        className={`px-2 xl:px-12 py-2 flex justify-center rounded-custom shadow-button ${activeTab === 'liupan' ? 'bg-gradient-to-r from-bStart to-bEnd text-foreground' : 'bg-foreground text-black'}`}
        onClick={() => setActiveTab('liupan')}
      >
        {t('liupan')}
      </button>
  </div>
  );
};

export default ResultButtons;
