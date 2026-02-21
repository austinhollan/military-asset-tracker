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

// === COMPLETE ASSET DATA ===
const assets = [
  // === AIRCRAFT CARRIERS ===
  {
    id: "cvn78",
    name: "USS Gerald R. Ford (CVN-78)",
    type: "carrier",
    class: "Ford-class",
    lat: 36.0, lng: -5.5,
    prevLat: 30.0, prevLng: -40.0,
    prevLabel: "North Atlantic (Feb 13)",
    location: "Mediterranean Sea — transited Strait of Gibraltar ~Feb 20",
    mission: "Deployment Day 241+. Redirected from Caribbean (Operation South Spear / capture of Maduro) toward Middle East per President Trump's orders. En route to CENTCOM AOR to reinforce USS Abraham Lincoln. On track to break post-Cold War deployment record (294 days) by mid-April 2026.",
    strikeGroup: "CSG-12 / CVW-8",
    confidence: "confirmed",
    sources: [
      {name: "USNI News Feb 20", url: "https://news.usni.org/2026/02/20/uss-gerald-r-ford-now-in-the-mediterranean-sea-2"},
      {name: "Forbes Feb 20", url: "https://www.forbes.com/sites/petersuciu/2026/02/20/us-navy-supercarrier-uss-gerald-r-ford-now-in-the-mediterranean/"},
      {name: "Zona Militar Feb 18", url: "https://www.zona-militar.com/en/2026/02/18/the-nuclear-powered-aircraft-carrier-uss-gerald-r-ford-departed-the-caribbean-to-reinforce-the-u-s-military-presence-in-the-middle-east/"}
    ],
    updated: "Feb 20, 2026"
  },
  {
    id: "cvn72",
    name: "USS Abraham Lincoln (CVN-72)",
    type: "carrier",
    class: "Nimitz-class",
    lat: 22.5, lng: 62.0,
    prevLat: 15.0, prevLng: 115.0,
    prevLabel: "South China Sea (Jan 2026)",
    location: "Arabian Sea — ~500 nm south of Iran",
    mission: "Deployed Nov 5, 2025. Redirected from South China Sea to Arabian Sea amid Iran tensions. On Feb 3, an F-35C from CVW-9 shot down an Iranian Shahed-139 drone. Third time CSG-3 redirected from Indo-Pacific to Middle East.",
    strikeGroup: "CSG-3 / CVW-9 (incl. F-35C)",
    confidence: "confirmed",
    sources: [
      {name: "Forbes Feb 5", url: "https://www.forbes.com/sites/petersuciu/2026/02/05/the-abraham-lincoln-carrier-strike-group-is-operating-near-iran/"},
      {name: "19FortyFive Feb 12", url: "https://www.19fortyfive.com/2026/02/supercarrier-surge-the-u-s-navy-is-preparing-to-send-multiple-aircraft-carriers-to-strike-iran/"}
    ],
    updated: "Feb 20, 2026"
  },
  {
    id: "cvn73",
    name: "USS George Washington (CVN-73)",
    type: "carrier",
    class: "Nimitz-class",
    lat: 35.28, lng: 139.67,
    prevLat: null, prevLng: null,
    prevLabel: null,
    location: "Yokosuka, Japan — in maintenance",
    mission: "Forward-deployed carrier for 7th Fleet. Completed 2025 deployment Dec 11. Currently in maintenance, unlikely to redeploy until second half of 2026.",
    strikeGroup: "CSG-5 / CVW-5",
    confidence: "confirmed",
    sources: [
      {name: "Navy.mil Dec 2025", url: "https://www.navy.mil/Press-Office/News-Stories/display-news/Article/4357262/george-washington-returns-to-yokosuka/"}
    ],
    updated: "Feb 20, 2026"
  },
  {
    id: "cvn71",
    name: "USS Theodore Roosevelt (CVN-71)",
    type: "carrier",
    class: "Nimitz-class",
    lat: 32.7, lng: -117.2,
    prevLat: 31.5, prevLng: -120.0,
    prevLabel: "Pacific Ocean workups (Feb 8)",
    location: "San Diego — pre-deployment workups",
    mission: "Pre-deployment workups (COMPTUEX). Previous deployment lasted 278 days. Earliest deploy late spring 2026. Possible Western Pacific or Middle East.",
    strikeGroup: "CSG-9 / CVW-11",
    confidence: "confirmed",
    sources: [
      {name: "DVIDS Feb 14", url: "https://www.dvidshub.net/unit/USSTR-CVN71"},
      {name: "Forbes Jan 24", url: "https://www.forbes.com/sites/petersuciu/2026/01/24/us-navy-supercarrier-departed-san-diego-beginning-pacific-deployment/"}
    ],
    updated: "Feb 14, 2026"
  },
  {
    id: "cvn77",
    name: "USS George H.W. Bush (CVN-77)",
    type: "carrier",
    class: "Nimitz-class",
    lat: 36.5, lng: -74.5,
    prevLat: 36.8, prevLng: -76.3,
    prevLabel: "Norfolk (Jan 15)",
    location: "Atlantic Ocean — COMPTUEX, ~100nm off East Coast",
    mission: "COMPTUEX workups. Pentagon ordered spin-up for potential Middle East deployment Feb 11. Could be deployed in weeks if expedited. WSJ: 'could potentially expedite those exercises.'",
    strikeGroup: "CSG-10 / CVW-7",
    confidence: "confirmed",
    sources: [
      {name: "The War Zone Feb 11", url: "https://www.twz.com/news-features/second-carrier-strike-group-ordered-to-spin-up-for-deployment-to-middle-east-report"},
      {name: "OSINT @ianellisjones", url: "https://x.com/ianellisjones/status/2012324333025169649"}
    ],
    updated: "Feb 11, 2026"
  },
  {
    id: "cvn75",
    name: "USS Harry S. Truman (CVN-75)",
    type: "carrier",
    class: "Nimitz-class",
    lat: 36.95, lng: -76.33,
    prevLat: null, prevLng: null,
    prevLabel: null,
    location: "Naval Station Norfolk — returned Feb 18 from 8-month deployment",
    mission: "Just returned Feb 18, 2026 after 8-month deployment. Pre-RCOH. RCOH begins June 2026 at Newport News (~4.5 years). Unavailable for operations.",
    strikeGroup: "CSG-8",
    confidence: "confirmed",
    sources: [
      {name: "19FortyFive Jan 8", url: "https://www.19fortyfive.com/2026/01/the-u-s-navy-is-about-to-lose-a-nuclear-aircraft-carrier-for-at-least-4-years/"}
    ],
    updated: "Feb 18, 2026"
  },
  {
    id: "cvn76",
    name: "USS Ronald Reagan (CVN-76)",
    type: "carrier",
    class: "Nimitz-class",
    lat: 47.56, lng: -122.63,
    prevLat: null, prevLng: null,
    prevLabel: null,
    location: "Naval Base Kitsap-Bremerton, WA — dry dock, 17-month PIA",
    mission: "Maintenance period since April 2025, expected completion late 2026. Not available for sea duty.",
    strikeGroup: "N/A",
    confidence: "confirmed",
    sources: [
      {name: "Stars and Stripes Apr 2025", url: "https://www.stripes.com/branches/navy/2025-04-02/reagan-aircraft-carrier-kitsap-dry-dock-17345149.html"}
    ],
    updated: "Feb 8, 2026"
  },
  {
    id: "cvn69",
    name: "USS Dwight D. Eisenhower (CVN-69)",
    type: "carrier",
    class: "Nimitz-class",
    lat: 36.82, lng: -76.29,
    prevLat: null, prevLng: null,
    prevLabel: null,
    location: "Norfolk Naval Shipyard — PIA maintenance since Jan 2025",
    mission: "Planned Incremental Availability. Not available for deployment.",
    strikeGroup: "N/A",
    confidence: "confirmed",
    sources: [
      {name: "Navy.mil Jan 2025", url: "https://www.navy.mil/Press-Office/News-Stories/Article/4028611/uss-dwight-d-eisenhower-transits-to-norfolk-naval-shipyard-nnsy-for-a-planned-i/"}
    ],
    updated: "Feb 13, 2026"
  },
  {
    id: "cvn70",
    name: "USS Carl Vinson (CVN-70)",
    type: "carrier",
    class: "Nimitz-class",
    lat: 32.69, lng: -117.20,
    prevLat: null, prevLng: null,
    prevLabel: null,
    location: "NAS North Island, San Diego — post-deployment maintenance",
    mission: "Post-deployment maintenance following 269-day deployment (longest in Carl Vinson history). Not available for sea operations.",
    strikeGroup: "CSG-1",
    confidence: "confirmed",
    sources: [
      {name: "DVIDS Feb 19", url: "https://www.dvidshub.net/image/9529764/uss-carl-vinson-cvn-70-conducts-daily-operations"}
    ],
    updated: "Feb 19, 2026"
  },
  {
    id: "cvn74",
    name: "USS John C. Stennis (CVN-74)",
    type: "carrier",
    class: "Nimitz-class",
    lat: 36.98, lng: -76.43,
    prevLat: null, prevLng: null,
    prevLabel: null,
    location: "Newport News Shipbuilding — RCOH since May 2021",
    mission: "Mid-life Refueling and Complex Overhaul. Completion expected Oct 2026. Exited dry dock April 2024, now in outfitting/testing.",
    strikeGroup: "N/A",
    confidence: "confirmed",
    sources: [
      {name: "USNI News Jun 2024", url: "https://news.usni.org/2024/06/18/carrier-uss-john-c-stennis-overhaul-delayed-work-will-take-more-than-5-years-to-complete"}
    ],
    updated: "Feb 20, 2026"
  },
  {
    id: "cvn68",
    name: "USS Nimitz (CVN-68)",
    type: "carrier",
    class: "Nimitz-class (lead ship)",
    lat: 47.56, lng: -122.65,
    prevLat: null, prevLng: null,
    prevLabel: null,
    location: "Naval Base Kitsap-Bremerton, WA — pre-decommissioning",
    mission: "Final homecoming Dec 16, 2025. 51 years of service. Decommissioning ceremony scheduled May 2026. First Nimitz-class to be decommissioned.",
    strikeGroup: "N/A (decommissioning)",
    confidence: "confirmed",
    sources: [
      {name: "USNI News Mar 2025", url: "https://news.usni.org/2025/03/04/uss-nimitz-more-than-3000-sailors-will-move-to-norfolk-in-2026"}
    ],
    updated: "Dec 16, 2025"
  },

  // === AMPHIBIOUS READY GROUPS ===
  {
    id: "lhd7",
    name: "Iwo Jima ARG / 22nd MEU",
    type: "amphibious",
    class: "Wasp-class LHD",
    lat: 17.0, lng: -68.0,
    prevLat: null, prevLng: null,
    prevLabel: null,
    location: "Caribbean Sea — USSOUTHCOM operations",
    mission: "Deployed Aug 2025. Involved in Operation South Spear (capture of Maduro, Jan 2026). Could be retasked to Middle East. Maintenance contract signed — scheduled through Feb 2028.",
    strikeGroup: "22nd MEU",
    confidence: "confirmed",
    sources: [
      {name: "19FortyFive Feb 17", url: "https://www.19fortyfive.com/2026/02/u-s-navy-mini-aircraft-carrier-assault-ship-uss-iwo-jima-could-be-out-of-action-until-february-2028/"}
    ],
    updated: "Feb 17, 2026"
  },
  {
    id: "lha7",
    name: "Tripoli ARG / 31st MEU",
    type: "amphibious",
    class: "America-class LHA",
    lat: 20.0, lng: 130.0,
    prevLat: null, prevLng: null,
    prevLabel: null,
    location: "Philippine Sea — 7th Fleet operations",
    mission: "Forward-deployed ARG in Western Pacific. 31st MEU conducted mechanized raid exercise Feb 2, 2026.",
    strikeGroup: "31st MEU",
    confidence: "confirmed",
    sources: [
      {name: "USMC Video Feb 2", url: "https://www.youtube.com/watch?v=DxNgJ0k4_Mc"}
    ],
    updated: "Feb 2, 2026"
  },

  // === STRATEGIC BOMBERS ===
  {
    id: "b52_guam",
    name: "B-52H Stratofortress (BTF Guam)",
    type: "bomber",
    class: "B-52H",
    lat: 13.58, lng: 144.93,
    prevLat: 48.42, prevLng: -101.35,
    prevLabel: "Minot AFB, ND (home)",
    location: "Andersen AFB, Guam — Bomber Task Force rotation",
    mission: "23rd Expeditionary Bomb Squadron from Minot AFB. Feb 16-18: conducted escort missions with JASDF fighters (7th, 8th, 9th Air Wings). First combined B-52/JASDF flights of 2026.",
    strikeGroup: "PACAF BTF",
    confidence: "confirmed",
    sources: [
      {name: "Zona Militar Feb 19", url: "https://www.zona-militar.com/en/2026/02/19/japanese-f-15-and-f-2-fighters-escorted-u-s-air-force-b-52h-bombers-in-the-pacific-for-the-first-time-in-2026/"}
    ],
    updated: "Feb 18, 2026"
  },
  {
    id: "b52_diego",
    name: "B-52H Stratofortress (Diego Garcia)",
    type: "bomber",
    class: "B-52H",
    lat: -7.31, lng: 72.43,
    prevLat: 32.51, prevLng: -93.66,
    prevLabel: "Barksdale AFB, LA (home)",
    location: "Diego Garcia — 4 aircraft deployed since May 2025",
    mission: "4 B-52Hs from Barksdale AFB replaced B-2 Spirits in May 2025. Supported by KC-135 tankers. Current status in Feb 2026 unclear — may have rotated. B-2 hangars inactive per satellite.",
    strikeGroup: "AFGSC deployed",
    confidence: "unconfirmed",
    sources: [
      {name: "The War Zone", url: "https://www.twz.com/air/b-52s-join-b-2s-on-diego-garcia10-bombers-now-on-indian-ocean-island"},
      {name: "The Week Feb 20", url: "https://www.theweek.in/news/middle-east/2026/02/20/no-b-2s-for-iran-trumps-magnificent-bombers-face-hurdle-as-uk-denies-base-access.html"}
    ],
    updated: "May 2025 (status unclear)"
  },
  {
    id: "b2_whiteman",
    name: "B-2A Spirit Fleet",
    type: "bomber",
    class: "B-2A Spirit",
    lat: 38.73, lng: -93.55,
    prevLat: -7.31, prevLng: 72.43,
    prevLabel: "Diego Garcia (returned May 2025)",
    location: "Whiteman AFB, MO — home base",
    mission: "19 total fleet (~10-12 operational). Returned from Diego Garcia after May 2025 B-52 swap. Conducted Operation Midnight Hammer (June 2025): 7 B-2s struck Fordow and Natanz with 14 GBU-57 MOPs. UK reportedly blocking basing for Iran ops. MOP restocking underway ($100M+ Boeing contract).",
    strikeGroup: "509th/510th Bomb Wing",
    confidence: "confirmed",
    sources: [
      {name: "Air & Space Forces", url: "https://www.airandspaceforces.com/pentagon-restock-massive-ordinance-penetrator-bombs-dropped-b-2s-iran/"},
      {name: "The Week Feb 20 (UK basing)", url: "https://www.theweek.in/news/middle-east/2026/02/20/no-b-2s-for-iran-trumps-magnificent-bombers-face-hurdle-as-uk-denies-base-access.html"}
    ],
    updated: "Feb 20, 2026"
  },
  {
    id: "b21_edwards",
    name: "B-21 Raider (Test Aircraft)",
    type: "bomber",
    class: "B-21 Raider",
    lat: 34.91, lng: -117.88,
    prevLat: null, prevLng: null,
    prevLabel: null,
    location: "Edwards AFB, CA — flight test campaign (2 aircraft)",
    mission: "2 test aircraft. Not operational. IOC ~2027. Ellsworth AFB is first MOB. Production acceleration deal ($4.5B) expected by March 31, 2026. Program of record: 100+ aircraft.",
    strikeGroup: "412th Test Wing",
    confidence: "confirmed",
    sources: [
      {name: "USAF Official", url: "https://www.af.mil/News/Article-Display/Article/4301502/us-air-force-announces-arrival-of-second-b-21-test-aircraft-at-edwards-afb/"}
    ],
    updated: "Feb 18, 2026"
  },

  // === FIGHTERS ===
  {
    id: "f22_staging",
    name: "F-22A Raptors (12 aircraft)",
    type: "fighter",
    class: "F-22A Raptor",
    lat: 52.41, lng: 0.56,
    prevLat: 37.08, prevLng: -76.36,
    prevLabel: "Langley AFB, VA (home)",
    location: "RAF Lakenheath/Mildenhall, UK — staging for Middle East",
    mission: "12 F-22s from 1st Fighter Wing, Langley. Wave 1: 6 arrived Feb 17 at Lakenheath. Wave 2: 6 sighted Feb 20 at Mildenhall with ferry tanks. Heading to CENTCOM. Same staging pattern as pre-Midnight Hammer (June 2025).",
    strikeGroup: "1st Fighter Wing",
    confidence: "confirmed",
    sources: [
      {name: "The Aviationist Feb 17", url: "https://theaviationist.com/2026/02/17/six-f22-raptors-arrive-raf-lakenheath/"},
      {name: "Army Recognition", url: "https://www.armyrecognition.com/news/aerospace-news/2026/u-s-f-22-raptors-sighted-in-uk-may-indicate-possible-reinforcement-of-middle-east-airpower-posture"}
    ],
    updated: "Feb 20, 2026"
  },
  {
    id: "f35_jordan",
    name: "F-35A Lightning II (~30 aircraft)",
    type: "fighter",
    class: "F-35A Lightning II",
    lat: 31.83, lng: 36.79,
    prevLat: 52.41, prevLng: 0.56,
    prevLabel: "RAF Lakenheath, UK (staging)",
    location: "Muwaffaq Salti AB, Jordan — confirmed by satellite",
    mission: "18 F-35As visible in Planet Labs satellite imagery Feb 17. Vermont ANG 134th FS (SEAD specialists) contributed ~12 aircraft. Total ~30. These jets came from Operation Absolute Resolve (Venezuela) and Cold Response (Norway). SEAD role critical for any Iran operation.",
    strikeGroup: "Multiple wings",
    confidence: "confirmed",
    sources: [
      {name: "CNN Feb 20", url: "https://www.cnn.com/2026/02/20/politics/military-power-buildup-us-iran-intl-vis"},
      {name: "Air & Space Forces", url: "https://www.airandspaceforces.com/f-35s-deploy-middle-east-us-talks-iran/"}
    ],
    updated: "Feb 17, 2026"
  },
  {
    id: "f15e_jordan",
    name: "F-15E Strike Eagles (18 aircraft)",
    type: "fighter",
    class: "F-15E Strike Eagle",
    lat: 31.85, lng: 36.85,
    prevLat: 52.41, prevLng: 0.56,
    prevLabel: "RAF Lakenheath, UK (48th FW home)",
    location: "Muwaffaq Salti AB, Jordan",
    mission: "3 squadrons including 12 from 48th FW RAF Lakenheath (494th FS) and Mountain Home AFB. Only USAF fighter certified for GBU-28 and GBU-72 deep-penetrating bunker busters — critical for Iran hardened targets.",
    strikeGroup: "48th FW / 366th FW",
    confidence: "confirmed",
    sources: [
      {name: "Air & Space Forces", url: "https://www.airandspaceforces.com/f-35s-deploy-middle-east-us-talks-iran/"},
      {name: "BBC", url: "https://www.bbc.com/news/live/c0rj5dwjx2pt"}
    ],
    updated: "Feb 2026"
  },
  {
    id: "f16_jordan",
    name: "F-16 Fighting Falcons (~48 aircraft)",
    type: "fighter",
    class: "F-16C/D",
    lat: 31.80, lng: 36.73,
    prevLat: 46.03, prevLng: 12.60,
    prevLabel: "Aviano AB, Italy / Spangdahlem AB, Germany",
    location: "Muwaffaq Salti AB, Jordan + en route",
    mission: "12 visible at Muwaffaq Salti (satellite). 12 each from Aviano and Spangdahlem surging. 12 from McEntire ANGB departing via Azores Feb 17. Total ~48 F-16s in transit/deployed.",
    strikeGroup: "Multiple wings",
    confidence: "confirmed",
    sources: [
      {name: "The War Zone", url: "https://www.twz.com/news-features/final-pieces-moving-into-place-for-potential-attack-on-iran"},
      {name: "The Aviationist Feb 17", url: "https://theaviationist.com/2026/02/17/six-f22-raptors-arrive-raf-lakenheath/"}
    ],
    updated: "Feb 17, 2026"
  },

  // === TANKERS ===
  {
    id: "tankers_surge",
    name: "KC-46A/KC-135 Tanker Surge (40+)",
    type: "tanker",
    class: "KC-46A / KC-135",
    lat: 24.06, lng: 45.52,
    prevLat: 44.8, prevLng: -68.8,
    prevLabel: "Bangor ANGB, ME (departure)",
    location: "Prince Sultan AB, Saudi Arabia + en route",
    mission: "40+ tankers surged across the Atlantic Feb 15-18 per OSINT. KC-46A first deployment to 378th AEW (77th EARS from Seymour Johnson AFB). Tanker activity increasing at Prince Sultan AB, decreasing at Al Udeid (vulnerability).",
    strikeGroup: "CENTCOM AOR",
    confidence: "confirmed",
    sources: [
      {name: "The Aviationist Feb 17", url: "https://theaviationist.com/2026/02/17/six-f22-raptors-arrive-raf-lakenheath/"},
      {name: "ACC Official", url: "https://www.acc.af.mil/News/Article-Display/Article/4400254/next-generation-air-tankers-arrive-in-centcom-aor/"}
    ],
    updated: "Feb 18, 2026"
  },
  {
    id: "tankers_mildenhall",
    name: "KC-135 Stratotankers (100th ARW)",
    type: "tanker",
    class: "KC-135",
    lat: 52.36, lng: 0.49,
    prevLat: null, prevLng: null,
    prevLabel: null,
    location: "RAF Mildenhall, UK — permanent tanker wing",
    mission: "Only permanent USAF air refueling wing in Europe. Supporting F-22/F-35 transatlantic Coronet flights for Middle East surge.",
    strikeGroup: "100th ARW",
    confidence: "confirmed",
    sources: [
      {name: "USAFE", url: "https://www.usafe.af.mil/"}
    ],
    updated: "Feb 2026"
  },

  // === SURVEILLANCE / ISR ===
  {
    id: "e3_saudi",
    name: "E-3 Sentry AWACS (6 of 16 deployed)",
    type: "surveillance",
    class: "E-3G Sentry",
    lat: 24.10, lng: 45.60,
    prevLat: 35.42, prevLng: -97.38,
    prevLabel: "Tinker AFB, OK (home) / Elmendorf, AK",
    location: "Prince Sultan AB, Saudi Arabia + staging at Ramstein",
    mission: "37.5% of entire E-3 fleet deployed in ~48 hours. 4 from Tinker AFB via Ramstein. 2 from Elmendorf via RAF Mildenhall. Kadena stripped of ALL AWACS coverage. Alaska reduced to 1 E-3. >50% of mission-capable aircraft deployed.",
    strikeGroup: "552nd ACW",
    confidence: "confirmed",
    sources: [
      {name: "Army Recognition", url: "https://www.armyrecognition.com/news/aerospace-news/2026/us-deploys-nearly-40-of-entire-e-3-sentry-awacs-fleet-to-middle-east-for-potential-war-against-iran"},
      {name: "The Aviationist Feb 17", url: "https://theaviationist.com/2026/02/17/six-f22-raptors-arrive-raf-lakenheath/"}
    ],
    updated: "Feb 18, 2026"
  },
  {
    id: "rc135_mildenhall",
    name: "RC-135V/W Rivet Joint",
    type: "surveillance",
    class: "RC-135V/W",
    lat: 52.36, lng: 0.50,
    prevLat: null, prevLng: null,
    prevLabel: null,
    location: "RAF Mildenhall, UK — permanent forward base",
    mission: "SIGINT aircraft. Permanent forward operating location. Recent missions: Black Sea (Jan 30), Caribbean/Venezuela (Jan 6), CENTCOM (ongoing). All assigned to 55th Wing, Offutt AFB.",
    strikeGroup: "55th Wing",
    confidence: "confirmed",
    sources: [
      {name: "ItaMilRadar Jan 30", url: "https://www.itamilradar.com/2026/01/30/uk-rc-135-and-us-p-8a-operate-together-over-the-black-sea-tightening-natos-isr-net-near-russias-southern-flank/"},
      {name: "Army Recognition Jan 6", url: "https://armyrecognition.com/news/aerospace-news/2026/u-s-rc-135w-rivet-joint-reconnaissance-aircraft-conducts-intelligence-mission-near-venezuela"}
    ],
    updated: "Jan 30, 2026"
  },
  {
    id: "u2_fairford",
    name: "U-2S Dragon Lady",
    type: "surveillance",
    class: "U-2S",
    lat: 51.68, lng: -1.79,
    prevLat: 39.13, prevLng: -121.44,
    prevLabel: "Beale AFB, CA (home)",
    location: "RAF Fairford, UK — 2 aircraft. 1 departed Feb 17 toward Middle East",
    mission: "Regular ISR rotation station. DRAGON86 arrived Feb 19 from Beale. Another U-2 departed Feb 17 toward suspected Cyprus/Middle East staging. Operates above 70,000ft with ASARS, SYERS, SIGINT.",
    strikeGroup: "9th RW",
    confidence: "confirmed",
    sources: [
      {name: "ItaMilRadar Feb 19", url: "https://www.itamilradar.com/2026/02/19/usaf-u-2-dragon-lady-arrives-at-raf-fairford-possible-transit-signals-continued-isr-posture-shift/"}
    ],
    updated: "Feb 19, 2026"
  },
  {
    id: "rq4_sigonella",
    name: "RQ-4B Global Hawk",
    type: "drone",
    class: "RQ-4B",
    lat: 37.40, lng: 14.92,
    prevLat: null, prevLng: null,
    prevLabel: null,
    location: "NAS Sigonella, Italy — Mediterranean ISR",
    mission: "Regular forward deployment. Feb 3: departed for Black Sea surveillance (circular racetrack near Turkish coast). Also operates from Andersen AFB/Guam, Yokota AB/Japan, Ali Al Salem/Kuwait.",
    strikeGroup: "9th OG / USAFE",
    confidence: "confirmed",
    sources: [
      {name: "Army Recognition Feb 3", url: "https://www.armyrecognition.com/news/aerospace-news/2026/u-s-deploys-rq-4b-global-hawk-for-surveillance-mission-over-the-black-sea"}
    ],
    updated: "Feb 3, 2026"
  },
  {
    id: "p8_hormuz",
    name: "P-8A Poseidon (4+ aircraft)",
    type: "surveillance",
    class: "P-8A Poseidon",
    lat: 26.0, lng: 56.5,
    prevLat: 37.40, prevLng: 14.92,
    prevLabel: "NAS Sigonella (staging)",
    location: "Strait of Hormuz patrol + Mediterranean transit",
    mission: "Continuously patrolling Strait of Hormuz. 2 additional P-8s (VP-10) arrived from Sigonella ~Feb 9 at Isa AB (Bahrain) and Thumrait AB (Oman). 2 more spotted over Mediterranean Feb 20.",
    strikeGroup: "VP-10",
    confidence: "confirmed",
    sources: [
      {name: "CNN Feb 20", url: "https://www.cnn.com/2026/02/20/politics/military-power-buildup-us-iran-intl-vis"},
      {name: "The Aviationist Feb 11", url: "https://theaviationist.com/2026/02/11/vt-ang-f35s-depart-ln-for-middle-east/"}
    ],
    updated: "Feb 20, 2026"
  },
  {
    id: "e11a_saudi",
    name: "E-11A BACN (4+ aircraft)",
    type: "surveillance",
    class: "E-11A BACN",
    lat: 24.08, lng: 45.55,
    prevLat: null, prevLng: null,
    prevLabel: null,
    location: "Prince Sultan AB, Saudi Arabia",
    mission: "Battlefield Airborne Communications Node. 4+ visible at Prince Sultan per CNN satellite imagery. 2 additional en route Feb 17.",
    strikeGroup: "CENTCOM",
    confidence: "confirmed",
    sources: [
      {name: "CNN Satellite", url: "https://www.cnn.com/2026/02/20/politics/military-power-buildup-us-iran-intl-vis"}
    ],
    updated: "Feb 2026"
  },
  {
    id: "mq9_jordan",
    name: "MQ-9 Reaper Drones",
    type: "drone",
    class: "MQ-9 Reaper",
    lat: 31.78, lng: 36.72,
    prevLat: null, prevLng: null,
    prevLabel: null,
    location: "Muwaffaq Salti AB, Jordan — 2 visible in satellite",
    mission: "Part of broader fighter/strike package at Muwaffaq Salti. Additional MQ-9s at other CENTCOM bases.",
    strikeGroup: "CENTCOM",
    confidence: "confirmed",
    sources: [
      {name: "The War Zone", url: "https://www.twz.com/news-features/supercarrier-uss-gerald-r-ford-has-crossed-into-the-mediterranean"}
    ],
    updated: "Feb 2026"
  },
  {
    id: "ea18g_jordan",
    name: "EA-18G Growler (6 aircraft)",
    type: "fighter",
    class: "EA-18G Growler",
    lat: 31.88, lng: 36.82,
    prevLat: null, prevLng: null,
    prevLabel: null,
    location: "Muwaffaq Salti AB, Jordan — electronic warfare",
    mission: "6 Growlers visible at Muwaffaq Salti in satellite imagery. Electronic warfare / SEAD support. Came from SOUTHCOM Caribbean operations.",
    strikeGroup: "USN EW",
    confidence: "confirmed",
    sources: [
      {name: "The War Zone", url: "https://www.twz.com/news-features/supercarrier-uss-gerald-r-ford-has-crossed-into-the-mediterranean"}
    ],
    updated: "Feb 2026"
  },

  // === SUBMARINES ===
  {
    id: "ssgn729",
    name: "USS Georgia (SSGN-729)",
    type: "submarine",
    class: "Ohio-class SSGN",
    lat: 29.0, lng: 50.0,
    prevLat: 35.0, prevLng: 33.0,
    prevLabel: "Mediterranean (2024)",
    location: "CENTCOM — between Mediterranean & Persian Gulf",
    mission: "Continuously deployed since Aug 2024. Participated in Operation Midnight Hammer (June 2025), firing 30+ Tomahawks at Isfahan. OSINT reports (Feb 18-20) indicate continued CENTCOM operations. Navy has not confirmed exact location.",
    strikeGroup: "CENTCOM attached",
    confidence: "unconfirmed",
    sources: [
      {name: "JFeed Feb 18", url: "https://www.jfeed.com/news-world/uss-georgia-submarine-iran"},
      {name: "National Interest (Midnight Hammer)", url: "https://nationalinterest.org/blog/buzz/this-ohio-class-submarine-blasted-iran-with-cruise-missiles-during-operation-midnight-hammer"}
    ],
    updated: "Feb 18, 2026"
  },
  {
    id: "ssgn726",
    name: "USS Ohio (SSGN-726)",
    type: "submarine",
    class: "Ohio-class SSGN",
    lat: 15.0, lng: 120.0,
    prevLat: 14.79, prevLng: 120.27,
    prevLabel: "Subic Bay, Philippines (Sep 2025)",
    location: "Western Pacific (last known)",
    mission: "Active in Western Pacific 2025. Port visits: Guam (Apr), Brisbane (Jul), Subic Bay, Philippines (Sep 2025 — rare surfacing photographed). Retirement potentially extended past FY2026.",
    strikeGroup: "SUBRON 19",
    confidence: "unconfirmed",
    sources: [
      {name: "USNI News Sep 2025", url: "https://news.usni.org/2025/09/29/u-s-guided-missile-sub-makes-rare-appearance-in-the-philippines"},
      {name: "National Security Journal", url: "https://nationalsecurityjournal.org/the-u-s-navys-great-ohio-class-ssgn-submarine-comeback-has-begun/"}
    ],
    updated: "Sep 2025 (last known)"
  },
  {
    id: "ssn21",
    name: "USS Seawolf (SSN-21)",
    type: "submarine",
    class: "Seawolf-class",
    lat: 25.0, lng: 125.0,
    prevLat: 35.28, prevLng: 139.67,
    prevLabel: "Yokosuka, Japan (Dec 16, 2025)",
    location: "Western Pacific — operating with Lincoln CSG",
    mission: "Port visit to Yokosuka Dec 16, 2025. Operating with USS Abraham Lincoln CSG in Western Pacific / South China Sea before Lincoln was redirected to Arabian Sea.",
    strikeGroup: "DEVRON 5",
    confidence: "unconfirmed",
    sources: [
      {name: "DVIDS Dec 2025", url: "https://www.dvidshub.net/image/9458368/uss-seawolf-ssn-21-pulls-into-fleet-activities-yokosuka"},
      {name: "19FortyFive", url: "https://www.19fortyfive.com/2026/01/the-u-s-navy-sent-a-nuclear-aircraft-carrier-and-seawolf-class-stealth-sub-into-chinas-backyard/"}
    ],
    updated: "Dec 2025"
  },
  {
    id: "ssbn_bangor",
    name: "SSBN Deterrence Patrols (Pacific)",
    type: "submarine",
    class: "Ohio-class SSBN",
    lat: 47.73, lng: -122.71,
    prevLat: null, prevLng: null,
    prevLabel: null,
    location: "Naval Submarine Base Bangor, WA — 8 SSBNs homeported",
    mission: "Continuous at-sea deterrence patrols (Pacific). Exact patrol locations classified. Sep 2025: 4 Trident II D5LE test launches demonstrated readiness. 70% of US deployed strategic nuclear warheads.",
    strikeGroup: "USSTRATCOM",
    confidence: "confirmed",
    sources: [
      {name: "SSP Official", url: "https://www.ssp.navy.mil/About-Us/SSP-Mission/Sustainment/"},
      {name: "Seapower Magazine", url: "https://seapowermagazine.org/successful-trident-ii-d5-life-extension-d5le-launches-demonstrate-continued-readiness-of-nations-sea-based-deterrent/"}
    ],
    updated: "Feb 2026"
  },
  {
    id: "ssbn_kingsbay",
    name: "SSBN Deterrence Patrols (Atlantic)",
    type: "submarine",
    class: "Ohio-class SSBN",
    lat: 30.79, lng: -81.51,
    prevLat: null, prevLng: null,
    prevLabel: null,
    location: "Naval Submarine Base Kings Bay, GA — 6 SSBNs homeported",
    mission: "Continuous at-sea deterrence patrols (Atlantic). Exact patrol locations classified. USS Louisiana currently in mid-life Engineered Refueling Overhaul.",
    strikeGroup: "USSTRATCOM",
    confidence: "confirmed",
    sources: [
      {name: "SSP Official", url: "https://www.ssp.navy.mil/About-Us/SSP-Mission/Sustainment/"}
    ],
    updated: "Feb 2026"
  },

  // === SPECIAL NAVAL ===
  {
    id: "ddg1000",
    name: "USS Zumwalt (DDG-1000)",
    type: "special_naval",
    class: "Zumwalt-class (CPS hypersonic)",
    lat: 30.35, lng: -88.53,
    prevLat: null, prevLng: null,
    prevLabel: null,
    location: "HII Ingalls Shipbuilding, Pascagoula, MS",
    mission: "Completed builder's sea trials Jan 21, 2026 after 3-year CPS hypersonic weapon installation. Will be world's first surface ship armed with hypersonic missiles upon Navy acceptance. Expected active service 2026.",
    strikeGroup: "N/A (testing)",
    confidence: "confirmed",
    sources: [
      {name: "HII Official Jan 2026", url: "https://hii.com/news/hii-completes-builders-sea-trials-for-uss-zumwalt-ddg-1000/"}
    ],
    updated: "Jan 21, 2026"
  },
  {
    id: "lcs32",
    name: "USS Santa Barbara (LCS-32)",
    type: "special_naval",
    class: "Independence-class LCS",
    lat: 26.5, lng: 52.0,
    prevLat: null, prevLng: null,
    prevLabel: null,
    location: "Arabian Gulf — 5th Fleet / CENTCOM operations",
    mission: "Forward deployed LCS in Arabian Gulf. Joint training with A-10 documented Feb 2, 2026.",
    strikeGroup: "5th Fleet",
    confidence: "confirmed",
    sources: [
      {name: "CENTCOM Official", url: "https://www.centcom.mil/MEDIA/igphoto/2002555983/"}
    ],
    updated: "Feb 2, 2026"
  },

  // === MAJOR BASES ===
  {
    id: "ramstein",
    name: "Ramstein Air Base",
    type: "base",
    class: "USAFE HQ / Major Air Base",
    lat: 49.44, lng: 7.60,
    prevLat: null, prevLng: null,
    prevLabel: null,
    location: "Rhineland-Palatinate, Germany — ~16,200 personnel",
    mission: "HQ USAFE-AFAFRICA. 86th Airlift Wing. Major drone control node. Staging point for E-3 AWACS heading to Middle East. Part of Kaiserslautern Military Community (~56,000).",
    strikeGroup: "USAFE",
    confidence: "confirmed",
    sources: [
      {name: "CEPA", url: "https://cepa.org/article/going-going-the-us-base-network-in-europe/"}
    ],
    updated: "Feb 2026"
  },
  {
    id: "al_udeid",
    name: "Al Udeid Air Base",
    type: "base",
    class: "CENTCOM Forward HQ",
    lat: 25.12, lng: 51.32,
    prevLat: null, prevLng: null,
    prevLabel: null,
    location: "Qatar — ~10,000+ personnel (surging)",
    mission: "Largest US base in Middle East. CENTCOM forward HQ. 379th AEW. 100+ aircraft. Struck by Iran June 23, 2025 (retaliation for Midnight Hammer). Partial personnel evacuation underway Feb 2026. THAAD + Patriot defending.",
    strikeGroup: "CENTCOM/379th AEW",
    confidence: "confirmed",
    sources: [
      {name: "Al Jazeera", url: "https://www.aljazeera.com/news/2025/6/12/mapping-us-troops-and-military-bases-in-the-middle-east"}
    ],
    updated: "Feb 2026"
  },
  {
    id: "camp_humphreys",
    name: "Camp Humphreys / USFK HQ",
    type: "base",
    class: "Largest US Overseas Base",
    lat: 37.12, lng: 126.97,
    prevLat: null, prevLng: null,
    prevLabel: null,
    location: "Pyeongtaek, South Korea — ~28,500 USFK total",
    mission: "Largest US overseas base by area. USFK HQ. 8th Army. Combined Forces Command. Potential hub for both Korean Peninsula and Taiwan contingency.",
    strikeGroup: "USFK",
    confidence: "confirmed",
    sources: [
      {name: "CRS Report", url: "https://www.everycrsreport.com/files/2026-02-05_IF12604_f36b7c6fadf8166b14633da7b1fe0635a054fbcc.html"}
    ],
    updated: "Feb 2026"
  },
  {
    id: "kadena",
    name: "Kadena Air Base",
    type: "base",
    class: "Largest USAF Base in East Asia",
    lat: 26.36, lng: 127.77,
    prevLat: null, prevLng: null,
    prevLabel: null,
    location: "Okinawa, Japan — 18th Wing. AWACS stripped for ME surge",
    mission: "Most active USAF base in East Asia. F-15EX arrival (2 aircraft Feb 2026, 36 permanent spring 2026). ALL E-3 AWACS withdrawn for Middle East surge — Indo-Pacific early warning degraded.",
    strikeGroup: "PACAF / 18th Wing",
    confidence: "confirmed",
    sources: [
      {name: "Army Recognition", url: "https://www.armyrecognition.com/news/aerospace-news/2026/us-deploys-nearly-40-of-entire-e-3-sentry-awacs-fleet-to-middle-east-for-potential-war-against-iran"}
    ],
    updated: "Feb 2026"
  },
  {
    id: "camp_lemonnier",
    name: "Camp Lemonnier",
    type: "base",
    class: "Only Permanent US Base in Africa",
    lat: 11.55, lng: 43.16,
    prevLat: null, prevLng: null,
    prevLabel: null,
    location: "Djibouti — ~4,000 personnel",
    mission: "Only permanent US military base in Africa. CJTF-HOA. JSOC task force. SOF hub. Drone ops from nearby Chabelley Airport. 20-year lease ($63M/year). Houthi threat range now reaches base.",
    strikeGroup: "AFRICOM / CJTF-HOA",
    confidence: "confirmed",
    sources: [
      {name: "Camp Lemonnier Official", url: "https://cnreurafcent.cnic.navy.mil/Installations/Camp-Lemonnier-Djibouti/"}
    ],
    updated: "Feb 2026"
  },
  {
    id: "nsa_bahrain",
    name: "NSA Bahrain / 5th Fleet HQ",
    type: "base",
    class: "Naval Support Activity",
    lat: 26.22, lng: 50.60,
    prevLat: null, prevLng: null,
    prevLabel: null,
    location: "Bahrain — ~9,000 DoD personnel",
    mission: "HQ US Naval Forces Central Command (NAVCENT). 5th Fleet. Secures Persian Gulf/Red Sea shipping. Partial evacuation reported Feb 2026.",
    strikeGroup: "NAVCENT / 5th Fleet",
    confidence: "confirmed",
    sources: [
      {name: "Al Jazeera", url: "https://www.aljazeera.com/news/2025/6/12/mapping-us-troops-and-military-bases-in-the-middle-east"}
    ],
    updated: "Feb 2026"
  },
  {
    id: "rota",
    name: "Naval Station Rota / Aegis BMD Destroyers",
    type: "missile_defense",
    class: "Naval Station / BMD",
    lat: 36.64, lng: -6.35,
    prevLat: null, prevLng: null,
    prevLabel: null,
    location: "Rota, Spain — 4 Aegis BMD destroyers homeported",
    mission: "Homeport of 4 Aegis BMD destroyers. Key logistics hub for Europe/Africa/MENA. 6th destroyer deployment planned. Part of NATO EPAA BMD network.",
    strikeGroup: "6th Fleet / NATO BMD",
    confidence: "confirmed",
    sources: [
      {name: "Defense Priorities", url: "https://www.defensepriorities.org/explainers/aligning-global-military-posture-with-us-interests/"}
    ],
    updated: "Feb 2026"
  },

  // === MISSILE DEFENSE ===
  {
    id: "thaad_korea",
    name: "THAAD Battery (Seongju)",
    type: "missile_defense",
    class: "THAAD",
    lat: 35.92, lng: 128.18,
    prevLat: null, prevLng: null,
    prevLabel: null,
    location: "Seongju, South Korea — permanent",
    mission: "Operational since Sep 2017. 6 launchers, 48 interceptors, AN/TPY-2 radar. Covers Camp Humphreys. 35th ADA Brigade. Chinese objection ongoing.",
    strikeGroup: "35th ADA Brigade",
    confidence: "confirmed",
    sources: [
      {name: "MDAA", url: "https://www.missiledefenseadvocacy.org/defense-systems/terminal-high-altitude-area-defense-thaad/"}
    ],
    updated: "Feb 2026"
  },
  {
    id: "thaad_guam",
    name: "THAAD Battery (Guam)",
    type: "missile_defense",
    class: "THAAD",
    lat: 13.50, lng: 144.80,
    prevLat: null, prevLng: null,
    prevLabel: null,
    location: "Guam — permanent since June 2016",
    mission: "Defends against North Korean/Chinese IRBMs. Infrastructure challenges (GAO 2025 report). Guam Defense System expansion planned FY2027-2032.",
    strikeGroup: "Task Force Talon",
    confidence: "confirmed",
    sources: [
      {name: "Defense News GAO", url: "https://www.defensenews.com/pentagon/2025/05/28/no-clear-plan-for-supporting-guam-missile-defense-system-gao-finds/"}
    ],
    updated: "Feb 2026"
  },
  {
    id: "thaad_me",
    name: "THAAD Batteries (Middle East surge)",
    type: "missile_defense",
    class: "THAAD",
    lat: 29.20, lng: 48.00,
    prevLat: null, prevLng: null,
    prevLabel: null,
    location: "Kuwait/Jordan/Qatar area — surging",
    mission: "Additional THAAD batteries deploying to Middle East (CNN Jan 29). Protecting Al Udeid, al-Dhafra, key bases from Iranian ballistic missiles. Limited global inventory (~8 batteries total).",
    strikeGroup: "CENTCOM ADA",
    confidence: "unconfirmed",
    sources: [
      {name: "Army Recognition", url: "https://armyrecognition.com/news/army-news/2026/u-s-deploys-more-thaad-air-defense-missiles-to-middle-east-amid-possible-military-action-against-iran"},
      {name: "CNN", url: "https://www.cnn.com/2026/02/20/politics/military-power-buildup-us-iran-intl-vis"}
    ],
    updated: "Feb 2026"
  },
  {
    id: "aegis_romania",
    name: "Aegis Ashore (Romania)",
    type: "missile_defense",
    class: "Aegis Ashore BMD",
    lat: 44.10, lng: 24.18,
    prevLat: null, prevLng: null,
    prevLabel: null,
    location: "NSF Deveselu, Romania — operational since 2016",
    mission: "SM-3 interceptors. Protects Europe from Iranian ballistic missiles. Retained during Oct 2025 US drawdown from Romania.",
    strikeGroup: "NATO EPAA",
    confidence: "confirmed",
    sources: [
      {name: "US Navy", url: "https://www.navy.mil/Press-Office/News-Stories/Article/3620258/the-aegis-ashore-missile-defense-system-in-naval-support-facility-redizkowo-pol/"}
    ],
    updated: "Feb 2026"
  },
  {
    id: "aegis_poland",
    name: "Aegis Ashore (Poland)",
    type: "missile_defense",
    class: "Aegis Ashore BMD",
    lat: 54.07, lng: 17.50,
    prevLat: null, prevLng: null,
    prevLabel: null,
    location: "NSF Redzikowo, Poland — operational",
    mission: "Accepted Dec 2023. Full NATO integration 2024. New CO assigned Dec 22, 2025. Part of NATO EPAA network with Romania and Rota destroyers.",
    strikeGroup: "NATO EPAA",
    confidence: "confirmed",
    sources: [
      {name: "Defence Industry EU", url: "https://defence-industry.eu/u-s-navy-appoints-new-commander-at-redzikowo-aegis-ashore-missile-defence-facility-in-poland/"}
    ],
    updated: "Dec 2025"
  },
  {
    id: "muwaffaq_base",
    name: "Muwaffaq Salti Air Base",
    type: "base",
    class: "Major Forward Air Hub",
    lat: 31.83, lng: 36.76,
    prevLat: null, prevLng: null,
    prevLabel: null,
    location: "Azraq, Jordan — MAJOR SURGE hub. ~3,800 + surge personnel",
    mission: "Feb 2026 MAJOR SURGE: per satellite imagery every visible spot filled. Total: ~30 F-35As, 18 F-15Es, 12 F-16s, 6 EA-18Gs, 2 MQ-9s. Expanded air defense perimeter visible. Patriot batteries + possible THAAD. New primary forward strike hub.",
    strikeGroup: "CENTCOM Strike Hub",
    confidence: "confirmed",
    sources: [
      {name: "CNN Satellite Feb 20", url: "https://www.cnn.com/2026/02/20/politics/military-power-buildup-us-iran-intl-vis"},
      {name: "The War Zone", url: "https://www.twz.com/news-features/final-pieces-moving-into-place-for-potential-attack-on-iran"}
    ],
    updated: "Feb 20, 2026"
  },
  {
    id: "diego_garcia_base",
    name: "Diego Garcia Strategic Base",
    type: "base",
    class: "Strategic Air/Naval Base",
    lat: -7.31, lng: 72.43,
    prevLat: null, prevLng: null,
    prevLabel: null,
    location: "British Indian Ocean Territory — B-52 capable, ~3,000 personnel",
    mission: "Airfield with B-2/B-52 capable runways. Fuel depots. Maritime pre-positioning. Trump named as Iran strike staging base (Feb 18). Used for B-2 missions in Midnight Hammer. UK-Mauritius sovereignty dispute.",
    strikeGroup: "USINDOPACOM / CENTCOM",
    confidence: "confirmed",
    sources: [
      {name: "Chatham House", url: "https://www.chathamhouse.org/2026/02/us-military-base-diego-garcia-what-its-strategic-importance"}
    ],
    updated: "Feb 2026"
  },
  {
    id: "edca_philippines",
    name: "Philippines EDCA Sites (9 total)",
    type: "base",
    class: "Enhanced Defense Cooperation Agreement",
    lat: 14.99, lng: 120.49,
    prevLat: null, prevLng: null,
    prevLabel: null,
    location: "9 EDCA sites across Philippines — Luzon, Palawan, Cebu, Mindanao",
    mission: "US pre-positioning rights at 9 sites. $82M allocated. Typhoon/NMESIS anti-ship missiles deployed during Balikatan 25. Critical for Taiwan contingency. Sites face South China Sea and Taiwan Strait.",
    strikeGroup: "INDOPACOM",
    confidence: "confirmed",
    sources: [
      {name: "PACOM EDCA", url: "https://www.pacom.mil/Media/NEWS/Article/3350502/philippines-us-announce-locations-of-four-new-edca-sites/"}
    ],
    updated: "Feb 2026"
  },
  {
    id: "mrf_darwin",
    name: "MRF-D (Marine Rotational Force Darwin)",
    type: "base",
    class: "Marine Rotational Force",
    lat: -12.46, lng: 130.85,
    prevLat: null, prevLng: null,
    prevLabel: null,
    location: "Darwin, Australia — ~2,500 Marines (first time at max)",
    mission: "14th rotation (2025). First time at 2,500 authorized maximum. Includes HIMARS platoon. MAGTF structure. Operates across Northern Territory and Indo-Pacific.",
    strikeGroup: "I MEF / MRF-D",
    confidence: "confirmed",
    sources: [
      {name: "PACOM", url: "https://www.pacom.mil/Media/NEWS/Article/1918439/us-marines-reach-2500-in-darwin-for-first-time/"}
    ],
    updated: "2025"
  },
  {
    id: "manda_bay",
    name: "Camp Simba / Manda Bay",
    type: "base",
    class: "Air Base (Kenya)",
    lat: -2.30, lng: 40.90,
    prevLat: null, prevLng: null,
    prevLabel: null,
    location: "Lamu County, Kenya — ~200-400 US personnel",
    mission: "406th AEW. ISR over Somalia (contractor-operated). $70M runway expansion groundbreaking Jan 29, 2026. Used for Somalia counterterrorism. 126 attacks in Somalia in 2025 (record).",
    strikeGroup: "AFRICOM / 406th AEW",
    confidence: "confirmed",
    sources: [
      {name: "Task & Purpose", url: "https://taskandpurpose.com/news/us-kenya-manda-bay-somalia/"}
    ],
    updated: "Jan 2026"
  }
];


