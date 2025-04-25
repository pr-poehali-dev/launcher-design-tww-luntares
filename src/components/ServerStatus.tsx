
interface ServerStatusProps {
  name: string;
  status: 'online' | 'offline' | 'maintenance';
  population: string;
  type: string;
}

const ServerStatus = ({ name, status, population, type }: ServerStatusProps) => {
  const statusColor = {
    online: 'bg-green-500',
    offline: 'bg-red-500',
    maintenance: 'bg-yellow-500'
  };
  
  const statusText = {
    online: 'Онлайн',
    offline: 'Офлайн',
    maintenance: 'Тех. работы'
  };

  return (
    <div className="py-2 px-3 rounded mb-2 hover:bg-white/5 transition-colors">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <div className={`w-2 h-2 rounded-full ${statusColor[status]} mr-2`}></div>
          <span className="font-medium">{name}</span>
        </div>
        <span className="text-xs text-gray-400">{statusText[status]}</span>
      </div>
      <div className="flex justify-between mt-1 text-xs text-gray-400">
        <span>Тип: {type}</span>
        <span>Популяция: {population}</span>
      </div>
    </div>
  );
};

export default ServerStatus;
