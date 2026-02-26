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
    lat: 34.50, lng: 30.50,
    prevLat: 34.20, prevLng: 28.50,
    prevLabel: "South of Crete (Feb 26 AM)",
    movementDate: "2026-02-26",
    location: "Eastern Mediterranean — en route to Haifa, Israel (ETA Friday Feb 27)",
    mission: "Deployment Day 244+. Transited Strait of Gibraltar Feb 20. Escorts: USS Mahan (DDG-72), USS Bainbridge (DDG-96), USS Winston S. Churchill (DDG-81). CVW-8: 4x F/A-18E/F squadrons, EA-18G (VAQ-142), E-2D (VAW-124). Feb 24: Ford arrived at Souda Bay, Crete (NATO base). Spent 4 days resupplying. WSJ reports severe crew morale issues at 240+ days deployed — potential 11-month deployment (record). Sewage/toilet issues persist. CNN (Feb 25): US military prepared to strike Iran as early as this weekend. Feb 26: Ford departed Souda Bay Crete heading eastern Med. Reuters/Israel Hayom now report ETA Haifa Friday Feb 27. ItaMilRadar: Ford heading toward Levant basin, could provide air cover to Israel in case of Iranian attack. Al Bawaba confirms USS Mahan (DDG-72) escorting. If docked at Haifa, would be first US carrier at Israeli port during active crisis — symbolic and operational message unmistakable. CSG-12 not yet at final station.",
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
      {name: "Israel Hayom Feb 26 (Ford departed Crete)", url: "https://www.israelhayom.com/2026/02/26/uss-gerald-r-ford-expected-to-reach-israel-within-24-hours/"},
      {name: "ItaMilRadar Feb 26 (air cover role)", url: "https://www.itamilradar.com/2026/02/26/uss-gerald-r-ford-moves-toward-israel-as-iran-tensions-raise-prospect-of-us-air-cover-role/"},
      {name: "Iran International (Reuters ETA Friday)", url: "https://www.iranintl.com/en/202602264679"},
      {name: "Al Bawaba (Mahan escort)", url: "https://www.albawaba.com/news/uss-gerald-r-ford-leaves-crete-island-1622917"}
    ],
    updated: "Feb 26, 2026",
    changeSummary: "En route Haifa, ETA Friday Feb 27"
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
    mission: "COMPTUEX (Composite Training Unit Exercise) actively underway as of Feb 21-26. Pentagon ordered spin-up for potential Middle East deployment Feb 11. Escorts confirmed: USS Ross (DDG-71) and USS Mason (DDG-87). Replenishment-at-sea with USNS John Lenthall (TAO-189) on Feb 15. COMPTUEX is the Joint Force's most complex at-sea certification -- final step before deployment. Could be combat-ready and en route to ME within days of completion. If expedited, Bush CSG would provide a THIRD carrier strike group for the Iran theater alongside Ford and Lincoln.",
    strikeGroup: "CSG-10 / CVW-7 / DESRON 22",
    confidence: "confirmed",
    sources: [
      {name: "The War Zone Feb 11", url: "https://www.twz.com/news-features/second-carrier-strike-group-ordered-to-spin-up-for-deployment-to-middle-east-report"},
      {name: "OSINT @ianellisjones", url: "https://x.com/ianellisjones/status/2012324333025169649"},
      {name: "SURFLANT (Ross/Mason)", url: "https://www.facebook.com/SURFLANT/posts/1340431311448747/"},
      {name: "US 2nd Fleet (COMPTUEX)", url: "https://www.facebook.com/US2ndFleet/posts/1376568311179151/"}
    ],
    updated: "Feb 26, 2026",
    changeSummary: "COMPTUEX active with Ross/Mason, near deployment-ready"
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
    mission: "4 B-52Hs from Barksdale AFB replaced B-2 Spirits in May 2025. Supported by KC-135 tankers. Current status in Feb 2026 unclear — may have rotated. B-2 hangars inactive per satellite. Feb 21: UK PM Starmer denied US use of Diego Garcia for bomber strikes against Iran. Feb 25: F-16CMs from 35th FW (Misawa, Japan) deployed to Diego Garcia for force protection per satellite imagery (The War Zone). KC-135 tankers, C-17, P-8 also visible on apron. UK still blocking use for Iran strikes but force-protection mission critical.",
    strikeGroup: "AFGSC deployed",
    confidence: "unconfirmed",
    sources: [
      {name: "The War Zone", url: "https://www.twz.com/air/b-52s-join-b-2s-on-diego-garcia10-bombers-now-on-indian-ocean-island"},
      {name: "The Week Feb 20", url: "https://www.theweek.in/news/middle-east/2026/02/20/no-b-2s-for-iran-trumps-magnificent-bombers-face-hurdle-as-uk-denies-base-access.html"},
      {name: "The War Zone Feb 25", url: "https://www.twz.com/news-features/f-16s-arrive-to-protect-diego-garcia-f-22s-forward-deploy-to-israel"}
    ],
    updated: "Feb 25, 2026",
    changeSummary: "F-16s from Japan deployed for base defense"
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
    mission: "19 total fleet (~10-12 operational). Returned from Diego Garcia after May 2025 B-52 swap. Conducted Operation Midnight Hammer (June 2025): 7 B-2s struck Fordow and Natanz with 14 GBU-57 MOPs. UK reportedly blocking basing for Iran ops. MOP restocking underway ($100M+ Boeing contract). Feb 24: B-52 fleet getting B-52J upgrade — new Rolls-Royce F130 engines ($2B contract with Boeing, Jan 2026). AFGSC confirmed capability to restore nuclear weapons to entire B-52 fleet and MIRV Minuteman III if directed. 30 of 76 B-52Hs currently conventional-only (New START limitations expired). Feb 25: B-2 Spirit and Navy CVW fighters rehearsed anti-ship strike missions off California coast -- joint service maritime strike integration relevant to Strait of Hormuz contingency (USNI News).",
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
    mission: "Feb 24: 11 F-22s (of 12) arrived at Ovda Air Base in Israel's Negev Desert. One (TREND 66) returned to Lakenheath with fuel tank leak. Ovda hosts Israeli F-16C unit. JINSA report: Ovda already built to US specifications, first-ever deployment of US combat aircraft to Israel — 'America just added a land-based aircraft carrier to the region.' Feb 25: SECOND wave of 6 more F-22s (TABOR 31-36) departed Langley for RAF Lakenheath, supported by 5 KC-135 tankers (GOLD 51-55). Feb 25: THIRD wave of 6 F-22s confirmed airborne from Langley to Lakenheath (DefenceGeek), bringing total F-22 deployment to 24 aircraft. WSJ (Feb 26): First-ever US combat aircraft deployed to Israel for potential wartime mission. US using Israeli bases to DISPERSE warplanes rather than concentrating at vulnerable Gulf airfields — critical after Saudi Arabia and UAE denied basing. This makes Israeli-based F-22s and carrier-based aviation the backbone of any strike package. Distances from Ovda: ~1,540km to Bushehr, ~1,640km to Natanz, ~1,660km to Tehran. BASING CONSTRAINTS: Newsweek (Feb 25) confirms Jordan, Saudi Arabia, UAE, Qatar, Bahrain, Kuwait, and Turkey all refuse to serve as launchpads. Rubio (Feb 25): Iran pursuing ICBMs, refuses to discuss ballistic missiles — 'big, big problem.' OSINTdefender (Feb 26): 13 F-22s now at Lakenheath (12 new arrivals from Langley + 1 returned from Israel with fuel leak), all expected to continue to Israel by Friday. Feb 26 UPDATE: The Times/CFR report UK expanded base-use ban to airbases IN ENGLAND as well as Diego Garcia -- UK blocking use of RAF Lakenheath and other UK bases for preemptive strikes on Iran. Raptors may transit through but UK refuses to serve as staging base for strike operations.",
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
    mission: "75 KC-46A/KC-135 tankers deployed or en route per Politics Today analysis. Responsible Statecraft reports 108 total air tankers in or heading to CENTCOM theater. UK denied use of Diego Garcia and RAF Fairford for bomber strikes — tanker fleet compensating by enabling long-range CONUS-to-target bomber runs. KC-46A first deployment to 378th AEW (77th EARS from Seymour Johnson AFB). Tanker activity increasing at Prince Sultan AB, decreasing at Al Udeid. 15 KC-46A Pegasus tankers now at Lajes Field, Azores — largest ever tanker surge there. Total 108 tankers positioned along Atlantic-Mediterranean air bridge. Flightradar24 reported top 9 most-tracked flights were all KC-135s. Feb 25: 270+ C-17/C-5 cargo flights have supported buildup since early January, delivering personnel, aircraft components, and THAAD/Patriot systems. Feb 26: 6 additional KC-46A tankers en route to Israel -- 5 from Portsmouth Intl (NH), 1 from Seymour Johnson AFB (NC), all heading to Ben Gurion Airport (i24News/Military Air Tracking Alliance).",
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
    mission: "Feb 18-19: Largest-ever surge of US aircraft at Lajes. Confirmed: 15 KC-46A tankers, 12 F-16CJ 'Wild Weasel' SEAD aircraft, multiple C-17s. Serving as transatlantic air bridge midpoint for jets and tankers deploying to Mediterranean and Middle East. AIRLIVE confirmed Feb 21. NATO strategic waypoint for USAF power projection.",
    strikeGroup: "CENTCOM AOR staging",
    confidence: "confirmed",
    sources: [
      {name: "AIRLIVE Feb 21", url: "https://airlive.net/military/2026/02/21/a-massive-number-of-us-air-force-tankers-have-been-spotted-at-lajes-field-in-the-azores/"}
    ],
    updated: "Feb 21, 2026",
    changeSummary: "Largest-ever US aircraft surge at Lajes transatlantic hub"
  },

  // === SURVEILLANCE/ISR ===
  {
    id: "e3_sentry",
    name: "E-3G Sentry AWACS",
    type: "surveillance",
    class: "E-3G Sentry",
    lat: 26.27, lng: 50.61,
    prevLat: null, prevLng: null,
    prevLabel: null,
    location: "Al Udeid AB, Qatar — CENTCOM AOR",
    mission: "Multiple E-3G Sentry AWACS deployed. 2 visible at Al Udeid AB per satellite imagery. Providing airspace management and battle management for CENTCOM aircraft. Additional E-3s staged in UK at RAF Waddington.",
    strikeGroup: "552nd ACW",
    confidence: "confirmed",
    sources: [
      {name: "Newsweek Satellite Feb 24", url: "https://www.newsweek.com/satellite-pictures-show-surge-us-aircraft-middle-east-11571894"}
    ],
    updated: "Feb 24, 2026",
    changeSummary: "2 AWACS confirmed at Al Udeid"
  },
  {
    id: "e7_wedgetail",
    name: "E-7A Wedgetail (3 aircraft, Al Udeid)",
    type: "surveillance",
    class: "E-7A Wedgetail",
    lat: 26.28, lng: 50.62,
    prevLat: null, prevLng: null,
    prevLabel: null,
    location: "Al Udeid AB, Qatar",
    mission: "3 RAF E-7A Wedgetail AEW aircraft deployed to Al Udeid, Qatar as of Feb 24. UK's most advanced airborne early warning platform, provides multi-domain battle management. Part of broader UK-US operational coordination despite UK's ban on using its territory as launch base.",
    strikeGroup: "RAF 8 Sqn",
    confidence: "confirmed",
    sources: [
      {name: "Open source OSINT", url: "https://x.com/ukdefjournal/status/2026354716987215884"}
    ],
    updated: "Feb 24, 2026",
    changeSummary: "3 RAF Wedgetails deployed to Al Udeid"
  },
  {
    id: "ep3_rc135",
    name: "RC-135V/W Rivet Joint (3 aircraft)",
    type: "surveillance",
    class: "RC-135V/W",
    lat: 26.29, lng: 50.63,
    prevLat: null, prevLng: null,
    prevLabel: null,
    location: "Al Udeid AB, Qatar + forward areas",
    mission: "3 RC-135 Rivet Joint SIGINT/ELINT aircraft confirmed in theater. Flying constant surveillance missions over Persian Gulf and Arabian Sea. Monitoring Iranian military communications, radar emissions, and air defense activity.",
    strikeGroup: "55th Wing, Offutt AFB",
    confidence: "confirmed",
    sources: [
      {name: "ADS-B/OSINT", url: "https://x.com/sentdefender/status/2025706655501910527"}
    ],
    updated: "Feb 24, 2026",
    changeSummary: "3 Rivet Joints monitoring Iranian SIGINT/ELINT"
  },
  {
    id: "u2_beale",
    name: "U-2S Dragon Lady (2 aircraft)",
    type: "surveillance",
    class: "U-2S Dragon Lady",
    lat: 26.30, lng: 50.70,
    prevLat: null, prevLng: null,
    prevLabel: null,
    location: "Al Udeid AB / forward staging",
    mission: "2 U-2S Dragon Lady aircraft deployed in theater. Flying high-altitude reconnaissance over Iran — monitoring nuclear facilities, IRGC positions, air defense systems at altitudes above 70,000ft.",
    strikeGroup: "9th RW, Beale AFB",
    confidence: "confirmed",
    sources: [
      {name: "Politics Today (300 aircraft)", url: "https://politicstoday.org/300-us-military-aircraft-deployed-to-centcom/"}
    ],
    updated: "Feb 24, 2026",
    changeSummary: "2 Dragon Ladies monitoring Iranian targets"
  },
  {
    id: "p8_poseidon",
    name: "P-8A Poseidon (4 aircraft)",
    type: "surveillance",
    class: "P-8A Poseidon",
    lat: 26.31, lng: 50.74,
    prevLat: null, prevLng: null,
    prevLabel: null,
    location: "Diego Garcia + Al Udeid",
    mission: "4 P-8A Poseidons in theater. Tracking Iranian submarine activity in Persian Gulf and Arabian Sea. Monitoring IRGCN fast boats and surface vessels. 1 visible at Diego Garcia in satellite imagery.",
    strikeGroup: "VP squadrons",
    confidence: "confirmed",
    sources: [
      {name: "The War Zone Feb 25", url: "https://www.twz.com/news-features/f-16s-arrive-to-protect-diego-garcia-f-22s-forward-deploy-to-israel"}
    ],
    updated: "Feb 25, 2026",
    changeSummary: "4 Poseidons tracking Iranian naval activity"
  },

  // === SUBMARINES ===
  {
    id: "ssbn_deterrence",
    name: "Ohio-class SSBN (Strategic Deterrence)",
    type: "submarine",
    class: "Ohio-class SSBN",
    lat: 22.0, lng: 60.0,
    prevLat: null, prevLng: null,
    prevLabel: null,
    location: "Arabian Sea / Indian Ocean — at sea (classified)",
    mission: "Continuously deployed for strategic deterrence. Carries up to 20 Trident II D5 SLBMs (START-limited). Location classified. Likely in Arabian Sea/Indian Ocean given broader strategic posture.",
    strikeGroup: "STRATCOM / SUBLANT",
    confidence: "unconfirmed",
    sources: [
      {name: "USNI General Reference", url: "https://news.usni.org/"}
    ],
    updated: "Feb 2026",
    changeSummary: "Continuous at-sea deterrence patrol"
  },
  {
    id: "ssgn_ohio",
    name: "Ohio-class SSGN (Guided Missile Sub)",
    type: "submarine",
    class: "Ohio-class SSGN",
    lat: 23.5, lng: 58.5,
    prevLat: null, prevLng: null,
    prevLabel: null,
    location: "Arabian Sea — likely deployed (classified)",
    mission: "4 Ohio-class SSGNs converted from SSBNs. Each carries up to 154 Tomahawk cruise missiles — equivalent to 3 surface warships. USS Florida (SSGN-728) or sister sub likely deployed given strategic posture. Location classified.",
    strikeGroup: "SUBLANT",
    confidence: "unconfirmed",
    sources: [
      {name: "USNI General Reference", url: "https://news.usni.org/"}
    ],
    updated: "Feb 2026",
    changeSummary: "Likely deployed, location classified"
  },
  {
    id: "ssn_arabian",
    name: "SSN Fast Attack Submarines (2-3 estimated)",
    type: "submarine",
    class: "Virginia/Los Angeles-class",
    lat: 24.5, lng: 57.5,
    prevLat: null, prevLng: null,
    prevLabel: null,
    location: "Arabian Sea / Persian Gulf approaches",
    mission: "Standard practice: 2-3 fast attack subs deployed per CSG. CSG-12 (Ford) and CSG-3 (Lincoln) each typically have 1-2 SSNs assigned. Armed with Tomahawks and Mk 48 torpedoes. Monitoring Strait of Hormuz.",
    strikeGroup: "CSG-12 / CSG-3",
    confidence: "unconfirmed",
    sources: [
      {name: "USNI General Reference", url: "https://news.usni.org/"}
    ],
    updated: "Feb 2026",
    changeSummary: "Estimated 2-3 SSNs with deployed CSGs"
  },

  // === MISSILE DEFENSE ===
  {
    id: "thaad_israel",
    name: "THAAD Battery (Israel)",
    type: "missile_defense",
    class: "THAAD",
    lat: 31.50, lng: 34.90,
    prevLat: null, prevLng: null,
    prevLabel: null,
    location: "Israel — Nevatim Air Base area",
    mission: "1 THAAD battery (8 launchers, AN/TPY-2 radar). Deployed October 2024, operated by US Army soldiers. Intercepts ballistic missiles in terminal phase at high altitude. Operated by 10th AAMDC. Remains operational as of Feb 2026.",
    strikeGroup: "10th AAMDC",
    confidence: "confirmed",
    sources: [
      {name: "USINDOPACOM Official", url: "https://www.pacom.mil/Media/News/News-Article-View/Article/3903718/"}
    ],
    updated: "Feb 20, 2026",
    changeSummary: "THAAD operational at Nevatim"
  },
  {
    id: "thaad_jordan",
    name: "THAAD Battery (Jordan)",
    type: "missile_defense",
    class: "THAAD",
    lat: 31.82, lng: 36.72,
    prevLat: null, prevLng: null,
    prevLabel: null,
    location: "Muwaffaq Salti AB, Jordan",
    mission: "THAAD battery emplaced at Muwaffaq Salti AB per satellite imagery (The War Zone, Feb 2026). Protects the 60+ aircraft currently deployed there. Alongside PAC-3 Patriot batteries.",
    strikeGroup: "10th AAMDC",
    confidence: "confirmed",
    sources: [
      {name: "The War Zone", url: "https://www.twz.com/news-features/final-pieces-moving-into-place-for-potential-attack-on-iran"}
    ],
    updated: "Feb 24, 2026",
    changeSummary: "THAAD protecting Muwaffaq Salti aircraft"
  },
  {
    id: "patriot_me",
    name: "PAC-3 Patriot Batteries (4 batteries, ME)",
    type: "missile_defense",
    class: "PAC-3 Patriot",
    lat: 26.25, lng: 50.58,
    prevLat: null, prevLng: null,
    prevLabel: null,
    location: "Al Udeid AB (Qatar), Muwaffaq Salti (Jordan), Prince Sultan AB (Saudi Arabia)",
    mission: "Multiple PAC-3 Patriot batteries deployed across ME region. Satellite confirmed at Al Udeid and Muwaffaq Salti. Additional batteries reported at Prince Sultan AB. Total 4+ batteries.",
    strikeGroup: "10th AAMDC",
    confidence: "confirmed",
    sources: [
      {name: "Newsweek Satellite Feb 24", url: "https://www.newsweek.com/satellite-pictures-show-surge-us-aircraft-middle-east-11571894"}
    ],
    updated: "Feb 24, 2026",
    changeSummary: "PAC-3 at Al Udeid, Jordan, Saudi Arabia"
  },
  {
    id: "aegis_bmds",
    name: "Aegis BMD Destroyers/Cruisers (6 ships)",
    type: "missile_defense",
    class: "Arleigh Burke / Ticonderoga",
    lat: 26.0, lng: 56.0,
    prevLat: null, prevLng: null,
    prevLabel: null,
    location: "Arabian Sea / Persian Gulf / Red Sea approaches",
    mission: "6+ Aegis BMD-capable ships deployed. USS Cole (DDG-67) and USS Bulkeley (DDG-84) confirmed at Red Sea/Gulf of Aden. USS Michael Murphy (DDG-112) entered Persian Gulf Feb 25. USS John Finn (DDG-113) in Arabian Sea. USS Delbert D. Black (DDG-119) moved to N. Arabian Sea. All SM-3/SM-6 equipped for ballistic missile defense.",
    strikeGroup: "CENTCOM surface forces",
    confidence: "confirmed",
    sources: [
      {name: "Ynet Feb 25", url: "https://www.ynetnews.com/article/sykrwfnuwg"},
      {name: "USNI Feb 25", url: "https://news.usni.org/2026/02/25/usni-news-fleet-and-marine-tracker-feb-25-2026"}
    ],
    updated: "Feb 25, 2026",
    changeSummary: "6+ Aegis BMD ships defending against Iran ballistic missiles"
  },

  // === GROUND BASES ===
  {
    id: "al_udeid",
    name: "Al Udeid Air Base, Qatar (AFCENT)",
    type: "base",
    class: "Major Air Base",
    lat: 25.12, lng: 51.32,
    prevLat: null, prevLng: null,
    prevLabel: null,
    location: "Qatar — USAFCENT HQ",
    mission: "USAFCENT HQ. 10,000+ US personnel. E-3G AWACS, RC-135, B-52 staging. Combined Air Operations Center (CAOC) controlling all CENTCOM air operations. Satellite imagery (Newsweek, Feb 24) confirms significant aircraft movement.",
    strikeGroup: "379th AEW / AFCENT",
    confidence: "confirmed",
    sources: [
      {name: "USAFCENT Official", url: "https://www.afcent.af.mil/"}
    ],
    updated: "Feb 2026",
    changeSummary: "CENTCOM air operations hub"
  },
  {
    id: "prince_sultan",
    name: "Prince Sultan AB, Saudi Arabia",
    type: "base",
    class: "Major Air Base",
    lat: 24.06, lng: 45.52,
    prevLat: null, prevLng: null,
    prevLabel: null,
    location: "Saudi Arabia — 378th AEW",
    mission: "378th Air Expeditionary Wing. Recent tanker surge activity. KC-46A first deployment here. Patriot batteries. Saudi Arabia refusing to allow offensive strike missions but tolerating defensive/logistical presence.",
    strikeGroup: "378th AEW",
    confidence: "confirmed",
    sources: [
      {name: "ACC Official", url: "https://www.acc.af.mil/News/Article-Display/Article/4400254/next-generation-air-tankers-arrive-in-centcom-aor/"}
    ],
    updated: "Feb 2026",
    changeSummary: "KC-46A first deployment; KSA blocking offensive use"
  },
  {
    id: "diego_garcia_base",
    name: "Diego Garcia (BIOT)",
    type: "base",
    class: "Strategic Island Base",
    lat: -7.31, lng: 72.43,
    prevLat: null, prevLng: null,
    prevLabel: null,
    location: "British Indian Ocean Territory",
    mission: "Strategic Indian Ocean base. UK blocked use for Iran bomber strikes (PM Starmer). Currently hosts: B-52s (status unclear), F-16CMs for base defense (deployed Feb 25 from Misawa), KC-135 tankers, C-17s, P-8A. New UK-Chagos deal still pending ratification — UK retains operational control. UK expanded ban to cover offensive operations from British soil including Diego Garcia AND UK bases.",
    strikeGroup: "USAF / RN",
    confidence: "confirmed",
    sources: [
      {name: "The War Zone Feb 25", url: "https://www.twz.com/news-features/f-16s-arrive-to-protect-diego-garcia-f-22s-forward-deploy-to-israel"}
    ],
    updated: "Feb 25, 2026",
    changeSummary: "UK blocking offensive use; F-16s for base defense"
  },
  {
    id: "raf_lakenheath",
    name: "RAF Lakenheath (48th FW)",
    type: "base",
    class: "USAF Base in UK",
    lat: 52.41, lng: 0.56,
    prevLat: null, prevLng: null,
    prevLabel: null,
    location: "Suffolk, England, UK",
    mission: "48th Fighter Wing — home of F-35A Lightning II and F-15E Strike Eagles. Staging point for F-22 deployments to Middle East. Feb 26: UK government expanded base-use restrictions to prevent use of RAF Lakenheath and other UK bases for offensive/preemptive operations against Iran (Times/CFR). F-22s may continue transiting through but base cannot be used as strike staging location.",
    strikeGroup: "48th FW / USAFE",
    confidence: "confirmed",
    sources: [
      {name: "The War Zone Feb 25", url: "https://www.twz.com/news-features/f-16s-arrive-to-protect-diego-garcia-f-22s-forward-deploy-to-israel"},
      {name: "The Times/CFR (UK base ban)", url: "https://www.cfr.org/"}
    ],
    updated: "Feb 26, 2026",
    changeSummary: "UK expanded base-use ban to RAF Lakenheath"
  },
  {
    id: "al_dhafra",
    name: "Al Dhafra AB, UAE",
    type: "base",
    class: "Major Air Base",
    lat: 24.25, lng: 54.55,
    prevLat: null, prevLng: null,
    prevLabel: null,
    location: "Abu Dhabi, UAE",
    mission: "380th AEW. Home to U-2 Dragon Lady, RQ-4 Global Hawk ISR aircraft. UAE has refused to allow offensive strike operations against Iran from its territory. Significant F-35A presence confirmed (satellite). Defensive/ISR mission continues.",
    strikeGroup: "380th AEW",
    confidence: "confirmed",
    sources: [
      {name: "Newsweek (allies refuse basing)", url: "https://www.newsweek.com/trumps-middle-east-friends-wont-let-him-use-their-bases-to-strike-iran-11569309"}
    ],
    updated: "Feb 2026",
    changeSummary: "UAE refusing offensive basing"
  },
  {
    id: "ovda_ab",
    name: "Ovda Air Base, Israel (F-22 hub)",
    type: "base",
    class: "Israeli Air Force Base (US deployed)",
    lat: 29.94, lng: 34.94,
    prevLat: null, prevLng: null,
    prevLabel: null,
    location: "Negev Desert, Israel",
    mission: "First-ever deployment of US combat aircraft to Israel. 11 F-22A Raptors operational here. More F-22s en route from Lakenheath. JINSA: Ovda built to US specs. WSJ: US using Israel for warplane dispersal after Gulf state basing denials. Distances: ~1,540km to Bushehr, ~1,640km to Natanz, ~1,660km to Tehran — within combat radius with tanker support.",
    strikeGroup: "1st FW deployed",
    confidence: "confirmed",
    sources: [
      {name: "JINSA (Ovda analysis)", url: "https://jinsa.org/jinsas-ruhe-america-just-added-a-land-based-aircraft-carrier-to-the-middle-east/"},
      {name: "WSJ (dispersal strategy)", url: "https://www.wsj.com/politics/national-security/f-22-stealth-fighters-head-to-israel-a-first-for-the-us-c3b9f4a2"}
    ],
    updated: "Feb 26, 2026",
    changeSummary: "11 F-22s at Ovda, more inbound from Lakenheath"
  },

  // === DRONES ===
  {
    id: "mq9_reaper",
    name: "MQ-9 Reaper (6+ aircraft)",
    type: "drone",
    class: "MQ-9A Reaper",
    lat: 26.35, lng: 50.80,
    prevLat: null, prevLng: null,
    prevLabel: null,
    location: "Al Udeid AB, Qatar + Ali Al Salem AB, Kuwait",
    mission: "6+ MQ-9 Reapers in theater. Flying ISR and strike missions over Persian Gulf, Strait of Hormuz, and Arabian Sea. Armed with AGM-114 Hellfire and GBU-12. One MQ-9 was shot down by Iranian-backed forces in Yemen in 2023. Continuous 24/7 surveillance of IRGCN activity.",
    strikeGroup: "CENTCOM",
    confidence: "confirmed",
    sources: [
      {name: "Politics Today (300 aircraft)", url: "https://politicstoday.org/300-us-military-aircraft-deployed-to-centcom/"}
    ],
    updated: "Feb 24, 2026",
    changeSummary: "6+ Reapers monitoring Strait of Hormuz"
  },
  {
    id: "rq4_hawk",
    name: "RQ-4 Global Hawk (2 aircraft)",
    type: "drone",
    class: "RQ-4B Global Hawk",
    lat: 24.25, lng: 54.55,
    prevLat: null, prevLng: null,
    prevLabel: null,
    location: "Al Dhafra AB, UAE",
    mission: "2 RQ-4B Global Hawks based at Al Dhafra. High-altitude, long-endurance ISR. Monitoring Iranian military movements, nuclear facility activity, and naval operations. Can fly 30+ hour missions covering entire Iranian territory.",
    strikeGroup: "9th RW / 380th AEW",
    confidence: "confirmed",
    sources: [
      {name: "USAF Al Dhafra", url: "https://www.afcent.af.mil/Units/380th-Air-Expeditionary-Wing/"}
    ],
    updated: "Feb 24, 2026",
    changeSummary: "2 Global Hawks at Al Dhafra monitoring Iran"
  },

  // === SPECIAL NAVAL ===
  {
    id: "usns_supply",
    name: "USNS Supply (T-AOE-6) — Combat Logistics",
    type: "special_naval",
    class: "Supply-class Fast Combat Support",
    lat: 22.8, lng: 62.5,
    prevLat: null, prevLng: null,
    prevLabel: null,
    location: "Arabian Sea — with CSG-3",
    mission: "Fast combat support ship providing underway replenishment (UNREP) of fuel, ordnance, and stores to CSG-3. Enables continuous carrier operations without port calls. Critical for sustained strike operations.",
    strikeGroup: "CSG-3",
    confidence: "confirmed",
    sources: [
      {name: "USNI Fleet Tracker", url: "https://news.usni.org/2026/02/25/usni-news-fleet-and-marine-tracker-feb-25-2026"}
    ],
    updated: "Feb 25, 2026",
    changeSummary: "Providing UNREP to Lincoln CSG in Arabian Sea"
  },
  {
    id: "uss_bataan_arg",
    name: "USS Bataan ARG / 26th MEU",
    type: "amphibious",
    class: "Wasp-class LHD",
    lat: 15.0, lng: 53.0,
    prevLat: null, prevLng: null,
    prevLabel: null,
    location: "Gulf of Aden / Arabian Sea",
    mission: "26th MEU embarked on Bataan ARG. Operating in Gulf of Aden area. Provides amphibious assault capability and Marines for NEO or ground operations. Supporting CENTCOM operations.",
    strikeGroup: "26th MEU",
    confidence: "confirmed",
    sources: [
      {name: "USNI Feb 25", url: "https://news.usni.org/2026/02/25/usni-news-fleet-and-marine-tracker-feb-25-2026"}
    ],
    updated: "Feb 25, 2026",
    changeSummary: "26th MEU in Gulf of Aden"
  }
];