// ============================================================
// SVG MARKER GENERATORS — Simple & Clean
// ============================================================

function createSVGMarker(type, color, isConfirmed, size) {
  size = size || 32;
  const s = size;
  const half = s / 2;
  const dash = isConfirmed ? '' : 'stroke-dasharray="3,2"';
  const fO = isConfirmed ? '0.95' : '0.5';
  const sO = isConfirmed ? '1' : '0.6';
  const uid = `m${Math.random().toString(36).substr(2,6)}`;

  // Simple centered icon paths — drawn at 24x24 viewBox then placed in center
  const icons = {
    // AIRCRAFT CARRIER — classic ship side-view: hull + deck + island tower
    hexagon: `<g transform="translate(${half},${half}) scale(${s/32})">
      <path d="M-12,2 L-10,-1 -8,-3 8,-3 10,-1 12,2 10,4 -10,4 Z" fill="${color}" fill-opacity="${fO}" stroke="${color}" stroke-width="1" ${dash}/>
      <rect x="-8" y="-3" width="16" height="1" fill="${color}" fill-opacity="${fO}" opacity="0.6"/>
      <rect x="3" y="-7" width="3" height="4" rx="0.5" fill="${color}" fill-opacity="${fO}" stroke="${color}" stroke-width="0.7" ${dash}/>
      <line x1="-8" y1="-3" x2="8" y2="-3" stroke="${color}" stroke-width="1.2" opacity="${sO}"/>
    </g>`,

    // BOMBER — big swept wing, like a B-2 or B-52 top-down
    bomber: `<g transform="translate(${half},${half}) scale(${s/32})">
      <path d="M0,-10 L2,-6 12,2 10,4 2,2 1,6 4,10 2,10 0,7 -2,10 -4,10 -1,6 -2,2 -10,4 -12,2 -2,-6 Z" fill="${color}" fill-opacity="${fO}" stroke="${color}" stroke-width="0.8" ${dash}/>
    </g>`,

    // FIGHTER — small sleek jet, classic triangle-ish
    triangle: `<g transform="translate(${half},${half}) scale(${s/32})">
      <path d="M0,-10 L2,-5 9,1 8,3 2,1 1,5 4,9 2,9 0,6 -2,9 -4,9 -1,5 -2,1 -8,3 -9,1 -2,-5 Z" fill="${color}" fill-opacity="${fO}" stroke="${color}" stroke-width="0.8" ${dash}/>
    </g>`,

    // TANKER — fuel drop / gas pump shape
    diamond: `<g transform="translate(${half},${half}) scale(${s/32})">
      <path d="M0,-9 C4,-4 7,0 7,4 C7,8 4,10 0,10 C-4,10 -7,8 -7,4 C-7,0 -4,-4 0,-9 Z" fill="${color}" fill-opacity="${fO}" stroke="${color}" stroke-width="1" ${dash}/>
      <text x="0" y="5" text-anchor="middle" font-size="9" font-weight="bold" font-family="sans-serif" fill="#0d1117" opacity="0.7">F</text>
    </g>`,

    // SURVEILLANCE — eye icon
    eye: `<g transform="translate(${half},${half}) scale(${s/32})">
      <path d="M-11,0 C-6,-7 6,-7 11,0 C6,7 -6,7 -11,0 Z" fill="${color}" fill-opacity="${fO}" stroke="${color}" stroke-width="0.8" ${dash}/>
      <circle cx="0" cy="0" r="4" fill="#0d1117" opacity="0.6"/>
      <circle cx="0" cy="0" r="2" fill="${color}" opacity="0.9"/>
    </g>`,

    // SUBMARINE — pill/cigar shape with conning tower
    invtriangle: `<g transform="translate(${half},${half}) scale(${s/32})">
      <ellipse cx="0" cy="2" rx="11" ry="4" fill="${color}" fill-opacity="${fO}" stroke="${color}" stroke-width="0.8" ${dash}/>
      <rect x="-2" y="-4" width="4" height="6" rx="1" fill="${color}" fill-opacity="${fO}" stroke="${color}" stroke-width="0.7" ${dash}/>
      <line x1="0" y1="-6" x2="0" y2="-4" stroke="${color}" stroke-width="1" opacity="${sO}"/>
    </g>`,

    // GROUND BASE — castle turret
    square: `<g transform="translate(${half},${half}) scale(${s/32})">
      <rect x="-8" y="-2" width="16" height="12" rx="1" fill="${color}" fill-opacity="${fO}" stroke="${color}" stroke-width="0.8" ${dash}/>
      <rect x="-9" y="-2" width="4" height="3" fill="${color}" fill-opacity="${fO}" stroke="${color}" stroke-width="0.6" ${dash}/>
      <rect x="5" y="-2" width="4" height="3" fill="${color}" fill-opacity="${fO}" stroke="${color}" stroke-width="0.6" ${dash}/>
      <rect x="-2" y="-5" width="4" height="6" fill="${color}" fill-opacity="${fO}" stroke="${color}" stroke-width="0.6" ${dash}/>
      <rect x="-10" y="-6" width="3" height="1.5" fill="${color}" fill-opacity="${fO}"/>
      <rect x="-5" y="-6" width="3" height="1.5" fill="${color}" fill-opacity="${fO}"/>
      <rect x="3" y="-6" width="3" height="1.5" fill="${color}" fill-opacity="${fO}"/>
      <rect x="7" y="-6" width="3" height="1.5" fill="${color}" fill-opacity="${fO}"/>
      <rect x="-1" y="-9" width="2" height="2" fill="${color}" fill-opacity="${fO}"/>
    </g>`,

    // MISSILE DEFENSE — rocket / missile pointing up
    shield: `<g transform="translate(${half},${half}) scale(${s/32})">
      <rect x="-2" y="-4" width="4" height="12" rx="1.5" fill="${color}" fill-opacity="${fO}" stroke="${color}" stroke-width="0.8" ${dash}/>
      <polygon points="0,-10 -3,-4 3,-4" fill="${color}" fill-opacity="${fO}" stroke="${color}" stroke-width="0.6" ${dash}/>
      <polygon points="-2,8 -5,12 -2,10" fill="${color}" fill-opacity="${fO}"/>
      <polygon points="2,8 5,12 2,10" fill="${color}" fill-opacity="${fO}"/>
      <line x1="-2" y1="0" x2="2" y2="0" stroke="#0d1117" stroke-width="0.8" opacity="0.4"/>
    </g>`,

    // AMPHIBIOUS — ship with flat deck / landing craft
    pentagon: `<g transform="translate(${half},${half}) scale(${s/32})">
      <path d="M-11,3 L-9,-1 -7,-3 7,-3 9,-1 11,3 9,5 -9,5 Z" fill="${color}" fill-opacity="${fO}" stroke="${color}" stroke-width="0.8" ${dash}/>
      <rect x="-4" y="-6" width="8" height="3" rx="0.5" fill="${color}" fill-opacity="${fO}" stroke="${color}" stroke-width="0.6" ${dash}/>
      <line x1="-7" y1="-3" x2="7" y2="-3" stroke="${color}" stroke-width="1" opacity="${sO}"/>
    </g>`,

    // DRONE — small propeller craft, simple X shape
    smalldiamond: `<g transform="translate(${half},${half}) scale(${s/32})">
      <ellipse cx="0" cy="0" rx="3" ry="2" fill="${color}" fill-opacity="${fO}" stroke="${color}" stroke-width="0.6" ${dash}/>
      <line x1="0" y1="0" x2="-8" y2="-6" stroke="${color}" stroke-width="1.2" opacity="${sO}" ${dash}/>
      <line x1="0" y1="0" x2="8" y2="-6" stroke="${color}" stroke-width="1.2" opacity="${sO}" ${dash}/>
      <line x1="0" y1="0" x2="-8" y2="6" stroke="${color}" stroke-width="1.2" opacity="${sO}" ${dash}/>
      <line x1="0" y1="0" x2="8" y2="6" stroke="${color}" stroke-width="1.2" opacity="${sO}" ${dash}/>
      <circle cx="-8" cy="-6" r="2.5" fill="none" stroke="${color}" stroke-width="0.8" opacity="${sO}" ${dash}/>
      <circle cx="8" cy="-6" r="2.5" fill="none" stroke="${color}" stroke-width="0.8" opacity="${sO}" ${dash}/>
      <circle cx="-8" cy="6" r="2.5" fill="none" stroke="${color}" stroke-width="0.8" opacity="${sO}" ${dash}/>
      <circle cx="8" cy="6" r="2.5" fill="none" stroke="${color}" stroke-width="0.8" opacity="${sO}" ${dash}/>
    </g>`,

    // SPECIAL NAVAL — anchor symbol
    hexoutline: `<g transform="translate(${half},${half}) scale(${s/32})">
      <circle cx="0" cy="-7" r="3" fill="none" stroke="${color}" stroke-width="1.2" opacity="${sO}" ${dash}/>
      <line x1="0" y1="-4" x2="0" y2="10" stroke="${color}" stroke-width="1.5" opacity="${sO}" ${dash}/>
      <line x1="-6" y1="-1" x2="6" y2="-1" stroke="${color}" stroke-width="1.5" opacity="${sO}" ${dash}/>
      <path d="M-8,8 C-4,4 0,10 0,10 C0,10 4,4 8,8" fill="none" stroke="${color}" stroke-width="1.5" opacity="${sO}" ${dash}/>
    </g>`
  };

  const shapeKey = ASSET_TYPES[type] ? ASSET_TYPES[type].shape : 'square';
  const icon = icons[shapeKey] || icons.square;

  return `<svg width="${s}" height="${s}" viewBox="0 0 ${s} ${s}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <filter id="${uid}" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="1.5" result="blur"/>
        <feFlood flood-color="${color}" flood-opacity="0.4" result="c"/>
        <feComposite in="c" in2="blur" operator="in" result="glow"/>
        <feMerge><feMergeNode in="glow"/><feMergeNode in="SourceGraphic"/></feMerge>
      </filter>
    </defs>
    <g filter="url(#${uid})">${icon}</g>
  </svg>`;
}

