import React, { ReactNode } from "react";

interface CardDataStatsProps {
  title?: string;
  total?: any;
  rate?: string;
  children: ReactNode;
}

const CardDataStats: React.FC<CardDataStatsProps> = ({
  title,
  total,
  rate,
  children,
}) => {
  return (
    <div className="rounded-sm border border-stroke bg-white px-7.5 py-6 shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="flex h-11.5 w-11.5 ml-[-5.5px] items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4">
        {children}
      </div>

      <div className="mt-4 flex items-end justify-between">
        <div>
          <h4 className="text-title-md md:ml-0 ml-[10px] font-bold text-black dark:text-white">
            {total}
          </h4>
          <span className="text-sm font-medium">{title}</span>
        </div>

        <span className={`flex items-center gap-1 text-sm font-medium`}>
          {rate}
        </span>
      </div>
    </div>
  );
};

export default CardDataStats;
