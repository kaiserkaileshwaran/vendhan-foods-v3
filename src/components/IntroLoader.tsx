import React, { useState, useEffect } from 'react';

export const IntroLoader: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [fading, setFading] = useState(false);

  useEffect(() => {
    // Check if user already saw the intro during this session
    if (sessionStorage.getItem('vendhan_intro_seen')) {
      onComplete();
      return;
    }

    const timer = setTimeout(() => {
      setFading(true);
      sessionStorage.setItem('vendhan_intro_seen', 'true');
      setTimeout(onComplete, 300);
    }, 650);

    return () => clearTimeout(timer);
  }, [onComplete]);

  const handleSkip = () => {
    sessionStorage.setItem('vendhan_intro_seen', 'true');
    setFading(true);
    setTimeout(onComplete, 100);
  };

  return (
    <div
      className={`fixed inset-0 z-50 bg-[#183E2D] flex flex-col items-center justify-center text-[#FAF7F2] transition-opacity duration-500 ${
        fading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="text-center space-y-4 max-w-sm px-6">
        {/* Animated Leaf/Grain Emblem */}
        <div className="relative w-16 h-16 mx-auto flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border border-[#CFA049]/40 animate-ping opacity-75" />
          <div className="w-12 h-12 rounded-full bg-[#20503A] border border-[#CFA049] flex items-center justify-center text-[#CFA049] text-xl shadow-lg">
            🌾
          </div>
        </div>

        {/* Wordmark */}
        <div className="space-y-1">
          <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-widest text-[#FAF7F2] animate-pulse">
            VENDHAN
          </h1>
          <p className="font-serif italic text-sm tracking-widest text-[#CFA049]">
            Pure • Traditional • Homemade
          </p>
        </div>

        {/* Small location mark */}
        <div className="pt-2 text-[11px] tracking-wider text-[#E8DED0]/60 uppercase font-mono">
          Nanjai Uthukuli • Erode
        </div>
      </div>

      {/* Skip button in bottom corner */}
      <button
        onClick={handleSkip}
        className="absolute bottom-6 right-6 text-xs text-[#E8DED0]/50 hover:text-white underline cursor-pointer transition-colors"
      >
        Enter Website →
      </button>
    </div>
  );
};