function createSmallSVGForLegend(type, color) {
  return createSVGMarker(type, color, true, 22);
}


// ============================================================
// MAP INITIALIZATION
// ============================================================

const map = L.map('map', {
  center: [28, 35],
  zoom: 3,
  minZoom: 2,
  maxZoom: 14,
  zoomControl: true,
  attributionControl: true,
  worldCopyJump: true
});

// CartoDB Dark Matter tiles
L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/">CARTO</a>',
  subdomains: 'abcd',
  maxZoom: 19
}).addTo(map);

// Move zoom control to bottom-left
map.zoomControl.setPosition('bottomleft');


// ============================================================
// STATE
// ============================================================

let activeFilters = new Set(Object.keys(ASSET_TYPES).map(k => ASSET_TYPES[k].filterGroup));
let markerLayers = {};  // id -> { marker, line, type }
let allLayerGroup = L.layerGroup().addTo(map);
let lineLayerGroup = L.layerGroup().addTo(map);
let selectedAssetId = null;


// ============================================================
// OFFSET OVERLAPPING MARKERS
// ============================================================

function applyOffsets(assetList) {
  // Group by approximate location (rounded to 0.5 degrees)
  const groups = {};
  assetList.forEach(a => {
    const key = `${Math.round(a.lat * 2) / 2}_${Math.round(a.lng * 2) / 2}`;
    if (!groups[key]) groups[key] = [];
    groups[key].push(a);
  });

  Object.values(groups).forEach(group => {
    if (group.length <= 1) return;
    const angleStep = (2 * Math.PI) / group.length;
    const radius = 0.25 + (group.length * 0.06); // degrees offset
    group.forEach((a, i) => {
      if (i === 0) return; // first stays put
      a.lat += radius * Math.cos(angleStep * i);
      a.lng += radius * Math.sin(angleStep * i);
    });
  });
}

