
import type { ShiftType } from '@/types/database';

export const getCurrentShift = (): ShiftType => {
  const hour = new Date().getHours();
  return hour >= 6 && hour < 18 ? 'day' : 'night';
};

export const getShiftLabel = (shift: ShiftType): string => {
  return shift === 'day' ? 'Day Shift (6:00 AM - 6:00 PM)' : 'Night Shift (6:00 PM - 6:00 AM)';
};

export const getShiftTime = (shift: ShiftType): string => {
  return shift === 'day' ? '6:00 AM - 6:00 PM' : '6:00 PM - 6:00 AM';
};