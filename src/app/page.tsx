"use client"; 
import DatePicker from "./components/DatePicker";
import RecurrenceCustomization from "./components/RecurrenceCustomization";
import RecurrenceOptions from "./components/RecurrenceOptions";
import RecurringPreview from "./components/RecurringPreview";


const Home = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">Recurring Date Picker</h1>
      <DatePicker />
      <RecurrenceOptions />
      <RecurrenceCustomization />
      <RecurringPreview />
    </div>
  );
};

export default Home;
