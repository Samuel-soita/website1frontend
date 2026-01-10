"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface TalkToUsContextType {
  openModal: () => void;
  isOpen: boolean;
  closeModal: () => void;
}

const TalkToUsContext = createContext<TalkToUsContextType | undefined>(undefined);

export function TalkToUsProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <TalkToUsContext.Provider value={{ openModal, isOpen, closeModal }}>
      {children}
    </TalkToUsContext.Provider>
  );
}

export function useTalkToUs() {
  const context = useContext(TalkToUsContext);
  if (context === undefined) {
    throw new Error("useTalkToUs must be used within a TalkToUsProvider");
  }
  return context;
}
