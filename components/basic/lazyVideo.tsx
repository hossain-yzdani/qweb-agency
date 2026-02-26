"use client";

import { useEffect, useRef, useState, forwardRef } from "react";

type Props = {
  src: string;
  poster: string;
  radius: string;
};

const LazyVideo = forwardRef<HTMLVideoElement, Props>(({ src, poster, radius }, ref) => {
  const internalRef = useRef<HTMLVideoElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const current = internalRef.current;
    if (!current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(current);

    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={(el) => {
        internalRef.current = el;
        if (typeof ref === "function") ref(el);
        else if (ref) (ref as React.MutableRefObject<HTMLVideoElement | null>).current = el;
      }}
      controls
      preload="none"
      poster={poster}
      className={`rounded-${radius}`}
      >
      {shouldLoad && <source src={src} type="video/mp4" />}
    </video>
  );
});

LazyVideo.displayName = "LazyVideo";

export default LazyVideo;