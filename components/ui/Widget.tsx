import * as React from 'react'
import { ReactNode } from 'react'; 
import { ChevronRight } from 'lucide-react';

interface WidgetProps {
  title: string;
  children: ReactNode;
  onClick?: () => void;
  rightIcon?: ReactNode;
  className?: string;
}

const Widget = ({ 
  title, 
  children, 
  onClick, 
  rightIcon = <ChevronRight size={16} className="text-orange-400 group-hover:transform group-hover:translate-x-1 transition-transform" />,
  className = ""
}: WidgetProps) => {
  return (
    <div className={`bg-white rounded-md p-4 border shadow- ${onClick ? 'cursor-pointer' : ''} group ${className}`}>
      <div className="flex justify-between items-center mb-0">
        <h2 className="text-lg font-semibold">{title}</h2>
        {rightIcon}
      </div>
      {children}
    </div>
  );
};

export default Widget;