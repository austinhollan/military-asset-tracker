// ============================================================
// US MILITARY ASSET TRACKER — app.js
// ============================================================

// ─── ASSET TYPE DEFINITIONS ───────────────────────────────
const ASSET_TYPES = {
  carrier:       { label: 'Aircraft Carrier',      color: '#1a73e8', shape: 'diamond' },
  destroyer:     { label: 'Destroyer / Cruiser',   color: '#0d47a1', shape: 'square'  },
  submarine:     { label: 'Submarine',              color: '#1565c0', shape: 'triangle'},
  bomber:        { label: 'Strategic Bomber',       color: '#b71c1c', shape: 'diamond' },
  fighter:       { label: 'Fighter / Strike',       color: '#c62828', shape: 'circle'  },
  isr:           { label: 'ISR / Recon',            color: '#6a1b9a', shape: 'circle'  },
  tanker:        { label: 'Tanker / Logistics',     color: '#4a148c', shape: 'square'  },
  transport:     { label: 'Transport / Lift',       color: '#880e4f', shape: 'square'  },
  base:          { label: 'Base / FOB',             color: '#2e7d32', shape: 'square'  },
  marines:       { label: 'Marine Expeditionary',  color: '#827717', shape: 'diamond' },
  army:          { label: 'Army / Ground Forces',  color: '#33691e', shape: 'square'  },
  specialops:    { label: 'Special Operations',    color: '#bf360c', shape: 'triangle'},
  missile:       { label: 'Missile / Air Defense',  color: '#e65100', shape: 'triangle'},
  ally:          { label: 'Allied Asset',           color: '#00695c', shape: 'circle'  },
  adversary:     { label: 'Adversary Asset',        color: '#b71c1c', shape: 'triangle'},
};

