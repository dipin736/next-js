import React, { useState } from 'react';
import useDatePickerStore from '../store/useDatePickerStore';
import { format } from 'date-fns';

const recurrenceTypes = ['Daily', 'Weekly', 'Monthly', 'Yearly'];

const IndexPage = () => {
  const {
    startDate,
    endDate,
    recurrenceType,
    recurrenceInterval,
    specificDays,
    nthDayOfMonth,
    setStartDate,
    setEndDate,
    setRecurrenceType,
    setRecurrenceInterval,
    setSpecificDays,
    setNthDayOfMonth,
  } = useDatePickerStore();

  const [previewDates, setPreviewDates] = useState<string[]>([]);

  const handlePreviewDates = () => {

    const dates = generatePreviewDates();
    setPreviewDates(dates);
  };

  const generatePreviewDates = () => {
    let dates = [];
    const baseDate = new Date(startDate || Date.now());

    for (let i = 0; i < 5; i++) {
      let newDate = new Date(baseDate);
      newDate.setDate(baseDate.getDate() + i * recurrenceInterval);
      dates.push(format(newDate, 'yyyy-MM-dd'));
    }
    return dates;
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Recurring Date Picker</h1>

      <div className="mb-4">
        <label className="block font-medium">Start Date</label>
        <input
          type="date"
          value={startDate || ''}
          onChange={(e) => setStartDate(e.target.value)}
          className="border p-2 rounded w-full"
        />
      </div>

      <div className="mb-4">
        <label className="block font-medium">End Date</label>
        <input
          type="date"
          value={endDate || ''}
          onChange={(e) => setEndDate(e.target.value)}
          className="border p-2 rounded w-full"
        />
      </div>

      <div className="mb-4">
        <label className="block font-medium">Recurrence Type</label>
        <select
          value={recurrenceType}
          onChange={(e) => setRecurrenceType(e.target.value)}
          className="border p-2 rounded w-full"
        >
          {recurrenceTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="block font-medium">Recurrence Interval (Every X {recurrenceType})</label>
        <input
          type="number"
          min="1"
          value={recurrenceInterval}
          onChange={(e) => setRecurrenceInterval(Number(e.target.value))}
          className="border p-2 rounded w-full"
        />
      </div>

      {recurrenceType === 'Weekly' && (
        <div className="mb-4">
          <label className="block font-medium">Specific Days of the Week</label>
          <div className="flex space-x-2">
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
              <button
                key={day}
                className={`p-2 border rounded ${specificDays.includes(day) ? 'bg-blue-500 text-white' : 'bg-white'}`}
                onClick={() =>
                  setSpecificDays(
                    specificDays.includes(day)
                      ? specificDays.filter((d) => d !== day)
                      : [...specificDays, day]
                  )
                }
              >
                {day}
              </button>
            ))}
          </div>
        </div>
      )}

      {recurrenceType === 'Monthly' && (
        <div className="mb-4">
          <label className="block font-medium">Nth Day of the Month</label>
          <input
            type="number"
            min="1"
            max="31"
            value={nthDayOfMonth || ''}
            onChange={(e) => setNthDayOfMonth(Number(e.target.value))}
            className="border p-2 rounded w-full"
          />
        </div>
      )}

      <button onClick={handlePreviewDates} className="bg-blue-500 text-white p-2 rounded">
        Preview Recurring Dates
      </button>

      <div className="mt-4">
        <h2 className="text-xl font-semibold mb-2">Preview</h2>
        <div className="border p-4 rounded">
          {previewDates.length > 0 ? (
            previewDates.map((date, index) => <div key={index}>{date}</div>)
          ) : (
            <p>No preview dates available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
