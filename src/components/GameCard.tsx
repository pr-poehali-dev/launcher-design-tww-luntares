
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface GameCardProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: string;
  title: string;
  subtitle?: string;
}

const GameCard = forwardRef<HTMLDivElement, GameCardProps>(
  ({ className, icon, title, subtitle, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex items-center gap-3 p-4 rounded bg-[#1E222A] hover:bg-[#252A35] transition-all cursor-pointer border-l-4 border-transparent hover:border-[#F5B642]",
          className
        )}
        {...props}
      >
        <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
          <img src={icon} alt={title} className="w-full h-full object-cover" />
        </div>
        <div className="flex-grow">
          <h3 className="text-white font-medium">{title}</h3>
          {subtitle && <p className="text-gray-400 text-xs">{subtitle}</p>}
        </div>
      </div>
    );
  }
);

GameCard.displayName = "GameCard";

export default GameCard;
