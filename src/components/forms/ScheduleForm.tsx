'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { format } from 'date-fns';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar as CalendarPicker } from '@/components/ui/calendar';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { toast } from '@/components/ui/use-toast';
import Calendar from '@/components/svgs/Calendar';
import { useState, useEffect } from 'react';

const ScheduleFormSchema = z.object({
  date: z.date({
    required_error: 'A date is required.',
  }),
});

export function ScheduleForm() {
  const form = useForm<z.infer<typeof ScheduleFormSchema>>({
    resolver: zodResolver(ScheduleFormSchema),
  });

  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [timeslots, setTimeslots] = useState([]);

  function onSubmit(data: z.infer<typeof ScheduleFormSchema>) {
    toast({
      title: 'You submitted the following values:',
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }
  async function fetchAvailableTimeslots(selectedDate) {
    try {
      const response = await fetch(
        `/api/timeslots?date=${selectedDate.toISOString().split('T')[0]}`
      );
      const data = await response.json();
      setTimeslots(data.timeslots); // Assuming the API returns an array of timeslots
    } catch (error) {
      console.error('Failed to fetch timeslots:', error);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-9 w-full max-w-5xl"
      >
        <FormField
          control={form.control}
          name="date"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <Popover open={isPopoverOpen}>
                <PopoverTrigger
                  asChild
                  onClick={() => setIsPopoverOpen(!isPopoverOpen)}
                >
                  <FormControl className="shad-input">
                    <Button
                      variant={'outline'}
                      className={cn(
                        'w-full pl-3 text-left font-normal',
                        'text-black dark:text-white'
                      )}
                    >
                      {field.value ? (
                        format(field.value, 'dd.MMMM.yyyy')
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <Calendar className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent
                  className="shad-datepicker w-full"
                  align="start"
                >
                  <CalendarPicker
                    mode="single"
                    selected={field.value}
                    onSelect={selectedDate => {
                      field.onChange(selectedDate);
                      // Close the popover after selecting a date
                      setIsPopoverOpen(false);
                      fetchAvailableTimeslots(selectedDate);
                    }}
                    disabled={date => date < new Date()}
                    initialFocus
                    className="shad-datepicker"
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* <Button type="submit">Submit</Button> */}
      </form>
    </Form>
  );
}