// === NEWS TICKER DATA ===
const tickerItems = [
  {
    id: "ticker_001",
    timestamp: "Feb 26, 11:45 AM ET",
    headline: "YAHSAT (UAE) SATELLITE BLACKOUT OVER IRAN: All Yahsat satellite communications (Al Yah 1, Al Yah 2, Al Yah 3) blacked out over Iran per reports — Yahsat is UAE's state-owned satellite operator, blackout could indicate UAE coordinating with US/Israel on pre-strike communications isolation or defensive preemptive measure.",
    category: "BREAKING",
    source: "Social media/OSINT reports",
    sourceUrl: "https://x.com/search?q=yahsat+iran"
  },
  {
    id: "ticker_002",
    timestamp: "Feb 26, 11:15 AM ET",
    headline: "IRAN HARDLINE SPEAKER DENOUNCES DIPLOMACY: Iranian parliament speaker Mohammad Bagher Ghalibaf stated Iran will not negotiate its missile program 'under any circumstances' — directly contradicting US preconditions for any deal. Rubio: Iran pursuing ICBMs, 'big, big problem.'",
    category: "INTEL",
    source: "IRNA/Reuters",
    sourceUrl: "https://www.reuters.com/"
  },
  {
    id: "ticker_003",
    timestamp: "Feb 26, 10:30 AM ET",
    headline: "LANDSMAN URGES IMMEDIATE STRIKES ON IRAN: Rep. Max Landsman (D-OH) joined Rep. Mike Waltz and others calling for immediate US strikes on Iranian nuclear facilities — rare bipartisan hawkish consensus emerging in Congress ahead of potential weekend strike window.",
    category: "DIPLOMATIC",
    source: "Congressional statements",
    sourceUrl: "https://www.congress.gov/"
  },
  {
    id: "ticker_004",
    timestamp: "Feb 26, 9:45 AM ET",
    headline: "SENATE WAR POWERS DEBATE: Senate Foreign Relations Committee convened emergency session on War Powers Resolution applicability to potential Iran strikes — Senators pushing for vote authorization before any military action. White House asserts existing AUMF sufficient.",
    category: "DIPLOMATIC",
    source: "Senate Foreign Relations Committee",
    sourceUrl: "https://www.foreign.senate.gov/"
  },
  {
    id: "ticker_005",
    timestamp: "Feb 26, 9:00 AM ET",
    headline: "UK EXPANDED BASE BAN: The Times/CFR report UK government told US it cannot use RAF Lakenheath and other UK-based facilities as staging bases for offensive Iran strikes — extending previous Diego Garcia ban to UK mainland. F-22s may transit but UK refuses strike staging.",
    category: "DIPLOMATIC",
    source: "The Times / CFR",
    sourceUrl: "https://www.cfr.org/"
  },
  {
    id: "ticker_006",
    timestamp: "Feb 26, 8:15 AM ET",
    headline: "FORD DEPARTED CRETE — ETA HAIFA FRIDAY: USS Gerald R. Ford (CVN-78) departed Souda Bay, Crete and is heading toward Haifa, Israel with ETA Friday Feb 27 — Israel Hayom/Reuters. Would be first US carrier at Israeli port during active Iran crisis.",
    category: "MOVEMENT",
    source: "Israel Hayom / Reuters / ItaMilRadar",
    sourceUrl: "https://www.israelhayom.com/2026/02/26/uss-gerald-r-ford-expected-to-reach-israel-within-24-hours/"
  },
  {
    id: "ticker_007",
    timestamp: "Feb 26, 7:30 AM ET",
    headline: "13 F-22s AT LAKENHEATH — ALL HEADED TO ISRAEL BY FRIDAY: OSINTdefender confirms 13 F-22 Raptors now at RAF Lakenheath (12 new from Langley + 1 returned from Israel with fuel leak). All expected to continue to Ovda AB, Israel by Friday, bringing total to ~24 Raptors in theater.",
    category: "MOVEMENT",
    source: "OSINTdefender / X",
    sourceUrl: "https://x.com/sentdefender/status/2026886621442756874"
  },
  {
    id: "ticker_008",
    timestamp: "Feb 26, 6:45 AM ET",
    headline: "WSJ: F-22s IN ISRAEL — FIRST-EVER US COMBAT AIRCRAFT DEPLOYED TO ISRAEL FOR POTENTIAL WARTIME MISSION. US dispersing warplanes to Israel after Gulf states denied basing — making Israeli bases and carrier aviation backbone of any strike package.",
    category: "ANALYSIS",
    source: "Wall Street Journal",
    sourceUrl: "https://www.wsj.com/politics/national-security/f-22-stealth-fighters-head-to-israel-a-first-for-the-us-c3b9f4a2"
  },
  {
    id: "ticker_009",
    timestamp: "Feb 25, 11:00 PM ET",
    headline: "CNN: US MILITARY PREPARED TO STRIKE IRAN AS EARLY AS THIS WEEKEND — multiple US officials. Strike package includes naval aviation from Ford/Lincoln CSGs, F-22s from Ovda, Jordan-based F-35s/F-15Es, and potential B-2 Spirit bombers from CONUS.",
    category: "BREAKING",
    source: "CNN",
    sourceUrl: "https://www.cnn.com/2026/02/25/politics/caine-iran-hegseth-trump"
  },
  {
    id: "ticker_010",
    timestamp: "Feb 25, 9:30 PM ET",
    headline: "6 KC-46A TANKERS EN ROUTE TO ISRAEL: Military Air Tracking Alliance confirms 5 KC-46As departed Portsmouth Intl (NH) + 1 from Seymour Johnson AFB, all heading to Ben Gurion Airport — enabling sustained F-22/F-35 operations from Israeli bases.",
    category: "MOVEMENT",
    source: "i24News / Military Air Tracking Alliance",
    sourceUrl: "https://www.i24news.tv/"
  },
  {
    id: "ticker_011",
    timestamp: "Feb 25, 8:00 PM ET",
    headline: "B-2 + CVW ANTI-SHIP STRIKE DRILL: B-2 Spirit bombers and Navy carrier air wing fighters rehearsed joint anti-ship strike missions off California coast — integration relevant to Strait of Hormuz contingency planning (USNI News).",
    category: "MILITARY",
    source: "USNI News",
    sourceUrl: "https://news.usni.org/"
  },
  {
    id: "ticker_012",
    timestamp: "Feb 25, 6:00 PM ET",
    headline: "NEWSWEEK: JORDAN, SAUDI, UAE, QATAR, BAHRAIN, KUWAIT, TURKEY ALL REFUSE STRIKE BASING — Confirms all traditional US regional partners denying use of their territory as launchpads for Iran strikes. Israel and carriers remain only viable platforms.",
    category: "DIPLOMATIC",
    source: "Newsweek",
    sourceUrl: "https://www.newsweek.com/trumps-middle-east-friends-wont-let-him-use-their-bases-to-strike-iran-11569309"
  },
  {
    id: "ticker_013",
    timestamp: "Feb 25, 4:00 PM ET",
    headline: "F-16s FROM JAPAN DEPLOYED TO DIEGO GARCIA FOR BASE DEFENSE: The War Zone confirms satellite imagery showing F-16CMs from 35th FW (Misawa, Japan) at Diego Garcia — defending against potential Iranian counterattack on strategic base.",
    category: "MOVEMENT",
    source: "The War Zone",
    sourceUrl: "https://www.twz.com/news-features/f-16s-arrive-to-protect-diego-garcia-f-22s-forward-deploy-to-israel"
  },
  {
    id: "ticker_014",
    timestamp: "Feb 25, 2:00 PM ET",
    headline: "RUBIO: IRAN PURSUING ICBMs — 'BIG, BIG PROBLEM': Secretary of State Rubio stated Iran is pursuing intercontinental ballistic missiles and refusing to discuss ballistic missile program in nuclear negotiations — cited as major obstacle to any deal.",
    category: "DIPLOMATIC",
    source: "Reuters / State Dept",
    sourceUrl: "https://www.reuters.com/"
  },
  {
    id: "ticker_015",
    timestamp: "Feb 25, 12:00 PM ET",
    headline: "INSS: USS MICHAEL MURPHY ENTERED PERSIAN GULF — 12 US WARSHIPS NOW IN ME WATERS: USS Michael Murphy (DDG-112) entered Persian Gulf. USS John Finn (DDG-113) in Arabian Sea. USS Delbert D. Black (DDG-119) moved N. Arabian Sea. Total 12 US warships in region.",
    category: "MOVEMENT",
    source: "INSS Israel / USNI",
    sourceUrl: "https://www.ynetnews.com/article/sykrwfnuwg"
  },
  {
    id: "ticker_016",
    timestamp: "Feb 24, 11:00 PM ET",
    headline: "THIRD WAVE: 6 MORE F-22s AIRBORNE LANGLEY→LAKENHEATH: DefenceGeek confirms third wave of 6 F-22 Raptors departed Langley AFB for RAF Lakenheath — total F-22 deployment now 24 aircraft, largest ever foreign deployment of Raptors.",
    category: "MOVEMENT",
    source: "DefenceGeek",
    sourceUrl: "https://www.defencegeek.com/"
  },
  {
    id: "ticker_017",
    timestamp: "Feb 24, 8:00 PM ET",
    headline: "11 F-22s ARRIVED OVDA AIR BASE, ISRAEL: First-ever US combat aircraft deployed to Israeli soil. 11 of 12 F-22s arrived at Ovda in Negev Desert. JINSA: 'America just added a land-based aircraft carrier to the region.' 1 returned to UK with fuel tank leak.",
    category: "MOVEMENT",
    source: "The War Zone / JINSA",
    sourceUrl: "https://www.twz.com/news-features/f-16s-arrive-to-protect-diego-garcia-f-22s-forward-deploy-to-israel"
  },
  {
    id: "ticker_018",
    timestamp: "Feb 24, 5:00 PM ET",
    headline: "B-21 RAIDER PRODUCTION BOOSTED 25%: Air Force and Northrop Grumman agreed to boost B-21 production capacity by 25% with $4.5B in approved funding. IOC at Ellsworth AFB remains ~2027.",
    category: "MILITARY",
    source: "Stars and Stripes",
    sourceUrl: "https://www.stripes.com/branches/air_force/2026-02-24/b21-raider-production-capacity-boost-20860544.html"
  },
  {
    id: "ticker_019",
    timestamp: "Feb 24, 3:00 PM ET",
    headline: "RAF E-7A WEDGETAIL DEPLOYED TO AL UDEID: 3 RAF E-7A Wedgetail airborne early warning aircraft deployed to Al Udeid, Qatar — UK most advanced AEW platform now supporting US CENTCOM battle management despite UK's ban on offensive operations from UK soil.",
    category: "MILITARY",
    source: "UK Defence Journal",
    sourceUrl: "https://x.com/ukdefjournal/status/2026354716987215884"
  },
  {
    id: "ticker_020",
    timestamp: "Feb 24, 12:00 PM ET",
    headline: "NEWSWEEK SATELLITE: 60+ COMBAT AIRCRAFT AT MUWAFFAQ SALTI (JORDAN): Satellite imagery confirms massive buildup at Jordanian base — F-35As, F-15Es, F-16CJs, A-10Cs confirmed. THAAD and Patriot batteries also visible. 68 cargo flights in past week.",
    category: "INTELLIGENCE",
    source: "Newsweek Satellite Imagery",
    sourceUrl: "https://www.newsweek.com/satellite-pictures-show-surge-us-aircraft-middle-east-11571894"
  },
  {
    id: "ticker_021",
    timestamp: "Feb 22, 11:00 AM ET",
    headline: "NYT: TRUMP CONSIDERING TARGETED IRAN STRIKE FOLLOWED BY LARGER ATTACK: New York Times reports Trump considering two-phase approach — initial targeted strike on select facilities followed by broader campaign if Iran retaliates. Debate in NSC ongoing.",
    category: "BREAKING",
    source: "New York Times",
    sourceUrl: "https://www.nytimes.com/2026/02/22/us/politics/trump-considers-targeted-strike-against-iran-followed-by-larger-attack.html"
  },
  {
    id: "ticker_022",
    timestamp: "Feb 21, 9:00 PM ET",
    headline: "UK DENIED DIEGO GARCIA FOR IRAN BOMBER STRIKES: UK PM Starmer formally denied US request to use Diego Garcia for B-2/B-52 bomber strikes against Iran — citing concerns about regional escalation. US exploring alternative basing and CONUS direct strike options.",
    category: "DIPLOMATIC",
    source: "The Week India / multiple sources",
    sourceUrl: "https://www.theweek.in/news/middle-east/2026/02/20/no-b-2s-for-iran-trumps-magnificent-bombers-face-hurdle-as-uk-denies-base-access.html"
  },
  {
    id: "ticker_023",
    timestamp: "Feb 21, 4:00 PM ET",
    headline: "30 F-35As CONFIRMED AT JORDAN BY SATELLITE: Airbus satellite imagery confirms 30 F-35A stealth fighters at Muwaffaq Salti AB, Jordan alongside F-15Es, F-16CJs. Total 60+ US combat aircraft now at single Jordanian base.",
    category: "INTELLIGENCE",
    source: "Army Recognition / Airbus Satellite",
    sourceUrl: "https://www.armyrecognition.com/news/aerospace-news/2026/u-s-strengthens-air-combat-forces-at-jordans-muwaffaq-salti-base-near-israel-as-iran-tensions-escalate"
  },
  {
    id: "ticker_024",
    timestamp: "Feb 20, 6:00 PM ET",
    headline: "USS FORD CSG-12 ENTERS MEDITERRANEAN: USS Gerald R. Ford (CVN-78) and CSG-12 transited Strait of Gibraltar Feb 20 — ItaMilRadar confirms 'signaling rapid airpower option toward Iran.' Ford joining Lincoln in Arabian Sea theater would be first 2-carrier ME deployment since 2012.",
    category: "MOVEMENT",
    source: "ItaMilRadar",
    sourceUrl: "https://www.itamilradar.com/2026/02/20/us-carrier-strike-group-12-enters-the-mediterranean-via-gibraltar-signaling-rapid-airpower-option-toward-iran/"
  },
  {
    id: "ticker_025",
    timestamp: "Feb 20, 11:00 AM ET",
    headline: "US PULLED F-35s FROM NATO COLD RESPONSE 2026 IN NORWAY: Norwegian defense officials confirmed US withdrew F-35s and other assets from Cold Response exercise in Norway — prioritizing Middle East buildup over NATO exercise commitment.",
    category: "MILITARY",
    source: "CNN / Norwegian Defense",
    sourceUrl: "https://www.cnn.com/2026/02/20/politics/military-power-buildup-us-iran-intl-vis"
  },
  {
    id: "ticker_026",
    timestamp: "Feb 18, 8:00 PM ET",
    headline: "15 KC-46A TANKERS AT LAJES — LARGEST EVER AZORES SURGE: 15 KC-46A Pegasus tankers confirmed at Lajes Field, Azores — largest-ever US tanker surge at Atlantic midpoint base. Total 108 tankers now in CENTCOM theater or en route. Flightradar24: top 9 tracked flights all KC-135s.",
    category: "MOVEMENT",
    source: "AIRLIVE",
    sourceUrl: "https://airlive.net/military/2026/02/21/a-massive-number-of-us-air-force-tankers-have-been-spotted-at-lajes-field-in-the-azores/"
  },
  {
    id: "ticker_027",
    timestamp: "Feb 17, 10:00 AM ET",
    headline: "FIRST 6 F-22 RAPTORS ARRIVE RAF LAKENHEATH: First wave of 6 F-22A Raptors from 1st Fighter Wing (Langley AFB) arrived at RAF Lakenheath, UK — staging for Middle East deployment. The Aviationist first to report.",
    category: "MOVEMENT",
    source: "The Aviationist",
    sourceUrl: "https://theaviationist.com/2026/02/17/six-f22-raptors-arrive-raf-lakenheath/"
  },
  {
    id: "ticker_028",
    timestamp: "Feb 12, 8:00 AM ET",
    headline: "PENTAGON ORDERS USS BUSH CSG SPIN-UP FOR ME DEPLOYMENT: Pentagon ordered USS George H.W. Bush (CVN-77) and CSG-10 to accelerate readiness for potential Middle East deployment — if deployed, would be THIRD carrier strike group in Iran theater.",
    category: "MILITARY",
    source: "The War Zone",
    sourceUrl: "https://www.twz.com/news-features/second-carrier-strike-group-ordered-to-spin-up-for-deployment-to-middle-east-report"
  },
  {
    id: "ticker_029",
    timestamp: "Feb 11, 6:00 PM ET",
    headline: "THE MEDIA LINE: LARGEST US MILITARY BUILDUP SINCE 2003 — The Media Line analysis: US has assembled largest military force in Middle East since 2003 Iraq invasion. 250+ combat aircraft, 12 warships, 2 carrier strike groups, special operations and ground forces.",
    category: "ANALYSIS",
    source: "The Media Line",
    sourceUrl: "https://themedialine.org/top-stories/largest-us-military-buildup-since-2003-raises-prospect-of-multi-week-strike-on-iran/"
  },
  {
    id: "ticker_030",
    timestamp: "Feb 3, 12:00 PM ET",
    headline: "F-35C SHOOTS DOWN IRANIAN SHAHED-139 DRONE: USS Abraham Lincoln CVW-9 F-35C Lightning II shot down Iranian Shahed-139 drone over Arabian Sea — first combat kill by F-35C. Iran called it an 'act of aggression.'",
    category: "MILITARY",
    source: "Forbes",
    sourceUrl: "https://www.forbes.com/sites/petersuciu/2026/02/05/the-abraham-lincoln-carrier-strike-group-is-operating-near-iran/"
  }
];

