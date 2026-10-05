import type { Station } from '../types/desk';

const raw: Omit<Station, 'scroll'>[] = [
{
  id: 'arrival',
  object: 'The desk',
  kicker: 'Ellis Nakamura',
  title: 'Come sit at my desk.',
  blurb:
  'Product designer and front-end engineer in Lisbon. Everything I have shipped this year is somewhere on this surface — scroll to travel down it.',
  camera: {
    position: [0.2, 5.4, 9.6],
    target: [0, 0.4, 0.8]
  }
},
{
  id: 'laptop',
  object: 'Laptop',
  kicker: 'Currently open',
  title: 'Halyard',
  blurb:
  'A realtime ops console for freight dispatchers. I own the design system and the rendering layer that keeps 40,000 rows scrolling at 60fps.',
  camera: {
    position: [-0.15, 1.55, 2.7],
    target: [-0.3, 0.95, -1.3]
  },
  detail: {
    heading: 'Halyard — realtime freight console',
    summary:
    'Dispatchers were living in six tabs and a whiteboard. Halyard folds routing, exceptions and driver comms into one canvas that updates as the trucks move.',
    meta: [
    { label: 'Role', value: 'Lead product designer + FE' },
    { label: 'Year', value: '2025 — ongoing' },
    { label: 'Stack', value: 'React, WebGL, Rust API' }],

    bullets: [
    'Virtualised table renderer holding 40k live rows at 60fps',
    'Exception triage flow cut average resolution time by 38%',
    'Design system of 74 components shared with two other products'],

    links: [
    { label: 'Read the case study', href: '#' },
    { label: 'Live demo', href: '#' }]

  }
},
{
  id: 'notebook',
  object: 'Notebook',
  kicker: 'Pages 12 — 40',
  title: 'Field Notes',
  blurb:
  'The paper half of the practice. Interview transcripts, service blueprints and the ugly first sketches that every shipped screen came from.',
  camera: {
    position: [2.45, 1.4, -4.3],
    target: [2.6, 0.2, -7.3]
  },
  detail: {
    heading: 'Field Notes — research practice',
    summary:
    'Two years of discovery work with warehouse crews, night-shift dispatchers and clinic staff. The notebook is where the product decisions actually get made.',
    meta: [
    { label: 'Method', value: 'Contextual inquiry' },
    { label: 'Sessions', value: '61 shifts observed' },
    { label: 'Output', value: 'Blueprints, JTBD map' }],

    bullets: [
    'Ride-alongs on 14 night shifts to map real handover rituals',
    'Service blueprint that reframed the roadmap around handovers',
    'A shared research wall the whole team writes to, not just design'],

    links: [{ label: 'Flip through the notebook', href: '#' }]
  }
},
{
  id: 'phone',
  object: 'Smartphone',
  kicker: 'Face up, still buzzing',
  title: 'Tidepool',
  blurb:
  'A tide and swell app for cold-water swimmers. Offline-first, one thumb, readable at 6am with wet hands and no gloves.',
  camera: {
    position: [-2.25, 1.25, -8.3],
    target: [-2.4, 0.15, -11.3]
  },
  detail: {
    heading: 'Tidepool — cold-water swim companion',
    summary:
    'Built for the fifteen seconds before you get in the water. Everything else is secondary to one number: is it safe right now?',
    meta: [
    { label: 'Role', value: 'Solo design + build' },
    { label: 'Users', value: '31k monthly' },
    { label: 'Platform', value: 'iOS, offline-first' }],

    bullets: [
    'Single-glance safety verdict tuned with a lifeguard association',
    'Full offline forecast cache — the beach has no signal',
    'High-contrast mode that survives dawn glare and salt spray'],

    links: [
    { label: 'App Store', href: '#' },
    { label: 'Design notes', href: '#' }]

  }
},
{
  id: 'notes',
  object: 'Sticky notes',
  kicker: 'Stuck to the desk',
  title: 'What I actually do',
  blurb:
  'Interface engineering, motion, and the systems work that keeps a product coherent after the launch confetti settles.',
  camera: {
    position: [2.05, 1.35, -12.2],
    target: [2.2, 0.2, -15.3]
  },
  detail: {
    heading: 'Craft and tooling',
    summary:
    'I sit on the seam between design and engineering — comfortable owning a token pipeline and an animation curve in the same afternoon.',
    meta: [
    { label: 'Core', value: 'React, TypeScript' },
    { label: 'Motion', value: 'WebGL, Framer Motion' },
    { label: 'Systems', value: 'Tokens, a11y, docs' }],

    bullets: [
    'Design systems: tokens, theming, contribution models, docs',
    'Interface motion with real performance budgets, not decoration',
    'WCAG 2.2 AA as a build constraint rather than an audit at the end',
    'Prototyping in code so the team argues with something real'],

    links: []
  }
},
{
  id: 'coffee',
  object: 'Coffee cup',
  kicker: 'Third of the day',
  title: 'About me',
  blurb:
  'Twelve years in, still happiest with a rough problem, a warm cup and a room full of people who care how it works.',
  camera: {
    position: [-1.75, 1.2, -16.3],
    target: [-1.9, 0.4, -19.3]
  },
  detail: {
    heading: 'Ellis Nakamura',
    summary:
    'I started in editorial layout, fell into front-end during a newspaper redesign, and never left the overlap. Now I lead small teams building operational software that people use for eight hours a day.',
    meta: [
    { label: 'Based', value: 'Lisbon, PT' },
    { label: 'Experience', value: '12 years' },
    { label: 'Now', value: 'Design lead, Halyard' }],

    bullets: [
    'Previously: Monzo, Bulb, and a very small newspaper',
    'I teach an interface motion workshop twice a year',
    'Sea swimming, letterpress, and a stubborn moka pot'],

    links: []
  }
},
{
  id: 'card',
  object: 'Business card',
  kicker: 'Take one',
  title: 'Let’s work together',
  blurb:
  'Available for product design and front-end leadership from October. The card is right there at the edge of the desk.',
  camera: {
    position: [0.35, 1.65, -20.1],
    target: [0.4, 0.15, -23.4]
  },
  detail: {
    heading: 'Get in touch',
    summary:
    'Tell me what is broken and who it is breaking for. I read everything and reply within a couple of days.',
    meta: [
    { label: 'Email', value: 'ellis@nakamura.studio' },
    { label: 'Availability', value: 'From October' },
    { label: 'Timezone', value: 'WET / UTC+0' }],

    bullets: [
    'Product design engagements from six weeks',
    'Fractional front-end leadership for small teams',
    'Interface motion and design system audits'],

    links: [
    { label: 'Email me', href: 'mailto:ellis@nakamura.studio' },
    { label: 'LinkedIn', href: '#' }]

  }
}];


export const stations: Station[] = raw.map((station, index) => ({
  ...station,
  scroll: index / (raw.length - 1)
}));