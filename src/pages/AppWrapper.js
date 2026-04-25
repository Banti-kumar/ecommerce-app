import App from "../App";
import LoadingScreen from "../components/ui/LoadingScreen";
import React, { useEffect, useState } from "react";

const AppWrapper = () => {
  const [isAppLoading, setIsAppLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAppLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isAppLoading) {
    return <LoadingScreen />;
  }

  return <App />;
};

export default AppWrapper;
