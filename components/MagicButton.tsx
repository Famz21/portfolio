import React from "react";

/**
 *  UI: border magic from tailwind css btns
 *  Link: https://ui.aceternity.com/components/tailwindcss-buttons
 *
 *  change border radius to rounded-lg
 *  add margin of md:mt-10
 *  remove focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50
 */
interface MagicButtonProps {
  title: string;
  icon?: React.ReactNode;
  position?: 'left' | 'right';
  handleClick?: () => void;
  otherClasses?: string;
  isDisabled?: boolean;
}

const MagicButton = ({
  title,
  icon,
  position = 'left',
  handleClick,
  otherClasses,
  isDisabled = false,
}: MagicButtonProps) => {
  return (
    <button
      onClick={handleClick}
      disabled={isDisabled}
      className={`group relative inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white transition-all duration-200 bg-slate-900 rounded-lg ${!isDisabled && 'hover:bg-slate-800'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${otherClasses} ${isDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      {position === 'left' && icon && (
        <span className={`mr-2 transition-all duration-200 ${!isDisabled && 'group-hover:translate-x-1'}`}>
          {icon}
        </span>
      )}
      {title}
      {position === 'right' && icon && (
        <span className={`ml-2 transition-all duration-200 ${!isDisabled && 'group-hover:translate-x-1'}`}>
          {icon}
        </span>
      )}
    </button>
  );
};

export default MagicButton;
