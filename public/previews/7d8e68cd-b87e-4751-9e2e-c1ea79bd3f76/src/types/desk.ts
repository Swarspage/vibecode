export type StationId =
'arrival' |
'laptop' |
'notebook' |
'phone' |
'notes' |
'coffee' |
'card';

export interface StationLink {
  label: string;
  href: string;
}

export interface StationMeta {
  label: string;
  value: string;
}

export interface StationDetail {
  heading: string;
  summary: string;
  meta: StationMeta[];
  bullets: string[];
  links: StationLink[];
}

export interface CameraKey {
  position: [number, number, number];
  target: [number, number, number];
}

export interface Station {
  id: StationId;
  /** The physical thing on the desk, e.g. "Notebook" */
  object: string;
  kicker: string;
  title: string;
  blurb: string;
  /** Normalised scroll position, 0 → 1 */
  scroll: number;
  camera: CameraKey;
  detail?: StationDetail;
}