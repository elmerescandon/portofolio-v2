import React from 'react';

interface StageNavigationProps {
  currentStage: number;
  stages: string[];
  goToStage: (index: number) => void;
}

const StageNavigation: React.FC<StageNavigationProps> = ({
  currentStage,
  stages,
  goToStage,
}) => {
  return (
    <nav className="flex items-center justify-center gap-4 fixed bottom-0 left-0 right-0">
      {stages.map((stage, index) => (
        <button
          key={stage}
          type="button"
          className={`rounded-full w-3 h-3 ${currentStage === index ? 'bg-foreground' : 'bg-border'}`}
          onClick={() => goToStage(index)}
          aria-label={`Go to stage ${stage}`}
        />
      ))}
    </nav>
  );
};

export default StageNavigation;

