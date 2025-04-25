
import { Card } from "@/components/ui/card";

interface NewsCardProps {
  image: string;
  title: string;
  date: string;
  content: string;
}

const NewsCard = ({ image, title, date, content }: NewsCardProps) => {
  return (
    <Card className="overflow-hidden bg-black/40 border-[#9b87f5]/30 backdrop-blur-sm hover:bg-black/50 transition-colors cursor-pointer">
      <div className="flex flex-col sm:flex-row">
        <div className="w-full sm:w-1/3 h-[120px] sm:h-auto">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
        <div className="p-4 w-full sm:w-2/3">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-lg font-bold text-white">{title}</h3>
            <span className="text-xs text-gray-400">{date}</span>
          </div>
          <p className="text-gray-300 text-sm">{content}</p>
          <div className="mt-2">
            <span className="text-[#9b87f5] text-sm">Подробнее →</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default NewsCard;
