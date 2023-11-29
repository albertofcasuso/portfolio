import { useState } from 'react';

export function useModal() {
  const [open, setOpen] = useState(false);
  const [modalState, setModalState] = useState<any>();

  const openModal = (state: any) => {
    setOpen(() => true);
    if (state) {
      setModalState(state);
    }
  };

  const closeModal = () => {
    setOpen(() => false);
    setModalState(null);
  };

  return { openModal, closeModal, open, modalState };
}
