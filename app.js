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
    mission: "Feb 24: 11 F-22s (of 12) arrived at Ovda Air Base in Israel's Negev Desert. One (TREND 66) returned to Lakenheath with fuel tank leak. Ovda hosts Israeli F-16C unit. JINSA report: Ovda already built to US specifications, first-ever deployment of US combat aircraft to Israel — 'America just added a land-based aircraft carrier to the region.' Feb 25: SECOND wave of 6 more F-22s (TABOR 31-36) departed Langley for RAF Lakenheath, supported by 5 KC-135 tankers (GOLD 51-55). Feb 25: THIRD wave of 6 F-22s confirmed airborne from Langley to Lakenheath (DefenceGeek), bringing total F-22 deployment to 24 aircraft. WSJ (Feb 26): First-ever US combat aircraft deployed to Israel for potential wartime mission. US using Israeli bases to DISPERSE warplanes rather than concentrating at vulnerable Gulf airfields — critical after Saudi Arabia and UAE denied basing. This makes Israeli-based F-22s and carrier-based aviation the backbone of any strike package. Distances from Ovda: ~1,540km to Bushehr, ~1,640km to Natanz, ~1,660km to Tehran. BASING CONSTRAINTS: Newsweek (Feb 25) confirms Jordan, Saudi Arabia, UAE, Qatar, Bahrain, Kuwait, and Turkey all refuse to serve as launchpads. Rubio (Feb 25): Iran pursuing ICBMs, refuses to discuss ballistic missiles — 'big, big problem.' OSINTdefender (Feb 26): 13 F-22s now at Lakenheath (12 new arrivals from Langley + 1 returned from Israel with fuel leak), all expected to continue to Israel by Friday. Feb 26 UPDATE: The Times/CFR report UK expanded base-use ban to airbases IN ENGLAND as well as Diego Garcia -- UK blocking use of RAF Lakenheath and other UK bases for preemptive strikes on Iran. Raptors may transit through but UK refuses to serve as staging base for strike operations. Feb 26 UPDATE: MizarVision satellite imagery confirms PATRIOT air defense battery components deployed at Ovda alongside the 11 F-22s — first confirmation of integrated air defense at Israel deployment site (EGYOSINT/MizarVision/Times of Israel).",
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
      {name: "OSINTdefender (13 at Lakenheath)", url: "https://x.com/sentdefender/status/2026886621442756874"},
      {name: "EGYOSINT/MizarVision (Patriot at Ovda)", url: "https://www.timesofisrael.com/us-iran-said-to-agree-to-further-talks-next-week-as-mediator-claims-progress/"}
    ],
    updated: "Feb 26, 2026",
    changeSummary: "Patriot battery confirmed at Ovda alongside F-22s"
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
    name: "F-15E Strike Eagles (30 aircraft — 18 at Jordan + 12 transiting via Lakenheath)",
    type: "fighter",
    class: "F-15E Strike Eagle",
    lat: 31.85, lng: 36.85,
    prevLat: 52.41, prevLng: 0.56,
    prevLabel: "RAF Lakenheath, UK (48th FW)",
    movementDate: "2026-02-15",
    location: "Muwaffaq Salti AB, Jordan",
    mission: "3 squadrons including 12 from 48th FW RAF Lakenheath (494th FS) and Mountain Home AFB. Only USAF fighter certified for GBU-28 and GBU-72 deep-penetrating bunker busters — critical for Iran hardened targets. Part of 60+ aircraft buildup at Muwaffaq Salti confirmed by satellite. THAAD battery emplaced at base alongside Patriot systems. Feb 26 UPDATE: 12 additional F-15Es from 4th FW Seymour Johnson AFB (NC) crossed Atlantic in two 6-ship formations (TABOR 11-16, TABOR 21-26) escorted by 2x KC-46 + 4x KC-135. Arrived RAF Lakenheath staging. OSINT indicates final destination likely Ovda Air Base, Israel (JFeed/The War Zone). Total F-15E count now 30.",
    strikeGroup: "48th FW / 366th FW / 4th FW",
    confidence: "confirmed",
    sources: [
      {name: "Air & Space Forces", url: "https://www.airandspaceforces.com/f-35s-deploy-middle-east-us-talks-iran/"},
      {name: "BBC", url: "https://www.bbc.com/news/live/c0rj5dwjx2pt"},
      {name: "JFeed Feb 26", url: "https://www.jfeed.com/news-world/us-f15-deployment-middle-east"},
      {name: "The War Zone Feb 26", url: "https://www.twz.com/news-features/uss-gerald-r-fords-imminent-arrival-off-israel-comes-as-negotiations-grind-on"}
    ],
    updated: "Feb 26, 2026",
    changeSummary: "12 more F-15Es (4th FW) transiting via Lakenheath"
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
  },

  // === SURVEILLANCE / ISR ===
  {
    id: "e3_saudi",
    name: "E-3 Sentry AWACS (6 of 16 deployed)",
    type: "surveillance",
    class: "E-3G Sentry",
    lat: 24.10, lng: 45.60,
    prevLat: 35.42, prevLng: -97.38,
    prevLabel: "Tinker AFB, OK (4 aircraft) + Elmendorf, AK (2)",
    movementDate: "2026-02-18",
    location: "Prince Sultan AB, Saudi Arabia + staging at Ramstein",
    mission: "37.5% of entire E-3 fleet deployed in ~48 hours. 4 from Tinker AFB via Ramstein. 2 from Elmendorf via RAF Mildenhall. Kadena stripped of ALL AWACS coverage. Alaska reduced to 1 E-3. >50% of mission-capable aircraft deployed. Feb 24: Defense News confirms E-3s providing airborne command and control. 6 of 16 total fleet deployed — represents >50% of mission-capable aircraft. Feb 25: 2 more E-3B/C Sentry departed Elmendorf AFB Alaska to RAF Mildenhall — total approaching 40%+ of operational fleet. WaPo confirms over 1/3 of active E-3G fleet now deployed to Europe/ME. Anadolu confirms 6 E-3s in CENTCOM theater.",
    strikeGroup: "552nd ACW",
    confidence: "confirmed",
    sources: [
      {name: "Army Recognition", url: "https://www.armyrecognition.com/news/aerospace-news/2026/us-deploys-nearly-40-of-entire-e-3-sentry-awacs-fleet-to-middle-east-for-potential-war-against-iran"},
      {name: "The Aviationist Feb 17", url: "https://theaviationist.com/2026/02/17/six-f22-raptors-arrive-raf-lakenheath/"}
    ],
    updated: "Feb 25, 2026",
    changeSummary: "2 more E-3s from Alaska to Mildenhall; 40%+ deployed"
  },
  {
    id: "rc135_mildenhall",
    name: "RC-135V/W Rivet Joint",
    type: "surveillance",
    class: "RC-135V/W",
    lat: 35.48, lng: 24.15,
    prevLat: 25.12, prevLng: 51.31,
    prevLabel: "Al Udeid AB, Qatar (Jan-Feb 2026)",
    movementDate: "2026-02-23",
    location: "Chania AB, Crete — 3 aircraft relocated",
    mission: "3 RC-135W Rivet Joint aircraft now at Chania, Crete. One arrived from US, two relocated from Al Udeid AB, Qatar. Move likely to put SIGINT assets beyond range of Iranian air defenses. Additional RC-135 en route from Florida.",
    strikeGroup: "55th Wing",
    confidence: "confirmed",
    sources: [
      {name: "ItaMilRadar Jan 30", url: "https://www.itamilradar.com/2026/01/30/uk-rc-135-and-us-p-8a-operate-together-over-the-black-sea-tightening-natos-isr-net-near-russias-southern-flank/"},
      {name: "Army Recognition Jan 6", url: "https://armyrecognition.com/news/aerospace-news/2026/u-s-rc-135w-rivet-joint-reconnaissance-aircraft-conducts-intelligence-mission-near-venezuela"},
      {name: "Vestnik Kavkaza Feb 23", url: "https://en.vestikavkaza.ru/news/US-deploys-reconnaissance-aircraft-to-Greece.html"},
      {name: "ClearanceJobs Feb 19", url: "https://news.clearancejobs.com/2026/02/19/stealth-surge-f-22-raptors-cross-atlantic-as-u-s-builds-airpower-near-iran/"}
    ],
    updated: "Feb 23, 2026",
    changeSummary: "3 RC-135s relocated to Crete from Qatar for safety"
  },
  {
    id: "u2_fairford",
    name: "U-2S Dragon Lady",
    type: "surveillance",
    class: "U-2S",
    lat: 51.68, lng: -1.79,
    prevLat: 39.13, prevLng: -121.44,
    prevLabel: "Beale AFB, CA (Feb 19)",
    movementDate: "2026-02-19",
    location: "RAF Fairford, UK — 2 aircraft. 1 departed Feb 17 toward Middle East",
    mission: "Regular ISR rotation station. DRAGON86 arrived Feb 19 from Beale. Another U-2 departed Feb 17 toward suspected Cyprus/Middle East staging. Operates above 70,000ft with ASARS, SYERS, SIGINT. Note: UK PM Starmer denied US use of RAF Fairford for bomber strikes against Iran (Feb 21).",
    strikeGroup: "9th RW",
    confidence: "confirmed",
    sources: [
      {name: "ItaMilRadar Feb 19", url: "https://www.itamilradar.com/2026/02/19/usaf-u-2-dragon-lady-arrives-at-raf-fairford-possible-transit-signals-continued-isr-posture-shift/"}
    ],
    updated: "Feb 22, 2026",
    changeSummary: "ISR rotation; UK denied bomber base access"
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
    updated: "Feb 3, 2026",
    changeSummary: "Black Sea surveillance from Sigonella"
  },
  {
    id: "p8_hormuz",
    name: "P-8A Poseidon (4+ aircraft)",
    type: "surveillance",
    class: "P-8A Poseidon",
    lat: 26.0, lng: 56.5,
    prevLat: 37.40, prevLng: 14.92,
    prevLabel: "NAS Sigonella, Italy (VP-10, ~Feb 9)",
    movementDate: "2026-02-09",
    location: "Strait of Hormuz patrol + Mediterranean transit",
    mission: "Continuously patrolling Strait of Hormuz. 2 additional P-8s (VP-10) arrived from Sigonella ~Feb 9 at Isa AB (Bahrain) and Thumrait AB (Oman). 2 more spotted over Mediterranean Feb 20. Rare night-time aerial refueling of P-8A by KC-135T observed south of Crete, indicating high-priority continuous sub-hunting/surveillance in Eastern Mediterranean.",
    strikeGroup: "VP-10",
    confidence: "confirmed",
    sources: [
      {name: "CNN Feb 20", url: "https://www.cnn.com/2026/02/20/politics/military-power-buildup-us-iran-intl-vis"},
      {name: "The Aviationist Feb 11", url: "https://theaviationist.com/2026/02/11/vt-ang-f35s-depart-ln-for-middle-east/"},
      {name: "ItaMilRadar (night ops)", url: "https://www.itamilradar.com/2026/01/02/us-navy-p-8a-awaits-kc-135r-refuelling-south-of-crete-signalling-extended-night-time-surveillance-in-the-eastern-mediterranean/"}
    ],
    updated: "Feb 22, 2026",
    changeSummary: "Night refueling south of Crete, sub-hunting ops"
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
    updated: "Feb 2026",
    changeSummary: "Comms relay nodes deployed to Prince Sultan"
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
    updated: "Feb 2026",
    changeSummary: "Reaper drones at Muwaffaq Salti"
  },
  {
    id: "ea18g_jordan",
    name: "EA-18G Growler (6 aircraft)",
    type: "fighter",
    class: "EA-18G Growler",
    lat: 31.88, lng: 36.82,
    prevLat: 17.0, prevLng: -65.0,
    prevLabel: "Caribbean / SOUTHCOM (Feb 2026)",
    movementDate: "2026-02-15",
    location: "Muwaffaq Salti AB, Jordan — electronic warfare",
    mission: "6 Growlers visible at Muwaffaq Salti in satellite imagery. Electronic warfare / SEAD support. Came from SOUTHCOM Caribbean operations.",
    strikeGroup: "USN EW",
    confidence: "confirmed",
    sources: [
      {name: "The War Zone", url: "https://www.twz.com/news-features/supercarrier-uss-gerald-r-ford-has-crossed-into-the-mediterranean"}
    ],
    updated: "Feb 2026",
    changeSummary: "Electronic warfare jets at Jordan"
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
    movementDate: "2024-06-01",
    location: "CENTCOM — between Mediterranean & Persian Gulf",
    mission: "Continuously deployed since Aug 2024. Participated in Operation Midnight Hammer (June 2025), firing 30+ Tomahawks at Isfahan. OSINT reports (Feb 18-20) indicate continued CENTCOM operations. Navy has not confirmed exact location.",
    strikeGroup: "CENTCOM attached",
    confidence: "unconfirmed",
    sources: [
      {name: "JFeed Feb 18", url: "https://www.jfeed.com/news-world/uss-georgia-submarine-iran"},
      {name: "National Interest (Midnight Hammer)", url: "https://nationalinterest.org/blog/buzz/this-ohio-class-submarine-blasted-iran-with-cruise-missiles-during-operation-midnight-hammer"}
    ],
    updated: "Feb 18, 2026",
    changeSummary: "Continuously deployed since Aug 2024, CENTCOM"
  },
  {
    id: "ssgn726",
    name: "USS Ohio (SSGN-726)",
    type: "submarine",
    class: "Ohio-class SSGN",
    lat: 15.0, lng: 120.0,
    prevLat: 14.79, prevLng: 120.27,
    prevLabel: "Subic Bay, Philippines (Sep 2025)",
    movementDate: "2025-09-29",
    location: "Western Pacific (last known)",
    mission: "Active in Western Pacific 2025. Port visits: Guam (Apr), Brisbane (Jul), Subic Bay, Philippines (Sep 2025 — rare surfacing photographed). Retirement potentially extended past FY2026.",
    strikeGroup: "SUBRON 19",
    confidence: "unconfirmed",
    sources: [
      {name: "USNI News Sep 2025", url: "https://news.usni.org/2025/09/29/u-s-guided-missile-sub-makes-rare-appearance-in-the-philippines"},
      {name: "National Security Journal", url: "https://nationalsecurityjournal.org/the-u-s-navys-great-ohio-class-ssgn-submarine-comeback-has-begun/"}
    ],
    updated: "Sep 2025 (last known)",
    changeSummary: "Western Pacific, last seen Subic Bay Sep 2025"
  },
  {
    id: "ssn21",
    name: "USS Seawolf (SSN-21)",
    type: "submarine",
    class: "Seawolf-class",
    lat: 25.0, lng: 125.0,
    prevLat: 35.28, prevLng: 139.67,
    prevLabel: "Yokosuka, Japan (Dec 16, 2025)",
    movementDate: "2025-12-16",
    location: "Western Pacific — operating with Lincoln CSG",
    mission: "Port visit to Yokosuka Dec 16, 2025. Operating with USS Abraham Lincoln CSG in Western Pacific / South China Sea before Lincoln was redirected to Arabian Sea.",
    strikeGroup: "DEVRON 5",
    confidence: "unconfirmed",
    sources: [
      {name: "DVIDS Dec 2025", url: "https://www.dvidshub.net/image/9458368/uss-seawolf-ssn-21-pulls-into-fleet-activities-yokosuka"},
      {name: "19FortyFive", url: "https://www.19fortyfive.com/2026/01/the-u-s-navy-sent-a-nuclear-aircraft-carrier-and-seawolf-class-stealth-sub-into-chinas-backyard/"}
    ],
    updated: "Dec 2025",
    changeSummary: "Operating with Lincoln CSG in Western Pacific"
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
    updated: "Feb 2026",
    changeSummary: "Continuous Pacific deterrence patrols"
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
    updated: "Feb 2026",
    changeSummary: "Continuous Atlantic deterrence patrols"
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
    updated: "Jan 21, 2026",
    changeSummary: "Hypersonic weapon install, sea trials complete"
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
    mission: "Forward deployed LCS in Arabian Gulf. Joint training with A-10 documented Feb 2, 2026. Feb 25: USS Santa Barbara and USS Tulsa left Persian Gulf, now in northern Arabian Sea per INSS.",
    strikeGroup: "5th Fleet",
    confidence: "confirmed",
    sources: [
      {name: "CENTCOM Official", url: "https://www.centcom.mil/MEDIA/igphoto/2002555983/"}
    ],
    updated: "Feb 25, 2026",
    changeSummary: "Departed Persian Gulf to northern Arabian Sea"
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
    updated: "Feb 2026",
    changeSummary: "Staging AWACS and transiting assets to ME"
  },
  {
    id: "al_udeid",
    name: "Al Udeid Air Base",
    type: "base",
    class: "CENTCOM Forward HQ",
    lat: 25.12, lng: 51.32,
    prevLat: null, prevLng: null,
    prevLabel: null,
    location: "Qatar — dispersal underway, tanker drawdown visible",
    mission: "Largest US base in Middle East. CENTCOM forward HQ. 379th AEW. Struck by Iran June 23, 2025 (retaliation for Midnight Hammer). Feb 20-21: NYT reports hundreds of troops evacuated (Pentagon denies via Fox News — contradictory reports). Satellite imagery shows continuous decline in tanker aircraft vs. increase at Prince Sultan AB. Vulnerability to Iranian ballistic missiles driving asset dispersal to Jordan and Saudi Arabia. THAAD + Patriot still defending.",
    strikeGroup: "CENTCOM/379th AEW",
    confidence: "confirmed",
    sources: [
      {name: "The War Zone Feb 20", url: "https://www.twz.com/news-features/supercarrier-uss-gerald-r-ford-has-crossed-into-the-mediterranean"},
      {name: "ZeroHedge (NYT/Fox contradictions)", url: "https://www.zerohedge.com/markets/us-evacuates-troops-exposed-qatar-bahrain-bases-weekend-strike-coming"},
      {name: "Al Jazeera", url: "https://www.aljazeera.com/news/2025/6/12/mapping-us-troops-and-military-bases-in-the-middle-east"}
    ],
    updated: "Feb 21, 2026",
    changeSummary: "Tanker drawdown, dispersal to Jordan/Saudi"
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
    updated: "Feb 2026",
    changeSummary: "Largest US overseas base, USFK HQ"
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
    updated: "Feb 2026",
    changeSummary: "All AWACS stripped for Middle East surge"
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
    updated: "Feb 2026",
    changeSummary: "Only permanent US base in Africa"
  },
  {
    id: "nsa_bahrain",
    name: "NSA Bahrain / 5th Fleet HQ",
    type: "base",
    class: "Naval Support Activity",
    lat: 26.22, lng: 50.60,
    prevLat: null, prevLng: null,
    prevLabel: null,
    location: "Bahrain — ~9,000 DoD personnel (evacuations reported)",
    mission: "HQ US Naval Forces Central Command (NAVCENT). 5th Fleet. Secures Persian Gulf/Red Sea shipping. Feb 20-21: NYT reports evacuations at Bahrain bases housing 5th Fleet (Pentagon denies via Fox News — contradictory reports). Vulnerability concerns amid Iran tensions.",
    strikeGroup: "NAVCENT / 5th Fleet",
    confidence: "confirmed",
    sources: [
      {name: "ZeroHedge (NYT/Fox contradictions)", url: "https://www.zerohedge.com/markets/us-evacuates-troops-exposed-qatar-bahrain-bases-weekend-strike-coming"},
      {name: "Al Jazeera", url: "https://www.aljazeera.com/news/2025/6/12/mapping-us-troops-and-military-bases-in-the-middle-east"}
    ],
    updated: "Feb 21, 2026",
    changeSummary: "Contradictory evacuation reports, 5th Fleet HQ"
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
    updated: "Feb 2026",
    changeSummary: "4 Aegis BMD destroyers homeported"
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
    updated: "Feb 2026",
    changeSummary: "Permanent THAAD battery, 48 interceptors"
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
    updated: "Feb 2026",
    changeSummary: "Permanent since 2016, expansion planned"
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
    mission: "12 THAAD and Patriot air defense systems deploying to Middle East. Protecting Al Udeid, al-Dhafra, Muwaffaq Salti, Prince Sultan AB, and key bases from Iranian ballistic missiles. Limited global inventory (~8 THAAD batteries total, multiple Patriot batteries surging).",
    strikeGroup: "CENTCOM ADA",
    confidence: "unconfirmed",
    sources: [
      {name: "Army Recognition", url: "https://armyrecognition.com/news/army-news/2026/u-s-deploys-more-thaad-air-defense-missiles-to-middle-east-amid-possible-military-action-against-iran"},
      {name: "CNN", url: "https://www.cnn.com/2026/02/20/politics/military-power-buildup-us-iran-intl-vis"}
    ],
    updated: "Feb 22, 2026",
    changeSummary: "12 THAAD and Patriot systems deploying"
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
    updated: "Feb 2026",
    changeSummary: "SM-3 interceptors operational since 2016"
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
    updated: "Dec 2025",
    changeSummary: "NATO EPAA network, operational"
  },
  {
    id: "muwaffaq_base",
    name: "Muwaffaq Salti Air Base",
    type: "base",
    class: "Major Forward Air Hub",
    lat: 31.83, lng: 36.76,
    prevLat: null, prevLng: null,
    prevLabel: null,
    location: "Azraq, Jordan — 70+ combat aircraft, MAJOR SURGE hub",
    mission: "Feb 21 MAJOR SURGE: 70+ combat aircraft confirmed. Includes ~30 F-35As, 18 F-15Es, 12+ F-16s, 12 A-10C Thunderbolt IIs (newly arrived from Moody AFB), 6 EA-18Gs, 2+ MQ-9s. Every visible parking spot filled per satellite. Expanded air defense perimeter. Patriot batteries + possible THAAD. Primary forward strike hub for any Iran operation.",
    strikeGroup: "CENTCOM Strike Hub",
    confidence: "confirmed",
    sources: [
      {name: "CNN Satellite Feb 20", url: "https://www.cnn.com/2026/02/20/politics/military-power-buildup-us-iran-intl-vis"},
      {name: "The War Zone", url: "https://www.twz.com/news-features/final-pieces-moving-into-place-for-potential-attack-on-iran"}
    ],
    updated: "Feb 22, 2026",
    changeSummary: "70+ combat aircraft, primary forward strike hub"
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
    mission: "Airfield with B-2/B-52 capable runways. Fuel depots. Maritime pre-positioning. Trump named as Iran strike staging base (Feb 18). Used for B-2 missions in Midnight Hammer. Feb 21: UK PM Starmer REFUSED US requests to use Diego Garcia for B-2/B-52 bomber strikes against Iran, citing international law. Trump criticized UK's Chagos sovereignty transfer as 'big mistake'. UK-Mauritius sovereignty dispute ongoing. Feb 26: The Times/CFR confirm UK expanded ban to RAF bases in England too -- comprehensive UK refusal to support preemptive strikes.",
    strikeGroup: "USINDOPACOM / CENTCOM",
    confidence: "confirmed",
    sources: [
      {name: "Chatham House", url: "https://www.chathamhouse.org/2026/02/us-military-base-diego-garcia-what-its-strategic-importance"}
    ],
    updated: "Feb 22, 2026",
    changeSummary: "UK refused access for bomber strikes"
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
    updated: "Feb 2026",
    changeSummary: "9 EDCA sites, Taiwan contingency posture"
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
    updated: "2025",
    changeSummary: "2,500 Marines with HIMARS, max strength"
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
    updated: "Jan 2026",
    changeSummary: "$70M runway expansion, Somalia counterterror"
  },

  // === NEW ASSETS (Feb 22, 2026) ===
  {
    id: "e4b_nightwatch",
    name: "E-4B Nightwatch ('Doomsday Plane')",
    type: "surveillance",
    class: "E-4B NAOC",
    lat: 38.89, lng: -77.03,
    prevLat: null, prevLng: null,
    prevLabel: null,
    location: "Joint Base Andrews, MD — spotted before Trump SOTU address",
    mission: "National Airborne Operations Center. Feb 21: Flew to D.C. using rare callsign 'ORDER01' (standard is 'ORDER6') via unusual coastal route. Feb 24: E-4B spotted descending toward Joint Base Andrews hours before Trump's State of the Union address. Aircraft arrived from Barksdale AFB per OSINT trackers. Standard precaution during major events where senior government leaders gather, but timing amid Iran tensions drew attention. E-4B is the president's airborne command post for nuclear war/national emergencies. Only 4 aircraft in fleet.",
    strikeGroup: "USSTRATCOM / NCA",
    confidence: "confirmed",
    sources: [
      {name: "OSINT tracking Feb 21", url: "https://x.com/sentdefender"},
      {name: "Mario Nawfal (E-4B Andrews)", url: "https://x.com/MarioNawfal/status/2026446427275116983"},
      {name: "Zambian Observer Feb 25", url: "https://zambianobserver.com/doomsday-plane-spotted-at-andrews-afb-hours-before-trumps-address-to-congress-amid-heightened-global-tensions/"}
    ],
    updated: "Feb 25, 2026",
    changeSummary: "At Andrews AFB before Trump SOTU address"
  },
  {
    id: "airlift_surge",
    name: "C-17/C-5M Airlift Surge (38+ heavy transports)",
    type: "tanker",
    class: "C-17A / C-5M",
    lat: 49.0, lng: 12.0,
    prevLat: 31.0, prevLng: -84.0,
    prevLabel: "Fort Hood TX / East Coast CONUS (Feb 20-21)",
    movementDate: "2026-02-21",
    location: "Europe-to-Middle East corridor — 31 C-17s + 7 C-5Ms tracked",
    mission: "Unusually high tempo airlift: 31 C-17 Globemaster IIIs and 7 C-5M Super Galaxies tracked between Europe and Middle East in 24 hours. 10+ additional C-17s departed East Coast evening of Feb 21, most from Fort Hood. Feb 25: Washington Post confirms over 150 military aircraft moved to Europe/ME bases — largest in 20 years since 2003 Iraq War. Escenario Mundial reports 160+ military flights to Europe and ME in February alone. Supporting rapid forward deployment of personnel, munitions, and air defense systems.",
    strikeGroup: "AMC / TRANSCOM",
    confidence: "confirmed",
    sources: [
      {name: "BBC Feb 21", url: "https://www.bbc.com/news/live/c0rj5dwjx2pt"},
      {name: "Sentinel Defense Feb 21", url: "https://x.com/sentdefender/status/2025374290451833157"},
      {name: "Chosun Ilbo/WaPo Feb 25", url: "https://www.chosun.com/english/world-en/2026/02/25/XZTKGPUA5RDH7LST3WJGDX5OTI/"}
    ],
    updated: "Feb 25, 2026",
    changeSummary: "WaPo: 150+ aircraft moved, largest since 2003"
  },
  {
    id: "a10_jordan",
    name: "A-10C Thunderbolt II (Muwaffaq Salti)",
    type: "fighter",
    class: "A-10C Thunderbolt II",
    lat: 31.86, lng: 36.84,
    prevLat: null, prevLng: null,
    prevLabel: null,
    location: "Muwaffaq Salti AB, Jordan",
    mission: "A-10C Thunderbolts visible in satellite imagery at Muwaffaq Salti. Provide close air support and base defense options. Part of 60+ aircraft buildup at base. 12 A-10C ground-attack aircraft from 23rd Wing, Moody AFB deployed to Jordan. 30mm GAU-8 Avenger rotary cannon. Close air support and battlefield interdiction role. Adds CAS capability to the predominantly air superiority/SEAD package at Muwaffaq Salti.",
    strikeGroup: "23rd Wing",
    confidence: "confirmed",
    sources: [
      {name: "Army Recognition Feb 21", url: "https://www.armyrecognition.com/news/aerospace-news/2026/u-s-strengthens-air-combat-forces-at-jordans-muwaffaq-salti-base-near-israel-as-iran-tensions-escalate"},
      {name: "The War Zone Feb 21", url: "https://www.twz.com/news-features/supercarrier-uss-gerald-r-ford-has-crossed-into-the-mediterranean"}
    ],
    updated: "Feb 24, 2026",
    changeSummary: "A-10 Warthogs visible at Jordan base"
  },
  {
    id: "lhd3_kearsarge",
    name: "USS Kearsarge (LHD-3)",
    type: "amphibious",
    class: "Wasp-class LHD (F-35B capable)",
    lat: 36.0, lng: -72.0,
    prevLat: null, prevLng: null,
    prevLabel: null,
    location: "Atlantic — newly F-35B qualified",
    mission: "Feb 10: Completed first-ever F-35B flight operations with VMFA-542. Atlantic amphibious forces now fifth-gen capable. Potential rapid deployment asset for Middle East if needed. Could serve as light carrier with F-35B stealth fighters.",
    strikeGroup: "VMFA-542 / 2nd Fleet",
    confidence: "confirmed",
    sources: [
      {name: "Military Leak Feb 21", url: "https://militaryleak.com/2026/02/21/amphibious-assault-ship-uss-kearsarge-lhd-3-conducts-f-35b-flight-operations-for-the-first-time/"}
    ],
    updated: "Feb 22, 2026",
    changeSummary: "Newly F-35B qualified, fifth-gen capable"
  },
  {
    id: "thaad_jordan",
    name: "THAAD Battery (Muwaffaq Salti, Jordan)",
    type: "missile_defense",
    class: "THAAD",
    lat: 31.82, lng: 36.76,
    prevLat: null, prevLng: null,
    prevLabel: null,
    location: "Muwaffaq Salti AB, Jordan",
    mission: "THAAD battery emplaced at Muwaffaq Salti per satellite imagery analysis. Combined with Patriot systems for layered defense of 60+ combat aircraft at base. Covers medium/intermediate-range ballistic missile threats from Iran.",
    strikeGroup: "CENTCOM AMD",
    confidence: "confirmed",
    sources: [
      {name: "Army Recognition Feb 21", url: "https://www.armyrecognition.com/news/aerospace-news/2026/u-s-strengthens-air-combat-forces-at-jordans-muwaffaq-salti-base-near-israel-as-iran-tensions-escalate"},
      {name: "Defence Security Asia", url: "https://defencesecurityasia.com/en/iran-an-tpy2-radar-threat-gulf-trump-missile-defense-thaad-patriot/"}
    ],
    updated: "Feb 24, 2026",
    changeSummary: "THAAD battery emplaced to protect Jordan airbase"
  },
  {
    id: "c17_airlift",
    name: "C-17 Globemaster III Airlift Surge (8+ aircraft)",
    type: "tanker",
    class: "C-17 Globemaster III",
    lat: 38.76, lng: -27.09,
    prevLat: 35.05, prevLng: -80.97,
    prevLabel: "US East Coast / Fort Hood, TX (Feb 23-24)",
    movementDate: "2026-02-24",
    location: "Transatlantic — 8+ C-17s crossing Atlantic eastbound",
    mission: "Feb 24: At least 8 C-17 heavy transport aircraft crossing Atlantic simultaneously. Carrying weapons, air defense systems, and logistics support. Over 200 heavy transport flights have delivered equipment to ME hubs since mid-January. 150+ cargo flights with weapons systems and ammunition per Axios.",
    strikeGroup: "AMC",
    confidence: "confirmed",
    sources: [
      {name: "JFeed Feb 24", url: "https://www.jfeed.com/news-world/us-military-buildup-middle-east-2"}
    ],
    updated: "Feb 24, 2026",
    changeSummary: "8+ C-17s crossing Atlantic with weapons/equipment"
  },

  // === NEW ASSETS (Feb 25, 2026) ===
  {
    id: "f16_diego",
    name: "F-16CM Fighting Falcons (35th FW, Diego Garcia)",
    type: "fighter",
    class: "F-16CM",
    lat: -7.31, lng: 72.43,
    prevLat: 40.87, prevLng: 141.38,
    prevLabel: "Misawa AB, Japan (Feb 2026)",
    movementDate: "2026-02-23",
    location: "Diego Garcia — force protection",
    mission: "6x F-16CMs from 35th Fighter Wing (Misawa, Japan) deployed to Diego Garcia for base defense. MizarVision satellite imagery (Feb 25) reveals full air composition: 6x F-16, 3x KC-135 Stratotanker, 2x P-8A Poseidon (ASW/maritime patrol), 2x C-130J Super Hercules, 3x C-17A Globemaster III, 1x C-5M Super Galaxy. Arleigh Burke DDG moored at wharf providing Aegis air/missile defense. Atlas Air 747-4B5F cargo charter from Philippines also arrived. UK blocking use for Iran strikes but force-protection and stockpile buildup critical -- Diego Garcia only major US base outside Iranian ballistic missile range.",
    strikeGroup: "35th FW / NAVSUPPFAC DG",
    confidence: "confirmed",
    sources: [
      {name: "The War Zone Feb 25", url: "https://www.twz.com/news-features/f-16s-arrive-to-protect-diego-garcia-f-22s-forward-deploy-to-israel"},
      {name: "Army Recognition Feb 26 (satellite detail)", url: "https://www.armyrecognition.com/news/aerospace-news/2026/u-s-f-16-deployment-to-diego-garcia-highlights-indian-ocean-base-security-amid-iran-tensions"}
    ],
    updated: "Feb 26, 2026",
    changeSummary: "Satellite reveals full DG air composition"
  },
  {
    id: "fifth_fleet_dispersal",
    name: "5th Fleet Vessels (Bahrain dispersal)",
    type: "special_naval",
    class: "Multiple surface combatants",
    lat: 25.5, lng: 53.0,
    prevLat: 26.23, prevLng: 50.63,
    prevLabel: "NSA Bahrain (prior to Feb 25)",
    movementDate: "2026-02-25",
    location: "Persian Gulf / Arabian Sea — dispersed at sea",
    mission: "Feb 25: AP/Planet Labs satellite imagery shows all vessels typically docked at NSA Bahrain (5th Fleet HQ) are now at sea. Same dispersal pattern observed before Iran's attack on Qatar in June 2025. Protective measure against potential Iranian missile strikes on port facilities.",
    strikeGroup: "NAVCENT / 5th Fleet",
    confidence: "confirmed",
    sources: [
      {name: "AP/Military.com Feb 25", url: "https://www.military.com/daily-news/2026/02/25/iran-pushes-back-against-trump-ahead-of-geneva-talks-face-of-major-us-military-deployment.html"}
    ],
    updated: "Feb 25, 2026",
    changeSummary: "All 5th Fleet ships dispersed from Bahrain port"
  },
  // === SYRIA WITHDRAWAL ===
  {
    id: "syria_withdrawal",
    name: "US Forces Withdrawal from Syria (100+ trucks)",
    type: "base",
    class: "Multiple ground units / logistics",
    lat: 36.85, lng: 41.15,
    prevLat: 33.38, prevLng: 38.62,
    prevLabel: "Al-Tanf Garrison, Syria (withdrawn Feb 11)",
    movementDate: "2026-02-23",
    location: "Qasrak Base, Hasakah Province, Syria -- withdrawing to Iraqi Kurdistan",
    mission: "Feb 23-25: US forces began withdrawing from last major base at Qasrak (Northern Landing Zone). AFP footage shows 100+ truck convoy carrying armored vehicles and prefab structures heading to Iraqi Kurdistan. Full withdrawal expected within 1 month. Previously withdrew from al-Tanf (Feb 11) and al-Shaddadi (Feb 15). ~1,000 US troops still in Syria. Syrian govt forces backfilling all positions. Coalition against ISIS formally ending presence after ~12 years.",
    strikeGroup: "CJTF-OIR",
    confidence: "confirmed",
    sources: [
      {name: "Reuters Feb 23", url: "https://www.reuters.com/world/middle-east/us-military-begins-withdrawing-main-base-northeast-syria-syrian-sources-say-2026-02-23/"},
      {name: "AFP/M5 Defence", url: "https://defence.m5dergi.com/one-cikan/us-forces-to-complete-withdrawal-from-syria-within-a-month/"},
      {name: "Critical Threats Feb 24", url: "https://www.criticalthreats.org/analysis/iran-update-february-24-2026"}
    ],
    updated: "Feb 25, 2026",
    changeSummary: "100+ truck convoy leaving Qasrak for Iraq"
  },
  // === EXERCISES & MULTINATIONAL OPS ===
  {
    id: "cobra_gold_26",
    name: "Exercise Cobra Gold 2026 / TF Ashland",
    type: "amphibious",
    class: "USS Ashland (LSD-48) + 15th MEU elements",
    lat: 12.7, lng: 100.9,
    prevLat: null, prevLng: null,
    prevLabel: null,
    movementDate: null,
    location: "Chonburi / Rayong Province, Thailand",
    mission: "Feb 24-ongoing: 45th Cobra Gold -- largest joint exercise in mainland Asia. 8,000+ personnel from 30 countries (US, Thailand, Japan, S. Korea, Singapore, Indonesia, Malaysia). Task Force Ashland (~600 Marines/Sailors from 15th MEU, 3rd AABn, CLR-17) conducting amphibious assault, combined arms live-fire, jungle warfare, CBRN exchange, NEO exercise. USS Ashland arrived Sattahip. MDSU-1 and EOD/NMCB from TF-73/75 also participating.",
    strikeGroup: "INDOPACOM / 7th Fleet / I MEF",
    confidence: "confirmed",
    sources: [
      {name: "INDOPACOM Feb 26", url: "https://www.pacom.mil/Media/NEWS/News-Article-View/Article/4415090/task-force-ashland-uss-ashland-arrive-in-thailand-for-exercise-cobra-gold-2026/"},
      {name: "DWS News Feb 26", url: "https://www.youtube.com/watch?v=YKv37UeoQEU"}
    ],
    updated: "Feb 26, 2026",
    changeSummary: "8,000 troops from 30 nations in Thai exercise"
  },
  {
    id: "justified_accord_26",
    name: "Exercise Justified Accord 2026",
    type: "base",
    class: "SETAF-AF / MA & NE Nat'l Guard / 173rd Airborne",
    lat: -1.3, lng: 36.8,
    prevLat: null, prevLng: null,
    prevLabel: null,
    movementDate: null,
    location: "Nairobi & Isiolo, Kenya; Djibouti; Tanzania",
    mission: "Feb 23 - Mar 13: AFRICOM's largest annual East Africa exercise. 1,500+ personnel from US, Kenya, Tanzania, Djibouti, UK & others. Led by SETAF-AF. MA Nat'l Guard partners with Kenya on kinetic ops/urban combat; NE Nat'l Guard with Tanzania on medical/jungle warfare. 173rd Airborne providing conventional forces. Live-fire, CPX integrating SOF + conventional, air-ground integration, defensive cyber ops, UAS/C-UAS tech expo with US Commerce Dept.",
    strikeGroup: "AFRICOM / SETAF-AF",
    confidence: "confirmed",
    sources: [
      {name: "National Guard Feb 25", url: "https://www.nationalguard.mil/News/Article-View/Article/4414635/exercise-justified-accord-2026-begins-in-kenya-tanzania/"},
      {name: "Streamline Kenya Feb 26", url: "https://streamlinefeed.co.ke/news/justified-accord-2026-begins-in-kenya-tanzania-djibouti"}
    ],
    updated: "Feb 26, 2026",
    changeSummary: "1,500 troops across Djibouti, Kenya, Tanzania"
  },

  // === NEW ASSETS (Feb 26, 2026 — Run #95) ===
  {
    id: "mq4c_triton_gulfoman",
    name: "MQ-4C Triton (HALE ISR — Gulf of Oman)",
    type: "surveillance",
    class: "MQ-4C Triton",
    lat: 24.5, lng: 59.5,
    prevLat: 24.43, prevLng: 54.65,
    prevLabel: "Al Dhafra AB, UAE (Feb 26)",
    movementDate: "2026-02-26",
    location: "Gulf of Oman — extended high-altitude surveillance orbit",
    mission: "Feb 26: FlightRadar24/OSINT tracked MQ-4C Triton departing UAE for extended HALE ISR orbit over Gulf of Oman near Strait of Hormuz approaches. Racetrack pattern at 50,000+ ft for 24+ hr endurance. Sensors: AN/ZPY-3 MFAS (X-band AESA radar), EO/IR, SIGINT. 2x P-8A Poseidons concurrently airborne over wider Gulf — creating layered maritime domain awareness (wide-area cueing to tactical prosecution). Triton provides persistent pattern-of-life baseline: can detect IRGC Navy fast attack craft, naval drones, missile dispersals, air defense posture changes. Not armed — ISR only. Part of heightened US surveillance posture during Geneva R3 talks.",
    strikeGroup: "VP-19 / CTF 57 / 5th Fleet",
    confidence: "confirmed",
    sources: [
      {name: "Army Recognition Feb 26", url: "https://www.armyrecognition.com/news/aerospace-news/2026/u-s-mq-4c-triton-surveillance-over-gulf-of-oman-reflects-strategic-maritime-signaling-toward-iran"}
    ],
    updated: "Feb 26, 2026",
    changeSummary: "Triton ISR + 2x P-8A over Gulf of Oman"
  },
  {
    id: "boxer_arg",
    name: "USS Boxer (LHD-4) ARG / 11th MEU",
    type: "amphibious",
    class: "Wasp-class LHD",
    lat: 15.0, lng: 140.0,
    prevLat: 32.68, prevLng: -117.15,
    prevLabel: "San Diego, CA (Feb 2026)",
    movementDate: "2026-02-05",
    location: "Western Pacific — integrated at-sea training",
    mission: "USS Boxer (LHD-4) with 11th MEU conducting integrated training in Indo-Pacific. VMM-163 MV-22B Ospreys sustaining flight ops for rapid vertical maneuver and distributed force insertion. Air component: MV-22B tiltrotors, CH-53E heavy-lift, AH-1Z attack, UH-1Y utility, F-35B STOVL fighters. Validated sortie generation, amphibious assault sequencing, and ship-to-shore operations (Feb 5-25). Boxer ARG-MEU provides scalable crisis response force with 450nm+ combat radius from Ospreys. Highlighted by US Pacific Fleet Feb 25.",
    strikeGroup: "Boxer ARG / 11th MEU",
    confidence: "confirmed",
    sources: [
      {name: "Army Recognition Feb 26", url: "https://www.armyrecognition.com/news/navy-news/2026/u-s-marines-deploy-mv-22b-osprey-from-uss-boxer-to-boost-indo-pacific-assault-reach"},
      {name: "US Pacific Fleet Feb 25", url: "https://www.facebook.com/USPacificFleet/posts/1341788107982453/"}
    ],
    updated: "Feb 26, 2026",
    changeSummary: "Boxer ARG/11th MEU training in W. Pacific"
  },
  {
    id: "tf_scorpion",
    name: "Task Force Scorpion — LUCAS Kamikaze Drones",
    type: "drone",
    class: "LUCAS (Shahed-136 clone)",
    lat: 24.05, lng: 52.10,
    prevLat: null, prevLng: null,
    prevLabel: null,
    movementDate: null,
    location: "CENTCOM AOR — exact base undisclosed",
    mission: "Pentagon's FIRST operational kamikaze drone unit. Task Force Scorpion armed with Low-Cost Uncrewed Combat Attack System (LUCAS) — one-way attack drones reverse-engineered from Iranian Shahed-136 design. Bloomberg (Feb 26): unit now operational and ready if Trump orders strikes on Iran. CENTCOM spokesman Capt. Tim Hawkins confirmed: 'We established the squadron last year to rapidly equip our warfighters with new combat drone capabilities that continue to evolve.' Offers capability to 'flip the script on Iran' using their own drone design against them. Significant force multiplier for attrition strikes on air defenses, radar sites, and dispersed targets.",
    strikeGroup: "CENTCOM / Task Force Scorpion Strike",
    confidence: "confirmed",
    sources: [
      {name: "The War Zone Feb 26", url: "https://www.twz.com/news-features/uss-gerald-r-fords-imminent-arrival-off-israel-comes-as-negotiations-grind-on"},
      {name: "Bloomberg/Al Arabiya", url: "https://www.facebook.com/alarabiya.english/posts/the-pentagons-first-kamikaze-drone-unit-is-ready-to-participate-if-president-don/1353339763497707/"}
    ],
    updated: "Feb 26, 2026",
    changeSummary: "LUCAS kamikaze drone unit operational for Iran"
  }
];

