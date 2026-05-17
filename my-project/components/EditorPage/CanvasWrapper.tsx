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

  const onZoomIn = useCallback(() => setZoom((z) => Math.min(z + 10, 200)), [setZoom]);
  const onZoomOut = useCallback(() => setZoom((z) => Math.max(z - 10, 25)), [setZoom]);

  const onMouseDown = (e: React.MouseEvent) => {
    // Pan with middle mouse button or Left click on background
    if (e.button === 1 || (e.button === 0 && e.target === e.currentTarget)) {
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
        // Allow normal vertical scroll to move the canvas if not zooming
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

  const resetView = () => {
    setPos({ x: 0, y: 0 });
    setZoom(100);
  };

  return (
    <section 
      ref={containerRef}
      className={`hidden lg:flex flex-col grow ${canvasBgClass} relative overflow-hidden canvas-bg print:flex print:bg-white print:overflow-visible print:p-0 canvas-container`}
      onMouseDown={onMouseDown}
    >
      {/* Canvas Controls */}
      <div className="absolute top-6 left-6 right-6 flex justify-between items-center z-20 print:hidden pointer-events-none">
        <div className={`${controlsBg} px-4 py-2 border-2 border-black shadow-[4px_4px_0px_0px_${shadowColor}] font-bold text-xs uppercase flex gap-4 pointer-events-auto`}>
          <span>{templateName}</span>
          <span className={controlsColor}>{zoom}% Zoom</span>
        </div>
        <div className="flex gap-2 pointer-events-auto">
          <button
            onClick={resetView}
            aria-label="Reset View"
            className="p-2 bg-white border-2 border-black hover:bg-surface-container-low transition-colors"
            title="Reset View"
          >
            <MaterialIcon icon="restart_alt" />
          </button>
          <button
            onClick={onZoomOut}
            aria-label="Zoom out"
            className="p-2 bg-white border-2 border-black hover:bg-surface-container-low transition-colors"
          >
            <MaterialIcon icon="zoom_out" />
          </button>
          <button
            onClick={onZoomIn}
            aria-label="Zoom in"
            className="p-2 bg-white border-2 border-black hover:bg-surface-container-low transition-colors"
          >
            <MaterialIcon icon="zoom_in" />
          </button>
        </div>
      </div>

      {/* Canvas Content */}
      <div 
        className="grow flex items-center justify-center print:p-0 print:block pointer-events-none"
        style={{
          transform: `translate(${pos.x}px, ${pos.y}px) scale(${zoom / 100})`,
          transformOrigin: "center center",
          transition: isPanning ? "none" : "transform 0.1s ease-out"
        }}
      >
        <div className="pointer-events-auto shadow-2xl">
          {children}
        </div>
      </div>

      {/* Panning hint */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/50 text-white text-[10px] px-3 py-1 rounded-full opacity-0 hover:opacity-100 transition-opacity pointer-events-none uppercase tracking-widest font-bold">
        Hold Middle Click or Drag Background to Pan • Ctrl+Scroll to Zoom
      </div>
    </section>
  );
}
