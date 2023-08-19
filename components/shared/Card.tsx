import "./hero.css"
interface CardProps {
  classNames?: string;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ classNames = '', children}) => {
  return (
    <div className={` w-[300px] h-[400px] bg_gradint text-center  ${classNames}`}>
      {children}
    </div>
  );
};

export default Card;
