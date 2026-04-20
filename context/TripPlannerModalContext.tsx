"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import TripPlannerModal from "@/components/common/TripPlannerModal";

type TripPlannerModalContextValue = {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
};

const TripPlannerModalContext = createContext<
  TripPlannerModalContextValue | undefined
>(undefined);

export function TripPlannerModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = useCallback(() => setIsOpen(true), []);
  const closeModal = useCallback(() => setIsOpen(false), []);

  const contextValue = useMemo(
    () => ({ isOpen, openModal, closeModal }),
    [isOpen, openModal, closeModal],
  );

  return (
    <TripPlannerModalContext.Provider value={contextValue}>
      {children}
      <TripPlannerModal isOpen={isOpen} onClose={closeModal} />
    </TripPlannerModalContext.Provider>
  );
}

export function useTripPlannerModal() {
  const context = useContext(TripPlannerModalContext);
  if (!context) {
    throw new Error(
      "useTripPlannerModal must be used within TripPlannerModalProvider.",
    );
  }
  return context;
}
