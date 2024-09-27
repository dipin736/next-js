
import useDatePickerStore from '../store/useDatePickerStore';
import { useState } from 'react';

const DatePicker = () => {
  const { setStartDate, setEndDate } = useDatePickerStore();
  const [startDate, updateStartDate] = useState('');
  const [endDate, updateEndDate] = useState('');

  const handleStartDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateStartDate(e.target.value);
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateEndDate(e.target.value);
    setEndDate(e.target.value);
  };

  return (
    <div className="flex flex-col space-y-2">
      <label>Start Date</label>
      <input
        type="date"
        value={startDate}
        onChange={handleStartDateChange}
        className="border p-2"
      />
      <label>End Date</label>
      <input
        type="date"
        value={endDate}
        onChange={handleEndDateChange}
        className="border p-2"
      />
    </div>
  );
};

export default DatePicker;
