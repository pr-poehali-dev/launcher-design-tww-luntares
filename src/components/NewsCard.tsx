
interface NewsCardProps {
  image: string;
  title: string;
  date: string;
  content: string;
}

const NewsCard = ({ image, title, date, content }: NewsCardProps) => {
  return (
    <div className="flex gap-4 bg-[#1E222A] rounded-lg overflow-hidden hover:shadow-lg transition-shadow p-4">
      <div className="flex-shrink-0 w-40 h-28 overflow-hidden rounded">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110" 
        />
      </div>
      
      <div className="flex-grow">
        <div className="flex justify-between items-start mb-1">
          <h3 className="text-lg font-bold text-white">{title}</h3>
          <span className="text-xs text-gray-400">{date}</span>
        </div>
        <p className="text-gray-300 text-sm">{content}</p>
        <div className="mt-2">
          <a href="#" className="text-[#F5B642] text-sm hover:underline">Подробнее</a>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
