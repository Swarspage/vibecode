import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { MouseIcon } from 'lucide-react';
import type { Station, StationId } from '../types/desk';

interface DeskHintsProps {
  stations: Station[];
  hovered: StationId | null;
  showScrollHint: boolean;
}

export function DeskHints({ stations, hovered, showScrollHint }: DeskHintsProps) {
  const hoveredStation = stations.find((station) => station.id === hovered) ?? null;

  return (
    <>
      <AnimatePresence>
        {hoveredStation ?
        <motion.div
          key={hoveredStation.id}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 6 }}
          transition={{ duration: 0.16, ease: 'easeOut' }}
          className="pointer-events-none fixed bottom-7 left-1/2 z-30 -translate-x-1/2">
          
            <p className="rounded-full border border-paper/15 bg-walnut-950/85 px-4 py-2 font-mono text-[11px] uppercase tracking-wide2 text-paper backdrop-blur-sm">
              {hoveredStation.object} — click to pick up
            </p>
          </motion.div> :
        null}
      </AnimatePresence>

      <AnimatePresence>
        {showScrollHint && !hoveredStation ?
        <motion.div
          key="scroll-hint"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="pointer-events-none fixed bottom-7 left-1/2 z-30 flex -translate-x-1/2 items-center gap-2.5 text-paper-muted">
          
            <MouseIcon className="h-4 w-4" aria-hidden="true" />
            <motion.span
            animate={{ opacity: [0.45, 1, 0.45] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: 'linear' }}
            className="font-mono text-[11px] uppercase tracking-wide2">
            
              Scroll to travel down the desk
            </motion.span>
          </motion.div> :
        null}
      </AnimatePresence>
    </>);

}