// === INTEL UPDATE TICKER DATA ===
// Most recent entries first
const updates = [
  {id: 'u_feb26_f15e_wave2', text: '12 additional F-15E Strike Eagles from 4th Fighter Wing (Seymour Johnson AFB, NC) crossed Atlantic in two 6-ship formations (TABOR 11-16, TABOR 21-26) escorted by 2x KC-46 + 4x KC-135. Staging at RAF Lakenheath; OSINT indicates final destination likely Ovda Air Base, Israel. Plus 12 F-35As from Hill AFB (Utah) also transiting to Europe. Total new wave: 24 tactical jets (JFeed/The War Zone)', date: 'Feb 26, 2026', assetId: 'f15e_jordan', changeSummary: '12 F-15Es + 12 F-35As crossing Atlantic'},
  {id: 'u_feb26_tf_scorpion', text: 'Task Force Scorpion -- Pentagon\'s FIRST kamikaze drone unit -- now operational in Middle East and ready if Trump orders Iran strikes. Armed with LUCAS one-way attack drones reverse-engineered from Iranian Shahed-136 design. CENTCOM confirmed unit established to "rapidly equip warfighters with new combat drone capabilities." Offers way to "flip the script on Iran" (Bloomberg/The War Zone)', date: 'Feb 26, 2026', assetId: 'tf_scorpion', changeSummary: 'US kamikaze drone unit operational in ME'},
  {id: 'u_feb26_patriot_ovda', text: 'MizarVision satellite imagery confirms Patriot air defense battery components deployed at Ovda Air Base alongside 11 F-22 Raptors in Israel -- first visual confirmation of integrated air defense at US combat deployment site. Layered defense for F-22s at Israel\'s southernmost base (EGYOSINT/MizarVision/Times of Israel)', date: 'Feb 26, 2026', assetId: 'f22_staging', changeSummary: 'Patriot battery confirmed at Ovda with F-22s'},
  {id: 'u_feb26_point_blank', text: 'Exercise Point Blank: USAF F-15E Strike Eagles (492nd FS) and F-35A Lightning IIs (493rd FS) from RAF Lakenheath deployed to RAF Lossiemouth, Scotland for multinational combat training. Hot-pit refueling cross-certification between 4th/5th gen aircraft, rapid sortie turnaround drills with RAF. Running concurrently with ME buildup (Zona Militar/SSBCrack)', date: 'Feb 26, 2026', assetId: null, changeSummary: 'F-15E + F-35A exercise at RAF Lossiemouth'},
  {id: 'u_feb26_talks_positive', text: 'Post-Geneva reversal: US official tells Axios talks were "positive" -- contradicting earlier "disappointed" reports. Araghchi called it "the best round so far," entered "elements of an agreement" on nuclear AND sanctions. Technical talks resume at IAEA Vienna MONDAY. Both sides consulting capitals. WSJ still says sides "far apart on key issues" (Times of Israel/Axios/Xinhua/The New Region)', date: 'Feb 26, 2026', assetId: null, changeSummary: 'US now calls Geneva talks "positive"; Vienna Mon'},
  {id: 'u_feb26_yahsat_blackout', text: 'All Persian-language news and political networks broadcast by UAE-based Yahsat Satellite Communications went OFFLINE across Iran and Middle East -- reason unclear. Yahsat is a UAE government-backed satellite operator. Outage affects Iranian state media reception across ME. Potential information warfare, jamming, or pre-strike communications disruption (OSINTdefender)', date: 'Feb 26, 2026', assetId: null, changeSummary: 'Persian-language satellite broadcasts go dark'},
  {id: 'u_feb26_iran_state_tv_hardline', text: 'Iranian state television reported post-Geneva hardline stance: Tehran DETERMINED to continue enriching uranium, REJECTED proposals to transfer uranium abroad, and demands lifting of all international sanctions. Signals Iran not prepared to meet Trump\'s maximalist demands despite "significant progress" rhetoric (AP/PBS/multiple)', date: 'Feb 26, 2026', assetId: null, changeSummary: 'Iran state TV: will keep enriching, rejects transfers'},
  {id: 'u_feb26_landsman_dem_strikes', text: 'Democrat Rep. Greg Landsman (OH) breaks with party: says US and allies "may very well need to take defensive action, targeting military assets in Iran." Calls for strikes on ballistic missiles, rocket infrastructure, weapons depots, and nuclear assets. Joins Gottheimer and Moskowitz as Democrats opposing war powers resolution. Landsman: "targeted strikes could prevent war" (Jewish Insider)', date: 'Feb 26, 2026', assetId: null, changeSummary: 'Dem Rep. Landsman endorses Iran strikes'},
  {id: 'u_feb26_senate_war_powers', text: 'Sen. Tim Kaine (D-VA) says SENATE war powers resolution blocking unauthorized Iran military action likely to come up for vote NEXT WEEK alongside House version. Kaine: Trump "made no real case" for war during SOTU. Only Sen. Fetterman opposed similar resolution after June strikes. Ford carrier deployment length flagged as "beyond normal limits" (Jewish Insider)', date: 'Feb 26, 2026', assetId: null, changeSummary: 'Senate war powers vote also next week'},
  {id: 'u_feb26_geneva_r3_concluded', text: 'Geneva Round 3 CONCLUDED -- Omani FM Albusaidi announces "significant progress" made. Both sides will now consult with capitals. NEXT ROUND: technical-level talks in Vienna next week (not decision-maker level). Albusaidi thanked negotiators, IAEA, and Swiss hosts. De-escalation signal but no deal yet (OSINTdefender/News.Az/i24News)', date: 'Feb 26, 2026', assetId: null, changeSummary: 'Geneva R3 ends; significant progress; Vienna next'},
  {id: 'u_feb26_witkoff_disappointed', text: 'Axios: Witkoff and Kushner reportedly DISAPPOINTED by Iran\'s draft proposal presented to Omani mediators. Barring significant positional shift from Iran on ballistic missiles, this round unlikely to yield a deal. Evening session continued but gaps remain on key issues (Axios via OSINTdefender)', date: 'Feb 26, 2026', assetId: null, changeSummary: 'US disappointed by Iran draft proposal'},
  {id: 'u_feb26_kc46_to_israel', text: '6 additional KC-46A Pegasus tankers en route to Israel -- 5 departing Portsmouth International Airport (NH) and 1 from Seymour Johnson AFB (NC), all destined for Ben Gurion Airport. Adds to tankers and cargo planes already observed at Ben Gurion this week alongside 11 F-22s at Ovda (i24News/Military Air Tracking Alliance)', date: 'Feb 26, 2026', assetId: 'tankers_surge', changeSummary: '6 KC-46 tankers heading to Israel'},
  {id: 'u_feb26_b2_antiship_drill', text: 'B-2 Spirit bomber and Navy fighters from CVW rehearsed anti-ship strike missions off California coast -- USNI News reports joint service integration drill. B-2s practicing maritime strike role relevant to Strait of Hormuz contingency and IRGC Navy targeting (USNI News)', date: 'Feb 26, 2026', assetId: 'b2_whiteman', changeSummary: 'B-2 and Navy fighters rehearse anti-ship strikes'},
  {id: 'u_feb26_uk_england_ban', text: 'UK expanded base-use ban to airbases in ENGLAND as well as Diego Garcia -- The Times reports UK blocked US use of RAF Lakenheath and other UK bases for preemptive strikes on Iran, citing international law. Significant for F-22 staging: 13 Raptors currently at Lakenheath may face basing constraints. B-1/B-52 operations from Diego Garcia also blocked. Forces US to rely on Israeli, carrier-based, and CONUS-launched aviation (CFR/The Times/Blue News)', date: 'Feb 26, 2026', assetId: 'f22_staging', changeSummary: 'UK bans use of England bases for Iran strikes'},
  {id: 'u_feb26_triton_gulfoman', text: 'MQ-4C Triton HALE drone conducting extended surveillance orbit over Gulf of Oman near Strait of Hormuz approaches -- departed UAE, flying racetrack at 50,000+ ft with AN/ZPY-3 AESA radar, EO/IR, SIGINT. 2x P-8A Poseidons concurrently airborne creating layered maritime ISR package. Mapping IRGC Navy patterns, detecting missile dispersals (Army Recognition)', date: 'Feb 26, 2026', assetId: 'mq4c_triton_gulfoman', changeSummary: 'Triton + P-8As create layered Gulf ISR'},
  {id: 'u_feb26_australia_evac', text: 'Australia offering voluntary evacuation of diplomat families from Middle East -- DFAT ordering departures from posts in Israel, Lebanon, Jordan, Qatar, UAE. Australians in Israel/Lebanon urged to leave while commercial flights available. Follows similar US Embassy Beirut pullout. Multiple nations now pulling staff (ABC News Australia/Sky News)', date: 'Feb 26, 2026', assetId: null, changeSummary: 'Australia evacuating diplomat families from ME'},
  {id: 'u_feb26_boxer_arg', text: 'USS Boxer (LHD-4) with 11th MEU conducting sustained MV-22B Osprey flight ops in Western Pacific -- VMM-163 validating sortie generation, amphibious assault sequencing, and expeditionary readiness. Boxer ARG provides scalable crisis response with 450nm+ Osprey combat radius. Highlighted by US Pacific Fleet Feb 25 (Army Recognition/PACFLT)', date: 'Feb 26, 2026', assetId: 'boxer_arg', changeSummary: 'Boxer ARG/11th MEU active in W. Pacific'},
  {id: 'u_feb26_geneva_direct_talks', text: 'Axios: Geneva R3 included DIRECT exchanges between US (Witkoff/Kushner) and Iranian (Araghchi) delegations -- not just indirect via Omani mediation. Both formats used in same session. Iran submitted eagerly-awaited draft proposal. IAEA Director Grossi also participated. US demanded surrender of 10,000 kg enriched uranium stockpile (Axios)', date: 'Feb 26, 2026', assetId: null, changeSummary: 'Direct US-Iran talks confirmed at Geneva R3'},
  {id: 'u_feb26_war_powers_vote', text: 'House Dem leadership (Jeffries, Clark, Aguilar) + ranking members (Meeks, Himes, Smith) formally announce vote on Khanna-Massie Iran War Powers Resolution next week when Congress reconvenes. Would require congressional authorization before any Iran strike. 82 co-sponsors (81 Dem + 1 GOP). YouGov: only 27% support military force, 49% oppose (House Democrats)', date: 'Feb 26, 2026', assetId: null, changeSummary: 'House to vote on Iran war powers next week'},
  {id: 'u_feb26_bush_comptuex', text: 'USS George H.W. Bush (CVN-77) CSG actively conducting COMPTUEX (final pre-deployment certification) with escorts USS Ross (DDG-71) and USS Mason (DDG-87). Replenishment-at-sea with USNS John Lenthall. COMPTUEX is last step before deployment -- Bush could provide THIRD carrier for Iran theater alongside Ford and Lincoln (SURFLANT/US 2nd Fleet)', date: 'Feb 26, 2026', assetId: 'cvn77', changeSummary: 'Bush CSG nearing deployment-ready status'},
  {id: 'u_feb26_geneva_second_pause', text: 'Geneva R3 evening session paused AGAIN as both sides break to consult with capitals -- two officials confirm to NYT. Second recess of the day suggests proposals produced enough substance to require leadership-level decisions in Washington and Tehran (NYT live)', date: 'Feb 26, 2026', assetId: null, changeSummary: 'Geneva pauses again for capital consultations'},
  {id: 'u_feb26_wsj_us_demands', text: 'WSJ: US demands in Geneva are maximalist -- zero uranium enrichment on Iranian soil, dismantlement of Fordow/Natanz/Isfahan nuclear facilities, transfer of ALL enriched uranium to US custody, and any deal must be permanent (no sunset). May allow very low-level Tehran reactor for medical isotopes (i24News/WSJ)', date: 'Feb 26, 2026', assetId: null, changeSummary: 'WSJ reveals rigid US demands at Geneva'},
  {id: 'u_feb26_nyt_iran_proposal_detail', text: 'NYT: Detailed Iran proposal -- suspend enrichment 3-5 years (not 7), then join regional nuclear consortium. Maintain only 1.5% enrichment for medical research. Dilute 400kg HEU stockpile in phases under IAEA monitoring. Also offering to buy US aircraft, invite American firms into Iran energy/mining/lithium sectors (NYT)', date: 'Feb 26, 2026', assetId: null, changeSummary: 'NYT details Iran 3-5yr halt, 1.5% proposal'},
  {id: 'u_feb26_geneva_resume_baghaei', text: 'Geneva R3 talks resumed after recess at ~1700 GMT. Iran FM spokesperson Baghaei: "crucial and actionable proposals" introduced on both nuclear AND sanctions relief, "both teams engaged with utmost seriousness." Senior Iranian official told Reuters talks produced "new ideas" requiring Tehran consultation. Framework possible if US separates nuclear from non-nuclear issues (CNN/IRIB/Reuters)', date: 'Feb 26, 2026', assetId: null, changeSummary: 'Geneva resumes; Baghaei: actionable proposals'},
  {id: 'u_feb26_airlift_continues', text: 'Heavy airlift continues during Geneva recess: 13x C-17A Globemaster III, 1x C-5M Super Galaxy, 2x KC-46A Pegasus tracked in transit to Middle East. Military buildup unabated even as diplomats negotiate (OSINTdefender)', date: 'Feb 26, 2026', assetId: 'tanker_fleet', changeSummary: '16 heavy-lift aircraft in transit during talks'},
  {id: 'u_feb26_cobra_gold', text: 'Exercise Cobra Gold 2026 opens in Thailand -- 8,000+ troops from 30 nations. USS Ashland (LSD-48) arrived with TF Ashland (~600 Marines/Sailors from 15th MEU). Amphibious assault, live-fire, jungle warfare, NEO drills. 45th iteration of largest mainland Asia exercise (INDOPACOM)', date: 'Feb 26, 2026', assetId: 'cobra_gold_26', changeSummary: 'Cobra Gold 2026: 8K troops, 30 nations, Thailand'},
  {id: 'u_feb26_justified_accord', text: 'Exercise Justified Accord 2026 begins across Kenya, Tanzania & Djibouti -- AFRICOM\'s largest East Africa exercise. 1,500+ personnel incl. 173rd Airborne, MA & NE Nat\'l Guard. Live-fire, urban combat, jungle warfare, cyber ops, UAS tech expo. Runs through Mar 13 (National Guard)', date: 'Feb 26, 2026', assetId: 'justified_accord_26', changeSummary: 'AFRICOM exercise: 1,500 troops, 3 countries'},
  {id: 'u_feb26_geneva_3hr_recess', text: 'Geneva Round 3 first session lasted 3 hours before both sides retired for internal deliberations -- talks to resume "in a few hours." Substantive engagement suggests real negotiation underway, not symbolic session (IRNA via OSINTdefender)', date: 'Feb 26, 2026', assetId: null, changeSummary: 'Geneva R3: 3-hr session, recess, resuming'},
  {id: 'u_feb26_dg_satdetail', text: 'MizarVision satellite imagery (Feb 25) reveals full Diego Garcia air composition: 6x F-16, 3x KC-135, 2x P-8A Poseidon, 2x C-130J, 3x C-17A, 1x C-5M, plus Arleigh Burke DDG at wharf. Atlas Air 747 cargo charter from Philippines also arrived -- stockpile buildup for surge ops (Army Recognition)', date: 'Feb 26, 2026', assetId: 'diego_garcia_base', changeSummary: 'Satellite reveals full Diego Garcia buildup'},
  {id: 'u_feb26_ford_depart_crete', text: 'USS Gerald R. Ford departed Souda Bay Crete after 4-day resupply stop — heading to Haifa, Israel. Reuters/Israel Hayom report ETA Friday Feb 27. ItaMilRadar: Ford could provide air cover role to Israel. Al Bawaba: USS Mahan (DDG-72) confirmed escorting. First US carrier at Israeli port during active crisis (ItaMilRadar/Reuters)', date: 'Feb 26, 2026', assetId: 'cvn78', changeSummary: 'Ford en route Haifa, ETA Friday Feb 27'},
  {id: 'u_feb26_geneva_r3_started', text: 'Geneva Round 3 nuclear talks officially kicked off — Araghchi vs Witkoff/Kushner via Omani mediation. Omani FM: negotiators showed "unprecedented openness" to new creative ideas (AP/Reuters/Times of Oman)', date: 'Feb 26, 2026', assetId: null, changeSummary: 'Geneva Round 3 talks now underway'},
  {id: 'u_feb26_graham_screwthat', text: 'Sen. Lindsey Graham on Iran enrichment deal: "screw that" — opposes allowing even token enrichment for face-saving. Calls regime "religious Nazis," wants regime change. "I hope help is on the way" (Jewish Insider/X)', date: 'Feb 26, 2026', assetId: null, changeSummary: 'Graham slams any Iran enrichment concession'},
  {id: 'u_feb26_iran_bonanza', text: 'FT: Iran offering Trump financial "bonanza" — oil/gas/mining rights and critical minerals as incentive to reach deal, mirroring Venezuela approach. Specifically directed at Trump\'s deal-making affinity (Financial Times via Times of Israel)', date: 'Feb 26, 2026', assetId: null, changeSummary: 'Iran dangles oil/gas bonanza for Trump deal'},
  {id: 'u_feb26_khamenei_successors', text: 'NYT via CTP-ISW: Khamenei has named 4 potential successors for every military and government post he appoints — preparing for potential US/Israeli decapitation campaign. Delegated authority to trusted circle if he cannot be reached or is killed', date: 'Feb 26, 2026', assetId: null, changeSummary: 'Khamenei pre-designates 4 successors per post'},
  {id: 'u_feb26_iraqi_militia_threat', text: 'Iraqi Resistance Coordination Committee (Kataib Hezbollah, AAH, Nujaba et al.) warns of action to "end US occupation" in Iraq. CTP-ISW assesses militias may attack US forces in Kurdistan if US/Israel strikes Iran (Critical Threats/ISW Feb 25)', date: 'Feb 26, 2026', assetId: null, changeSummary: 'Iraqi militias threaten US forces in Kurdistan'},
  {id: 'u_feb26_kurdish_coalition', text: 'Anti-regime Kurdish groups form "Coalition of Political Forces in Iranian Kurdistan" — planning administration of Kurdish areas if regime collapses. Includes PDKI, PAK, PJAK. Reflects potential for Iran to fracture post-regime (CTP-ISW Feb 25)', date: 'Feb 26, 2026', assetId: null, changeSummary: 'Kurdish coalition plans post-regime governance'},
  {id: 'u_feb26_shamkhani_fatwa', text: 'Ali Shamkhani, Supreme Leader\'s rep on Defense Council: "immediate agreement attainable" if core issue is nuclear weapons ban -- aligns with Khamenei\'s fatwa; says Araghchi has sufficient authority to sign deal (WANA)', date: 'Feb 26, 2026', assetId: null, changeSummary: 'Khamenei envoy signals deal authority granted'},
  {id: 'u_feb26_guardian_5pct', text: 'Guardian: Witkoff and Kushner privately greenlighted enrichment below 5% (civilian JCPOA level) during earlier rounds -- flexible opener caught Iranian negotiators off-guard (Gulf News/The Guardian)', date: 'Feb 26, 2026', assetId: null, changeSummary: 'US secretly offered sub-5% enrichment deal'},
  {id: 'u_feb26_nyt_twoplans', text: 'NYT: Trump weighing two distinct military plans -- (1) comprehensive campaign targeting Khamenei & regime or (2) limited strikes on nuclear/missile sites. If limited fails, would escalate to full campaign (NYT)', date: 'Feb 26, 2026', assetId: null, changeSummary: 'Trump has two Iran strike plans ready'},
  {id: 'u_feb26_iran_round3_proposal', text: 'Iran formally submits comprehensive proposal during Geneva Round 3 via Omani FM -- claims to "address all US pretexts" on nuclear program; warns rejection confirms US not serious about diplomacy (WANA/JPost)', date: 'Feb 26, 2026', assetId: null, changeSummary: 'Iran delivers formal proposal in Round 3'},
  {id: 'u_feb26_witkoff_nosunset', text: 'Axios: Witkoff told AIPAC donors US demands any Iran deal last indefinitely -- no sunset provisions. Trump may accept "token" enrichment if Iran proves non-weaponizable. Geneva Round 3 seen as last chance for diplomacy before military action (Axios/Kurdistan24)', date: 'Feb 26, 2026', assetId: null, changeSummary: 'US demands permanent deal, no sunset clause'},
  {id: 'u_feb26_iran_proposal', text: 'Iran proposal revealed: reduce enrichment from 60% to 3.6% (JCPOA level), 7-year suspension -- US wants 10 years. Key dispute: Iran refuses to ship HEU stockpile abroad, offers dilution only; US insists removal (Ynet/Kan)', date: 'Feb 26, 2026', assetId: null, changeSummary: 'Iran offers 3.6% enrichment, 7-yr suspension'},
  {id: 'u_feb26_pentagon_7days', text: 'NYT: Two US military officials say Pentagon lacks resources for prolonged Iran bombing -- could sustain strikes for only 7-10 days before running low on key munitions', date: 'Feb 26, 2026', assetId: null, changeSummary: 'Pentagon can only sustain 7-10 days of strikes'},
  {id: 'u_feb26_pezeshkian_outlook', text: 'Iranian President Pezeshkian: "favourable outlook for negotiations" -- wants to "move beyond neither war nor peace situation" (Rudaw/TRT World)', date: 'Feb 26, 2026', assetId: null, changeSummary: 'Iran president sees favorable outlook for talks'},
  {id: 'u_feb26_klm_suspend', text: 'KLM suspends Amsterdam-Tel Aviv daily flights starting March 1 citing rising security tensions in Middle East (Ynet)', date: 'Feb 26, 2026', assetId: null, changeSummary: 'KLM halts Tel Aviv flights from March 1'},
  {id: 'u_feb26_irgc_dhafra', text: 'IRGC conducts missile drill targeting replica of US Al Dhafra Air Base (UAE) -- bunker-penetrating warheads tested against mock hardened shelters (Defence Security Asia/Oneindia)', date: 'Feb 26, 2026', assetId: null, changeSummary: 'IRGC rehearses strike on US base in UAE'},
  {id: 'u_feb26_dia_icbm60', text: 'DIA report: Iran could field 60 ICBMs capable of reaching US homeland by 2035 -- currently has no deployed ICBMs but developing launch vehicles (NBC News/Defence Industry Europe)', date: 'Feb 26, 2026', assetId: null, changeSummary: 'DIA: Iran could have 60 ICBMs by 2035'},
  {id: 'u_feb26_f22_13lakenheath', text: 'OSINTdefender: 13 F-22 Raptors now at RAF Lakenheath (12 new from Langley + 1 fuel-leak return from Israel) -- all expected to continue to Israel by Friday', date: 'Feb 26, 2026', assetId: 'f22_staging', changeSummary: '13 F-22s at Lakenheath, to Israel by Friday'},
  {id: 'u_feb26_politico_israel1st', text: 'Politico: Senior Trump advisers prefer Israel strikes Iran first before US launches large-scale air campaign -- "politics are better if Israelis go first and alone" (2 sources)', date: 'Feb 26, 2026', assetId: null, changeSummary: 'Advisers want Israel to strike Iran first'},
  {id: 'u_feb26_nato_turkey_iran', text: 'NATO air surveillance assets in Turkey shifted focus from Russia to Iran -- AWACS and reconnaissance flights reoriented (Bloomberg)', date: 'Feb 26, 2026', assetId: null, changeSummary: 'NATO Turkey surveillance pivots to Iran'},
  {id: 'u_feb26_leave_iran', text: 'Multiple countries urging citizens to leave Iran immediately -- travel advisories escalating amid strike fears (Al Jazeera)', date: 'Feb 26, 2026', assetId: null, changeSummary: 'Countries tell citizens to leave Iran now'},
  {id: 'u_feb26_iraq_deadline', text: 'US sets Friday deadline for Iraq to form government free of Iran-linked Maliki or face sanctions (Al-Hadath/JPost)', date: 'Feb 26, 2026', assetId: null, changeSummary: 'US ultimatum to Iraq: drop Maliki by Friday'},
  {id: 'u_feb26_rubio_icbm', text: 'SecState Rubio: Iran pursuing ICBMs capable of reaching US mainland -- refusal to discuss missiles a "big, big problem" ahead of Geneva talks (Reuters)', date: 'Feb 26, 2026', assetId: null, changeSummary: 'Rubio warns Iran developing ICBMs targeting US'},
  {id: 'u_feb26_wsj_dispersal', text: 'WSJ: US dispersing warplanes across Israeli bases to avoid concentrating air power at vulnerable Gulf airfields -- first-ever US combat aircraft deployment to Israel for wartime mission', date: 'Feb 26, 2026', assetId: 'f22_staging', changeSummary: 'US dispersing jets across Israeli bases (WSJ)'},
  {id: 'u_feb26_f22_wave3', text: 'Third wave of 6 F-22 Raptors airborne from Langley to RAF Lakenheath -- total F-22 deployment now confirmed at 24 aircraft (DefenceGeek)', date: 'Feb 26, 2026', assetId: 'f22_staging', changeSummary: '3rd F-22 wave airborne; 24 total confirmed'},
  {id: 'u_feb26_msb2026', text: 'Maritime Security Belt 2026: Iran-Russia joint naval exercises in Strait of Hormuz & Gulf of Oman — Alvand destroyer, warships, subs, helos (China reportedly withdrew)', date: 'Feb 26, 2026', assetId: null, changeSummary: 'Iran-Russia joint naval drills in Hormuz/Oman'},
  {id: 'u_feb26_vance_rebuild', text: 'VP Vance: US has evidence Iran trying to rebuild nuclear weapon — envoys Witkoff & Kushner heading to Geneva (Reuters)', date: 'Feb 26, 2026', assetId: null, changeSummary: 'Vance confirms evidence of Iran nuclear rebuild'},
  {id: 'u_feb26_trump_15days', text: 'Trump extends Iran deal deadline from 10 to 10-15 days — warns bad things will happen if no deal', date: 'Feb 26, 2026', assetId: null, changeSummary: 'Trump extends Iran deadline to 10-15 days'},
  {id: 'u_feb26_china_satimages', text: 'Chinese military releases satellite imagery of US bases in Middle East — possible ISR support signal to Iran (Atlantic Council/SCMP)', date: 'Feb 26, 2026', assetId: null, changeSummary: 'China releases satellite images of US bases'},
  {id: 'u_feb25_araghchi_draft', text: 'Iran FM Araghchi presented draft proposal to Omani FM in Geneva -- provisions for nuclear deal and sanctions relief (Al Jazeera/TASS)', date: 'Feb 25, 2026', assetId: null, changeSummary: 'Iran presents draft nuclear deal proposal'},
  {id: 'u_feb25_strike_weekend', text: 'CNN: US military prepared to strike Iran as early as this weekend -- NSC met in Situation Room, Trump yet to decide', date: 'Feb 25, 2026', assetId: null, changeSummary: 'CNN: Strike possible as early as this weekend'},
  {id: 'u_feb25_allies_refuse', text: 'Jordan, Saudi Arabia, UAE, Qatar, Bahrain, Kuwait, Turkey all refuse to allow bases for Iran strikes (Newsweek)', date: 'Feb 25, 2026', assetId: null, changeSummary: '7 allies refuse base access for Iran strikes'},
  {id: 'u_feb25_parchin_fortify', text: 'Satellite imagery shows Iran fortifying Parchin military complex -- new concrete shielding buried underground (AP/Fox)', date: 'Feb 25, 2026', assetId: null, changeSummary: 'Iran burying Parchin complex under concrete'},
  {id: 'u_feb25_caine_plans', text: 'CNN: Gen. Caine held private Pentagon meetings on Iran strike plans -- options range from limited strikes to regime change', date: 'Feb 25, 2026', assetId: null, changeSummary: 'JCS Chair develops full Iran strike options'},
  {id: 'u_feb25_grossi_geneva', text: 'IAEA Director General Grossi to attend third round of Geneva talks on Feb 26', date: 'Feb 25, 2026', assetId: null, changeSummary: 'IAEA chief joining Geneva nuclear talks'},
  {id: 'u_feb25_centcom_comp', text: 'CENTCOM air force confirmed: 84 F/A-18s, 36 F-15Es, 48 F-16s, 42 F-35s, 18 EA-18G Growlers, 12 A-10Cs, 6 AWACS, 5 BACNs', date: 'Feb 25, 2026', assetId: 'f22_staging', changeSummary: 'Full CENTCOM air composition breakdown confirmed'},
  {id: 'u_feb25_iran_cobra', text: 'Iranian Army AH-1J Super Cobra crashed into fruit market in Isfahan -- 4 killed (2 crew, 2 civilians)', date: 'Feb 25, 2026', assetId: null, changeSummary: 'Iran military helo crash shows fleet age'},
  {id: 'u_feb25_ford_11mo', text: 'USS Ford heading toward possible 11-month deployment -- would break US Navy record (WSJ)', date: 'Feb 25, 2026', assetId: 'cvn78', changeSummary: 'Ford may set 11-month deployment record'},
  {id: 'u_feb25_ironfist', text: 'Exercise Iron Fist 26: 2,400 Marines + 1,800 sailors in amphibious exercise with Japan at Okinawa', date: 'Feb 25, 2026', assetId: null, changeSummary: 'US-Japan amphibious exercise underway'},
  {id: 'u_feb25_osint_kinetic', text: 'OSINTdefender: kinetic action against Iran highly unlikely to be averted -- last talks were a nothing burger', date: 'Feb 25, 2026', assetId: null, changeSummary: 'OSINT: Iran strike highly likely'},
  {id: 'u_feb25_cia_farsi', text: 'CIA posts Farsi recruitment video on X urging Iranians to contact agency securely -- 3.4M views', date: 'Feb 25, 2026', assetId: null, changeSummary: 'CIA Farsi outreach to Iranian informants'},
  {id: 'u_feb25_oil_surge', text: 'Iran oil exports surge to 3M bpd from Kharg Island -- nearly tripled since January (Bloomberg/Kpler)', date: 'Feb 25, 2026', assetId: null, changeSummary: 'Iran tripled oil loadings ahead of potential strike'},
  {id: 'u_feb25_chatham', text: 'Chatham House analyst: war imminent, matter of days -- two sides too far apart', date: 'Feb 25, 2026', assetId: null, changeSummary: 'Top analyst says war imminent in days'},
  {id: 'u_feb25_ghalibaf', text: 'Iran Parliament speaker Ghalibaf: ready for diplomacy but attackers will taste strong punch', date: 'Feb 25, 2026', assetId: null, changeSummary: 'Iran parliament warns of military response'},
  {id: 'u_feb25_saberin', text: 'IRGC appoints new Saberin Special Forces commander BG Hosseini -- counter-insurgency specialist', date: 'Feb 25, 2026', assetId: null, changeSummary: 'IRGC Saberin SF gets new commander'},
  {id: 'u_feb25_tanker108', text: '108 air tankers in/heading to CENTCOM theater -- 270+ C-17/C-5 cargo flights since January', date: 'Feb 25, 2026', assetId: 'tankers_surge', changeSummary: 'Tanker fleet doubled to 108; 270+ cargo flights'},
  {id: 'u_feb25_verba_deal', text: 'FT: Iran signed $589M deal with Russia for 500 Verba MANPADS + 2,500 missiles (Dec 2025)', date: 'Feb 25, 2026', assetId: null, changeSummary: 'Iran-Russia $589M Verba MANPADS deal revealed'},
  {id: 'u_feb25_cm302', text: 'Reuters: Iran near deal with China for CM-302 supersonic anti-ship missiles (Mach 2.5-4)', date: 'Feb 25, 2026', assetId: null, changeSummary: 'Iran nearing Chinese supersonic missile deal'},
  {id: 'u_feb25_ofac', text: 'Treasury OFAC sanctions 30+ entities/vessels in Iran shadow fleet and IRGC networks', date: 'Feb 25, 2026', assetId: null, changeSummary: 'OFAC sanctions 30+ Iran entities/tankers'},
  {id: 'u_feb25_bertha', text: 'US military seizes sanctioned oil tanker Bertha in Indian Ocean (Iranian oil)', date: 'Feb 25, 2026', assetId: null, changeSummary: 'US seizes Iranian oil tanker in Indian Ocean'},
  {id: 'u_feb25_syria', text: 'US begins final Syria withdrawal -- 100+ truck convoy from Qasrak to Iraq', date: 'Feb 25, 2026', assetId: 'syria_withdrawal', changeSummary: 'Final US Syria withdrawal underway'},
  {id: 'u_feb25_modi', text: 'Indian PM Modi arrives Israel for 2-day visit -- action against Iran unlikely during visit', date: 'Feb 25, 2026', assetId: null, changeSummary: 'Modi in Israel; Iran strike unlikely during visit'},
  {id: 'u_feb25_araghchi', text: 'Iranian FM Araghchi departs Tehran for Geneva -- says deal within reach', date: 'Feb 25, 2026', assetId: null, changeSummary: 'Iran FM heads to Geneva, says deal within reach'},
  {id: 'u_feb25_hormuz_drill', text: 'IRGC Hormuz exercise: shore-to-sea fire at Bandar Abbas + Nazeat Islands with Shahed drones', date: 'Feb 25, 2026', assetId: null, changeSummary: 'IRGC Hormuz drill with drones and missiles'},
  {id: 'u_feb25_saudi_oil', text: 'Saudi Arabia activates oil surge contingency for potential US-Iran disruption (Reuters)', date: 'Feb 25, 2026', assetId: null, changeSummary: 'Saudi oil surge contingency activated'},
  {id: 'u_feb25_geneva_confirmed', text: 'Geneva talks Feb 26 confirmed -- massive US delegation: Witkoff, Rubio, Kushner, Vance, Ratcliffe, Hegseth', date: 'Feb 25, 2026', assetId: null, changeSummary: 'Geneva talks confirmed, top US officials attend'},
  {id: 'u_feb25_e4b_andrews', text: 'E-4B Doomsday Plane at Andrews AFB before Trump SOTU -- arrived from Barksdale AFB', date: 'Feb 25, 2026', assetId: 'e4b_nightwatch', changeSummary: 'Doomsday Plane at Andrews before SOTU'},
  {id: 'u_feb25_wapo_150', text: 'Washington Post: 150+ military aircraft moved to Europe/ME -- largest in 20 years', date: 'Feb 25, 2026', assetId: 'airlift_surge', changeSummary: '150+ aircraft moved, largest since 2003'},
  {id: 'u_feb25_rubio_bibi', text: 'Rubio delays Netanyahu meeting from Saturday to Monday -- diplomatic signal', date: 'Feb 25, 2026', assetId: null, changeSummary: 'Rubio delays Netanyahu meeting to Monday'},
  {id: 'u_feb25_ford_haifa', text: 'USS Gerald R. Ford docked at Haifa, Israel', date: 'Feb 25, 2026', assetId: 'cvn78', changeSummary: 'Docked at Haifa, Israel'},
  {id: 'u_feb25_f22_ovda', text: '11 F-22 Raptors arrived at Ovda Air Base in Israel Negev Desert', date: 'Feb 25, 2026', assetId: 'f22_staging', changeSummary: '11 Raptors at Ovda, Israel; 6 more en route'},
  {id: 'u_feb25_f22_wave2', text: '6 MORE F-22s departing Langley for UK/ME — total may reach 24 Raptors', date: 'Feb 25, 2026', assetId: 'f22_staging', changeSummary: 'Second wave of 6 F-22s heading to theater'},
  {id: 'u_feb25_f16_diego', text: 'F-16CMs from Misawa Japan deployed to Diego Garcia for force protection', date: 'Feb 25, 2026', assetId: 'f16_diego', changeSummary: 'F-16s from Japan deployed for Diego Garcia defense'},
  {id: 'u_feb25_bahrain', text: 'All 5th Fleet ships dispersed from Bahrain — same pattern as pre-June 2025 attack', date: 'Feb 25, 2026', assetId: 'fifth_fleet_dispersal', changeSummary: 'All 5th Fleet ships dispersed from port'},
  {id: 'u_feb25_murphy', text: 'USS Michael Murphy entered Persian Gulf; USS John Finn joined Lincoln CSG', date: 'Feb 25, 2026', assetId: 'cvn72', changeSummary: '12 warships in region'},
  {id: 'u_feb25_sotu', text: 'Trump State of Union: Iran will never have nuclear weapon; prefers diplomacy', date: 'Feb 25, 2026', assetId: null, changeSummary: 'Trump SOTU address on Iran'},
  {id: 'u_feb25_hezbollah', text: 'Hezbollah signals it will not intervene if US launches limited strikes on Iran', date: 'Feb 25, 2026', assetId: null, changeSummary: 'Hezbollah signals non-intervention'},
  {id: 'u_feb25_350jets', text: 'INSS: 250+ fighter jets in region, 350+ including Europe — over 300 total aircraft', date: 'Feb 25, 2026', assetId: null, changeSummary: '350+ US jets deployed to region'},
  {id: 'u_feb24_ford_crete', text: 'USS Gerald R. Ford arrived at Souda Bay, Crete — heading to Haifa, Israel', date: 'Feb 24, 2026', assetId: 'cvn78', changeSummary: 'Arrived Souda Bay, Crete; heading to Haifa, Israel'},
  {id: 'u_feb24_f22_depart', text: '6 F-22 Raptors departed RAF Lakenheath for Middle East (TREND 51-56)', date: 'Feb 24, 2026', assetId: 'f22_staging', changeSummary: 'All 12 Raptors departed UK for Middle East'},
  {id: 'u_feb24_c17_surge', text: '8+ C-17 heavy transports crossing Atlantic with weapons/equipment', date: 'Feb 24, 2026', assetId: 'c17_airlift', changeSummary: '8+ C-17s crossing Atlantic'},
  {id: 'u_feb24_rc135_crete', text: '3 RC-135 Rivet Joint SIGINT aircraft relocated to Crete from Qatar', date: 'Feb 23, 2026', assetId: 'rc135_mildenhall', changeSummary: '3 RC-135s relocated to Crete for safety'},
  {id: 'u_feb24_embassy', text: 'US Embassy Beirut evacuated 50 non-essential staff amid Iran tensions', date: 'Feb 23, 2026', assetId: null, changeSummary: 'US Embassy Beirut partial evacuation'},
  {id: 'u_feb24_muwaffaq', text: 'Satellite confirms 60+ US combat aircraft at Muwaffaq Salti AB, Jordan', date: 'Feb 24, 2026', assetId: 'f35_jordan', changeSummary: '60+ aircraft confirmed at Jordan base'},
  {id: 'u_feb24_irgc', text: 'IRGC conducts Combined Exercise 1404 on southern coast — drones, missiles, coastal defense', date: 'Feb 24, 2026', assetId: null, changeSummary: 'IRGC coastal defense drill'},
  {id: 'u_feb24_b21', text: 'B-21 Raider production capacity boosted 25% with $4.5B funding', date: 'Feb 24, 2026', assetId: 'b21_edwards', changeSummary: 'B-21 production accelerated'}
];


