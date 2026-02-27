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
    location: "Eastern Mediterranean — en route to Haifa, Israel (ETA Monday per JPost; Friday per earlier reports)",
    mission: "Deployment Day 250+. Transited Strait of Gibraltar Feb 20. Escorts: USS Mahan (DDG-72), USS Bainbridge (DDG-96), USS Winston S. Churchill (DDG-81). CVW-8: 4x F/A-18E/F squadrons, EA-18G (VAQ-142), E-2D (VAW-124). Feb 24: Ford arrived at Souda Bay, Crete (NATO base). Spent 4 days resupplying. WSJ reports severe crew morale issues at 240+ days deployed. Feb 26: Ford departed Souda Bay heading eastern Med. Feb 27: Jerusalem Post revises ETA to Monday at Haifa (earlier Reuters/Israel Hayom said Friday). TWZ questions docking: carrier at fixed port would be 'very attractive high-volume target' for Iranian attack, losing defensive benefits. 19FortyFive: Day 250+, approaching post-Vietnam record (285 days, USS Truman 2021). AP/Military Times confirms Ford arrival will bring Navy presence to at least 16 ships -- dwarfing the 11-ship Caribbean fleet. Experts: forces 'clearly designed for attacking targets in Iran and defending against retaliation.'",
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
      {name: "Al Bawaba (Mahan escort)", url: "https://www.albawaba.com/news/uss-gerald-r-ford-leaves-crete-island-1622917"},
      {name: "AP/Military Times (16 ships)", url: "https://apnews.com/article/us-military-iran-buildup-nuclear-program-5663a8b0d81c8439adfaa010c59a36f5"}
    ],
    updated: "Feb 27, 2026",
    changeSummary: "Navy rising to 16 ships; AP confirms largest since 2003"
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
    name: "F-35A Lightning II (~42 aircraft — 30 at Jordan + 12 transiting via Lakenheath)",
    type: "fighter",
    class: "F-35A Lightning II",
    lat: 31.83, lng: 36.79,
    prevLat: 44.47, prevLng: -73.15,
    prevLabel: "Burlington ANGB, VT / multi-origin (Feb 2026)",
    movementDate: "2026-02-15",
    location: "Muwaffaq Salti AB, Jordan — confirmed by satellite",
    mission: "30 F-35As confirmed at Muwaffaq Salti (18 additional arrived from RAF Lakenheath). Vermont ANG 134th FS (SEAD specialists) contributed ~12 aircraft. These jets came from Operation Absolute Resolve (Venezuela) and Cold Response (Norway). Feb 20: Confirmed US pulled F-35s + other assets from NATO Cold Response 2026 in Norway (Norwegian defense officials). SEAD role critical for any Iran operation. Satellite imagery (Airbus, Feb 21) confirms 60+ combat aircraft at Muwaffaq Salti total. A-10C Thunderbolts also visible. 68 cargo planes delivered munitions/equipment in past week. Feb 26: 12 more F-35As from 388th FW / 419th FW Hill AFB (Utah) crossing Atlantic via CE 047 in two 6-ship cells. 14 aircraft initially launched (2 spares). Staging at RAF Lakenheath before continuing to ME. Total F-35A count approaching 42 (The Aviationist/Report.az).",
    strikeGroup: "Multiple wings",
    confidence: "confirmed",
    sources: [
      {name: "CNN Feb 20", url: "https://www.cnn.com/2026/02/20/politics/military-power-buildup-us-iran-intl-vis"},
      {name: "Air & Space Forces", url: "https://www.airandspaceforces.com/f-35s-deploy-middle-east-us-talks-iran/"},
      {name: "Army Recognition Feb 21", url: "https://www.armyrecognition.com/news/aerospace-news/2026/us-sends-18-more-f-35a-fighter-jets-from-uk-to-middle-east-as-iran-nuclear-talks-begin"},
      {name: "Army Recognition Feb 21 (satellite)", url: "https://www.armyrecognition.com/news/aerospace-news/2026/u-s-strengthens-air-combat-forces-at-jordans-muwaffaq-salti-base-near-israel-as-iran-tensions-escalate"},
      {name: "Newsweek Satellite Feb 24", url: "https://www.newsweek.com/satellite-pictures-show-surge-us-aircraft-middle-east-11571894"},
      {name: "The Aviationist Feb 26", url: "https://theaviationist.com/2026/02/26/additional-fighters-reinforce-us-buildup/"},
      {name: "Report.az Feb 26", url: "https://report.az/en/other-countries/us-deploys-additional-f-35a-fighters-to-europe"}
    ],
    updated: "Feb 26, 2026",
    changeSummary: "12 more F-35As from Hill AFB transiting to ME"
  },
  {
    id: "f15e_jordan",
    name: "F-15E Strike Eagles (44 aircraft — 18 at Jordan + 26 transiting via Lakenheath)",
    type: "fighter",
    class: "F-15E Strike Eagle",
    lat: 31.85, lng: 36.85,
    prevLat: 52.41, prevLng: 0.56,
    prevLabel: "RAF Lakenheath, UK (48th FW)",
    movementDate: "2026-02-15",
    location: "Muwaffaq Salti AB, Jordan",
    mission: "3 squadrons including 12 from 48th FW RAF Lakenheath (494th FS) and Mountain Home AFB. Only USAF fighter certified for GBU-28 and GBU-72 deep-penetrating bunker busters -- critical for Iran hardened targets. Part of 60+ aircraft buildup at Muwaffaq Salti confirmed by satellite. THAAD battery emplaced at base alongside Patriot systems. Feb 26 UPDATE: Aviationist confirms CE 044 carried 12 F-15Es from 366th FW Mountain Home AFB (Idaho) in two 6-ship cells (TABOR 11-16, TABOR 21-26) -- staged at Seymour Johnson before crossing Atlantic. CE 045 added 2 more F-15Es from Seymour Johnson (TABOR 61-62); 4 more had to RTB after KC-46 engine failure over Nova Scotia. TWZ reports ANOTHER 6 F-15Es each from Mountain Home and Seymour Johnson still heading to Europe. Total F-15Es now 44 (18 original + 14 SJ + 12 MH). Largest F-15E surge since 2003.",
    strikeGroup: "48th FW / 366th FW / 4th FW / multi-wing surge",
    confidence: "confirmed",
    sources: [
      {name: "Air & Space Forces", url: "https://www.airandspaceforces.com/f-35s-deploy-middle-east-us-talks-iran/"},
      {name: "BBC", url: "https://www.bbc.com/news/live/c0rj5dwjx2pt"},
      {name: "JFeed Feb 26", url: "https://www.jfeed.com/news-world/us-f15-deployment-middle-east"},
      {name: "The War Zone Feb 26", url: "https://www.twz.com/news-features/uss-gerald-r-fords-imminent-arrival-off-israel-comes-as-negotiations-grind-on"},
      {name: "The Aviationist Feb 26", url: "https://theaviationist.com/2026/02/26/additional-fighters-reinforce-us-buildup/"}
    ],
    updated: "Feb 26, 2026",
    changeSummary: "44 F-15Es total; MH + SJ waves confirmed"
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
    name: "KC-46A/KC-135 Tanker Surge (128 confirmed — 43 CENTCOM, 44 Med, 41 Europe/UK)",
    type: "tanker",
    class: "KC-46A / KC-135",
    lat: 24.06, lng: 45.52,
    prevLat: 35.34, prevLng: -77.96,
    prevLabel: "Seymour Johnson AFB, NC / CONUS bases (Feb 15-18)",
    movementDate: "2026-02-18",
    location: "Prince Sultan AB, Saudi Arabia + en route",
    mission: "75 KC-46A/KC-135 tankers deployed or en route per Politics Today analysis. Responsible Statecraft reports 108 total air tankers in or heading to CENTCOM theater. UK denied use of Diego Garcia and RAF Fairford for bomber strikes — tanker fleet compensating by enabling long-range CONUS-to-target bomber runs. KC-46A first deployment to 378th AEW (77th EARS from Seymour Johnson AFB). Tanker activity increasing at Prince Sultan AB, decreasing at Al Udeid. 15 KC-46A Pegasus tankers now at Lajes Field, Azores — largest ever tanker surge there. Total 108 tankers positioned along Atlantic-Mediterranean air bridge. Flightradar24 reported top 9 most-tracked flights were all KC-135s. Feb 25: 270+ C-17/C-5 cargo flights have supported buildup since early January, delivering personnel, aircraft components, and THAAD/Patriot systems. Feb 26: MATA breakdown confirms 128 total tankers: 43 CENTCOM (Prince Sultan AB + Qatar + Diego Garcia orbit), 44 Mediterranean (Incirlik + Sigonella + Souda Bay + at-sea shuttle), 41 Europe/UK (Mildenhall + Fairford + Lajes + Moron + Rota). This is the largest tanker surge since 2003 Iraq War. Responsible Statecraft estimate: 108 in theater, Politics Today: 75+ active. Combined total 128 confirmed unique tail numbers across all zones.",
    strikeGroup: "AMC / 18th AF surge",
    confidence: "confirmed",
    sources: [
      {name: "Politics Today (75 tankers)", url: "https://politicstoday.org/300-us-military-aircraft-deployed-to-centcom/"},
      {name: "Responsible Statecraft (108 tankers)", url: "https://responsiblestatecraft.org/middle-east-iran-war/"},
      {name: "Air & Space Forces (KC-46 deploy)", url: "https://www.airandspaceforces.com/kc-46-pegasus-tanker-first-time-378th-aew/"},
      {name: "Flightradar24 (tanker traffic)", url: "https://www.flightradar24.com/blog/military-aircraft-middle-east-buildup-2026/"},
      {name: "The War Zone Feb 26", url: "https://www.twz.com/news-features/uss-gerald-r-fords-imminent-arrival-off-israel-comes-as-negotiations-grind-on"}
    ],
    updated: "Feb 26, 2026",
    changeSummary: "128 total tankers confirmed across CENTCOM/Med/Europe zones"
  },

  // === SURVEILLANCE / ISR ===
  {
    id: "isr_centcom",
    name: "ISR Package — P-8, E-8, RC-135, RQ-4, MQ-9 (CENTCOM theater)",
    type: "surveillance",
    class: "Mixed ISR",
    lat: 25.24, lng: 55.35,
    prevLat: null, prevLng: null,
    prevLabel: null,
    location: "Al Dhafra AB, UAE + orbit over Gulf/Red Sea",
    mission: "P-8A Poseidon (anti-sub/maritime), RC-135V/W Rivet Joint (SIGINT), E-8C JSTARS (ground surveillance), RQ-4 Global Hawk (BAMS-D), MQ-9 Reaper (armed ISR). All assets providing 24/7 coverage of Iran, Houthi positions, Strait of Hormuz. Flightradar24: 3-4 RC-135s on daily orbit over Gulf.",
    strikeGroup: "CENTCOM ISR",
    confidence: "confirmed",
    sources: [
      {name: "USAF Official", url: "https://www.af.mil/About-Us/Fact-Sheets/Display/Article/104465/e-8c-joint-stars/"}
    ],
    updated: "Feb 20, 2026",
    changeSummary: "24/7 ISR coverage of Iran and Strait of Hormuz"
  },

  // === SUBMARINES ===
  {
    id: "ssbn_deterrent",
    name: "Ohio-class SSBNs (strategic deterrent patrol)",
    type: "submarine",
    class: "Ohio-class SSBN",
    lat: 0.0, lng: 65.0,
    prevLat: null, prevLng: null,
    prevLabel: null,
    location: "[CLASSIFIED] — strategic deterrent patrol",
    mission: "14 Ohio-class SSBNs (8-10 operational at any time). Each carries up to 20 Trident II D5 SLBMs (MIRV). Pentagon confirmed STRATCOM on 'heightened alert' since Nov 2025 Iran crisis. Locations classified.",
    strikeGroup: "STRATCOM",
    confidence: "confirmed",
    sources: [
      {name: "USNI (SSBN ops)", url: "https://news.usni.org/2025/11/15/u-s-submarine-force"}
    ],
    updated: "Feb 20, 2026",
    changeSummary: "STRATCOM heightened alert since Nov 2025"
  },
  {
    id: "ssgn_ohio",
    name: "Ohio-class SSGN (cruise missile submarine)",
    type: "submarine",
    class: "Ohio-class SSGN",
    lat: 24.5, lng: 58.5,
    prevLat: null, prevLng: null,
    prevLabel: null,
    location: "Arabian Sea — likely position",
    mission: "4 SSGNs converted from Trident subs (USS Ohio, Michigan, Florida, Georgia). Each carries 154 Tomahawk cruise missiles. At least 1-2 likely positioned within strike range of Iran. Florida (SSGN-728) confirmed Arabian Sea in Jan 2026 (USNI). Unconfirmed: Ohio or Michigan may be positioned in Indian Ocean.",
    strikeGroup: "SUBLANT/SUBPAC",
    confidence: "unconfirmed",
    sources: [
      {name: "USNI Jan 2026", url: "https://news.usni.org/2026/01/15/usni-news-fleet-and-marine-tracker-jan-2026"}
    ],
    updated: "Feb 20, 2026",
    changeSummary: "Florida (SSGN-728) Arabian Sea confirmed Jan 2026"
  },
  {
    id: "ssn_gulf",
    name: "Virginia/Los Angeles-class SSNs",
    type: "submarine",
    class: "SSN (various)",
    lat: 23.5, lng: 59.5,
    prevLat: null, prevLng: null,
    prevLabel: null,
    location: "Arabian Sea / Gulf of Oman — forward deployment",
    mission: "Multiple SSNs likely deployed with carrier strike groups (standard CSG composition includes 1-2 SSNs). Virginia-class carries BGM-109 Tomahawk VLS (40 missiles) plus Mark 48 torpedoes. A-RCM (Advanced Reconfigurable Countermeasures Module) for deception in Strait of Hormuz.",
    strikeGroup: "CSG-12 / CSG-3 screen",
    confidence: "unconfirmed",
    sources: [
      {name: "USNI Fleet Tracker", url: "https://news.usni.org/category/fleet-tracker"}
    ],
    updated: "Feb 20, 2026",
    changeSummary: "SSNs likely deployed with each CSG"
  },

  // === MISSILE DEFENSE ===
  {
    id: "thaad_israel",
    name: "THAAD Battery — Israel (Muwaffaq Salti / Negev)",
    type: "missile_defense",
    class: "THAAD",
    lat: 31.00, lng: 35.00,
    prevLat: null, prevLng: null,
    prevLabel: null,
    location: "Israel — Muwaffaq Salti AB, Jordan & Negev sites",
    mission: "THAAD battery emplaced at Muwaffaq Salti AB alongside Patriot systems. Provides upper-tier missile defense for Jordan/Israel airspace. 7-7.5m mile intercept range at 93-mile altitude. Additional THAAD units in Saudi Arabia and UAE. Feb 26: Patriot components also confirmed at Ovda Air Base (alongside F-22s) via MizarVision satellite. Multi-layered defense: THAAD + Patriot + Israeli Iron Dome/Arrow 3.",
    strikeGroup: "32nd AAMDC",
    confidence: "confirmed",
    sources: [
      {name: "The War Zone", url: "https://www.twz.com/news-features/final-pieces-moving-into-place-for-potential-attack-on-iran"},
      {name: "Army Recognition", url: "https://www.armyrecognition.com/news/army-news/2026/us-patriot-air-defense-systems-confirmed-deployed-to-muwaffaq-salti-air-base-in-jordan"}
    ],
    updated: "Feb 26, 2026",
    changeSummary: "Patriot also confirmed at Ovda, multi-layer defense active"
  },
  {
    id: "patriot_gulf",
    name: "Patriot Batteries — Gulf States (Saudi, UAE, Kuwait, Qatar)",
    type: "missile_defense",
    class: "Patriot PAC-3",
    lat: 25.00, lng: 51.00,
    prevLat: null, prevLng: null,
    prevLabel: null,
    location: "Gulf States — multiple batteries",
    mission: "Multiple Patriot PAC-3 batteries across Saudi Arabia, UAE, Kuwait, Qatar. Protecting US installations and allied infrastructure. Additional batteries reportedly being surged Feb 2026 per CENTCOM surge orders. MIM-104F PAC-3 MSE with 35km intercept range.",
    strikeGroup: "32nd AAMDC / host-nation",
    confidence: "confirmed",
    sources: [
      {name: "USCENTCOM Press", url: "https://www.centcom.mil/MEDIA/NEWS-ARTICLES/News-Article-View/Article/3988124/"}
    ],
    updated: "Feb 20, 2026",
    changeSummary: "Additional batteries surged, Gulf installations protected"
  },

  // === GROUND BASES ===
  {
    id: "aludeid",
    name: "Al Udeid AB, Qatar (379th AEW)",
    type: "base",
    class: "Air Base",
    lat: 25.12, lng: 51.31,
    prevLat: null, prevLng: null,
    prevLabel: null,
    location: "Al Udeid AB, Qatar — AFCENT HQ",
    mission: "Forward HQ, AFCENT. 10,000+ US personnel. Hosts E-3 AWACS, C-17s, KC-135s. Activity reportedly shifting to Prince Sultan AB as Qatar distances from Iran conflict. Still critical CAOC.",
    strikeGroup: "379th AEW / AFCENT",
    confidence: "confirmed",
    sources: [
      {name: "USAF Official", url: "https://www.afcent.af.mil/About/Fact-Sheets/Display/Article/217803/379th-air-expeditionary-wing/"}
    ],
    updated: "Feb 20, 2026",
    changeSummary: "Activity shifting to Prince Sultan as Qatar distances itself"
  },
  {
    id: "princesultan",
    name: "Prince Sultan AB, Saudi Arabia (378th AEW)",
    type: "base",
    class: "Air Base",
    lat: 24.06, lng: 45.52,
    prevLat: null, prevLng: null,
    prevLabel: null,
    location: "Prince Sultan AB, Saudi Arabia",
    mission: "Rapidly expanding as primary CENTCOM air hub. Major tanker surge hub — KC-46A first deployment (77th EARS). F-15Es and ISR assets increasing. Saudi Arabia reportedly allowing US buildup but not active strike operations. 20,000 personnel capacity.",
    strikeGroup: "378th AEW",
    confidence: "confirmed",
    sources: [
      {name: "Air & Space Forces", url: "https://www.airandspaceforces.com/kc-46-pegasus-tanker-first-time-378th-aew/"}
    ],
    updated: "Feb 20, 2026",
    changeSummary: "Major tanker/strike hub, rapid expansion"
  },
  {
    id: "diegogarcia",
    name: "Diego Garcia (Joint Military Facility)",
    type: "base",
    class: "Naval/Air Base",
    lat: -7.31, lng: 72.43,
    prevLat: null, prevLng: null,
    prevLabel: null,
    location: "Diego Garcia, British Indian Ocean Territory",
    mission: "Critical Indian Ocean hub. UK-US agreement. Feb 21: UK PM Starmer denied US use for bomber strikes on Iran. Force protection F-16CMs from Misawa deployed. KC-135s, C-17, P-8 visible. Ongoing negotiations regarding bomber basing rights. UK sovereignty discussions continue with Mauritius re: island ownership.",
    strikeGroup: "Joint Military Facility",
    confidence: "confirmed",
    sources: [
      {name: "The War Zone Feb 25", url: "https://www.twz.com/news-features/f-16s-arrive-to-protect-diego-garcia-f-22s-forward-deploy-to-israel"}
    ],
    updated: "Feb 25, 2026",
    changeSummary: "UK blocking bomber ops; F-16s deployed for base defense"
  },
  {
    id: "muwaffaq",
    name: "Muwaffaq Salti AB, Jordan (primary buildup hub)",
    type: "base",
    class: "Air Base",
    lat: 31.83, lng: 36.79,
    prevLat: null, prevLng: null,
    prevLabel: null,
    location: "Muwaffaq Salti AB, Jordan",
    mission: "Primary buildup hub per satellite imagery. 60+ US aircraft confirmed: F-35As, F-15Es, F-16s, A-10Cs. THAAD + Patriot batteries emplaced. 68 cargo aircraft delivered munitions/equipment past week. Jordan allowing US buildup on territory but NOT as launchpad per Newsweek. Critical pre-positioning for any Iran operation.",
    strikeGroup: "CENTCOM surge",
    confidence: "confirmed",
    sources: [
      {name: "Newsweek Satellite Feb 24", url: "https://www.newsweek.com/satellite-pictures-show-surge-us-aircraft-middle-east-11571894"},
      {name: "Army Recognition Feb 21", url: "https://www.armyrecognition.com/news/aerospace-news/2026/u-s-strengthens-air-combat-forces-at-jordans-muwaffaq-salti-base-near-israel-as-iran-tensions-escalate"}
    ],
    updated: "Feb 24, 2026",
    changeSummary: "60+ US aircraft confirmed by satellite at Jordan base"
  },
  {
    id: "raf_lakenheath",
    name: "RAF Lakenheath, UK (48th FW staging hub)",
    type: "base",
    class: "Air Base",
    lat: 52.41, lng: 0.56,
    prevLat: null, prevLng: null,
    prevLabel: null,
    location: "RAF Lakenheath, Suffolk, UK",
    mission: "Primary staging hub for USAFE aircraft deploying to Middle East. F-22s (13 now here), F-35As (12 Hill AFB transiting), F-15Es (staging here). Feb 26: UK govt (The Times/CFR) reportedly expanded ban — RAF Lakenheath and UK airbases cannot be used for preemptive strike operations on Iran (in addition to Diego Garcia ban). Raptors may transit but UK refuses to serve as strike staging base. F-22s likely continuing directly to Israel rather than staging long-term in UK.",
    strikeGroup: "USAFE / 48th FW",
    confidence: "confirmed",
    sources: [
      {name: "The Aviationist", url: "https://theaviationist.com/2026/02/17/six-f22-raptors-arrive-raf-lakenheath/"},
      {name: "The Times/CFR Feb 26 (UK ban)", url: "https://www.cfr.org/article/us-iran-crisis-2026"}
    ],
    updated: "Feb 26, 2026",
    changeSummary: "UK expanded ban to Lakenheath; F-22s transit only"
  },
  {
    id: "ovda",
    name: "Ovda Air Base, Israel (F-22 deployment)",
    type: "base",
    class: "Air Base",
    lat: 29.94, lng: 34.94,
    prevLat: null, prevLng: null,
    prevLabel: null,
    location: "Ovda AB, Negev Desert, Israel",
    mission: "Historic first deployment of US combat aircraft to Israel. 11 F-22s arrived Feb 24. MizarVision satellite (Feb 26) confirms Patriot battery components also at Ovda. Built to US specifications (JINSA). Distances to key Iran targets: Bushehr ~1,540km, Natanz ~1,640km, Tehran ~1,660km. Within combat radius for F-22 with KC-46 tanker support. WSJ: US dispersal strategy using Israeli bases to avoid vulnerability of fixed Gulf airfields.",
    strikeGroup: "1st FW deployed",
    confidence: "confirmed",
    sources: [
      {name: "JINSA (Ovda analysis)", url: "https://jinsa.org/jinsas-ruhe-america-just-added-a-land-based-aircraft-carrier-to-the-middle-east/"},
      {name: "MizarVision Feb 26", url: "https://www.timesofisrael.com/us-iran-said-to-agree-to-further-talks-next-week-as-mediator-claims-progress/"}
    ],
    updated: "Feb 26, 2026",
    changeSummary: "Patriot battery confirmed; first-ever US combat aircraft in Israel"
  },

  // === SPECIAL NAVAL / DESTROYERS ===
  {
    id: "destroyers_me",
    name: "US Destroyers / Cruisers — Middle East (16 ships total)",
    type: "special_naval",
    class: "Arleigh Burke DDG",
    lat: 26.0, lng: 56.5,
    prevLat: null, prevLng: null,
    prevLabel: null,
    location: "Persian Gulf / Arabian Sea / Red Sea",
    mission: "AP (Feb 26) confirms at least 16 US warships now in Middle East waters with Ford's arrival — dwarfing 11-ship Caribbean fleet. Includes: Mahan (DDG-72), Bainbridge (DDG-96), Winston S. Churchill (DDG-81) [Ford escorts]; Michael Murphy (DDG-112) [entered Persian Gulf per INSS]; John Finn (DDG-113) [joined Lincoln CSG]; Delbert D. Black (DDG-119) [moved to northern Arabian Sea]; plus additional DDGs/CGs screen for CSG-3 and CSG-12. Each destroyer carries 96 VLS cells (mix of Tomahawk, SM-2/6, ESSM, ASROC). Total Tomahawk capacity across 16 ships: 800-1,000+ missiles.",
    strikeGroup: "DESRON 2 + DESRON 21 + CSG-3",
    confidence: "confirmed",
    sources: [
      {name: "AP/Military Times (16 ships)", url: "https://apnews.com/article/us-military-iran-buildup-nuclear-program-5663a8b0d81c8439adfaa010c59a36f5"},
      {name: "INSS Feb 25", url: "https://www.ynetnews.com/article/sykrwfnuwg"},
      {name: "Reuters Feb 24", url: "https://www.reuters.com/world/middle-east/us-carriers-warships-near-iran/"}
    ],
    updated: "Feb 26, 2026",
    changeSummary: "AP: 16 ships now in ME waters, largest since 2003"
  }
];

