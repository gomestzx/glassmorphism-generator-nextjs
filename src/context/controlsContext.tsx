import { useState, createContext } from 'react';

interface IControlsContext {
  blur: number;
  borderRadius: number;
  trasnparency: number;
  setBlur(e: any): void;
  setBorderRadius(e: any): void;
  setTransparency(e: any): void;
}

interface IProvider {
  children: React.ReactNode;
}

export const ControlsContext = createContext({} as IControlsContext);

export function ControlsProvider({ children }: IProvider) {
  const [blur, setBlur] = useState<number>(0);
  const [borderRadius, setBorderRadius] = useState<number>(20);
  const [trasnparency, setTransparency] = useState<number>(0.15);
  return (
    <ControlsContext.Provider
      value={{
        blur: blur,
        borderRadius: borderRadius,
        trasnparency: trasnparency,
        setBlur,
        setBorderRadius,
        setTransparency
      }}
    >
      {children}
    </ControlsContext.Provider>
  );
}