// ─── ASSETS ───────────────────────────────────────────────
const assets = [

  // ── CARRIERS & STRIKE GROUPS ──────────────────────────
  {
    id: 'cvn68', name: 'USS Nimitz (CVN-68)', type: 'carrier',
    lat: 25.0, lng: 56.5,
    status: 'deployed',
    summary: 'CVN-68 operating in the Arabian Gulf / Strait of Hormuz approaches as of Feb 2026. Part of Nimitz CSG supporting CENTCOM operations.',
    details: 'Nimitz CSG: CVN-68 + CG-54 Antietam + DDG-84 Bulkeley + DDG-107 Gravely + SSN fast-attack + CSDS. Air wing includes F/A-18E/F, EA-18G, E-2D.',
    region: 'CENTCOM',
    link: 'https://www.navy.mil/Press-Office/News-Stories/Article/4042000/'
  },
  {
    id: 'cvn75', name: 'USS Harry S. Truman (CVN-75)', type: 'carrier',
    lat: 36.5, lng: 23.0,
    status: 'deployed',
    summary: 'Truman CSG operating in the Eastern Mediterranean as of Feb 25, 2026.',
    details: 'Truman CSG: CVN-75 + CG-56 San Jacinto + DDG-71 Ross + DDG-95 James E. Williams + DDG-106 Stockdale. CVW-1 embarked.',
    region: 'EUCOM',
    link: 'https://www.navy.mil/'
  },
  {
    id: 'cvn70', name: 'USS Carl Vinson (CVN-70)', type: 'carrier',
    lat: 14.0, lng: 120.0,
    status: 'deployed',
    summary: 'Carl Vinson CSG operating in the South China Sea / Western Pacific as of Feb 2026.',
    details: 'Vinson CSG: CVN-70 + CG-52 Bunker Hill + DDG-96 Bainbridge + DDG-101 Gridley. CVW-2 embarked with F/A-18E/F Super Hornets.',
    region: 'INDOPACOM',
    link: 'https://www.navy.mil/'
  },
  {
    id: 'cvn77', name: 'USS George H.W. Bush (CVN-77)', type: 'carrier',
    lat: 36.8, lng: -6.5,
    status: 'underway',
    summary: 'Bush CSG in the Atlantic, conducting workups/transit as of Feb 2026.',
    details: 'CVN-77 completed maintenance period; conducting pre-deployment workups in the Atlantic with CSG escorts.',
    region: 'NAVEUR',
    link: 'https://www.navy.mil/'
  },
  {
    id: 'cvn73', name: 'USS George Washington (CVN-73)', type: 'carrier',
    lat: 35.4, lng: 139.8,
    status: 'homeport',
    summary: 'GW homeported at Yokosuka, Japan — forward-deployed carrier as of Feb 2026.',
    details: 'CVN-73 is the forward-deployed nuclear carrier at Yokosuka. CSG includes DDG escorts. CVW-5 embarked.',
    region: 'INDOPACOM',
    link: 'https://www.navy.mil/'
  },

  // ── CENTCOM SURFACE / AMPHIBIOUS ──────────────────────
  {
    id: 'lhd5', name: 'USS Bataan (LHD-5)', type: 'marines',
    lat: 27.5, lng: 55.0,
    status: 'deployed',
    summary: 'Bataan ARG/22nd MEU operating in the Arabian Gulf / CENTCOM AOR as of Feb 2026.',
    details: 'Bataan Amphibious Ready Group with 22nd Marine Expeditionary Unit embarked. LHD-5 + LPD + LSD.',
    region: 'CENTCOM',
    link: 'https://www.navy.mil/'
  },
  {
    id: 'lha7', name: 'USS Tripoli (LHA-7)', type: 'marines',
    lat: 21.5, lng: 59.5,
    status: 'deployed',
    summary: 'Tripoli ARG operating in the Arabian Sea / CENTCOM AOR as of Feb 2026. F-35B capable.',
    details: 'LHA-7 Tripoli with embarked Marine aviation (F-35B, MV-22). Part of Tripoli ARG supporting CENTCOM.',
    region: 'CENTCOM',
    link: 'https://www.navy.mil/'
  },

  // ── INDOPACOM SURFACE ─────────────────────────────────
  {
    id: 'lhd8', name: 'USS Makin Island (LHD-8)', type: 'marines',
    lat: 22.5, lng: 114.0,
    status: 'deployed',
    summary: 'Makin Island ARG / 13th MEU in the South China Sea as of Feb 2026.',
    details: 'Makin Island ARG: LHD-8 + LPD-27 Portland + LSD-50 Carter Hall. 13th MEU embarked.',
    region: 'INDOPACOM',
    link: 'https://www.navy.mil/'
  },

  // ── SUBMARINES ────────────────────────────────────────
  {
    id: 'ssbn_pac', name: 'SSBN Pacific Deterrent Patrol', type: 'submarine',
    lat: 40.0, lng: 165.0,
    status: 'deployed',
    summary: 'Ohio-class SSBN on strategic deterrent patrol in the Pacific as of Feb 2026.',
    details: 'One or more Ohio-class SSBNs (exact hull classified) conducting continuous at-sea deterrent patrols in the Pacific. Armed with Trident II D5 SLBMs.',
    region: 'INDOPACOM',
    link: 'https://www.navy.mil/'
  },
  {
    id: 'ssgn_ind', name: 'SSGN Arabian Sea', type: 'submarine',
    lat: 18.0, lng: 63.0,
    status: 'deployed',
    summary: 'Ohio-class SSGN or fast-attack SSN forward deployed in the Arabian Sea / CENTCOM AOR.',
    details: 'SSGN/SSN supporting CENTCOM. Ohio-class SSGNs carry up to 154 Tomahawk cruise missiles. Provides strike and SOF insertion capability.',
    region: 'CENTCOM',
    link: 'https://www.navy.mil/'
  },

  // ── STRATEGIC BOMBERS ────────────────────────────────
  {
    id: 'b2_whiteman', name: 'B-2 Spirit Fleet (Whiteman AFB)', type: 'bomber',
    lat: 38.7, lng: -93.5,
    status: 'homeport',
    summary: '20 operational B-2 Spirits homeported at Whiteman AFB, Missouri. Conducted Diego Garcia deployments in late 2024 / early 2025.',
    details: 'USAF 509th BW operates ~20 B-2s. Stealth nuclear/conventional bomber. Recent deployments: Diego Garcia (Indian Ocean) for CENTCOM reach. Carries B61-12 and B83 nuclear gravity bombs, plus conventional standoff weapons.',
    region: 'CONUS',
    link: 'https://www.af.mil/'
  },
  {
    id: 'b52_minot', name: 'B-52H Fleet (Minot AFB)', type: 'bomber',
    lat: 48.4, lng: -101.3,
    status: 'homeport',
    summary: 'B-52H Stratofortresses at Minot AFB. Regularly deploy to Guam and Diego Garcia for INDOPACOM/CENTCOM missions.',
    details: 'USAF 5th BW at Minot. B-52H carries AGM-86 ALCMs, JASSM-ER, conventional bombs. Continuous Bomber Presence (CBP) missions from Andersen AFB Guam. Nuclear-capable.',
    region: 'CONUS',
    link: 'https://www.af.mil/'
  },
  {
    id: 'b52_guam', name: 'B-52H Rotational Det. (Andersen AFB)', type: 'bomber',
    lat: 13.6, lng: 144.9,
    status: 'deployed',
    summary: 'B-52H rotational deployment at Andersen AFB, Guam as part of Continuous Bomber Presence mission.',
    details: 'PACAF Continuous Bomber Presence: rotating det of B-52Hs at Andersen. Conducts freedom-of-navigation overflights and exercises with allies in INDOPACOM.',
    region: 'INDOPACOM',
    link: 'https://www.pacom.mil/'
  },
  {
    id: 'b1_ellsworth', name: 'B-1B Lancer Fleet (Ellsworth AFB)', type: 'bomber',
    lat: 44.1, lng: -103.1,
    status: 'homeport',
    summary: 'B-1B Lancers at Ellsworth AFB, SD. Long-range conventional strike aircraft.',
    details: '28th BW B-1Bs. Conventional-only since nuclear mission retired. Carries JASSM, JDAM, LRASM. Frequently rotates to Guam and Middle East.',
    region: 'CONUS',
    link: 'https://www.af.mil/'
  },

  // ── FIGHTER / STRIKE WINGS ───────────────────────────
  {
    id: 'f35_israel', name: 'F-35A Det. (Nevatim AB, Israel)', type: 'fighter',
    lat: 31.2, lng: 35.0,
    status: 'deployed',
    summary: 'USAF F-35A detachment at Nevatim AB, Israel — supporting regional deterrence.',
    details: 'Rotational USAF F-35A deployment supporting Israeli Air Force interoperability and CENTCOM deterrence posture.',
    region: 'CENTCOM',
    link: 'https://www.af.mil/'
  },
  {
    id: 'f22_uae', name: 'F-22 Raptor Det. (Al Dhafra AB, UAE)', type: 'fighter',
    lat: 24.25, lng: 54.55,
    status: 'deployed',
    summary: 'F-22 Raptors forward deployed to Al Dhafra AB, UAE for air superiority and deterrence.',
    details: 'Rotating det of F-22As at Al Dhafra. 5th-gen air superiority for CENTCOM. Pairs with F-35s for penetrating strike packages.',
    region: 'CENTCOM',
    link: 'https://www.af.mil/'
  },
  {
    id: 'f16_incirlik', name: 'F-16 Wing (Incirlik AB, Turkey)', type: 'fighter',
    lat: 37.0, lng: 35.4,
    status: 'deployed',
    summary: 'USAF F-16s at Incirlik AB, Turkey. NATO posture, dual-use base.',
    details: 'USAF maintains rotational F-16 presence at Incirlik. Base is NATO-designated and hosts US nuclear weapons under NATO sharing arrangements.',
    region: 'EUCOM',
    link: 'https://www.af.mil/'
  },
  {
    id: 'f35_japan', name: 'F-35A/B (Kadena/Iwakuni, Japan)', type: 'fighter',
    lat: 26.4, lng: 127.8,
    status: 'deployed',
    summary: 'USAF F-35As at Kadena AB, Okinawa; USMC F-35Bs at MCAS Iwakuni.',
    details: 'F-35A: 18th Wing Kadena transition from F-15 to F-35. F-35B: VMFA squadrons at Iwakuni. Primary INDOPACOM 5th-gen presence.',
    region: 'INDOPACOM',
    link: 'https://www.pacom.mil/'
  },

  // ── ISR / RECON ──────────────────────────────────────
  {
    id: 'rq4_guam', name: 'RQ-4 Global Hawk (Andersen AFB)', type: 'isr',
    lat: 13.55, lng: 144.85,
    status: 'deployed',
    summary: 'RQ-4 Global Hawk ISR missions over Western Pacific from Andersen AFB.',
    details: 'USAF RQ-4s provide persistent wide-area ISR in INDOPACOM. Monitor PRC naval activity, DPRK missile tests. Occasionally deployed to CENTCOM.',
    region: 'INDOPACOM',
    link: 'https://www.af.mil/'
  },
  {
    id: 'rc135_uk', name: 'RC-135 Rivet Joint (RAF Mildenhall)', type: 'isr',
    lat: 52.36, lng: 0.48,
    status: 'deployed',
    summary: 'RC-135V/W Rivet Joint SIGINT aircraft operating from RAF Mildenhall, UK.',
    details: 'USAf 95th RS RC-135s at Mildenhall. Conduct SIGINT collection over Eastern Europe, Russia, and Middle East. High ops tempo since 2022.',
    region: 'EUCOM',
    link: 'https://www.af.mil/'
  },
  {
    id: 'u2_osan', name: 'U-2 Dragon Lady (Osan AB, South Korea)', type: 'isr',
    lat: 37.1, lng: 127.0,
    status: 'deployed',
    summary: 'U-2S Dragon Lady operating from Osan AB for INDOPACOM/DPRK ISR.',
    details: '5th RS U-2s at Osan. Monitor DPRK missile/nuclear activity and PRC military movements. Fly at 70,000+ ft.',
    region: 'INDOPACOM',
    link: 'https://www.af.mil/'
  },

  // ── TANKERS / LOGISTICS ──────────────────────────────
  {
    id: 'kc135_qatar', name: 'KC-135/KC-46 (Al Udeid AB, Qatar)', type: 'tanker',
    lat: 25.1, lng: 51.3,
    status: 'deployed',
    summary: 'Large tanker fleet at Al Udeid AB — primary CENTCOM aerial refueling hub.',
    details: 'USAF KC-135R/T and KC-46A Pegasus at Al Udeid. Support all CENTCOM strike/ISR operations. 379th AEW HQ at Al Udeid.',
    region: 'CENTCOM',
    link: 'https://www.af.mil/'
  },
  {
    id: 'kc135_guam', name: 'KC-135 (Andersen AFB, Guam)', type: 'tanker',
    lat: 13.58, lng: 144.93,
    status: 'deployed',
    summary: 'KC-135 tankers at Andersen AFB supporting INDOPACOM bomber and fighter ops.',
    details: 'Rotating KC-135R/T det at Andersen. Essential for B-52H CBP missions and F-22/F-35 long-range operations across INDOPACOM.',
    region: 'INDOPACOM',
    link: 'https://www.af.mil/'
  },

  // ── BASES / FOBs ─────────────────────────────────────
  {
    id: 'diegogarcia', name: 'Diego Garcia (BIOT) — B-2/B-52 Hub', type: 'base',
    lat: -7.3, lng: 72.4,
    status: 'active',
    summary: 'Critical Indian Ocean base for strategic bomber deployments (B-2, B-52) and maritime patrol.',
    details: 'RAF/USAF Diego Garcia (BIOT). Hosts B-2 Spirit deployments for CENTCOM reach. B-52s use it for CBP. P-8 Poseidon maritime patrol. Prepositioned war stocks.',
    region: 'CENTCOM',
    link: 'https://www.af.mil/'
  },
  {
    id: 'aludeid', name: 'Al Udeid AB, Qatar — CENTCOM HQ', type: 'base',
    lat: 25.1, lng: 51.3,
    status: 'active',
    summary: 'Al Udeid AB: largest US air base in Middle East. CENTCOM CFACC HQ. ~10,000 personnel.',
    details: 'Qatar hosts Al Udeid. USAF 379th AEW. KC-135/KC-46, B-52, C-17, ISR, fighters all rotate through. Combined Air Operations Center (CAOC) located here.',
    region: 'CENTCOM',
    link: 'https://www.af.mil/'
  },
  {
    id: 'andersen', name: 'Andersen AFB, Guam', type: 'base',
    lat: 13.58, lng: 144.93,
    status: 'active',
    summary: 'Primary US air power hub in Western Pacific. B-52 CBP, F-22, ISR, tankers.',
    details: 'USAF 36th Wing at Andersen. Hosts rotating bombers, fighters, tankers, ISR. Key node for INDOPACOM strike options against China/DPRK.',
    region: 'INDOPACOM',
    link: 'https://www.pacom.mil/'
  },
  {
    id: 'kadena', name: 'Kadena AB, Okinawa', type: 'base',
    lat: 26.4, lng: 127.8,
    status: 'active',
    summary: 'Largest USAF base in Asia. F-35A transition underway. Key INDOPACOM hub.',
    details: 'USAF 18th Wing — transitioning from F-15C/D to F-35A. E-3 Sentry AWACS, KC-135, HH-60 rescue, RC-135 rotate through. ~20,000 US personnel on Okinawa.',
    region: 'INDOPACOM',
    link: 'https://www.pacom.mil/'
  },
  {
    id: 'eskan', name: 'Prince Sultan AB, Saudi Arabia', type: 'base',
    lat: 24.06, lng: 47.58,
    status: 'active',
    summary: 'PSAB hosts USAF fighters, Patriot batteries, and CENTCOM air forces.',
    details: 'Reopened ~2019. USAF F-15Es, Patriot PAC-3, E-3 AWACS. Expanded capacity post-2019 Abqaiq attacks. Key CENTCOM alternative to Al Udeid.',
    region: 'CENTCOM',
    link: 'https://www.af.mil/'
  },
  {
    id: 'rota', name: 'Naval Station Rota, Spain', type: 'base',
    lat: 36.6, lng: -6.35,
    status: 'active',
    summary: 'NS Rota: homeport for 4 Arleigh Burke-class destroyers. EUCOM BMD mission.',
    details: 'FDNF destroyers at Rota: DDG-67, DDG-68, DDG-82, DDG-85 (rotating). Aegis Ballistic Missile Defense for NATO Europe. Key logistics hub.',
    region: 'EUCOM',
    link: 'https://www.navy.mil/'
  },

  // ── GROUND FORCES / ARMY ────────────────────────────
  {
    id: 'korea_2id', name: '2nd Infantry Division (Camp Humphreys)', type: 'army',
    lat: 37.0, lng: 127.0,
    status: 'deployed',
    summary: '2nd Infantry Division / ROK-US Combined Division at Camp Humphreys, South Korea.',
    details: 'USFK: ~28,500 US troops in South Korea. 2ID at Humphreys — largest US overseas military base. M1A2 Abrams, Bradley IFV, artillery, aviation.',
    region: 'INDOPACOM',
    link: 'https://www.pacom.mil/'
  },
  {
    id: 'poland_v_corps', name: 'V Corps / 82nd Airborne (Poland)', type: 'army',
    lat: 52.2, lng: 20.9,
    status: 'deployed',
    summary: 'V Corps forward HQ and rotational Army forces in Poland since 2022.',
    details: 'V Corps at Poznan. Rotational heavy/infantry brigades across Poland, Romania, Baltic states. Stryker, Abrams, artillery. ~15,000 EUCOM surge troops since 2022.',
    region: 'EUCOM',
    link: 'https://www.europeafrica.army.mil/'
  },
  {
    id: 'patriot_europe', name: 'Patriot Batteries (Europe / CENTCOM)', type: 'missile',
    lat: 49.0, lng: 20.0,
    status: 'deployed',
    summary: 'Multiple PAC-2/PAC-3 Patriot batteries deployed across EUCOM and CENTCOM AORs.',
    details: 'US Army Patriot systems: deployed to Poland, Germany, Israel, Saudi Arabia, Kuwait, Qatar. Air/missile defense backbone. Post-Oct 7 surge to Israel/Jordan.',
    region: 'EUCOM',
    link: 'https://www.europeafrica.army.mil/'
  },

  // ── SPECIAL OPERATIONS ──────────────────────────────
  {
    id: 'jsoc_centcom', name: 'JSOC / SOF (CENTCOM AOR)', type: 'specialops',
    lat: 33.4, lng: 44.4,
    status: 'deployed',
    summary: 'JSOC and SOCOM elements across CENTCOM — Iraq, Syria, Jordan, UAE.',
    details: 'CJSOTF-OIR in Iraq/Syria. SEAL Teams, 75th Ranger Regiment, Delta/CAG, 160th SOAR. Counter-ISIS operations ongoing. ~900 US troops remain in Syria.',
    region: 'CENTCOM',
    link: 'https://www.socom.mil/'
  },
  {
    id: 'sof_pacific', name: 'SOCPAC / SOF (INDOPACOM)', type: 'specialops',
    lat: 21.3, lng: 157.8,
    status: 'active',
    summary: 'Special Operations Command Pacific (SOCPAC) at Camp HM Smith, Hawaii.',
    details: 'SOCPAC coordinates SEAL, MARSOC, Army SF, AFSOC across INDOPACOM. Exercises with Philippines, Japan, ROK.',
    region: 'INDOPACOM',
    link: 'https://www.socom.mil/'
  },

  // ── ADVERSARY ASSETS (OSINT / FOR CONTEXT) ──────────
  {
    id: 'iran_irgcn', name: 'IRGCN Fleet (Persian Gulf / Strait of Hormuz)', type: 'adversary',
    lat: 26.5, lng: 55.5,
    status: 'active',
    summary: 'Islamic Revolutionary Guard Corps Navy operates fast-attack craft, mines, anti-ship missiles in the Persian Gulf.',
    details: 'IRGCN maintains ~100 fast patrol boats, midget submarines, shore-based anti-ship missiles (Noor/Qader). Repeatedly harasses USN ships in Hormuz. Conducts limpet mine and drone attacks.',
    region: 'CENTCOM',
    link: 'https://www.criticalthreats.org/'
  },
  {
    id: 'iran_ah1j', name: 'Iran AH-1J SeaCobra (Recent Crash)', type: 'adversary',
    lat: 32.0, lng: 50.0,
    status: 'degraded',
    summary: 'IRIAA AH-1J SeaCobra helicopter crashed in central Iran, Feb 2026. Crew KIA. Illustrates aging Iranian rotary-wing fleet.',
    details: 'Islamic Republic of Iran Army Aviation (IRIAA) AH-1J International SeaCobra — US-origin aircraft from pre-1979 deliveries. Iran operates ~50 remaining AH-1Js; attrition from age, parts shortages, and accidents. Feb 2026 crash killed crew; cause under investigation. Iran has sought parts via sanctions-busting networks.',
    region: 'CENTCOM',
    link: 'https://www.iranwatch.org/'
  },
  {
    id: 'pla_scs', name: 'PLA Navy (South China Sea)', type: 'adversary',
    lat: 15.0, lng: 114.0,
    status: 'active',
    summary: 'PLAN carrier groups and surface combatants operating in South China Sea.',
    details: 'Shandong (CV-17) and Fujian (CV-18) carrier groups. Multiple Type 055 cruisers, Type 052D destroyers. Liaoning (CV-16) training. Aggressive patrols near Taiwan Strait and Spratly Islands.',
    region: 'INDOPACOM',
    link: 'https://www.csis.org/'
  },
  {
    id: 'russia_bsf', name: 'Russian Black Sea Fleet (Sevastopol/Novorossiysk)', type: 'adversary',
    lat: 44.6, lng: 33.5,
    status: 'degraded',
    summary: 'Russian Black Sea Fleet significantly degraded by Ukrainian strikes 2022-2024. Remaining assets at Novorossiysk.',
    details: 'BSF flagship Moskva sunk Apr 2022. Multiple ships sunk/damaged by Ukrainian USVs and Harpoon/Neptune. Fleet relocated from Sevastopol to Novorossiysk. Kilo-class subs still fire Kalibr cruise missiles.',
    region: 'EUCOM',
    link: 'https://www.understandingwar.org/'
  },

  // ── ALLIED ASSETS ────────────────────────────────────
  {
    id: 'uk_qe', name: 'HMS Queen Elizabeth (R08)', type: 'ally',
    lat: 36.0, lng: 5.0,
    status: 'deployed',
    summary: 'Royal Navy HMS Queen Elizabeth carrier strike group in the Mediterranean as of Feb 2026.',
    details: 'UK CSG: R08 + Type 45 destroyers + Type 23 frigates + SSN. Embarked F-35B (RAF/RN) and USMC F-35Bs. Joint exercises with USN.',
    region: 'EUCOM',
    link: 'https://www.royalnavy.mod.uk/'
  },
  {
    id: 'israel_f35i', name: 'IAF F-35I Adir (Israel)', type: 'ally',
    lat: 31.9, lng: 34.8,
    status: 'active',
    summary: 'Israeli Air Force operates ~50 F-35I Adirs — most combat-experienced F-35 fleet globally.',
    details: 'IAF F-35I (Block 4 modified). 140th Squadron and 116th Squadron. Conducted strikes in Syria, Lebanon (2024). First F-35 combat kills. Integration with USAF for regional ops.',
    region: 'CENTCOM',
    link: 'https://www.iaf.org.il/'
  },

  // ── FORD-CLASS / NEXT DEPLOYMENT ────────────────────
  {
    id: 'cvn78', name: 'USS Gerald R. Ford (CVN-78)', type: 'carrier',
    lat: 36.95, lng: -76.3,
    status: 'homeport',
    summary: 'CVN-78 at Naval Station Norfolk. Completed record 11-month deployment (2023-24). Undergoing maintenance/workups for next deployment.',
    details: 'Ford-class lead ship. Completed maiden deployment Jul 2023 – Jun 2024 (11 months — longest USN carrier deployment in decades). Supported Israel/Gaza operations in Eastern Med. Currently at Norfolk in inter-deployment maintenance. CVW-8 will embark for next deployment.',
    region: 'CONUS',
    link: 'https://www.navy.mil/'
  },
  {
    id: 'cvn79', name: 'USS John F. Kennedy (CVN-79)', type: 'carrier',
    lat: 36.9, lng: -76.2,
    status: 'homeport',
    summary: 'CVN-79 completing builder trials and pre-commissioning work at Newport News / Norfolk.',
    details: 'Second Ford-class. CVN-79 in advanced pre-commissioning. Commissioned Oct 2024. Beginning fleet introduction and workups.',
    region: 'CONUS',
    link: 'https://www.navy.mil/'
  },

  // ── IRON FIST 2026 ───────────────────────────────────
  {
    id: 'ironfist26', name: 'Iron Fist 26 (Camp Pendleton / San Clemente Island)', type: 'marines',
    lat: 33.3, lng: -117.5,
    status: 'exercise',
    summary: 'Exercise Iron Fist 2026: USMC-JGSDF amphibious exercise at Camp Pendleton / San Clemente Island, Feb 2026.',
    details: 'Iron Fist is an annual bilateral USMC-Japan Ground Self-Defense Force amphibious assault exercise. Iron Fist 26 involves 1st Marine Division / I MEF units and JGSDF Amphibious Rapid Deployment Brigade (ARDB). Exercises ship-to-shore maneuver, AAV/ACV operations, and combined arms fire. Feb 2026 iteration focused on island defense and recapture scenarios relevant to INDOPACOM contingencies.',
    region: 'INDOPACOM',
    link: 'https://www.i-mef.marines.mil/'
  },

];

