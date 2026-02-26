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
    lat: 34.20, lng: 28.50,
    prevLat: 35.48, prevLng: 24.15,
    prevLabel: "Souda Bay, Crete (Feb 22-26)",
    movementDate: "2026-02-26",
    location: "Eastern Mediterranean — en route to Israel (ETA ~24 hrs)",
    mission: "Deployment Day 244+. Transited Strait of Gibraltar Feb 20. Escorts: USS Mahan (DDG-72), USS Bainbridge (DDG-96), USS Winston S. Churchill (DDG-81). CVW-8: 4x F/A-18E/F squadrons, EA-18G (VAQ-142), E-2D (VAW-124). Feb 24: Ford arrived at Souda Bay, Crete (NATO base). Spent 4 days resupplying. WSJ reports severe crew morale issues at 240+ days deployed — potential 11-month deployment (record). Sewage/toilet issues persist. CNN (Feb 25): US military prepared to strike Iran as early as this weekend. Feb 26: Ford departed Souda Bay Crete heading eastern Med — Israel Hayom reports expected off Israel coast within 24 hours. Crew took on supplies/equipment during 4-day stop. CORRECTION: Previous reports of Ford docking at Haifa were premature; Ford was at Souda Bay Feb 22-26. Now en route to join Lincoln CSG. Geneva Round 3 talks kicked off same day. CSG-12 not yet at final station.",
    strikeGroup: "CSG-12 / CVW-8 / DESRON 2",
    confidence: "confirmed",
    sources: [
      {name: "New York Times Feb 22", url: "https://www.nytimes.com/2026/02/22/us/politics/trump-considers-targeted-strike-against-iran-followed-by-larger-attack.html"},
      {name: "OSINTdefender (Churchill transit)", url: "https://x.com/sentdefender/status/2025706655501910527"},
      {name: "Stars and Stripes Feb 20", url: "https://www.stripes.com/branches/navy/2026-02-20/ford-middle-east-mediterranean-iran-20813486.html"},
      {name: "ItaMilRadar Feb 20", url: "https://www.itamilradar.com/2026/02/20/us-carrier-strike-group-12-enters-the-mediterranean-via-gibraltar-signaling-rapid-airpower-option-toward-iran/"},
      {name: "USNI Fleet Tracker Feb 17", url: "https://news.usni.org/2026/02/17/usni-news-fleet-and-marine-tracker-feb-17-2026"},
      {name: "The War Zone Feb 20", url: "https://www.twz.com/news-features/supercarrier-uss-gerald-r-ford-has-crossed-into-the-mediterranean"},
      {name: "The Media Line Feb 21", url: "https://themedialine.org/top-stories/largest-us-military-buildup-since-2003-raises-prospect-of-multi-week-strike-on-iran/"},
      {name: "ItaMilRadar Feb 24", url: "https://www.itamilradar.com/2026/02/24/uss-gerald-r-ford-stops-in-souda-bay-forward-presence-signals-us-readiness-amid-iran-tensions/"},
      {name: "Chosun Ilbo Feb 24", url: "https://www.chosun.com/english/world-en/2026/02/24/76PNTYFGCNBW3DHMTR3RH3WFKE/"},
      {name: "19FortyFive (crew morale)", url: "https://www.19fortyfive.com/2026/02/busted-toilets-and-sailors-who-want-to-quit-aircraft-carrier-uss-gerald-r-ford-is-being-pushed-to-historic-u-s-navy-limits/"},
      {name: "Jerusalem Post Feb 25", url: "https://www.yahoo.com/news/articles/americas-deadliest-fighter-jet-f-124042443.html"},
      {name: "Al Arabiya (Ford Haifa)", url: "https://www.instagram.com/reel/DVL2KdEAMnp/"},
      {name: "The War Zone Feb 25 (full analysis)", url: "https://www.twz.com/news-features/f-16s-arrive-to-protect-diego-garcia-f-22s-forward-deploy-to-israel"},
      {name: "19FortyFive (11-month deploy)", url: "https://www.19fortyfive.com/2026/02/sewage-problems-and-sailors-who-want-out-aircraft-carrier-uss-gerald-r-ford-is-being-pushed-to-historic-u-s-navy-limits/"},
      {name: "CNN (strike as early as this weekend)", url: "https://www.cnn.com/2026/02/25/politics/caine-iran-hegseth-trump"},
      {name: "Marine Insight (toilet details)", url: "https://www.marineinsight.com/shipping-news/worlds-largest-us-aircraft-carrier-uss-gerald-r-ford-battles-massive-toilet-failure-amid-iran-tensions/"},
      {name: "Israel Hayom Feb 26 (Ford departed Crete)", url: "https://www.israelhayom.com/2026/02/26/uss-gerald-r-ford-expected-to-reach-israel-within-24-hours/"}
    ],
    updated: "Feb 26, 2026",
    changeSummary: "Departed Crete, ETA off Israel ~24 hrs"
  },
  {
    id: "cvn72",
    name: "USS Abraham Lincoln (CVN-72)",
    type: "carrier",
    class: "Nimitz-class",
    lat: 22.5, lng: 62.0,
    prevLat: 15.0, prevLng: 115.0,
    prevLabel: "South China Sea (Jan 2026)",
    movementDate: "2026-01-20",
    location: "Arabian Sea — ~500 nm south of Iran",
    mission: "Deployed Nov 5, 2025. Redirected from South China Sea to Arabian Sea amid Iran tensions. On Feb 3, an F-35C from CVW-9 shot down an Iranian Shahed-139 drone. Third time CSG-3 redirected from Indo-Pacific to Middle East. Feb 25: INSS reports USS Michael Murphy (DDG-112) entered Persian Gulf. USS John Finn (DDG-113) joined CSG in Arabian Sea. USS Delbert D. Black (DDG-119) departed Red Sea to northern Arabian Sea. Total 12 US warships in and around ME waters. 250+ US fighter jets in region (350+ including Europe-based).",
    strikeGroup: "CSG-3 / CVW-9 (incl. F-35C)",
    confidence: "confirmed",
    sources: [
      {name: "Forbes Feb 5", url: "https://www.forbes.com/sites/petersuciu/2026/02/05/the-abraham-lincoln-carrier-strike-group-is-operating-near-iran/"},
      {name: "19FortyFive Feb 12", url: "https://www.19fortyfive.com/2026/02/supercarrier-surge-the-u-s-navy-is-preparing-to-send-multiple-aircraft-carriers-to-strike-iran/"},
      {name: "Ynet Feb 25", url: "https://www.ynetnews.com/article/sykrwfnuwg"}
    ],
    updated: "Feb 25, 2026",
    changeSummary: "12 warships in region; Murphy entered Persian Gulf"
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
    updated: "Feb 20, 2026",
    changeSummary: "In maintenance at Yokosuka, Japan"
  },
  {
    id: "cvn71",
    name: "USS Theodore Roosevelt (CVN-71)",
    type: "carrier",
    class: "Nimitz-class",
    lat: 32.7, lng: -117.2,
    prevLat: null, prevLng: null,
    prevLabel: null,
    location: "San Diego — pre-deployment workups",
    mission: "Pre-deployment workups (COMPTUEX). Previous deployment lasted 278 days. Earliest deploy late spring 2026. Possible Western Pacific or Middle East.",
    strikeGroup: "CSG-9 / CVW-11",
    confidence: "confirmed",
    sources: [
      {name: "DVIDS Feb 14", url: "https://www.dvidshub.net/unit/USSTR-CVN71"},
      {name: "Forbes Jan 24", url: "https://www.forbes.com/sites/petersuciu/2026/01/24/us-navy-supercarrier-departed-san-diego-beginning-pacific-deployment/"}
    ],
    updated: "Feb 14, 2026",
    changeSummary: "Pre-deployment workups in San Diego"
  },
  {
    id: "cvn77",
    name: "USS George H.W. Bush (CVN-77)",
    type: "carrier",
    class: "Nimitz-class",
    lat: 36.5, lng: -74.5,
    prevLat: null, prevLng: null,
    prevLabel: null,
    location: "Atlantic Ocean — COMPTUEX, ~100nm off East Coast",
    mission: "COMPTUEX workups. Pentagon ordered spin-up for potential Middle East deployment Feb 11. Could be deployed in weeks if expedited. WSJ: 'could potentially expedite those exercises.'",
    strikeGroup: "CSG-10 / CVW-7",
    confidence: "confirmed",
    sources: [
      {name: "The War Zone Feb 11", url: "https://www.twz.com/news-features/second-carrier-strike-group-ordered-to-spin-up-for-deployment-to-middle-east-report"},
      {name: "OSINT @ianellisjones", url: "https://x.com/ianellisjones/status/2012324333025169649"}
    ],
    updated: "Feb 11, 2026",
    changeSummary: "COMPTUEX workups, potential ME deployment ordered"
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
    updated: "Feb 17, 2026",
    changeSummary: "Operating in Caribbean, SOUTHCOM ops"
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
    updated: "Feb 2, 2026",
    changeSummary: "Forward-deployed in Philippine Sea"
  },

  // === STRATEGIC BOMBERS ===
  {
    id: "b52_guam",
    name: "B-52H Stratofortress (BTF Guam)",
    type: "bomber",
    class: "B-52H",
    lat: 13.58, lng: 144.93,
    prevLat: 48.42, prevLng: -101.35,
    prevLabel: "Minot AFB, ND (home station)",
    movementDate: "2026-02-16",
    location: "Andersen AFB, Guam — Bomber Task Force rotation",
    mission: "23rd Expeditionary Bomb Squadron from Minot AFB. Feb 16-18: conducted escort missions with JASDF fighters (7th, 8th, 9th Air Wings). First combined B-52/JASDF flights of 2026.",
    strikeGroup: "PACAF BTF",
    confidence: "confirmed",
    sources: [
      {name: "Zona Militar Feb 19", url: "https://www.zona-militar.com/en/2026/02/19/japanese-f-15-and-f-2-fighters-escorted-u-s-air-force-b-52h-bombers-in-the-pacific-for-the-first-time-in-2026/"}
    ],
    updated: "Feb 18, 2026",
    changeSummary: "Bomber task force rotation to Guam"
  },
  {
    id: "b52_diego",
    name: "B-52H Stratofortress (Diego Garcia)",
    type: "bomber",
    class: "B-52H",
    lat: -7.31, lng: 72.43,
    prevLat: 32.50, prevLng: -93.66,
    prevLabel: "Barksdale AFB, LA (May 2025)",
    movementDate: "2025-05-15",
    location: "Diego Garcia — 4 aircraft deployed since May 2025",
    mission: "4 B-52Hs from Barksdale AFB replaced B-2 Spirits in May 2025. Supported by KC-135 tankers. Current status in Feb 2026 unclear — may have rotated. B-2 hangars inactive per satellite. Feb 21: UK PM Starmer denied US use of Diego Garcia for bomber strikes against Iran. Feb 25: F-16CMs from 35th FW (Misawa, Japan) deployed to Diego Garcia for force protection per satellite imagery (The War Zone). KC-135 tankers, C-17, P-8 also visible on apron. UK still blocking use for Iran strikes but force-protection mission critical. Feb 26: Satellite detail confirmed — DG apron shows F-16CMs + KC-135s + P-8 Poseidon on tarmac. Asset status updated to reflect confirmed force-protection posture.",
    strikeGroup: "AFGSC deployed",
    confidence: "confirmed",
    sources: [
      {name: "The War Zone", url: "https://www.twz.com/air/b-52s-join-b-2s-on-diego-garcia10-bombers-now-on-indian-ocean-island"},
      {name: "The Week Feb 20", url: "https://www.theweek.in/news/middle-east/2026/02/20/no-b-2s-for-iran-trumps-magnificent-bombers-face-hurdle-as-uk-denies-base-access.html"},
      {name: "The War Zone Feb 25", url: "https://www.twz.com/news-features/f-16s-arrive-to-protect-diego-garcia-f-22s-forward-deploy-to-israel"}
    ],
    updated: "Feb 26, 2026",
    changeSummary: "Satellite confirmed: F-16CMs + KC-135s + P-8 on DG apron"
  },
  {
    id: "b2_whiteman",
    name: "B-2A Spirit Fleet",
    type: "bomber",
    class: "B-2A Spirit",
    lat: 38.73, lng: -93.55,
    prevLat: null, prevLng: null,
    prevLabel: null,
    location: "Whiteman AFB, MO — home base",
    mission: "19 total fleet (~10-12 operational). Returned from Diego Garcia after May 2025 B-52 swap. Conducted Operation Midnight Hammer (June 2025): 7 B-2s struck Fordow and Natanz with 14 GBU-57 MOPs. UK reportedly blocking basing for Iran ops. MOP restocking underway ($100M+ Boeing contract). Feb 24: B-52 fleet getting B-52J upgrade — new Rolls-Royce F130 engines ($2B contract with Boeing, Jan 2026). AFGSC confirmed capability to restore nuclear weapons to entire B-52 fleet and MIRV Minuteman III if directed. 30 of 76 B-52Hs currently conventional-only (New START limitations expired).",
    strikeGroup: "509th/510th Bomb Wing",
    confidence: "confirmed",
    sources: [
      {name: "Air & Space Forces", url: "https://www.airandspaceforces.com/pentagon-restock-massive-ordinance-penetrator-bombs-dropped-b-2s-iran/"},
      {name: "The Week Feb 20 (UK basing)", url: "https://www.theweek.in/news/middle-east/2026/02/20/no-b-2s-for-iran-trumps-magnificent-bombers-face-hurdle-as-uk-denies-base-access.html"},
      {name: "19FortyFive (B-52 nuclear)", url: "https://www.19fortyfive.com/2026/02/the-u-s-air-forces-b-52-bomber-could-once-again-be-ready-to-drop-nuclear-bombs/"}
    ],
    updated: "Feb 24, 2026",
    changeSummary: "MOP restocking underway, UK blocking basing"
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
    mission: "2 test aircraft. Not operational. IOC ~2027. Ellsworth AFB is first MOB. Production acceleration deal ($4.5B) expected by March 31, 2026. Program of record: 100+ aircraft. Feb 24: Air Force and Northrop Grumman agreed to boost B-21 production capacity by 25% using $4.5B in approved funding. IOC 2027 at Ellsworth AFB.",
    strikeGroup: "412th Test Wing",
    confidence: "confirmed",
    sources: [
      {name: "USAF Official", url: "https://www.af.mil/News/Article-Display/Article/4301502/us-air-force-announces-arrival-of-second-b-21-test-aircraft-at-edwards-afb/"},
      {name: "Stars and Stripes Feb 24", url: "https://www.stripes.com/branches/air_force/2026-02-24/b21-raider-production-capacity-boost-20860544.html"}
    ],
    updated: "Feb 24, 2026",
    changeSummary: "Production capacity boosted 25%; IOC 2027"
  },

  // === FIGHTERS ===
  {
    id: "f22_staging",
    name: "F-22A Raptors (24 total — 11 Ovda + 13 Lakenheath, to Israel by Fri)",
    type: "fighter",
    class: "F-22A Raptor",
    lat: 29.94, lng: 34.94,
    prevLat: 52.41, prevLng: 0.56,
    prevLabel: "RAF Lakenheath, UK (Feb 17-24)",
    movementDate: "2026-02-24",
    location: "Ovda Air Base, Negev Desert, Israel — 11 aircraft (1 returned to UK with fuel leak)",
    mission: "Feb 24: 11 F-22s (of 12) arrived at Ovda Air Base in Israel's Negev Desert. One (TREND 66) returned to Lakenheath with fuel tank leak. Ovda hosts Israeli F-16C unit. JINSA report: Ovda already built to US specifications, first-ever deployment of US combat aircraft to Israel — 'America just added a land-based aircraft carrier to the region.' Feb 25: SECOND wave of 6 more F-22s (TABOR 31-36) departed Langley for RAF Lakenheath, supported by 5 KC-135 tankers (GOLD 51-55). Feb 25: THIRD wave of 6 F-22s confirmed airborne from Langley to Lakenheath (DefenceGeek), bringing total F-22 deployment to 24 aircraft. WSJ (Feb 26): First-ever US combat aircraft deployed to Israel for potential wartime mission. US using Israeli bases to DISPERSE warplanes rather than concentrating at vulnerable Gulf airfields — critical after Saudi Arabia and UAE denied basing. This makes Israeli-based F-22s and carrier-based aviation the backbone of any strike package. Distances from Ovda: ~1,540km to Bushehr, ~1,640km to Natanz, ~1,660km to Tehran. BASING CONSTRAINTS: Newsweek (Feb 25) confirms Jordan, Saudi Arabia, UAE, Qatar, Bahrain, Kuwait, and Turkey all refuse to serve as launchpads. Rubio (Feb 25): Iran pursuing ICBMs, refuses to discuss ballistic missiles — 'big, big problem.' OSINTdefender (Feb 26): 13 F-22s now at Lakenheath (12 new arrivals from Langley + 1 returned from Israel with fuel leak), all expected to continue to Israel by Friday.",
    strikeGroup: "1st Fighter Wing",
    confidence: "confirmed",
    sources: [
      {name: "The Aviationist Feb 17", url: "https://theaviationist.com/2026/02/17/six-f22-raptors-arrive-raf-lakenheath/"},
      {name: "Army Recognition", url: "https://www.armyrecognition.com/news/aerospace-news/2026/u-s-f-22-raptors-sighted-in-uk-may-indicate-possible-reinforcement-of-middle-east-airpower-posture"},
      {name: "Sentinel Defense Feb 21", url: "https://x.com/sentdefender/status/2025356418384327035"},
      {name: "JFeed Feb 24", url: "https://www.jfeed.com/news-world/us-military-buildup-middle-east-2"},
      {name: "Iran Intl Feb 24", url: "https://www.facebook.com/IranIntlEnglish/posts/the-us-military-has-begun-moving-12-f-22-stealth-fighter-jets-toward-the-middle-/1432024522267970/"},
      {name: "The War Zone Feb 25", url: "https://www.twz.com/news-features/f-16s-arrive-to-protect-diego-garcia-f-22s-forward-deploy-to-israel"},
      {name: "Zona Militar Feb 25", url: "https://www.zona-militar.com/en/2026/02/25/f-22-raptor-stealth-fighters-arrived-in-israel-as-part-of-the-reinforcement-of-the-u-s-military-presence-in-the-middle-east/"},
      {name: "Aerospace Global News Feb 25", url: "https://aerospaceglobalnews.com/news/us-f22-raptors-israel-ford-middle-east/"},
      {name: "Times of Israel", url: "https://www.timesofisrael.com/liveblog_entry/us-said-to-begin-moving-another-six-f-22-stealth-fighters-toward-middle-east/"},
      {name: "JINSA (Ovda analysis)", url: "https://jinsa.org/jinsas-ruhe-america-just-added-a-land-based-aircraft-carrier-to-the-middle-east/"},
      {name: "NYT Feb 25", url: "https://www.nytimes.com/2026/02/24/us/politics/f-22-fighter-jets-israel.html"},
      {name: "Politics Today (300 aircraft)", url: "https://politicstoday.org/300-us-military-aircraft-deployed-to-centcom/"},
      {name: "Army Recognition Feb 25", url: "https://www.armyrecognition.com/news/aerospace-news/2026/u-s-f-22-stealth-fighters-reportedly-land-in-israel-amid-iran-tensions-and-regional-buildup"},
      {name: "WSJ (dispersal strategy)", url: "https://www.wsj.com/politics/national-security/f-22-stealth-fighters-head-to-israel-a-first-for-the-us-c3b9f4a2"},
      {name: "Newsweek (allies refuse basing)", url: "https://www.newsweek.com/trumps-middle-east-friends-wont-let-him-use-their-bases-to-strike-iran-11569309"},
      {name: "OSINTdefender (13 at Lakenheath)", url: "https://x.com/sentdefender/status/2026886621442756874"}
    ],
    updated: "Feb 26, 2026",
    changeSummary: "13 F-22s staged at Lakenheath, moving to Israel by Friday"
  },
  {
    id: "f35_jordan",
    name: "F-35A Lightning II (~30 aircraft)",
    type: "fighter",
    class: "F-35A Lightning II",
    lat: 31.83, lng: 36.79,
    prevLat: 44.47, prevLng: -73.15,
    prevLabel: "Burlington ANGB, VT / multi-origin (Feb 2026)",
    movementDate: "2026-02-15",
    location: "Muwaffaq Salti AB, Jordan — confirmed by satellite",
    mission: "30 F-35As now confirmed at Muwaffaq Salti (18 additional arrived from RAF Lakenheath). Vermont ANG 134th FS (SEAD specialists) contributed ~12 aircraft. These jets came from Operation Absolute Resolve (Venezuela) and Cold Response (Norway). Feb 20: Confirmed US pulled F-35s + other assets from NATO Cold Response 2026 in Norway (Norwegian defense officials). SEAD role critical for any Iran operation. Satellite imagery (Airbus, Feb 21) confirms 60+ combat aircraft at Muwaffaq Salti total. A-10C Thunderbolts also visible. 68 cargo planes delivered munitions/equipment in past week.",
    strikeGroup: "Multiple wings",
    confidence: "confirmed",
    sources: [
      {name: "CNN Feb 20", url: "https://www.cnn.com/2026/02/20/politics/military-power-buildup-us-iran-intl-vis"},
      {name: "Air & Space Forces", url: "https://www.airandspaceforces.com/f-35s-deploy-middle-east-us-talks-iran/"},
      {name: "Army Recognition Feb 21", url: "https://www.armyrecognition.com/news/aerospace-news/2026/us-sends-18-more-f-35a-fighter-jets-from-uk-to-middle-east-as-iran-nuclear-talks-begin"},
      {name: "Army Recognition Feb 21 (satellite)", url: "https://www.armyrecognition.com/news/aerospace-news/2026/u-s-strengthens-air-combat-forces-at-jordans-muwaffaq-salti-base-near-israel-as-iran-tensions-escalate"},
      {name: "Newsweek Satellite Feb 24", url: "https://www.newsweek.com/satellite-pictures-show-surge-us-aircraft-middle-east-11571894"}
    ],
    updated: "Feb 24, 2026",
    changeSummary: "30 stealth fighters confirmed at Jordan"
  },
  {
    id: "f15e_jordan",
    name: "F-15E Strike Eagles (18 aircraft)",
    type: "fighter",
    class: "F-15E Strike Eagle",
    lat: 31.85, lng: 36.85,
    prevLat: 52.41, prevLng: 0.56,
    prevLabel: "RAF Lakenheath, UK (48th FW)",
    movementDate: "2026-02-15",
    location: "Muwaffaq Salti AB, Jordan",
    mission: "3 squadrons including 12 from 48th FW RAF Lakenheath (494th FS) and Mountain Home AFB. Only USAF fighter certified for GBU-28 and GBU-72 deep-penetrating bunker busters — critical for Iran hardened targets. Part of 60+ aircraft buildup at Muwaffaq Salti confirmed by satellite. THAAD battery emplaced at base alongside Patriot systems.",
    strikeGroup: "48th FW / 366th FW",
    confidence: "confirmed",
    sources: [
      {name: "Air & Space Forces", url: "https://www.airandspaceforces.com/f-35s-deploy-middle-east-us-talks-iran/"},
      {name: "BBC", url: "https://www.bbc.com/news/live/c0rj5dwjx2pt"}
    ],
    updated: "Feb 24, 2026",
    changeSummary: "18 Strike Eagles deployed for bunker-busting"
  },
  {
    id: "f16_jordan",
    name: "F-16C/CJ Fighting Falcons (~48 aircraft)",
    type: "fighter",
    class: "F-16C/D",
    lat: 31.80, lng: 36.73,
    prevLat: 46.03, prevLng: 12.60,
    prevLabel: "Aviano AB, Italy / Spangdahlem AB, Germany",
    movementDate: "2026-02-17",
    location: "Muwaffaq Salti AB, Jordan + en route",
    mission: "48+ F-16s deployed/in transit. Includes 24 specialized F-16CJ 'Wild Weasel' SEAD variants from Spangdahlem AB (Germany) and McEntire ANGB (South Carolina) carrying AN/ASQ-213 HARM Targeting Systems and 'Angry Kitten' ALQ-184 EW pods for Suppression of Enemy Air Defenses (SEAD). 12 visible at Muwaffaq Salti (satellite). Total ~48 F-16s. Part of 60+ aircraft at Muwaffaq Salti. Includes A-10C Thunderbolts also visible in satellite imagery.",
    strikeGroup: "Multiple wings",
    confidence: "confirmed",
    sources: [
      {name: "The War Zone", url: "https://www.twz.com/news-features/final-pieces-moving-into-place-for-potential-attack-on-iran"},
      {name: "The Aviationist Feb 17", url: "https://theaviationist.com/2026/02/17/six-f22-raptors-arrive-raf-lakenheath/"},
      {name: "The War Zone (Angry Kitten)", url: "https://www.twz.com/air/f-16s-heading-to-middle-east-equipped-with-angry-kitten-electronic-warfare-pods"}
    ],
    updated: "Feb 24, 2026",
    changeSummary: "Wild Weasel SEAD jets with Angry Kitten pods"
  },

  // === TANKERS ===
  {
    id: "tankers_surge",
    name: "KC-46A/KC-135 Tanker Surge (75+ deployed, 108 total)",
    type: "tanker",
    class: "KC-46A / KC-135",
    lat: 24.06, lng: 45.52,
    prevLat: 35.34, prevLng: -77.96,
    prevLabel: "Seymour Johnson AFB, NC / CONUS bases (Feb 15-18)",
    movementDate: "2026-02-18",
    location: "Prince Sultan AB, Saudi Arabia + en route",
    mission: "75 KC-46A/KC-135 tankers deployed or en route per Politics Today analysis. Responsible Statecraft reports 108 total air tankers in or heading to CENTCOM theater. UK denied use of Diego Garcia and RAF Fairford for bomber strikes — tanker fleet compensating by enabling long-range CONUS-to-target bomber runs. KC-46A first deployment to 378th AEW (77th EARS from Seymour Johnson AFB). Tanker activity increasing at Prince Sultan AB, decreasing at Al Udeid. 15 KC-46A Pegasus tankers now at Lajes Field, Azores — largest ever tanker surge there. Total 108 tankers positioned along Atlantic-Mediterranean air bridge. Flightradar24 reported top 9 most-tracked flights were all KC-135s. Feb 25: 270+ C-17/C-5 cargo flights have supported buildup since early January, delivering personnel, aircraft components, and THAAD/Patriot systems.",
    strikeGroup: "CENTCOM AOR",
    confidence: "confirmed",
    sources: [
      {name: "The Aviationist Feb 17", url: "https://theaviationist.com/2026/02/17/six-f22-raptors-arrive-raf-lakenheath/"},
      {name: "ACC Official", url: "https://www.acc.af.mil/News/Article-Display/Article/4400254/next-generation-air-tankers-arrive-in-centcom-aor/"},
      {name: "AIRLIVE Feb 21", url: "https://airlive.net/military/2026/02/21/a-massive-number-of-us-air-force-tankers-have-been-spotted-at-lajes-field-in-the-azores/"},
      {name: "Politics Today (300 aircraft)", url: "https://politicstoday.org/300-us-military-aircraft-deployed-to-centcom/"},
      {name: "Responsible Statecraft", url: "https://responsiblestatecraft.org/iran-war-gulf-states/"}
    ],
    updated: "Feb 25, 2026",
    changeSummary: "108 tankers in/heading to theater; 270+ cargo flights"
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
    updated: "Feb 2026",
    changeSummary: "Supporting transatlantic fighter flow to ME"
  },

  // === LAJES FIELD STAGING ===
  {
    id: "lajes_staging",
    name: "Lajes Field Staging (KC-46/KC-135/F-16/C-17)",
    type: "tanker",
    class: "KC-46A / KC-135 / F-16CJ / C-17",
    lat: 38.76, lng: -27.09,
    prevLat: 34.05, prevLng: -80.97,
    prevLabel: "McEntire ANGB, SC + CONUS bases (Feb 17-18)",
    movementDate: "2026-02-19",
    location: "Lajes Field, Azores, Portugal — largest-ever US aircraft surge",
    mission: "Feb 18-19: Largest-ever surge of US aircraft at Lajes. Confirmed: 11 KC-46A Pegasus tankers, 11 KC-135 Stratotankers, 12 F-16CJ Fighting Falcons (South Carolina ANG, SEAD/DEAD role with AGM-88 HARM + 'Angry Kitten' EW pods), and 1 C-17 Globemaster III. Critical mid-Atlantic air bridge node between CONUS and Europe/Middle East. Part of 50+ tanker surge compensating for UK base denials. Feb 21: 15 KC-46A Pegasus tankers now at Lajes — up from 11. Also 11 KC-135s. 400 US personnel on Terceira Island. Over 120 US aircraft tracked eastbound in past 72 hours.",
    strikeGroup: "AMC / ANG",
    confidence: "confirmed",
    sources: [
      {name: "The War Zone Feb 20", url: "https://www.twz.com/news-features/supercarrier-uss-gerald-r-ford-has-crossed-into-the-mediterranean"},
      {name: "Instagram OSINT Feb 17", url: "https://www.instagram.com/p/DU3KzMtiH4P/"},
      {name: "AIRLIVE Feb 21", url: "https://airlive.net/military/2026/02/21/a-massive-number-of-us-air-force-tankers-have-been-spotted-at-lajes-field-in-the-azores/"}
    ],
    updated: "Feb 24, 2026",
    changeSummary: "15 KC-46A tankers staged; 400 US personnel at Azores"
  }];

