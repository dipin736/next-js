// components/RecurrenceCustomization.tsx
import useDatePickerStore from '../store/useDatePickerStore';

const RecurrenceCustomization = () => {
  const { recurrenceType, recurrenceInterval, setRecurrenceInterval } = useDatePickerStore();

  return (
    <div>
      <label>Every</label>
      <input
        type="number"
        value={recurrenceInterval}
        onChange={(e) => setRecurrenceInterval(Number(e.target.value))}
        className="border p-2"
      />
      <span>{recurrenceType === 'Daily' ? 'days' : recurrenceType === 'Weekly' ? 'weeks' : recurrenceType === 'Monthly' ? 'months' : 'years'}</span>
    </div>
  );
};

export default RecurrenceCustomization;
