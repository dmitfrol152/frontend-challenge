import { useEffect, useRef, useState } from 'react';

export function useInView(threshold: number) {
  const [isView, setIsView] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsView(entry.isIntersecting);
      },
      { threshold },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  return { isView, ref };
}
