import React, { useState, useEffect } from 'react';
import { Coffee, Play, Clock, CheckCircle2, ShieldAlert } from 'lucide-react';

interface BreakScreenProps {
  onResumeExam: () => void;
}

export const BreakScreen: React.FC<BreakScreenProps> = ({ onResumeExam }) => {
  const [secondsRemaining, setSecondsRemaining] = useState<number>(600); // 10 minutes

  useEffect(() => {
    if (secondsRemaining <= 0) return;
    const timer = setInterval(() => {
      setSecondsRemaining(prev => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [secondsRemaining]);

  const mins = Math.floor(secondsRemaining / 60);
  const secs = secondsRemaining % 60;
  const timeFormatted = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;

  return (
    <div className="flex-1 flex flex-col items-center justify-center bg-slate-900 text-white p-6">
      <div className="max-w-xl w-full bg-slate-800/90 border border-slate-700 rounded-3xl p-8 shadow-2xl text-center space-y-6 animate-fade-in">
        {/* Break Icon */}
        <div className="w-16 h-16 bg-blue-500/20 border border-blue-400/30 text-blue-400 rounded-2xl flex items-center justify-center mx-auto">
          <Coffee className="w-8 h-8" />
        </div>

        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-blue-400 bg-blue-950/60 px-3 py-1 rounded-full border border-blue-800">
            Official Scheduled Break
          </span>
          <h1 className="text-3xl font-extrabold mt-3 text-white">
            Take a 10-Minute Break
          </h1>
          <p className="text-sm text-slate-300 mt-2 leading-relaxed">
            You have successfully completed Section 1: Reading and Writing. Next up is Section 2: Math (2 modules).
          </p>
        </div>

        {/* Big Countdown Timer */}
        <div className="bg-slate-950/80 rounded-2xl p-6 border border-slate-700 max-w-xs mx-auto">
          <div className="flex items-center justify-center gap-2 text-slate-400 text-xs uppercase tracking-wider mb-1 font-semibold">
            <Clock className="w-4 h-4 text-blue-400" />
            <span>Break Time Remaining</span>
          </div>
          <div className="text-5xl font-mono font-bold text-white tracking-widest">
            {timeFormatted}
          </div>
        </div>

        {/* Break Guidelines */}
        <div className="text-left bg-slate-900/60 rounded-xl p-4 border border-slate-700/60 text-xs text-slate-300 space-y-2">
          <div className="font-semibold text-slate-200 flex items-center gap-1.5">
            <ShieldAlert className="w-4 h-4 text-amber-400" />
            Official Test Day Protocol:
          </div>
          <ul className="list-disc pl-5 space-y-1 text-slate-400">
            <li>Drink water, have a light protein snack, and stretch.</li>
            <li>Rest your eyes and mentally recharge for the high-intensity Math section.</li>
            <li>You may resume the test whenever you are ready.</li>
          </ul>
        </div>

        {/* Resume Button */}
        <div>
          <button
            onClick={onResumeExam}
            className="w-full py-3.5 px-6 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-base shadow-lg transition-all active:scale-98 flex items-center justify-center gap-2"
          >
            <Play className="w-5 h-5 fill-white" />
            <span>Resume Test Now (Start Math Section)</span>
          </button>
        </div>
      </div>
    </div>
  );
};
