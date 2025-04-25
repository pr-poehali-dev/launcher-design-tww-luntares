
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Cog, LogOut, MessageCircle } from "lucide-react";

const LauncherHeader = () => {
  return (
    <header className="border-b border-[#9b87f5]/20 bg-black/60 backdrop-blur-lg">
      <div className="container mx-auto h-16 flex items-center justify-between px-4">
        <div className="flex items-center space-x-6">
          <div className="text-xl font-bold text-white">
            <span className="text-[#9b87f5]">TWW</span> Luntares
          </div>
          <nav className="hidden md:flex space-x-4">
            <Button variant="ghost" className="text-gray-300 hover:text-white hover:bg-white/10">
              Игра
            </Button>
            <Button variant="ghost" className="text-gray-300 hover:text-white hover:bg-white/10">
              Магазин
            </Button>
            <Button variant="ghost" className="text-gray-300 hover:text-white hover:bg-white/10">
              Сообщество
            </Button>
            <Button variant="ghost" className="text-gray-300 hover:text-white hover:bg-white/10">
              Поддержка
            </Button>
          </nav>
        </div>
        
        <div className="flex items-center space-x-3">
          <Button size="icon" variant="ghost" className="text-gray-300 hover:text-white hover:bg-white/10">
            <MessageCircle className="h-5 w-5" />
          </Button>
          <Button size="icon" variant="ghost" className="text-gray-300 hover:text-white hover:bg-white/10">
            <Cog className="h-5 w-5" />
          </Button>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                <Avatar className="h-10 w-10 border border-[#9b87f5]/30">
                  <AvatarImage src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100" alt="Avatar" />
                  <AvatarFallback className="bg-[#7E69AB]">ИП</AvatarFallback>
                </Avatar>
                <span className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full bg-green-500 border-2 border-black"></span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 bg-[#1A1F2C] border-[#9b87f5]/30 text-white" align="end" forceMount>
              <DropdownMenuLabel>Мой аккаунт</DropdownMenuLabel>
              <DropdownMenuSeparator className="bg-[#9b87f5]/20" />
              <DropdownMenuItem className="hover:bg-[#9b87f5]/20 cursor-pointer">Управление аккаунтом</DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-[#9b87f5]/20 cursor-pointer">Настройки</DropdownMenuItem>
              <DropdownMenuSeparator className="bg-[#9b87f5]/20" />
              <DropdownMenuItem className="hover:bg-[#9b87f5]/20 cursor-pointer">
                <LogOut className="mr-2 h-4 w-4" />
                <span>Выйти</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default LauncherHeader;