// === MAP INITIALIZATION ===
const map = L.map('map', {
  center: [25, 55],
  zoom: 4,
  minZoom: 2,
  maxZoom: 10,
  zoomControl: true,
  attributionControl: false
});

L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
  subdomains: 'abcd',
  maxZoom: 10
}).addTo(map);

// === HELPER: DRAW SHAPES ===
function getMarkerHtml(type, color, size = 28) {
  const s = ASSET_TYPES[type];
  if (!s) return `<div style="width:${size}px;height:${size}px;background:${color};border-radius:50%;"></div>`;
  const shape = s.shape;
  const half = size / 2;
  const svg = (inner) => `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">${inner}</svg>`;

  if (shape === 'hexagon') {
    const pts = [];
    for (let i = 0; i < 6; i++) {
      const a = (Math.PI / 180) * (60 * i - 30);
      pts.push(`${half + (half - 2) * Math.cos(a)},${half + (half - 2) * Math.sin(a)}`);
    }
    return svg(`<polygon points="${pts.join(' ')}" fill="${color}" stroke="white" stroke-width="1.5"/>`);
  }
  if (shape === 'bomber') {
    const w = size, h = size;
    return svg(`<polygon points="${w/2},2 ${w-2},${h*0.45} ${w*0.72},${h-2} ${w/2},${h*0.72} ${w*0.28},${h-2} 2,${h*0.45}" fill="${color}" stroke="white" stroke-width="1.5"/>`);
  }
  if (shape === 'triangle') {
    return svg(`<polygon points="${half},2 ${size-2},${size-2} 2,${size-2}" fill="${color}" stroke="white" stroke-width="1.5"/>`);
  }
  if (shape === 'diamond') {
    return svg(`<polygon points="${half},2 ${size-2},${half} ${half},${size-2} 2,${half}" fill="${color}" stroke="white" stroke-width="1.5"/>`);
  }
  if (shape === 'eye') {
    return svg(`<ellipse cx="${half}" cy="${half}" rx="${half-2}" ry="${half*0.55}" fill="${color}" stroke="white" stroke-width="1.5"/><circle cx="${half}" cy="${half}" r="${half*0.3}" fill="white"/>`);
  }
  if (shape === 'invtriangle') {
    return svg(`<polygon points="2,2 ${size-2},2 ${half},${size-2}" fill="${color}" stroke="white" stroke-width="1.5"/>`);
  }
  if (shape === 'square') {
    return svg(`<rect x="2" y="2" width="${size-4}" height="${size-4}" fill="${color}" stroke="white" stroke-width="1.5"/>`);
  }
  if (shape === 'shield') {
    return svg(`<path d="M${half},2 L${size-3},${size*0.35} L${size-3},${size*0.6} Q${half},${size-2} ${half},${size-2} Q${3},${size*0.6} ${3},${size*0.35} Z" fill="${color}" stroke="white" stroke-width="1.5"/>`);
  }
  if (shape === 'pentagon') {
    const pts = [];
    for (let i = 0; i < 5; i++) {
      const a = (Math.PI / 180) * (72 * i - 90);
      pts.push(`${half + (half - 2) * Math.cos(a)},${half + (half - 2) * Math.sin(a)}`);
    }
    return svg(`<polygon points="${pts.join(' ')}" fill="${color}" stroke="white" stroke-width="1.5"/>`);
  }
  if (shape === 'smalldiamond') {
    const sm = size * 0.55, offset = (size - sm) / 2;
    return svg(`<polygon points="${half},${offset} ${offset+sm},${half} ${half},${offset+sm} ${offset},${half}" fill="${color}" stroke="white" stroke-width="1.5"/>`);
  }
  if (shape === 'hexoutline') {
    const pts = [];
    for (let i = 0; i < 6; i++) {
      const a = (Math.PI / 180) * (60 * i - 30);
      pts.push(`${half + (half - 2) * Math.cos(a)},${half + (half - 2) * Math.sin(a)}`);
    }
    return svg(`<polygon points="${pts.join(' ')}" fill="none" stroke="${color}" stroke-width="2.5"/>`);
  }
  return svg(`<circle cx="${half}" cy="${half}" r="${half-2}" fill="${color}" stroke="white" stroke-width="1.5"/>`);
}

