import { useState, useEffect, useRef } from "react";

export const useRefreshTimer = (refreshMs: number, isFetching: boolean) => {
  const [remaining, setRemaining] = useState(Math.ceil(refreshMs / 1000));
  const nextRefreshTime = useRef(Date.now() + refreshMs);

  useEffect(() => {
    const interval = setInterval(() => {
      const secondsRemaining = Math.max(
        0,
        Math.ceil((nextRefreshTime.current - Date.now()) / 1000)
      );
      setRemaining(secondsRemaining);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (isFetching) {
      nextRefreshTime.current = Date.now() + refreshMs;
      setRemaining(Math.ceil(refreshMs / 1000));
    }
  }, [isFetching, refreshMs]);

  return remaining;
};
