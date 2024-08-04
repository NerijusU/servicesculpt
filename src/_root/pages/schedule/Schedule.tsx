import { ScheduleForm } from '@/components/forms/ScheduleForm';
import Loader from '@/components/shared/Loader';
import React from 'react';

const Schedule = () => {
  const isLoading = false;
  if (isLoading)
    return (
      <div className="flex-center w-full h-full">
        <Loader />
      </div>
    );

  return (
    // <div className="flex flex-1 w-full">
    //   <div className="common-container">
    //     <div className="flex flex-col  justify-start w-full md:pb-0 pb-4">
    //       <h2 className="h3-bold md:h2-bold text-left w-full">
    //         {`Select a day`}
    //       </h2>
    //       <p className="text-light-3 w-full text-left">
    //         {'to see available slots'}
    //       </p>
    //     </div>
    //     <ScheduleForm />
    //   </div>
    // </div>
    <div className="flex flex-1">
      <div className="common-container">
        <div className="max-w-5xl flex-start gap-3 justify-start w-full">
          <img
            src="/assets/icons/calendar.svg"
            alt="create-post"
            width={24}
            height={24}
          />
          <h2 className="h-3-bold md:h2-bold text-left w-full">Schedule</h2>
        </div>
        <ScheduleForm />
      </div>
    </div>
  );
};

export default Schedule;