// === FILTER STATE ===
const filterState = {
  CARRIERS: true,
  BOMBERS: true,
  FIGHTERS: true,
  TANKERS: true,
  ISR: true,
  SUBMARINES: true,
  BASES: true,
  'MISSILE DEF': true,
  AMPHIBIOUS: true,
  DRONES: true,
  SPECIAL: true
};

let showMovements = true;
let activeTimelineHours = null;

// === MARKERS & LAYERS ===
const markerMap = {};
const movementLines = {};

function addOrUpdateMarker(asset) {
  const typeInfo = ASSET_TYPES[asset.type];
  if (!typeInfo) return;
  const color = asset.confidence === 'unconfirmed'
    ? '#9E9E9E'
    : typeInfo.color;
  const html = getMarkerHtml(asset.type, color);
  const icon = L.divIcon({
    html: html,
    className: 'asset-marker',
    iconSize: [28, 28],
    iconAnchor: [14, 14],
    popupAnchor: [0, -16]
  });
  if (markerMap[asset.id]) {
    markerMap[asset.id].setIcon(icon);
    markerMap[asset.id].setLatLng([asset.lat, asset.lng]);
  } else {
    const marker = L.marker([asset.lat, asset.lng], { icon })
      .bindPopup(() => buildPopup(asset), { maxWidth: 420, className: 'dark-popup' });
    markerMap[asset.id] = marker;
  }
}