// ─── INTEL UPDATES TICKER ─────────────────────────────────
const updates = [
  // Most-recent first
  { date: '2026-02-25', text: '[OSINT] Kinetic activity reported near Bab-el-Mandeb; USN destroyer conducting presence operations in Red Sea approaches. Source: OSINT maritime tracking.' },
  { date: '2026-02-25', text: '[EXERCISE] Iron Fist 26 underway at Camp Pendleton / San Clemente Island — USMC 1st MarDiv and JGSDF ARDB conducting amphibious assault drills.' },
  { date: '2026-02-25', text: '[ADVERSARY] Iran AH-1J SeaCobra helicopter crash in central Iran; crew KIA. Highlights IRIAA rotary-wing attrition from age and sanctions-driven parts shortages.' },
  { date: '2026-02-25', text: '[NAVY] USS Gerald R. Ford (CVN-78) 11-month deployment record confirmed — longest USN carrier deployment in modern era. CVN-78 now at Norfolk in inter-deployment maintenance.' },
  { date: '2026-02-25', text: '[CENTCOM] CENTCOM AOR composition updated: Nimitz CSG (CVN-68) in Arabian Gulf; Bataan ARG/22nd MEU + Tripoli ARG in CENTCOM; SSGN/SSN forward in Arabian Sea.' },
  { date: '2026-02-24', text: '[INDOPACOM] Carl Vinson CSG (CVN-70) conducting South China Sea patrol; coordinates with Philippine Sea Task Force.' },
  { date: '2026-02-24', text: '[EUCOM] Truman CSG (CVN-75) in Eastern Mediterranean; conducting exercises with Greek and Italian naval forces.' },
  { date: '2026-02-23', text: '[AIRPOWER] B-52H rotational det at Andersen AFB conducting INDOPACOM Continuous Bomber Presence sorties over South China Sea.' },
  { date: '2026-02-23', text: '[OSINT] PLAN Shandong CSG (CV-17) conducting exercises in Western Pacific; F-35 deterrence missions from Kadena on heightened readiness.' },
  { date: '2026-02-22', text: '[SOF] CJSOTF-OIR advise-and-assist mission in Iraq: ~2,500 US troops supporting ISF counter-ISIS operations in Deir ez-Zor province.' },
  { date: '2026-02-22', text: '[MISSILE DEFENSE] Patriot PAC-3 batteries in Poland and Romania on heightened alert following Russian missile exercises near Kaliningrad.' },
  { date: '2026-02-21', text: '[NAVY] Makin Island ARG / 13th MEU in South China Sea — conducting Freedom of Navigation support operations.' },
  { date: '2026-02-21', text: '[ISR] RC-135 Rivet Joint flying increased SIGINT collection sorties along Russian western border from RAF Mildenhall.' },
  { date: '2026-02-20', text: '[ALLY] HMS Queen Elizabeth CSG transiting Western Mediterranean; F-35B joint ops with USAF in upcoming NATO exercise.' },
  { date: '2026-02-20', text: '[CENTCOM] IRGCN conducted fast-boat harassment of commercial tanker in Strait of Hormuz — USS gravely responds, no shots fired.' },
  { date: '2026-02-19', text: '[AIRPOWER] F-22 Raptors at Al Dhafra AB conducted training intercepts with UAEAF Rafale F3R — bilateral readiness exercise.' },
  { date: '2026-02-19', text: '[INDOPACOM] Exercise Iron Fist 26 pre-positioning: JGSDF ARDB elements arrive Camp Pendleton ahead of Feb 25 exercise start.' },
  { date: '2026-02-18', text: '[NAVY] CVN-79 John F. Kennedy commissioned Oct 2024; currently completing fleet introduction workups at NAVSTA Norfolk.' },
  { date: '2026-02-18', text: '[CENTCOM] F-35A detachment at Nevatim AB, Israel conducting joint strike training with IAF F-35I Adirs.' },
  { date: '2026-02-17', text: '[OSINT] IRIAA AH-1J SeaCobra fleet: Iran operating ~50 remaining pre-revolutionary US-supplied helicopters; multiple grounded for parts.' },
  { date: '2026-02-17', text: '[EUCOM] V Corps / 82nd Airborne rotational presence in Poland conducting Cold Resolve exercise with Polish 18th Division.' },
  { date: '2026-02-16', text: '[NAVY] USS Nimitz (CVN-68) transited Strait of Hormuz into Arabian Gulf — first Nimitz CENTCOM deployment since 2020.' },
  { date: '2026-02-16', text: '[ADVERSARY] Russia BSF Kilo-class submarine fired Kalibr cruise missiles at Ukraine from Black Sea; 3 of 4 intercepted by Patriot.' },
  { date: '2026-02-15', text: '[AIRPOWER] B-2 Spirit deployment to Diego Garcia: 2 aircraft forward deployed for CENTCOM reach and deterrence signaling.' },
  { date: '2026-02-15', text: '[INDOPACOM] USS George Washington (CVN-73) completed local area operations out of Yokosuka; Carrier Air Wing 5 training cycle.' },
  { date: '2026-02-14', text: '[SOF] JSOC operators conducted raid in eastern Syria targeting ISIS senior facilitator; 1 HVT detained, no US casualties.' },
  { date: '2026-02-14', text: '[ISR] U-2 Dragon Lady at Osan AB flying increased sorties following DPRK ballistic missile engine test at Sohae facility.' },
  { date: '2026-02-13', text: '[CENTCOM] Tripoli ARG (LHA-7) with embarked F-35Bs conducted amphibious demonstration exercise in Gulf of Oman.' },
  { date: '2026-02-13', text: '[ALLY] IAF F-35I Adirs conducted long-range strike training exercise over Mediterranean; range demonstration flight.' },
  { date: '2026-02-12', text: '[NAVY] Bataan ARG / 22nd MEU: BLT 2/6 Marines completed VBSS certification in Arabian Gulf.' },
  { date: '2026-02-12', text: '[EUCOM] NATO Enhanced Forward Presence battlegroup in Estonia reinforced with additional US Abrams company from 1st Armored Division.' },
  { date: '2026-02-11', text: '[AIRPOWER] KC-46A Pegasus at Al Udeid AB achieving full mission-capable rates above 85% — logistics milestone for CENTCOM.' },
  { date: '2026-02-11', text: '[INDOPACOM] Carl Vinson air wing (CVW-2) conducted first live LRASM firing exercise in Western Pacific.' },
  { date: '2026-02-10', text: '[OSINT] PRC military satellite imagery shows Type 003 Fujian carrier undergoing sea trials with electromagnetic catapult system testing.' },
  { date: '2026-02-10', text: '[CENTCOM] THAAD battery in Israel: operational following Oct 2023 deployment; crew rotations ongoing.' },
  { date: '2026-02-09', text: '[NAVY] USS Harry S. Truman (CVN-75) air wing completed Strike Fighter Weapons School graduates — 14 new Top Gun-qualified aircrew.' },
  { date: '2026-02-09', text: '[EUCOM] Arleigh Burke destroyers at Rota conducted joint BMD exercise with Spanish F-100 frigate — Aegis interoperability.' },
  { date: '2026-02-08', text: '[AIRPOWER] B-1B Lancers at Ellsworth AFB completed LRASM integration testing — conventional maritime strike capability enhanced.' },
  { date: '2026-02-08', text: '[SOF] SOCPAC forces completed Exercise Balikatan 26 planning conference with AFP — April 2026 exercise to feature largest-ever SOF component.' },
  { date: '2026-02-07', text: '[INDOPACOM] Makin Island LHD-8 ARG completed Strait of Malacca transit; F-35Bs conducted show-of-force sortie.' },
  { date: '2026-02-07', text: '[CENTCOM] Al Udeid AB received additional MC-12W Liberty ISR aircraft for expanded CENTCOM surveillance mission.' },
];

