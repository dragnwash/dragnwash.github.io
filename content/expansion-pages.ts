import type { SeoPageDefinition } from "@/config/types";

/** New SEO pages added after launch — keep separate from frozen generated pages.json. */
export const expansionPages: SeoPageDefinition[] = [
  {
    enabled: true,
    slug: "gameplay",
    pageType: "guide",
    navLabel: "Gameplay",
    title: "Drag'n Wash Gameplay & Full Playthrough Guide",
    description:
      "Explore Drag'n Wash gameplay, its cleaning loop, progression and full playthrough flow, with spoiler-aware tips and links to detailed guides for first runs.",
    keywords: [
      "Drag'n Wash gameplay",
      "Drag n Wash gameplay",
      "full gameplay",
      "playthrough",
      "Drag'n Wash playthrough",
    ],
    primaryKeyword: "Drag'n Wash gameplay",
    secondaryKeywords: ["Drag n Wash gameplay", "full gameplay", "playthrough"],
    searchIntent: "Understand the gameplay loop and a full playthrough flow without a second beginner guide",
    priority: "P1",
    navVisible: true,
    hero: {
      eyebrow: "Gameplay overview",
      heading: "Drag'n Wash Gameplay and Playthrough Guide",
      lead: "Learn how Drag'n Wash gameplay works: the wash-and-comfort loop, how a playthrough progresses, and where to branch into detailed beginner, controls, and endings guides.",
    },
    sections: [
      {
        id: "gameplay-at-a-glance",
        heading: "Drag'n Wash Gameplay at a Glance",
        intro: "A short orientation before you dive into the loop.",
        paragraphs: [
          "Drag'n Wash is a single-player simulation where you run a soap-and-wash service for dragons. Official store copy frames each session around washing thoroughly, chatting during visits, and tending to requests as comfort grows—not combat, crafting, or loot tables.",
          "Each ending is described as roughly ninety minutes. That pacing means a full playthrough is a focused evening session, and early habits—camera care, thorough cleaning, and named saves—matter more than memorizing fragile dialogue trees.",
          "Use this page for the gameplay loop and playthrough shape. For step-by-step first washes, open the beginner guide; for route endings, open the endings guide.",
        ],
        links: [
          {
            label: "Beginner wash tips",
            slug: "beginner-guide",
            description: "First-session wash passes, stuck clean-bar checks, and save habits.",
          },
        ],
      },
      {
        id: "gameplay-flow-table",
        heading: "Gameplay Flow at a Glance",
        intro: "A scannable map of the playthrough stages players actually move through.",
        table: {
          caption: "Gameplay stages, player tasks, common blockers, and detailed guides",
          columns: ["Stage", "What you do", "Common blocker", "Detailed guide"],
          rows: [
            [
              "First visits",
              "Learn camera angles, soap/wash coverage, and basic chat prompts",
              "Missed dirt while the clean bar looks full",
              "Beginner guide",
            ],
            [
              "Comfort growth",
              "Keep washes complete and answer on-screen requests as they appear",
              "Skipping a highlighted personal request",
              "Controls & tools / Escape guide",
            ],
            [
              "Discovery clear",
              "Finish one full route without forcing a specialty",
              "Overwriting the only save before late branches",
              "Endings guide save tips",
            ],
            [
              "Specialized replays",
              "Prioritize one dragon’s comfort arc per replay with named slots",
              "Treating a credits file as a flexible hub",
              "Endings guide + character pages",
            ],
          ],
        },
        paragraphs: [
          "The table is a planning aid, not a spoiler sheet. Exact dialogue trees change with patches; thorough washes, prompt-following, and labeled saves stay useful across updates.",
        ],
      },
      {
        id: "core-gameplay-loop",
        heading: "How the Core Gameplay Loop Works",
        paragraphs: [
          "A visit usually moves through cleaning, conversation, and comfort-gated requests. Keep dirt coverage complete before you assume a job is done; community notes often point to hard-to-see spots when a clean bar looks full but the visit will not end.",
          "Comfort sits on top of cleaning. Thorough washes keep the visit moving; attentive chat and on-screen prompts raise comfort so new requests can appear. Official framing is “tend to requests as comfort grows,” not a published percentage meter.",
          "When a personal request appears, treat the highlighted order as part of that visit’s critical path. Completing asks out of the prompted sequence is a known softlock risk on later Conrad visits, so the safe habit is mechanical: finish the current prompt, then return to remaining wash work.",
        ],
        links: [
          {
            label: "Controls and tools",
            slug: "controls-and-tools",
            description: "Controller support, Options toggles, and wash-tool habits.",
          },
        ],
      },
      {
        id: "full-playthrough-progression",
        heading: "Full Playthrough Progression",
        paragraphs: [
          "A practical full playthrough usually starts with one discovery clear. Meet whoever arrives, learn the wash loop, and keep at least one named hub save before late branches feel locked in.",
          "After that discovery clear, specialize. Community route talk commonly orients around Ryan, Alexander, and Conrad. Official materials confirm three endings at short-novel length; specializing comfort attention per dragon is the completionist path players discuss most.",
          "Protect progress with separate saves before late visits. A credits file is a finished slot, not a flexible hub. Name slots by focus—such as a pre-late Ryan file—so a midnight reload stays trustworthy.",
        ],
      },
      {
        id: "gameplay-tips-first-run",
        heading: "Gameplay Tips for a First Run",
        paragraphs: [
          "Prioritize visibility and coverage over speed. Orbit the camera, recheck tails and necks, and restart a job if the clean bar stalls while dirt remains.",
          "Answer comfort prompts as they appear instead of saving every request for later. The loop rewards staying with the current visit’s highlights.",
          "Comfort growth can unlock mature romance content deeper in a route. Stay with the systems the visit shows on screen, and branch to the endings guide only when you are ready for spoiler-aware planning.",
        ],
        links: [
          {
            label: "Unstick and softlock escapes",
            slug: "how-to-escape",
            description: "Pause-menu Unstick Kobold, clean-bar leftovers, and reload timing.",
          },
        ],
      },
      {
        id: "choices-and-endings",
        heading: "Where Choices and Endings Matter",
        paragraphs: [
          "Choices matter most when you decide which dragon’s comfort arc to prioritize across a replay. Exact dialogue triggers are patch-fragile and are not duplicated here.",
          "For spoiler-aware ending planning—save-slot strategy, route focus, and softlock labels—use the dedicated endings guide. This gameplay page only marks where those decisions sit in the playthrough.",
        ],
        links: [
          {
            label: "Endings route planning",
            slug: "endings-guide",
            description: "Three-ending structure, save strategy, and route focus notes.",
          },
        ],
      },
    ],
    faq: [
      {
        question: "What is the core Drag'n Wash gameplay loop?",
        answer:
          "Wash thoroughly, keep conversation going, and respond to comfort requests as they appear during a dragon visit. It is a simulation loop, not a combat loop.",
      },
      {
        question: "How long is a full playthrough?",
        answer:
          "Official store copy places each ending near ninety minutes, with three endings total. Plan discovery and specialized replays as separate sessions with named saves.",
      },
      {
        question: "Is this the same as the beginner guide?",
        answer:
          "No. This page explains gameplay flow and playthrough shape. The beginner guide covers first-wash steps, stuck clean-bar checks, and early save habits in more detail.",
      },
      {
        question: "Where should I go for ending spoilers?",
        answer:
          "Use the endings guide for route planning and softlock notes. Character pages give lighter orientation without replacing that guide.",
      },
    ],
    relatedSlugs: ["beginner-guide", "controls-and-tools", "endings-guide"],
    densityTargets: [{ term: "Drag'n Wash gameplay", min: 0.5, max: 3 }],
    lastReviewed: "2026-09-19",
  },
  {
    enabled: true,
    slug: "mods",
    pageType: "guide",
    navLabel: "Mods",
    title: "Drag'n Wash Mods Guide — Types, Setup & Safety",
    description:
      "A practical Drag'n Wash mods guide covering mod types, safe setup checks, compatibility, troubleshooting, and the separate community VR mod guide.",
    keywords: [
      "Drag'n Wash mods",
      "Drag n Wash mods",
      "game mods",
      "modding",
      "Drag'n Wash modding",
    ],
    primaryKeyword: "Drag'n Wash mods",
    secondaryKeywords: ["Drag n Wash mods", "game mods", "modding"],
    searchIntent: "Understand mod types and safe setup without a fake download list or VR tutorial copy",
    priority: "P1",
    navVisible: true,
    hero: {
      eyebrow: "Mods & safety",
      heading: "Drag'n Wash Mods Guide",
      lead: "A practical overview of Drag'n Wash mods: common mod types, what to check before installing anything, compatibility habits, and how VR mods differ from other community tools.",
    },
    sections: [
      {
        id: "mods-overview",
        heading: "Drag'n Wash Mods Overview",
        paragraphs: [
          "Drag'n Wash ships as a flat single-player simulation on Steam and itch. Community mods are optional add-ons maintained by third parties. They can change visuals, quality-of-life behavior, or—separately—headset play.",
          "Always own a legitimate copy of the game, open the mod author’s original release page, and read the current version notes before you change any files. Prefer sources that clearly state requirements and update status.",
          "Because patches can break loaders overnight, treat every install as reversible: back up save folders and the game install before you edit anything.",
        ],
      },
      {
        id: "common-mod-types",
        heading: "Common Types of Mods",
        paragraphs: [
          "Players usually look for a few broad categories: comfort or accessibility tweaks, visual or camera helpers, translation or UI helpers, and experimental framework mods that other tools depend on.",
          "VR support is its own category. Native VR is not listed on the official store pages, so headset play depends on a community project with its own installer notes and risk profile.",
          "If a listing cannot show a clear author page and changelog, skip it. Avoid random mirrors and unlabeled archives.",
        ],
      },
      {
        id: "before-installing",
        heading: "Before Installing Any Mod",
        paragraphs: [
          "Confirm you own the game on Steam or itch and that the mod targets your current build. Check the mod source and version notes for OS support, loader requirements, and known breakages.",
          "Copy your saves somewhere safe. If the tool edits game folders, keep a clean backup of those folders too. Prefer installers or archives that you can remove without hunting random files.",
          "Run the unmodified game once after a patch before layering mods again. That single clean boot makes it obvious whether a new crash belongs to the update or to a leftover plugin.",
        ],
      },
      {
        id: "general-install-workflow",
        heading: "General Mod Installation Workflow",
        steps: [
          {
            heading: "Read the current mod page",
            description: "Follow the author’s install order, loader version, and launch options. Do not assume yesterday’s guide still matches today’s archive.",
          },
          {
            heading: "Back up saves and game files",
            description: "Store a dated copy you can restore if the boot fails or a plugin conflicts with another tool.",
          },
          {
            heading: "Install one change at a time",
            description: "Add a single mod or loader step, then boot. Stacking five changes before the first test makes troubleshooting guesswork.",
          },
          {
            heading: "Verify in a short session",
            description: "Confirm menus, a wash visit, and save/load still work before you invest in a long route.",
          },
        ],
      },
      {
        id: "compatibility-troubleshooting",
        heading: "Compatibility and Troubleshooting",
        paragraphs: [
          "Most failures come from mismatched loaders, leftover files after a game update, or two tools editing the same hook. Remove the newest change first, then re-test.",
          "If the game boots clean without mods but fails with them enabled, disable community plugins before filing a bug with the base game. Keep official troubleshooting separate from mod support channels.",
          "For stuck states that happen in the base game—clean-bar leftovers, geometry traps, or request-order softlocks—use the escape guide. Those issues are not automatically “a mod broke it.”",
        ],
        links: [
          {
            label: "Escape stuck states",
            slug: "how-to-escape",
            description: "Base-game unstick tips that still apply when mods are disabled.",
          },
        ],
      },
      {
        id: "vr-mods-vs-other-mods",
        heading: "VR Mods vs Other Mods",
        paragraphs: [
          "VR mods change how you view and move through the same adult simulation. They usually need extra launch flags, recenter hotkeys, and stronger comfort caution than a simple QoL plugin.",
          "Follow the dedicated VR mod guide for setup and safety, and keep this page focused on general modding habits.",
          "If you only want flat play, you can ignore VR tooling entirely. Nothing in the official feature set requires a headset.",
        ],
        links: [
          {
            label: "Drag'n Wash VR mod guide",
            slug: "vr-mod",
            description: "Community VR setup, launch flags, hotkeys, and safety notes.",
          },
        ],
      },
    ],
    faq: [
      {
        question: "Does Drag'n Wash support mods officially?",
        answer:
          "Official store pages sell the base flat game. Community mods are third-party. Always read the mod author’s terms and requirements.",
      },
      {
        question: "Where should I get Drag'n Wash mods?",
        answer:
          "Use the mod author’s original release page after you own the game. Prefer pages with clear version notes, and avoid unlabeled mirrors.",
      },
      {
        question: "Is the VR mod covered here?",
        answer:
          "Only at a high level. Detailed setup, flags, and comfort notes live on the dedicated VR mod guide so that page can stay specific.",
      },
      {
        question: "Will mods break after updates?",
        answer:
          "They can. Check the mod source and version notes after every game patch, keep backups, and reinstall only what still matches your build.",
      },
    ],
    relatedSlugs: ["vr-mod", "controls-and-tools", "how-to-escape"],
    densityTargets: [{ term: "Drag'n Wash mods", min: 0.5, max: 3 }],
    lastReviewed: "2026-09-19",
  },
  {
    enabled: true,
    slug: "characters/ryan",
    pageType: "guide",
    navLabel: "Ryan",
    title: "Ryan in Drag'n Wash — Character & Route Guide",
    description:
      "Learn about Ryan in Drag'n Wash, including the character's role, visit tone, route context, and links to endings guidance without full spoiler steps.",
    keywords: ["Ryan Drag'n Wash", "Ryan ending", "Ryan route", "Drag'n Wash Ryan"],
    primaryKeyword: "Ryan Drag'n Wash",
    secondaryKeywords: ["Ryan ending", "Ryan route"],
    searchIntent: "Character and route orientation for Ryan with links to endings planning",
    priority: "P2",
    navVisible: false,
    parentSlug: "characters",
    hero: {
      eyebrow: "Character focus",
      heading: "Ryan in Drag'n Wash",
      lead: "Ryan is one of the most searched Drag'n Wash dragons for ending routes. This page covers naming evidence, player-reported visit tone, and where to continue for save planning.",
    },
    sections: [
      {
        id: "quick-answer-ryan",
        heading: "Quick Answer",
        paragraphs: [
          "Ryan is a primary visit partner in Drag'n Wash’s three-ending structure. The name appears in itch comments and in TomXV localization dialogue notes.",
          "Search interest clusters around “Ryan ending” and route planning. Exact trigger sheets are patch-fragile, so this page focuses on identification and planning entry points instead of a spoiler checklist.",
        ],
      },
      {
        id: "ryan-quick-facts",
        heading: "Character Quick Facts",
        table: {
          caption: "Verified and player-reported notes for Ryan",
          columns: ["Field", "Detail", "Evidence label"],
          rows: [
            ["Name", "Ryan", "itch comments + TomXV localization dialogue notes"],
            ["Cast role", "Primary visitor / route focus among the trio", "community cast discussions"],
            ["Common search intent", "Ryan ending / route specialization", "player search patterns"],
            ["Tone notes", "Often described as lively and expressive during washes", "player-reported"],
            ["Official long bio", "Not published on store pages", "official store focus is the wash service"],
          ],
        },
      },
      {
        id: "who-is-ryan",
        heading: "Who Is Ryan?",
        paragraphs: [
          "Ryan sits alongside Alexander and Conrad as one of the three dragons players route around. Spelling matters: cast searches for this game usually mean this trio, not lookalike names from other titles.",
          "Store pages describe the wash service and adult framing rather than encyclopedia-style character bios. Practical Ryan information therefore comes from naming cross-checks plus player route talk.",
        ],
      },
      {
        id: "ryans-role",
        heading: "Ryan's Role in the Story",
        paragraphs: [
          "Official materials package three endings at roughly ninety minutes each. Ryan functions as a comfort-route partner inside that system—not a boss rank or loot entry.",
          "On a discovery clear, meeting Ryan naturally is enough. On later clears, players who want a Ryan-focused ending prioritize those visits and protect the run with separate saves before late branches.",
        ],
      },
      {
        id: "what-players-look-for-ryan",
        heading: "What Players Commonly Look For",
        paragraphs: [
          "Most Ryan searches are not asking for a full romance script. They want confirmation of the name, a sense of visit tone, and a safe path into endings planning.",
          "Exact Ryan ending trigger lists are hard to keep accurate across patches, so this site keeps character orientation here and sends detailed save planning to the endings guide.",
          "Some third-party pages promise full Ryan trigger sheets. Prefer guides that separate naming confirmation from dialogue lists that may go stale after updates.",
          "If you arrived from a misspelled cast page elsewhere, use the characters overview to confirm Ryan, Alexander, and Conrad as the working trio.",
        ],
        links: [
          {
            label: "All Drag'n Wash characters",
            slug: "characters",
            description: "Overview of Ryan, Alexander, and Conrad together.",
          },
        ],
      },
      {
        id: "ryan-route-notes",
        heading: "Route Planning Notes",
        paragraphs: [
          "Player-reported notes often describe Ryan visits as lively and expressive in conversation and reaction during washes. Treat that as orientation, not an official personality dossier.",
          "For progression, keep washes thorough so a missed dirt spot does not stall the job before comfort prompts matter. Answer on-screen requests as they appear.",
          "Label a dedicated pre-late save if you are specializing. Exact dialogue branches are omitted here because they change with patches.",
          "Compared with Conrad, Ryan pages are driven more by ending-search volume than by a documented softlock bulletin. Compared with Alexander, Ryan attracts more standalone ending queries. Keep those differences in mind when you decide which detailed guide to open next.",
        ],
      },
      {
        id: "ryan-ending-guidance",
        heading: "Ryan Ending Guidance",
        paragraphs: [
          "Ryan ending queries are among the most common character searches for this game. Use that demand as a planning signal: specialize comfort attention, keep named saves, and open the endings guide for the three-route structure and softlock labels.",
          "This page does not republish unverified trigger lists. Continue in the endings guide when you want spoiler-aware save-slot strategy.",
        ],
        links: [
          {
            label: "Endings guide for route planning",
            slug: "endings-guide",
            description: "Three-ending structure, named saves, and route planning table.",
          },
        ],
      },
    ],
    faq: [
      {
        question: "Where does the name Ryan come from in Drag'n Wash?",
        answer:
          "Ryan appears in itch comments and TomXV localization dialogue notes. Store pages focus on the wash service rather than long character bios.",
      },
      {
        question: "Why is there no separate Ryan ending guide on this site?",
        answer:
          "Exact Ryan ending triggers change with patches and are easy to get wrong. This site keeps Ryan orientation here and sends detailed save planning to the endings guide.",
      },
      {
        question: "What do players usually mean by a Ryan route?",
        answer:
          "They usually mean specializing comfort attention on Ryan visits across a replay after a discovery clear, protected with named saves before late branches.",
      },
      {
        question: "Is Ryan required to finish the game once?",
        answer:
          "A discovery clear can meet whichever dragon arrives. Specialized Ryan hunting is optional completionist play after you already understand the wash loop.",
      },
    ],
    relatedSlugs: ["characters", "endings-guide", "characters/alexander", "characters/conrad"],
    densityTargets: [{ term: "Ryan", min: 0.8, max: 5 }],
    lastReviewed: "2026-09-19",
  },
  {
    enabled: true,
    slug: "characters/conrad",
    pageType: "guide",
    navLabel: "Conrad",
    title: "Conrad in Drag'n Wash — Character & Route Guide",
    description:
      "A focused guide to Conrad in Drag'n Wash, covering the character's role, request-order caution, route context, and related ending information.",
    keywords: ["Conrad Drag'n Wash", "Conrad ending", "Conrad route", "Conrad softlock"],
    primaryKeyword: "Conrad Drag'n Wash",
    secondaryKeywords: ["Conrad ending", "Conrad softlock"],
    searchIntent: "Character orientation for Conrad with softlock caution and endings links",
    priority: "P2",
    navVisible: false,
    parentSlug: "characters",
    hero: {
      eyebrow: "Character focus",
      heading: "Conrad in Drag'n Wash",
      lead: "Conrad is the cast member most tied to later-visit request-order softlock reports. Use this page for that practical warning, then continue to escape and endings guides as needed.",
    },
    sections: [
      {
        id: "quick-answer-conrad",
        heading: "Quick Answer",
        paragraphs: [
          "Conrad is one of the three primary dragons players discuss for Drag'n Wash routes. The name is established in itch comments and community troubleshooting threads.",
          "The most useful Conrad-specific note is mechanical: later visits can softlock if personal requests are completed out of the prompted order. The official Kobold Hotfix addressed a known level-8 case; community advice still repeats the same order habit.",
        ],
      },
      {
        id: "conrad-quick-facts",
        heading: "Character Quick Facts",
        table: {
          caption: "Verified and player-reported notes for Conrad",
          columns: ["Field", "Detail", "Evidence label"],
          rows: [
            ["Name", "Conrad", "itch comments / community reports"],
            ["Cast role", "Primary visitor / route focus", "community cast discussions"],
            ["Distinct risk", "Later-visit request-order softlock", "official Kobold Hotfix + itch comments"],
            ["Tone notes", "Often described as warmer, steadier, larger-presence visits", "player-reported"],
            ["Recovery links", "Escape guide + endings softlock labels", "site cross-links"],
          ],
        },
      },
      {
        id: "who-is-conrad",
        heading: "Who Is Conrad?",
        paragraphs: [
          "Conrad appears with Ryan and Alexander whenever players talk about the working cast for ending specialization. Misspellings on other sites are common; this page sticks to the Conrad spelling used in itch comments.",
          "Players who enjoy a steadier visit often prioritize Conrad on a second or third clear. Tone notes are player-reported orientation, not an official biography.",
        ],
      },
      {
        id: "conrads-role",
        heading: "Conrad's Role in the Story",
        paragraphs: [
          "Like the rest of the primary cast, Conrad is a comfort-route partner inside the wash service. Official materials confirm three endings; specializing on Conrad is one of the completionist lanes players talk about.",
          "On an early discovery clear, you can meet Conrad without forcing a route. On later clears, keep visits thorough and protect a backup save before late branches—especially before request-heavy visits.",
        ],
      },
      {
        id: "conrad-softlock",
        heading: "Request-Order Softlock Notes",
        paragraphs: [
          "Itch comments warn that later Conrad visits can softlock if personal requests are completed out of the prompted sequence. Keep it mechanical: finish the highlighted ask; do not skip ahead of the visit’s request.",
          "The official Kobold Hotfix (Steam news, 2026-09-13) addressed a known level-8 Conrad request-order softlock case. The same hotfix also added Invert Look Y options, a sprayer reduce-motion option, and Unstick Kobold on the pause/game menu. Those tools help recovery sessions, but they do not replace following the prompted request order.",
          "Community itch comments still repeat the order habit after that hotfix. If your notes only mention Conrad’s tone and skip request order, they are incomplete for practical play.",
          "If you are already stuck, open the escape guide for Unstick Kobold usage, clean-bar leftovers, and reload timing. If you are planning ahead, keep a backup save before late Conrad visits even when you are not otherwise ending hunting.",
        ],
        links: [
          {
            label: "Escape Conrad softlocks",
            slug: "how-to-escape",
            description: "Unstick tools, request-order notes, and when to reload.",
          },
        ],
      },
      {
        id: "conrad-ending-guidance",
        heading: "Conrad Ending Guidance",
        paragraphs: [
          "A Conrad-focused ending run still uses the shared three-ending backbone: thorough washes, prompt-following, and named saves before lock-in visits.",
          "What makes Conrad planning different is the softlock caution above—this is the clearest multi-source, character-specific risk note in the cast. Ryan and Alexander pages do not carry an equivalent hotfix bulletin.",
          "Read the endings guide for spoiler warnings and the route table, and keep the escape guide bookmarked for recovery. Use pause-menu Unstick Kobold for geometry or clean-bar stuck states; use request order to prevent Conrad’s specialty softlock.",
        ],
        links: [
          {
            label: "Endings guide",
            slug: "endings-guide",
            description: "Three endings, save-slot strategy, and softlock labels.",
          },
          {
            label: "All characters overview",
            slug: "characters",
            description: "Ryan, Alexander, and Conrad in one cast page.",
          },
        ],
      },
    ],
    faq: [
      {
        question: "What is the Conrad softlock?",
        answer:
          "Later Conrad visits can softlock when personal requests are completed out of the prompted order. Follow on-screen request sequence and keep a backup save.",
      },
      {
        question: "Did an official patch mention Conrad?",
        answer:
          "Yes. The Kobold Hotfix addressed a known level-8 Conrad request-order softlock case and added Unstick Kobold to the pause menu.",
      },
      {
        question: "Should I avoid Conrad on a first clear?",
        answer:
          "No. Meet Conrad during discovery if the visit appears. The order caution matters more on later, request-heavy visits when you are specializing.",
      },
      {
        question: "Where do I go if I am already softlocked on Conrad?",
        answer:
          "Use the escape guide for Unstick Kobold, leftover dirt checks, and reload timing, then return to the endings guide for safer save habits.",
      },
      {
        question: "Is Conrad’s warmer tone an official bio?",
        answer:
          "No. Warmer/steadier visit descriptions come from player discussion. The softlock and hotfix notes are the hard practical facts.",
      },
    ],
    relatedSlugs: ["characters", "endings-guide", "how-to-escape", "characters/ryan", "characters/alexander"],
    densityTargets: [{ term: "Conrad", min: 0.8, max: 5 }],
    lastReviewed: "2026-09-19",
  },
  {
    enabled: true,
    slug: "characters/alexander",
    pageType: "guide",
    navLabel: "Alexander",
    title: "Alexander in Drag'n Wash — Character & Route Guide",
    description:
      "Explore Alexander's role in Drag'n Wash, key interactions, route context, and the relevant ending guidance without unnecessary spoilers or copied walkthroughs.",
    keywords: ["Alexander Drag'n Wash", "Alexander ending", "Alexander route", "Drag'n Wash Alexander"],
    primaryKeyword: "Alexander Drag'n Wash",
    secondaryKeywords: ["Alexander ending", "Alexander route"],
    searchIntent: "Character and route orientation for Alexander with endings links",
    priority: "P2",
    navVisible: false,
    parentSlug: "characters",
    hero: {
      eyebrow: "Character focus",
      heading: "Alexander in Drag'n Wash",
      lead: "Alexander is the third primary dragon name players cross-check when collecting all endings. This page covers naming evidence, completionist search intent, and planning links—without borrowing Conrad’s softlock story or Ryan’s ending-search spike.",
    },
    sections: [
      {
        id: "quick-answer-alexander",
        heading: "Quick Answer",
        paragraphs: [
          "Alexander appears in itch comments and TomXV localization dialogue notes alongside Ryan and Conrad. Players look him up when comparing the cast or scheduling a third specialized replay.",
          "There is no multi-source Alexander-only softlock bulletin comparable to Conrad’s request-order case. Practical advice stays with thorough washes, prompt-following, and separate saves.",
        ],
      },
      {
        id: "alexander-quick-facts",
        heading: "Character Quick Facts",
        table: {
          caption: "Verified and player-reported notes for Alexander",
          columns: ["Field", "Detail", "Evidence label"],
          rows: [
            ["Name", "Alexander", "itch comments + TomXV localization dialogue notes"],
            ["Cast role", "Primary visitor discussed with Ryan and Conrad", "community cast discussions"],
            ["Common search intent", "Cast confirmation / all-endings completion order", "character_name_queries planning"],
            ["Unique softlock bulletin", "None multi-source verified for Alexander alone", "contrast with Conrad hotfix notes"],
            ["Official long bio", "Not published on store pages", "official store focus is the wash service"],
          ],
        },
      },
      {
        id: "who-is-alexander",
        heading: "Who Is Alexander?",
        paragraphs: [
          "Alexander is part of the same naming cross-check used to stop competitor misspellings and wrong cast lists. If a guide invents extra dragons or alternate spellings, treat it carefully.",
          "Players often open Alexander pages while collecting all three endings or deciding a completion order after a discovery clear—not because a unique mechanic is documented for him alone.",
        ],
      },
      {
        id: "alexanders-role",
        heading: "Alexander's Role in the Story",
        paragraphs: [
          "Alexander is a visit partner whose comfort arc can steer one of the three official endings. The game’s design centers wash quality, chat, and requests.",
          "On a first clear, meeting Alexander naturally is enough. Specialized Alexander replays work better once camera angles, clean-bar behavior, and request prompts already feel familiar.",
        ],
      },
      {
        id: "what-players-look-for-alexander",
        heading: "What Players Commonly Look For",
        paragraphs: [
          "Alexander queries usually ask: Is this the correct cast name? Where does he fit among Ryan and Conrad? Which guide should I open for endings?",
          "Unlike Ryan pages, Alexander content is not driven by a single dominant “ending guide” search spike in the project’s SERP notes. Unlike Conrad pages, it is not anchored by a hotfix softlock bulletin.",
          "Useful Alexander content is cast confirmation, completionist scheduling, and clear links—not invented unique systems.",
          "Other pages sometimes mix in extra dragons or alternate spellings. If that happened on your way here, use the characters overview to reset to Ryan, Alexander, and Conrad only.",
        ],
        links: [
          {
            label: "Characters overview",
            slug: "characters",
            description: "How Ryan, Alexander, and Conrad fit the same cast.",
          },
        ],
      },
      {
        id: "alexander-route-notes",
        heading: "Route Planning Notes",
        paragraphs: [
          "When you schedule an Alexander-focused replay, prioritize those visits cleanly and avoid splitting comfort attention across every visitor if you are ending hunting.",
          "Use separate saves if you intend to branch after shared early visits. Label the slot with the focus so a credits file does not overwrite a flexible hub.",
          "If the wash loop still feels awkward, practice with the beginner and controls guides first, then return to specializing this route.",
        ],
        links: [
          {
            label: "Beginner wash loop",
            slug: "beginner-guide",
            description: "First-session habits before you specialize a route.",
          },
        ],
      },
      {
        id: "alexander-ending-guidance",
        heading: "Alexander Ending Guidance",
        paragraphs: [
          "Alexander ending planning uses the same backbone as the other routes: three official endings, roughly ninety minutes each, and comfort specialization across replays.",
          "For spoiler warnings, save-slot strategy, and the route planning table, continue in the endings guide. Keep Conrad’s softlock article and Ryan’s search-intent notes on their own pages instead of mixing them here.",
          "A practical completionist order many players use is: discovery clear first, then specialize one dragon per replay. Alexander often lands as the “fill the remaining ending” slot after a Ryan- or Conrad-focused run—not because a unique Alexander mechanic is documented, but because cast planning treats the trio as a set.",
        ],
        links: [
          {
            label: "Endings guide",
            slug: "endings-guide",
            description: "All three routes, named saves, and softlock labels.",
          },
        ],
      },
    ],
    faq: [
      {
        question: "Is Alexander one of the main Drag'n Wash dragons?",
        answer:
          "Yes. Naming notes and cast discussions place Alexander with Ryan and Conrad as the primary trio players route around.",
      },
      {
        question: "Does Alexander have a unique softlock warning?",
        answer:
          "No multi-source Alexander-only softlock bulletin matches Conrad’s request-order case. Use general thorough-wash and save habits, and open the escape guide for base-game stuck states.",
      },
      {
        question: "Why do players search Alexander if tone lore is thin?",
        answer:
          "Most searches are cast confirmation and all-endings scheduling. This page answers those intents without inventing a unique mechanic.",
      },
      {
        question: "What should I read after this page?",
        answer:
          "Compare the cast on the characters overview, then open the endings guide when you are ready for replay planning.",
      },
    ],
    relatedSlugs: ["characters", "endings-guide", "beginner-guide", "characters/ryan", "characters/conrad"],
    densityTargets: [{ term: "Alexander", min: 0.8, max: 5 }],
    lastReviewed: "2026-09-19",
  },
  {
    enabled: true,
    slug: "download-and-platforms",
    pageType: "guide",
    navLabel: "Download & Platforms",
    title: "Drag'n Wash Download — Steam, itch.io & Platforms",
    description:
      "Find the official Drag'n Wash download pages for Steam and itch.io, supported desktop platforms, and the current answer for Android, APK and mobile searches.",
    keywords: [
      "Drag'n Wash download",
      "Drag'n Wash Steam",
      "Drag'n Wash itch.io",
      "Drag'n Wash Android",
      "Drag'n Wash APK",
      "Drag'n Wash platforms",
    ],
    primaryKeyword: "Drag'n Wash download",
    secondaryKeywords: ["Drag'n Wash Steam", "Drag'n Wash itch.io", "Drag'n Wash platforms", "Drag'n Wash Android"],
    searchIntent: "Find the official download or purchase page and confirm which platforms the game actually supports",
    priority: "P1",
    navVisible: false,
    hero: {
      eyebrow: "Download & platforms",
      heading: "Drag'n Wash Download and Platforms",
      lead: "Drag'n Wash is sold on Steam and on the official itch.io page for Windows, macOS, and Linux, with no confirmed Android or APK release. This page links only the official storefronts and explains what is and is not confirmed for each platform.",
    },
    sections: [
      {
        id: "quick-answer",
        heading: "Quick Answer",
        paragraphs: [
          "There are two official places to download Drag'n Wash: the Steam store page (app 4739660) and the official Gator Dragon Games itch.io page. Both are desktop releases. Official store pages list Windows, macOS, and Linux as the supported platforms, and Steam categories list full controller support.",
          "An itch.io purchase includes a Steam key, so you can pay on itch and still keep a Steam copy. The itch listing shows a minimum price of around $15 USD; the live Steam price is shown on the store page and can vary by region and discounts, so check it there rather than trusting third-party price trackers.",
          "No Android, APK, iOS, or other mobile version is listed on the official store pages as of our last review. Official Steam news on September 15, 2026 confirms Steam Deck Verified status, built on the native Linux version. This site is an independent player guide: we do not host the game or sell keys, and we always send you to the official pages for the actual download.",
        ],
        externalLinks: [
          {
            label: "Drag'n Wash on Steam (app 4739660)",
            url: "https://store.steampowered.com/app/4739660/Dragn_Wash/",
            description: "Official Steam store page: platform list, current price, news, and the install button.",
          },
          {
            label: "Drag'n Wash on itch.io (official)",
            url: "https://gatordragongames.itch.io/dragnwash",
            description: "Official itch.io page: download builds, included Steam key, and developer comments.",
          },
        ],
      },
      {
        id: "official-download-options",
        heading: "Official Download Options",
        paragraphs: [
          "Steam is the option most players start with. The store page confirms the developer (Gator Dragon Games), the September 10, 2026 release date, the operating system list, and any current discounts. Installing through the Steam client also means updates arrive automatically in the background.",
          "itch.io is the other official storefront, run by the developer. The page offers direct downloads for the desktop operating systems, accepts pay-what-you-want above a minimum of about $15 USD, and includes a Steam key with purchase. That makes itch the flexible pick if you prefer DRM-free files or want your payment to lean toward the developer while still unlocking Steam.",
          "Whichever storefront you choose, buy from the official pages linked above. Search ads and lookalike sites sometimes rank for game download queries, and Drag'n Wash is adult-only, so expect an age gate and a content warning on both stores before you see the buy button.",
        ],
      },
      {
        id: "supported-platforms",
        heading: "Supported Platforms",
        intro: "Platform facts below come from the official Steam and itch.io store pages and official Steam news.",
        table: {
          caption: "Drag'n Wash platform availability as of September 2026",
          columns: ["Platform", "Status", "Source"],
          rows: [
            ["Windows", "Supported", "Steam and itch.io store pages"],
            ["macOS", "Supported", "Steam and itch.io store pages"],
            ["Linux", "Supported (native build)", "Steam and itch.io store pages"],
            ["Steam Deck", "Steam Deck Verified (Sept 15, 2026)", "Official Steam news"],
            ["Android / APK", "Not officially confirmed", "No mobile listing on official store pages"],
            ["iOS", "Not officially confirmed", "No mobile listing on official store pages"],
            ["Consoles", "Not officially confirmed", "No console listing on official store pages"],
            ["Native VR", "Not listed on official store pages", "Community VR mod is third-party"],
          ],
        },
        paragraphs: [
          "The Linux build is native rather than a Proton-only afterthought. The September 15, 2026 Steam Deck Verified announcement specifically emphasized that native Linux version, which is why the game plays well on the Deck without extra compatibility tweaking.",
          "The table is a snapshot from our last review date. Storefront metadata can change, so treat the Steam and itch.io pages as the live source of truth if you are reading this months later.",
        ],
      },
      {
        id: "android-and-mobile",
        heading: "Android and Mobile Availability",
        paragraphs: [
          "Searches for Drag'n Wash on Android, mobile, or APK are common, and the honest answer is short: the official store pages do not list an Android version. Steam Deck is the only officially confirmed way to play away from a desktop computer, and it works through the native Linux build rather than a mobile port.",
          "An Android release is not officially confirmed as of our last review. If the developer announces one later, it will appear on the official Steam news feed or the itch.io page first. This guide will treat any port as real only after one of those official pages says so.",
          "If playing on a smaller screen is the goal, the realistic path today is Steam Deck or another handheld PC running the Linux or Windows build, not a phone.",
        ],
      },
      {
        id: "apk-safety",
        heading: "APK Safety: Avoid Unofficial Files",
        paragraphs: [
          "Because there is no confirmed Android version, any Drag'n Wash APK, mobile installer, or Android port you find on a random site is unofficial by definition. Those files are a classic malware vector for adult game searches, and sideloading one hands an unknown binary broad access to your phone.",
          "This guide does not host game files, link to mirrors, or recommend third-party download sites. The safe list is the whole list: Steam, the official itch.io page, and the developer's own announcements. If a site offers a Drag'n Wash APK, free download, or pirated copy, close it.",
          "The same caution applies to tools that modify the game. Mods exist, including a community VR mod, but legitimate mod authors distribute through their own project pages and expect you to own the game. Our mods guide explains safe setup habits in more detail.",
        ],
        links: [
          {
            label: "Drag'n Wash mods guide",
            slug: "mods",
            description: "Mod types, safe setup checks, and why to avoid unlabeled mirrors.",
          },
        ],
      },
      {
        id: "steam-vs-itch",
        heading: "Steam vs itch.io: Which Should You Choose?",
        paragraphs: [
          "Choose Steam if you want the simplest ownership experience: automatic updates, cloud-era library management, controller configuration through Steam Input, and the Steam Deck Verified badge working out of the box. Full controller support is listed in the Steam categories for the game.",
          "Choose itch.io if you prefer direct downloadable builds, pay-what-you-want pricing above the roughly $15 USD minimum, or a checkout that sends a larger share to the developer. Because an itch purchase includes a Steam key, you are not really locked out of either ecosystem.",
          "The content of the game is the same on both storefronts: the single-player dragon wash simulation with three endings at roughly ninety minutes each. The differences are wrapper-level—update delivery, payment style, and library management—rather than different editions.",
        ],
      },
      {
        id: "installation-basics",
        heading: "Installation and Update Basics",
        steps: [
          {
            heading: "Buy on an official storefront",
            description: "Purchase on Steam (app 4739660) or the official itch.io page. Both are adult-only pages with age gates, so expect to confirm your date of birth before the store content loads.",
          },
          {
            heading: "Install for your desktop OS",
            description: "On Steam, press Install and let the client handle the download. On itch, download the build that matches your operating system—Windows, macOS, or Linux—and keep the file somewhere you can find again.",
          },
          {
            heading: "Keep updates automatic",
            description: "Steam updates the game in the background. On itch, check the devlog or re-download the newest build when an update is announced, and re-read any community mod instructions after each patch.",
          },
          {
            heading: "Learn the wash loop",
            description: "Once installed, our controls and tools guide covers controller setup, comfort options like Invert Look Y and Sprayer Reduce Motion, and the wash-pass habits that prevent stuck clean bars.",
          },
        ],
        paragraphs: [
          "Save files live outside the storefront, so updating or reinstalling the game is normally safe for your progress. Backing up saves before big changes is still a good habit, especially if you run community mods.",
        ],
        links: [
          {
            label: "Controls and tools guide",
            slug: "controls-and-tools",
            description: "Controller support, Options toggles, and wash-tool habits after install.",
          },
          {
            label: "Back to the guide homepage",
            slug: "",
            description: "The full Drag'n Wash guide hub: gameplay, endings, characters, and troubleshooting.",
          },
        ],
      },
      {
        id: "sources",
        heading: "Sources",
        paragraphs: [
          "Platform lists, release date, controller support, and the Steam key detail come from the official Steam store page (app 4739660) and the official itch.io page, cross-checked against SteamDB metadata. Steam Deck Verified status comes from the official Steam news post dated September 15, 2026.",
          "Mobile, APK, iOS, and console rows are marked not officially confirmed because no official page lists them. If those store pages change, the change—not this paragraph—is the authority.",
        ],
      },
    ],
    faq: [
      {
        question: "Where can I download Drag'n Wash?",
        answer:
          "From the official Steam store page (app 4739660) or the official Gator Dragon Games itch.io page. Those are the only two official download sources.",
      },
      {
        question: "Is Drag'n Wash free?",
        answer:
          "No. It is a paid game. The itch.io listing shows a minimum price of around $15 USD and includes a Steam key; the current Steam price is displayed on the Steam store page.",
      },
      {
        question: "Is there an Android or APK version of Drag'n Wash?",
        answer:
          "No Android, APK, or other mobile version is listed on the official store pages as of our last review. Treat any Drag'n Wash APK found elsewhere as unofficial and unsafe.",
      },
      {
        question: "Can I play Drag'n Wash on Steam Deck?",
        answer:
          "Yes. Official Steam news from September 15, 2026 confirms Drag'n Wash is Steam Deck Verified, with emphasis on the native Linux build.",
      },
      {
        question: "Does the itch.io purchase include a Steam key?",
        answer:
          "Yes. Buying Drag'n Wash on the official itch.io page includes a Steam key, so you can activate the game on Steam as well.",
      },
      {
        question: "Is this site the official Drag'n Wash website?",
        answer:
          "No. This is an independent player guide. The official storefronts are Steam and itch.io, and only those pages provide the actual game download.",
      },
    ],
    relatedSlugs: ["controls-and-tools", "mods", "vr-mod", "updates"],
    densityTargets: [{ term: "Drag'n Wash download", min: 0.2, max: 1.5 }],
    lastReviewed: "2026-09-26",
  },
  {
    enabled: true,
    slug: "updates",
    pageType: "updates",
    navLabel: "Updates",
    title: "Drag'n Wash Updates & Patch Notes",
    description:
      "Track verified Drag'n Wash updates, hotfixes and gameplay fixes, with official source links and practical notes for saves, mods and VR compatibility.",
    keywords: [
      "Drag'n Wash updates",
      "Drag'n Wash patch notes",
      "Drag'n Wash update",
      "Drag'n Wash hotfix",
      "Drag'n Wash news",
    ],
    primaryKeyword: "Drag'n Wash updates",
    secondaryKeywords: ["Drag'n Wash patch notes", "Drag'n Wash hotfix", "Drag'n Wash news"],
    searchIntent: "Confirm the latest Drag'n Wash update, what it fixed, and whether saves, mods, or VR are affected",
    priority: "P1",
    navVisible: false,
    hero: {
      eyebrow: "Updates & patches",
      heading: "Drag'n Wash Updates and Patch Notes",
      lead: "A verified tracker of official Drag'n Wash updates and hotfixes, what each one changed, and what to check before updating—saves, mods, and the community VR mod included.",
    },
    sections: [
      {
        id: "current-status",
        heading: "Current Update Status",
        paragraphs: [
          "As of September 26, 2026, the most recent official announcements we can verify are the Kobold Hotfix (September 13, 2026) and the Steam Deck Verified news (September 15, 2026). The game launched on Steam on September 10, 2026, so the title is in its first post-launch hotfix window.",
          "The Kobold Hotfix added Invert Look Y options, a reduce-motion option for the sprayer, and an Unstick Kobold button on the pause and game menu. It also fixed a known Conrad request-order softlock on level 8, a Steam Deck touchscreen issue that could make players spin forever, and a native Linux Nvidia graphics issue.",
          "This page only lists updates we can trace to an official source. For anything newer than the entries below, use the official Steam news hub or the itch.io devlog linked in the sources section—those feeds update first, and this page follows after review.",
        ],
      },
      {
        id: "verified-timeline",
        heading: "Verified Update Timeline",
        intro: "Only entries confirmed by official sources are listed. Dates use the announcement date.",
        table: {
          caption: "Verified Drag'n Wash update timeline (September 2026)",
          columns: ["Date", "Update", "What changed", "Source"],
          rows: [
            [
              "Sept 10, 2026",
              "Steam launch",
              "Initial release on Steam (app 4739660) alongside the existing itch.io release",
              "Steam store page",
            ],
            [
              "Sept 13, 2026",
              "Kobold Hotfix",
              "Invert Look Y options, sprayer reduce-motion option, Unstick Kobold menu button, Conrad level-8 softlock fix, Steam Deck touchscreen spin fix, Linux Nvidia graphics fix",
              "Official Steam news",
            ],
            [
              "Sept 15, 2026",
              "Steam Deck Verified!",
              "Deck Verified status announced, with emphasis on the native Linux build",
              "Official Steam news",
            ],
          ],
        },
        paragraphs: [
          "No version-numbered patch beyond the entries above is confirmed on the official sources we reviewed. A fan-maintained localization project publishes its own release tags such as v0.6.0, but those version labels belong to the translation project, not to official game builds.",
        ],
      },
      {
        id: "confirmed-fixes",
        heading: "Confirmed Fixes in the Kobold Hotfix",
        paragraphs: [
          "The September 13, 2026 Kobold Hotfix is the one detailed patch note published through official Steam news so far. Its headline fixes are practical ones players had been hitting within days of launch.",
          "On the stuck-state side, the hotfix addressed a known Conrad softlock case on level 8, where completing personal requests out of the prompted order could freeze progress. It also added Unstick Kobold to the pause and game menu, giving players an official recovery button when they are physically stuck during a visit.",
          "On the hardware side, the hotfix fixed a Steam Deck issue that could make players spin forever when using the touchscreen, and a graphics issue affecting the native Linux build on Nvidia hardware. If either of those was blocking you before mid-September, updating should resolve it.",
          "Community itch comments still advise completing personal requests in the prompted order even after the hotfix, because later visits remain request-heavy. The fix covers a known case, not every possible sequence, so the cautious habit is still worth keeping.",
        ],
      },
      {
        id: "controls-accessibility-changes",
        heading: "Controls and Accessibility Changes",
        paragraphs: [
          "The same hotfix added two comfort options that are easy to miss. Invert Look Y settings now live in the Options menu for players who prefer inverted camera movement, and a reduce-motion option tones down the sprayer effect for players sensitive to screen motion.",
          "The Unstick Kobold button also belongs in this category in practice: it turns several stuck-state classes from reload-the-save problems into ten-second recoveries, as long as you use it during play rather than experimenting on the credits screen.",
        ],
        links: [
          {
            label: "Controls and tools guide",
            slug: "controls-and-tools",
            description: "Where Invert Look Y, Sprayer Reduce Motion, and Unstick Kobold live in the menus.",
          },
          {
            label: "How to escape stuck states",
            slug: "how-to-escape",
            description: "Recovery steps for geometry traps, clean-bar stalls, and request-order softlocks.",
          },
        ],
      },
      {
        id: "before-updating",
        heading: "Before Updating",
        paragraphs: [
          "Updates to a short, save-driven game are usually painless, but two habits make them genuinely safe. First, know where your progress lives: finishing a route produces a credits-state file, so keep named saves from before late branches instead of relying on one autosave.",
          "Second, inventory your add-ons. If you installed the community VR mod or any other mod, note what it added and where, because an update can silently break a loader or leave stale files behind. An unmodded game is the clean baseline you compare against.",
          "On Steam, updates download automatically, which means the game can patch between sessions without asking. On itch.io, updating usually means downloading the newest build yourself. Either way, skim the official note before you resume a valuable save.",
        ],
      },
      {
        id: "save-backup",
        heading: "Save Backup Guidance",
        paragraphs: [
          "Before a major update, copy your save files somewhere outside the game folder with the date in the folder name. If a patch misbehaves or a save will not load, that copy is your instant rollback instead of a lost route.",
          "If you are mid-run on a specific ending, also make an in-game backup save to a fresh slot before launching the updated build. Community reports note that continuing a finished slot can dump you back into credits, so a finished file is never a safe branching point.",
          "Do not rename or hand-edit save contents unless you are following a specific official instruction. A plain dated copy is enough; edited saves are how troubleshooting threads get long.",
        ],
        links: [
          {
            label: "Endings guide: save strategy",
            slug: "endings-guide",
            description: "Named save slots and pre-credits backups for all three routes.",
          },
        ],
      },
      {
        id: "mods-vr-compatibility",
        heading: "Mods and VR Compatibility After an Update",
        paragraphs: [
          "Every game patch is a potential breaking change for mods. The community VR mod, which layers BepInEx and UnityVRMod onto the game, is especially sensitive because it hooks the rendering and input stack. After any update, check the mod author's itch page before launching in VR.",
          "The safe routine is: update the game, launch it once with no mods to confirm a clean boot, then reinstall or re-enable mods one at a time. If something breaks, remove the newest change first and re-test before blaming the base game.",
          "Patch-day fixes sometimes change exactly the systems a mod touches. The Kobold Hotfix, for example, changed Options menus, menu buttons, and Steam Deck input behavior—areas a VR or input mod can depend on. Assume incompatibility until the mod page or a clean test says otherwise.",
        ],
        links: [
          {
            label: "Drag'n Wash VR mod guide",
            slug: "vr-mod",
            description: "Community VR setup, launch flags, and post-patch rechecks.",
          },
          {
            label: "Mods guide",
            slug: "mods",
            description: "General mod safety: backups, one change at a time, clean-boot tests.",
          },
        ],
      },
      {
        id: "check-latest",
        heading: "How to Check the Latest Official Update",
        paragraphs: [
          "The fastest official source is the Steam news hub for app 4739660, which lists hotfixes and announcements in reverse order. The itch.io page carries the developer's downloads, devlog posts, and the comment thread where the team is active.",
          "SteamDB's app history is a useful secondary mirror for seeing when depots changed, but it is metadata, not patch notes. Read the developer's own post before treating a depot change as a gameplay fix.",
          "If you see a claimed patch note anywhere else—a wiki mirror, a video description, a forum repost—cross-check the date and wording against the Steam news hub before you act on it.",
        ],
        externalLinks: [
          {
            label: "Steam news: Kobold Hotfix (Sept 13, 2026)",
            url: "https://store.steampowered.com/news/app/4739660/1843481262700350",
            description: "Official hotfix notes: options additions, Unstick Kobold, Conrad level-8 fix, Deck and Linux fixes.",
          },
          {
            label: "Steam news: Steam Deck Verified! (Sept 15, 2026)",
            url: "https://store.steampowered.com/news/app/4739660/1843481262703308",
            description: "Official announcement of Steam Deck Verified status and the native Linux build emphasis.",
          },
          {
            label: "Drag'n Wash on itch.io",
            url: "https://gatordragongames.itch.io/dragnwash",
            description: "Developer page with downloads, devlog, and the official comment thread.",
          },
        ],
        links: [
          {
            label: "Download and platforms",
            slug: "download-and-platforms",
            description: "Official storefronts, platform list, and Android/APK answers.",
          },
        ],
      },
    ],
    faq: [
      {
        question: "What is the latest Drag'n Wash update?",
        answer:
          "The most recent official announcements we can verify are the Kobold Hotfix (September 13, 2026) and the Steam Deck Verified news (September 15, 2026). Check the official Steam news hub for anything newer.",
      },
      {
        question: "What did the Kobold Hotfix change?",
        answer:
          "It added Invert Look Y options, a sprayer reduce-motion option, and an Unstick Kobold pause-menu button, and it fixed the Conrad level-8 request-order softlock, a Steam Deck touchscreen spin issue, and a Linux Nvidia graphics issue.",
      },
      {
        question: "Do updates break saves?",
        answer:
          "No official source reports save breakage from the verified patches. Back up save files before updating anyway, and never treat a finished credits-state file as your only branch point.",
      },
      {
        question: "Do mods keep working after a patch?",
        answer:
          "Not guaranteed. Community mods like the VR mod can break after any update. Boot the unmodded game once after patching, then reinstall mods one at a time after checking the mod author's page.",
      },
      {
        question: "Where are the official Drag'n Wash patch notes?",
        answer:
          "On the Steam news hub for app 4739660 and on the developer's itch.io page. Those two official feeds publish changes before any third-party summary.",
      },
      {
        question: "How often is this updates page reviewed?",
        answer:
          "This page is reviewed manually and shows its real last-reviewed date at the top. The Steam news hub and itch devlog always update first when a new patch ships.",
      },
    ],
    relatedSlugs: ["mods", "vr-mod", "how-to-escape", "download-and-platforms"],
    densityTargets: [{ term: "Drag'n Wash update", min: 0.3, max: 2 }],
    lastReviewed: "2026-09-26",
  },
  {
    enabled: true,
    slug: "speedrun",
    pageType: "guide",
    navLabel: "Speedrun",
    title: "Drag'n Wash Speedrun Guide: Rules, Route & Tips",
    description:
      "Plan a faster Drag'n Wash run with community timing rules, route preparation, washing tips, dialogue strategy, and a practical no-glitch checklist.",
    keywords: [
      "Drag'n Wash speedrun",
      "Drag n Wash speedrun",
      "Drag'n Wash speedrun guide",
      "Drag'n Wash speedrun rules",
      "Drag'n Wash speedrun route",
      "Drag'n Wash Any%",
    ],
    primaryKeyword: "Drag'n Wash speedrun",
    secondaryKeywords: ["Drag n Wash speedrun", "Drag'n Wash speedrun rules", "Drag'n Wash Any%"],
    searchIntent: "Plan and document a community timed run without mistaking runner rules for official rules",
    priority: "P2",
    navVisible: false,
    hero: {
      eyebrow: "Community timing guide",
      heading: "Drag'n Wash Speedrun Guide",
      lead: "Players have discussed timed Any% runs of Drag'n Wash, but a runner's timing choices are community rules, not developer rules. Start with a clear finish condition, record the full attempt, and practice a consistent wash flow before chasing a faster time.",
    },
    sections: [
      {
        id: "quick-answer",
        heading: "Quick Answer: Is There a Drag'n Wash Speedrun?",
        paragraphs: [
          "Yes, players have discussed speedrunning the game, including an Any% Sub-30 attempt described in community research. That phrase identifies a runner's goal or reported result; it is not an official world-record designation. We have not verified a developer-issued rule set or a formal leaderboard for this game. If you want to try a Drag n Wash speedrun, the useful first step is to define exactly what counts as a completed run and publish that definition with your recording.",
          "The official Steam and itch.io listings establish the game and its basic wash-and-conversation premise. They do not prescribe timing, categories, allowed techniques, or record review. The community example in this guide supplies a possible starting point. The preparation and practice notes below are this site's suggestions, meant to make your own attempts comparable and easier to review.",
        ],
      },
      {
        id: "community-rules",
        heading: "Community Speedrun Rules",
        intro: "One community runner's reported Any% setup uses the first completed loading screen as the start and the first appearance of credits as the end. Treat these as a cited example to disclose, not as universal Drag'n Wash speedrun rules.",
        table: {
          caption: "Example runner rules and evidence labels",
          columns: ["Item", "Example for a run", "Source / evidence"],
          rows: [
            ["Timer start", "After the first loading screen finishes", "Community runner example"],
            ["Timer end", "When credits first appear", "Community runner example"],
            ["Glitches", "No glitches", "Community runner example"],
            ["Mods", "No mods", "Community runner example"],
            ["Recording", "Show the complete timed attempt", "Practical suggestion"],
          ],
        },
        paragraphs: [
          "The start point needs a visible cue because a viewer cannot infer when the player considers loading complete. Likewise, stop on the first credits frame if that is the declared endpoint, rather than an arbitrary later menu. Write down how you handle restarts, pauses, and loading variation before comparing two attempts. If another runner uses different boundaries, both recordings can still be useful, but their displayed times should not be presented as directly equivalent.",
        ],
      },
      {
        id: "category-definition",
        heading: "A Practical Any% No-Glitch Category",
        paragraphs: [
          "For a small community, a simple category description is more useful than a complicated rulebook. Define Any% as reaching the first credits from a stated starting state, then disclose that your version permits no glitches and no mods. State whether the run begins from a fresh save, whether previous progress is present, and which game version you used. These choices affect comparability even when the timer boundaries are identical.",
          "Put the rules in the video description or accompanying text so a viewer can audit the attempt without guessing. If players later agree on another category, such as a different ending condition, keep those runs separate. This page offers a reproducible template, not a claim that every runner must use it. Avoid labeling a personal best as a verified record unless a recognized community review process actually confirms it.",
        ],
      },
      {
        id: "before-the-run",
        heading: "Prepare Before the Timer Starts",
        paragraphs: [
          "Choose a keyboard and mouse or controller setup you can operate comfortably for an uninterrupted session. Confirm your display, audio, and recording settings before the timed attempt, then keep them stable while comparing practice runs. Steam lists controller support, but that fact does not establish a faster input method. Use the one that gives you reliable movement and menu control.",
          "For a no-mod attempt, launch the unmodified game and check that no community additions or altered files remain active. Keep a separate save for practice so rehearsals do not silently change the starting state of the recorded attempt. Confirm that the capture includes the game window and timer, has enough storage space, and can show both timing boundaries. A short test recording can catch a hidden overlay or muted capture before it ruins a full run.",
        ],
        links: [
          { label: "Controls and tools reference", slug: "controls-and-tools", description: "Check the existing input and option notes before you settle on a practice setup." },
        ],
      },
      {
        id: "route-planning",
        heading: "Plan a Faster Route",
        paragraphs: [
          "A useful Drag'n Wash speedrun route is a written sequence of confirmed actions, not a list of imagined skips. Play through your chosen finish condition normally first. On the next pass, note where you lose time to uncertain navigation, repeated menu inspection, or an incomplete wash that requires a second pass. Change one part of the sequence at a time, then compare recordings to see whether the change actually saved time.",
          "Keep the route flexible enough to handle small execution differences. A plan that is fast only when every motion lands perfectly may perform worse than a slightly longer but reliable sequence. Review the point at which a visit is truly complete before moving on. The existing gameplay guide explains the general loop; use this page to turn that knowledge into a repeatable timed attempt rather than copying a full playthrough into your notes.",
        ],
        links: [
          { label: "Gameplay loop overview", slug: "gameplay", description: "Review the existing wash and progression basics before drafting a timed route." },
        ],
      },
      {
        id: "washing-efficiency",
        heading: "Improve Washing Consistency",
        paragraphs: [
          "Treat every wash as an execution problem. Start with a consistent scan of the areas you need to clean, then work through them in the same order during practice. The goal is to avoid losing track of a small unfinished area and circling the customer again. If a clean indicator is not complete, pause your route assumptions and identify what you missed rather than repeatedly sweeping at random.",
          "Compare two clean attempts on video and look for unnecessary reversals, long pauses between actions, and repeated passes over already finished areas. Record which part of the wash produced the mistake. Practicing that transition in isolation can be more effective than replaying the entire game every time. These are practical training suggestions; the official store description confirms a hands-on washing loop but does not provide an optimized route or a guaranteed fastest technique.",
        ],
      },
      {
        id: "dialogue-and-transitions",
        heading: "Reduce Dialogue and Transition Time",
        paragraphs: [
          "Learn the order in which ordinary prompts, conversations, and transitions appear along your chosen path. During practice, note which decisions require attention and which screens simply require you to wait. Avoid assuming a skip command exists just because another game has one; verify every interaction in the installed version before adding it to a route. The same caution applies to any apparent shortcut through a scene or menu.",
          "A smooth transition is often more valuable than aggressive input. Prepare for the next confirmed action without mashing through an uncertain state, since an accidental choice can cost more than a brief pause. Keep the guide non-explicit by naming only the timing boundary and general flow. If an ending choice matters to your declared category, identify it in your private route notes and use the endings guide for spoiler-aware context.",
        ],
        links: [
          { label: "Endings guide", slug: "endings-guide", description: "Check ending context when defining the finish condition for your run." },
        ],
      },
      {
        id: "practice-splits",
        heading: "Practice With Splits",
        paragraphs: [
          "Splits show where time changed; they do not need invented targets. A simple sheet can mark Wash start, Wash complete, Major transition, and Credits. Add a short note beside each split when a wash required rework, a menu took longer than expected, or a transition behaved differently. After several attempts, compare the same split across recordings made under the same rules and game version.",
          "Do not overread one unusually fast segment. A segment improvement only helps the full run if it preserves the next state and the declared finish condition. Start with a few broad splits, then add detail only where it helps diagnose a recurring loss. Keep personal bests and practice attempts labeled separately, especially when a reset or a changed save state would make the recording ineligible under your own rules.",
        ],
      },
      {
        id: "recording-checklist",
        heading: "Run Recording Checklist",
        paragraphs: [
          "Before sharing a time, watch the recording from beginning to end. The first completed loading screen and the first credits appearance should be visible if those are your published boundaries. Keep the timer visible or explain how it was calculated. An uninterrupted file makes it easier for other runners to inspect what happened between those points; edited highlights are useful for discussion but poor evidence for a full timed attempt.",
          "In the accompanying description, state the date, game version if visible, input method, save starting state, mod status, glitch policy, and exact timing rules. Mention any pause, crash, or reset. If the capture contains adult game material, follow the hosting platform's content rules and avoid posting a thumbnail or excerpt on a general-audience page. A transparent description is more valuable than an impressive number without enough context to reproduce it.",
        ],
      },
      {
        id: "sources",
        heading: "Sources and Evidence Labels",
        paragraphs: [
          "Official game fact means something the developer's Steam or itch.io listing confirms, such as the game's identity and basic wash-and-conversation premise. Community rule means a timing or eligibility choice reported by a player; the start, end, no-glitch, and no-mod example above falls in this category. Practical suggestion means this site's preparation advice, including capture checks, broad splits, and reviewing missed wash areas. None of these labels turns a player proposal into an official rule.",
          "The Any% Sub-30 example and its rule wording came from community research supplied for this guide; a stable post permalink was not independently verified during this review. Recheck the original runner's description before quoting or adopting it. The official store pages below can verify game facts, but neither is presented here as evidence for speedrun records or categories.",
        ],
        externalLinks: [
          { label: "Official Steam listing", url: "https://store.steampowered.com/app/4739660/Dragn_Wash/", description: "Developer and game description; adult-only store page." },
          { label: "Official itch.io listing", url: "https://gatordragongames.itch.io/dragnwash", description: "Developer's game listing; adult-only store page." },
        ],
      },
    ],
    faq: [
      { question: "Is there an official Drag'n Wash speedrun leaderboard?", answer: "We have not verified a developer-endorsed leaderboard or a formal Speedrun.com game page. Treat shared times as community attempts unless a documented review process says otherwise." },
      { question: "When should the timer start?", answer: "One community runner's example starts after the first loading screen finishes. Put that exact boundary in your run description; it is not an official developer rule." },
      { question: "When should the timer stop?", answer: "The same community example stops at the first appearance of credits. Show that moment in the recording and explain any different endpoint before comparing times." },
      { question: "Are mods allowed in a speedrun?", answer: "The community example uses a no-mod rule. Other runners may define another category, so state your mod policy explicitly and show the game state you used." },
      { question: "Are glitches allowed?", answer: "The example is no-glitch. There is no verified official rule here; define what your own category permits before claiming two runs are comparable." },
      { question: "What should a recorded run show?", answer: "Show the complete attempt, a readable timer or timing method, the declared start and end points, and enough context to assess the save state and rules used." },
      { question: "Can I use a controller?", answer: "Steam lists controller support for the game. The community example does not establish an input-device restriction, so disclose your device and check the rules of any group where you submit a run." },
    ],
    relatedSlugs: ["gameplay", "controls-and-tools", "endings-guide"],
    densityTargets: [{ term: "Drag'n Wash speedrun", min: 0.2, max: 1.5 }],
    lastReviewed: "2026-10-01",
  },
];