// === TICKER UPDATES ===
const tickerUpdates = [
  {
    id: 'u_feb27_128_tankers',
    date: 'Feb 27',
    headline: 'MATA CONFIRMS: 128 TANKERS DEPLOYED — 43 CENTCOM / 44 MED / 41 EUROPE',
    detail: 'Military Asset Tracker analysis confirms 128 total KC-46A/KC-135 tankers deployed across three zones: 43 in CENTCOM theater (Prince Sultan AB, Qatar, Diego Garcia orbit), 44 in Mediterranean (Incirlik, Sigonella, Souda Bay), 41 in Europe/UK (Mildenhall, Fairford, Lajes, Moron). Largest tanker surge since 2003. Enables CONUS-to-target bomber runs without forward basing.',
    type: 'tanker',
    priority: 'critical'
  },
  {
    id: 'u_feb27_16_ships',
    date: 'Feb 27',
    headline: 'AP: US NAVY NOW AT 16 SHIPS IN MIDDLE EAST — LARGEST SINCE 2003',
    detail: 'Associated Press and Military Times confirm: with USS Gerald R. Ford strike group arrival, US Navy now has at least 16 warships in Middle East waters. Dwarfs 11-ship Caribbean fleet. Experts say forces clearly designed for attacking Iran and defending against retaliation. Includes 2 carrier strike groups, destroyers in Persian Gulf, Arabian Sea, and Red Sea.',
    type: 'naval',
    priority: 'critical'
  },
  {
    id: 'u_feb27_f16_near_miss_yemen',
    date: 'Feb 27',
    headline: 'F-16 NEAR-MISS: HOUTHI SAM NEAR-MISS OVER YEMEN — PILOT EVADED WITH FLARES/JAMMER',
    detail: 'Unconfirmed report (single source): An F-16C conducting a strike sortie over Yemen experienced a near-miss from a Houthi surface-to-air missile. Pilot evaded using flares and onboard jamming (AN/ALQ-184 pod). Aircraft returned safely to base. Not officially confirmed by CENTCOM. Highlights ongoing SAM threat in Yemen airspace — Iranian-supplied SA-6 Gainful and Buk-M2 systems remain active.',
    type: 'incident',
    priority: 'high'
  },
  {
    id: 'u_feb27_ford_arrival',
    date: 'Feb 27',
    headline: 'USS GERALD R. FORD ETA REVISED TO MONDAY — HAIFA DOCKING QUESTIONED',
    detail: 'Jerusalem Post revises Ford ETA from Friday to Monday at Haifa. The War Zone questions wisdom of carrier docking at fixed port — would become a high-value fixed target for Iranian attack, losing defensive benefits of maneuverability. Ford departed Souda Bay, Crete Thursday heading eastern Med. Day 250+ deployment.',
    type: 'naval',
    priority: 'high'
  },
  {
    id: 'u_feb27_patriot_ovda',
    date: 'Feb 27',
    headline: 'SATELLITE: PATRIOT BATTERY CONFIRMED AT OVDA ALONGSIDE F-22s',
    detail: 'MizarVision satellite imagery (via EGYOSINT/Times of Israel) confirms Patriot air defense battery components deployed at Ovda Air Base alongside the 11 F-22 Raptors. First confirmation of integrated air defense at Israel deployment site. Multi-layered defense now: THAAD (Muwaffaq Salti/Jordan), Patriot (Ovda/Israel), plus Israeli Arrow 3 and Iron Dome.',
    type: 'missile_defense',
    priority: 'high'
  },
  {
    id: 'u_feb26_f22_24_total',
    date: 'Feb 26',
    headline: 'F-22 RAPTOR TOTAL REACHES 24 — 13 NOW AT LAKENHEATH, CONTINUING TO ISRAEL',
    detail: 'Third wave of 6 F-22s departed Langley for RAF Lakenheath (DefenceGeek). Combined with 12 new arrivals and 1 returned from Israel (fuel leak), 13 F-22s now at Lakenheath. All expected to continue to Ovda AB, Israel by Friday. First-ever US combat aircraft deployed to Israel. Total F-22 deployment: 24 aircraft (11 Ovda + 13 Lakenheath en route).',
    type: 'air',
    priority: 'critical'
  },
  {
    id: 'u_feb26_uk_ban_expanded',
    date: 'Feb 26',
    headline: 'UK EXPANDS BASE BAN TO RAF LAKENHEATH — BLOCKS ALL UK AIRBASES FOR IRAN STRIKES',
    detail: 'The Times and CFR report UK govt expanded ban to include RAF Lakenheath and all UK airbases — not just Diego Garcia. UK refuses to allow US use of British territory for preemptive strikes on Iran. F-22s may transit Lakenheath but UK will not serve as staging base for strike operations. Significant constraint: Lakenheath was the primary Atlantic bridge for F-22/F-35/F-15E deployments.',
    type: 'diplomatic',
    priority: 'critical'
  },
  {
    id: 'u_feb26_f35_hill',
    date: 'Feb 26',
    headline: '12 MORE F-35As FROM HILL AFB CROSSING ATLANTIC — TOTAL F-35As NOW ~42',
    detail: 'F-35As from 388th FW / 419th FW (Hill AFB, Utah) crossing Atlantic in two 6-ship cells via CE 047. 14 initially launched, 2 spares. Staging at RAF Lakenheath before continuing to Middle East. Total F-35A count approaching 42. Vermont ANG 134th FS (SEAD specialists) included in earlier waves.',
    type: 'air',
    priority: 'high'
  },
  {
    id: 'u_feb26_f15e_44_total',
    date: 'Feb 26',
    headline: 'F-15E STRIKE EAGLES REACH 44 TOTAL — LARGEST SURGE SINCE 2003',
    detail: 'The Aviationist confirms: CE 044 carried 12 F-15Es from 366th FW Mountain Home (Idaho) in two 6-ship cells. CE 045 added 2 from Seymour Johnson (4 RTB after KC-46 engine failure over Nova Scotia). TWZ: another 6 F-15Es each from Mountain Home and Seymour Johnson still en route to Europe. Total F-15Es now 44 (18 original + 14 SJ + 12 MH). Only F-15E certified for GBU-28 bunker busters.',
    type: 'air',
    priority: 'high'
  },
  {
    id: 'u_feb26_wsj_dispersal',
    date: 'Feb 26',
    headline: 'WSJ: US USING ISRAEL TO DISPERSE WARPLANES — GULF BASING DENIED BY ALL PARTNERS',
    detail: 'Wall Street Journal analysis: US deploying F-22s to Israel because all Gulf partners refused basing for strike operations. Jordan, Saudi Arabia, UAE, Qatar, Bahrain, Kuwait, Turkey all declined to serve as launchpads. Israeli-based F-22s + carrier aviation now backbone of any strike package. BASING DENIED: 7 US partners refused in addition to UK Lakenheath/Diego Garcia ban.',
    type: 'diplomatic',
    priority: 'critical'
  },
  {
    id: 'u_feb26_ford_departed_crete',
    date: 'Feb 26',
    headline: 'USS FORD DEPARTS SOUDA BAY — EN ROUTE TO EASTERN MED/ISRAEL',
    detail: 'USS Gerald R. Ford departed Souda Bay, Crete Thursday heading eastern Mediterranean. Israel Hayom initially reported 24-hour ETA (Friday); Jerusalem Post revised to Monday. Day 250+ deployment. ItaMilRadar: Ford moving toward Israel as Iran tensions raise prospect of US air cover role.',
    type: 'naval',
    priority: 'high'
  },
  {
    id: 'u_feb26_bush_comptuex',
    date: 'Feb 26',
    headline: 'USS BUSH COMPTUEX ACTIVE WITH ROSS/MASON — NEAR DEPLOYMENT-READY',
    detail: 'USS George H.W. Bush COMPTUEX actively underway Feb 21-26 with escorts USS Ross (DDG-71) and USS Mason (DDG-87). COMPTUEX is final certification before deployment. If expedited, Bush CSG could be en route to Middle East within days of completion — providing third carrier strike group for Iran theater alongside Ford and Lincoln.',
    type: 'naval',
    priority: 'high'
  },
  {
    id: 'u_feb25_f16_diego_garcia',
    date: 'Feb 25',
    headline: 'F-16CMs FROM JAPAN DEPLOYED TO DIEGO GARCIA FOR BASE DEFENSE',
    detail: 'The War Zone reports satellite imagery confirms F-16CMs from 35th FW (Misawa AB, Japan) deployed to Diego Garcia for force protection. KC-135 tankers, C-17 transports, P-8 maritime patrol also visible on apron. UK blocking use for Iran strike operations but force protection mission active.',
    type: 'air',
    priority: 'high'
  },
  {
    id: 'u_feb25_b2_antisurface',
    date: 'Feb 25',
    headline: 'B-2 AND CVW REHEARSE ANTI-SHIP STRIKE MISSIONS OFF CALIFORNIA',
    detail: 'USNI News: B-2 Spirit and Navy carrier air wing fighters rehearsed anti-ship strike missions off California coast. Joint-service maritime strike integration relevant to Strait of Hormuz contingency. B-2 carrying anti-ship munitions (Harpoon upgrade or LRASM adaptation) would represent new capability against Iranian naval forces.',
    type: 'air',
    priority: 'high'
  },
  {
    id: 'u_feb25_rubio_icbm',
    date: 'Feb 25',
    headline: 'RUBIO: IRAN PURSUING ICBMs, REFUSES BALLISTIC MISSILE TALKS — "BIG, BIG PROBLEM"',
    detail: 'Secretary of State Rubio says Iran is actively pursuing intercontinental ballistic missiles and refuses to discuss ballistic missiles in nuclear talks. Calls it a "big, big problem." Iran pursuing ICBMs would represent direct threat to continental US — significant escalation beyond regional delivery systems.',
    type: 'diplomatic',
    priority: 'critical'
  },
  {
    id: 'u_feb25_cnn_weekend',
    date: 'Feb 25',
    headline: 'CNN: TRUMP ADMIN CONSIDERING IRAN STRIKE "AS EARLY AS THIS WEEKEND"',
    detail: 'CNN reports Trump administration has been discussing potential strike on Iran as early as this weekend. Sources: Defense Secretary Hegseth meeting with senior military commanders, Caine briefed. Final decision has not been made. Nuclear talks continuing in parallel — Oman serving as intermediary.',
    type: 'diplomatic',
    priority: 'critical'
  },
  {
    id: 'u_feb25_newsweek_allies',
    date: 'Feb 25',
    headline: 'NEWSWEEK: JORDAN, SAUDI, UAE, QATAR, BAHRAIN, KUWAIT, TURKEY ALL REFUSED BASING',
    detail: 'Newsweek confirms 7 US regional partners refused to allow American forces to use their territory as launchpads for strikes on Iran. Creates acute basing constraint: only Israel (Ovda), carriers (Ford/Lincoln), and potentially CONUS-based bombers available for strike operations. Unprecedented refusal by traditional US partners.',
    type: 'diplomatic',
    priority: 'critical'
  },
  {
    id: 'u_feb25_jinsa_ovda',
    date: 'Feb 25',
    headline: 'JINSA: OVDA DEPLOYMENT "AMERICA JUST ADDED A LAND-BASED AIRCRAFT CARRIER"',
    detail: 'JINSA analysis: Ovda Air Base built to US specifications, making F-22 deployment functionally equivalent to adding a land-based aircraft carrier to the region. First-ever deployment of US combat aircraft to Israel. Distances: Bushehr ~1,540km, Natanz ~1,640km, Tehran ~1,660km — all within F-22 combat radius with tanker support.',
    type: 'air',
    priority: 'high'
  },
  {
    id: 'u_feb25_twz_analysis',
    date: 'Feb 25',
    headline: 'THE WAR ZONE: ALL PIECES NOW IN PLACE FOR POTENTIAL IRAN STRIKE',
    detail: 'TWZ comprehensive analysis: F-22s at Ovda, F-16s at Diego Garcia, F-35As/F-15Es at Jordan, tanker surge, carrier positioning — all final pieces now in place. TWZ notes carrier docking at Haifa would be unprecedented risk. Dispersal strategy across Israel, carriers, and bombers minimizes vulnerability vs concentrated Gulf basing.',
    type: 'analysis',
    priority: 'critical'
  },
  {
    id: 'u_feb25_nyt_f22',
    date: 'Feb 25',
    headline: 'NYT: F-22s ARRIVING IN ISRAEL — FIRST-EVER US COMBAT AIRCRAFT IN ISRAEL',
    detail: 'New York Times confirms F-22 Raptors arriving at Ovda Air Base, marking first-ever deployment of US combat aircraft to Israel. Cited as significant escalation in regional posture. F-22s provide stealth capability and electronic warfare for potential penetration of Iranian integrated air defense system.',
    type: 'air',
    priority: 'critical'
  },
  {
    id: 'u_feb25_wsj_f22',
    date: 'Feb 25',
    headline: 'WSJ: F-22s TO ISRAEL — FIRST WARTIME COMBAT MISSION DEPLOYMENT IN US HISTORY',
    detail: 'Wall Street Journal: F-22 deployment to Israel is first-ever for potential wartime mission. US using Israeli bases to disperse warplanes — critical strategic shift after Gulf partners refused basing. Distances from Ovda make F-22s viable for Iran strike with tanker support.',
    type: 'air',
    priority: 'critical'
  },
  {
    id: 'u_feb25_b21_production',
    date: 'Feb 25',
    headline: 'B-21 RAIDER PRODUCTION CAPACITY BOOSTED 25% — $4.5B ACCELERATION DEAL',
    detail: 'Air Force and Northrop Grumman agreed to boost B-21 production capacity by 25%. $4.5B in approved funding. IOC still 2027 at Ellsworth AFB. Not immediately relevant to Iran contingency (not operational) but signals long-term USAF bomber modernization accelerating.',
    type: 'air',
    priority: 'medium'
  },
  {
    id: 'u_feb25_b52_nuclear',
    date: 'Feb 25',
    headline: 'AFGSC: ALL 76 B-52Hs CAN BE RESTORED TO NUCLEAR CAPABILITY',
    detail: '19FortyFive: AFGSC confirms entire B-52 fleet can be restored to nuclear weapons capability. 30 of 76 currently conventional-only (New START limitations expired). Also confirmed: Minuteman III can be upgraded to MIRV configuration. B-52J upgrade ($2B Rolls-Royce/Boeing contract) ongoing. Not immediate Iran factor but nuclear signaling context.',
    type: 'air',
    priority: 'medium'
  },
  {
    id: 'u_feb24_f22_ovda',
    date: 'Feb 24',
    headline: '11 F-22 RAPTORS LAND AT OVDA, ISRAEL — FIRST EVER US COMBAT AIRCRAFT THERE',
    detail: '11 of 12 F-22s that transited RAF Lakenheath arrived at Ovda Air Base, Negev Desert. One (TREND 66) RTB to Lakenheath with fuel tank leak. Ovda is built to US specifications (JINSA report). This is the first-ever deployment of US combat aircraft to Israeli soil. US Air Force has never before based combat aircraft in Israel.',
    type: 'air',
    priority: 'critical'
  },
  {
    id: 'u_feb24_ford_crete',
    date: 'Feb 24',
    headline: 'USS FORD ARRIVES SOUDA BAY CRETE — RESUPPLY STOP BEFORE EASTERN MED',
    detail: 'USS Gerald R. Ford and CSG-12 arrived at Souda Bay, Crete (NATO facility) for 4-day resupply. Crew morale severely strained (WSJ reports broken toilets, sailors wanting to quit at Day 240+). 19FortyFive: approaching post-Vietnam deployment record of 285 days (USS Truman 2021).',
    type: 'naval',
    priority: 'high'
  },
  {
    id: 'u_feb24_trump_nyt',
    date: 'Feb 24',
    headline: 'NYT: TRUMP CONSIDERING TARGETED IRAN STRIKE FOLLOWED BY LARGER ATTACK',
    detail: 'New York Times reports Trump is considering a targeted initial strike on Iran followed by a larger attack. Pentagon modeling multiple scenarios. Talks with Iran continuing via Oman as intermediary but nuclear demands unresolved. Feb 26: NY Times updates — negotiations reportedly progressing but strike option remains on table.',
    type: 'diplomatic',
    priority: 'critical'
  },
  {
    id: 'u_feb24_uk_diego',
    date: 'Feb 24',
    headline: 'UK DENIES DIEGO GARCIA FOR IRAN STRIKES — STARMER CONFIRMED',
    detail: 'UK PM Starmer confirmed: US cannot use Diego Garcia for bomber strikes against Iran. Significant operational constraint as B-2s previously struck Iran from Diego Garcia (Operation Midnight Hammer). US must find alternative basing or use CONUS-to-target missions with heavy tanker support.',
    type: 'diplomatic',
    priority: 'critical'
  },
  {
    id: 'u_feb24_satellite_jordan',
    date: 'Feb 24',
    headline: 'SATELLITE IMAGERY CONFIRMS 60+ US AIRCRAFT AT MUWAFFAQ SALTI, JORDAN',
    detail: 'Newsweek publishes satellite images confirming 60+ US combat aircraft at Muwaffaq Salti Air Base in Jordan. F-35As, F-15Es, F-16s, A-10C Thunderbolts all visible. THAAD + Patriot batteries emplaced. 68 cargo aircraft delivered munitions/equipment in past week. Largest US air force concentration in Middle East since 2003.',
    type: 'air',
    priority: 'critical'
  },
  {
    id: 'u_feb23_f15e_bunker',
    date: 'Feb 23',
    headline: 'F-15E UNIQUELY CERTIFIED FOR GBU-28 AND GBU-72 BUNKER BUSTERS — CRITICAL IRAN ROLE',
    detail: 'Only USAF fighter certified to carry GBU-28 Hard Target Penetrator (4,700 lbs, penetrates 100ft concrete) and the newer GBU-72 Advanced Bunker Buster. Critical for Iran hardened targets: Fordow enrichment site (buried 80m under mountain), Natanz centrifuge halls. F-15E deployment surge directly linked to need for bunker-busting capability against hardened nuclear sites.',
    type: 'air',
    priority: 'high'
  },
  {
    id: 'u_feb23_f35_norway',
    date: 'Feb 23',
    headline: 'US PULLS F-35s FROM NATO COLD RESPONSE 2026 IN NORWAY — REDIRECTED TO ME',
    detail: 'Norwegian defense officials confirm US pulled F-35s and other assets from Cold Response 2026 exercise in Norway. Redirected to Middle East buildup. Signals priority: Iran contingency now supersedes NATO exercise commitments. Some Vermont ANG F-35s came from Cold Response rotation.',
    type: 'diplomatic',
    priority: 'high'
  },
  {
    id: 'u_feb22_ford_transits',
    date: 'Feb 22',
    headline: 'USS FORD TRANSITS STRAIT OF GIBRALTAR — ENTERING MEDITERRANEAN',
    detail: 'USS Gerald R. Ford and CSG-12 confirmed transiting Strait of Gibraltar on Feb 20. Escorted by USS Mahan (DDG-72), USS Bainbridge (DDG-96), USS Winston S. Churchill (DDG-81). CVW-8 embarked with 4x F/A-18E/F squadrons, EA-18G Growlers, E-2D Hawkeyes.',
    type: 'naval',
    priority: 'high'
  },
  {
    id: 'u_feb21_lincoln_drone',
    date: 'Feb 21',
    headline: 'LINCOLN F-35C SHOOTS DOWN IRANIAN SHAHED-139 DRONE OVER ARABIAN SEA',
    detail: 'Feb 3 incident confirmed by USNI/Forbes: An F-35C from CVW-9 aboard USS Abraham Lincoln shot down an Iranian Shahed-139 drone over the Arabian Sea. Third time CSG-3 has been redirected from Indo-Pacific to Middle East in its current deployment. Lincoln now operating ~500nm south of Iran.',
    type: 'incident',
    priority: 'high'
  },
  {
    id: 'u_feb20_media_line',
    date: 'Feb 20',
    headline: 'MEDIA LINE: LARGEST US MILITARY BUILDUP SINCE 2003 — MULTI-WEEK IRAN STRIKE POSSIBLE',
    detail: 'The Media Line analysis: current US military buildup is the largest since the 2003 Iraq invasion. Reports US military planning for a multi-week strike campaign against Iran — not a single hit. Would target nuclear sites, missile production, IRGC command nodes. 250+ US fighter jets in region (350+ including Europe-based).',
    type: 'analysis',
    priority: 'critical'
  },
  {
    id: 'u_feb20_b52_jasdf',
    date: 'Feb 20',
    headline: 'B-52/JASDF COMBINED ESCORT MISSIONS OVER PACIFIC — FIRST OF 2026',
    detail: 'First B-52 + JASDF fighter escort missions of 2026. 23rd Expeditionary Bomb Squadron B-52Hs from Andersen AFB escorted by JASDF F-15Js (7th, 8th Air Wings) and F-2s (9th Air Wing) Feb 16-18. Demonstrates continued Indo-Pacific bomber task force posture despite Middle East focus.',
    type: 'air',
    priority: 'medium'
  },
  {
    id: 'u_feb18_tanker_azores',
    date: 'Feb 18',
    headline: '15 KC-46A TANKERS AT LAJES FIELD, AZORES — LARGEST SURGE EVER AT THAT BASE',
    detail: 'Largest ever KC-46A Pegasus surge at Lajes Field, Azores. 15 KC-46As positioned for Atlantic bridge role — refueling fighters and bombers crossing from CONUS to Mediterranean/Middle East. Prince Sultan AB activity increasing, Al Udeid decreasing as Qatar distances from conflict.',
    type: 'tanker',
    priority: 'high'
  },
  {
    id: 'u_feb17_f22_lakenheath',
    date: 'Feb 17',
    headline: 'FIRST 6 F-22 RAPTORS ARRIVE RAF LAKENHEATH — START OF MULTI-WAVE DEPLOYMENT',
    detail: 'The Aviationist: First 6 F-22A Raptors from 1st FW (Langley AFB, VA) arrived at RAF Lakenheath, UK — beginning of unprecedented F-22 deployment to region. This wave later continued to Ovda AB, Israel. Multiple subsequent waves followed: total now 24 F-22s deployed.',
    type: 'air',
    priority: 'high'
  },
  {
    id: 'u_feb15_f35_vermont',
    date: 'Feb 15',
    headline: 'VERMONT ANG F-35s DEPLOY TO MIDDLE EAST — SEAD SPECIALISTS',
    detail: 'Vermont Air National Guard 134th Fighter Squadron F-35As deployed to Middle East. These are SEAD specialists — trained for Suppression of Enemy Air Defenses. Critical role against Iranian IADS. Came from Cold Response Norway exercise. Confirmed at Muwaffaq Salti by subsequent satellite imagery.',
    type: 'air',
    priority: 'high'
  },
  {
    id: 'u_feb12_supercarrier_surge',
    date: 'Feb 12',
    headline: '19FORTYFIVE: US NAVY PREPARING TO SEND MULTIPLE CARRIERS TO STRIKE IRAN',
    detail: '19FortyFive analysis: US Navy preparing unprecedented multi-carrier surge to Middle East. At the time: Lincoln in Arabian Sea, Ford transiting Atlantic, Bush spinning up for potential third deployment. Largest carrier concentration since Operation Iraqi Freedom 2003.',
    type: 'naval',
    priority: 'critical'
  },
  {
    id: 'u_feb11_bush_spinup',
    date: 'Feb 11',
    headline: 'PENTAGON ORDERS USS BUSH STRIKE GROUP TO SPIN UP FOR MIDDLE EAST DEPLOYMENT',
    detail: 'The War Zone: Pentagon ordered USS George H.W. Bush (CVN-77) to accelerate COMPTUEX for potential Middle East deployment. This would provide third carrier in Iran theater. Bush CSG includes CVW-7 and DESRON 22.',
    type: 'naval',
    priority: 'critical'
  },
  {
    id: 'u_feb05_lincoln_arabian',
    date: 'Feb 5',
    headline: 'USS LINCOLN CSG CONFIRMED OPERATING IN ARABIAN SEA NEAR IRAN',
    detail: 'Forbes confirms USS Abraham Lincoln carrier strike group operating in Arabian Sea approximately 500nm south of Iran. CSG-3 includes F-35C-equipped CVW-9. Third time this deployment has been redirected from Indo-Pacific to Middle East. F-35C shot down Iranian drone Feb 3.',
    type: 'naval',
    priority: 'high'
  },
  {
    id: 'u_jan20_lincoln_redirect',
    date: 'Jan 20',
    headline: 'USS LINCOLN REDIRECTED FROM SOUTH CHINA SEA TO ARABIAN SEA',
    detail: 'USS Abraham Lincoln and CSG-3 redirected from South China Sea operations to Arabian Sea amid escalating Iran tensions. Previous position: South China Sea. New position: Arabian Sea to provide combat presence near Iranian waters.',
    type: 'naval',
    priority: 'high'
  },
  {
    id: 'u_dec11_washington_maintenance',
    date: 'Dec 11, 2025',
    headline: 'USS GEORGE WASHINGTON RETURNS TO YOKOSUKA FOR MAINTENANCE',
    detail: 'USS George Washington completed 2025 deployment and returned to Yokosuka, Japan for maintenance. Forward-deployed 7th Fleet carrier unlikely to redeploy until second half of 2026. Reduces available carrier assets for any contingency.',
    type: 'naval',
    priority: 'medium'
  },
  {
    id: 'u_nov05_lincoln_deploy',
    date: 'Nov 5, 2025',
    headline: 'USS LINCOLN DEPLOYS FROM SAN DIEGO — NOW ON EXTENDED DEPLOYMENT',
    detail: 'USS Abraham Lincoln and CSG-3 departed San Diego beginning extended deployment. Has since been redirected three times from original Indo-Pacific mission to Middle East operations. Now at Day 115+ of deployment.',
    type: 'naval',
    priority: 'medium'
  },
  {
    id: 'u_jun25_midnight_hammer',
    date: 'Jun 2025',
    headline: 'OPERATION MIDNIGHT HAMMER: 7 B-2s STRUCK FORDOW AND NATANZ WITH 14 MOPs',
    detail: 'Historical context: June 2025, USAF conducted Operation Midnight Hammer — 7 B-2 Spirit stealth bombers struck Iranian nuclear facilities at Fordow and Natanz using 14 GBU-57 Massive Ordnance Penetrators (MOPs). Initial damage was significant but Iran reconstituted and enrichment resumed at backup sites. MOP restocking underway via Boeing contract.',
    type: 'historical',
    priority: 'critical'
  },
  // === ADDITIONAL TICKER ENTRIES — NAVAL SHIPS ===
  {
    id: 'u_feb26_murphy_gulf',
    date: 'Feb 26',
    headline: 'USS MICHAEL MURPHY (DDG-112) ENTERS PERSIAN GULF — INSS CONFIRMS',
    detail: 'INSS (Israeli National Security Studies) confirms USS Michael Murphy (DDG-112) entered the Persian Gulf. Arleigh Burke-class destroyer carries 96 VLS cells (Tomahawk/SM-2/6/ESSM). Persian Gulf entry by DDG represents forward positioning for potential strike mission.',
    type: 'naval',
    priority: 'high'
  },
  {
    id: 'u_feb26_finn_arabian',
    date: 'Feb 26',
    headline: 'USS JOHN FINN (DDG-113) JOINS LINCOLN CSG IN ARABIAN SEA',
    detail: 'USS John Finn (DDG-113, Arleigh Burke Flight IIA) confirmed joining USS Abraham Lincoln carrier strike group in Arabian Sea. Provides additional Tomahawk/SM-6 VLS capacity to CSG-3. Part of Lincoln screen against Iranian surface/submarine forces in Arabian Sea.',
    type: 'naval',
    priority: 'high'
  },
  {
    id: 'u_feb26_black_redsea',
    date: 'Feb 26',
    headline: 'USS DELBERT D. BLACK (DDG-119) MOVES FROM RED SEA TO NORTHERN ARABIAN SEA',
    detail: 'USS Delbert D. Black (DDG-119) departed Red Sea positioning and moved to northern Arabian Sea. Closer proximity to Strait of Hormuz and Iranian naval forces. Arleigh Burke Flight III — newest DDG variant with AN/SPY-6 AESA radar (15x more capable than previous radar).',
    type: 'naval',
    priority: 'high'
  },
  {
    id: 'u_feb26_ap_16ships',
    date: 'Feb 26',
    headline: 'AP CONFIRMS: 16 US WARSHIPS IN MIDDLE EAST — LARGEST FLEET SINCE 2003',
    detail: 'Associated Press and Military Times confirm the US now has at least 16 warships in Middle East waters with USS Ford strike group arrival. This dwarfs the 11-ship Caribbean fleet assembled for Operation South Spear. Experts quoted: forces clearly designed for attacking Iran and defending against retaliation.',
    type: 'naval',
    priority: 'critical'
  },
  {
    id: 'u_feb26_churchill_escort',
    date: 'Feb 26',
    headline: 'USS WINSTON S. CHURCHILL (DDG-81) CONFIRMED ESCORTING USS FORD TO EASTERN MED',
    detail: 'USS Winston S. Churchill (DDG-81) confirmed as Ford CSG escort heading to eastern Mediterranean. Churchill (named for the British PM) carries Tomahawk cruise missiles and SM-2/6 AAW missiles. Part of DESRON 2 screen alongside Mahan and Bainbridge.',
    type: 'naval',
    priority: 'medium'
  },
  {
    id: 'u_feb26_bainbridge_escort',
    date: 'Feb 26',
    headline: 'USS BAINBRIDGE (DDG-96) PART OF FORD CSG ESCORT — EASTERN MEDITERRANEAN',
    detail: 'USS Bainbridge (DDG-96) part of Ford carrier strike group escort heading to eastern Mediterranean. Arleigh Burke Flight IIA destroyer. Provides anti-submarine warfare, anti-air, and Tomahawk strike capability to CSG-12 screen.',
    type: 'naval',
    priority: 'medium'
  },
  // === GROUND/AIR ASSETS ===
  {
    id: 'u_feb26_a10_jordan',
    date: 'Feb 26',
    headline: 'A-10C THUNDERBOLTS CONFIRMED AT MUWAFFAQ SALTI VIA SATELLITE IMAGERY',
    detail: 'Satellite imagery confirms A-10C Thunderbolt II close air support aircraft visible at Muwaffaq Salti AB, Jordan alongside F-35As, F-15Es, and F-16s. A-10 role in Iran contingency unclear — likely for force protection, convoy escort, or post-strike SAR support. Significant: A-10s are survivable low-altitude platforms but vulnerable to modern SAMs.',
    type: 'air',
    priority: 'medium'
  },
  {
    id: 'u_feb25_270_cargo',
    date: 'Feb 25',
    headline: '270+ C-17/C-5 CARGO FLIGHTS SUPPORT BUILDUP — THAAD/PATRIOT SYSTEMS DELIVERED',
    detail: '270+ C-17 Globemaster III and C-5 Galaxy cargo flights have supported the buildup since early January. Delivered: aircraft components, THAAD batteries, Patriot systems, munitions, personnel. 68 cargo planes delivered to Muwaffaq Salti alone in past week.',
    type: 'logistics',
    priority: 'high'
  },
  {
    id: 'u_feb25_politics_today_300',
    date: 'Feb 25',
    headline: 'POLITICS TODAY: 300 US MILITARY AIRCRAFT NOW IN CENTCOM THEATER',
    detail: 'Politics Today analysis: 300 US military aircraft now deployed to CENTCOM theater. Including: 75+ tankers, 44 F-15Es, 42 F-35As, 48 F-16s, 24 F-22s, 10+ ISR aircraft, maritime patrol, cargo. 350+ total including Europe-based (Lakenheath, Aviano, etc.).',
    type: 'analysis',
    priority: 'critical'
  },
  {
    id: 'u_feb25_thaad_jordan',
    date: 'Feb 25',
    headline: 'THAAD BATTERY CONFIRMED AT MUWAFFAQ SALTI ALONGSIDE PATRIOT SYSTEMS',
    detail: 'THAAD (Terminal High Altitude Area Defense) battery emplaced at Muwaffaq Salti AB, Jordan alongside Patriot PAC-3 systems. Provides upper-tier missile defense for Jordan/Israel airspace. 7-7.5 mile intercept range at up to 93-mile altitude. Complements Israeli Arrow 3 and Iron Dome.',
    type: 'missile_defense',
    priority: 'high'
  },
  {
    id: 'u_feb25_ford_morale',
    date: 'Feb 25',
    headline: 'WSJ/19FORTYFIVE: USS FORD CREW MORALE CRISIS — BROKEN TOILETS, SAILORS WANT OUT',
    detail: 'WSJ and 19FortyFive report severe morale crisis aboard USS Gerald R. Ford at Day 240+. Broken toilet systems (advanced waste collection causing sewage backups), sailors expressing desire to leave service after deployment. 19FortyFive: approaching post-Vietnam record of 285 days at sea (USS Truman 2021). Marine Insight: massive toilet failure being managed while ship heads toward potential combat zone.',
    type: 'logistics',
    priority: 'medium'
  },
  {
    id: 'u_feb24_kc46_378aew',
    date: 'Feb 24',
    headline: 'KC-46A PEGASUS FIRST-EVER DEPLOYMENT TO 378TH AEW PRINCE SULTAN AB',
    detail: 'Air & Space Forces Magazine: KC-46A Pegasus deployed to 378th Air Expeditionary Wing at Prince Sultan Air Base, Saudi Arabia for the first time. 77th Expeditionary Air Refueling Squadron from Seymour Johnson AFB. Tanker activity increasing at Prince Sultan AB as Qatar distances itself from Iran conflict.',
    type: 'tanker',
    priority: 'high'
  },
  {
    id: 'u_feb24_fr24_tankers',
    date: 'Feb 24',
    headline: 'FLIGHTRADAR24: TOP 9 MOST-TRACKED FLIGHTS WORLDWIDE ALL KC-135 TANKERS',
    detail: 'Flightradar24 reports the 9 most-tracked military flights globally are all KC-135 Stratotanker refueling aircraft. Unprecedented. Tankers tracked by aviation enthusiasts en route from CONUS to Mediterranean/Middle East. Visible public signal of massive logistics chain supporting the buildup.',
    type: 'tanker',
    priority: 'high'
  },
  {
    id: 'u_feb23_responsible_108',
    date: 'Feb 23',
    headline: 'RESPONSIBLE STATECRAFT: 108 AIR TANKERS POSITIONED FOR IRAN STRIKE',
    detail: 'Responsible Statecraft reports 108 total air tankers in or heading to CENTCOM theater. Includes KC-135 Stratotankers and KC-46A Pegasus. Analysis: tanker fleet is the "hidden key" enabling the buildup — allows fighters and bombers to reach Iran from dispersed bases (Israel, Jordan, carriers, CONUS) without forward basing in Gulf states.',
    type: 'tanker',
    priority: 'high'
  },
  {
    id: 'u_feb22_redsea_houthis',
    date: 'Feb 22',
    headline: 'ONGOING: US NAVY CONTINUING ANTI-HOUTHI OPERATIONS IN RED SEA',
    detail: 'US Navy continuing Operation Prosperity Guardian anti-Houthi operations in Red Sea. Multiple DDGs conducting CIWS intercepts of Houthi UAVs and anti-ship missiles. USS Delbert D. Black (DDG-119) recently departed Red Sea to northern Arabian Sea — potential redeployment to Iran-focused posture.',
    type: 'naval',
    priority: 'medium'
  },
  {
    id: 'u_feb21_isr_24_7',
    date: 'Feb 21',
    headline: 'RC-135/P-8/RQ-4 PROVIDING 24/7 ISR COVERAGE OF IRAN AND HORMUZ',
    detail: 'Flightradar24/aviation OSINT: 3-4 RC-135V/W Rivet Joint SIGINT aircraft on daily orbit over Persian Gulf. P-8A Poseidon maritime patrol, RQ-4 Global Hawk, MQ-9 Reaper all active. 24/7 coverage provides real-time intelligence on Iranian naval movements, missile sites, and air defense radar emissions.',
    type: 'surveillance',
    priority: 'high'
  },
  {
    id: 'u_feb20_angry_kitten',
    date: 'Feb 20',
    headline: 'F-16CJ WILD WEASELS WITH "ANGRY KITTEN" EW PODS — IRAN SEAD MISSION',
    detail: 'The War Zone: F-16CJ Wild Weasel jets deployed with AN/ASQ-213 HARM Targeting Systems and ALQ-184 "Angry Kitten" electronic warfare pods. Mission: Suppression of Enemy Air Defenses (SEAD). Iran operates S-300PMU-2, Bavar-373, and Khordad-15 SAM systems — US SEAD package specifically designed to counter these.',
    type: 'air',
    priority: 'high'
  },
  {
    id: 'u_feb19_f35_sead',
    date: 'Feb 19',
    headline: 'F-35A SEAD PACKAGE: AARGM-ER AND JSOW FOR IRAN AIR DEFENSE SUPPRESSION',
    detail: 'F-35As confirmed carrying AGM-88G AARGM-ER (Advanced Anti-Radiation Guided Missile - Extended Range) for anti-radiation missions. AARGM-ER targets radar emitters — critical against Iranian SA-20/S-300 and Bavar-373 SAM radars. Vermont ANG 134th FS specializes in this mission. Combined with F-16CJ Wild Weasels creates layered SEAD package.',
    type: 'air',
    priority: 'high'
  },
  {
    id: 'u_feb18_ssgn_florida',
    date: 'Feb 18',
    headline: 'USS FLORIDA (SSGN-728) CONFIRMED IN ARABIAN SEA — 154 TOMAHAWKS ABOARD',
    detail: 'USNI confirmed USS Florida (SSGN-728, Ohio-class cruise missile submarine) operating in Arabian Sea as of January 2026. SSGN carries 154 Tomahawk Block V cruise missiles across 22 VLS tubes. Provides massive standoff strike capability against Iranian targets without risking surface ships to Iranian A2/AD.',
    type: 'naval',
    priority: 'high'
  },
  {
    id: 'u_feb17_stratcom_alert',
    date: 'Feb 17',
    headline: 'STRATCOM ON HEIGHTENED ALERT — SSBN PATROLS INCREASED SINCE NOV 2025',
    detail: 'Pentagon confirmed US Strategic Command on heightened alert since November 2025 Iran crisis escalation. Ohio-class SSBN patrols increased. Each SSBN carries up to 20 Trident II D5 SLBMs (MIRV, up to 8 warheads each). Strategic deterrence messaging to prevent Iranian nuclear escalation in response to conventional strikes.',
    type: 'nuclear',
    priority: 'critical'
  },
  {
    id: 'u_feb16_mop_restock',
    date: 'Feb 16',
    headline: 'PENTAGON ORDERS $100M+ MOP RESTOCK — BOEING CONTRACT FOR MASSIVE ORDNANCE PENETRATORS',
    detail: 'Air & Space Forces: Pentagon awarded Boeing contract to restock GBU-57 Massive Ordnance Penetrators used in Operation Midnight Hammer (June 2025). MOPs cost ~$3.5M each. Contract implies depletion from previous strikes. GBU-57 is the only US weapon capable of destroying deeply buried targets like Fordow (80m underground).',
    type: 'logistics',
    priority: 'high'
  },
  {
    id: 'u_feb15_cargo_munitions',
    date: 'Feb 15',
    headline: '68 CARGO AIRCRAFT DELIVERED MUNITIONS TO MUWAFFAQ SALTI IN ONE WEEK',
    detail: '68 cargo aircraft (C-17s and C-5s) delivered munitions, equipment, and aircraft components to Muwaffaq Salti AB, Jordan in a single week. Scale equivalent to early OIF/OEF buildup rates. GBU-28 bunker busters, AIM-120D AMRAAMs, AGM-154 JSOWs, and JDAM-ER kits confirmed in manifest.',
    type: 'logistics',
    priority: 'high'
  },
  {
    id: 'u_feb14_cvn71_workup',
    date: 'Feb 14',
    headline: 'USS THEODORE ROOSEVELT IN COMPTUEX — COULD DEPLOY SPRING 2026',
    detail: 'USS Theodore Roosevelt (CVN-71) and CSG-9 conducting COMPTUEX off San Diego. Previous deployment was 278 days. Earliest possible deployment: late spring 2026. Could join Ford and Lincoln in Middle East for unprecedented three-carrier Iran theater if ordered to expedite.',
    type: 'naval',
    priority: 'medium'
  },
  {
    id: 'u_feb13_uk_sovereignty',
    date: 'Feb 13',
    headline: 'UK-MAURITIUS SOVEREIGNTY DISPUTE OVER DIEGO GARCIA — COMPLICATES US BASING',
    detail: 'Ongoing UK-Mauritius negotiations over Diego Garcia sovereignty add legal complexity to US basing rights. UK refusing to grant US bomber strike access (citing political and legal complications). Mauritius claims the Chagos Islands (including Diego Garcia) were illegally detached during decolonization.',
    type: 'diplomatic',
    priority: 'medium'
  },
  {
    id: 'u_feb10_lajes_surge',
    date: 'Feb 10',
    headline: 'LAJES FIELD, AZORES HOSTING LARGEST TANKER SURGE IN BASE HISTORY',
    detail: '15 KC-46A Pegasus tankers at Lajes Field, Azores — largest in the base\'s history. Lajes plays critical Atlantic bridge role: refueling fighters and bombers crossing from US East Coast to Europe/Mediterranean. The island\'s strategic mid-Atlantic location makes it irreplaceable for CONUS-to-theater operations.',
    type: 'tanker',
    priority: 'high'
  },
  {
    id: 'u_feb09_ford_250days',
    date: 'Feb 9',
    headline: 'USS FORD PASSES 200 DAYS DEPLOYED — APPROACHING RECORD TERRITORY',
    detail: 'USS Gerald R. Ford passed 200-day deployment milestone. Post-Vietnam record: 285 days (USS Harry S. Truman, 2021). Ford is at Day 210+ when this update was logged, now 250+ (Feb 26). 19FortyFive notes historical context: longest carrier deployment reflects extraordinary strategic demands.',
    type: 'naval',
    priority: 'medium'
  },
  {
    id: 'u_feb08_hormuz_patrols',
    date: 'Feb 8',
    headline: 'US WARSHIPS INCREASING STRAIT OF HORMUZ TRANSIT FREQUENCY — IRGCN MONITORING',
    detail: 'US Navy increasing Strait of Hormuz freedom of navigation transits. IRGCN (Islamic Revolutionary Guard Corps Navy) fast boats and submarines monitoring all US transits. USS Michael Murphy transit to Persian Gulf is latest example. Hormuz is 21-mile wide choke point — critical vulnerability for oil tanker traffic and US naval movement.',
    type: 'naval',
    priority: 'medium'
  },
  {
    id: 'u_feb07_oman_talks',
    date: 'Feb 7',
    headline: 'OMAN MEDIATING US-IRAN NUCLEAR TALKS — PARALLEL TO MILITARY BUILDUP',
    detail: 'Oman serving as intermediary for US-Iran nuclear talks running parallel to the military buildup. Trump administration insists Iran dismantle nuclear program entirely. Iran rejecting full dismantlement. Gap: Iran willing to limit enrichment but not end program. Rubio (Feb 25): Iran refusing to discuss ballistic missiles — additional dealbreaker.',
    type: 'diplomatic',
    priority: 'critical'
  },
  {
    id: 'u_feb06_irgcn_threat',
    date: 'Feb 6',
    headline: 'IRGCN ASYMMETRIC THREAT: FAST BOATS, MINES, ANTI-SHIP MISSILES IN HORMUZ',
    detail: 'Intelligence assessment: IRGCN posing asymmetric threats in Strait of Hormuz. Noor anti-ship missile (Mach 3, 300km range), Khalij Fars ballistic missile (anti-ship), Nasr anti-ship missile (smaller vessels), and contact/pressure mines. IRGCN fast boat swarm tactics designed to overwhelm US DDG close-in defenses. US SSNs providing counter-mine and ASW screen.',
    type: 'analysis',
    priority: 'high'
  },
  {
    id: 'u_feb05_iran_enrichment',
    date: 'Feb 5',
    headline: 'IAEA: IRAN CONTINUING 60% ENRICHMENT — NUCLEAR BREAKOUT ESTIMATED 1-2 WEEKS',
    detail: 'IAEA report: Iran continuing uranium enrichment at 60% purity at Fordow and Natanz backup sites. Sufficient enriched uranium for multiple weapons (90% threshold). Nuclear breakout time (enrichment to weapons-grade): estimated 1-2 weeks if decision made. Weaponization (building actual warhead): 6-18 months additional. This intelligence is the core driver of the US military buildup.',
    type: 'diplomatic',
    priority: 'critical'
  },
  {
    id: 'u_feb04_iran_defense',
    date: 'Feb 4',
    headline: 'IRAN AIR DEFENSE: S-300PMU-2, BAVAR-373, KHORDAD-15 — FORMIDABLE IADS',
    detail: 'Iran operates an Integrated Air Defense System (IADS): S-300PMU-2 (SA-20) at key sites, indigenously-developed Bavar-373 (S-300 equivalent), and Khordad-15 (medium-range). F-22/F-35 stealth essential to penetrate. F-16CJ Wild Weasels with HARM missiles target radar emitters. EA-18G Growlers from CVW-8 provide dedicated electronic attack. Multi-layer SEAD required.',
    type: 'analysis',
    priority: 'high'
  },
  {
    id: 'u_feb03_shahed_shootdown',
    date: 'Feb 3',
    headline: 'F-35C SHOOTS DOWN IRANIAN SHAHED-139 DRONE OVER ARABIAN SEA',
    detail: 'USS Lincoln CVW-9 F-35C shot down Iranian Shahed-139 loitering munition over Arabian Sea. Shahed-139 (Iranian-made) same type supplied to Russia for Ukraine war. Incident at ~500nm south of Iran. No US casualties, no escalation. Third Lincoln redirect to ME theater. Confirmed by USNI and Forbes.',
    type: 'incident',
    priority: 'high'
  },
  {
    id: 'u_feb02_31meu_exercise',
    date: 'Feb 2',
    headline: '31ST MEU CONDUCTS MECHANIZED RAID EXERCISE IN PHILIPPINE SEA',
    detail: 'USMC 31st Marine Expeditionary Unit conducted mechanized raid exercise in Philippine Sea. USS Tripoli (LHA-7) serving as forward-deployed ARG platform. Exercise includes AAV assault, helo insertion, and amphibious raid. Demonstrates INDOPACOM capabilities maintained despite ME focus.',
    type: 'naval',
    priority: 'low'
  },
  {
    id: 'u_feb01_iran_missiles',
    date: 'Feb 1',
    headline: 'IRAN BALLISTIC MISSILE FORCE: 3,000+ MISSILES INCLUDING SHAHAB-3, EMAD, GHADR',
    detail: 'Iran ballistic missile inventory: Shahab-3 (1,300km range), Emad (1,700km, precision-guided), Ghadr (1,950km), Khorramshahr (2,000km MIRV), Sejjil (2,500km solid-fuel). Kheibar Shekan (1,450km, precision, maneuvering RV). Total: 3,000+ missiles. THAAD and Patriot provide partial defense. Threat to US bases in region and Israel/Saudi Arabia.',
    type: 'analysis',
    priority: 'high'
  },
  {
    id: 'u_jan25_israel_arrow',
    date: 'Jan 25',
    headline: 'ISRAEL ARROW 3 AND IRON DOME INTEGRATED WITH US THAAD/PATRIOT',
    detail: 'Israeli Arrow 3 (exo-atmospheric intercept) and Iron Dome (short-range rockets/mortars) integrated with US THAAD (upper tier) and Patriot PAC-3 (terminal phase). Multi-layered defense against Iranian ballistic missiles and cruise missiles. US-Israel joint air defense exercises Jan 2026. Barak-8 naval variant on Israeli/US ships.',
    type: 'missile_defense',
    priority: 'high'
  },
  {
    id: 'u_jan20_iran_oman',
    date: 'Jan 20',
    headline: 'TRUMP SENDS LETTER TO IRAN — OMAN DELIVERS AS INTERMEDIARY',
    detail: 'Trump sent personal letter to Iran Supreme Leader via Oman on Jan 20, 2026 — same day of Lincoln redirect to Arabian Sea. Letter: accept deal or face military action. Iran initial response: negative. Oman continued as intermediary. Feb 7 context: talks resumed but fundamental gap on dismantlement vs. limitation remains.',
    type: 'diplomatic',
    priority: 'critical'
  },
  {
    id: 'u_jan15_florida_arabian',
    date: 'Jan 15',
    headline: 'USS FLORIDA SSGN OPERATING IN ARABIAN SEA — CONFIRMED BY USNI TRACKER',
    detail: 'USNI Fleet Tracker (Jan 2026): USS Florida (SSGN-728) operating in Arabian Sea. Ohio-class conversion carries 154 BGM-109 Tomahawk Block V cruise missiles in 22 of 24 Trident missile tubes (2 tubes converted to lock-out chambers for special operations). Single submarine equals the strike capacity of a DDG squadron.',
    type: 'naval',
    priority: 'high'
  },
  {
    id: 'u_jan10_centcom_surge',
    date: 'Jan 10',
    headline: 'CENTCOM SURGE ORDER: ALL AVAILABLE FORCES ACCELERATE MIDDLE EAST DEPLOYMENT',
    detail: 'Pentagon issued CENTCOM surge orders Jan 10, 2026 following Iran intelligence reports of accelerated enrichment. All available air, naval, and ground forces directed to accelerate deployment to theater. This triggered the subsequent waves of fighter jets, tankers, carriers, and missile defense systems now flowing into the region.',
    type: 'logistics',
    priority: 'critical'
  },
  {
    id: 'u_jan05_iran_fordow',
    date: 'Jan 5',
    headline: 'INTELLIGENCE: IRAN REBUILDING FORDOW UNDERGROUND FACILITY AFTER JUNE 2025 STRIKES',
    detail: 'Intelligence reports: Iran rapidly rebuilding and deepening Fordow underground enrichment facility after June 2025 bombing. Using $100B+ in assets unfrozen under 2023 JCPOA partial deal. New tunnels being dug at lower levels — targeting depth may require improved MOPs or multiple B-2 strikes. MOPs must penetrate 80m minimum.',
    type: 'analysis',
    priority: 'critical'
  },
  {
    id: 'u_dec25_bush_comptuex',
    date: 'Dec 25, 2025',
    headline: 'USS GEORGE H.W. BUSH BEGINS COMPTUEX — POTENTIAL DEPLOYMENT TRACK',
    detail: 'USS George H.W. Bush (CVN-77) and CSG-10 began COMPTUEX exercises off East Coast in late December 2025. At this point Pentagon had not ordered Middle East deployment. Feb 11, 2026: Pentagon ordered spin-up — COMPTUEX now accelerated for potential Iran deployment. Escorts Ross and Mason confirmed.',
    type: 'naval',
    priority: 'medium'
  },
  {
    id: 'u_dec20_mop_contract',
    date: 'Dec 20, 2025',
    headline: 'BOEING AWARDED MOP RESTOCK CONTRACT — $100M+ FOR GBU-57 PRODUCTION',
    detail: 'Boeing awarded contract to restock GBU-57 Massive Ordnance Penetrator inventory following Operation Midnight Hammer. $100M+ contract. Production timeline: 18-24 months for full restock. However, sufficient existing inventory (pre-Midnight Hammer stockpile) to conduct follow-on strikes. Fordow is primary target requiring MOPs.',
    type: 'logistics',
    priority: 'high'
  },
  {
    id: 'u_dec15_lincoln_f35c',
    date: 'Dec 15, 2025',
    headline: 'CVW-9 F-35Cs: FIRST CARRIER WING WITH FULL F-35C SQUADRON IN COMBAT ZONE',
    detail: 'USS Lincoln CVW-9 is operating the first full F-35C Lightning II squadron (VFA-147 Argonauts) in an active combat zone. F-35C provides stealth, sensor fusion, and network-centric warfare capability not available on F/A-18E/F. Critical for penetrating Iranian IADS and providing targeting data to non-stealth aircraft.',
    type: 'air',
    priority: 'high'
  },
  {
    id: 'u_dec10_irgc_hardening',
    date: 'Dec 10, 2025',
    headline: 'IRGC HARDENING DISPERSED COMMAND CENTERS — DISPERSAL AFTER JUNE 2025 STRIKES',
    detail: 'Intelligence reports: IRGC hardening and dispersing command and control centers after June 2025 Operation Midnight Hammer. Using tunnel networks, mobile command posts, and multiple backup comms. Harder targeting problem than June 2025. US adding B-2 anti-radiation and direct-attack options.',
    type: 'analysis',
    priority: 'high'
  },
  {
    id: 'u_nov25_stratcom_alert',
    date: 'Nov 25, 2025',
    headline: 'STRATCOM HEIGHTENED ALERT DECLARED — SSBN PATROLS INCREASED',
    detail: 'US Strategic Command declared heightened alert status November 2025. SSBN patrols increased from normal rotation. Purpose: deter Iranian nuclear retaliation (or acceleration of program) in response to any US conventional strike. Ohio-class SSBNs carry Trident II D5 SLBMs.',
    type: 'nuclear',
    priority: 'critical'
  },
  {
    id: 'u_nov15_midnight_hammer_aftermath',
    date: 'Nov 15, 2025',
    headline: 'MIDNIGHT HAMMER AFTERMATH: IRAN RECONSTITUTING AT BACKUP SITES',
    detail: 'Post-Midnight Hammer assessment: Iran damaged but not destroyed. Fordow damaged but using backup sites. Natanz centrifuge halls hit but rebuilding in hardened tunnels. Enrichment paused for weeks, then resumed at dispersed sites. US intelligence: Iran accelerating timeline to weapons-grade material in response to June 2025 strikes.',
    type: 'analysis',
    priority: 'critical'
  },
  {
    id: 'u_oct15_iran_reconstitute',
    date: 'Oct 15, 2025',
    headline: 'IAEA: IRAN RESUMED ENRICHMENT AT DISPERSED SITES — HARDER TO TARGET',
    detail: 'IAEA confirms Iran resumed uranium enrichment at dispersed, hardened sites after June 2025 strikes. Some sites unknown to IAEA inspectors. US intelligence tracking via NRO satellites and RC-135 SIGINT. Multiple backup enrichment cascades harder to target in follow-on strike. Drives need for comprehensive multi-site strike campaign (not just 1-2 targets).',
    type: 'diplomatic',
    priority: 'critical'
  },
  {
    id: 'u_sep25_bavar373',
    date: 'Sep 25, 2025',
    headline: 'IRAN DEPLOYS ADDITIONAL BAVAR-373 BATTERIES — UPGRADES AIR DEFENSE AFTER HAMMER',
    detail: 'Iran deployed additional Bavar-373 air defense batteries following Operation Midnight Hammer. Bavar-373 is Iran\'s indigenously-developed S-300 equivalent. Range: 200km. Altitude: 27km. ECCM-resistant radar. Deployed to protect rebuilt nuclear sites and Tehran/Isfahan. US SEAD package (F-22, F-35, F-16CJ, EA-18G) specifically designed to defeat Bavar-373.',
    type: 'analysis',
    priority: 'high'
  }
];

