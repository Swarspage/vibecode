import React, { useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { XIcon } from 'lucide-react';
import type { Station } from '../types/desk';

interface ObjectSheetProps {
  station: Station | null;
  onClose: () => void;
}

export function ObjectSheet({ station, onClose }: ObjectSheetProps) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!station) return undefined;
    closeRef.current?.focus();
    const onKey = (event: KeyboardEvent): void => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [station, onClose]);

  return (
    <AnimatePresence>
      {station && station.detail ?
      <motion.div
        key="scrim"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        className="fixed inset-0 z-40 flex justify-end bg-walnut-950/55 backdrop-blur-[2px]"
        onClick={onClose}>
        
          <motion.aside
          key="sheet"
          role="dialog"
          aria-modal="true"
          aria-label={station.detail.heading}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 28 }}
          transition={{ duration: 0.28, ease: [0.23, 1, 0.32, 1] }}
          onClick={(event) => event.stopPropagation()}
          className="relative h-full w-full max-w-[30rem] overflow-y-auto border-l border-paper/12 bg-[#171009] px-7 pb-14 pt-7 sm:px-9">
          
            <div className="flex items-start justify-between gap-6">
              <p className="font-mono text-[11px] uppercase tracking-wide2 text-ember">
                {station.object}
              </p>
              <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              className="-mr-1 -mt-1 rounded-full border border-paper/20 p-2 text-paper-dim transition-colors duration-150 ease-out hover:border-paper/50 hover:text-paper focus:outline-none focus-visible:ring-2 focus-visible:ring-ember">
              
                <XIcon className="h-4 w-4" aria-hidden="true" />
                <span className="sr-only">Put it back down</span>
              </button>
            </div>

            <h3 className="mt-4 font-display text-4xl leading-tight text-paper">
              {station.detail.heading}
            </h3>
            <p className="mt-4 text-[15px] leading-relaxed text-paper-dim">
              {station.detail.summary}
            </p>

            <dl className="mt-8 grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-paper/12 bg-paper/12 sm:grid-cols-3">
              {station.detail.meta.map((item) =>
            <div key={item.label} className="bg-[#1d150d] px-4 py-3">
                  <dt className="font-mono text-[10px] uppercase tracking-wide2 text-paper-muted">
                    {item.label}
                  </dt>
                  <dd className="mt-1.5 text-[13px] leading-snug text-paper">{item.value}</dd>
                </div>
            )}
            </dl>

            <ul className="mt-8 space-y-3.5">
              {station.detail.bullets.map((bullet) =>
            <li key={bullet} className="flex gap-3 text-[15px] leading-relaxed text-paper-dim">
                  <span aria-hidden="true" className="mt-2 h-1 w-4 flex-none bg-ember/70" />
                  {bullet}
                </li>
            )}
            </ul>

            {station.detail.links.length > 0 ?
          <div className="mt-9 flex flex-wrap gap-3">
                {station.detail.links.map((link, index) =>
            <a
              key={link.label}
              href={link.href}
              className={
              index === 0 ?
              'rounded-full bg-ember px-5 py-2.5 text-sm font-medium text-walnut-950 transition-colors duration-150 ease-out hover:bg-paper focus:outline-none focus-visible:ring-2 focus-visible:ring-ember focus-visible:ring-offset-2 focus-visible:ring-offset-[#171009]' :
              'rounded-full border border-paper/25 px-5 py-2.5 text-sm font-medium text-paper transition-colors duration-150 ease-out hover:border-paper/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-ember focus-visible:ring-offset-2 focus-visible:ring-offset-[#171009]'
              }>
              
                    {link.label}
                  </a>
            )}
              </div> :
          null}
          </motion.aside>
        </motion.div> :
      null}
    </AnimatePresence>);

}