function buildPopup(asset) {
  const typeInfo = ASSET_TYPES[asset.type] || {};
  let sourcesHtml = '';
  if (asset.sources && asset.sources.length) {
    sourcesHtml = '<div class="popup-sources"><strong>Sources:</strong><ul>' +
      asset.sources.map(s => `<li><a href="${s.url}" target="_blank" rel="noopener">${s.name}</a></li>`).join('') +
      '</ul></div>';
  }
  let prevHtml = '';
  if (asset.prevLat !== null && asset.prevLat !== undefined && asset.prevLabel) {
    prevHtml = `<div class="popup-prev"><span class="popup-label">Previous:</span> ${asset.prevLabel}</div>`;
  }
  let changeHtml = '';
  if (asset.changeSummary) {
    changeHtml = `<div class="popup-change"><span class="popup-label">Latest:</span> ${asset.changeSummary}</div>`;
  }
  return `
    <div class="popup-inner">
      <div class="popup-title">${asset.name}</div>
      <div class="popup-type">${typeInfo.label || asset.type} — <span class="popup-conf popup-conf-${asset.confidence}">${asset.confidence.toUpperCase()}</span></div>
      <div class="popup-location"><span class="popup-label">Location:</span> ${asset.location}</div>
      ${prevHtml}
      ${changeHtml}
      <div class="popup-mission">${asset.mission}</div>
      ${sourcesHtml}
      <div class="popup-updated">Updated: ${asset.updated}</div>
    </div>
  `;
}

