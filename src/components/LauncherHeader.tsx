
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Cog, LogOut, MessageCircle, Bell } from "lucide-react";

const LauncherHeader = () => {
  return (
    <header className="h-16 bg-[#0F131B] border-b border-[#2A2F3B] z-10">
      <div className="container mx-auto h-full flex items-center justify-between px-4">
        <div className="flex items-center space-x-6">
          <div className="text-xl font-bold text-white">
            <span className="text-[#F5B642]">WoW</span> Luntares
          </div>
          <nav className="hidden md:flex space-x-1">
            <Button variant="ghost" className="text-gray-300 hover:text-white hover:bg-[#252A35]">
              Игра
            </Button>
            <Button variant="ghost" className="text-gray-300 hover:text-white hover:bg-[#252A35]">
              Магазин
            </Button>
            <Button variant="ghost" className="text-gray-300 hover:text-white hover:bg-[#252A35]">
              Сообщество
            </Button>
            <Button variant="ghost" className="text-gray-300 hover:text-white hover:bg-[#252A35]">
              Поддержка
            </Button>
          </nav>
        </div>
        
        <div className="flex items-center space-x-2">
          <Button size="icon" variant="ghost" className="text-gray-300 hover:text-white hover:bg-[#252A35]">
            <Bell className="h-5 w-5" />
          </Button>
          <Button size="icon" variant="ghost" className="text-gray-300 hover:text-white hover:bg-[#252A35]">
            <MessageCircle className="h-5 w-5" />
          </Button>
          <Button size="icon" variant="ghost" className="text-gray-300 hover:text-white hover:bg-[#252A35]">
            <Cog className="h-5 w-5" />
          </Button>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                <Avatar className="h-10 w-10 border border-[#2A2F3B]">
                  <AvatarImage src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100" alt="Avatar" />
                  <AvatarFallback className="bg-[#252A35] text-[#F5B642]">ИП</AvatarFallback>
                </Avatar>
                <span className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full bg-green-500 border-2 border-[#0F131B]"></span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 bg-[#18202E] border-[#2A2F3B] text-white" align="end" forceMount>
              <DropdownMenuLabel>Мой аккаунт</DropdownMenuLabel>
              <DropdownMenuSeparator className="bg-[#2A2F3B]" />
              <DropdownMenuItem className="hover:bg-[#252A35] cursor-pointer">Управление аккаунтом</DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-[#252A35] cursor-pointer">Настройки</DropdownMenuItem>
              <DropdownMenuSeparator className="bg-[#2A2F3B]" />
              <DropdownMenuItem className="hover:bg-[#252A35] cursor-pointer">
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