// ============================================================
// SVG MARKER GENERATORS

function createSVGString(type, color, isConfirmed, size) {
  size = size || 32;
  const s = size;
  const half = s / 2;
  const dash = isConfirmed ? '' : 'stroke-dasharray="3,2"';
  const fO = isConfirmed ? '0.95' : '0.5';
  const sO = isConfirmed ? '1' : '0.6';

  const icons = {
    hexagon: `<g transform="translate(${half},${half}) scale(${s/32})">
      <path d="M-12,2 L-10,-1 -8,-3 8,-3 10,-1 12,2 10,4 -10,4 Z" fill="${color}" fill-opacity="${fO}" stroke="${color}" stroke-width="1" ${dash}/>
      <rect x="-8" y="-3" width="16" height="1" fill="${color}" fill-opacity="${fO}" opacity="0.6"/>
      <rect x="3" y="-7" width="3" height="4" rx="0.5" fill="${color}" fill-opacity="${fO}" stroke="${color}" stroke-width="0.7" ${dash}/>
      <line x1="-8" y1="-3" x2="8" y2="-3" stroke="${color}" stroke-width="1.2" opacity="${sO}"/>
    </g>`,
    bomber: `<g transform="translate(${half},${half}) scale(${s/32})">
      <path d="M0,-10 L2,-6 12,2 10,4 2,2 1,6 4,10 2,10 0,7 -2,10 -4,10 -1,6 -2,2 -10,4 -12,2 -2,-6 Z" fill="${color}" fill-opacity="${fO}" stroke="${color}" stroke-width="0.8" ${dash}/>
    </g>`,
    triangle: `<g transform="translate(${half},${half}) scale(${s/32})">
      <path d="M0,-10 L2,-5 9,1 8,3 2,1 1,5 4,9 2,9 0,6 -2,9 -4,9 -1,5 -2,1 -8,3 -9,1 -2,-5 Z" fill="${color}" fill-opacity="${fO}" stroke="${color}" stroke-width="0.8" ${dash}/>
    </g>`,
    diamond: `<g transform="translate(${half},${half}) scale(${s/32})">
      <path d="M0,-9 C4,-4 7,0 7,4 C7,8 4,10 0,10 C-4,10 -7,8 -7,4 C-7,0 -4,-4 0,-9 Z" fill="${color}" fill-opacity="${fO}" stroke="${color}" stroke-width="1" ${dash}/>
      <text x="0" y="5" text-anchor="middle" font-size="9" font-weight="bold" font-family="sans-serif" fill="#0d1117" opacity="0.7">F</text>
    </g>`,
    eye: `<g transform="translate(${half},${half}) scale(${s/32})">
      <path d="M-11,0 C-6,-7 6,-7 11,0 C6,7 -6,7 -11,0 Z" fill="${color}" fill-opacity="${fO}" stroke="${color}" stroke-width="0.8" ${dash}/>
      <circle cx="0" cy="0" r="4" fill="#0d1117" opacity="0.6"/>
      <circle cx="0" cy="0" r="2" fill="${color}" opacity="0.9"/>
    </g>`,
    invtriangle: `<g transform="translate(${half},${half}) scale(${s/32})">
      <ellipse cx="0" cy="2" rx="11" ry="4" fill="${color}" fill-opacity="${fO}" stroke="${color}" stroke-width="0.8" ${dash}/>
      <rect x="-2" y="-4" width="4" height="6" rx="1" fill="${color}" fill-opacity="${fO}" stroke="${color}" stroke-width="0.7" ${dash}/>
      <line x1="0" y1="-6" x2="0" y2="-4" stroke="${color}" stroke-width="1" opacity="${sO}"/>
    </g>`,
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
    shield: `<g transform="translate(${half},${half}) scale(${s/32})">
      <rect x="-2" y="-4" width="4" height="12" rx="1.5" fill="${color}" fill-opacity="${fO}" stroke="${color}" stroke-width="0.8" ${dash}/>
      <polygon points="0,-10 -3,-4 3,-4" fill="${color}" fill-opacity="${fO}" stroke="${color}" stroke-width="0.6" ${dash}/>
      <polygon points="-2,8 -5,12 -2,10" fill="${color}" fill-opacity="${fO}"/>
      <polygon points="2,8 5,12 2,10" fill="${color}" fill-opacity="${fO}"/>
      <line x1="-2" y1="0" x2="2" y2="0" stroke="#0d1117" stroke-width="0.8" opacity="0.4"/>
    </g>`,
    pentagon: `<g transform="translate(${half},${half}) scale(${s/32})">
      <path d="M-11,3 L-9,-1 -7,-3 7,-3 9,-1 11,3 9,5 -9,5 Z" fill="${color}" fill-opacity="${fO}" stroke="${color}" stroke-width="0.8" ${dash}/>
      <rect x="-4" y="-6" width="8" height="3" rx="0.5" fill="${color}" fill-opacity="${fO}" stroke="${color}" stroke-width="0.6" ${dash}/>
      <line x1="-7" y1="-3" x2="7" y2="-3" stroke="${color}" stroke-width="1" opacity="${sO}"/>
    </g>`,
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
    hexoutline: `<g transform="translate(${half},${half}) scale(${s/32})">
      <circle cx="0" cy="-7" r="3" fill="none" stroke="${color}" stroke-width="1.2" opacity="${sO}" ${dash}/>
      <line x1="0" y1="-4" x2="0" y2="10" stroke="${color}" stroke-width="1.5" opacity="${sO}" ${dash}/>
      <line x1="-6" y1="-1" x2="6" y2="-1" stroke="${color}" stroke-width="1.5" opacity="${sO}" ${dash}/>
      <path d="M-8,8 C-4,4 0,10 0,10 C0,10 4,4 8,8" fill="none" stroke="${color}" stroke-width="1.5" opacity="${sO}" ${dash}/>
    </g>`
  };

  const shapeKey = ASSET_TYPES[type] ? ASSET_TYPES[type].shape : 'square';
  const icon = icons[shapeKey] || icons.square;

  return `<svg width="${s}" height="${s}" viewBox="0 0 ${s} ${s}" xmlns="http://www.w3.org/2000/svg">${icon}</svg>`;
}

