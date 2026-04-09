import React from "react";

interface TicketCardProps {
  type: string;
  destination: string;
  price: string;
  image: string;
}

const TicketCard: React.FC<TicketCardProps> = ({ type, destination, price, image }) => {
  return (
    <div className="relative tour-card group cursor-pointer overflow-hidden rounded-xxl h-full">
      <div className="relative overflow-hidden before:absolute before:inset-0 before:bg-linear-to-b before:from-transparent before:to-black/60 before:z-1 h-full min-h-[260px]">
        <img
          src={image}
          alt={destination}
          className="size-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="absolute left-0 bottom-0 sm:p-7.5 p-4.5 flex items-center justify-between w-full z-2">
        <div className="flex-1">
          <span className="block font-title text-[12px] text-white uppercase mb-1 tracking-wider opacity-90">
            {type}
          </span>
          <h3 className="text-xl sm:text-2xl font-medium text-white uppercase max-w-80 group-hover:text-primary transition-colors">
            {destination}
          </h3>
        </div>
        <div className="text-right">
          <span className="block font-title text-[12px] text-white uppercase mb-1 tracking-wider opacity-90">
            From
          </span>
          <span className="block font-title text-2xl sm:text-3xl text-primary font-bold">
            {price}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