applyOffsets(assets);


// ============================================================
// CREATE MARKERS & LINES
// ============================================================

function getShortName(name) {
  // Extract short identifier
  const match = name.match(/USS\s+(\S+)/);
  if (match) return match[1];
  // For non-USS assets, try to get a meaningful short name
  const parenMatch = name.match(/^([^(]+)/);
  if (parenMatch) {
    let short = parenMatch[1].trim();
    if (short.length > 22) {
      // Try splitting on spaces and taking first meaningful words
      const words = short.split(/\s+/);
      short = words.slice(0, 2).join(' ');
    }
    return short.substring(0, 22);
  }
  return name.substring(0, 22);
}

assets.forEach(asset => {
  const typeInfo = ASSET_TYPES[asset.type];
  if (!typeInfo) return;
  const isConfirmed = asset.confidence === 'confirmed';
  const color = typeInfo.color;
  const svgHtml = createSVGMarker(asset.type, color, isConfirmed, 38);

  const icon = L.divIcon({
    className: `asset-marker ${isConfirmed ? 'confirmed' : 'unconfirmed'}`,
    html: `<div style="--glow-color: ${color}55">${svgHtml}<div class="asset-label">${getShortName(asset.name)}</div></div>`,
    iconSize: [38, 38],
    iconAnchor: [19, 19]
  });

  const marker = L.marker([asset.lat, asset.lng], { icon: icon })
    .on('click', () => openDetailPanel(asset));

  // Movement line
  let line = null;
  if (asset.prevLat !== null && asset.prevLng !== null) {
    const dashArray = isConfirmed ? '12 6' : '6 8';
    line = L.polyline(
      [[asset.prevLat, asset.prevLng], [asset.lat, asset.lng]],
      {
        color: color,
        weight: isConfirmed ? 2 : 1.5,
        opacity: isConfirmed ? 0.55 : 0.3,
        dashArray: dashArray,
        lineCap: 'round'
      }
    );

    // Add arrowhead at end
    const arrowIcon = L.divIcon({
      className: 'arrow-marker',
      html: `<svg width="14" height="14" viewBox="0 0 14 14"><polygon points="7,0 14,14 7,10 0,14" fill="${color}" opacity="${isConfirmed ? 0.6 : 0.35}"/></svg>`,
      iconSize: [14, 14],
      iconAnchor: [7, 7]
    });

    // Calculate angle for arrow rotation
    const dx = asset.lng - asset.prevLng;
    const dy = asset.lat - asset.prevLat;
    const angle = Math.atan2(dx, dy) * (180 / Math.PI);

    const midLat = (asset.prevLat + asset.lat) / 2;
    const midLng = (asset.prevLng + asset.lng) / 2;

    const arrowMarkerIcon = L.divIcon({
      className: 'arrow-marker',
      html: `<svg width="16" height="16" viewBox="0 0 16 16" style="transform: rotate(${-angle + 180}deg); filter: drop-shadow(0 0 3px ${color}40);"><polygon points="8,0 16,16 8,11 0,16" fill="${color}" opacity="${isConfirmed ? 0.65 : 0.35}"/></svg>`,
      iconSize: [16, 16],
      iconAnchor: [8, 8]
    });

    const arrowMarker = L.marker([midLat, midLng], { icon: arrowMarkerIcon, interactive: false });

    // Origin dot — marks where the piece "was" (board game style)
    const originIcon = L.divIcon({
      className: 'arrow-marker',
      html: `<svg width="10" height="10" viewBox="0 0 10 10"><circle cx="5" cy="5" r="3" fill="none" stroke="${color}" stroke-width="1.2" opacity="${isConfirmed ? 0.5 : 0.25}"/><circle cx="5" cy="5" r="1" fill="${color}" opacity="${isConfirmed ? 0.5 : 0.25}"/></svg>`,
      iconSize: [10, 10],
      iconAnchor: [5, 5]
    });
    const originMarker = L.marker([asset.prevLat, asset.prevLng], { icon: originIcon, interactive: false });

    markerLayers[asset.id] = {
      marker, line, arrowMarker, originMarker, type: asset.type,
      filterGroup: typeInfo.filterGroup
    };

    return;
  }

  markerLayers[asset.id] = {
    marker, line: null, arrowMarker: null, originMarker: null, type: asset.type,
    filterGroup: typeInfo.filterGroup
  };
});

function renderMarkers() {
  allLayerGroup.clearLayers();
  lineLayerGroup.clearLayers();

  Object.values(markerLayers).forEach(entry => {
    const typeInfo = ASSET_TYPES[entry.type];
    if (!typeInfo) return;
    if (!activeFilters.has(typeInfo.filterGroup)) return;

    allLayerGroup.addLayer(entry.marker);
    if (entry.line) {
      lineLayerGroup.addLayer(entry.line);
    }
    if (entry.arrowMarker) {
      lineLayerGroup.addLayer(entry.arrowMarker);
    }
    if (entry.originMarker) {
      lineLayerGroup.addLayer(entry.originMarker);
    }
  });
}

renderMarkers();


// ============================================================
// LEGEND
// ============================================================

function buildLegend() {
  const container = document.getElementById('legend-items');
  container.innerHTML = '';

  Object.entries(ASSET_TYPES).forEach(([key, info]) => {
    const item = document.createElement('div');
    item.className = 'legend-item';
    item.innerHTML = `
      <div class="legend-icon">${createSmallSVGForLegend(key, info.color)}</div>
      <span>${info.label}</span>
    `;
    container.appendChild(item);
  });
}

buildLegend();

// Legend collapse toggle
document.getElementById('legend-toggle').addEventListener('click', () => {
  document.getElementById('legend').classList.toggle('collapsed');
});


// ============================================================
// FILTERS
// ============================================================

function buildFilters() {
  const container = document.getElementById('filter-buttons');
  container.innerHTML = '';

  // Show All button
  const showAllBtn = document.createElement('button');
  showAllBtn.className = 'filter-btn show-all';
  showAllBtn.textContent = 'ALL';
  showAllBtn.addEventListener('click', () => {
    activeFilters = new Set(Object.keys(ASSET_TYPES).map(k => ASSET_TYPES[k].filterGroup));
    updateFilterUI();
    renderMarkers();
    updateStats();
  });
  container.appendChild(showAllBtn);

  // Individual filter buttons
  const groups = new Map();
  Object.entries(ASSET_TYPES).forEach(([key, info]) => {
    if (!groups.has(info.filterGroup)) {
      groups.set(info.filterGroup, info);
    }
  });

  groups.forEach((info, group) => {
    const btn = document.createElement('button');
    btn.className = `filter-btn ${activeFilters.has(group) ? 'active' : ''}`;
    btn.style.setProperty('--color', info.color);
    btn.textContent = group;
    btn.dataset.group = group;
    btn.addEventListener('click', () => {
      if (activeFilters.has(group)) {
        activeFilters.delete(group);
      } else {
        activeFilters.add(group);
      }
      updateFilterUI();
      renderMarkers();
      updateStats();
    });
    container.appendChild(btn);
  });
}

function updateFilterUI() {
  document.querySelectorAll('.filter-btn[data-group]').forEach(btn => {
    btn.classList.toggle('active', activeFilters.has(btn.dataset.group));
  });
}

buildFilters();


// ============================================================
// DETAIL PANEL
// ============================================================

function openDetailPanel(asset) {
  selectedAssetId = asset.id;
  const panel = document.getElementById('detail-panel');
  const content = document.getElementById('detail-content');
  const typeInfo = ASSET_TYPES[asset.type];
  const isConfirmed = asset.confidence === 'confirmed';

  let movementHTML = '';
  if (asset.prevLat !== null && asset.prevLabel) {
    movementHTML = `
      <div class="detail-section">
        <div class="detail-section-title">MOVEMENT HISTORY</div>
        <div class="detail-movement">
          ${asset.prevLabel} <span class="detail-movement-arrow">→</span> Current position
        </div>
      </div>
    `;
  }

  let sourcesHTML = '';
  if (asset.sources && asset.sources.length > 0) {
    sourcesHTML = `
      <div class="detail-section">
        <div class="detail-section-title">SOURCES</div>
        <ul class="detail-sources">
          ${asset.sources.map(s => `<li><a href="${s.url}" target="_blank" rel="noopener">${s.name}</a></li>`).join('')}
        </ul>
      </div>
    `;
  }

  content.innerHTML = `
    <div class="detail-name">${asset.name}</div>
    <div class="detail-badges">
      <span class="detail-badge badge-type" style="color: ${typeInfo.color}; border-color: ${typeInfo.color}40">${typeInfo.label.toUpperCase()}</span>
      <span class="detail-badge ${isConfirmed ? 'badge-confirmed' : 'badge-unconfirmed'}">${isConfirmed ? 'CONFIRMED' : 'UNCONFIRMED / OSINT'}</span>
    </div>

    <div class="detail-section">
      <div class="detail-section-title">CLASS</div>
      <div class="detail-strike-group">${asset.class}</div>
    </div>

    ${asset.strikeGroup ? `
    <div class="detail-section">
      <div class="detail-section-title">STRIKE GROUP / UNIT</div>
      <div class="detail-strike-group">${asset.strikeGroup}</div>
    </div>
    ` : ''}

    <div class="detail-section">
      <div class="detail-section-title">CURRENT LOCATION</div>
      <div class="detail-location">${asset.location}</div>
      <div class="detail-coords">${asset.lat.toFixed(2)}°N, ${asset.lng.toFixed(2)}°${asset.lng >= 0 ? 'E' : 'W'}</div>
    </div>

    ${movementHTML}

    <div class="detail-section">
      <div class="detail-section-title">MISSION / DEPLOYMENT</div>
      <div class="detail-mission">${asset.mission}</div>
    </div>

    ${sourcesHTML}

    <div class="detail-updated">LAST UPDATED: ${asset.updated}</div>
  `;

  panel.classList.add('open');

  // Pan map to asset
  map.panTo([asset.lat, asset.lng], { animate: true, duration: 0.5 });
}

document.getElementById('detail-close').addEventListener('click', () => {
  document.getElementById('detail-panel').classList.remove('open');
  selectedAssetId = null;
});

// Close panel on Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document.getElementById('detail-panel').classList.remove('open');
    selectedAssetId = null;
  }
});