// ─── MAP INITIALIZATION ────────────────────────────────────
const map = L.map('map', {
  center: [20, 30],
  zoom: 3,
  minZoom: 2,
  maxZoom: 10,
  zoomControl: true,
});

// Tile layer — CartoDB dark matter
L.tileLayer(
  'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 19,
  }
).addTo(map);

// ─── SVG ICON FACTORY ──────────────────────────────────────
function makeIcon(type, status) {
  const cfg  = ASSET_TYPES[type] || ASSET_TYPES.base;
  const col  = cfg.color;
  const shape = cfg.shape;
  const dim  = 28;
  const half = dim / 2;

  // Pulse ring for deployed/active
  const pulse = (status === 'deployed' || status === 'active')
    ? `<circle cx="${half}" cy="${half}" r="${half - 1}" fill="none" stroke="${col}" stroke-width="1.5" opacity="0.35">
         <animate attributeName="r" from="${half - 1}" to="${half + 6}" dur="2s" repeatCount="indefinite"/>
         <animate attributeName="opacity" from="0.35" to="0" dur="2s" repeatCount="indefinite"/>
       </circle>`
    : '';

  const exerciseBadge = (status === 'exercise')
    ? `<circle cx="${dim - 5}" cy="5" r="4" fill="#FFD700" stroke="#000" stroke-width="0.5"/>` : '';

  let inner = '';
  if (shape === 'diamond') {
    inner = `<polygon points="${half},4 ${dim-4},${half} ${half},${dim-4} 4,${half}" fill="${col}" stroke="#fff" stroke-width="1.5"/>`;
  } else if (shape === 'square') {
    inner = `<rect x="5" y="5" width="${dim-10}" height="${dim-10}" fill="${col}" stroke="#fff" stroke-width="1.5"/>`;
  } else if (shape === 'triangle') {
    inner = `<polygon points="${half},4 ${dim-4},${dim-4} 4,${dim-4}" fill="${col}" stroke="#fff" stroke-width="1.5"/>`;
  } else {
    // circle
    inner = `<circle cx="${half}" cy="${half}" r="${half-4}" fill="${col}" stroke="#fff" stroke-width="1.5"/>`;
  }

  const degradedX = (status === 'degraded')
    ? `<line x1="5" y1="5" x2="${dim-5}" y2="${dim-5}" stroke="#fff" stroke-width="2" opacity="0.8"/>
       <line x1="${dim-5}" y1="5" x2="5" y2="${dim-5}" stroke="#fff" stroke-width="2" opacity="0.8"/>` : '';

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${dim}" height="${dim}" viewBox="0 0 ${dim} ${dim}">
    ${pulse}
    ${inner}
    ${degradedX}
    ${exerciseBadge}
  </svg>`;

  return L.divIcon({
    html: svg,
    className: '',
    iconSize: [dim, dim],
    iconAnchor: [half, half],
    popupAnchor: [0, -half],
  });
}

// ─── DETAIL PANEL ──────────────────────────────────────────
function showDetail(asset) {
  const panel = document.getElementById('detail-panel');
  const cfg   = ASSET_TYPES[asset.type] || ASSET_TYPES.base;
  const statusBadge = `<span class="status-badge status-${asset.status}">${asset.status.toUpperCase()}</span>`;
  const regionBadge = `<span class="region-badge">${asset.region}</span>`;

  panel.innerHTML = `
    <div class="detail-header">
      <div class="detail-title">${asset.name}</div>
      <div class="detail-meta">${statusBadge} ${regionBadge}</div>
      <div class="detail-type">${cfg.label}</div>
    </div>
    <div class="detail-summary">${asset.summary}</div>
    <div class="detail-body">${asset.details}</div>
    <div class="detail-footer">
      <a href="${asset.link}" target="_blank" rel="noopener">Official Source ↗</a>
    </div>
  `;
  panel.classList.add('visible');
}

function hideDetail() {
  document.getElementById('detail-panel').classList.remove('visible');
}

// ─── MARKERS ───────────────────────────────────────────────
const markerMap = {}; // id → L.marker

assets.forEach(asset => {
  const icon   = makeIcon(asset.type, asset.status);
  const marker = L.marker([asset.lat, asset.lng], { icon })
    .addTo(map)
    .bindTooltip(asset.name, { direction: 'top', offset: [0, -14], className: 'asset-tooltip' })
    .on('click', () => {
      showDetail(asset);
      // Highlight
      Object.values(markerMap).forEach(m => m.getElement()?.classList.remove('marker-selected'));
      marker.getElement()?.classList.add('marker-selected');
    });
  markerMap[asset.id] = marker;
});

// ─── FILTER UI ─────────────────────────────────────────────
const filterContainer = document.getElementById('filter-container');

// Build legend + filter toggles
const typeKeys = Object.keys(ASSET_TYPES);
typeKeys.forEach(typeKey => {
  const cfg = ASSET_TYPES[typeKey];
  const btn = document.createElement('button');
  btn.className = 'filter-btn active';
  btn.dataset.type = typeKey;

  const dot = document.createElement('span');
  dot.className = 'filter-dot';
  dot.style.background = cfg.color;
  btn.appendChild(dot);
  btn.appendChild(document.createTextNode(cfg.label));

  btn.addEventListener('click', () => {
    btn.classList.toggle('active');
    applyFilters();
  });

  filterContainer.appendChild(btn);
});

// Region filter
const regionSelect = document.getElementById('region-select');
regionSelect.addEventListener('change', applyFilters);

// Status filter
const statusSelect = document.getElementById('status-select');
statusSelect.addEventListener('change', applyFilters);

function applyFilters() {
  const activeTypes   = [...document.querySelectorAll('.filter-btn.active')].map(b => b.dataset.type);
  const regionFilter  = regionSelect.value;
  const statusFilter  = statusSelect.value;

  assets.forEach(asset => {
    const marker = markerMap[asset.id];
    const typeOk   = activeTypes.includes(asset.type);
    const regionOk = !regionFilter || asset.region === regionFilter;
    const statusOk = !statusFilter || asset.status === statusFilter;
    if (typeOk && regionOk && statusOk) {
      if (!map.hasLayer(marker)) map.addLayer(marker);
    } else {
      if (map.hasLayer(marker)) map.removeLayer(marker);
    }
  });

  updateStats();
  updateMovementCount();
}

// ─── STATS BAR ─────────────────────────────────────────────
function updateStats() {
  const activeTypes   = [...document.querySelectorAll('.filter-btn.active')].map(b => b.dataset.type);
  const regionFilter  = regionSelect.value;
  const statusFilter  = statusSelect.value;

  const visible = assets.filter(a =>
    activeTypes.includes(a.type) &&
    (!regionFilter || a.region === regionFilter) &&
    (!statusFilter || a.status === statusFilter)
  );

  const deployed    = visible.filter(a => a.status === 'deployed').length;
  const active      = visible.filter(a => a.status === 'active').length;
  const homeport    = visible.filter(a => a.status === 'homeport').length;
  const carriers    = visible.filter(a => a.type === 'carrier').length;

  document.getElementById('stat-total').textContent   = visible.length;
  document.getElementById('stat-deployed').textContent = deployed;
  document.getElementById('stat-active').textContent  = active;
  document.getElementById('stat-homeport').textContent = homeport;
  document.getElementById('stat-carriers').textContent = carriers;
}

updateStats();

// ─── SEARCH ────────────────────────────────────────────────
const searchInput = document.getElementById('search-input');
searchInput.addEventListener('input', () => {
  const q = searchInput.value.toLowerCase().trim();
  if (!q) {
    Object.values(markerMap).forEach(m => {
      if (!map.hasLayer(m)) map.addLayer(m);
    });
    applyFilters();
    return;
  }
  assets.forEach(asset => {
    const marker  = markerMap[asset.id];
    const matches = asset.name.toLowerCase().includes(q) ||
                    asset.summary.toLowerCase().includes(q) ||
                    asset.region.toLowerCase().includes(q) ||
                    asset.type.toLowerCase().includes(q);
    if (matches) {
      if (!map.hasLayer(marker)) map.addLayer(marker);
    } else {
      if (map.hasLayer(marker)) map.removeLayer(marker);
    }
  });
});

// ─── NEWS TICKER ───────────────────────────────────────────
function buildTicker() {
  const track = document.getElementById('ticker-track');
  if (!track) return;

  // Duplicate for seamless loop
  const items = [...updates, ...updates];
  track.innerHTML = items.map(u =>
    `<span class="ticker-item"><span class="ticker-date">${u.date}</span> ${u.text}</span>`
  ).join('');
}

buildTicker();

// Pause ticker on hover
const tickerWrap = document.getElementById('ticker-wrap');
if (tickerWrap) {
  tickerWrap.addEventListener('mouseenter', () => {
    document.getElementById('ticker-track').style.animationPlayState = 'paused';
  });
  tickerWrap.addEventListener('mouseleave', () => {
    document.getElementById('ticker-track').style.animationPlayState = 'running';
  });
}

// ─── MOBILE SIDEBAR TOGGLE ─────────────────────────────────
const menuToggle = document.getElementById('menu-toggle');
const sidebar    = document.getElementById('sidebar');
if (menuToggle && sidebar) {
  menuToggle.addEventListener('click', () => {
    sidebar.classList.toggle('open');
  });
}

// Close detail panel
const closeDetail = document.getElementById('close-detail');
if (closeDetail) {
  closeDetail.addEventListener('click', hideDetail);
}

// Close sidebar when clicking map on mobile
map.on('click', () => {
  if (window.innerWidth < 768 && sidebar) {
    sidebar.classList.remove('open');
  }
});

// ─── TIMELINE FILTER ──────────────────────────────────────
function buildTimelineFilter() {
  const timelineSelect = document.getElementById('timeline-select');
  if (!timelineSelect) return;

  // Extract unique dates from updates
  const dates = [...new Set(updates.map(u => u.date))].sort().reverse();

  // Add "All" option
  const allOpt = document.createElement('option');
  allOpt.value = '';
  allOpt.textContent = 'All Dates';
  timelineSelect.appendChild(allOpt);

  dates.forEach(d => {
    const opt = document.createElement('option');
    opt.value = d;
    opt.textContent = d;
    timelineSelect.appendChild(opt);
  });

  timelineSelect.addEventListener('change', () => {
    const selected = timelineSelect.value;
    filterTickerByDate(selected);
  });
}

function filterTickerByDate(date) {
  const track = document.getElementById('ticker-track');
  if (!track) return;

  const filtered = date ? updates.filter(u => u.date === date) : updates;
  const items = filtered.length ? [...filtered, ...filtered] : [...updates, ...updates];
  track.innerHTML = items.map(u =>
    `<span class="ticker-item"><span class="ticker-date">${u.date}</span> ${u.text}</span>`
  ).join('');
}

// ─── MOVEMENT COUNT ────────────────────────────────────────
function updateMovementCount() {
  const movementEl = document.getElementById('movement-count');
  if (!movementEl) return;

  const deployed = assets.filter(a => a.status === 'deployed' || a.status === 'active').length;
  const suffix   = deployed === 1 ? ' asset' : ' assets';
  movementEl.textContent = deployed + ' ACTIVE / DEPLOYED';
  // Optionally update the label too
  const movLabel = document.getElementById('movement-label');
  if (movLabel) movLabel.textContent = 'MOVEMENT TIMELINE' + suffix;
}

buildTimelineFilter();
updateMovementCount();
