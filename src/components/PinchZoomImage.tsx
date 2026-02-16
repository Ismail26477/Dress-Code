import { useState, useRef, useCallback } from "react";

interface PinchZoomImageProps {
  src: string;
  alt: string;
  className?: string;
}

const PinchZoomImage = ({ src, alt, className = "" }: PinchZoomImageProps) => {
  const [scale, setScale] = useState(1);
  const [translate, setTranslate] = useState({ x: 0, y: 0 });
  const [isZoomed, setIsZoomed] = useState(false);
  const lastDistance = useRef(0);
  const lastCenter = useRef({ x: 0, y: 0 });
  const isDragging = useRef(false);
  const lastTouch = useRef({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const getDistance = (t1: React.Touch, t2: React.Touch) =>
    Math.hypot(t2.clientX - t1.clientX, t2.clientY - t1.clientY);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    if (e.touches.length === 2) {
      e.preventDefault();
      lastDistance.current = getDistance(e.touches[0], e.touches[1]);
      lastCenter.current = {
        x: (e.touches[0].clientX + e.touches[1].clientX) / 2,
        y: (e.touches[0].clientY + e.touches[1].clientY) / 2,
      };
    } else if (e.touches.length === 1 && scale > 1) {
      isDragging.current = true;
      lastTouch.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    }
  }, [scale]);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (e.touches.length === 2) {
      e.preventDefault();
      const dist = getDistance(e.touches[0], e.touches[1]);
      const newScale = Math.min(4, Math.max(1, scale * (dist / lastDistance.current)));
      lastDistance.current = dist;
      setScale(newScale);
      setIsZoomed(newScale > 1);
      if (newScale <= 1) setTranslate({ x: 0, y: 0 });
    } else if (e.touches.length === 1 && isDragging.current && scale > 1) {
      const dx = e.touches[0].clientX - lastTouch.current.x;
      const dy = e.touches[0].clientY - lastTouch.current.y;
      lastTouch.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      setTranslate((prev) => ({ x: prev.x + dx, y: prev.y + dy }));
    }
  }, [scale]);

  const handleTouchEnd = useCallback(() => {
    isDragging.current = false;
    if (scale <= 1.1) {
      setScale(1);
      setTranslate({ x: 0, y: 0 });
      setIsZoomed(false);
    }
  }, [scale]);

  const handleDoubleTap = useCallback(() => {
    if (scale > 1) {
      setScale(1);
      setTranslate({ x: 0, y: 0 });
      setIsZoomed(false);
    } else {
      setScale(2.5);
      setIsZoomed(true);
    }
  }, [scale]);

  // Double tap detection
  const lastTap = useRef(0);
  const handleTap = useCallback((e: React.TouchEvent) => {
    if (e.touches.length > 1) return;
    const now = Date.now();
    if (now - lastTap.current < 300) {
      handleDoubleTap();
    }
    lastTap.current = now;
  }, [handleDoubleTap]);

  return (
    <div
      ref={containerRef}
      className={`overflow-hidden touch-none ${className}`}
      onTouchStart={(e) => { handleTap(e); handleTouchStart(e); }}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-100"
        style={{
          transform: `scale(${scale}) translate(${translate.x / scale}px, ${translate.y / scale}px)`,
        }}
        draggable={false}
      />
      {isZoomed && (
        <div className="absolute top-3 right-3 bg-background/80 backdrop-blur-sm text-xs px-2 py-1 rounded-full text-muted-foreground">
          {Math.round(scale * 100)}%
        </div>
      )}
    </div>
  );
};

export default PinchZoomImage;
