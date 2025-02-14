"use client";

import { createContext, useContext, useState } from "react";

// Create a context for managing reservation dates
const ReservationContext = createContext();

const initialState = { from: undefined, to: undefined };

// Context provider component for managing reservation date range
function ReservationProvider({ children }) {
  const [range, setRange] = useState(initialState);
  const resetRange = () => setRange(initialState);

  return (
    <ReservationContext.Provider value={{ range, setRange, resetRange }}>
      {children}
    </ReservationContext.Provider>
  );
}

// Custom hook for accessing the reservation context
function useReservation() {
  const context = useContext(ReservationContext);
  if (context === undefined)
    throw new Error("Context was used outside provider");
  return context;
}

export { ReservationProvider, useReservation };
