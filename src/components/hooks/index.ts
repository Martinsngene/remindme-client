import { useState } from "react";

// Function to handle form display state
export function useShowModal(open: boolean, formType: string) {
  // State management for forms
  const [displayModal, setDisplayModal] = useState({
    open: false,
    form: "",
  });

  setDisplayModal({
    open: open,
    form: formType,
  });

  return displayModal;
}
