import { useContext } from 'react';
import { ControlsContext } from '../context/controlsContext';

export const useControlsContext = () => {
  const ctx = useContext(ControlsContext);
  return ctx;
};
