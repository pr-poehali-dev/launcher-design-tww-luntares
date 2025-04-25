
interface ServerStatusProps {
  name: string;
  status: "online" | "maintenance" | "high" | "full";
  population: string;
  type: string;
}

const ServerStatus = ({ name, status, population, type }: ServerStatusProps) => {
  const getStatusColor = () => {
    switch (status) {
      case "online":
        return "bg-green-500";
      case "maintenance":
        return "bg-yellow-500";
      case "high":
        return "bg-orange-500";
      case "full":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  const getStatusText = () => {
    switch (status) {
      case "online":
        return "Онлайн";
      case "maintenance":
        return "Тех. работы";
      case "high":
        return "Высокая нагрузка";
      case "full":
        return "Заполнен";
      default:
        return "Неизвестно";
    }
  };

  return (
    <div className="flex items-center justify-between p-3 border border-[#2A2F3B] rounded bg-[#252A35] hover:border-[#F5B642] transition-colors">
      <div className="flex items-center">
        <div className={`w-3 h-3 rounded-full ${getStatusColor()} mr-3`}></div>
        <div>
          <p className="font-medium">{name}</p>
          <p className="text-xs text-gray-400">{type} • {population}</p>
        </div>
      </div>
      <span className="text-xs text-gray-400">{getStatusText()}</span>
    </div>
  );
};

export default ServerStatus;
