"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import MaterialIcon from "../ui/Materialcon";

interface CanvasWrapperProps {
  children: React.ReactNode;
  templateName: string;
  zoom: number;
  setZoom: (zoom: number | ((z: number) => number)) => void;
  controlsColor?: string;
  controlsBg?: string;
  shadowColor?: string;
  canvasBgClass?: string;
}

export default function CanvasWrapper({
  children,
  templateName,
  zoom,
  setZoom,
  controlsColor = "text-primary",
  controlsBg = "bg-white",
  shadowColor = "rgba(0,0,0,1)",
  canvasBgClass = "bg-[#F0F2F5]"
}: CanvasWrapperProps) {
  const [isPanning, setIsPanning] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const onZoomIn = useCallback(() => setZoom((z) => Math.min(z + 10, 200)), [setZoom]);
  const onZoomOut = useCallback(() => setZoom((z) => Math.max(z - 10, 25)), [setZoom]);

  const fitToScreen = useCallback(() => {
    if (!containerRef.current) return;
    const containerWidth = containerRef.current.clientWidth;
    const containerHeight = containerRef.current.clientHeight;

    // Leave some padding around the page (e.g. 48px)
    const padding = 48;
    const availableWidth = containerWidth - padding;
    const availableHeight = containerHeight - padding;

    // A4 dimensions in pixels at 96 dpi
    const a4Width = 794;
    const a4Height = 1123;

    const scaleX = availableWidth / a4Width;
    const scaleY = availableHeight / a4Height;
    const scale = Math.min(scaleX, scaleY);
    
    const fitZoom = Math.max(25, Math.min(200, Math.round(scale * 100)));
    setZoom(fitZoom);
    setPos({ x: 0, y: 0 }); // reset pan position
  }, [setZoom]);

  const onMouseDown = (e: React.MouseEvent) => {
    // Prevent panning when clicking buttons or controls
    const target = e.target as HTMLElement;
    if (target.closest("button") || target.closest(".controls-panel")) {
      return;
    }
    // Pan with left click (0) or middle mouse button (1)
    if (e.button === 0 || e.button === 1) {
      setIsPanning(true);
      e.preventDefault();
    }
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isPanning) return;
      setPos(prev => ({
        x: prev.x + e.movementX,
        y: prev.y + e.movementY
      }));
    };

    const handleMouseUp = () => setIsPanning(false);

    if (isPanning) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isPanning]);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (e.ctrlKey) {
        e.preventDefault();
        if (e.deltaY < 0) onZoomIn();
        else onZoomOut();
      } else if (!isPanning) {
        // Allow vertical/horizontal pan with scroll wheel/trackpad
        setPos(prev => ({
          x: prev.x - e.deltaX,
          y: prev.y - e.deltaY
        }));
      }
    };
    
    const container = containerRef.current;
    if (container) {
      container.addEventListener("wheel", handleWheel, { passive: false });
    }
    return () => {
      if (container) {
        container.removeEventListener("wheel", handleWheel);
      }
    };
  }, [onZoomIn, onZoomOut, isPanning]);

  useEffect(() => {
    // Run fit to screen on mount, after a short timeout to make sure container is measured correctly
    const timer = setTimeout(() => {
      fitToScreen();
    }, 150);
    
    window.addEventListener("resize", fitToScreen);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", fitToScreen);
    };
  }, [fitToScreen]);

  useEffect(() => {
    if (!containerRef.current || !contentRef.current) return;

    containerRef.current.style.cursor = isPanning ? "grabbing" : "grab";
    contentRef.current.style.transform = `translate(${pos.x}px, ${pos.y}px) scale(${zoom / 100})`;
    contentRef.current.style.transformOrigin = "center center";
    contentRef.current.style.transition = isPanning ? "none" : "transform 0.1s ease-out";
  }, [isPanning, pos.x, pos.y, zoom]);

  const resetView = () => {
    setPos({ x: 0, y: 0 });
    setZoom(100);
  };

  return (
    <section 
      ref={containerRef}
      className={`hidden lg:flex flex-col grow ${canvasBgClass} relative overflow-hidden canvas-bg print:flex print:bg-white print:overflow-visible print:p-0 canvas-container group`}
      onMouseDown={onMouseDown}
    >
      {/* Canvas Controls */}
      <div className="absolute top-6 left-6 right-6 flex justify-between items-center z-20 print:hidden pointer-events-none">
        <div className={`${controlsBg} px-4 py-2 border-2 border-black shadow-[4px_4px_0px_0px_${shadowColor}] font-bold text-xs uppercase flex gap-4 pointer-events-auto controls-panel`}>
          <span>{templateName}</span>
          <span className={controlsColor}>{zoom}% Zoom</span>
        </div>
        <div className="flex gap-2 pointer-events-auto controls-panel cursor-default">
          <button
            onClick={fitToScreen}
            aria-label="Fit to screen"
            className="p-2 bg-white border-2 border-black hover:bg-surface-container-low transition-colors cursor-pointer flex items-center justify-center"
            title="Fit to Screen"
          >
            <MaterialIcon icon="fit_screen" />
          </button>
          <button
            onClick={resetView}
            aria-label="Reset View"
            className="p-2 bg-white border-2 border-black hover:bg-surface-container-low transition-colors cursor-pointer flex items-center justify-center"
            title="Reset View (100%)"
          >
            <MaterialIcon icon="restart_alt" />
          </button>
          <button
            onClick={onZoomOut}
            aria-label="Zoom out"
            className="p-2 bg-white border-2 border-black hover:bg-surface-container-low transition-colors cursor-pointer flex items-center justify-center"
            title="Zoom Out"
          >
            <MaterialIcon icon="zoom_out" />
          </button>
          <button
            onClick={onZoomIn}
            aria-label="Zoom in"
            className="p-2 bg-white border-2 border-black hover:bg-surface-container-low transition-colors cursor-pointer flex items-center justify-center"
            title="Zoom In"
          >
            <MaterialIcon icon="zoom_in" />
          </button>
        </div>
      </div>

      {/* Canvas Content */}
      <div 
        className="canvas-content-wrapper grow flex items-center justify-center print:p-0 print:block pointer-events-none"
        ref={contentRef}
      >
        <div className="pointer-events-auto shadow-2xl print:shadow-none">
          {children}
        </div>
      </div>

      {/* Panning hint */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/75 text-white text-[10px] px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none uppercase tracking-widest font-bold shadow-lg border border-white/10 print:hidden">
        Drag Canvas to Pan • Ctrl+Scroll or Trackpad Pinch to Zoom
      </div>
    </section>
  );
}
