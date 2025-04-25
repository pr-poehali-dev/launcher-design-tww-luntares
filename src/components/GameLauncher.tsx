
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import GameCard from "@/components/GameCard";

interface GameLauncherProps {
  games: Array<{
    id: string;
    title: string;
    icon: string;
    subtitle?: string;
  }>;
  activeGame?: string;
}

const GameLauncher = ({ games, activeGame }: GameLauncherProps) => {
  return (
    <div className="flex flex-col h-full">
      <div className="flex-none p-6 border-b border-[#2A2F3B]">
        <h2 className="text-xl font-bold text-white uppercase">ВАШИ ИГРЫ</h2>
      </div>
      
      <div className="flex-grow overflow-auto p-4 space-y-2">
        {games.map((game) => (
          <GameCard
            key={game.id}
            icon={game.icon}
            title={game.title}
            subtitle={game.subtitle || "Нажмите для настроек"}
            className={activeGame === game.id ? "border-l-4 border-[#F5B642] bg-[#252A35]" : ""}
          />
        ))}
      </div>
      
      <div className="flex-none p-4 border-t border-[#2A2F3B]">
        <div className="mb-4">
          <Progress value={100} className="h-1 bg-[#1E222A]" />
          <div className="flex justify-between mt-1 text-xs text-gray-400">
            <span>100% загружено</span>
            <span>92.4 GB</span>
          </div>
        </div>
        
        <div className="flex gap-3">
          <Button className="w-full bg-[#F5B642] hover:bg-[#E4A53B] text-black font-bold">
            СКАЧАТЬ
          </Button>
          <Button variant="outline" className="flex-none border-[#2A2F3B] text-white hover:bg-[#252A35]">
            Выбрать папку
          </Button>
        </div>
      </div>
    </div>
  );
};

export default GameLauncher;
