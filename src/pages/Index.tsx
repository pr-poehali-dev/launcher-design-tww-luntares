
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import LauncherHeader from "@/components/LauncherHeader";
import GameLauncher from "@/components/GameLauncher";
import NewsCard from "@/components/NewsCard";
import ServerStatus from "@/components/ServerStatus";

const games = [
  {
    id: "luntares",
    title: "World of Warcraft Luntares",
    icon: "https://images.unsplash.com/photo-1636955816868-fcb881e57954?q=80&w=80&auto=format",
    subtitle: "Готов к игре"
  },
  {
    id: "tww",
    title: "The War Within",
    icon: "https://images.unsplash.com/photo-1618752202927-2ef85ba85777?q=80&w=80&auto=format",
    subtitle: "Нажмите для настроек"
  },
  {
    id: "pandaria",
    title: "Mists of Pandaria",
    icon: "https://images.unsplash.com/photo-1594904351111-a072f80b1a71?q=80&w=80&auto=format",
    subtitle: "Нажмите для настроек"
  },
  {
    id: "soon",
    title: "Soon",
    icon: "https://images.unsplash.com/photo-1564519889349-fac4944374e3?q=80&w=80&auto=format",
    subtitle: "Нажмите для настроек"
  }
];

const Index = () => {
  const [activeGame, setActiveGame] = useState("luntares");

  return (
    <div className="min-h-screen bg-[#141820] text-white flex flex-col">
      <LauncherHeader />
      
      <div className="flex-grow flex overflow-hidden">
        {/* Sidebar - Game Launcher */}
        <div className="w-80 bg-[#18202E] border-r border-[#2A2F3B] flex-shrink-0">
          <GameLauncher games={games} activeGame={activeGame} />
        </div>
        
        {/* Main Content */}
        <div className="flex-grow overflow-auto">
          <div className="h-[280px] relative">
            <div className="absolute inset-0 bg-center bg-cover" style={{ backgroundImage: "url('https://cdn.poehali.dev/files/b274edc4-88b5-4019-bddd-ea9ce5807a6f.png')" }}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#141820] to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8">
              <h1 className="text-4xl font-bold mb-2">World of Warcraft: Luntares</h1>
              <p className="text-gray-300 mb-4 max-w-xl">Отправьтесь в эпическое приключение в мире Азерота. Сражайтесь с могущественными противниками и станьте легендой!</p>
              <Button className="bg-[#F5B642] hover:bg-[#E4A53B] text-black font-bold px-8 py-5">
                ИГРАТЬ
              </Button>
            </div>
          </div>
          
          <div className="container mx-auto px-8 py-6">
            <div className="grid grid-cols-3 gap-6">
              <div className="col-span-2">
                <Tabs defaultValue="news" className="w-full">
                  <TabsList className="bg-[#1E222A] w-full rounded-none justify-start h-12 mb-4">
                    <TabsTrigger 
                      value="news" 
                      className="data-[state=active]:bg-transparent data-[state=active]:text-[#F5B642] data-[state=active]:border-b-2 data-[state=active]:border-[#F5B642] data-[state=active]:rounded-none"
                    >
                      Новости
                    </TabsTrigger>
                    <TabsTrigger 
                      value="events" 
                      className="data-[state=active]:bg-transparent data-[state=active]:text-[#F5B642] data-[state=active]:border-b-2 data-[state=active]:border-[#F5B642] data-[state=active]:rounded-none"
                    >
                      События
                    </TabsTrigger>
                    <TabsTrigger 
                      value="updates" 
                      className="data-[state=active]:bg-transparent data-[state=active]:text-[#F5B642] data-[state=active]:border-b-2 data-[state=active]:border-[#F5B642] data-[state=active]:rounded-none"
                    >
                      Обновления
                    </TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="news" className="space-y-4">
                    <NewsCard 
                      image="https://images.unsplash.com/photo-1594904351111-a072f80b1a71?q=80&w=800" 
                      title="Открытие нового рейда «Цитадель Лунтарес»"
                      date="2 дня назад"
                      content="Сразитесь с древними богами в новом эпическом рейде. Соберите команду из 25 героев и испытайте свои силы в самом сложном испытании этого сезона!"
                    />
                    <NewsCard 
                      image="https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=800" 
                      title="Патч 10.2.5 уже доступен"
                      date="7 дней назад"
                      content="Обновление принесло новые классы, подземелья и рейдовое снаряжение. Ознакомьтесь со списком изменений и подготовьтесь к новым приключениям."
                    />
                  </TabsContent>
                  
                  <TabsContent value="events" className="space-y-4">
                    <NewsCard 
                      image="https://images.unsplash.com/photo-1533738363-b7f9aef128ce?q=80&w=800" 
                      title="Неделя двойного опыта"
                      date="Началось сегодня"
                      content="Всю неделю получайте в два раза больше опыта за выполнение заданий и убийство монстров! Идеальное время для прокачки новых персонажей."
                    />
                  </TabsContent>
                  
                  <TabsContent value="updates" className="space-y-4">
                    <NewsCard 
                      image="https://images.unsplash.com/photo-1618501360319-931d93f72414?q=80&w=800" 
                      title="Обновление клиента"
                      date="Вчера"
                      content="Исправлены критические ошибки с интерфейсом и значительно улучшена производительность клиента на всех поддерживаемых устройствах."
                    />
                  </TabsContent>
                </Tabs>
              </div>
              
              <div className="space-y-6">
                <div className="bg-[#1E222A] rounded-lg p-5">
                  <h3 className="text-xl font-bold mb-4">Статус серверов</h3>
                  <div className="space-y-3">
                    <ServerStatus name="Luntares PvP" status="online" population="Высокая" type="PvP" />
                    <ServerStatus name="Chronos PvE" status="online" population="Средняя" type="PvE" />
                    <ServerStatus name="Nordheim RP" status="maintenance" population="Низкая" type="RP" />
                  </div>
                </div>
                
                <div className="bg-[#1E222A] rounded-lg p-5">
                  <h3 className="text-xl font-bold mb-4">Персонажи</h3>
                  <div className="space-y-3">
                    <div className="flex items-center p-2 hover:bg-[#252A35] rounded cursor-pointer">
                      <div className="w-10 h-10 bg-[#252A35] rounded-full flex items-center justify-center mr-3 text-[#F5B642] font-bold">
                        <span className="text-xs">90</span>
                      </div>
                      <div>
                        <p className="font-medium">Архимаг</p>
                        <p className="text-xs text-gray-400">Маг · Luntares PvP</p>
                      </div>
                    </div>
                    <div className="flex items-center p-2 hover:bg-[#252A35] rounded cursor-pointer">
                      <div className="w-10 h-10 bg-[#252A35] rounded-full flex items-center justify-center mr-3 text-[#F5B642] font-bold">
                        <span className="text-xs">85</span>
                      </div>
                      <div>
                        <p className="font-medium">Громодробитель</p>
                        <p className="text-xs text-gray-400">Воин · Chronos PvE</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
