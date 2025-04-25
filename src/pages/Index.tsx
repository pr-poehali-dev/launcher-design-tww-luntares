
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import LauncherHeader from "@/components/LauncherHeader";
import NewsCard from "@/components/NewsCard";
import ServerStatus from "@/components/ServerStatus";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0C1016] to-[#1A1F2C] text-white">
      <LauncherHeader />
      
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Main panel */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="bg-black/40 border-[#9b87f5]/30 backdrop-blur-sm overflow-hidden">
              <div className="h-[300px] bg-[url('https://images.unsplash.com/photo-1624196977757-e1a14a3ba353?q=80&w=2000')] bg-cover bg-center relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h2 className="text-3xl font-bold text-white mb-2">TWW Luntares</h2>
                  <p className="text-[#D6BCFA]">Отправься в легендарное путешествие</p>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <p className="text-sm text-gray-400">Статус загрузки</p>
                    <p className="text-lg font-semibold">Готово к запуску</p>
                  </div>
                  <Button className="bg-[#9b87f5] hover:bg-[#7E69AB] text-white">
                    Играть
                  </Button>
                </div>
                
                <Progress value={100} className="h-2 bg-gray-800" />
                
                <div className="mt-4 flex justify-between text-xs text-gray-400">
                  <span>Версия: 10.2.5</span>
                  <span>100% · 65.2 GB</span>
                </div>
              </div>
            </Card>
            
            <Tabs defaultValue="news" className="w-full">
              <TabsList className="bg-black/40 border-b border-[#9b87f5]/20 w-full rounded-none justify-start px-2 h-12">
                <TabsTrigger value="news" className="data-[state=active]:text-[#9b87f5] data-[state=active]:border-b-2 data-[state=active]:border-[#9b87f5] rounded-none">
                  Новости
                </TabsTrigger>
                <TabsTrigger value="events" className="data-[state=active]:text-[#9b87f5] data-[state=active]:border-b-2 data-[state=active]:border-[#9b87f5] rounded-none">
                  События
                </TabsTrigger>
                <TabsTrigger value="updates" className="data-[state=active]:text-[#9b87f5] data-[state=active]:border-b-2 data-[state=active]:border-[#9b87f5] rounded-none">
                  Обновления
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="news" className="mt-4 space-y-4">
                <NewsCard 
                  image="https://images.unsplash.com/photo-1594904351111-a072f80b1a71?q=80&w=800" 
                  title="Новый рейд «Цитадель Лунтарес»"
                  date="2 дня назад"
                  content="Сразись с древними богами в новом эпическом рейде. Собери команду из 25 героев и испытай свои силы!"
                />
                <NewsCard 
                  image="https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=800" 
                  title="Патч 10.2.5 уже доступен"
                  date="7 дней назад"
                  content="Обновление принесло новые классы, подземелья и рейдовое снаряжение. Ознакомьтесь со списком изменений."
                />
              </TabsContent>
              
              <TabsContent value="events" className="mt-4 space-y-4">
                <NewsCard 
                  image="https://images.unsplash.com/photo-1533738363-b7f9aef128ce?q=80&w=800" 
                  title="Неделя двойного опыта"
                  date="Началось сегодня"
                  content="Всю неделю получай в два раза больше опыта за задания и убийство монстров!"
                />
              </TabsContent>
              
              <TabsContent value="updates" className="mt-4 space-y-4">
                <NewsCard 
                  image="https://images.unsplash.com/photo-1618501360319-931d93f72414?q=80&w=800" 
                  title="Обновление клиента"
                  date="Вчера"
                  content="Исправлены ошибки с интерфейсом и улучшена производительность."
                />
              </TabsContent>
            </Tabs>
          </div>
          
          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="bg-black/40 border-[#9b87f5]/30 backdrop-blur-sm p-4">
              <h3 className="text-xl font-bold mb-4">Выбор реалма</h3>
              <ServerStatus name="Luntares PvP" status="online" population="Высокая" type="PvP" />
              <ServerStatus name="Chronos PvE" status="online" population="Средняя" type="PvE" />
              <ServerStatus name="Nordheim RP" status="maintenance" population="Низкая" type="RP" />
            </Card>
            
            <Card className="bg-black/40 border-[#9b87f5]/30 backdrop-blur-sm p-4">
              <h3 className="text-xl font-bold mb-4">Персонажи</h3>
              <div className="space-y-3">
                <div className="flex items-center p-2 hover:bg-white/5 rounded">
                  <div className="w-10 h-10 bg-[#6E59A5] rounded-full flex items-center justify-center mr-3">
                    <span className="text-xs">90</span>
                  </div>
                  <div>
                    <p className="font-medium">Архимаг</p>
                    <p className="text-xs text-gray-400">Маг · Luntares PvP</p>
                  </div>
                </div>
                <div className="flex items-center p-2 hover:bg-white/5 rounded">
                  <div className="w-10 h-10 bg-[#7E69AB] rounded-full flex items-center justify-center mr-3">
                    <span className="text-xs">85</span>
                  </div>
                  <div>
                    <p className="font-medium">Громодробитель</p>
                    <p className="text-xs text-gray-400">Воин · Chronos PvE</p>
                  </div>
                </div>
              </div>
            </Card>
            
            <Card className="bg-black/40 border-[#9b87f5]/30 backdrop-blur-sm p-4">
              <h3 className="text-xl font-bold mb-4">Социальные сети</h3>
              <div className="grid grid-cols-3 gap-2">
                <Button variant="outline" size="icon" className="border-[#9b87f5]/30 hover:bg-[#9b87f5]/20">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
                </Button>
                <Button variant="outline" size="icon" className="border-[#9b87f5]/30 hover:bg-[#9b87f5]/20">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </Button>
                <Button variant="outline" size="icon" className="border-[#9b87f5]/30 hover:bg-[#9b87f5]/20">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
