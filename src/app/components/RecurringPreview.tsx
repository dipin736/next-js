// components/RecurringPreview.tsx
import useDatePickerStore from '../store/useDatePickerStore';
import { useEffect, useState } from 'react';
import { format } from 'date-fns';

const RecurringPreview = () => {
  const { startDate, recurrenceType, recurrenceInterval } = useDatePickerStore();
  const [previewDates, setPreviewDates] = useState<string[]>([]);

  useEffect(() => {
    if (startDate) {
      let dates = [];
      let currentDate = new Date(startDate);

      for (let i = 0; i < 10; i++) {
        dates.push(format(currentDate, 'yyyy-MM-dd'));

        if (recurrenceType === 'Daily') {
          currentDate.setDate(currentDate.getDate() + recurrenceInterval);
        } else if (recurrenceType === 'Weekly') {
          currentDate.setDate(currentDate.getDate() + recurrenceInterval * 7);
        } else if (recurrenceType === 'Monthly') {
          currentDate.setMonth(currentDate.getMonth() + recurrenceInterval);
        } else if (recurrenceType === 'Yearly') {
          currentDate.setFullYear(currentDate.getFullYear() + recurrenceInterval);
        }
      }

      setPreviewDates(dates);
    }
  }, [startDate, recurrenceType, recurrenceInterval]);

  return (
    <div>
      <h3>Preview of Recurring Dates:</h3>
      <ul>
        {previewDates.map((date, index) => (
          <li key={index}>{date}</li>
        ))}
      </ul>
    </div>
  );
};

export default RecurringPreview;
