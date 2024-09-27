// store/useDatePickerStore.ts
import { create } from 'zustand';

// Define the type for the state and actions
interface DatePickerState {
  startDate: string | null;
  endDate: string | null;
  setStartDate: (date: string) => void;
  setEndDate: (date: string) => void;
  recurrenceType: string;
  recurrenceInterval: number;
  specificDays: string[];
  nthDayOfMonth: number | null;
  setRecurrenceType: (type: string) => void;
  setRecurrenceInterval: (interval: number) => void;
  setSpecificDays: (days: string[]) => void;
  setNthDayOfMonth: (nthDay: number | null) => void;
}

const useDatePickerStore = create<DatePickerState>((set) => ({
  startDate: null,
  endDate: null,
  recurrenceType: 'Daily',
  recurrenceInterval: 1,
  specificDays: [],
  nthDayOfMonth: null,
  setStartDate: (date) => set({ startDate: date }),
  setEndDate: (date) => set({ endDate: date }),
  setRecurrenceType: (type) => set({ recurrenceType: type }),
  setRecurrenceInterval: (interval) => set({ recurrenceInterval: interval }),
  setSpecificDays: (days) => set({ specificDays: days }),
  setNthDayOfMonth: (nthDay) => set({ nthDayOfMonth: nthDay }),
}));

export default useDatePickerStore;