// === TICKER DATA ===
const tickerEntries = [
  {
    id: "ticker_geneva_r3_recess",
    timestamp: "2026-02-26T08:00:00Z",
    headline: "Geneva Round 3 nuclear talks: 3-hour recess called",
    details: "Iran-US nuclear negotiations in Geneva entered a 3-hour recess amid stalled positions on enrichment caps. Ford CSG departure from Crete coincides with talks.",
    category: "diplomacy",
    priority: "high"
  },
  {
    id: "ticker_dg_sat_detail",
    timestamp: "2026-02-26T06:00:00Z",
    headline: "Satellite imagery confirms Diego Garcia force-protection posture",
    details: "Commercial satellite pass over Diego Garcia confirms F-16CMs (35th FW, Misawa), KC-135 tankers, C-17, and P-8 Poseidon on apron. UK basing restrictions remain for bomber strike missions.",
    category: "intelligence",
    priority: "high"
  }
];

// === MAP INITIALIZATION ===
const map = L.map('map', {
  center: [25, 50],
  zoom: 4,
  minZoom: 2,
  maxZoom: 10
});

L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
  attribution: '© OpenStreetMap contributors © CARTO',
  subdomains: 'abcd',
  maxZoom: 19
}).addTo(map);

// === FILTER STATE ===
let activeFilters = new Set(['CARRIERS','BOMBERS','FIGHTERS','TANKERS','ISR','SUBMARINES','BASES','MISSILE DEF','AMPHIBIOUS','DRONES','SPECIAL']);
let activeTimelineHours = null;

