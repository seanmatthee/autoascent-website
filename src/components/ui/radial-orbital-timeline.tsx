"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export interface TimelineItem {
  id: number;
  title: string;
  date: string;
  content: string;
  category: string;
  icon: React.ElementType;
  relatedIds: number[];
  status: "completed" | "in-progress" | "pending";
  energy: number;
}

interface RadialOrbitalTimelineProps {
  timelineData: TimelineItem[];
}

const RADIUS = 200;
// Start at the top (270°) so item 0 sits at 12 o'clock
const ROTATION_OFFSET = 270;

function getNodePosition(index: number, total: number) {
  const angle = ((index / total) * 360 + ROTATION_OFFSET) % 360;
  const radian = (angle * Math.PI) / 180;
  return {
    x: RADIUS * Math.cos(radian),
    y: RADIUS * Math.sin(radian),
  };
}

export default function RadialOrbitalTimeline({ timelineData }: RadialOrbitalTimelineProps) {
  const [expandedItems, setExpandedItems] = useState<Record<number, boolean>>({});
  const [activeNodeId, setActiveNodeId] = useState<number | null>(null);

  const openItem = (id: number) => {
    setExpandedItems((prev) => {
      const newState: Record<number, boolean> = {};
      Object.keys(prev).forEach((key) => { newState[parseInt(key)] = false; });
      newState[id] = true;
      return newState;
    });
    setActiveNodeId(id);
  };

  const closeItem = (id: number) => {
    setExpandedItems((prev) => ({ ...prev, [id]: false }));
    setActiveNodeId(null);
  };

  const handleNodeClick = (e: React.MouseEvent, id: number) => {
    e.stopPropagation();
    if (expandedItems[id]) {
      closeItem(id);
    } else {
      openItem(id);
    }
  };

  const handleContainerClick = () => {
    setExpandedItems({});
    setActiveNodeId(null);
  };

  const getRelatedItems = (itemId: number) =>
    timelineData.find((item) => item.id === itemId)?.relatedIds ?? [];

  const isRelatedToActive = (itemId: number) => {
    if (!activeNodeId) return false;
    return getRelatedItems(activeNodeId).includes(itemId);
  };

  const getStatusStyles = (status: TimelineItem["status"]) => {
    switch (status) {
      case "completed":   return "text-white bg-black border-white";
      case "in-progress": return "text-black bg-white border-black";
      case "pending":     return "text-white bg-black/40 border-white/50";
      default:            return "text-white bg-black/40 border-white/50";
    }
  };

  return (
    <div
      className="w-full h-[600px] flex items-center justify-center bg-black overflow-hidden"
      onClick={handleContainerClick}
    >
      <div className="relative w-full max-w-4xl h-full flex items-center justify-center">
        <div
          className="absolute w-full h-full flex items-center justify-center"
          style={{ perspective: "1000px" }}
        >
          {/* Centre orb */}
          <div className="absolute w-16 h-16 rounded-full bg-gradient-to-br from-green-400 via-emerald-500 to-teal-500 animate-pulse flex items-center justify-center z-10">
            <div className="absolute w-20 h-20 rounded-full border border-white/20 animate-ping opacity-70" />
            <div className="absolute w-24 h-24 rounded-full border border-white/10 animate-ping opacity-50" style={{ animationDelay: "0.5s" }} />
            <div className="w-8 h-8 rounded-full bg-white/80 backdrop-blur-md" />
          </div>

          {/* Orbit ring */}
          <div className="absolute w-[408px] h-[408px] rounded-full border border-white/10" />

          {timelineData.map((item, index) => {
            const pos = getNodePosition(index, timelineData.length);
            const isExpanded = expandedItems[item.id];
            const isRelated = isRelatedToActive(item.id);
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                className="absolute transition-all duration-300 cursor-pointer"
                style={{
                  transform: `translate(${pos.x}px, ${pos.y}px)`,
                  zIndex: isExpanded ? 200 : 100,
                }}
                onClick={(e) => handleNodeClick(e, item.id)}
              >
                {/* Node circle */}
                <div
                  className={`
                    w-10 h-10 rounded-full flex items-center justify-center border-2
                    transition-all duration-300 transform
                    ${isExpanded
                      ? "bg-white text-black border-white shadow-lg shadow-white/30 scale-150"
                      : isRelated
                      ? "bg-white/50 text-black border-white animate-pulse"
                      : "bg-black text-white border-white/40"}
                  `}
                  style={{ pointerEvents: "none" }}
                >
                  <Icon size={16} />
                </div>

                {/* Label */}
                <div
                  className={`absolute top-12 whitespace-nowrap text-xs font-semibold tracking-wider transition-all duration-300 ${isExpanded ? "text-white" : "text-white/70"}`}
                  style={{ left: "50%", transform: "translateX(-50%)" }}
                >
                  {item.title}
                </div>

                {/* Info card */}
                {isExpanded && (
                  <div onClick={(e) => e.stopPropagation()}>
                    <Card className="absolute top-20 left-1/2 -translate-x-1/2 w-[440px] bg-black/90 backdrop-blur-lg border-white/30 shadow-xl shadow-white/10 overflow-visible text-white">
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-px h-3 bg-white/50" />
                      <CardHeader className="px-8 pt-7 pb-3 text-center">
                        <div className="flex justify-center items-center gap-3">
                          <Badge className={`px-2 text-xs ${getStatusStyles(item.status)}`}>
                            {item.status === "completed" ? "COMPLETE" : item.status === "in-progress" ? "IN PROGRESS" : "PENDING"}
                          </Badge>
                          <span className="text-xs font-mono text-white/50">{item.date}</span>
                        </div>
                        <CardTitle className="text-lg mt-2 text-white">{item.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="px-8 pb-7 text-sm text-white/80 text-center">
                        <p className="leading-relaxed">{item.content}</p>

                        {item.relatedIds.length > 0 && (
                          <div className="mt-5 pt-4 border-t border-white/10">
                            <h4 className="text-xs uppercase tracking-wider font-medium text-white/50 mb-2">Next Steps</h4>
                            <div className="flex flex-wrap gap-1.5 justify-center">
                              {item.relatedIds.map((relId) => {
                                const rel = timelineData.find((i) => i.id === relId);
                                return (
                                  <span
                                    key={relId}
                                    onClick={() => openItem(relId)}
                                    className="flex items-center h-7 px-3 text-xs border border-white/20 text-white/70 rounded cursor-pointer hover:bg-white/10 transition-colors"
                                  >
                                    {rel?.title}
                                    <ArrowRight size={9} className="ml-1 text-white/50" />
                                  </span>
                                );
                              })}
                            </div>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
