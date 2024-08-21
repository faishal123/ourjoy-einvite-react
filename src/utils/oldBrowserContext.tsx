import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

export const oldBrowserContext = createContext({
  isOldBrowser: false,
});

export const useOldBrowser = () => {
  const { isOldBrowser } = useContext(oldBrowserContext);
  return { isOldBrowser };
};

export const OldBrowserProvider = ({ children }: { children: ReactNode }) => {
  const [isOldBrowser, setIsOldBrowser] = useState(false);
  useEffect(() => {
    const topMostContainerElement = document.getElementById("topMostContainer");
    if (topMostContainerElement) {
      setIsOldBrowser(!topMostContainerElement?.scrollTo);
    }
  }, []);
  return (
    <oldBrowserContext.Provider value={{ isOldBrowser }}>
      {children}
    </oldBrowserContext.Provider>
  );
};
