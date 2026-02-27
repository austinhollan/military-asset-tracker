// ============================================================
// US MILITARY ASSET TRACKER — app.js
// ============================================================

// === ASSET TYPE DEFINITIONS ===
const ASSET_TYPES = {
  carrier: {
    label: 'Aircraft Carrier',
    color: '#4FC3F7',
    shape: 'hexagon',
    filterGroup: 'CARRIERS'
  },
  bomber: {
    label: 'Bomber',
    color: '#EF5350',
    shape: 'bomber',
    filterGroup: 'BOMBERS'
  },
  fighter: {
    label: 'Fighter',
    color: '#FFA726',
    shape: 'triangle',
    filterGroup: 'FIGHTERS'
  },
  tanker: {
    label: 'Tanker/Refueling',
    color: '#FFEE58',
    shape: 'diamond',
    filterGroup: 'TANKERS'
  },
  surveillance: {
    label: 'Surveillance/ISR',
    color: '#26C6DA',
    shape: 'eye',
    filterGroup: 'ISR'
  },
  submarine: {
    label: 'Submarine',
    color: '#00897B',
    shape: 'invtriangle',
    filterGroup: 'SUBMARINES'
  },
  base: {
    label: 'Ground Base',
    color: '#66BB6A',
    shape: 'square',
    filterGroup: 'BASES'
  },
  missile_defense: {
    label: 'Missile Defense',
    color: '#AB47BC',
    shape: 'shield',
    filterGroup: 'MISSILE DEF'
  },
  amphibious: {
    label: 'Amphibious/ARG',
    color: '#81D4FA',
    shape: 'pentagon',
    filterGroup: 'AMPHIBIOUS'
  },
  drone: {
    label: 'Drone',
    color: '#F48FB1',
    shape: 'smalldiamond',
    filterGroup: 'DRONES'
  },
  special_naval: {
    label: 'Special Naval',
    color: '#B0BEC5',
    shape: 'hexoutline',
    filterGroup: 'SPECIAL'
  }
};