function renderMarkers() {
  assets.forEach(asset => {
    const group = ASSET_TYPES[asset.type]?.filterGroup;
    const visible = filterState[group] !== false;
    addOrUpdateMarker(asset);
    const marker = markerMap[asset.id];
    if (!marker) return;
    if (visible) {
      if (!map.hasLayer(marker)) marker.addTo(map);
    } else {
      if (map.hasLayer(marker)) map.removeLayer(marker);
    }
  });
}

function renderMovements() {
  assets.forEach(asset => {
    if (movementLines[asset.id]) {
      map.removeLayer(movementLines[asset.id]);
      delete movementLines[asset.id];
    }
    if (!showMovements) return;
    if (asset.prevLat === null || asset.prevLat === undefined) return;
    if (activeTimelineHours !== null) {
      if (!asset.movementDate) return;
      const moveTime = new Date(asset.movementDate + 'T12:00:00Z').getTime();
      const now = Date.now();
      const cutoff = now - activeTimelineHours * 3600 * 1000;
      if (moveTime < cutoff) return;
    }
    const group = ASSET_TYPES[asset.type]?.filterGroup;
    if (filterState[group] === false) return;
    const color = ASSET_TYPES[asset.type]?.color || '#fff';
    const line = L.polyline(
      [[asset.prevLat, asset.prevLng], [asset.lat, asset.lng]],
      { color, weight: 1.5, opacity: 0.55, dashArray: '6,6' }
    );
    movementLines[asset.id] = line;
    line.addTo(map);
  });
}