function svgToDataUri(svgString) {
  return 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(svgString)));
}

function createMapIcon(type, color, isConfirmed) {
  const svg = createSVGString(type, color, isConfirmed, 38);
  return L.icon({
    iconUrl: svgToDataUri(svg),
    iconSize: [38, 38],
    iconAnchor: [19, 19]
  });
}

function createSmallSVGForLegend(type, color) {
  return createSVGString(type, color, true, 22);
}


// ============================================================
// MAP INITIALIZATION
// ============================================================

const map = L.map('map', {
  center: [30, 40],
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

// Store original positions before offsetting (for movement lines)
assets.forEach(a => {
  a._origLat = a.lat;
  a._origLng = a.lng;
});

function applyOffsets(assetList) {
  const groups = {};
  assetList.forEach(a => {
    const key = `${Math.round(a._origLat * 4) / 4}_${Math.round(a._origLng * 4) / 4}`;
    if (!groups[key]) groups[key] = [];
    groups[key].push(a);
  });

  Object.values(groups).forEach(group => {
    if (group.length <= 1) return;
    const angleStep = (2 * Math.PI) / group.length;
    const radius = 0.08 + (group.length * 0.03);
    group.forEach((a, i) => {
      if (i === 0) return;
      a.lat = a._origLat + radius * Math.cos(angleStep * i);
      a.lng = a._origLng + radius * Math.sin(angleStep * i);
    });
  });
}

applyOffsets(assets);

// Generate a great-circle arc between two points.
// Returns { segments: [ [[lat,lng],...], ... ], allPoints: [[lat,lng],...] }
// If the arc crosses the antimeridian, segments contains 2 polylines
// (one ending at map edge, one starting from the opposite edge).
// allPoints is always the full arc for arrowhead/origin calculations.
function greatCircleArc(lat1, lng1, lat2, lng2, numPoints) {
  numPoints = numPoints || 40;
  const toRad = Math.PI / 180;
  const toDeg = 180 / Math.PI;

  const φ1 = lat1 * toRad, λ1 = lng1 * toRad;
  const φ2 = lat2 * toRad, λ2 = lng2 * toRad;
  const d = 2 * Math.asin(Math.sqrt(
    Math.pow(Math.sin((φ2 - φ1) / 2), 2) +
    Math.cos(φ1) * Math.cos(φ2) * Math.pow(Math.sin((λ2 - λ1) / 2), 2)
  ));
  if (d < 0.001) return { segments: [[[lat1, lng1], [lat2, lng2]]], allPoints: [[lat1, lng1], [lat2, lng2]] };

  const pts = [];
  for (let i = 0; i <= numPoints; i++) {
    const f = i / numPoints;
    const A = Math.sin((1 - f) * d) / Math.sin(d);
    const B = Math.sin(f * d) / Math.sin(d);
    const x = A * Math.cos(φ1) * Math.cos(λ1) + B * Math.cos(φ2) * Math.cos(λ2);
    const y = A * Math.cos(φ1) * Math.sin(λ1) + B * Math.cos(φ2) * Math.sin(λ2);
    const z = A * Math.sin(φ1) + B * Math.sin(φ2);
    let lat = Math.atan2(z, Math.sqrt(x * x + y * y)) * toDeg;
    let lng = Math.atan2(y, x) * toDeg;
    pts.push([lat, lng]);
  }

  // Check if we need antimeridian handling
  let dLng = lng2 - lng1;
  if (Math.abs(dLng) <= 180) {
    // No antimeridian crossing — single segment
    return { segments: [pts], allPoints: pts };
  }

  // The great-circle crosses the antimeridian.
  // Split into two segments: one per side of ±180.
  // Find the crossing point(s) where consecutive lng values jump > 180°.
  const segments = [];
  let currentSeg = [pts[0]];

  for (let i = 1; i < pts.length; i++) {
    const pLng = pts[i - 1][1];
    const cLng = pts[i][1];
    const cLat = pts[i][0];
    const jump = cLng - pLng;

    if (Math.abs(jump) > 180) {
      // Antimeridian crossing between pts[i-1] and pts[i]
      // Interpolate the latitude at the crossing
      const pLat = pts[i - 1][0];

      // Normalize: figure out the actual small longitude step
      let fromLng = pLng;
      let toLng = cLng;
      if (jump > 180) {
        toLng -= 360; // e.g. -179 -> 179 becomes -179 -> -181
      } else if (jump < -180) {
        toLng += 360; // e.g. 179 -> -179 becomes 179 -> 181
      }
      // Fraction along segment where lng crosses ±180
      const boundary = (fromLng < 0) ? -180 : 180;
      const frac = (boundary - fromLng) / (toLng - fromLng);
      const crossLat = pLat + frac * (cLat - pLat);

      // End current segment at the boundary
      currentSeg.push([crossLat, boundary]);
      segments.push(currentSeg);

      // Start new segment from the opposite boundary
      currentSeg = [[ crossLat, -boundary ]];
      currentSeg.push([cLat, cLng]);
    } else {
      currentSeg.push([cLat, cLng]);
    }
  }
  if (currentSeg.length > 0) segments.push(currentSeg);

  return { segments: segments, allPoints: pts };
}


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

  const icon = createMapIcon(asset.type, color, isConfirmed);

  const marker = L.marker([asset.lat, asset.lng], { icon: icon, riseOnHover: true })
    .on('click', () => openDetailPanel(asset));

  // Use Leaflet tooltip for label instead of DOM label
  marker.bindTooltip(getShortName(asset.name), {
    permanent: true,
    direction: 'bottom',
    offset: [0, 12],
    className: 'asset-tooltip',
    opacity: 1
  });

  // Movement line — great circle arc from origin to ORIGINAL (pre-offset) position
  let line = null;
  let movementLayers = [];
  if (asset.prevLat !== null && asset.prevLng !== null) {
    const arcResult = greatCircleArc(asset.prevLat, asset.prevLng, asset._origLat, asset._origLng, 50);
    const dashArray = isConfirmed ? '10 5' : '5 7';
    const lineStyle = {
      color: color,
      weight: isConfirmed ? 1.8 : 1.2,
      opacity: isConfirmed ? 0.45 : 0.22,
      dashArray: dashArray,
      lineCap: 'round',
      lineJoin: 'round'
    };
    // Draw each segment as a separate polyline (handles antimeridian splits)
    arcResult.segments.forEach(seg => {
      const polyline = L.polyline(seg, lineStyle);
      movementLayers.push(polyline);
    });
    line = movementLayers[0]; // keep reference for legacy

    // Use allPoints for arrowhead calculation (consistent regardless of splits)
    const arcPoints = arcResult.allPoints;
    // Arrowhead near destination (at 85% along the arc)
    const arrIdx = Math.floor(arcPoints.length * 0.85);
    const arrPrev = arcPoints[Math.max(0, arrIdx - 2)];
    const arrPt = arcPoints[arrIdx];
    // For arrow angle, handle antimeridian: use shortest lng diff
    let adx = arrPt[1] - arrPrev[1];
    if (adx > 180) adx -= 360;
    if (adx < -180) adx += 360;
    const ady = arrPt[0] - arrPrev[0];
    const arrAngle = Math.atan2(adx, ady) * (180 / Math.PI);

    const arrowMarkerIcon = L.divIcon({
      className: 'arrow-marker',
      html: `<svg width="12" height="12" viewBox="0 0 12 12" style="transform:rotate(${-arrAngle + 180}deg)"><polygon points="6,0 12,12 6,8 0,12" fill="${color}" opacity="${isConfirmed ? 0.55 : 0.3}"/></svg>`,
      iconSize: [12, 12],
      iconAnchor: [6, 6]
    });
    const arrowMarker = L.marker(arrPt, { icon: arrowMarkerIcon, interactive: false });
    movementLayers.push(arrowMarker);

    // Origin dot
    const originIcon = L.divIcon({
      className: 'arrow-marker',
      html: `<svg width="8" height="8" viewBox="0 0 8 8"><circle cx="4" cy="4" r="2.5" fill="none" stroke="${color}" stroke-width="1" opacity="${isConfirmed ? 0.45 : 0.2}"/><circle cx="4" cy="4" r="0.8" fill="${color}" opacity="${isConfirmed ? 0.45 : 0.2}"/></svg>`,
      iconSize: [8, 8],
      iconAnchor: [4, 4]
    });
    const originMarker = L.marker([asset.prevLat, asset.prevLng], { icon: originIcon, interactive: false });
    movementLayers.push(originMarker);

    markerLayers[asset.id] = {
      marker, movementLayers, type: asset.type,
      filterGroup: typeInfo.filterGroup,
      movementDate: asset.movementDate || null
    };

    return;
  }

  markerLayers[asset.id] = {
    marker, movementLayers: [], type: asset.type,
    filterGroup: typeInfo.filterGroup,
    movementDate: null
  };
});

