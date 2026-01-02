import { createContext, useContext, ReactNode, useState } from 'react';

interface ModalContextType {
  isQuickAnalysisOpen: boolean;
  openQuickAnalysis: () => void;
  closeQuickAnalysis: () => void;
  isWebsite3DaysContactOpen: boolean;
  openWebsite3DaysContact: () => void;
  closeWebsite3DaysContact: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [isQuickAnalysisOpen, setIsQuickAnalysisOpen] = useState(false);
  const [isWebsite3DaysContactOpen, setIsWebsite3DaysContactOpen] = useState(false);

  const openQuickAnalysis = () => setIsQuickAnalysisOpen(true);
  const closeQuickAnalysis = () => setIsQuickAnalysisOpen(false);

  const openWebsite3DaysContact = () => setIsWebsite3DaysContactOpen(true);
  const closeWebsite3DaysContact = () => setIsWebsite3DaysContactOpen(false);

  return (
    <ModalContext.Provider value={{
      isQuickAnalysisOpen,
      openQuickAnalysis,
      closeQuickAnalysis,
      isWebsite3DaysContactOpen,
      openWebsite3DaysContact,
      closeWebsite3DaysContact
    }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};