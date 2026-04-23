import Image from "next/image";

interface TicketCardProps {
  type: string;
  destination: string;
  price: string;
  image: string;
  onAction?: () => void;
}

const TicketCard: React.FC<TicketCardProps> = ({
  type,
  destination,
  price,
  image,
  onAction,
}) => {
  return (
    <div className="relative tour-card group cursor-pointer overflow-hidden rounded-xxl h-full">
      <div className="relative overflow-hidden before:absolute before:inset-0 before:bg-linear-to-b before:from-transparent before:to-black/60 before:z-1 h-full min-h-65">
        <Image
          src={image}
          alt={destination}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      {onAction ? (
        <button
          type="button"
          aria-label={`Plan trip for ${destination}`}
          className="absolute top-4 right-4 z-3 size-11 flex items-center justify-center rounded-full bg-primary/95 text-white transition-transform duration-200 group-hover:scale-105 -rotate-45 shadow-1"
          onClick={(event) => {
            event.preventDefault();
            event.stopPropagation();
            onAction();
          }}
        >
          <svg
            width="25"
            height="25"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 12H19"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 5L19 12L12 19"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      ) : null}
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
