// PLACEHOLDER entries for the first Interra 2027 Release.
// Replace titles / authors / abstract / lay_summary with the real papers before launch.
// The abstracts below describe intended scope, not results; all are marked provisional.

export const papers = [
  {
    n: 'I',
    title: 'The Interra Project: open, evolutionary, process-complete models of planetary evolution',
    authors: 'Interra Collaboration',
    status: 'In preparation',
    abstract:
      'We introduce the Interra Project, an open framework for simulating the coupled evolution of planetary interiors, atmospheres, outgassing, and escape over geological time. We describe the modelling approach, the production and validation of model ensembles, and how those ensembles are compared against planetary and exoplanetary observations through telescope simulators. Provisional abstract for the 2027 release.',
    lay:
      'Interra is an open project that models how planets change over billions of years, linking their interiors, atmospheres, and the gases that escape to space. This paper introduces the project and explains how we test the models against real observations of planets in and beyond the Solar System.',
  },
  {
    n: 'II',
    title: 'Interra Generation 1: ensembles of magma-ocean planet evolution',
    authors: 'Interra Collaboration',
    status: 'In preparation',
    abstract:
      'We present the first generation of Interra model ensembles, spanning a range of planet masses, compositions, and instellations for rocky planets in their magma-ocean stage. We characterise how interior redox state, volatile inventory, and stellar irradiation shape the observable atmosphere, and release the ensembles together with a fast emulator. Provisional abstract for the 2027 release.',
    lay:
      'Our first public data release simulates thousands of young, partly molten rocky planets across many starting conditions. It shows how a planet’s chemistry and its host star together shape the atmosphere we would observe, and we share all of the results openly.',
  },
  {
    n: 'III',
    title: 'Volatile cycling between atmosphere and interior over geological time',
    authors: 'Interra Collaboration',
    status: 'In preparation',
    abstract:
      'Using the Interra ensembles, we trace how water and other volatiles partition between a planet’s interior and atmosphere as it cools, and how this cycling governs long-term climate and observability across the parameter space. Provisional abstract for the 2027 release.',
    lay:
      'Water and other gases move back and forth between a planet’s rocky interior and its atmosphere as it ages. We use Interra to follow this exchange and show how it sets a planet’s long-term climate and what we would be able to detect.',
  },
  {
    n: 'IV',
    title: 'Evolutionary inversion of exoplanet spectra with Interra emulators',
    authors: 'Interra Collaboration',
    status: 'In preparation',
    abstract:
      'We build the Interra ensembles into a framework for evolutionary inversion, constraining a planet’s history from its spectrum while ruling out physically implausible states and propagating forward-model uncertainty. We release fast emulators for community retrieval workflows. Provisional abstract for the 2027 release.',
    lay:
      'Instead of reading a planet’s atmosphere from its light in isolation, we use Interra to ask which evolutionary histories could actually have produced what we see, and we share fast tools so others can do the same in their own analyses.',
  },
];