// === SHAPE RENDERERS ===
function getAssetIcon(asset) {
  const type = ASSET_TYPES[asset.type];
  const color = type ? type.color : '#ffffff';
  const shape = type ? type.shape : 'circle';
  const conf = asset.confidence === 'confirmed' ? 1.0 : (asset.confidence === 'high' ? 0.85 : 0.65);
  const svgSize = 36;
  let svgShape = '';
  if (shape === 'hexagon') {
    svgShape = `<polygon points="18,3 33,10.5 33,25.5 18,33 3,25.5 3,10.5" fill="${color}" fill-opacity="${conf}" stroke="#fff" stroke-width="1.5"/>`;
  } else if (shape === 'bomber') {
    svgShape = `<polygon points="18,4 28,14 26,20 18,22 10,20 8,14" fill="${color}" fill-opacity="${conf}" stroke="#fff" stroke-width="1.5"/>`;
  } else if (shape === 'triangle') {
    svgShape = `<polygon points="18,4 32,30 4,30" fill="${color}" fill-opacity="${conf}" stroke="#fff" stroke-width="1.5"/>`;
  } else if (shape === 'diamond') {
    svgShape = `<polygon points="18,3 33,18 18,33 3,18" fill="${color}" fill-opacity="${conf}" stroke="#fff" stroke-width="1.5"/>`;
  } else if (shape === 'eye') {
    svgShape = `<ellipse cx="18" cy="18" rx="14" ry="8" fill="${color}" fill-opacity="${conf}" stroke="#fff" stroke-width="1.5"/><circle cx="18" cy="18" r="4" fill="#111" fill-opacity="0.7"/>`;
  } else if (shape === 'invtriangle') {
    svgShape = `<polygon points="4,6 32,6 18,30" fill="${color}" fill-opacity="${conf}" stroke="#fff" stroke-width="1.5"/>`;
  } else if (shape === 'square') {
    svgShape = `<rect x="5" y="5" width="26" height="26" fill="${color}" fill-opacity="${conf}" stroke="#fff" stroke-width="1.5"/>`;
  } else if (shape === 'shield') {
    svgShape = `<path d="M18 3 L32 9 L32 21 Q32 30 18 34 Q4 30 4 21 L4 9 Z" fill="${color}" fill-opacity="${conf}" stroke="#fff" stroke-width="1.5"/>`;
  } else if (shape === 'pentagon') {
    svgShape = `<polygon points="18,3 33,13 27,30 9,30 3,13" fill="${color}" fill-opacity="${conf}" stroke="#fff" stroke-width="1.5"/>`;
  } else if (shape === 'smalldiamond') {
    svgShape = `<polygon points="18,8 26,18 18,28 10,18" fill="${color}" fill-opacity="${conf}" stroke="#fff" stroke-width="1.5"/>`;
  } else if (shape === 'hexoutline') {
    svgShape = `<polygon points="18,3 33,10.5 33,25.5 18,33 3,25.5 3,10.5" fill="none" stroke="${color}" stroke-width="2.5"/>`;
  } else {
    svgShape = `<circle cx="18" cy="18" r="13" fill="${color}" fill-opacity="${conf}" stroke="#fff" stroke-width="1.5"/>`;
  }
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${svgSize}" height="${svgSize}" viewBox="0 0 36 36">${svgShape}</svg>`;
  return L.divIcon({
    html: svg,
    className: '',
    iconSize: [svgSize, svgSize],
    iconAnchor: [svgSize/2, svgSize/2],
    popupAnchor: [0, -svgSize/2]
  });
}

