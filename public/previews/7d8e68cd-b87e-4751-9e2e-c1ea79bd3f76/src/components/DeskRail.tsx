import React from 'react';
import type { Station } from '../types/desk';

interface DeskRailProps {
  stations: Station[];
  activeIndex: number;
  progress: number;
  onJump: (index: number) => void;
}

export function DeskRail({ stations, activeIndex, progress, onJump }: DeskRailProps) {
  return (
    <nav
      aria-label="Desk sections"
      className="pointer-events-auto fixed right-5 top-1/2 z-30 hidden -translate-y-1/2 md:block">
      
      <ol className="relative flex flex-col gap-6 pl-5">
        <span
          aria-hidden="true"
          className="absolute left-[3px] top-1 h-[calc(100%-0.5rem)] w-px bg-paper/15" />
        
        <span
          aria-hidden="true"
          className="absolute left-[3px] top-1 w-px origin-top bg-ember"
          style={{ height: `calc((100% - 0.5rem) * ${progress})` }} />
        
        {stations.map((station, index) => {
          const active = index === activeIndex;
          return (
            <li key={station.id} className="relative">
              <button
                type="button"
                onClick={() => onJump(index)}
                aria-current={active ? 'true' : undefined}
                className="group flex items-center gap-3 focus:outline-none">
                
                <span
                  aria-hidden="true"
                  className={`absolute -left-5 h-[7px] w-[7px] rounded-full transition-colors duration-150 ease-out ${
                  active ? 'bg-ember' : 'bg-paper/30 group-hover:bg-paper/70'}`
                  } />
                
                <span
                  className={`whitespace-nowrap text-right font-mono text-[10px] uppercase tracking-wide2 transition-colors duration-150 ease-out ${
                  active ?
                  'text-paper' :
                  'text-paper/35 group-hover:text-paper/80 group-focus-visible:text-paper'}`
                  }>
                  
                  {station.object}
                </span>
              </button>
            </li>);

        })}
      </ol>
    </nav>);

}