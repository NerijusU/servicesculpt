type IBasicCard = {
  title: string;
  subtitle: string;
};

const BasicCard = ({ title, subtitle }: IBasicCard) => {
  return (
    <div className="user-card">
      <div className="flex-center flex-col gap-1">
        <p className="h4-bold text-center">{title}</p>
        <p className="small-regular text-light-3 text-center ">{subtitle}</p>
      </div>
    </div>
  );
};

export default BasicCard;