// === CONFIDENCE BADGE ===
function confidenceBadge(conf) {
  if (conf === 'confirmed') return '<span style="background:#27ae60;color:#fff;padding:2px 8px;border-radius:4px;font-size:11px;font-weight:700;">CONFIRMED</span>';
  if (conf === 'high') return '<span style="background:#e67e22;color:#fff;padding:2px 8px;border-radius:4px;font-size:11px;font-weight:700;">HIGH CONF</span>';
  return '<span style="background:#7f8c8d;color:#fff;padding:2px 8px;border-radius:4px;font-size:11px;font-weight:700;">UNCONFIRMED</span>';
}

// === POPUP BUILDER ===
function buildPopup(asset) {
  const type = ASSET_TYPES[asset.type];
  const color = type ? type.color : '#4FC3F7';
  let sourcesHtml = '';
  if (asset.sources && asset.sources.length > 0) {
    sourcesHtml = '<div style="margin-top:8px;"><b style="color:#aaa;font-size:11px;">SOURCES:</b><ul style="margin:4px 0 0 0;padding-left:16px;">';
    asset.sources.forEach(s => {
      sourcesHtml += `<li><a href="${s.url}" target="_blank" style="color:#4FC3F7;font-size:11px;">${s.name}</a></li>`;
    });
    sourcesHtml += '</ul></div>';
  }
  let prevHtml = '';
  if (asset.prevLabel) {
    prevHtml = `<div style="margin-top:6px;font-size:11px;color:#aaa;"><b>Previous:</b> ${asset.prevLabel}</div>`;
    if (asset.movementDate) prevHtml += `<div style="font-size:11px;color:#aaa;"><b>Moved:</b> ${asset.movementDate}</div>`;
  }
  let changeHtml = '';
  if (asset.changeSummary) {
    changeHtml = `<div style="margin-top:6px;padding:4px 8px;background:rgba(255,200,0,0.13);border-left:3px solid #FFD600;font-size:11px;color:#FFD600;"><b>Latest:</b> ${asset.changeSummary}</div>`;
  }
  return `
    <div style="font-family:'Segoe UI',Arial,sans-serif;min-width:260px;max-width:380px;">
      <div style="font-size:15px;font-weight:700;color:${color};margin-bottom:4px;">${asset.name}</div>
      <div style="font-size:11px;color:#aaa;margin-bottom:4px;">${asset.class || ''} &bull; ${asset.strikeGroup || ''}</div>
      <div style="margin-bottom:4px;">${confidenceBadge(asset.confidence)}</div>
      <div style="font-size:12px;color:#ddd;"><b>Location:</b> ${asset.location}</div>
      ${prevHtml}
      ${changeHtml}
      <div style="font-size:11px;color:#ccc;margin-top:8px;">${asset.mission}</div>
      ${sourcesHtml}
      <div style="font-size:10px;color:#666;margin-top:8px;">Updated: ${asset.updated || ''}</div>
    </div>
  `;
}