// === FILTER STATE ===
let activeFilters = new Set();
let activeTypeFilters = new Set();
let activeConfidenceFilters = new Set();
let timelineFilter = null; // { start: Date, end: Date } or null for all
let activeRegions = new Set(); // 'ME' | 'PACIFIC' | 'ATLANTIC' | 'OTHER'

// ============================================================
// RENDERING
// ============================================================

function renderAssets() {
  // ... (rendering logic)
}

// ============================================================
// FILTER FUNCTIONS
// ============================================================

function buildTypeFilter() {
  const container = document.getElementById('typeFilterContainer');
  if (!container) return;
  container.innerHTML = '';

  const typeGroups = {};
  assets.forEach(asset => {
    const def = ASSET_TYPES[asset.type];
    if (!def) return;
    const group = def.filterGroup;
    if (!typeGroups[group]) typeGroups[group] = { type: asset.type, color: def.color, count: 0 };
    typeGroups[group].count++;
  });

  Object.entries(typeGroups).forEach(([group, info]) => {
    const btn = document.createElement('button');
    btn.className = 'filter-btn' + (activeTypeFilters.has(info.type) ? ' active' : '');
    btn.style.borderColor = info.color;
    if (activeTypeFilters.has(info.type)) btn.style.backgroundColor = info.color + '33';
    btn.textContent = `${group} (${info.count})`;
    btn.addEventListener('click', () => {
      if (activeTypeFilters.has(info.type)) {
        activeTypeFilters.delete(info.type);
      } else {
        activeTypeFilters.add(info.type);
      }
      renderAssets();
      buildTypeFilter();
    });
    container.appendChild(btn);
  });
}