// === FILTER PANEL ===
function buildFilterPanel() {
  const panel = document.getElementById('filter-panel');
  if (!panel) return;
  panel.innerHTML = '';
  const groups = [...new Set(Object.values(ASSET_TYPES).map(t => t.filterGroup))];
  groups.forEach(group => {
    const btn = document.createElement('button');
    btn.className = 'filter-btn' + (filterState[group] ? ' active' : '');
    btn.textContent = group;
    const typeEntry = Object.values(ASSET_TYPES).find(t => t.filterGroup === group);
    if (typeEntry) btn.style.borderColor = typeEntry.color;
    if (filterState[group] && typeEntry) btn.style.background = typeEntry.color + '33';
    btn.addEventListener('click', () => {
      filterState[group] = !filterState[group];
      btn.classList.toggle('active', filterState[group]);
      btn.style.background = filterState[group] && typeEntry ? typeEntry.color + '33' : '';
      renderMarkers();
      renderMovements();
    });
    panel.appendChild(btn);
  });
}

// === MOVEMENT TOGGLE ===
function setupMovementToggle() {
  const btn = document.getElementById('movement-toggle');
  if (!btn) return;
  btn.addEventListener('click', () => {
    showMovements = !showMovements;
    btn.classList.toggle('active', showMovements);
    renderMovements();
  });
}