let activeTimelineHours = null; // null = ALL (show all movement lines)

function renderMarkers() {
  allLayerGroup.clearLayers();
  lineLayerGroup.clearLayers();

  const now = new Date();

  Object.values(markerLayers).forEach(entry => {
    const typeInfo = ASSET_TYPES[entry.type];
    if (!typeInfo) return;
    if (!activeFilters.has(typeInfo.filterGroup)) return;

    allLayerGroup.addLayer(entry.marker);
    if (entry.movementLayers && entry.movementLayers.length > 0) {
      // Check timeline filter
      let showMovement = true;
      if (activeTimelineHours !== null && entry.movementDate) {
        const moveDate = new Date(entry.movementDate + 'T12:00:00Z');
        const hoursAgo = (now - moveDate) / (1000 * 60 * 60);
        showMovement = hoursAgo <= activeTimelineHours;
      } else if (activeTimelineHours !== null && !entry.movementDate) {
        showMovement = false; // No date info — hide if filtering
      }
      if (showMovement) {
        entry.movementLayers.forEach(layer => lineLayerGroup.addLayer(layer));
      }
    }
  });

  // Update tooltip visibility after re-rendering
  setTimeout(function() {
    if (typeof updateLabelVisibility === 'function') updateLabelVisibility();
  }, 50);
}

