import type { BookingDate, TimeSlot } from "@/types/booking";

const HOURS = Array.from({ length: 15 }, (_, i) => i + 8); // 08..22

function buildSlots(dayIndex: number): TimeSlot[] {
  return HOURS.map((h, slotIndex) => {
    const seed = (dayIndex * 7 + slotIndex) % 10;
    let status: TimeSlot["status"] = "available";
    if (seed === 2 || seed === 5) status = "booked";
    else if (seed === 8) status = "unavailable";
    return {
      time: `${String(h).padStart(2, "0")}:00`,
      status,
    };
  });
}

export function generateMockBookingDates(): BookingDate[] {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return Array.from({ length: 7 }, (_, i) => {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    return { date, slots: buildSlots(i) };
  });
}

export const mockBookingDates = generateMockBookingDates();
