/**
 * Hussein's 19th Birthday - Memory Archive & Digital Scrapbook
 * Cleanly separated structured data with custom interactive artifacts.
 */

const scrapbookData = {
  recipient: "Hussein",
  author: "Abdullah",
  authorNickname: "Spidey",
  birthdayDate: "October 6, 2007",
  milestone: "19th Birthday",
  passcode: "2711",
  
  meta: {
    title: "Hussein's 19th Birthday · A Digital Scrapbook of Us",
    description: "An interactive digital scrapbook and friendship archive from Spidey.",
  },

  chapters: [
    {
      id: "ch01",
      number: "01",
      date: "September 1, 2022",
      title: "How We Met",
      subtitle: "The Classroom & Harry Potter",
      theme: "warm",
      text: [
        "We met on September 1st, 2022.",
        "I remember that face literally pushing me to talk to you that day. He literally pushed me.",
        "We started talking. I told you I was reading Harry Potter, and you said you liked Harry Potter too.",
        "We went to my classroom so I could show you the book. You had your phone out and added me on Instagram.",
        "Then you saw that I liked Heartstopper... and immediately figured out that I was gay."
      ],
      tag: "THE ORIGIN",
      accentSticker: "🍂 HEARTSTOPPER · Y2K ERA",
      interactiveType: "first_meeting",
      photo: null
    },

    {
      id: "ch02",
      number: "02",
      date: "Late 2022",
      title: "KFC Rice & Park Karaoke",
      subtitle: "All Too Well · 10 Minute Version",
      theme: "warm",
      text: [
        "We went out with Hassan and Ahmed.",
        "We went to KFC. And of all the things in the world... you ordered rice from KFC.",
        "Then we went to the park. We ended up doing karaoke right there on the grass.",
        "We sang the entire 10-minute version of All Too Well at the top of our lungs."
      ],
      tag: "MIDNIGHT PARK",
      accentSticker: "🍗 KFC RICE · CERTIFIED",
      interactiveType: "kfc_receipt",
      song: {
        title: "All Too Well (10 Minute Version)",
        artist: "Taylor Swift",
        note: "The park karaoke anthem",
        spotifyUrl: "https://open.spotify.com/track/5enxwA8aAbwZbf5qCHORXi"
      },
      photo: {
        src: "assets/images/ch02-hands-heart.jpg",
        caption: "making half hearts in the dark after screaming Taylor Swift for 10 minutes",
        rotation: 3
      }
    },

    {
      id: "ch03",
      number: "03",
      date: "Late 2022",
      title: "Silver Tongues",
      subtitle: "The Song That Sounded Like You",
      theme: "warm",
      text: [
        "\"Silver Tongues\" by Louis Tomlinson.",
        "Back then, this was the song that reminded me of you the most.",
        "Every lyric felt like that specific late-night energy."
      ],
      tag: "ON REPEAT",
      accentSticker: "📼 CASSETTE TAPE",
      interactiveType: "walkman_player",
      song: {
        title: "Silver Tongues",
        artist: "Louis Tomlinson",
        note: "The song that reminded me of you the most",
        spotifyUrl: "https://open.spotify.com/track/753ya1YaTgcwhRMWNzNSVm"
      },
      photo: null
    },

    {
      id: "ch04",
      number: "04",
      date: "Post-Khobar",
      title: "Rainy Day & Haunted House",
      subtitle: "Your Very First Matcha",
      theme: "warm",
      text: [
        "We went out right after I came back from Khobar.",
        "It was pouring rain outside. We decided to hit the haunted house, running around screaming.",
        "After that, we headed to Koma.",
        "You tried matcha for the first time in your entire life with me.",
        "I still have the picture."
      ],
      tag: "KOMA CAFE",
      accentSticker: "🍵 FIRST MATCHA EVER",
      photo: {
        src: "assets/images/ch07-ahmed-selfie.jpg",
        caption: "the rainy night after Khobar · haunted house survivors",
        rotation: -3
      }
    },

    {
      id: "ch05",
      number: "05",
      date: "Spring Evening",
      title: "The Park Near The Farms",
      subtitle: "10,000+ Steps & Zero Cars",
      theme: "warm",
      text: [
        "We went to that park near the farms.",
        "Honestly, I don't even remember what we spent hours talking about. I just remember that it was so much fun.",
        "We didn't have a car that day, so we were literally walking everywhere.",
        "10K steps or more across the fields and swings."
      ],
      tag: "THE FARM WALK",
      accentSticker: "👟 10,000+ STEPS",
      stats: {
        steps: "10,482",
        cars: "0",
        walk: "1 VERY LONG WALK"
      },
      photo: {
        src: "assets/images/ch05-park-swing-new.jpg",
        caption: "motion-blur flying on the swings at midnight with zero ride home",
        rotation: 4
      }
    },

    {
      id: "ch06",
      number: "06",
      date: "Core Memory",
      title: "The First Hug",
      subtitle: "A Quiet Turning Point",
      theme: "quiet",
      text: [
        "I remember the first time you hugged me.",
        "It was genuinely the first hug from a friend I had ever experienced in my life.",
        "Nobody really hugged me before.",
        "Because apparently hugging was 'gay'.",
        "Yes, I know how ridiculous that sounds.",
        "It was simple, but it mattered so much."
      ],
      tag: "MOMENT OF SILENCE",
      accentSticker: "🤍 PURE COMFORT",
      interactiveType: "quiet_embrace",
      photo: null
    },

    {
      id: "ch07",
      number: "07",
      date: "Chaotic Days",
      title: "Ahmed, Gym & BJ Blaze",
      subtitle: "Ditto & K-Pop Choreography",
      theme: "chaotic",
      text: [
        "We got introduced to Ahmed — \"The dumb\".",
        "We started hitting the gym together (or attempting to), and then BJ Blaze.",
        "Karaoke chaos: scream-singing DITTO by NewJeans and WE ARE NEVER EVER GETTING BACK TOGETHER by Taylor Swift.",
        "And then we went to the back area and actually did full K-pop choreography."
      ],
      tag: "PURE CHAOS",
      accentSticker: "🎤 DITTO & WANEGBT",
      interactiveType: "karaoke_duo",
      songs: [
        {
          title: "Ditto",
          artist: "NewJeans",
          spotifyUrl: "https://open.spotify.com/track/3r8RuvgbX9s7ammBn07D3W"
        },
        {
          title: "We Are Never Ever Getting Back Together",
          artist: "Taylor Swift",
          spotifyUrl: "https://open.spotify.com/track/5YqltLsjdqFtvqE7Nrysvs"
        }
      ],
      photo: {
        src: "assets/images/ch05-park-swing.jpg",
        caption: "pure chaotic energy: gym attempts, karaoke, and choreo",
        rotation: -4
      }
    },

    {
      id: "ch08",
      number: "08",
      date: "School Hallway",
      title: "School Break Countdown",
      subtitle: "All Too Well into '15'",
      theme: "warm",
      text: [
        "We were singing All Too Well at school until the break literally ended.",
        "The bell was about to ring, and we immediately pivoted to singing '15' by Taylor Swift."
      ],
      tag: "HALLWAY SESSIONS",
      interactiveType: "school_countdown",
      countdown: {
        text: "BREAK ENDS IN: 3... 2... 1...",
        song: "15 · Taylor Swift",
        spotifyUrl: "https://open.spotify.com/track/2nqio0SfWg6gh2eCtfuMa5"
      },
      accentSticker: "🔔 SCHOOL BREAK",
      photo: null
    },

    {
      id: "ch09",
      number: "09",
      date: "The Gift Day",
      title: "The Dunkin Gift",
      subtitle: "The Very Serious Gift Era",
      theme: "warm",
      text: [
        "I remember buying you a gift.",
        "We went to Dunkin that day.",
        "It was a tote bag with the limited Blackpink Oreo and a matching bracelet.",
        "The photocard cases, the iced coffees on the table, the envelope."
      ],
      tag: "DUNKIN MEMORY",
      accentSticker: "🛍️ BP OREO & BRACELET",
      photo: {
        src: "assets/images/ch09-dunkin-gift.jpg",
        caption: "tote bag , and matching braclets",
        rotation: -2
      }
    },

    {
      id: "ch10",
      number: "10",
      date: "The Rift",
      title: "And Then Everything Changed",
      subtitle: "The Falling Apart",
      theme: "fallout",
      // User requested: "no text only the phtoto and the song"
      text: [],
      tag: "THE TURNING POINT",
      accentSticker: "🌧️ THE QUIET RIFT",
      interactiveType: "fallout_rain",
      song: {
        title: "Bigger Than The Whole Sky",
        artist: "Taylor Swift",
        note: "“Goodbye, goodbye, goodbye / You were bigger than the whole sky”",
        spotifyUrl: "https://open.spotify.com/track/0BiqmkasE5FdrChwKfVp8X"
      },
      photo: {
        src: "assets/images/ch10-falling-apart-unblock.png",
        caption: "'ABDUALLAHSHD YOU FINALLY UNBLOCKED ME... I promise to make it up to youuu'",
        rotation: 0
      }
    },

    {
      id: "ch11",
      number: "11",
      date: "The Spark",
      title: "The Lamest Reunion Ever",
      subtitle: "Ahmed's Apartment",
      theme: "rebuilding",
      text: [
        "We somehow got back in touch through Ahmed.",
        "One day I went to his apartment... and you were right there.",
        "We started talking again. We added each other back on Instagram.",
        "I wasn't that close to you yet. But deep down, I wanted to be.",
        "Because honestly, being your friend was something I had always wanted."
      ],
      tag: "THE RECONNECT",
      accentSticker: "🔑 AHMED'S APARTMENT",
      interactiveType: "apartment_buzzer",
      photo: null
    },

    {
      id: "ch12",
      number: "12",
      date: "Weekend Routine",
      title: "Salman's House",
      subtitle: "Every Weekend Without Fail",
      theme: "rebuilding",
      text: [
        "We started going to Salman's house every single weekend.",
        "It was fun. Really fun.",
        "We weren't best friends yet, but every weekend laid another brick in our foundation."
      ],
      tag: "WEEKEND NIGHTS",
      accentSticker: "🏠 SALMAN'S COUCH",
      interactiveType: "weekend_stamp",
      photo: null
    },

    {
      id: "ch13",
      number: "13",
      date: "The Decision",
      title: "Jeddah",
      subtitle: "Drawing The Line",
      theme: "warm",
      text: [
        "When I went to Jeddah, something shifted inside me.",
        "I felt like I needed to officially become your friend again. No games, no hiding.",
        "I told my mom straight to her face:"
      ],
      tag: "THE CONVICTION",
      accentSticker: "⚡ NO TURNING BACK",
      interactiveType: "bold_quote_poster",
      quote: "\"I'm going to be friends with Hussein again, and I don't fucking care what you say.\"",
      photo: null
    },

    {
      id: "ch14",
      number: "14",
      date: "The Proof",
      title: "Taking A Bullet",
      subtitle: "You Chose Me",
      theme: "warm",
      text: [
        "I took a bullet for you. And I remember when you took a bullet for me.",
        "I still have the picture where you told me that you have free will and you're going to be friends with whoever you want.",
        "You stood up against everyone.",
        "You chose me."
      ],
      tag: "FREE WILL",
      accentSticker: "🛡️ TOOK A BULLET",
      quote: "\"أنا عندي عقل وأقدر اتخذ قراراتي بنفسي\"",
      photo: {
        src: "assets/images/ch14-free-will-lockscreen.png",
        caption: "Hussein standing on business: 'I have a mind of my own and I make my own decisions.'",
        rotation: 0,
        isPhoneMockup: true
      }
    },

    {
      id: "ch15",
      number: "15",
      date: "Permanent",
      title: "Best Friends",
      subtitle: "Since That Day",
      theme: "golden",
      text: [
        "From that point on, our entire relationship transformed.",
        "Since that day, we've been best friends.",
        "No question, no doubt, no hesitation."
      ],
      tag: "UNSHAKEABLE",
      accentSticker: "⭐ BEST FRIENDS",
      interactiveType: "golden_milestone",
      photo: null
    },

    {
      id: "ch16",
      number: "16",
      date: "Riyadh Days",
      title: "Moving To Riyadh",
      subtitle: "Shows, Talks & Late Nights",
      theme: "golden",
      text: [
        "When I moved to Riyadh, everything deepened.",
        "We started watching shows, talking about our real feelings, and getting closer every day.",
        "Watching TV for hours, watching movies, spending endless time together."
      ],
      tag: "RIYADH NIGHTS",
      accentSticker: "📺 BINGE NIGHTS",
      interactiveType: "vintage_crt_tv",
      shows: [
        { name: "Glee", tag: "CH 01", note: "The chaos and music", icon: "🎤" },
        { name: "Gossip Girl", tag: "CH 02", note: "XOXO drama marathons", icon: "🍸" },
        { name: "The Summer I Turned Pretty", tag: "CH 03", note: "Debating every single scene", icon: "🌊" }
      ],
      photo: null
    },

    {
      id: "ch17",
      number: "17",
      date: "Seoul · July 2026",
      title: "Korea",
      subtitle: "The Ultimate Travel Scrapbook",
      theme: "golden",
      text: [
        "Then we went to Korea together.",
        "Subways, neon lights, matching outfits, hair clips, TXT photocard hauls, and late-night laughter in convenience stores.",
        "Seoul felt like our own movie."
      ],
      tag: "SEOUL JULY 2026",
      accentSticker: "🇰🇷 SEOUL ADVENTURE",
      gallery: [
        {
          src: "assets/images/ch17-korea-subway-handles.jpg",
          caption: "holding onto the subway handles in Seoul looking like an album cover",
          rotation: -3
        },
        {
          src: "assets/images/ch17-korea-linked-arms.jpg",
          caption: "linking arms on the train · studded wristbands & red gemstone pendant",
          rotation: 2
        },
        {
          src: "assets/images/ch17-korea-hair-clips.jpg",
          caption: "flower & star hair clips outside the shop with the mini digicam",
          rotation: -2
        },
        {
          src: "assets/images/ch17-korea-buckle-jackets.jpg",
          caption: "matching dark buckle jackets fit-check: Snoopy & Dickies",
          rotation: 3
        },
        {
          src: "assets/images/ch17-korea-caps-photocards.jpg",
          caption: "the matching NO LABELS Yeonjun 'ICE CREAM' caps and photocards haul",
          rotation: -1
        },
        {
          src: "assets/images/ch17-korea-vinyl-bar.jpg",
          caption: "cozy vinyl listening bar counter with whiskey bottles and vintage records",
          rotation: 2
        },
        {
          src: "assets/images/ch17-korea-yeonjun-poster.jpg",
          caption: "slumped beneath the giant Yeonjun billboard in Seoul",
          rotation: -3
        },
        {
          src: "assets/images/ch17-korea-keychains.jpg",
          caption: "the Y2K keychain details: 8-ball, shark, star buckle, and TXT photocard",
          rotation: 1
        },
        {
          src: "assets/images/ch17-korea-mcdonalds.jpg",
          caption: "do you eat puusy like this ?",
          rotation: -2
        },
        {
          src: "assets/images/ch17-korea-neon-arcade.jpg",
          caption: "peace signs in the neon purple arcade glow",
          rotation: 3
        },
        {
          src: "assets/images/ch17-korea-bench-jorts.jpg",
          caption: "park bench chillin' in baggy jorts and red Converse",
          rotation: -1
        },
        {
          src: "assets/images/ch17-korea-subway-trio.jpg",
          caption: "subway selfie trio squeezed between train cars",
          rotation: 2
        },
        {
          src: "assets/images/ch17-korea-laptop-vlog.jpg",
          caption: "watching our Korea street vlogs in bed on the laptop",
          rotation: -2
        },
        {
          src: "assets/images/ch17-korea-orange-shirt.jpg",
          caption: "you drunk haha",
          rotation: 1
        }
      ]
    },

    {
      id: "ch18",
      number: "18",
      date: "Family & Home",
      title: "Our Families",
      subtitle: "Grounded & Real",
      theme: "golden",
      text: [
        "You met my family.",
        "I met your family.",
        "You became someone my people knew, and I became someone yours knew.",
        "That's when a friendship isn't just a moment in time anymore — it's family."
      ],
      tag: "FULL CIRCLE",
      accentSticker: "🏡 FAMILY BOND",
      interactiveType: "family_crest",
      photo: null
    }
  ],

  finale: {
    title: "HUSSEIN",
    subtitle: "Happy 19th Birthday",
    letterParagraphs: [
      "You are my best friend in the whole world.",
      "I don't want that to change.",
      "All I've ever wanted was to be your friend.",
      "I hope that never changes.",
      "I appreciate you every single day.",
      "You're literally the closest person to me.",
      "I can't imagine my day without you."
    ],
    lyric: "“I like shiny things and expensive things, but I'd marry you with paper rings.”",
    signature: "Love and light,",
    signOffName: "Spidey",
    birthdayWish: "Happy 19th Birthday, Hussein."
  }
};

if (typeof window !== 'undefined') {
  window.scrapbookData = scrapbookData;
}
