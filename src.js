const lists = {
  "names": [
    "Wet William",
    "Blaster Keaton",
    "Butch Sunbeams",
    "Billions Thaumaturgy",
    "Sylvan Seawater",
    "Sisyphus Saturnine",
    "Wilimander Plause",
    "Peace Finally",
    "Pillbug Balboa",
    "Steve Countersteve",
    "Margot Bookbinder Milkman",
    "Calamitous Nightmother",
    "Halstane Flek",
    "Whitney Dustgate",
    "Thiccums Juggalette",
    "Garbanzo Dean",
    "Quadriceps Godzilla",
    "Yottachad Cranewife",
    "Geodesic Dave",
    "Robert Yaga",
    "Anti-Todd",
    "Immolation Sphere",
    "Shepherd's Silloutte",
    "Wrecker Philadelphia",
    "Twelve Thousand Dollars",
    "California Time Dilation",
    "Navy Railgun",
    "Lawrence Marrowthief",
    "Lexicographica Milktooth",
    "Harcourt Horsewater",
    "Omenifus Soup",
    "Alabaster Weavesnatch",
    "Ichabod Pelican",
    "Cannonball Chidi",
    "Dilkus Redhook",
    "Terwilliger \"Youtube\" Terwilliger",
    "Low Key The Baba Yaga",
    "Game Five",
    "Hope Springs Eternal",
    "Hotboxed Miata",
    "Marfideldus Plane",
    "New Rose Milk Hotel",
    "Dan Quayleman",
    "Laguna Todd",
    "Slain Hawthorne",
    "Hot Diggity",
    "Brutallion Dogthief",
    "Gilligan Roosevelt Troubadour Troutman",
    "Pidgeonmade Moon",
    "Hooligan Oof",
    "Wilmot Witchfinder",
    "Nosebleed Seats",
    "Milkworms Milkworms",
    "Honest Dirtprince",
    "Great Granite Spire",
    "Cousin Doomrider",
    "Perihelia Griefhaven",
    "Son Pyramid",
    "Lone Argonaut",
    "Regular-Sized Edward Cannon",
    "Boo Gamecube",
    "Pegg Legg",
    "Reverend Hooligan",
    "Booker T. V.",
    "Slim Harmonics",
    "Graviton Bomb Delloitte",
    "Harmonica Blackpine",
    "Sweat Equity",
    "Paris-By-Way-Of-Detroit",
    "Cassiopeia Halifax",
    "Andromedes Fiveiron",
    "Haunted Summer",
    "Drunks Baldwin",
    "Broccoli Pubchatter",
    "Ganymede Processional",
    "Dule Tunguska",
    "Obstinacy of the Dispossessed",
    "Mortal Axis",
    "Orbital Dunkleader",
    "Ten Years Buried",
    "Judas Dafodillionare",
    "Raekwon Quake",
    "Polyhed'Ron Whelm",
    "Eigen-Victor Loop",
    "Horatio Beefweapon",
    "Hypatia Sunstruck",
    "Allegory of the Moon-Posessed",
    "Olifant Crocodil",
    "Harmonious Chordata",
    "Irascible Tom",
    "Oliver Notionsbane",
    "Saxophone Nightmare II",
    "Nightingale Switchblade-Pettigrew",
    "Jupiter Swordlogic",
    "Wormweather Tapestry",
    "Biblical Omaha",
    "Seance Swanvigil",
    "Wasp-Eater Oligarch",
    "Never Dare Hope",
    "Godforsaken Lizard",
    "Obelisk Ikegami",
    "Toledo Octagon",
    "Ransommelier Dunkirk",
    "Branson Bouchard",
    "Ommegang Proboscuttio",
    "Antigone Owlfather",
    "Nope Hogan",
    "Fatima Duckworth",
    "Olivander Timecop",
    "Dawn Dialectics",
    "Pygmalionite Oak",
    "Dilligan Golfclap",
    "Philomena Mooncop",
    "Telomere Applegate",
    "Tallahassee Hallelujah",
    "Dawnwrought Yeet",
    "Mahogany Thoughtcrime",
    "Orpheus Sleep",
    "Delver Goonboggle",
    "Dogs: Ohayo",
    "Autumn Toothkeeper",
    "Plausible Maud",
    "Ampersands Often",
    "Guxue Lightrider",
    "Peoria Burgergun",
    "Big Yikes",
    "Jikes Runewelder",
    "Mood Enough",
    "Thwartlance Bloodrot",
    "Reverse Tracheotomy Tuesday",
    "Dichotomous Wife-Energy",
    "Gourdhampton Tubewallop",
    "Incontrovertible Kill-Field",
    "Relative Designator",
    "Irreversible Flex",
    "Cherenkov Stutterglow",
    "E.M. Skipglider",
    "\"Unsinkable\" Radio Esposito",
    "Reversible Junebug",
    "Proprietous Oscar",
    "Entropic Tidecatcher",
    "Doubledoug Meerkat",
    "Daring Scopecrawler",
    "Maximum Horkheimer",
    "Median Headroom",
    "Looper Wave-Motion",
    "Distant Action",
    "Radar Skipjacker",
    "Liliput Erstwhile",
    "Mothra Doubledown",
    "Minsk Occultant",
    "Doomed Rhymeweaver",
    "Marine Okemba",
    "Subtextual Emile",
    "Bathos Pathos",
    "Baphometa Rashid",
    "Small Emperor Moth",
    "Saturnalia Inkwell",
    "Pavel Timeheist",
    "Lepidoptera Poppycock",
    "Motheaten Dynasty",
    "Echopraxia Wallander",
    "Lattitude of Aplasia",
    "Leopold Imbroglio",
    "Fam Nightmissile",
    "Smoke Toastwhip",
    "Micron Gunn",
    "Pitbull Saebyolbe",
    "Mox Atriedes",
    "Mossdrenched, Forgotten",
    "Illith Truncheon",
    "Beast Moog",
    "Lesbian Moonbase",
    "Tyranica Walters",
    "Memory Gospel",
    "Anne Allegory",
    "A Problem",
    "Wise but Malfeasant Ghost",
    "Phantom Tim Syndrome",
    "Hell-For-Leather Protocol",
    "Adult Headlong",
    "Disquiet Elizabeth",
    "Winter's Discontent",
    "Eternal Shortsweather",
    "Sophia, Our Lady of Perpetual Motion",
    "Cool and Laborious Paul",
    "Indefatigable Honeymap",
    "Meticulous Grace",
    "Contiguous Emma",
    "Tangible Tyler",
    "Indeterminacy of Translation",
    "Inscrutability of Reference",
    "Avery Undisproven",
    "Catherine Bloodritual Wellingsley III",
    "The Boat From \"Jaws\"",
    "Judge Aristophanes",
    "Cool Official",
    "Careful Discourse",
    "Football Miette",
    "Intelligible Penelope",
    "Adidas Funk",
    "K.O. Brooklyn",
    "Island of Esther",
    "Iris Ultra-Light",
    "Madeline Twice-Arisen",
    "Hadley Hopeless",
    "Giant Enemy Crab",
    "Horse Cop II",
    "Arbalest Peninsula",
    "Arigato Kickflip",
    "5 Arkwright Cutpurse",
    "Devilish Admiral \"Feet Pix\" Matsumoto",
    "Churlish Dirge",
    "Madeline Sunglasses",
    "3D Todd",
    "Teagan Hornsabbath",
    "Violence Divine",
    "Laila Chesscaptain",
    "Mastodon's Discount",
    "Tony Hawk",
    "Eloise Tortuga",
    "Leg Dei",
    "Foghorn Context",
    "Strongsister Nightvision",
    "Ivory Tomb",
    "Cyclical History X",
    "Sylvester Vestsilver Test-Svelter Toad",
    "Talcum Wombfeather",
    "Litigious Aurora",
    "Calliope Coolhand",
    "Yakety Onassis",
    "Tiberia Slowjam",
    "Jung Pope",
    "Long-Forgotten Hank Montgomery",
    "Applesauce! :)",
    "Whip Ghostrider",
    "Judgemental Pete",
    "Ol' Whispy Bootlick",
    "Spidercoveted Narcissa",
    "cavitation.sonoluminescence.info",
    "Hank Williams MMXIX",
    "Y Iotta",
    "Sparks Tubeshark",
    "Calculator Minestrone",
    "Workahol Godswilling",
    "Oval Valentine",
    "Cold Keith",
    "Tit Whimsy",
    "Bloodhound Tatsuya",
    "Wildfire Township",
    "DVS Varietal",
    "Pizza Tuxedo",
    "None Wolfgrinder",
    "Earth Doubleprime",
    "Leftbeef Odinsdottir",
    "Godswill Song",
    "Ode Signifier",
    "Kim Süsser Tod",
    "Algebra Knifemuseum",
    "Guts Isomorph",
    "T.U.G.B.O.A.T.",
    "Just Alice 👍",
    "Orcus \"Unicode Consortium\" Gillchrest",
    "Basic Multilingual Plane",
    "Inverted Olivia",
    "Fallible Macintosh",
    "Cascade Pasadena",
    "Theophant Alcatraz",
    "Poncho Capone",
    "Applebaum Jeanist",
    "Strafe Ontario",
    "Quicksand Monitor",
    "Gus Van Cargo",
    "Velvetine Tangent",
    "Halifax Delany",
    "Ligature Antiquity",
    "Winsome Pasquale",
    "Sanguine Turbinado",
    "Google Albatross",
    "Bennigan's Capricorn",
    "Celementine's Particulate",
    "Overhead Pressure",
    "Whiskey Francisco",
    "Faberge Alphonse",
    "Hardwater Adjacent",
    "Alistair Half-acre",
    "Pogo Carcinogen",
    "Nolan Probably",
    "Cantilever Grey",
    "Significance Bloom",
    "Tip Footman",
    "Borealis Provost",
    "Ol' Dirty Parthenon",
    "Raphael Damagedone",
    "Blush Gravitas",
    "Waltham Eglantine",
    "Kip Oscillante",
    "Tertiary Children",
    "Gentle Calderon",
    "Heat Copkill",
    "Juice Trashfire",
    "Twiceduke Splines",
    "CatVatican Reticulant"
  ],

  stats: [
    "Strength",
    "Wisdom",
    "Intelligence",
    "Charisma",
    "Dexterity",
    "Constitution",
    "Stamina",
    "Chirality",
    "Constitutionality",
    "Mass",
    "IQ",
    "Muscles",
    "EQ",
    "Dogs",
    "Vertical Leap",
    "Toes",
    "Police Evasion Modifier",
    "Gravitas",
    "Points",
    "Gold",
    "Friends",
    "Remaining Lives",
    "Bone Density",
    "Recalcitrance",
    "Gender",
    "Shoe Size",
    "Average Speed",
    "Mice",
    "Talent",
    "Attentiveness",
    "Bell Peppers",
    "Humility",
    "Credit Score",
    "Bones",
    "Birth Weight",
    "Surplus Value",
    "Teeth",
    "Flux Capacity",
    "Cool",
    "Edge",
    "pH",
    "Length",
    "Kills",
    "Drag Coefficient",
    "Vibes",
    "Guns",
    "Knives",
    "Swords",
    "Bats",
    "Crime",
    "Justice",
    "Time",
    "DPS",
    "Tables",
    "Pulchritude",
    "Power",
    "Strength (inner)",
    "Opulence",
    "Luck",
    "Dad Energy",
    "Thickness",
    "Decisiveness",
    "Jest",
    "Questions",
    "Defense",
    "Legs",
    "War",
    "Miscellaneous",
    "Rank",
    "Moms",
    "Eyes",
    "Experiences",
    "Dreams",
    "Modesty",
    "Guilt",
    "Boats Destroyed",
    "Audacity",
    "Cumulative Upkeep",
    "Memorability",
    "Cardinality",
    "Problems",
    "Hobbies",
    "Carbon Footprint",
    "Submersibility",
    "Baggage"
  ],

  jobs: [
    "Cherub",
    "Cyberdemon",
    "Milk Architect",
    "Heckler",
    "Herald",
    "Harbinger",
    "Giant Fluffy Dog",
    "Actual Worm",
    "None",
    "Unclear",
    "???",
    "Castabout",
    "Child",
    "God",
    "Agitator",
    "Lecturer",
    "Bodybuilder",
    "Refuses to Say",
    "Elf",
    "Warrior",
    "Pope",
    "Anti-Pope",
    "Minor Demon",
    "Demolitionist",
    "Reverse Demolitionist",
    "Gardener",
    "Villager",
    "Tinker",
    "Tailor",
    "Soldier",
    "Spy",
    "Sailor",
    "Sailor Scout",
    "Ex-Mime",
    "Travel Agent",
    "Slime",
    "Dungeoneer",
    "Hacker",
    "Pop Idol",
    "Smuggler",
    "Bounty Hunter",
    "Idealist",
    "Tree Whisperer",
    "Ghost Hunter (licensed)",
    "Iconoclast",
    "Dream Weaver",
    "Art Critic",
    "Entropy Reverser",
    "Mean Bird",
    "Class Traitor",
    "Geometer",
    "Witch",
    "Crab Singer",
    "Dancer",
    "Devil's Advocate",
    "Tycoon",
    "Celebrity Chef",
    "Dracula",
    "Blues Musician",
    "Bard",
    "Professional Gamer",
    "Journalist",
    "Teaching Assistant",
    "Fetish Model",
    "Political Prisoner",
    "Anarchist",
    "Toady",
    "Goon",
    "Monarch",
    "Midwife",
    "Actuary",
    "Alderman",
    "Mayor",
    "Ale-Wife",
    "Balloonist",
    "Beekeeper",
    "Apprentice",
    "Artificer",
    "Pit Brow Lass",
    "Gangleader",
    "Barkeep",
    "Gondolier",
    "Batperson",
    "Bird Catcher",
    "Bloodletter",
    "Pundit",
    "Bonesetter",
    "Top",
    "Punisher",
    "Carnifex",
    "Wheelwright",
    "Professional Wrestler",
    "Amateur Wrestler",
    "Chimney Sweep",
    "Data Sanitizer",
    "Cinder Wench",
    "Chronologist",
    "Decoy",
    "Dragoon",
    "Drifter",
    "Elephant Dentist",
    "Exorcist",
    "Wedding Planner",
    "Prophet (false)",
    "Haberdasher",
    "Lighthouse Operator",
    "Delinquent",
    "Horse Knave",
    "Magician",
    "Mangler",
    "Mudlark",
    "Nightwalker",
    "Notarist",
    "Pattern Maker",
    "Piper",
    "Printer's Devil",
    "Publican",
    "Rubbernecker",
    "Shambler",
    "Steeplejack",
    "Sword Collector",
    "Pig Destroyer",
    "Wet Nurse",
    "Lamplighter",
    "Theorist",
    "Projectionist",
    "Nomenclator",
    "Fashion Cop",
    "Psychic",
    "Propagandist",
    "Schoolmarm",
    "Attorney General",
    "Assassin",
    "Getaway Driver",
    "Drone Pilot",
    "Mysterious Athlete",
    "Doctoral Candidate",
    "Detective",
    "Private Investigator",
    "Public Investigator",
    "Unknown Assailant",
    "Cowboy Simulator",
    "Oracle",
    "Unmaker",
    "Reverse-Engineer (civil)",
    "Freelance Librarian",
    "Libertine",
    "Director of Social Engineering",
    "Cosmonaut",
    "Vice President",
    "Concrete Form Tube",
    "Mannequin",
    "Daredevil",
    "Stunt-Rocker",
    "Ghoul",
    "Poet Laureate",
    "Software Zoologist",
    "Wetware Developer",
    "Broodmother",
    "Ice Queen",
    "Gargoyle",
    "Typhoid Vector",
    "Cryptologist",
    "Prince (Wales)",
    "Deposed Sovereign",
    "Disgraced Artist",
    "Attitude Adjustment Specialist",
    "Cataclysm Adjudicant",
    "Pickpocket",
    "Cat Burglar",
    "Hamburglar",
    "Trapeze Scientist",
    "Jerk",
    "Witness",
    "Hexcleanser",
    "Flenser",
    "Animal",
    "Brickthrower",
    "Villain (general)",
    "Owl Impersonator",
    "Charlatan",
    "Mourner",
    "Dust Archivist",
    "Hoardsperson",
    "Obliviant",
    "Driftrider",
    "Tourist",
    "Barbarian",
    "Ball-Point Pen Thief",
    "Thought Leader",
    "Historical Revisionist",
    "Contortionist",
    "Rogue Chiropractor",
    "Forum Moderator",
    "Ringleader",
    "Circus Abolitionist",
    "Bug",
    "Henchperson",
    "Karate Champion",
    "Knife Instructor",
    "Holographic Dietician",
    "Illusory",
    "Eschatologist",
    "Goblin",
    "Unstable Boyfriend Prototype"
  ]
};