// === FILTER UI BUILDER ===
function buildFilterUI() {
  const container = document.getElementById('filter-buttons');
  if (!container) return;
  const groups = [...new Set(Object.values(ASSET_TYPES).map(t => t.filterGroup))];
  container.innerHTML = '';
  groups.forEach(group => {
    const type = Object.values(ASSET_TYPES).find(t => t.filterGroup === group);
    const color = type ? type.color : '#ffffff';
    const btn = document.createElement('button');
    btn.textContent = group;
    btn.className = 'filter-btn active';
    btn.style.borderColor = color;
    btn.style.color = color;
    btn.dataset.group = group;
    btn.addEventListener('click', () => {
      if (activeFilters.has(group)) {
        activeFilters.delete(group);
        btn.classList.remove('active');
        btn.style.background = 'transparent';
      } else {
        activeFilters.add(group);
        btn.classList.add('active');
        btn.style.background = color + '22';
      }
      renderAssets();
    });
    btn.style.background = color + '22';
    container.appendChild(btn);
  });
}

// === TIMELINE FILTER ===
function buildTimelineFilter() {
  const sel = document.getElementById('timeline-filter');
  if (!sel) return;
  sel.addEventListener('change', () => {
    const val = sel.value;
    activeTimelineHours = val === 'all' ? null : parseInt(val);
    renderAssets();
    updateMovementCount();
  });
}