// ============================================================
// STATS BAR
// ============================================================

function updateStats() {
  const visible = assets.filter(a => {
    const typeInfo = ASSET_TYPES[a.type];
    return typeInfo && activeFilters.has(typeInfo.filterGroup);
  });

  const confirmed = visible.filter(a => a.confidence === 'confirmed').length;
  const unconfirmed = visible.filter(a => a.confidence !== 'confirmed').length;

  document.getElementById('stat-total').textContent = visible.length;
  document.getElementById('stat-confirmed').textContent = confirmed;
  document.getElementById('stat-unconfirmed').textContent = unconfirmed;
}

updateStats();


// ============================================================
// ZOOM-BASED LABEL VISIBILITY
// ============================================================

function updateLabelVisibility() {
  const zoom = map.getZoom();
  const labels = document.querySelectorAll('.asset-label');
  labels.forEach(label => {
    label.style.display = zoom >= 4 ? 'block' : 'none';
  });
}

map.on('zoomend', updateLabelVisibility);

// ============================================================
// MAP CLICK TO CLOSE DETAIL
// ============================================================

map.on('click', () => {
  if (selectedAssetId) {
    document.getElementById('detail-panel').classList.remove('open');
    selectedAssetId = null;
  }
});


// ============================================================
// MOBILE BEHAVIORS
// ============================================================