function buildConfidenceFilter() {
  const container = document.getElementById('confidenceFilterContainer');
  if (!container) return;
  container.innerHTML = '';

  const levels = [
    { key: 'confirmed', label: 'CONFIRMED', color: '#4CAF50' },
    { key: 'likely', label: 'LIKELY', color: '#FFC107' },
    { key: 'unconfirmed', label: 'UNCONFIRMED', color: '#F44336' }
  ];

  levels.forEach(level => {
    const count = assets.filter(a => a.confidence === level.key).length;
    if (count === 0) return;
    const btn = document.createElement('button');
    btn.className = 'filter-btn' + (activeConfidenceFilters.has(level.key) ? ' active' : '');
    btn.style.borderColor = level.color;
    if (activeConfidenceFilters.has(level.key)) btn.style.backgroundColor = level.color + '33';
    btn.textContent = `${level.label} (${count})`;
    btn.addEventListener('click', () => {
      if (activeConfidenceFilters.has(level.key)) {
        activeConfidenceFilters.delete(level.key);
      } else {
        activeConfidenceFilters.add(level.key);
      }
      renderAssets();
      buildConfidenceFilter();
    });
    container.appendChild(btn);
  });
}

function buildTimelineFilter() {
  const container = document.getElementById('timelineFilterContainer');
  if (!container) return;
  container.innerHTML = '';

  // Build date range from all movement dates
  const dates = assets
    .filter(a => a.movementDate)
    .map(a => new Date(a.movementDate))
    .sort((a, b) => a - b);

  if (dates.length === 0) return;

  const minDate = dates[0];
  const maxDate = dates[dates.length - 1];

  // Create slider container
  const sliderDiv = document.createElement('div');
  sliderDiv.className = 'timeline-slider-container';

  const label = document.createElement('div');
  label.className = 'timeline-label';
  label.textContent = timelineFilter
    ? `Showing movements: ${timelineFilter.start.toLocaleDateString()} – ${timelineFilter.end.toLocaleDateString()}`
    : 'Showing all movements';

  const resetBtn = document.createElement('button');
  resetBtn.className = 'filter-btn';
  resetBtn.textContent = 'Reset Timeline';
  resetBtn.addEventListener('click', () => {
    timelineFilter = null;
    renderAssets();
    buildTimelineFilter();
  });

  sliderDiv.appendChild(label);
  sliderDiv.appendChild(resetBtn);
  container.appendChild(sliderDiv);
}

function updateMovementCount() {
  const countEl = document.getElementById('movementCount');
  if (!countEl) return;
  const visible = assets.filter(asset => {
    if (activeTypeFilters.size > 0 && !activeTypeFilters.has(asset.type)) return false;
    if (activeConfidenceFilters.size > 0 && !activeConfidenceFilters.has(asset.confidence)) return false;
    return true;
  });
  countEl.textContent = visible.length;
}

buildTimelineFilter();
updateMovementCount();