// === ASSET RENDERING ===
let markers = [];
let movementLines = [];

function isWithinTimeline(asset) {
  if (activeTimelineHours === null) return true;
  if (!asset.movementDate) return false;
  const moved = new Date(asset.movementDate);
  const cutoff = new Date(Date.now() - activeTimelineHours * 3600 * 1000);
  return moved >= cutoff;
}

function renderAssets() {
  markers.forEach(m => map.removeLayer(m));
  movementLines.forEach(l => map.removeLayer(l));
  markers = [];
  movementLines = [];
  const now = new Date();
  assets.forEach(asset => {
    const type = ASSET_TYPES[asset.type];
    const group = type ? type.filterGroup : null;
    if (group && !activeFilters.has(group)) return;
    const withinTimeline = isWithinTimeline(asset);
    if (activeTimelineHours !== null && !withinTimeline) return;
    // Draw movement line if prev position exists and within timeline
    if (asset.prevLat !== null && asset.prevLat !== undefined && withinTimeline && activeTimelineHours !== null) {
      const line = L.polyline(
        [[asset.prevLat, asset.prevLng], [asset.lat, asset.lng]],
        {color: type ? type.color : '#fff', weight: 1.5, opacity: 0.5, dashArray: '6,6'}
      ).addTo(map);
      movementLines.push(line);
    }
    const icon = getAssetIcon(asset);
    const marker = L.marker([asset.lat, asset.lng], {icon})
      .addTo(map)
      .bindPopup(buildPopup(asset), {maxWidth: 400});
    markers.push(marker);
  });
}

// === MOVEMENT COUNT ===
function updateMovementCount() {
  const label = document.getElementById('movement-label');
  if (!label) return;
  const visibleMovements = assets.filter(a => {
    if (activeTimelineHours === null) return a.movementDate != null;
    if (!a.movementDate) return false;
    const moved = new Date(a.movementDate);
    const cutoff = new Date(Date.now() - activeTimelineHours * 3600 * 1000);
    return moved >= cutoff;
  }).length;
  const suffix = activeTimelineHours === null ? '' : ` (${visibleMovements})`;
  label.textContent = 'MOVEMENT TIMELINE' + suffix;
}

buildFilterUI();
buildTimelineFilter();
updateMovementCount();
renderAssets();