const isMobile = () => window.innerWidth <= 768;

// Auto-collapse legend on mobile
if (isMobile()) {
  document.getElementById('legend').classList.add('collapsed');
}

// Swipe-to-dismiss for mobile detail bottom sheet
(function setupMobileSwipeDismiss() {
  const panel = document.getElementById('detail-panel');
  let startY = 0;
  let currentY = 0;
  let isDragging = false;

  panel.addEventListener('touchstart', (e) => {
    if (!isMobile()) return;
    startY = e.touches[0].clientY;
    isDragging = true;
    panel.style.transition = 'none';
  }, { passive: true });

  panel.addEventListener('touchmove', (e) => {
    if (!isDragging || !isMobile()) return;
    currentY = e.touches[0].clientY;
    const diff = currentY - startY;
    if (diff > 0) {
      // Only allow dragging downward
      panel.style.transform = `translateY(${diff}px)`;
    }
  }, { passive: true });

  panel.addEventListener('touchend', () => {
    if (!isDragging || !isMobile()) return;
    isDragging = false;
    panel.style.transition = '';
    const diff = currentY - startY;
    if (diff > 100) {
      // Swiped down far enough — dismiss
      panel.classList.remove('open');
      selectedAssetId = null;
    }
    // Reset transform (CSS transition will animate it back)
    panel.style.transform = '';
  });
})();

// On mobile, when detail panel opens, adjust map center slightly upward
const originalOpenDetailPanel = openDetailPanel;
openDetailPanel = function(asset) {
  originalOpenDetailPanel(asset);
  if (isMobile()) {
    // Pan the map so the asset is in the upper portion of the visible area
    setTimeout(() => {
      const point = map.latLngToContainerPoint([asset.lat, asset.lng]);
      const offsetY = window.innerHeight * 0.2; // shift up by 20% of screen
      const newPoint = L.point(point.x, point.y - offsetY);
      const newLatLng = map.containerPointToLatLng(newPoint);
      map.panTo(newLatLng, { animate: true, duration: 0.3 });
    }, 50);
  }
};