/* 

*/

const VERSION = "13";

if (window.localStorage.getItem("version") !== VERSION) {
  window.localStorage.setItem("version", VERSION);
  window.localStorage.setItem("names", "[]");
  window.localStorage.setItem("jobs", "[]");
  window.localStorage.setItem("stats", "[]");
}

function generator (key) {
  let list = lists[key];
  let remaining = JSON.parse(window.localStorage.getItem(key));
  return () => {
    if (remaining.length === 0) {
      remaining = shuffle(list);
    }
    let result = remaining.pop();
    window.localStorage.setItem(key, JSON.stringify(remaining));
    return result;
  };
}

const nextName = generator("names");
const nextJob = generator("jobs");
const nextStat = generator("stats");

function fill (id, field, value) {
  document.getElementById(`NPC-${id}-${field}`).innerHTML = value;
}

function die (sides) {
  return Math.ceil(Math.random() * sides);
}

function choose (array) {
  return array[Math.floor(Math.random() * array.length)];
}

function getStat () {
  let stat = nextStat();
  if (stat === "Vertical Leap") {
    return [stat, 8];
  } else if (stat === "Problems") {
    return [stat, choose([99, 0, 1])];
  } else if (die(20) === 1) {
    return [stat, choose([die(5)+"-ish", "2d6", "3d6", "4d8", "2d10", "2d6 + 2", "+" + die(5), "-" + die(5)]), "none"]; 
  }
  return [stat, die(10) + die(11) - 1];
}

function generateNPC (id) {
  let stat, value;
  fill(id, "name", nextName());
  if (Math.random() < 0.33) {
    stat = "Occupation";
    value = nextJob();
  } else {
    [stat, value] = getStat();
  }
  fill(id, "stat-1", stat + ":");
  fill(id, "stat-1-value", value);
  [stat, value] = getStat();
  fill(id, "stat-2", stat + ":");
  fill(id, "stat-2-value", value);
  [stat, value] = getStat();
  fill(id, "stat-3", stat + ":");
  fill(id, "stat-3-value", value);
  [stat, value] = getStat();
  fill(id, "stat-4", stat + ":");
  fill(id, "stat-4-value", value);
}


function generateNPCs () {
  generateNPC("1");
  generateNPC("2");
  generateNPC("3");
}

function shuffle (array) {
  let result = array.slice();
  for (let i = result.length - 1; i > 0; i--) {
    let swapIndex = Math.floor(Math.random() * (i + 1));
    let temp = result[i];
    result[i] = result[swapIndex];
    result[swapIndex] = temp;
  }

  return result;
}

document.getElementById("next-button").onclick = generateNPCs;

generateNPCs();