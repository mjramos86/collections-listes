import type { Collection } from "./types";

export const marvelCollection: Collection = {
  id: "marvel-top-100",
  name: "Marvel Top 100 Story Arcs",
  description: "The 100 greatest Marvel story arcs in publication order, curated from best-of rankings.",
  category: "reading",
  icon: "📚",
  fields: [
    { key: "pub_order", label: "Pub. Order", type: "number" },
    { key: "storyline", label: "Storyline", type: "text" },
    { key: "franchise", label: "Franchise", type: "text" },
    { key: "issues", label: "Issues to Read", type: "text" },
    { key: "years", label: "Year(s)", type: "text" },
    { key: "creators", label: "Writer(s) / Artist(s)", type: "text" },
    { key: "why_essential", label: "Why It\'s Essential", type: "text" },
    { key: "bestof_rank", label: "Best-Of Rank", type: "number" },
  ],
  items: [
  {
    "id": "marvel-1",
    "completed": false,
    "fields": {
      "pub_order": 1,
      "storyline": "The Galactus Trilogy",
      "franchise": "Fantastic Four",
      "issues": "Fantastic Four #48–50",
      "years": "1966",
      "creators": "Stan Lee / Jack Kirby",
      "why_essential": "Introduces Galactus and the Silver Surfer; frequently cited as the greatest superhero comic ever made.",
      "bestof_rank": 29
    }
  },
  {
    "id": "marvel-2",
    "completed": false,
    "fields": {
      "pub_order": 2,
      "storyline": "This Man, This Monster",
      "franchise": "Fantastic Four",
      "issues": "Fantastic Four #51",
      "years": "1966",
      "creators": "Stan Lee / Jack Kirby",
      "why_essential": "A stand-alone Thing-centric issue widely considered one of the finest single issues in the medium's history.",
      "bestof_rank": 30
    }
  },
  {
    "id": "marvel-3",
    "completed": false,
    "fields": {
      "pub_order": 3,
      "storyline": "The Kree-Skrull War",
      "franchise": "Avengers",
      "issues": "Avengers #89–97",
      "years": "1971–1972",
      "creators": "Roy Thomas / Sal Buscema, Neal Adams",
      "why_essential": "Sprawling cosmic epic that established the scale of Marvel's space-opera side and the Kree/Skrull galactic conflict.",
      "bestof_rank": 21
    }
  },
  {
    "id": "marvel-4",
    "completed": false,
    "fields": {
      "pub_order": 4,
      "storyline": "The Night Gwen Stacy Died",
      "franchise": "Spider-Man",
      "issues": "Amazing Spider-Man #121–122",
      "years": "1973",
      "creators": "Gerry Conway / Gil Kane",
      "why_essential": "The story that ended comics' Silver Age innocence; Gwen Stacy's death remains a genre-defining moment.",
      "bestof_rank": 14
    }
  },
  {
    "id": "marvel-5",
    "completed": false,
    "fields": {
      "pub_order": 5,
      "storyline": "The Korvac Saga",
      "franchise": "Avengers",
      "issues": "Avengers #167–177 (Thor Annual #7 and Marvel Team-Up #69–70 as optional tie-ins)",
      "years": "1978",
      "creators": "Jim Shooter, David Michelinie / George Perez",
      "why_essential": "Classic cosmic-scale Avengers epic pitting the team against a god-like former villain; a 70s fan favorite.",
      "bestof_rank": 53
    }
  },
  {
    "id": "marvel-6",
    "completed": false,
    "fields": {
      "pub_order": 6,
      "storyline": "Demon in a Bottle",
      "franchise": "Iron Man",
      "issues": "Iron Man #120–128",
      "years": "1979",
      "creators": "David Michelinie, Bob Layton / John Romita Jr.",
      "why_essential": "Landmark story confronting Tony Stark's alcoholism; one of the first mainstream superhero comics to tackle addiction seriously.",
      "bestof_rank": 37
    }
  },
  {
    "id": "marvel-7",
    "completed": false,
    "fields": {
      "pub_order": 7,
      "storyline": "The Dark Phoenix Saga",
      "franchise": "X-Men",
      "issues": "Uncanny X-Men #129–138",
      "years": "1980",
      "creators": "Chris Claremont / John Byrne",
      "why_essential": "The gold standard of superhero tragedy — Jean Grey's corruption and fall defined the modern X-Men and is still endlessly referenced.",
      "bestof_rank": 1
    }
  },
  {
    "id": "marvel-8",
    "completed": false,
    "fields": {
      "pub_order": 8,
      "storyline": "Days of Future Past",
      "franchise": "X-Men",
      "issues": "Uncanny X-Men #141–142",
      "years": "1981",
      "creators": "Chris Claremont / John Byrne",
      "why_essential": "Two-issue dystopian time-travel tale that shaped decades of alternate-future storytelling across all of comics and film.",
      "bestof_rank": 2
    }
  },
  {
    "id": "marvel-9",
    "completed": false,
    "fields": {
      "pub_order": 9,
      "storyline": "The Elektra Saga",
      "franchise": "Daredevil",
      "issues": "Daredevil #168–182 (climax in #181, 'Elektra')",
      "years": "1981–1982",
      "creators": "Frank Miller / Frank Miller",
      "why_essential": "Introduces and ultimately kills off Elektra; the foundational arc of Miller's genre-redefining Daredevil run.",
      "bestof_rank": 78
    }
  },
  {
    "id": "marvel-10",
    "completed": false,
    "fields": {
      "pub_order": 10,
      "storyline": "Doomquest",
      "franchise": "Iron Man",
      "issues": "Iron Man #149–150",
      "years": "1981",
      "creators": "David Michelinie, Bob Layton / John Romita Jr.",
      "why_essential": "A fan-favorite time-travel team-up/battle pitting Iron Man and Doctor Doom against Camelot-era sorcery.",
      "bestof_rank": 84
    }
  },
  {
    "id": "marvel-11",
    "completed": false,
    "fields": {
      "pub_order": 11,
      "storyline": "God Loves, Man Kills",
      "franchise": "X-Men",
      "issues": "Marvel Graphic Novel #5",
      "years": "1982",
      "creators": "Chris Claremont / Brent Anderson",
      "why_essential": "The definitive mutant-metaphor-for-bigotry story; basis for X2: X-Men United.",
      "bestof_rank": 3
    }
  },
  {
    "id": "marvel-12",
    "completed": false,
    "fields": {
      "pub_order": 12,
      "storyline": "Nothing Can Stop the Juggernaut",
      "franchise": "Spider-Man",
      "issues": "Amazing Spider-Man #229–230",
      "years": "1982",
      "creators": "Roger Stern / John Romita Jr.",
      "why_essential": "A tightly-plotted, purely kinetic two-parter widely cited as a model for how to structure a single Spider-Man story.",
      "bestof_rank": 62
    }
  },
  {
    "id": "marvel-13",
    "completed": false,
    "fields": {
      "pub_order": 13,
      "storyline": "The Original Hobgoblin Saga",
      "franchise": "Spider-Man",
      "issues": "Amazing Spider-Man #238–251",
      "years": "1983",
      "creators": "Roger Stern / John Romita Jr.",
      "why_essential": "Introduces the Hobgoblin in one of the best-plotted mystery arcs in Spider-Man history.",
      "bestof_rank": 64
    }
  },
  {
    "id": "marvel-14",
    "completed": false,
    "fields": {
      "pub_order": 14,
      "storyline": "Secret Wars",
      "franchise": "Avengers / X-Men / Cosmic",
      "issues": "Marvel Super Heroes Secret Wars #1–12",
      "years": "1984",
      "creators": "Jim Shooter / Mike Zeck",
      "why_essential": "The original toy-driven crossover event that invented the modern superhero-event template.",
      "bestof_rank": 22
    }
  },
  {
    "id": "marvel-15",
    "completed": false,
    "fields": {
      "pub_order": 15,
      "storyline": "The Surtur Saga",
      "franchise": "Thor",
      "issues": "Thor #337–355 (Ragnarok arc roughly #348–355)",
      "years": "1984–1985",
      "creators": "Walter Simonson / Walter Simonson",
      "why_essential": "Simonson's iconic run, including Beta Ray Bill's debut and Thor as a frog; widely called the best Thor story ever.",
      "bestof_rank": 39
    }
  },
  {
    "id": "marvel-16",
    "completed": false,
    "fields": {
      "pub_order": 16,
      "storyline": "The Demon Bear Saga",
      "franchise": "New Mutants",
      "issues": "New Mutants #18–21",
      "years": "1984",
      "creators": "Chris Claremont / Bill Sienkiewicz",
      "why_essential": "A psychedelic horror arc whose radical, expressionist art redefined what superhero comics could look like.",
      "bestof_rank": 52
    }
  },
  {
    "id": "marvel-17",
    "completed": false,
    "fields": {
      "pub_order": 17,
      "storyline": "The Death of Jean DeWolff",
      "franchise": "Spider-Man",
      "issues": "Peter Parker, The Spectacular Spider-Man #107–110",
      "years": "1985",
      "creators": "Peter David / Rich Buckler",
      "why_essential": "Dark, grounded murder-mystery arc that pushed street-level Spider-Man storytelling forward.",
      "bestof_rank": 16
    }
  },
  {
    "id": "marvel-18",
    "completed": false,
    "fields": {
      "pub_order": 18,
      "storyline": "Mutant Massacre",
      "franchise": "X-Men crossover",
      "issues": "Uncanny X-Men #210–213, X-Factor #9–11, New Mutants #46, Thor #373–374, Power Pack #27",
      "years": "1986",
      "creators": "Chris Claremont, Louise Simonson, Walter Simonson, et al.",
      "why_essential": "The first true X-Men crossover event; brutal Morlock slaughter that darkened the entire line.",
      "bestof_rank": 4
    }
  },
  {
    "id": "marvel-19",
    "completed": false,
    "fields": {
      "pub_order": 19,
      "storyline": "Born Again",
      "franchise": "Daredevil",
      "issues": "Daredevil #227–233",
      "years": "1986",
      "creators": "Frank Miller / David Mazzucchelli",
      "why_essential": "Kingpin destroys Matt Murdock's life piece by piece; regularly ranked among the best superhero comics ever written.",
      "bestof_rank": 32
    }
  },
  {
    "id": "marvel-20",
    "completed": false,
    "fields": {
      "pub_order": 20,
      "storyline": "Circle of Blood",
      "franchise": "Punisher",
      "issues": "The Punisher (vol. 1) #1–5",
      "years": "1986",
      "creators": "Steven Grant / Mike Zeck",
      "why_essential": "The Punisher's first ongoing solo story and the template for every gritty urban-war Punisher tale that followed.",
      "bestof_rank": 88
    }
  },
  {
    "id": "marvel-21",
    "completed": false,
    "fields": {
      "pub_order": 21,
      "storyline": "Kraven's Last Hunt",
      "franchise": "Spider-Man",
      "issues": "Web of Spider-Man #31–32, Amazing Spider-Man #293–294, Spectacular Spider-Man #131–132",
      "years": "1987",
      "creators": "J.M. DeMatteis / Mike Zeck",
      "why_essential": "Widely considered the greatest Spider-Man story ever told; a psychological horror masterpiece.",
      "bestof_rank": 15
    }
  },
  {
    "id": "marvel-22",
    "completed": false,
    "fields": {
      "pub_order": 22,
      "storyline": "Under Siege",
      "franchise": "Avengers",
      "issues": "Avengers #270–277",
      "years": "1987",
      "creators": "Roger Stern / John Buscema",
      "why_essential": "The Masters of Evil's assault on Avengers Mansion is a classic siege story and a fan-favorite team arc.",
      "bestof_rank": 23
    }
  },
  {
    "id": "marvel-23",
    "completed": false,
    "fields": {
      "pub_order": 23,
      "storyline": "Fall of the Mutants",
      "franchise": "X-Men",
      "issues": "Uncanny X-Men #225–227",
      "years": "1988",
      "creators": "Chris Claremont / Marc Silvestri",
      "why_essential": "Ends with the X-Men's presumed deaths and rebirth as a covert strike force — a major tonal pivot.",
      "bestof_rank": 5
    }
  },
  {
    "id": "marvel-24",
    "completed": false,
    "fields": {
      "pub_order": 24,
      "storyline": "Venom's Origin",
      "franchise": "Spider-Man",
      "issues": "Amazing Spider-Man #300, #315–317",
      "years": "1988–1990",
      "creators": "David Michelinie / Todd McFarlane, Erik Larsen",
      "why_essential": "Introduces and builds Marvel's most enduring symbiote villain-turned-antihero.",
      "bestof_rank": 17
    }
  },
  {
    "id": "marvel-25",
    "completed": false,
    "fields": {
      "pub_order": 25,
      "storyline": "Inferno",
      "franchise": "X-Men / FF crossover",
      "issues": "Uncanny X-Men #239–243, X-Factor #38–41, New Mutants #71–73, Amazing Spider-Man #311–313",
      "years": "1988",
      "creators": "Chris Claremont, Louise Simonson, Walter Simonson, et al.",
      "why_essential": "Manhattan is invaded by demons in this hugely popular, sprawling 80s X-line crossover.",
      "bestof_rank": 51
    }
  },
  {
    "id": "marvel-26",
    "completed": false,
    "fields": {
      "pub_order": 26,
      "storyline": "Armor Wars",
      "franchise": "Iron Man",
      "issues": "Iron Man #225–232",
      "years": "1988",
      "creators": "David Michelinie, Bob Layton / Bob Layton",
      "why_essential": "Tony Stark goes rogue to hunt down and destroy every piece of tech stolen from his armor; a bona fide classic.",
      "bestof_rank": 83
    }
  },
  {
    "id": "marvel-27",
    "completed": false,
    "fields": {
      "pub_order": 27,
      "storyline": "Silver Surfer: Parable",
      "franchise": "Silver Surfer",
      "issues": "Silver Surfer: Parable #1–2",
      "years": "1988",
      "creators": "Stan Lee / Moebius",
      "why_essential": "Galactus returns to Earth posing as a benevolent god in this landmark prestige-format one-shot.",
      "bestof_rank": 91
    }
  },
  {
    "id": "marvel-28",
    "completed": false,
    "fields": {
      "pub_order": 28,
      "storyline": "Triumph and Torment",
      "franchise": "Doctor Strange",
      "issues": "Doctor Strange and Doctor Doom: Triumph and Torment (graphic novel)",
      "years": "1989",
      "creators": "Roger Stern / Mike Mignola",
      "why_essential": "A beloved one-shot pitting Strange against Doom over the fate of Doom's mother's soul in Hell.",
      "bestof_rank": 90
    }
  },
  {
    "id": "marvel-29",
    "completed": false,
    "fields": {
      "pub_order": 29,
      "storyline": "Spider-Man: Torment",
      "franchise": "Spider-Man",
      "issues": "Spider-Man (vol. 1) #1–5",
      "years": "1990",
      "creators": "Todd McFarlane / Todd McFarlane",
      "why_essential": "McFarlane's explosive, visually iconic launch of the flagship 'Spider-Man' title opposite the Lizard.",
      "bestof_rank": 63
    }
  },
  {
    "id": "marvel-30",
    "completed": false,
    "fields": {
      "pub_order": 30,
      "storyline": "Streets of Poison",
      "franchise": "Captain America",
      "issues": "Captain America #372–378",
      "years": "1990",
      "creators": "Mark Gruenwald / Rik Levins",
      "why_essential": "Cap battles a designer super-drug epidemic in an iconic arc from Gruenwald's landmark decade-long run.",
      "bestof_rank": 81
    }
  },
  {
    "id": "marvel-31",
    "completed": false,
    "fields": {
      "pub_order": 31,
      "storyline": "The Thanos Quest",
      "franchise": "Cosmic",
      "issues": "The Thanos Quest #1–2",
      "years": "1990",
      "creators": "Jim Starlin / Ron Lim",
      "why_essential": "Thanos systematically hunts down the Infinity Gems from their keepers; the direct prelude to Infinity Gauntlet.",
      "bestof_rank": 92
    }
  },
  {
    "id": "marvel-32",
    "completed": false,
    "fields": {
      "pub_order": 32,
      "storyline": "The Infinity Gauntlet",
      "franchise": "Cosmic / Avengers",
      "issues": "Infinity Gauntlet #1–6",
      "years": "1991",
      "creators": "Jim Starlin / George Perez, Ron Lim",
      "why_essential": "Thanos wields the six Infinity Gems to erase half of all life — basis for the MCU's Infinity War/Endgame.",
      "bestof_rank": 27
    }
  },
  {
    "id": "marvel-33",
    "completed": false,
    "fields": {
      "pub_order": 33,
      "storyline": "Weapon X",
      "franchise": "Wolverine",
      "issues": "Marvel Comics Presents #72–84",
      "years": "1991",
      "creators": "Barry Windsor-Smith / Barry Windsor-Smith",
      "why_essential": "The definitive telling of how Logan's adamantium skeleton was forged; a harrowing body-horror classic.",
      "bestof_rank": 59
    }
  },
  {
    "id": "marvel-34",
    "completed": false,
    "fields": {
      "pub_order": 34,
      "storyline": "Infinity War",
      "franchise": "Cosmic / Avengers",
      "issues": "Infinity War #1–6",
      "years": "1992",
      "creators": "Jim Starlin / Ron Lim",
      "why_essential": "The Magus splits Marvel's heroes into good/evil doubles in this sprawling sequel to Infinity Gauntlet.",
      "bestof_rank": 28
    }
  },
  {
    "id": "marvel-35",
    "completed": false,
    "fields": {
      "pub_order": 35,
      "storyline": "X-Cutioner's Song",
      "franchise": "X-Men crossover",
      "issues": "Uncanny X-Men #294–297, X-Men #14–16, X-Factor #84–86, X-Force #18–21",
      "years": "1992",
      "creators": "Fabian Nicieza, Scott Lobdell, Peter David, et al.",
      "why_essential": "Beloved 90s crossover resolving the Cable/Stryfe mystery and reshaping the Summers family saga.",
      "bestof_rank": 54
    }
  },
  {
    "id": "marvel-36",
    "completed": false,
    "fields": {
      "pub_order": 36,
      "storyline": "Operation: Galactic Storm",
      "franchise": "Avengers crossover",
      "issues": "Avengers #345–347, Avengers West Coast #80–83, Quasar #32–34, Wonder Man #7–9, Captain America #398–400, Iron Man #278–279, Thor #445–446",
      "years": "1992",
      "creators": "Various",
      "why_essential": "A Kree/Shi'ar war forces the Avengers to split into morally opposed factions; a genuinely consequential 90s event.",
      "bestof_rank": 70
    }
  },
  {
    "id": "marvel-37",
    "completed": false,
    "fields": {
      "pub_order": 37,
      "storyline": "Future Imperfect",
      "franchise": "Hulk",
      "issues": "Hulk: Future Imperfect #1–2",
      "years": "1992",
      "creators": "Peter David / George Perez",
      "why_essential": "Introduces the Maestro, a tyrannical future Hulk, in one of the character's darkest and best-loved stories.",
      "bestof_rank": 86
    }
  },
  {
    "id": "marvel-38",
    "completed": false,
    "fields": {
      "pub_order": 38,
      "storyline": "Maximum Carnage",
      "franchise": "Spider-Man crossover",
      "issues": "Amazing Spider-Man #378–380, Spider-Man #35–37, Spider-Man Unlimited #1–2, Web of Spider-Man #101–103, Spectacular Spider-Man #201–203",
      "years": "1993",
      "creators": "Various",
      "why_essential": "Sprawling, gleefully violent 90s event pitting Spidey and Venom against Carnage's gang; a fan-favorite of the era.",
      "bestof_rank": 18
    }
  },
  {
    "id": "marvel-39",
    "completed": false,
    "fields": {
      "pub_order": 39,
      "storyline": "Fatal Attractions",
      "franchise": "X-Men crossover",
      "issues": "X-Men (vol. 2) #25, Uncanny X-Men #304, Wolverine #75, X-Factor #92, X-Force #25",
      "years": "1993",
      "creators": "Various",
      "why_essential": "Magneto rips the adamantium from Wolverine's skeleton in one of the X-Men's most iconic single images.",
      "bestof_rank": 55
    }
  },
  {
    "id": "marvel-40",
    "completed": false,
    "fields": {
      "pub_order": 40,
      "storyline": "Marvels",
      "franchise": "Marvel Universe",
      "issues": "Marvels #1–4",
      "years": "1994",
      "creators": "Kurt Busiek / Alex Ross",
      "why_essential": "A painted, street-level retelling of Marvel history seen through the eyes of an ordinary bystander photographer.",
      "bestof_rank": 95
    }
  },
  {
    "id": "marvel-41",
    "completed": false,
    "fields": {
      "pub_order": 41,
      "storyline": "The Age of Apocalypse",
      "franchise": "X-Men",
      "issues": "X-Men Alpha #1 → (Amazing X-Men, X-Man, Astonishing X-Men, Generation Next, X-Calibre, Factor X, Weapon X, Gambit and the X-Ternals) → X-Men Omega #1",
      "years": "1995",
      "creators": "Scott Lobdell, Fabian Nicieza, Mark Waid, et al.",
      "why_essential": "Line-wide alternate-reality event imagining a world where Xavier died and Apocalypse rules; one of the best-loved 90s events.",
      "bestof_rank": 6
    }
  },
  {
    "id": "marvel-42",
    "completed": false,
    "fields": {
      "pub_order": 42,
      "storyline": "Onslaught",
      "franchise": "X-Men / Avengers / FF crossover",
      "issues": "X-Men: Onslaught Alpha → (Uncanny X-Men #333–334, X-Men #55–56, Avengers #401–402, Fantastic Four #415–416, etc.) → X-Men: Onslaught Omega",
      "years": "1996",
      "creators": "Various",
      "why_essential": "Massive line-wide event that 'killed' the Avengers and FF, launching the Heroes Reborn era.",
      "bestof_rank": 56
    }
  },
  {
    "id": "marvel-43",
    "completed": false,
    "fields": {
      "pub_order": 43,
      "storyline": "Guardian Devil",
      "franchise": "Daredevil",
      "issues": "Daredevil (vol. 2) #1–8",
      "years": "1998–1999",
      "creators": "Kevin Smith / Joe Quesada",
      "why_essential": "Relaunched the Daredevil franchise and reinvigorated the character for a new generation of readers.",
      "bestof_rank": 33
    }
  },
  {
    "id": "marvel-44",
    "completed": false,
    "fields": {
      "pub_order": 44,
      "storyline": "The Client",
      "franchise": "Black Panther",
      "issues": "Black Panther (vol. 3) #1–6",
      "years": "1998",
      "creators": "Christopher Priest / Mark Texeira",
      "why_essential": "Priest's genre-bending, non-linear relaunch is considered the definitive modern take on T'Challa.",
      "bestof_rank": 48
    }
  },
  {
    "id": "marvel-45",
    "completed": false,
    "fields": {
      "pub_order": 45,
      "storyline": "Avengers Forever",
      "franchise": "Avengers",
      "issues": "Avengers Forever #1–12",
      "years": "1998–1999",
      "creators": "Kurt Busiek / Carlos Pacheco",
      "why_essential": "A time-spanning, continuity-deep celebration of Avengers history built around Kang and Rick Jones.",
      "bestof_rank": 71
    }
  },
  {
    "id": "marvel-46",
    "completed": false,
    "fields": {
      "pub_order": 46,
      "storyline": "Welcome Back, Frank",
      "franchise": "Punisher",
      "issues": "Punisher (vol. 4) #1–12",
      "years": "2000",
      "creators": "Garth Ennis / Steve Dillon",
      "why_essential": "Ennis's darkly comic relaunch redefined the Punisher for the 2000s and remains the character's most acclaimed run.",
      "bestof_rank": 42
    }
  },
  {
    "id": "marvel-47",
    "completed": false,
    "fields": {
      "pub_order": 47,
      "storyline": "Ultimate Spider-Man: Origin",
      "franchise": "Spider-Man (Ultimate)",
      "issues": "Ultimate Spider-Man #1–7",
      "years": "2000",
      "creators": "Brian Michael Bendis / Mark Bagley",
      "why_essential": "The definitive modern retelling of Spider-Man's origin; the foundation of the entire Ultimate Marvel line.",
      "bestof_rank": 66
    }
  },
  {
    "id": "marvel-48",
    "completed": false,
    "fields": {
      "pub_order": 48,
      "storyline": "E for Extinction / New X-Men",
      "franchise": "X-Men",
      "issues": "New X-Men #114–154",
      "years": "2001–2004",
      "creators": "Grant Morrison / Frank Quitely et al.",
      "why_essential": "Radical, high-concept reinvention of the X-Men for the 21st century; Genosha's genocide and Xorn twist still discussed today.",
      "bestof_rank": 7
    }
  },
  {
    "id": "marvel-49",
    "completed": false,
    "fields": {
      "pub_order": 49,
      "storyline": "Coming Home",
      "franchise": "Spider-Man",
      "issues": "Amazing Spider-Man (vol. 2) #30–35",
      "years": "2001",
      "creators": "J. Michael Straczynski / John Romita Jr.",
      "why_essential": "Kicked off JMS's acclaimed run, reintroducing mysticism and totemic themes to Spider-Man's mythology.",
      "bestof_rank": 19
    }
  },
  {
    "id": "marvel-50",
    "completed": false,
    "fields": {
      "pub_order": 50,
      "storyline": "Underboss",
      "franchise": "Daredevil",
      "issues": "Daredevil (vol. 2) #26–31",
      "years": "2001",
      "creators": "Brian Michael Bendis / Alex Maleev",
      "why_essential": "Noir-soaked mob-war arc that began Bendis and Maleev's celebrated run.",
      "bestof_rank": 34
    }
  },
  {
    "id": "marvel-51",
    "completed": false,
    "fields": {
      "pub_order": 51,
      "storyline": "The Kang Dynasty",
      "franchise": "Avengers",
      "issues": "Avengers (vol. 3) #41–55",
      "years": "2001",
      "creators": "Kurt Busiek, Geoff Johns / Alan Davis",
      "why_essential": "Kang conquers the Earth in a sprawling, satisfying epic widely considered a high point of the Busiek run.",
      "bestof_rank": 72
    }
  },
  {
    "id": "marvel-52",
    "completed": false,
    "fields": {
      "pub_order": 52,
      "storyline": "Fantastic Four: 1234",
      "franchise": "Fantastic Four",
      "issues": "Fantastic Four (vol. 3) #1–4",
      "years": "2001",
      "creators": "Grant Morrison / Jae Lee",
      "why_essential": "A moody, psychologically sharp reinvention of the team's core dynamic centered on Doctor Doom.",
      "bestof_rank": 76
    }
  },
  {
    "id": "marvel-53",
    "completed": false,
    "fields": {
      "pub_order": 53,
      "storyline": "Alias",
      "franchise": "Jessica Jones",
      "issues": "Alias #1–28",
      "years": "2001–2004",
      "creators": "Brian Michael Bendis / Michael Gaydos",
      "why_essential": "A landmark Marvel MAX noir series that introduced Jessica Jones and pioneered mature, grounded Marvel storytelling.",
      "bestof_rank": 94
    }
  },
  {
    "id": "marvel-54",
    "completed": false,
    "fields": {
      "pub_order": 54,
      "storyline": "Spider-Man: Blue",
      "franchise": "Spider-Man",
      "issues": "Spider-Man: Blue #1–6",
      "years": "2002",
      "creators": "Jeph Loeb / Tim Sale",
      "why_essential": "A wistful, nostalgic retelling of Peter and Gwen Stacy's early romance narrated after her death.",
      "bestof_rank": 65
    }
  },
  {
    "id": "marvel-55",
    "completed": false,
    "fields": {
      "pub_order": 55,
      "storyline": "The Ultimates",
      "franchise": "Ultimate Avengers",
      "issues": "The Ultimates #1–13",
      "years": "2002",
      "creators": "Mark Millar / Bryan Hitch",
      "why_essential": "A blockbuster, cinematic reinvention of the Avengers that directly inspired the tone of the MCU's Avengers films.",
      "bestof_rank": 96
    }
  },
  {
    "id": "marvel-56",
    "completed": false,
    "fields": {
      "pub_order": 56,
      "storyline": "Unthinkable",
      "franchise": "Fantastic Four",
      "issues": "Fantastic Four (vol. 3) #67–70",
      "years": "2003",
      "creators": "Mark Waid / Mike Wieringo",
      "why_essential": "Doctor Doom hits the FF where it hurts most; a modern classic from Waid's acclaimed run.",
      "bestof_rank": 31
    }
  },
  {
    "id": "marvel-57",
    "completed": false,
    "fields": {
      "pub_order": 57,
      "storyline": "Runaways: Pride & Joy / Teenage Wasteland",
      "franchise": "Runaways",
      "issues": "Runaways (vol. 1) #1–18",
      "years": "2003–2004",
      "creators": "Brian K. Vaughan / Adrian Alphona",
      "why_essential": "Teenagers discover their parents are supervillains; a critically beloved, self-contained YA-superhero classic.",
      "bestof_rank": 47
    }
  },
  {
    "id": "marvel-58",
    "completed": false,
    "fields": {
      "pub_order": 58,
      "storyline": "Truth: Red, White & Black",
      "franchise": "Captain America",
      "issues": "Truth: Red, White & Black #1–7",
      "years": "2003",
      "creators": "Robert Morales / Kyle Baker",
      "why_essential": "Reveals Isaiah Bradley, a Black super-soldier erased from history; a powerful, difficult, essential Cap story.",
      "bestof_rank": 80
    }
  },
  {
    "id": "marvel-59",
    "completed": false,
    "fields": {
      "pub_order": 59,
      "storyline": "Punisher: Born",
      "franchise": "Punisher",
      "issues": "Punisher: Born #1–4",
      "years": "2003",
      "creators": "Garth Ennis / Darick Robertson",
      "why_essential": "A brutal Vietnam-set origin explaining that Frank Castle was already becoming the Punisher before Frank Castle existed.",
      "bestof_rank": 89
    }
  },
  {
    "id": "marvel-60",
    "completed": false,
    "fields": {
      "pub_order": 60,
      "storyline": "Astonishing X-Men: Gifted",
      "franchise": "X-Men",
      "issues": "Astonishing X-Men (vol. 3) #1–6",
      "years": "2004",
      "creators": "Joss Whedon / John Cassaday",
      "why_essential": "A tight, character-driven arc that resurrected Colossus and set the modern template for X-Men storytelling.",
      "bestof_rank": 8
    }
  },
  {
    "id": "marvel-61",
    "completed": false,
    "fields": {
      "pub_order": 61,
      "storyline": "Avengers Disassembled",
      "franchise": "Avengers",
      "issues": "Avengers #500–503",
      "years": "2004",
      "creators": "Brian Michael Bendis / David Finch",
      "why_essential": "Explosive, controversial arc that ended the classic Avengers era and launched the Bendis 'New Avengers' age.",
      "bestof_rank": 24
    }
  },
  {
    "id": "marvel-62",
    "completed": false,
    "fields": {
      "pub_order": 62,
      "storyline": "New Avengers: Breakout",
      "franchise": "Avengers",
      "issues": "New Avengers #1–6",
      "years": "2004",
      "creators": "Brian Michael Bendis / David Finch",
      "why_essential": "A prison break at the Raft reforms the Avengers into a leaner, street-level-adjacent roster.",
      "bestof_rank": 73
    }
  },
  {
    "id": "marvel-63",
    "completed": false,
    "fields": {
      "pub_order": 63,
      "storyline": "House of M",
      "franchise": "X-Men / Avengers",
      "issues": "House of M #1–8",
      "years": "2005",
      "creators": "Brian Michael Bendis / Olivier Coipel",
      "why_essential": "Scarlet Witch's reality-warp and the 'No More Mutants' fallout reshaped the X-Men line for a decade.",
      "bestof_rank": 9
    }
  },
  {
    "id": "marvel-64",
    "completed": false,
    "fields": {
      "pub_order": 64,
      "storyline": "The Winter Soldier",
      "franchise": "Captain America",
      "issues": "Captain America (vol. 5) #1–9, #11–14",
      "years": "2005",
      "creators": "Ed Brubaker / Steve Epting",
      "why_essential": "Bucky Barnes returns from the dead as a brainwashed Soviet assassin; reshaped Cap's mythology and inspired the MCU film.",
      "bestof_rank": 35
    }
  },
  {
    "id": "marvel-65",
    "completed": false,
    "fields": {
      "pub_order": 65,
      "storyline": "Extremis",
      "franchise": "Iron Man",
      "issues": "Iron Man (vol. 4) #1–6",
      "years": "2005–2006",
      "creators": "Warren Ellis / Adi Granov",
      "why_essential": "Rebooted Iron Man's tech and origin for the modern age; heavily influenced the visual design of the MCU armor.",
      "bestof_rank": 38
    }
  },
  {
    "id": "marvel-66",
    "completed": false,
    "fields": {
      "pub_order": 66,
      "storyline": "Deadly Genesis",
      "franchise": "X-Men",
      "issues": "X-Men: Deadly Genesis #1–5",
      "years": "2005",
      "creators": "Ed Brubaker / Trevor Hairsine",
      "why_essential": "Reveals the tragic fate of the 'lost' X-Men team that rescued the original team from the Living Island.",
      "bestof_rank": 61
    }
  },
  {
    "id": "marvel-67",
    "completed": false,
    "fields": {
      "pub_order": 67,
      "storyline": "Civil War",
      "franchise": "Avengers-wide event",
      "issues": "Civil War #1–7 (core; Amazing Spider-Man #529–531 and Captain America #22–24 recommended)",
      "years": "2006",
      "creators": "Mark Millar / Steve McNiven",
      "why_essential": "Superhero registration divides Earth's heroes; the defining ideological event of 2000s Marvel.",
      "bestof_rank": 25
    }
  },
  {
    "id": "marvel-68",
    "completed": false,
    "fields": {
      "pub_order": 68,
      "storyline": "Planet Hulk",
      "franchise": "Hulk",
      "issues": "Incredible Hulk (vol. 2) #92–105",
      "years": "2006",
      "creators": "Greg Pak / Carlo Pagulayan, Aaron Lopresti",
      "why_essential": "Exiled to an alien gladiator world, Hulk becomes a warrior-king; a sprawling, beloved sci-fi epic.",
      "bestof_rank": 40
    }
  },
  {
    "id": "marvel-69",
    "completed": false,
    "fields": {
      "pub_order": 69,
      "storyline": "Doctor Strange: The Oath",
      "franchise": "Doctor Strange",
      "issues": "Doctor Strange: The Oath #1–5",
      "years": "2006",
      "creators": "Brian K. Vaughan / Marcos Martin",
      "why_essential": "A tight, emotionally grounded mini widely regarded as the best modern Doctor Strange story.",
      "bestof_rank": 43
    }
  },
  {
    "id": "marvel-70",
    "completed": false,
    "fields": {
      "pub_order": 70,
      "storyline": "Annihilation",
      "franchise": "Cosmic / Guardians of the Galaxy",
      "issues": "Annihilation: Prologue, Annihilation #1–6 (with Annihilation: Ronan, Silver Surfer, Super-Skrull minis as optional tie-ins)",
      "years": "2006–2007",
      "creators": "Keith Giffen, Dan Abnett, Andy Lanning / Various",
      "why_essential": "Rebuilt Marvel's cosmic corner from the ground up and set the stage for the modern Guardians of the Galaxy.",
      "bestof_rank": 44
    }
  },
  {
    "id": "marvel-71",
    "completed": false,
    "fields": {
      "pub_order": 71,
      "storyline": "Nextwave: Agents of H.A.T.E.",
      "franchise": "Nextwave",
      "issues": "Nextwave: Agents of H.A.T.E. #1–12",
      "years": "2006",
      "creators": "Warren Ellis / Stuart Immonen",
      "why_essential": "A gleefully absurd, ultra-violent action-comedy send-up of the superhero genre; a cult favorite.",
      "bestof_rank": 97
    }
  },
  {
    "id": "marvel-72",
    "completed": false,
    "fields": {
      "pub_order": 72,
      "storyline": "Messiah Complex",
      "franchise": "X-Men crossover",
      "issues": "Uncanny X-Men #492–494, X-Men #205–207, New X-Men #44–46, X-Factor #25–26, Messiah Complex #1",
      "years": "2007",
      "creators": "Ed Brubaker, Mike Carey, Peter David, et al.",
      "why_essential": "Introduces Hope Summers, the first mutant born after M-Day; splits the X-Men into two camps.",
      "bestof_rank": 10
    }
  },
  {
    "id": "marvel-73",
    "completed": false,
    "fields": {
      "pub_order": 73,
      "storyline": "The Death of Captain America",
      "franchise": "Captain America",
      "issues": "Captain America (vol. 5) #25–42 ('The Death of Captain America' trilogy)",
      "years": "2007–2009",
      "creators": "Ed Brubaker / Steve Epting, Butch Guice",
      "why_essential": "Steve Rogers is assassinated post-Civil War, and Bucky steps up as the new Captain America.",
      "bestof_rank": 36
    }
  },
  {
    "id": "marvel-74",
    "completed": false,
    "fields": {
      "pub_order": 74,
      "storyline": "World War Hulk",
      "franchise": "Hulk",
      "issues": "World War Hulk #1–5 (plus tie-ins in Incredible Hulk #106–111)",
      "years": "2007",
      "creators": "Greg Pak / John Romita Jr.",
      "why_essential": "Hulk returns to Earth for brutal revenge on the heroes who exiled him; direct sequel to Planet Hulk.",
      "bestof_rank": 41
    }
  },
  {
    "id": "marvel-75",
    "completed": false,
    "fields": {
      "pub_order": 75,
      "storyline": "Secret Invasion",
      "franchise": "Avengers-wide event",
      "issues": "Secret Invasion #1–8",
      "years": "2008",
      "creators": "Brian Michael Bendis / Leinil Francis Yu",
      "why_essential": "Shape-shifting Skrulls have infiltrated Earth's heroes for years; paranoia-driven event with huge cast.",
      "bestof_rank": 26
    }
  },
  {
    "id": "marvel-76",
    "completed": false,
    "fields": {
      "pub_order": 76,
      "storyline": "Guardians of the Galaxy: Legacy",
      "franchise": "Guardians of the Galaxy",
      "issues": "Guardians of the Galaxy (vol. 2) #1–25",
      "years": "2008–2010",
      "creators": "Dan Abnett, Andy Lanning / Paul Pelletier",
      "why_essential": "The Abnett/Lanning run that created the modern Star-Lord-led team roster later adapted for the MCU.",
      "bestof_rank": 45
    }
  },
  {
    "id": "marvel-77",
    "completed": false,
    "fields": {
      "pub_order": 77,
      "storyline": "Old Man Logan",
      "franchise": "Wolverine",
      "issues": "Wolverine (vol. 3) #66–72, #73–80",
      "years": "2008–2009",
      "creators": "Mark Millar / Steve McNiven",
      "why_essential": "A blind, broken future where villains rule America and an aged Logan is forced to fight again; loosely inspired the film Logan.",
      "bestof_rank": 60
    }
  },
  {
    "id": "marvel-78",
    "completed": false,
    "fields": {
      "pub_order": 78,
      "storyline": "Fantastic Four: Solve Everything",
      "franchise": "Fantastic Four",
      "issues": "Fantastic Four #570–578, #579–588",
      "years": "2009–2011",
      "creators": "Jonathan Hickman / Steve Epting, Various",
      "why_essential": "Ambitious multi-year saga of parallel-Reed Richards councils that culminates in the death of the Human Torch.",
      "bestof_rank": 77
    }
  },
  {
    "id": "marvel-79",
    "completed": false,
    "fields": {
      "pub_order": 79,
      "storyline": "Second Coming",
      "franchise": "X-Men crossover",
      "issues": "X-Force #26–28, New Mutants #12–14, Uncanny X-Men #523–525, X-Men: Second Coming #1–2, X-Men Legacy #235–237",
      "years": "2010",
      "creators": "Various",
      "why_essential": "War for Hope Summers' life; high body count and the return of full-scale mutant conflict.",
      "bestof_rank": 11
    }
  },
  {
    "id": "marvel-80",
    "completed": false,
    "fields": {
      "pub_order": 80,
      "storyline": "Shadowland",
      "franchise": "Daredevil",
      "issues": "Shadowland #1–5 (with Daredevil #508–511 as lead-in)",
      "years": "2010",
      "creators": "Andy Diggle / Billy Tan",
      "why_essential": "Matt Murdock takes over the Hand and builds a fortress in Hell's Kitchen, spiraling into darkness.",
      "bestof_rank": 79
    }
  },
  {
    "id": "marvel-81",
    "completed": false,
    "fields": {
      "pub_order": 81,
      "storyline": "Man Without a Country",
      "franchise": "Captain America (Bucky)",
      "issues": "Captain America (vol. 5) #602–605, #607–609",
      "years": "2010",
      "creators": "Ed Brubaker / Various",
      "why_essential": "Bucky Barnes, now Captain America, goes on the run as a hunted fugitive after apparently dying.",
      "bestof_rank": 82
    }
  },
  {
    "id": "marvel-82",
    "completed": false,
    "fields": {
      "pub_order": 82,
      "storyline": "Schism",
      "franchise": "X-Men",
      "issues": "Schism #1–5",
      "years": "2011",
      "creators": "Jason Aaron / Various",
      "why_essential": "Cyclops and Wolverine's ideological break splits the X-Men into two schools, setting up a decade of divergent teams.",
      "bestof_rank": 12
    }
  },
  {
    "id": "marvel-83",
    "completed": false,
    "fields": {
      "pub_order": 83,
      "storyline": "Age of X",
      "franchise": "X-Men",
      "issues": "Age of X: Alpha, X-Men Legacy #245–247, New Mutants #22–24, Age of X: Omega",
      "years": "2011",
      "creators": "Mike Carey / Various",
      "why_essential": "A dark, walled-off pocket-universe reality warp centered on Legion; a tightly-told alternate-reality gem.",
      "bestof_rank": 57
    }
  },
  {
    "id": "marvel-84",
    "completed": false,
    "fields": {
      "pub_order": 84,
      "storyline": "The Dark Angel Saga",
      "franchise": "X-Men (X-Force)",
      "issues": "Uncanny X-Force #18–25",
      "years": "2011",
      "creators": "Rick Remender / Jerome Opeña, Esad Ribic",
      "why_essential": "Widely praised as one of the best modern X-stories; a black-ops team confronts Archangel's Apocalypse-corrupted future self.",
      "bestof_rank": 58
    }
  },
  {
    "id": "marvel-85",
    "completed": false,
    "fields": {
      "pub_order": 85,
      "storyline": "The Death of Spider-Man",
      "franchise": "Spider-Man (Ultimate)",
      "issues": "Ultimate Spider-Man #156–160",
      "years": "2011",
      "creators": "Brian Michael Bendis / Mark Bagley",
      "why_essential": "The emotional finale of Peter Parker's decade-long Ultimate-universe story, sacrificing himself to save his family.",
      "bestof_rank": 67
    }
  },
  {
    "id": "marvel-86",
    "completed": false,
    "fields": {
      "pub_order": 86,
      "storyline": "Ultimate Comics Spider-Man: Miles Morales",
      "franchise": "Spider-Man (Ultimate)",
      "issues": "Ultimate Comics Spider-Man #1–5",
      "years": "2011",
      "creators": "Brian Michael Bendis / Sara Pichelli",
      "why_essential": "Introduces Miles Morales, who would go on to become one of Marvel's most popular modern heroes.",
      "bestof_rank": 68
    }
  },
  {
    "id": "marvel-87",
    "completed": false,
    "fields": {
      "pub_order": 87,
      "storyline": "My Life as a Weapon",
      "franchise": "Hawkeye",
      "issues": "Hawkeye (vol. 4) #1–22",
      "years": "2012–2015",
      "creators": "Matt Fraction / David Aja, Annie Wu",
      "why_essential": "'This is what I do when I'm not being an Avenger' — a stylish, street-level indie-comics take on a C-list Avenger that became a modern classic.",
      "bestof_rank": 50
    }
  },
  {
    "id": "marvel-88",
    "completed": false,
    "fields": {
      "pub_order": 88,
      "storyline": "Avengers vs. X-Men",
      "franchise": "Avengers / X-Men crossover",
      "issues": "Avengers vs. X-Men #0–12",
      "years": "2012",
      "creators": "Brian Michael Bendis, Jonathan Hickman, Jason Aaron, Matt Fraction, Ed Brubaker / John Romita Jr., Olivier Coipel",
      "why_essential": "The Phoenix Force's return pits Marvel's two flagship teams against each other in an all-star event.",
      "bestof_rank": 75
    }
  },
  {
    "id": "marvel-89",
    "completed": false,
    "fields": {
      "pub_order": 89,
      "storyline": "Superior Spider-Man",
      "franchise": "Spider-Man",
      "issues": "Superior Spider-Man #1–31",
      "years": "2013",
      "creators": "Dan Slott / Ryan Stegman, Humberto Ramos, Giuseppe Camuncoli",
      "why_essential": "Doctor Octopus takes over Peter Parker's body and life in a bold, divisive, widely-acclaimed year-long arc.",
      "bestof_rank": 69
    }
  },
  {
    "id": "marvel-90",
    "completed": false,
    "fields": {
      "pub_order": 90,
      "storyline": "Age of Ultron",
      "franchise": "Avengers",
      "issues": "Age of Ultron #1–10",
      "years": "2013",
      "creators": "Brian Michael Bendis / Bryan Hitch, Brandon Peterson, Carlos Pacheco",
      "why_essential": "Ultron conquers Earth and the heroes fracture time itself trying to undo it, in a sprawling event.",
      "bestof_rank": 74
    }
  },
  {
    "id": "marvel-91",
    "completed": false,
    "fields": {
      "pub_order": 91,
      "storyline": "The God Butcher",
      "franchise": "Thor",
      "issues": "Thor: God of Thunder #1–5",
      "years": "2013",
      "creators": "Jason Aaron / Esad Ribic",
      "why_essential": "An acclaimed modern relaunch spanning three eras of Thor's life, introducing the terrifying Gorr the God Butcher.",
      "bestof_rank": 85
    }
  },
  {
    "id": "marvel-92",
    "completed": false,
    "fields": {
      "pub_order": 92,
      "storyline": "Spider-Verse",
      "franchise": "Spider-Man",
      "issues": "Amazing Spider-Man (vol. 3) #9–15, Superior Spider-Man #32–33, Spider-Man 2099 #5–6, Edge of Spider-Verse #1–5, Spider-Verse #1–2",
      "years": "2014–2015",
      "creators": "Dan Slott / Olivier Coipel, et al.",
      "why_essential": "Multiversal Spider-people epic that redefined the concept later used in the animated Spider-Verse films.",
      "bestof_rank": 20
    }
  },
  {
    "id": "marvel-93",
    "completed": false,
    "fields": {
      "pub_order": 93,
      "storyline": "Ms. Marvel: No Normal",
      "franchise": "Ms. Marvel",
      "issues": "Ms. Marvel (vol. 3) #1–6",
      "years": "2014",
      "creators": "G. Willow Wilson / Adrian Alphona",
      "why_essential": "Kamala Khan's origin; one of the most acclaimed and culturally significant modern Marvel launches.",
      "bestof_rank": 46
    }
  },
  {
    "id": "marvel-94",
    "completed": false,
    "fields": {
      "pub_order": 94,
      "storyline": "Higher, Further, Faster, More",
      "franchise": "Captain Marvel",
      "issues": "Captain Marvel (vol. 7) #1–6",
      "years": "2014",
      "creators": "Kelly Sue DeConnick / Dexter Soy",
      "why_essential": "The modern Carol Danvers relaunch that redefined Captain Marvel for a new generation of readers.",
      "bestof_rank": 93
    }
  },
  {
    "id": "marvel-95",
    "completed": false,
    "fields": {
      "pub_order": 95,
      "storyline": "Spider-Gwen: Most Wanted?",
      "franchise": "Spider-Gwen",
      "issues": "Edge of Spider-Verse #2, Spider-Gwen (vol. 1) #1–5",
      "years": "2014–2015",
      "creators": "Jason Latour / Robbi Rodriguez",
      "why_essential": "The breakout introduction of Gwen Stacy as Spider-Woman, which became a full-blown pop-culture phenomenon.",
      "bestof_rank": 100
    }
  },
  {
    "id": "marvel-96",
    "completed": false,
    "fields": {
      "pub_order": 96,
      "storyline": "Learning to Crawl",
      "franchise": "Squirrel Girl",
      "issues": "The Unbeatable Squirrel Girl (vol. 2) #1–8",
      "years": "2015",
      "creators": "Ryan North / Erica Henderson",
      "why_essential": "A joyfully funny, critically acclaimed modern all-ages classic starring Marvel's most unbeatable hero.",
      "bestof_rank": 98
    }
  },
  {
    "id": "marvel-97",
    "completed": false,
    "fields": {
      "pub_order": 97,
      "storyline": "The Vision",
      "franchise": "Vision",
      "issues": "Vision #1–12",
      "years": "2015–2016",
      "creators": "Tom King / Gabriel Hernandez Walta",
      "why_essential": "A suburban-gothic tragedy about an android trying to be human; widely ranked among the best Marvel comics of the 2010s.",
      "bestof_rank": 99
    }
  },
  {
    "id": "marvel-98",
    "completed": false,
    "fields": {
      "pub_order": 98,
      "storyline": "A Nation Under Our Feet",
      "franchise": "Black Panther",
      "issues": "Black Panther (vol. 6) #1–12",
      "years": "2016",
      "creators": "Ta-Nehisi Coates / Brian Stelfreeze",
      "why_essential": "Acclaimed literary re-imagining of Wakanda's politics and monarchy from the National Book Award-winning author.",
      "bestof_rank": 49
    }
  },
  {
    "id": "marvel-99",
    "completed": false,
    "fields": {
      "pub_order": 99,
      "storyline": "Immortal Hulk",
      "franchise": "Hulk",
      "issues": "Immortal Hulk #1–25 (opening arc)",
      "years": "2018–2019",
      "creators": "Al Ewing / Joe Bennett",
      "why_essential": "A horror-tinged reinvention of the Hulk mythos widely regarded as the best Hulk story in decades.",
      "bestof_rank": 87
    }
  },
  {
    "id": "marvel-100",
    "completed": false,
    "fields": {
      "pub_order": 100,
      "storyline": "House of X / Powers of X",
      "franchise": "X-Men",
      "issues": "House of X #1–6, Powers of X #1–6 (read interleaved: HoX1, PoX1, HoX2, PoX2...)",
      "years": "2019",
      "creators": "Jonathan Hickman / Pepe Larraz, R.B. Silva",
      "why_essential": "Total reinvention of mutant society, Krakoa, and X-Men continuity; arguably the most influential X-story since Claremont.",
      "bestof_rank": 13
    }
  }
],
  createdAt: "2026-07-02T00:00:00.000Z",
  sortField: "pub_order",
  sortDir: "asc",
};