// === NEWS TICKER ===
function buildTicker() {
  const track = document.getElementById('ticker-track');
  if (!track) return;
  const items = [...tickerItems];
  let html = items.map(item => {
    const catClass = 'ticker-cat-' + item.category.toLowerCase().replace(/[^a-z]/g, '');
    return `<span class="ticker-item"><span class="ticker-cat ${catClass}">${item.category}</span> <span class="ticker-time">${item.timestamp}</span> — <a href="${item.sourceUrl}" target="_blank" rel="noopener" class="ticker-link">${item.headline}</a></span>`;
  }).join('<span class="ticker-sep">///</span>');
  html += html;
  track.innerHTML = html;
  const totalW = track.scrollWidth / 2;
  let pos = 0;
  const speed = 0.4;
  function animate() {
    pos += speed;
    if (pos >= totalW) pos = 0;
    track.style.transform = `translateX(-${pos}px)`;
    requestAnimationFrame(animate);
  }
  requestAnimationFrame(animate);
}

// === SIDEBAR PANEL ===
function buildSidebar() {
  const list = document.getElementById('asset-list');
  if (!list) return;
  list.innerHTML = '';
  const groups = {};
  assets.forEach(asset => {
    const g = ASSET_TYPES[asset.type]?.filterGroup || 'OTHER';
    if (!groups[g]) groups[g] = [];
    groups[g].push(asset);
  });
  Object.entries(groups).forEach(([group, groupAssets]) => {
    const header = document.createElement('div');
    header.className = 'sidebar-group-header';
    header.textContent = group;
    list.appendChild(header);
    groupAssets.forEach(asset => {
      const item = document.createElement('div');
      item.className = 'sidebar-item' + (asset.confidence === 'unconfirmed' ? ' unconfirmed' : '');
      const dot = document.createElement('span');
      dot.className = 'sidebar-dot';
      dot.style.background = asset.confidence === 'unconfirmed' ? '#9E9E9E' : (ASSET_TYPES[asset.type]?.color || '#fff');
      const name = document.createElement('span');
      name.className = 'sidebar-name';
      name.textContent = asset.name;
      item.appendChild(dot);
      item.appendChild(name);
      item.addEventListener('click', () => {
        map.setView([asset.lat, asset.lng], 5, { animate: true });
        const marker = markerMap[asset.id];
        if (marker) marker.openPopup();
      });
      list.appendChild(item);
    });
  });
}

// === TIMELINE FILTER ===
function buildTimelineFilter() {
  const container = document.getElementById('timeline-filter');
  if (!container) return;
  const options = [
    { label: 'ALL', hours: null },
    { label: '24H', hours: 24 },
    { label: '48H', hours: 48 },
    { label: '72H', hours: 72 },
    { label: '7D', hours: 168 }
  ];
  options.forEach(opt => {
    const btn = document.createElement('button');
    btn.className = 'timeline-btn' + (activeTimelineHours === opt.hours ? ' active' : '');
    btn.textContent = opt.label;
    btn.addEventListener('click', () => {
      activeTimelineHours = opt.hours;
      document.querySelectorAll('.timeline-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderMovements();
      updateMovementCount();
    });
    container.appendChild(btn);
  });
}

function getVisibleMovementCount() {
  return assets.filter(asset => {
    if (asset.prevLat === null || asset.prevLat === undefined) return false;
    if (activeTimelineHours !== null) {
      if (!asset.movementDate) return false;
      const moveTime = new Date(asset.movementDate + 'T12:00:00Z').getTime();
      const now = Date.now();
      const cutoff = now - activeTimelineHours * 3600 * 1000;
      if (moveTime < cutoff) return false;
    }
    return true;
  }).length;
}

function updateMovementCount() {
  const visibleMovements = getVisibleMovementCount();
  const label = document.querySelector('.timeline-label');
  if (label) {
    const suffix = activeTimelineHours === null ? '' : ` (${visibleMovements})`;
    label.textContent = 'MOVEMENT TIMELINE' + suffix;
  }
}

buildTimelineFilter();
updateMovementCount();
