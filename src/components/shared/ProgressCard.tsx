import { Progress } from '@/components/ui/progress';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';

type IProgressCard = {
  title: string;
  subtitle: string;
  progress: number;
  buttonText: string;
  buttonLink: string;
};

const ProgressCard = ({
  title,
  subtitle,
  progress,
  buttonLink,
  buttonText,
}: IProgressCard) => {
  return (
    <div className="user-card">
      <div className="flex-center flex-col gap-1">
        <p className="h4-bold text-center">{title}</p>
        <p className="small-regular text-light-3 text-center ">{subtitle}</p>
      </div>
      <div className="flex-center flex-col gap-4 w-full mt-2 mb-3">
        <Progress
          value={progress}
          max={100}
          indicatorColor={'bg-primary'}
          className="gap-2"
        />
      </div>
      <div className="flex justify-start w-full">
        <Link to={buttonLink}>
          <Button type="button" size="sm" className="shad-button_primary px-5">
            {buttonText}
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ProgressCard;
