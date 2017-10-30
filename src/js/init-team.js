function toShowOrHide(IdName) {
  $("#" + IdName).slideToggle(500);
}
var info = [
  {
    idName: "WE",
    firstdiv: {
      bg: "WE-bg.jpg",
      lg: "WE.png",
      head: {
        content: "TEAM WE",
      }
    },
    seconddiv: {
      idName: "WE-c",
      firstHead: "TEAM ROSTER",
      firstdiv: {
        className: "box-team",
        divs: [
          ["src/images/teams/WE/top.png", "TOP",        "957", "CHANGYU KE"],
          ["src/images/teams/WE/jungle.png", "JUNGLE", "CONDI", "RenJie Xiang"],
          ["src/images/teams/WE/mid.png", "MID",        "XIYE", "HanWei Su"],
          ["src/images/teams/WE/adc.png", "ADC",        "MYSTIC", "SeongJun Jin"],
          ["src/images/teams/WE/sup.png", "SUPPORT",    "BEN", "DongHyun Nam"],
          ["src/images/teams/WE/6th.png", "SUPPORT",    "ZERO", "KyungSub Yun"],
        ]
      },
      secondHead: "BIOGRAPHY",
      firstPar: "Team WE is one of the oldest teams in professional League of Legends, and have recently found a resurgence in the modern iteration of the LPL. It wasn’t until the the 2017 Spring Split that WE finally rose up and claimed the LPL crown, beating Royal Never Give Up in the Finals to represent China at the Mid-Season Invitational, where they earned their region a Pool 1 berth by getting out of Groups. They qualified for Worlds 2017 as the #3 seed from China after a win in the LPL Regional Qualifier.",
      secondPar: "Coach: Sungyoung “Homme” Yoon"
    }
  },
  {
    idName: "C9",
    firstdiv: {
      bg: "C9-bg.jpg",
      lg: "C9.png",
      head: {
        content: "COULD9",
      }
    },
    seconddiv: {
      idName: "C9-c",
      firstHead: "TEAM ROSTER",
      firstdiv: {
        className: "box-team",
        divs: [
          ["src/images/teams/C9/top.png", "TOP",        "IMPACT", "Eonyoung Jeong"],
          ["src/images/teams/C9/jungle.png", "JUNGLE",  "CONTRACT", "Juan Garcia"],
          ["src/images/teams/C9/mid.png", "MID",        "JENSEN", "Nicolaj Jensen"],
          ["src/images/teams/C9/adc.png", "ADC",        "SNEAKY", "Zachary  Scuderi"],
          ["src/images/teams/C9/sup.png", "SUPPORT",    "SMOOTHIE", "Andy Ta"],
          ["src/images/teams/C9/6th.png", "TOP",    "RAY", "Jiwon Jeon"],
        ]
      },
      secondHead: "BIOGRAPHY",
      firstPar: "With their win over Counter Logic Gaming in the NA LCS Regional Qualifier, Cloud9 will once again represent North America at Worlds as the #3 seed from the region. Cloud9 burst into the League scene in spectacular fashion in 2013 and they’ve represented NA at Worlds every year since. At Worlds 2016 they were the only North American team in to make it out of the Group Stage. Now they return, ready for yet another shot at the Summoner's Cup.",
      secondPar: "Coach: Hangyu &quot;Reapered&quot; Bok"
    }
  },
  {
    idName: "FNC",
    firstdiv: {
      bg: "TOE-bg.jpg",
      lg: "FNC.png",
      head: {
        content: "FNATIC",
      }
    },
    seconddiv: {
      idName: "FNC-c",
      firstHead: "TEAM ROSTER",
      firstdiv: {
        className: "box-team",
        divs: [
          ["src/images/teams/FNC/top.png", "TOP",        "SOAZ", "Paul Boyer"],
          ["src/images/teams/FNC/jungle.png", "JUNGLE",  "Broxah", "Mads Brock-Pedersen"],
          ["src/images/teams/FNC/mid.png", "MID",        "Caps", "Rasmus Winther"],
          ["src/images/teams/FNC/adc.png", "ADC",        "Rekkles", "Martin Larsson"],
          ["src/images/teams/FNC/sup.png", "SUPPORT",    "Jesiz", "Jesse Le"],
          ["src/images/teams/FNC/6th.png", "MID",        "Special", "Joran Scheffer"],
        ]
      },
      secondHead: "BIOGRAPHY",
      firstPar: "After watching World 2016 from the sidelines, Fnatic will return to the World Championship for the fifth time after a comprehensive 3-0 win over H2K. They are one of the only teams in competition to have won a Summoner’s Cup, and have reached the Semifinals or higher at Worlds on three separate occasions. One of the oldest teams in professional League of Legends, Fnatic will be looking to return to their former glory.",
      secondPar: "Coach: Dylan &quot;Dylan&quot; Falco"
    }
  },
  {
    idName: "HKA",
    firstdiv: {
      bg: "HKA-bg.jpg",
      lg: "HKA.png",
      head: {
        content: "HONG KONG ATTITUDE",
      }
    },
    seconddiv: {
      idName: "HKA-c",
      firstHead: "TEAM ROSTER",
      firstdiv: {
        className: "box-team",
        divs: [
          ["src/images/teams/HKA/top.png", "TOP",        "RIRIS", "SEUNG MIN BAEK"],
          ["src/images/teams/HKA/jungle.png", "JUNGLE",  "GEMINI", "CHU-XUAN HUANG"],
          ["src/images/teams/HKA/mid.png", "MID",        "M1SSION", "XIAO XIAN CHEN"],
          ["src/images/teams/HKA/adc.png", "ADC",        "UNIFIED", "CHUN-KIT WONG"],
          ["src/images/teams/HKA/sup.png", "SUPPORT",    "KAIWING", "KAI WING LING"],
          ["src/images/teams/HKA/6th.png", "JUNGLE",     "GODKWAI", "HO WAN CHEUNG"],
        ]
      },
      secondHead: "BIOGRAPHY",
      firstPar: "After finishing 5th in the LMS regular season, Hong Kong Attitude fought their way through the Regional Qualifier, beating both Raise Gaming and J-Team (formerly Taipei Assassins) to become the first ever #3 seed to represent the LMS at Worlds. They were one game away from making Worlds back in 2015, and will now finally make their first World Championship debut.",
      secondPar: "Pak Kan “Tabe” Wong"
    }
  },
  {
    idName: "TOE",
    firstdiv: {
      bg: "TOE-bg.jpg",
      lg: "TOE.png",
      head: {
        content: "TEAM ONE ESPORTS",
      }
    },
    seconddiv: {
      idName: "TOE-c",
      firstHead: "TEAM ROSTER",
      firstdiv: {
        className: "box-team",
        divs: [
          ["src/images/teams/TOE/top.png", "TOP",        "VVVERT", "ÁLVARO MARTINS"],
          ["src/images/teams/TOE/jungle.png", "JUNGLE",  "4LAN", "ALANDERSON MEIRELES"],
          ["src/images/teams/TOE/mid.png", "MID",        "MARF", "JOÃO PIOLA"],
          ["src/images/teams/TOE/adc.png", "ADC",        "ABSOLUT", "LUIS CARVALHO"],
          ["src/images/teams/TOE/sup.png", "SUPPORT",    "REDBERT", "YGOR FREITAS"],
          ["src/images/teams/TOE/6th.png", "MID",        "BRUCER", "BRUNO PEREIRA"],
        ]
      },
      secondHead: "BIOGRAPHY",
      firstPar: "Coming off the back of a fairytale run to the CBLoL Finals, Team One Esports has gone from the Challenger Series to Worlds in a matter of four months, earning their spot at Worlds 2017 after a 3-1 victory over paiN Gaming. Formed from INTZ e-Sports sister team, the young squad made up for inexperience with characteristic Brazilian passion. They have unique picks and stellar team fighting. Now that they have conquered Brazil, it’s time to take their team motto to the international stage. Today, warriors. Tomorrow, heroes.",
      secondPar: "Coach: Vinícius “Neki” Ghilardi"
    }
  },
  {
    idName: "RMP",
    firstdiv: {
      bg: "HKA-bg.jpg",
      lg: "RMP.png",
      head: {
        content: "RAMPAGE",
      }
    },
    seconddiv: {
      idName: "RMP-c",
      firstHead: "TEAM ROSTER",
      firstdiv: {
        className: "box-team",
        divs: [
          ["src/images/teams/RMP/top.png", "TOP",        "EVI", "SHUNSUKE MURASE"],
          ["src/images/teams/RMP/jungle.png", "JUNGLE",  "TUSSLE", "MOONYONG LEE"],
          ["src/images/teams/RMP/mid.png", "MID",        "RAMUNE", "OSAMU OZAWA"],
          ["src/images/teams/RMP/adc.png", "ADC",        "YUTORIMOYASI", "YUTA NOGUCHI"],
          ["src/images/teams/RMP/sup.png", "SUPPORT",    "DARA", "JEONGHOON JEON"],
          ["src/images/teams/RMP/6th.png", "MID",    "TETE", "NOZOMI MIZO"],
        ]
      },
      secondHead: "BIOGRAPHY",
      firstPar: "After finishing 2nd in the Regular Split, Rampage once again overcame rivals DetonatioN FocusMe in a hard fought Best of 5 to become LJL Champions and earn their third consecutive title. While dominant in the LJL, Rampage struggled earlier in the year at the 2017 Mid-Season Invitational. But a win for the region at Rift Rivals over both the GPL and Oceanic Pro League, including standout performances from Rampage players, should bolster their confidence at the Play-In Stage of Worlds 2017.",
      secondPar: "Coach: Donghun “34” Kim"
    }
  },
  {
    idName: "DW",
    firstdiv: {
      bg: "TOE-bg.jpg",
      lg: "DW.png",
      head: {
        content: "DIRE WOLVES",
      }
    },
    seconddiv: {
      firstHead: "TEAM ROSTER",
      firstdiv: {
        className: "box-team",
        divs: [
          ["src/images/teams/DW/top.png", "TOP",        "CHIPPYS", "RYAN SHORT"],
          ["src/images/teams/DW/jungle.png", "JUNGLE",  "SHERNFIRE", "SHERN TAI"],
          ["src/images/teams/DW/mid.png", "MID",        "PHANTIKS", "RICHARD SU"],
          ["src/images/teams/DW/adc.png", "ADC",        "K1NG", "CALVIN TRUONG"],
          ["src/images/teams/DW/sup.png", "SUPPORT",    "DESTINY", "MITCHELL SHAW"],
          ["src/images/teams/DW/6th.png", "JUNGLE",    "RIPPII", "NATHAN MOTT"],
        ]
      },
      secondHead: "BIOGRAPHY",
      firstPar: "For a long time there was one team that dominated the Oceanic Pro League, but now a new leader has emerged. Dire Wolves secured their spot at Worlds 2017 after beating the former regional powerhouse Chiefs Esports Club 3-1 in the Finals. This is their second consecutive OPL Championship win, and they were the team to represent the region back at the 2017 Mid-Season Invitational.",
      secondPar: "Coach: Curtis &quot;Sharp&quot; Morgan"
    }
  },
  {
    idName: "YG",
    firstdiv: {
      bg: "TOE-bg.jpg",
      lg: "YG.png",
      head: {
        content: "YOUNG GENERATION",
      }
    },
    seconddiv: {
      firstHead: "TEAM ROSTER",
      firstdiv: {
        className: "box-team",
        divs: [
          ["src/images/teams/YG/top.png", "TOP",        "NHOCTY", "THE VINH BUI"],
          ["src/images/teams/YG/jungle.png", "JUNGLE",  "VENUS", "NGUYEN QUOC HOANG BUI"],
          ["src/images/teams/YG/mid.png", "MID",        "NAUL", "THANH LUAN VO"],
          ["src/images/teams/YG/adc.png", "ADC",        "BIGKORO", "NGOC TAI DANG"],
          ["src/images/teams/YG/sup.png", "SUPPORT",    "PALETTE", "HAI TRUNG NGUYEN"],
          ["src/images/teams/YG/6th.png", "TOP",        "REN", "VAN TRONG NGUYEN"],
        ]
      },
      secondHead: "BIOGRAPHY",
      firstPar: "After placing 2nd in both The Vietnam Championship Series A Spring and Summer Splits, Young Generation had the opportunity to compete in the GPL Championship alongside fellow Vietnamese team the GIGABYTE Marines. They played through the loser’s bracket, and managed to reverse sweep hometown favorites Ascension Gaming. Their consistent performance this year, and GAM’s success at the Mid-Season Invitational, has given Young Generation the privilege to compete at the Play-In stage of Worlds 2017.",
      secondPar: "Coach: Ngoc Anh Tuan &quot;Koo&quot; Vo"
    }
  },
  {
    idName: "1907F",
    firstdiv: {
      bg: "1907F-bg.jpg",
      lg: "1907F.png",
      head: {
        content: "1907 FENERBAHÇE ESPOR",
      }
    },
    seconddiv: {
      // idName: "C9-c",
      firstHead: "TEAM ROSTER",
      firstdiv: {
        className: "box-team",
        divs: [
          ["src/images/teams/1907F/top.png", "TOP",        "THALDRIN", "BERKE DEMIR"],
          ["src/images/teams/1907F/jungle.png", "JUNGLE",  "CRASH", "DONG-WOO LEE"],
          ["src/images/teams/1907F/mid.png", "MID",        "FROZEN", "TAE IL KIM"],
          ["src/images/teams/1907F/adc.png", "ADC",        "PADDEN", "EGE ACAR KOPARAL"],
          ["src/images/teams/1907F/sup.png", "SUPPORT",    "JAPONE", "BAHADIR ÇOLAK"],
          ["src/images/teams/1907F/6th.png", "MID",    "WAENA", "BERŞAN AYDIN"],
          ["src/images/teams/1907F/7th.png", "JUNGLE",    "MOVE", "MIN SU KANG"],
        ]
      },
      secondHead: "BIOGRAPHY",
      firstPar: "1907 Fenerbahçe will have the opportunity to play on the Worlds stage in their debut season after a 3-0 victory against the regional powerhouse BAU SuperMassive. The only team with a sporting club partnership in the TCL, Fenerbahce started Winter Split slow and bowed out in the Semifinals of Playoffs. But a strong surge after their Rift Rivals victory against the LCL carried them to the Finals and booked their tickets to China.",
      secondPar: "Coach: Serdar &quot;Pades&quot; Padeş"
    }
  },
  {
    idName: "G-CIS",
    firstdiv: {
      bg: "TOE-bg.jpg",
      lg: "G-CIS.png",
      head: {
        content: "GAMBIT ESPORTS",
      }
    },
    seconddiv: {
      // idName: "C9-c",
      firstHead: "TEAM ROSTER",
      firstdiv: {
        className: "box-team",
        divs: [
          ["src/images/teams/G-CIS/top.png", "TOP",        "PVPSTEJOS", "OLEKSANDR GLAZKOV"],
          ["src/images/teams/G-CIS/jungle.png", "JUNGLE",  "DIAMONDPROX", "DANIL RESHETNIKOV"],
          ["src/images/teams/G-CIS/mid.png", "MID",        "KIRA", "MYKHAILO HARMASH"],
          ["src/images/teams/G-CIS/adc.png", "ADC",        "BLASTING", "DANIEL KUDRIN"],
          ["src/images/teams/G-CIS/sup.png", "SUPPORT",    "EDWARD", "EDUARD ABGARYAN"],
          ["src/images/teams/G-CIS/6th.png", "ADC",    "TAUREN", "IGOR TITOV"],
        ]
      },
      secondHead: "BIOGRAPHY",
      firstPar: "After a disastrous Spring Split, Gambit Esports underwent a roster shakeup, with only veteran Diamondprox remaining from the old roster. His former teammate EDward returned to the roster as well, and they set out to build a team to conquer the CIS, which included former Abus NoX Luna players and more. They dominated the regular season, and after a close final against M19, Gambit became CIS champions and will return to the Worlds stage.",
      secondPar: "Coach: Dmitrii &quot;Invi&quot; Protasov"
    }
  },
  {
    idName: "KLG",
    firstdiv: {
      bg: "C9-bg.jpg",
      lg: "KLG.png",
      head: {
        content: "KAOS LATIN GAMERS",
      }
    },
    seconddiv: {
      // idName: "C9-c",
      firstHead: "TEAM ROSTER",
      firstdiv: {
        className: "box-team",
        divs: [
          ["src/images/teams/KLG/top.png", "TOP",        "MANTARRAYA", "JUAN ABDÓN"],
          ["src/images/teams/KLG/jungle.png", "JUNGLE",  "TIERWULF", "SEBASTIÁN MATELUNA"],
          ["src/images/teams/KLG/mid.png", "MID",        "PLUGO", "JOAQUÍN PÉREZ"],
          ["src/images/teams/KLG/adc.png", "ADC",        "FIX", "NICOLÁS SAYAGO"],
          ["src/images/teams/KLG/sup.png", "SUPPORT",    "SLOW", "EDUARDO GARCÉS"],
          ["src/images/teams/KLG/6th.png", "ADC",    "FOCHO", "MATÍAS PORTO"],
        ]
      },
      secondHead: "BIOGRAPHY",
      firstPar: "One of the most popular teams and biggest esports organizations in Latam South, Kaos Latin Gamers qualify for Worlds as the representative for the region. They’ve faced relegations and become champions twice in the past two years, most recently defeating Isurus Gaming 3-1 in the CLS Finals. They’ve played in multiple IWC events, but failed to make an impact, something that they are looking to rectify here at Worlds 2017.",
      secondPar: "Coach: Misael “Pierre” Di Ciancia"
    }
  },
  {
    idName: "LG",
    firstdiv: {
      bg: "TOE-bg.jpg",
      lg: "LG.png",
      head: {
        content: "LYON GAMING",
      }
    },
    seconddiv: {
      // idName: "C9-c",
      firstHead: "TEAM ROSTER",
      firstdiv: {
        className: "box-team",
        divs: [
          ["src/images/teams/LG/top.png", "TOP",        "JIRALL", "DANIEL DEL CASTILLO"],
          ["src/images/teams/LG/jungle.png", "JUNGLE",  "ODDIE", "SEBASTIAN NIÑO"],
          ["src/images/teams/LG/mid.png", "MID",        "SEIYA", "ALI BRACAMONTES"],
          ["src/images/teams/LG/adc.png", "ADC",        "WHITELOTUS", "MATÍAS MUSSO"],
          ["src/images/teams/LG/sup.png", "SUPPORT",    "GENTHIX", "MARIANO POLONSKY"],
          ["src/images/teams/LG/6th.png", "ADC",    "MARIOME", "MARIANO REYES"],
        ]
      },
      secondHead: "BIOGRAPHY",
      firstPar: "The only champion the LLN has ever known, Lyon Gaming is emblematic to Latin America North. With nine back-to-back regional titles, they are the most domestically dominant team in competitive League of Legends, and will return to the international stage after a decisive 3-0 victory over Infinity Esports in the Liga Latinoamerica Norte Summer Split Finals. They’ve clean swept every regional Finals series they’ve played in, and will be looking to translate their domestic success internationally.",
      secondPar: "Coach: Rodrigo “Yeti” Del Castillo"
    }
  },
  {
    idName: "LZ",
    firstdiv: {
      bg: "WE-bg.jpg",
      lg: "LZ.png",
      head: {
        content: "LONGZHU GAMING",
      }
    },
    seconddiv: {
      firstHead: "TEAM ROSTER",
      firstdiv: {
        className: "box-team",
        divs: [
          ["src/images/teams/LZ/top.png", "TOP",        "RASCAL", "KWANGHEE KIM"],
          ["src/images/teams/LZ/jungle.png", "JUNGLE",  "CUZZ", "UCHAN MUN"],
          ["src/images/teams/LZ/mid.png", "MID",        "BDD", "BO SUNG KWAK"],
          ["src/images/teams/LZ/adc.png", "ADC",        "PRAY", "JONGIN KIM"],
          ["src/images/teams/LZ/sup.png", "SUPPORT",    "GORILLA", "BEOMHYUN KANG"],
          ["src/images/teams/LZ/6th.png", "TOP",    "KHAN", "DONGHA KIM"],
        ]
      },
      secondHead: "BIOGRAPHY",
      firstPar: "For Longzhu Gaming, 2017 can only be described as an incredible miracle. They went from 7th place in Spring to LCK Champions in Summer, defeating the indomitable SK Telecom T1 3-1 in the Finals as a statement to the rest of Korea, and the rest of the world. This is a team that was entirely rebuilt at the start of the year around the old ROX Tigers bot lane of Pray and GorillA. While their former teammates went to championship winning teams, the duo created champions out of a team that could only dream of winning, and rightfully earned the #1 seed from Korea.",
      secondPar: "Coach: Jungsu Kim"
    }
  },
  {
    idName: "EDG",
    firstdiv: {
      bg: "WE-bg.jpg",
      lg: "EDG.png",
      head: {
        content: "EDWARD GAMING",
      }
    },
    seconddiv: {
      firstHead: "TEAM ROSTER",
      firstdiv: {
        className: "box-team",
        divs: [
          ["src/images/teams/EDG/top.png", "TOP",        "MOUSE", "YUHAO CHEN"],
          ["src/images/teams/EDG/jungle.png", "JUNGLE",  "CLEARLOVE7", "KAI MING"],
          ["src/images/teams/EDG/mid.png", "MID",        "SCOUT", "YECHAN LEE"],
          ["src/images/teams/EDG/adc.png", "ADC",        "IBOY", "XIANZHAO HU"],
          ["src/images/teams/EDG/sup.png", "SUPPORT",    "MEIKO", "YE TIAN"],
          ["src/images/teams/EDG/6th.png", "TOP",    "AUDI", "AODI ZHAO"],
        ]
      },
      secondHead: "BIOGRAPHY",
      firstPar: "Edward Gaming is one of the most popular and best performing teams in China. With their 2017 LPL Summer victory, they’ve now won five LPL Championships, five consecutive Demacia cups (earning themselves the nickname ‘Five Crowning King’), and have had three top eight placements at Worlds. They also beat SK Telecom T1 in the 2015 Mid-Season Invitational to become the only team other than SKT to hold an MSI Championship. Veteran player Clearlove will be looking to lead his team to greater heights as the #1 seed from China.",
      secondPar: "Nocheor &quot;Nofe&quot; Jeong"
    }
  },
  {
    idName: "G2",
    firstdiv: {
      bg: "WE-bg.jpg",
      lg: "G2.png",
      head: {
        content: "G2 ESPORTS",
      }
    },
    seconddiv: {
      firstHead: "TEAM ROSTER",
      firstdiv: {
        className: "box-team",
        divs: [
          ["src/images/teams/G2/top.png", "TOP",        "EXPECT", "DAEHAN KI"],
          ["src/images/teams/G2/jungle.png", "JUNGLE",  "TRICK", "KANG YUN KIM"],
          ["src/images/teams/G2/mid.png", "MID",        "PERKZ", "LUKA PERKOVIC"],
          ["src/images/teams/G2/adc.png", "ADC",        "ZVEN", "JESPER SVENNINGSEN"],
          ["src/images/teams/G2/sup.png", "SUPPORT",    "MITHY", "ALFONSO RODRIGUEZ"],
          ["src/images/teams/G2/6th.png", "SUPPORT",    "HOANG", "MICHAEL TUAN HOANG"],
        ]
      },
      secondHead: "BIOGRAPHY",
      firstPar: "The ‘Kings of Europe’ have once again asserted their dominance over region with their 4th consecutive European LCS Championship, with a clean 3-0 over Misfits in the Finals. Even after a shaky start to the Summer Split and coming into Playoffs as one of the lowest ranked teams, they still managed to claim the #1 seed and Europe’s Pool 1 berth for Worlds 2017. It’s a berth that they earned themselves back at the Mid-Season Invitational, where they reached the Finals, and dispelled the notion that they were a team that struggled internationally. Now they’ll get a chance to show the world once more that they are more than just a domestic powerhouse.",
      secondPar: "Coach: Joey &quot;Youngbuck&quot; Steltenpool"
    }
  },
  {
    idName: "FW",
    firstdiv: {
      bg: "HKA-bg.jpg",
      lg: "FW.png",
      head: {
        content: "FLASH WOLVES",
      }
    },
    seconddiv: {
      firstHead: "TEAM ROSTER",
      firstdiv: {
        className: "box-team",
        divs: [
          ["src/images/teams/FW/top.png", "TOP",        "MMD", "LI-HONG YU"],
          ["src/images/teams/FW/jungle.png", "JUNGLE",  "KARSA", "HAO-HSUAN HUNG"],
          ["src/images/teams/FW/mid.png", "MID",        "MAPLE", "YI-TANG HUANG"],
          ["src/images/teams/FW/adc.png", "ADC",        "BETTY", "YU-HUNG LU"],
          ["src/images/teams/FW/sup.png", "SUPPORT",    "SWORDART", "SHUO-CHIEH HU"],
          ["src/images/teams/FW/6th.png", "TOP",    "CYO", "HSI YU LIN"],
        ]
      },
      secondHead: "BIOGRAPHY",
      firstPar: "For the fourth consecutive split Flash Wolves have emerged from the LMS as champions, beating rivals ahq e-Sports Club in the Finals with a resounding 3-0 victory. They earned the LMS a Pool 1 berth back at the 2017 Mid-Season Invitational, and will now get to use it to their full advantage as they take the #1 seed from their region. Mainstays of international tournaments, this will be the Flash Wolves' third Worlds appearance. This year, they'll be looking to redeem their performance from Worlds 2016, where they failed to make it out of the Group Stage.",
      secondPar: "Coach: Frank “Steak” Chou"
    }
  },
  {
    idName: "SKT",
    firstdiv: {
      bg: "WE-bg.jpg",
      lg: "SKT.png",
      head: {
        content: "SK TELECOM T1",
      }
    },
    seconddiv: {
      firstHead: "TEAM ROSTER",
      firstdiv: {
        className: "box-team",
        divs: [
          ["src/images/teams/SKT/top.png", "TOP",        "HUNI", "SEONGHOON HEO"],
          ["src/images/teams/SKT/jungle.png", "JUNGLE",  "PEANUT", "WANGHO HAN"],
          ["src/images/teams/SKT/mid.png", "MID",        "FAKER", "SANGHYEOK LEE"],
          ["src/images/teams/SKT/adc.png", "ADC",        "BANG", "JUNSIK BAE"],
          ["src/images/teams/SKT/sup.png", "SUPPORT",    "WOLF", "JAEWAN LEE"],
          ["src/images/teams/SKT/6th.png", "JUNGLE",    "BLANK", "SUNGU KANG"],
        ]
      },
      secondHead: "BIOGRAPHY",
      firstPar: "Three-time World Champions, two-time Mid-Season Invitational Champions, three time LCK Champions, and inarguably the most dominant team in League of Legends history. SK telecom T1, the reigning World Champions, return to the biggest stage for a chance to defend their title and earn the Summoner’s Cup for the third consecutive time. SK telecom T1’s qualification casts a shadow over the tournament, as every World Championship they've attended, they’ve won. Although a loss to Longzhu Gaming in the LCK Finals earned them Korea’s #2 seed, SKT's still supplied with more sheer talent and experience than any other roster at Worlds.",
      secondPar: "Coach: Jeonggyun &quot;kkOma&quot; Kim"
    }
  },
  {
    idName: "SG",
    firstdiv: {
      bg: "WE-bg.jpg",
      lg: "SG.png",
      head: {
        content: "SAMSUNG GALAXY",
      }
    },
    seconddiv: {
      firstHead: "TEAM ROSTER",
      firstdiv: {
        className: "box-team",
        divs: [
          ["src/images/teams/SG/top.png", "TOP",        "CUVEE", "SUNGJIN LEE"],
          ["src/images/teams/SG/jungle.png", "JUNGLE",  "AMBITION", "CHANYONG KANG"],
          ["src/images/teams/SG/mid.png", "MID",        "CROWN", "MINHO LEE"],
          ["src/images/teams/SG/adc.png", "ADC",        "RULER", "JAEHYEOK PARK"],
          ["src/images/teams/SG/sup.png", "SUPPORT",    "COREJJ", "YONGIN JO"],
          ["src/images/teams/SG/6th.png", "JUNGLE",    "HARU", "MINSEUNG KANG"],
        ]
      },
      secondHead: "BIOGRAPHY",
      firstPar: "Samsung Galaxy return to the World Championship as the #3 seed from Korea. They're heading to Worlds after crushing the dreams of KT Rolster in the 2017 LCK Finals of the Regional Qualifier. In their last Worlds appearance they comfortably topped Group D, a group considered the ‘group of death’, and would go on to make it all the way to Finals where they faced reigning champions SK telecom T1. After dropping the first two games, Samsung staged a miraculous comeback to take Games 3 and 4, taking us to our first ever Game 5 at a World Championship Finals. They’ll be looking to do one better at Worlds 2017.",
      secondPar: "Coach: Woobum Choi"
    }
  },
  {
    idName: "RNG",
    firstdiv: {
      bg: "WE-bg.jpg",
      lg: "RNG.png",
      head: {
        content: "ROYAL NEVER GIVE UP",
      }
    },
    seconddiv: {
      firstHead: "TEAM ROSTER",
      firstdiv: {
        className: "box-team",
        divs: [
          ["src/images/teams/RNG/top.png", "TOP",        "LETME", "JUNZE YAN"],
          ["src/images/teams/RNG/jungle.png", "JUNGLE",  "MLXG", "SHIYU LIU"],
          ["src/images/teams/RNG/mid.png", "MID",        "XIAOHU", "YUANHAO LI"],
          ["src/images/teams/RNG/adc.png", "ADC",        "UZI", "ZIHAO JIAN"],
          ["src/images/teams/RNG/sup.png", "SUPPORT",    "MING", "SENMING SHI"],
          ["src/images/teams/RNG/6th.png", "JUNGLE",    "Y1HAN", "ZHIWEI HU"],
        ]
      },
      secondHead: "BIOGRAPHY",
      firstPar: "Royal Never Give Up has been one of the top teams in the LPL since the 2016 Spring Split. Now they’ll get a chance to perform on the biggest stage in front of a home crowd, as they take the #2 seed from the LPL on Championship Points after placing 2nd in both Spring and Summer Splits. While it is their second appearance at Worlds, the team holds plenty of Worlds experience, with Uzi having appeared in two World Championship Finals.",
      secondPar: "Coach: Dingxiang &quot;Firefox&quot; Huang"
    }
  },
  {
    idName: "TSM",
    firstdiv: {
      bg: "TOE-bg.jpg",
      lg: "TSM-w.png",
      head: {
        content: "TEAM SOLO MID",
      }
    },
    seconddiv: {
      firstHead: "TEAM ROSTER",
      firstdiv: {
        className: "box-team",
        divs: [
          ["src/images/teams/TSM/top.png", "TOP",        "HAUNTZER", "KEVIN YARNELL"],
          ["src/images/teams/TSM/jungle.png", "JUNGLE",  "SVENSKEREN", "DENNIS JOHNSEN"],
          ["src/images/teams/TSM/mid.png", "MID",        "BJERGSEN", "SØREN BJERG"],
          ["src/images/teams/TSM/adc.png", "ADC",        "DOUBLELIFT", "YILIANG PENG"],
          ["src/images/teams/TSM/sup.png", "SUPPORT",    "BIOFROST", "VINCENT WANG"],
          ["src/images/teams/TSM/6th.png", "ADC",    "MRRALLEZ", "RASMUS SKINNEHOLM"],
        ]
      },
      secondHead: "BIOGRAPHY",
      firstPar: "You’ll hear TSM chant in stadiums whether they’re playing or not. The most internationally recognizable team in North America is again the #1 seed from the region going into Worlds 2017. After a come-from-behind win in Game 4 of their NA LCS Finals series against Immortals, TSM became NA LCS Champions for the sixth time. They’ve competed in every NA LCS Championship Final, and this is their 7th World Championship, making them the only team in history to attend every World Championship.",
      secondPar: "Coach: Parth “Parth” Naidu"
    }
  },
  {
    idName: "IMT",
    firstdiv: {
      bg: "C9-bg.jpg",
      lg: "IMT.png",
      head: {
        content: "IMMORTALS",
      }
    },
    seconddiv: {
      firstHead: "TEAM ROSTER",
      firstdiv: {
        className: "box-team",
        divs: [
          ["src/images/teams/IMT/top.png", "TOP",        "FLAME", "HOJONG LEE"],
          ["src/images/teams/IMT/jungle.png", "JUNGLE",  "XMITHIE", "JAKE PUCHERO"],
          ["src/images/teams/IMT/mid.png", "MID",        "POBELTER", "EUGENE PARK"],
          ["src/images/teams/IMT/adc.png", "ADC",        "CODY SUN", "LI YU SUN"],
          ["src/images/teams/IMT/sup.png", "SUPPORT",    "OLLEH", "JOOSUNG KIM"],
          ["src/images/teams/IMT/6th.png", "JUNGLE",    "ANDA", "ANDY HOANG"],
        ]
      },
      secondHead: "BIOGRAPHY",
      firstPar: "Immortals fell heartbreakingly short of qualifying for Worlds in 2016. Now, with an almost completely rebuilt roster, they will finally make their debut at an international Riot event. After finishing 7th in the 2017 Spring Split, few would have picked them as a team representing North America at Worlds. But signing former CLG jungler Xmithie and coach Ssong saw them rocket to the top of the NA LCS ladder. They take the #2 seed from North America on Championship Points after a 2nd place finish in the Summer Split.",
      secondPar: "Coach: Sangsu &quot;Ssong&quot; Kim"
    }
  },
  {
    idName: "MF",
    firstdiv: {
      bg: "WE-bg.jpg",
      lg: "MF.png",
      head: {
        content: "MISFITS GAMING",
      }
    },
    seconddiv: {
      firstHead: "TEAM ROSTER",
      firstdiv: {
        className: "box-team",
        divs: [
          ["src/images/teams/MF/top.png", "TOP",        "ALPHARI", "BARNEY MORRIS"],
          ["src/images/teams/MF/jungle.png", "JUNGLE",  "MAXLORE", "NUBAR SARAFIAN"],
          ["src/images/teams/MF/mid.png", "MID",        "POWEROFEVIL", "TRISTAN SCHRAGE"],
          ["src/images/teams/MF/adc.png", "ADC",        "HANS SAMA", "STEVEN LIV"],
          ["src/images/teams/MF/sup.png", "SUPPORT",    "IGNAR", "DONGGEUN LEE"],
          ["src/images/teams/MF/6th.png", "SUPPORT",    "H1IVA", "ALEKSI KAIKKONEN"],
        ]
      },
      secondHead: "BIOGRAPHY",
      firstPar: "From the UK Premiership, to the EU Challenger Series, to the EU LCS all in one year, Misfits Gaming have had a meteoric rise through the competitive scene. They’ve spoken at length about their ‘one year plan’ to make it to the World Championship, and after a 4th place finish in Spring and a Finals appearance in Summer, it was enough to make their plan come to fruition. Misfits qualified for Worlds as Europe’s #2 seed on Championship Points, and in their first year in the LCS will have a chance to show their worth on the international stage.",
      secondPar: "Coach: Hussain Moosvi"
    }
  },
  {
    idName: "AHQ",
    firstdiv: {
      bg: "HKA-bg.jpg",
      lg: "AHQ.png",
      head: {
        content: "AHQ E-SPORTS CLUB",
      }
    },
    seconddiv: {
      firstHead: "TEAM ROSTER",
      firstdiv: {
        className: "box-team",
        divs: [
          ["src/images/teams/AHQ/top.png", "TOP",        "ZIV", "CHEN YI"],
          ["src/images/teams/AHQ/jungle.png", "JUNGLE",  "MOUNTAIN", "ZHAO-HONG XUE"],
          ["src/images/teams/AHQ/mid.png", "MID",        "WESTDOOR", "SHU-WEI LIU"],
          ["src/images/teams/AHQ/adc.png", "ADC",        "AN", "CHUN-AN CHOU"],
          ["src/images/teams/AHQ/sup.png", "SUPPORT",    "ALBIS", "CHIA-WEI KANG"],
          ["src/images/teams/AHQ/6th.png", "MID",    "CHAWY", "XING-LEI WONG"],
        ]
      },
      secondHead: "BIOGRAPHY",
      firstPar: "ahq e-Sports Club is one of the oldest and most celebrated teams. After placing 2nd in both Spring and Summer splits, they qualified as the #2 seed from the LMS on Championship Points. This will be their 4th World Championship appearance, making them one of the most experienced organizations at the tournament.",
      secondPar: "Coach: Shang-Ching &quot;GreenTea&quot; Tsai"
    }
  },
  {
    idName: "GAM",
    firstdiv: {
      bg: "GAM-bg.jpg",
      lg: "GM.png",
      head: {
        content: "GIGABYTE MARINES",
      }
    },
    seconddiv: {
      firstHead: "TEAM ROSTER",
      firstdiv: {
        className: "box-team",
        divs: [
          ["src/images/teams/GM/top.png", "TOP",        "ARCHIE", "MINH NHUT TRAN"],
          ["src/images/teams/GM/jungle.png", "JUNGLE",  "LEVI", "DUY KHANH DO"],
          ["src/images/teams/GM/mid.png", "MID",        "OPTIMUS", "VAN CUONG TRAN"],
          ["src/images/teams/GM/adc.png", "ADC",        "NOWAY", "VU LONG NGUYEN"],
          ["src/images/teams/GM/sup.png", "SUPPORT",    "SYA", "TRUNG TOAN PHAN"],
          ["src/images/teams/GM/6th.png", "MID",    "NEVAN", "THIEN NHAN PHUNG"],
        ]
      },
      secondHead: "BIOGRAPHY",
      firstPar: "The GIGABYTE Marines surprised everyone at the 2017 Mid-Season Invitational when they not only survived the Play-In, but thrived in the Group Stage, taking wins off some of the biggest teams in the world. They earned the GPL a Group Stage seed at Worlds, and were the rightful ones to take it as they reclaimed the title of GPL Champions with their victory over Thailand’s Ascension Gaming. Their hyper aggressive playstyle will make them one of the most exciting teams to watch at Worlds 2017.",
      secondPar: "Coach: Nguyen Duy Thach &quot;Tinikun&quot; Duong"
    }
  }
];
for (var i = 0; i < info.length; i++) {
  var iDIV = document.createElement("div");
  iDIV.id = info[i].idName;
  document.getElementsByClassName("section-wrapper-content")[0].appendChild(iDIV);

  var firstDIV_iDIV = document.createElement("div");
  firstDIV_iDIV.className = "banner";//info[i].firstdiv.className;
  firstDIV_iDIV.style = "background: url(src/images/teams/" + info[i].firstdiv.bg + ") no-repeat top;background-size:cover;";
  iDIV.appendChild(firstDIV_iDIV);

  var img_firstDIV_iDIV = document.createElement("img");
  img_firstDIV_iDIV.src = "src/images/teams/" + info[i].firstdiv.lg;
  firstDIV_iDIV.appendChild(img_firstDIV_iDIV);

  firstDIV_iDIV.innerHTML = firstDIV_iDIV.innerHTML + "<h2 onclick=toShowOrHide('"+info[i].idName+"-c')>" + info[i].firstdiv.head.content +"</h2>";
  // var h2_firstDIV_iDIV = document.createElement("h2");
  // firstDIV_iDIV.appendChild(document.createTextNode("<h2 onclick=toShowOrHide("+info[i].seconddiv.idName+")>" + info[i].firstdiv.head.content +"</h2>"));
  // h2_firstDIV_iDIV.innerHTML = info[i].firstdiv.head.content;// + " <i class='fa fa-eye-slash' onclick=toShowOrHide('"+ info[i].seconddiv.idName +"')></i>";
  // var link = info[i].seconddiv.idName;//info[i].idName + "-c";
  // alert(link);
  // h2_firstDIV_iDIV.onclick = toShowOrHide(info[i].seconddiv.idName);

  // h2_firstDIV_iDIV.outerHTML="111";//"<h2 onclick=toShowOrHide("+info[i].seconddiv.idName+")>" + info[i].firstdiv.head.content +"</h2>";
  // alert(h2_firstDIV_iDIV.outerHTML);
  // firstDIV_iDIV.appendChild(h2_firstDIV_iDIV);


  var secondDIV_iDIV = document.createElement("div");
  secondDIV_iDIV.className = "main-content";
  secondDIV_iDIV.id = info[i].idName+"-c";
  iDIV.appendChild(secondDIV_iDIV);

  var h3_secondDIV_iDIV = document.createElement("h3");
  h3_secondDIV_iDIV.innerHTML = info[i].seconddiv.firstHead;
  secondDIV_iDIV.appendChild(h3_secondDIV_iDIV);

  var box_secondDIV_iDIV = document.createElement("div");
  box_secondDIV_iDIV.className = info[i].seconddiv.firstdiv.className;
  secondDIV_iDIV.appendChild(box_secondDIV_iDIV);

  for (var j = 0; j < info[i].seconddiv.firstdiv.divs.length; j++) {
    var myDIV = document.createElement("div");
    myDIV.className = "team";
    box_secondDIV_iDIV.appendChild(myDIV);

    var myIMG = document.createElement("img");
    myIMG.src = info[i].seconddiv.firstdiv.divs[j][0];
    myDIV.appendChild(myIMG);

    var myH4 = document.createElement("h4");
    myH4.innerHTML = info[i].seconddiv.firstdiv.divs[j][1];
    myDIV.appendChild(myH4);

    var childDIV = document.createElement("div");
    childDIV.className = "name";
    myDIV.appendChild(childDIV);

    var mychildH4 = document.createElement("h4");
    mychildH4.innerHTML = info[i].seconddiv.firstdiv.divs[j][2];
    childDIV.appendChild(mychildH4);

    var mychildp = document.createElement("p");
    mychildp.innerHTML = info[i].seconddiv.firstdiv.divs[j][3];
    childDIV.appendChild(mychildp);
  }

  var h3_2nd_secondDIV_iDIV = document.createElement("h3");
  h3_2nd_secondDIV_iDIV.innerHTML = info[i].seconddiv.secondHead;
  secondDIV_iDIV.appendChild(h3_2nd_secondDIV_iDIV);

  var p_1st_secondDIV_iDIV = document.createElement("p");
  p_1st_secondDIV_iDIV.innerHTML = info[i].seconddiv.firstPar;
  secondDIV_iDIV.appendChild(p_1st_secondDIV_iDIV);

  var p_2nd_secondDIV_iDIV = document.createElement("p");
  p_2nd_secondDIV_iDIV.innerHTML = info[i].seconddiv.secondPar;
  secondDIV_iDIV.appendChild(p_2nd_secondDIV_iDIV);
}
