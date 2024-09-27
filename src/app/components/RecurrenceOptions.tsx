// components/RecurrenceOptions.tsx
import useDatePickerStore from '../store/useDatePickerStore';

const RecurrenceOptions = () => {
  const { setRecurrenceType } = useDatePickerStore();

  return (
    <div className="flex space-x-4">
      <button onClick={() => setRecurrenceType('Daily')}>Daily</button>
      <button onClick={() => setRecurrenceType('Weekly')}>Weekly</button>
      <button onClick={() => setRecurrenceType('Monthly')}>Monthly</button>
      <button onClick={() => setRecurrenceType('Yearly')}>Yearly</button>
    </div>
  );
};

export default RecurrenceOptions;
