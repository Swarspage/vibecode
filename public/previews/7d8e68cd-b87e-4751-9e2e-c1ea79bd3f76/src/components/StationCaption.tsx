import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRightIcon } from 'lucide-react';
import type { Station } from '../types/desk';

interface StationCaptionProps {
  station: Station;
  onOpen: (station: Station) => void;
}

export function StationCaption({ station, onOpen }: StationCaptionProps) {
  const isArrival = station.id === 'arrival';

  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.28, ease: [0.23, 1, 0.32, 1] }}
      className="pointer-events-auto max-w-[34rem] rounded-2xl border border-paper/10 bg-walnut-950/72 p-6 backdrop-blur-md sm:p-7">
      
      <p className="font-mono text-[11px] uppercase tracking-wide2 text-ember">
        {station.kicker}
      </p>
      <h2
        className={
        isArrival ?
        'mt-3 font-display text-5xl leading-[1.05] text-paper sm:text-6xl lg:text-7xl' :
        'mt-3 font-display text-4xl leading-[1.08] text-paper sm:text-5xl lg:text-6xl'
        }>
        
        {station.title}
      </h2>
      <p className="mt-4 max-w-[30rem] text-[15px] leading-relaxed text-paper-dim">
        {station.blurb}
      </p>

      {station.detail ?
      <button
        type="button"
        onClick={() => onOpen(station)}
        className="group mt-6 inline-flex items-center gap-2 rounded-full border border-paper/25 bg-walnut-900/70 px-5 py-2.5 text-sm font-medium text-paper backdrop-blur-sm transition-colors duration-150 ease-out hover:border-ember hover:bg-ember hover:text-walnut-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-ember focus-visible:ring-offset-2 focus-visible:ring-offset-walnut-950">
        
          Pick up the {station.object.toLowerCase()}
          <ArrowUpRightIcon
          className="h-4 w-4 transition-transform duration-150 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          aria-hidden="true" />
        
        </button> :
      null}
    </motion.article>);

}