renderMarkers();

// Initial label visibility (hide tooltips at low zoom)
setTimeout(function() { updateLabelVisibility(); }, 100);


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
  const show = zoom >= 4;
  document.querySelectorAll('.asset-tooltip').forEach(el => {
    el.style.display = show ? 'block' : 'none';
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


// ============================================================
// NEWS TICKER
// ============================================================

function buildTicker() {
  const tickerEl = document.getElementById('ticker-content');
  if (!tickerEl) return;

  // Relative time helper
  function relativeTime(dateStr) {
    const d = parseUpdateDate(dateStr);
    if (d.getFullYear() <= 2020) return '';
    const now = new Date();
    const diffMs = now - d;
    const diffMins = Math.floor(diffMs / 60000);
    const diffHrs = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);
    if (diffMins < 60) return diffMins + 'm ago';
    if (diffHrs < 24) return diffHrs + 'h ago';
    if (diffDays < 30) return diffDays + 'd ago';
    return '';
  }

  // Build ticker items — updates array first, then recent asset changes
  function buildItems() {
    // Explicit intel updates from updates array (most recent first)
    const updateItems = updates.map(u => {
      const asset = u.assetId ? assets.find(a => a.id === u.assetId) : null;
      const typeInfo = asset ? ASSET_TYPES[asset.type] : null;
      const color = typeInfo ? typeInfo.color : '#4FC3F7';
      const onclick = asset ? `onclick="tickerClick('${u.assetId}')"` : '';
      const rel = relativeTime(u.date);
      const timeDisplay = rel ? `${u.date} <span class="ticker-rel">${rel}</span>` : u.date;
      return `<span class="ticker-item" ${onclick} style="cursor:${asset ? 'pointer' : 'default'}">` +
        `<span class="ticker-dot confirmed"></span>` +
        `<span style="color:${color}">${u.text}</span> ` +
        `<span class="ticker-time">${timeDisplay}</span>` +
        `</span><span class="ticker-sep">│</span>`;
    }).join('');

    // Recent asset updates (top 12 by recency)
    const sorted = [...assets].sort((a, b) => parseUpdateDate(b.updated) - parseUpdateDate(a.updated));
    const recent = sorted.slice(0, 12);
    const assetItems = recent.map(asset => {
      const typeInfo = ASSET_TYPES[asset.type];
      const isConf = asset.confidence === 'confirmed';
      const shortLoc = asset.location.split(' — ')[0].substring(0, 50);
      const rel = relativeTime(asset.updated);
      const timeDisplay = rel ? `${asset.updated} <span class="ticker-rel">${rel}</span>` : asset.updated;
      return `<span class="ticker-item" data-id="${asset.id}" onclick="tickerClick('${asset.id}')">${
        '<span class="ticker-dot ' + (isConf ? 'confirmed' : 'unconfirmed') + '"></span>'}` +
        `<span style="color:${typeInfo.color}">${getShortName(asset.name)}</span> ` +
        `${shortLoc} ` +
        `<span class="ticker-time">${timeDisplay}</span>` +
        `</span><span class="ticker-sep">│</span>`;
    }).join('');

    return updateItems + assetItems;
  }

  // Duplicate content for seamless infinite scroll
  tickerEl.innerHTML = buildItems() + buildItems();
}

function parseUpdateDate(str) {
  // Handle various formats: "Feb 20, 2026", "Feb 2026", "May 2025 (status unclear)", "Sep 2025 (last known)"
  const cleaned = str.replace(/\s*\(.*\)/, '');
  const d = new Date(cleaned);
  return isNaN(d.getTime()) ? new Date(2020, 0, 1) : d;
}

function tickerClick(assetId) {
  const asset = assets.find(a => a.id === assetId);
  if (asset) {
    openDetailPanel(asset);
    map.setView([asset.lat, asset.lng], Math.max(map.getZoom(), 5), { animate: true });
  }
}

// Make tickerClick available globally
window.tickerClick = tickerClick;

buildTicker();


// ============================================================
// MOVEMENT TIMELINE FILTER
// ============================================================

const TIMELINE_OPTIONS = [
  { label: 'ALL', hours: null },
  { label: '12H', hours: 12 },
  { label: '24H', hours: 24 },
  { label: '36H', hours: 36 },
  { label: '48H', hours: 48 },
  { label: '72H', hours: 72 },
  { label: '7D', hours: 168 },
  { label: '14D+', hours: 336 }
];

function buildTimelineFilter() {
  const container = document.getElementById('timeline-buttons');
  if (!container) return;
  container.innerHTML = '';

  TIMELINE_OPTIONS.forEach(opt => {
    const btn = document.createElement('button');
    btn.className = 'timeline-btn' + (activeTimelineHours === opt.hours ? ' active' : '');
    btn.textContent = opt.label;
    btn.dataset.hours = opt.hours === null ? 'all' : opt.hours;
    btn.addEventListener('click', () => {
      activeTimelineHours = opt.hours;
      updateTimelineUI();
      renderMarkers();
      updateMovementCount();
    });
    container.appendChild(btn);
  });
}

function updateTimelineUI() {
  document.querySelectorAll('.timeline-btn').forEach(btn => {
    const val = btn.dataset.hours;
    const isActive = (val === 'all' && activeTimelineHours === null) ||
                     (val !== 'all' && parseInt(val) === activeTimelineHours);
    btn.classList.toggle('active', isActive);
  });
}

function updateMovementCount() {
  const now = new Date();
  let visibleMovements = 0;
  Object.values(markerLayers).forEach(entry => {
    if (!entry.movementLayers || entry.movementLayers.length === 0) return;
    const typeInfo = ASSET_TYPES[entry.type];
    if (!typeInfo || !activeFilters.has(typeInfo.filterGroup)) return;
    if (activeTimelineHours === null) {
      visibleMovements++;
    } else if (entry.movementDate) {
      const moveDate = new Date(entry.movementDate + 'T12:00:00Z');
      const hoursAgo = (now - moveDate) / (1000 * 60 * 60);
      if (hoursAgo <= activeTimelineHours) visibleMovements++;
    }
  });
  // Update the timeline label to show count
  const label = document.querySelector('.timeline-label');
  if (label) {
    const suffix = activeTimelineHours === null ? '' : ` (${visibleMovements})`;
    label.textContent = 'MOVEMENT TIMELINE' + suffix;
  }
}

buildTimelineFilter();
updateMovementCount();
