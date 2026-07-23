import {
  environment
} from "./chunk-MYYNWJMU.js";
import {
  marker
} from "./chunk-NHG2MSCL.js";
import {
  HttpClient,
  Router,
  TranslateService
} from "./chunk-YD3UXEIO.js";
import {
  Injectable,
  catchError,
  computed,
  effect,
  firstValueFrom,
  inject,
  of,
  setClassMetadata,
  signal,
  ɵɵdefineInjectable
} from "./chunk-3I2QHJYF.js";
import {
  __async,
  __commonJS,
  __require,
  __toESM
} from "./chunk-KBUIKKCC.js";

// node_modules/pluralize/pluralize.js
var require_pluralize = __commonJS({
  "node_modules/pluralize/pluralize.js"(exports, module) {
    "use strict";
    (function(root, pluralize3) {
      if (typeof __require === "function" && typeof exports === "object" && typeof module === "object") {
        module.exports = pluralize3();
      } else if (typeof define === "function" && define.amd) {
        define(function() {
          return pluralize3();
        });
      } else {
        root.pluralize = pluralize3();
      }
    })(exports, function() {
      var pluralRules = [];
      var singularRules = [];
      var uncountables = {};
      var irregularPlurals = {};
      var irregularSingles = {};
      function sanitizeRule(rule) {
        if (typeof rule === "string") {
          return new RegExp("^" + rule + "$", "i");
        }
        return rule;
      }
      function restoreCase(word, token) {
        if (word === token) return token;
        if (word === word.toLowerCase()) return token.toLowerCase();
        if (word === word.toUpperCase()) return token.toUpperCase();
        if (word[0] === word[0].toUpperCase()) {
          return token.charAt(0).toUpperCase() + token.substr(1).toLowerCase();
        }
        return token.toLowerCase();
      }
      function interpolate(str, args) {
        return str.replace(/\$(\d{1,2})/g, function(match, index) {
          return args[index] || "";
        });
      }
      function replace(word, rule) {
        return word.replace(rule[0], function(match, index) {
          var result = interpolate(rule[1], arguments);
          if (match === "") {
            return restoreCase(word[index - 1], result);
          }
          return restoreCase(match, result);
        });
      }
      function sanitizeWord(token, word, rules) {
        if (!token.length || uncountables.hasOwnProperty(token)) {
          return word;
        }
        var len = rules.length;
        while (len--) {
          var rule = rules[len];
          if (rule[0].test(word)) return replace(word, rule);
        }
        return word;
      }
      function replaceWord(replaceMap, keepMap, rules) {
        return function(word) {
          var token = word.toLowerCase();
          if (keepMap.hasOwnProperty(token)) {
            return restoreCase(word, token);
          }
          if (replaceMap.hasOwnProperty(token)) {
            return restoreCase(word, replaceMap[token]);
          }
          return sanitizeWord(token, word, rules);
        };
      }
      function checkWord(replaceMap, keepMap, rules, bool) {
        return function(word) {
          var token = word.toLowerCase();
          if (keepMap.hasOwnProperty(token)) return true;
          if (replaceMap.hasOwnProperty(token)) return false;
          return sanitizeWord(token, token, rules) === token;
        };
      }
      function pluralize3(word, count, inclusive) {
        var pluralized = count === 1 ? pluralize3.singular(word) : pluralize3.plural(word);
        return (inclusive ? count + " " : "") + pluralized;
      }
      pluralize3.plural = replaceWord(irregularSingles, irregularPlurals, pluralRules);
      pluralize3.isPlural = checkWord(irregularSingles, irregularPlurals, pluralRules);
      pluralize3.singular = replaceWord(irregularPlurals, irregularSingles, singularRules);
      pluralize3.isSingular = checkWord(irregularPlurals, irregularSingles, singularRules);
      pluralize3.addPluralRule = function(rule, replacement) {
        pluralRules.push([sanitizeRule(rule), replacement]);
      };
      pluralize3.addSingularRule = function(rule, replacement) {
        singularRules.push([sanitizeRule(rule), replacement]);
      };
      pluralize3.addUncountableRule = function(word) {
        if (typeof word === "string") {
          uncountables[word.toLowerCase()] = true;
          return;
        }
        pluralize3.addPluralRule(word, "$0");
        pluralize3.addSingularRule(word, "$0");
      };
      pluralize3.addIrregularRule = function(single, plural) {
        plural = plural.toLowerCase();
        single = single.toLowerCase();
        irregularSingles[single] = plural;
        irregularPlurals[plural] = single;
      };
      [
        // Pronouns.
        ["I", "we"],
        ["me", "us"],
        ["he", "they"],
        ["she", "they"],
        ["them", "them"],
        ["myself", "ourselves"],
        ["yourself", "yourselves"],
        ["itself", "themselves"],
        ["herself", "themselves"],
        ["himself", "themselves"],
        ["themself", "themselves"],
        ["is", "are"],
        ["was", "were"],
        ["has", "have"],
        ["this", "these"],
        ["that", "those"],
        // Words ending in with a consonant and `o`.
        ["echo", "echoes"],
        ["dingo", "dingoes"],
        ["volcano", "volcanoes"],
        ["tornado", "tornadoes"],
        ["torpedo", "torpedoes"],
        // Ends with `us`.
        ["genus", "genera"],
        ["viscus", "viscera"],
        // Ends with `ma`.
        ["stigma", "stigmata"],
        ["stoma", "stomata"],
        ["dogma", "dogmata"],
        ["lemma", "lemmata"],
        ["schema", "schemata"],
        ["anathema", "anathemata"],
        // Other irregular rules.
        ["ox", "oxen"],
        ["axe", "axes"],
        ["die", "dice"],
        ["yes", "yeses"],
        ["foot", "feet"],
        ["eave", "eaves"],
        ["goose", "geese"],
        ["tooth", "teeth"],
        ["quiz", "quizzes"],
        ["human", "humans"],
        ["proof", "proofs"],
        ["carve", "carves"],
        ["valve", "valves"],
        ["looey", "looies"],
        ["thief", "thieves"],
        ["groove", "grooves"],
        ["pickaxe", "pickaxes"],
        ["passerby", "passersby"]
      ].forEach(function(rule) {
        return pluralize3.addIrregularRule(rule[0], rule[1]);
      });
      [[/s?$/i, "s"], [/[^\u0000-\u007F]$/i, "$0"], [/([^aeiou]ese)$/i, "$1"], [/(ax|test)is$/i, "$1es"], [/(alias|[^aou]us|t[lm]as|gas|ris)$/i, "$1es"], [/(e[mn]u)s?$/i, "$1s"], [/([^l]ias|[aeiou]las|[ejzr]as|[iu]am)$/i, "$1"], [/(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i, "$1i"], [/(alumn|alg|vertebr)(?:a|ae)$/i, "$1ae"], [/(seraph|cherub)(?:im)?$/i, "$1im"], [/(her|at|gr)o$/i, "$1oes"], [/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|automat|quor)(?:a|um)$/i, "$1a"], [/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)(?:a|on)$/i, "$1a"], [/sis$/i, "ses"], [/(?:(kni|wi|li)fe|(ar|l|ea|eo|oa|hoo)f)$/i, "$1$2ves"], [/([^aeiouy]|qu)y$/i, "$1ies"], [/([^ch][ieo][ln])ey$/i, "$1ies"], [/(x|ch|ss|sh|zz)$/i, "$1es"], [/(matr|cod|mur|sil|vert|ind|append)(?:ix|ex)$/i, "$1ices"], [/\b((?:tit)?m|l)(?:ice|ouse)$/i, "$1ice"], [/(pe)(?:rson|ople)$/i, "$1ople"], [/(child)(?:ren)?$/i, "$1ren"], [/eaux$/i, "$0"], [/m[ae]n$/i, "men"], ["thou", "you"]].forEach(function(rule) {
        return pluralize3.addPluralRule(rule[0], rule[1]);
      });
      [[/s$/i, ""], [/(ss)$/i, "$1"], [/(wi|kni|(?:after|half|high|low|mid|non|night|[^\w]|^)li)ves$/i, "$1fe"], [/(ar|(?:wo|[ae])l|[eo][ao])ves$/i, "$1f"], [/ies$/i, "y"], [/\b([pl]|zomb|(?:neck|cross)?t|coll|faer|food|gen|goon|group|lass|talk|goal|cut)ies$/i, "$1ie"], [/\b(mon|smil)ies$/i, "$1ey"], [/\b((?:tit)?m|l)ice$/i, "$1ouse"], [/(seraph|cherub)im$/i, "$1"], [/(x|ch|ss|sh|zz|tto|go|cho|alias|[^aou]us|t[lm]as|gas|(?:her|at|gr)o|[aeiou]ris)(?:es)?$/i, "$1"], [/(analy|diagno|parenthe|progno|synop|the|empha|cri|ne)(?:sis|ses)$/i, "$1sis"], [/(movie|twelve|abuse|e[mn]u)s$/i, "$1"], [/(test)(?:is|es)$/i, "$1is"], [/(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i, "$1us"], [/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|quor)a$/i, "$1um"], [/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)a$/i, "$1on"], [/(alumn|alg|vertebr)ae$/i, "$1a"], [/(cod|mur|sil|vert|ind)ices$/i, "$1ex"], [/(matr|append)ices$/i, "$1ix"], [/(pe)(rson|ople)$/i, "$1rson"], [/(child)ren$/i, "$1"], [/(eau)x?$/i, "$1"], [/men$/i, "man"]].forEach(function(rule) {
        return pluralize3.addSingularRule(rule[0], rule[1]);
      });
      [
        // Singular words with no plurals.
        "adulthood",
        "advice",
        "agenda",
        "aid",
        "aircraft",
        "alcohol",
        "ammo",
        "analytics",
        "anime",
        "athletics",
        "audio",
        "bison",
        "blood",
        "bream",
        "buffalo",
        "butter",
        "carp",
        "cash",
        "chassis",
        "chess",
        "clothing",
        "cod",
        "commerce",
        "cooperation",
        "corps",
        "debris",
        "diabetes",
        "digestion",
        "elk",
        "energy",
        "equipment",
        "excretion",
        "expertise",
        "firmware",
        "flounder",
        "fun",
        "gallows",
        "garbage",
        "graffiti",
        "hardware",
        "headquarters",
        "health",
        "herpes",
        "highjinks",
        "homework",
        "housework",
        "information",
        "jeans",
        "justice",
        "kudos",
        "labour",
        "literature",
        "machinery",
        "mackerel",
        "mail",
        "media",
        "mews",
        "moose",
        "music",
        "mud",
        "manga",
        "news",
        "only",
        "personnel",
        "pike",
        "plankton",
        "pliers",
        "police",
        "pollution",
        "premises",
        "rain",
        "research",
        "rice",
        "salmon",
        "scissors",
        "series",
        "sewage",
        "shambles",
        "shrimp",
        "software",
        "species",
        "staff",
        "swine",
        "tennis",
        "traffic",
        "transportation",
        "trout",
        "tuna",
        "wealth",
        "welfare",
        "whiting",
        "wildebeest",
        "wildlife",
        "you",
        /pok[eé]mon$/i,
        // Regexes.
        /[^aeiou]ese$/i,
        // "chinese", "japanese"
        /deer$/i,
        // "deer", "reindeer"
        /fish$/i,
        // "fish", "blowfish", "angelfish"
        /measles$/i,
        /o[iu]s$/i,
        // "carnivorous"
        /pox$/i,
        // "chickpox", "smallpox"
        /sheep$/i
      ].forEach(pluralize3.addUncountableRule);
      return pluralize3;
    });
  }
});

// node_modules/normalize-strings/charmap.json
var require_charmap = __commonJS({
  "node_modules/normalize-strings/charmap.json"(exports, module) {
    module.exports = { "105": "i", "192": "A", "193": "A", "194": "A", "195": "A", "196": "A", "197": "A", "199": "C", "200": "E", "201": "E", "202": "E", "203": "E", "204": "I", "205": "I", "206": "I", "207": "I", "209": "N", "210": "O", "211": "O", "212": "O", "213": "O", "214": "O", "216": "O", "217": "U", "218": "U", "219": "U", "220": "U", "221": "Y", "224": "a", "225": "a", "226": "a", "227": "a", "228": "a", "229": "a", "231": "c", "232": "e", "233": "e", "234": "e", "235": "e", "236": "i", "237": "i", "238": "i", "239": "i", "241": "n", "242": "o", "243": "o", "244": "o", "245": "o", "246": "o", "248": "o", "249": "u", "250": "u", "251": "u", "252": "u", "253": "y", "255": "y", "256": "A", "257": "a", "258": "A", "259": "a", "260": "A", "261": "a", "262": "C", "263": "c", "264": "C", "265": "c", "266": "C", "267": "c", "268": "C", "269": "c", "270": "D", "271": "d", "272": "D", "273": "d", "274": "E", "275": "e", "276": "E", "277": "e", "278": "E", "279": "e", "280": "E", "281": "e", "282": "E", "283": "e", "284": "G", "285": "g", "286": "G", "287": "g", "288": "G", "289": "g", "290": "G", "291": "g", "292": "H", "293": "h", "294": "H", "295": "h", "296": "I", "297": "i", "298": "I", "299": "i", "300": "I", "301": "i", "302": "I", "303": "i", "304": "I", "308": "J", "309": "j", "310": "K", "311": "k", "313": "L", "314": "l", "315": "L", "316": "l", "317": "L", "318": "l", "319": "L", "320": "l", "321": "L", "322": "l", "323": "N", "324": "n", "325": "N", "326": "n", "327": "N", "328": "n", "332": "O", "333": "o", "334": "O", "335": "o", "336": "O", "337": "o", "338": "O", "339": "o", "340": "R", "341": "r", "342": "R", "343": "r", "344": "R", "345": "r", "346": "S", "347": "s", "348": "S", "349": "s", "350": "S", "351": "s", "352": "S", "353": "s", "354": "T", "355": "t", "356": "T", "357": "t", "358": "T", "359": "t", "360": "U", "361": "u", "362": "U", "363": "u", "364": "U", "365": "u", "366": "U", "367": "u", "368": "U", "369": "u", "370": "U", "371": "u", "372": "W", "373": "w", "374": "Y", "375": "y", "376": "Y", "377": "Z", "378": "z", "379": "Z", "380": "z", "381": "Z", "382": "z", "384": "b", "385": "B", "386": "B", "387": "b", "390": "O", "391": "C", "392": "c", "393": "D", "394": "D", "395": "D", "396": "d", "398": "E", "400": "E", "401": "F", "402": "f", "403": "G", "407": "I", "408": "K", "409": "k", "410": "l", "412": "M", "413": "N", "414": "n", "415": "O", "416": "O", "417": "o", "420": "P", "421": "p", "422": "R", "427": "t", "428": "T", "429": "t", "430": "T", "431": "U", "432": "u", "434": "V", "435": "Y", "436": "y", "437": "Z", "438": "z", "461": "A", "462": "a", "463": "I", "464": "i", "465": "O", "466": "o", "467": "U", "468": "u", "477": "e", "484": "G", "485": "g", "486": "G", "487": "g", "488": "K", "489": "k", "490": "O", "491": "o", "500": "G", "501": "g", "504": "N", "505": "n", "512": "A", "513": "a", "514": "A", "515": "a", "516": "E", "517": "e", "518": "E", "519": "e", "520": "I", "521": "i", "522": "I", "523": "i", "524": "O", "525": "o", "526": "O", "527": "o", "528": "R", "529": "r", "530": "R", "531": "r", "532": "U", "533": "u", "534": "U", "535": "u", "536": "S", "537": "s", "538": "T", "539": "t", "542": "H", "543": "h", "544": "N", "545": "d", "548": "Z", "549": "z", "550": "A", "551": "a", "552": "E", "553": "e", "558": "O", "559": "o", "562": "Y", "563": "y", "564": "l", "565": "n", "566": "t", "567": "j", "570": "A", "571": "C", "572": "c", "573": "L", "574": "T", "575": "s", "576": "z", "579": "B", "580": "U", "581": "V", "582": "E", "583": "e", "584": "J", "585": "j", "586": "Q", "587": "q", "588": "R", "589": "r", "590": "Y", "591": "y", "592": "a", "593": "a", "595": "b", "596": "o", "597": "c", "598": "d", "599": "d", "600": "e", "603": "e", "604": "e", "605": "e", "606": "e", "607": "j", "608": "g", "609": "g", "610": "g", "613": "h", "614": "h", "616": "i", "618": "i", "619": "l", "620": "l", "621": "l", "623": "m", "624": "m", "625": "m", "626": "n", "627": "n", "628": "n", "629": "o", "633": "r", "634": "r", "635": "r", "636": "r", "637": "r", "638": "r", "639": "r", "640": "r", "641": "r", "642": "s", "647": "t", "648": "t", "649": "u", "651": "v", "652": "v", "653": "w", "654": "y", "655": "y", "656": "z", "657": "z", "663": "c", "665": "b", "666": "e", "667": "g", "668": "h", "669": "j", "670": "k", "671": "l", "672": "q", "686": "h", "688": "h", "690": "j", "691": "r", "692": "r", "694": "r", "695": "w", "696": "y", "737": "l", "738": "s", "739": "x", "780": "v", "829": "x", "851": "x", "867": "a", "868": "e", "869": "i", "870": "o", "871": "u", "872": "c", "873": "d", "874": "h", "875": "m", "876": "r", "877": "t", "878": "v", "879": "x", "7424": "a", "7427": "b", "7428": "c", "7429": "d", "7431": "e", "7432": "e", "7433": "i", "7434": "j", "7435": "k", "7436": "l", "7437": "m", "7438": "n", "7439": "o", "7440": "o", "7441": "o", "7442": "o", "7443": "o", "7446": "o", "7447": "o", "7448": "p", "7449": "r", "7450": "r", "7451": "t", "7452": "u", "7453": "u", "7454": "u", "7455": "m", "7456": "v", "7457": "w", "7458": "z", "7522": "i", "7523": "r", "7524": "u", "7525": "v", "7680": "A", "7681": "a", "7682": "B", "7683": "b", "7684": "B", "7685": "b", "7686": "B", "7687": "b", "7690": "D", "7691": "d", "7692": "D", "7693": "d", "7694": "D", "7695": "d", "7696": "D", "7697": "d", "7698": "D", "7699": "d", "7704": "E", "7705": "e", "7706": "E", "7707": "e", "7710": "F", "7711": "f", "7712": "G", "7713": "g", "7714": "H", "7715": "h", "7716": "H", "7717": "h", "7718": "H", "7719": "h", "7720": "H", "7721": "h", "7722": "H", "7723": "h", "7724": "I", "7725": "i", "7728": "K", "7729": "k", "7730": "K", "7731": "k", "7732": "K", "7733": "k", "7734": "L", "7735": "l", "7738": "L", "7739": "l", "7740": "L", "7741": "l", "7742": "M", "7743": "m", "7744": "M", "7745": "m", "7746": "M", "7747": "m", "7748": "N", "7749": "n", "7750": "N", "7751": "n", "7752": "N", "7753": "n", "7754": "N", "7755": "n", "7764": "P", "7765": "p", "7766": "P", "7767": "p", "7768": "R", "7769": "r", "7770": "R", "7771": "r", "7774": "R", "7775": "r", "7776": "S", "7777": "s", "7778": "S", "7779": "s", "7786": "T", "7787": "t", "7788": "T", "7789": "t", "7790": "T", "7791": "t", "7792": "T", "7793": "t", "7794": "U", "7795": "u", "7796": "U", "7797": "u", "7798": "U", "7799": "u", "7804": "V", "7805": "v", "7806": "V", "7807": "v", "7808": "W", "7809": "w", "7810": "W", "7811": "w", "7812": "W", "7813": "w", "7814": "W", "7815": "w", "7816": "W", "7817": "w", "7818": "X", "7819": "x", "7820": "X", "7821": "x", "7822": "Y", "7823": "y", "7824": "Z", "7825": "z", "7826": "Z", "7827": "z", "7828": "Z", "7829": "z", "7835": "s", "7840": "A", "7841": "a", "7842": "A", "7843": "a", "7864": "E", "7865": "e", "7866": "E", "7867": "e", "7868": "E", "7869": "e", "7880": "I", "7881": "i", "7882": "I", "7883": "i", "7884": "O", "7885": "o", "7886": "O", "7887": "o", "7908": "U", "7909": "u", "7910": "U", "7911": "u", "7922": "Y", "7923": "y", "7924": "Y", "7925": "y", "7926": "Y", "7927": "y", "7928": "Y", "7929": "y", "8305": "i", "8341": "h", "8342": "k", "8343": "l", "8344": "m", "8345": "n", "8346": "p", "8347": "s", "8348": "t", "8450": "c", "8458": "g", "8459": "h", "8460": "h", "8461": "h", "8464": "i", "8465": "i", "8466": "l", "8467": "l", "8468": "l", "8469": "n", "8472": "p", "8473": "p", "8474": "q", "8475": "r", "8476": "r", "8477": "r", "8484": "z", "8488": "z", "8492": "b", "8493": "c", "8495": "e", "8496": "e", "8497": "f", "8498": "F", "8499": "m", "8500": "o", "8506": "q", "8513": "g", "8514": "l", "8515": "l", "8516": "y", "8517": "d", "8518": "d", "8519": "e", "8520": "i", "8521": "j", "8526": "f", "8579": "C", "8580": "c", "8765": "s", "8766": "s", "8959": "z", "8999": "x", "9746": "x", "9776": "i", "9866": "i", "10005": "x", "10006": "x", "10007": "x", "10008": "x", "10625": "z", "10626": "z", "11362": "L", "11364": "R", "11365": "a", "11366": "t", "11373": "A", "11374": "M", "11375": "A", "11390": "S", "11391": "Z", "19904": "i", "42893": "H", "42922": "H", "42923": "E", "42924": "G", "42925": "L", "42928": "K", "42929": "T", "62937": "x" };
  }
});

// node_modules/normalize-strings/index.js
var require_normalize_strings = __commonJS({
  "node_modules/normalize-strings/index.js"(exports, module) {
    "use strict";
    (function(global, factory) {
      if (typeof define === "function" && define.amd) {
        define(function() {
          return factory(global, global.document);
        });
      } else if (typeof module !== "undefined" && module.exports) {
        module.exports = factory(global, global.document);
      } else {
        global.normalize = factory(global, global.document);
      }
    })(typeof window !== "undefined" ? window : exports, function(window2, document) {
      var charmap = require_charmap();
      var regex = null;
      var current_charmap;
      var old_charmap;
      function normalize2(str, custom_charmap) {
        old_charmap = current_charmap;
        current_charmap = custom_charmap || charmap;
        regex = regex && old_charmap === current_charmap ? regex : buildRegExp(current_charmap);
        return str.replace(regex, function(charToReplace) {
          return current_charmap[charToReplace.charCodeAt(0)] || charToReplace;
        });
      }
      function buildRegExp(charmap2) {
        return new RegExp("[" + Object.keys(charmap2).map(function(code) {
          return String.fromCharCode(code);
        }).join(" ") + "]", "g");
      }
      return normalize2;
    });
  }
});

// src/app/common/data.model.ts
var ProjectPhase;
(function(ProjectPhase2) {
  ProjectPhase2["Draft"] = "project.phase.draft";
  ProjectPhase2["Discover"] = "project.phase.discover";
  ProjectPhase2["Assess"] = "project.phase.assess";
  ProjectPhase2["Design"] = "project.phase.design";
  ProjectPhase2["Approve"] = "project.phase.approve";
  ProjectPhase2["Complete"] = "project.phase.complete";
})(ProjectPhase || (ProjectPhase = {}));
var PhaseStatus;
(function(PhaseStatus2) {
  PhaseStatus2["Complete"] = "project.phase.status.complete";
  PhaseStatus2["Current"] = "project.phase.status.current";
  PhaseStatus2["Pending"] = "project.phase.status.pending";
})(PhaseStatus || (PhaseStatus = {}));
var PageTemplate;
(function(PageTemplate2) {
  PageTemplate2["Content"] = "template.content";
  PageTemplate2["Subway"] = "template.subway";
  PageTemplate2["OldSubway"] = "template.oldSubway";
  PageTemplate2["Newsroom"] = "template.newsroom";
  PageTemplate2["VideoTranscript"] = "template.videoTranscript";
  PageTemplate2["Campaign"] = "template.campaign";
  PageTemplate2["ReadmeForm"] = "template.readmeForm";
  PageTemplate2["ReadmeGuide"] = "template.readmeGuide";
  PageTemplate2["Guide"] = "template.guide";
  PageTemplate2["GuideT1"] = "template.guideT1";
  PageTemplate2["ReadmeT1"] = "template.readmeT1";
  PageTemplate2["ReadmeTD1"] = "template.readmeTD1";
  PageTemplate2["ReadmePayroll"] = "template.readmePayroll";
  PageTemplate2["Contact"] = "template.contact";
  PageTemplate2["Topic"] = "template.topic";
  PageTemplate2["OldTopic"] = "template.oldTopic";
  PageTemplate2["Navigation"] = "template.navigation";
  PageTemplate2["Brochure"] = "template.brochure";
  PageTemplate2["PdfDownload"] = "template.pdfDownload";
  PageTemplate2["MultimediaGallery"] = "template.multimediaGallery";
  PageTemplate2["Taxtip"] = "template.taxtip";
  PageTemplate2["TaxFilingSeasonMediaKit"] = "template.taxFilingSeasonMediaKit";
  PageTemplate2["EnforcementNotice"] = "template.enforcementNotice";
  PageTemplate2["Freestyle"] = "template.freestyle";
})(PageTemplate || (PageTemplate = {}));
var FIELD_FILTERS = ["isNew", "isMoved", "isROT", "linksToPortal", "archiveStatus", "noindex", "isOrphan"];
var COLUMN_GROUPS = ["english", "french", "status", "actions", "notes", "problems", "pageData", "owner", "metadata"];

// src/app/common/portal-domains.config.ts
var PORTAL_DOMAINS = [
  //PROD
  "ams-sga.cra-arc.gc.ca",
  "ams-sga-cra-arc.fjgc-gccf.gc.ca",
  "apps.cra-arc.gc.ca",
  "apps.ams-sga.cra-arc.gc.ca",
  "apps1.ams-sga.cra-arc.gc.ca",
  "apps2.ams-sga.cra-arc.gc.ca",
  "apps3.ams-sga.cra-arc.gc.ca",
  "apps4.ams-sga.cra-arc.gc.ca",
  "apps5.ams-sga.cra-arc.gc.ca",
  "apps6.ams-sga.cra-arc.gc.ca",
  "apps7.ams-sga.cra-arc.gc.ca",
  "apps8.ams-sga.cra-arc.gc.ca",
  "benefitsfinder.services.gc.ca",
  "careers-carrieres.cra-arc.gc.ca",
  "cms-sgj.cra-arc.gc.ca",
  "covid-benefits.alpha.canada.ca",
  "cra-arc-survey-sondage.ca",
  "itools-ioutils.fcac-acfc.gc.ca",
  "live.webcastcanada.ca",
  "services.securekeyconcierge.com",
  "www.cra-arc.gc.ca/cgi-bin/",
  "www.cra-engage-arc.ca",
  "www.paysimply.ca",
  //STAGING
  "ams-sga-si.cra-arc.gc.ca",
  "ams-sga-si2.cra-arc.gc.ca",
  "ams-sga-ua.cra-arc.gc.ca",
  "ams-sga-ua2.cra-arc.gc.ca",
  "apps-ef.isvcs.net",
  "apps-ot.cra-arc.gc.ca",
  "apps-ot.isvcs.net",
  "apps-si.isvcs.net",
  "apps-si2.isvcs.net",
  "apps-ua.cra-arc.gc.ca",
  "apps-ua.isvcs.net",
  "apps-ua2.cra-arc.gc.ca",
  "apps-ua2.isvcs.net",
  "apps-ut.cra-arc.gc.ca",
  "apps-ut.isvcs.net",
  "apps-ut2.cra-arc.gc.ca",
  "apps-ut2.isvcs.net",
  "apps1.ams-sga-ot.cra-arc.gc.ca",
  "apps1.ams-sga-ot2.cra-arc.gc.ca",
  "apps2.ams-sga-ot.cra-arc.gc.ca",
  "apps2.ams-sga-ot2.cra-arc.gc.ca",
  "apps3.ams-sga-ot.cra-arc.gc.ca",
  "apps3.ams-sga-ot2.cra-arc.gc.ca",
  "apps4.ams-sga-ot.cra-arc.gc.ca",
  "apps4.ams-sga-ot2.cra-arc.gc.ca",
  "apps5.ams-sga-ot.cra-arc.gc.ca",
  "apps5.ams-sga-ot2.cra-arc.gc.ca",
  "apps6.ams-sga-ot.cra-arc.gc.ca",
  "apps6.ams-sga-ot2.cra-arc.gc.ca",
  "apps7.ams-sga-ot.cra-arc.gc.ca",
  "apps7.ams-sga-ot2.cra-arc.gc.ca",
  "apps8.ams-sga-ot.cra-arc.gc.ca",
  "apps8.ams-sga-ot2.cra-arc.gc.ca",
  "cms-sgj-ot.cra-arc.gc.ca",
  "cms-sgj-ot2.cra-arc.gc.ca",
  "cms-sgj-si.cra-arc.gc.ca",
  "cms-sgj-si2.cra-arc.gc.ca",
  "cms-sgj-ua.cra-arc.gc.ca",
  "cms-sgj-ua2.cra-arc.gc.ca",
  "cp-ea.isvcs.net",
  "cp-ef.isvcs.net",
  "cp-ut.isvcs.net",
  "cp-ut2.isvcs.net",
  "rp-ea.isvcs.net",
  "rp-ef.isvcs.net",
  "rp-ut.isvcs.net",
  "rp-ut.isvcs.net/gol-ged/mima/ngbeta/#/bus/",
  "rp-ut2.isvcs.net",
  "rp-ut4.isvcs.net"
];
function isPortalDomain(url) {
  try {
    const urlObj = new URL(url);
    return PORTAL_DOMAINS.some((portal) => urlObj.hostname === portal || urlObj.hostname.endsWith("." + portal));
  } catch {
    return false;
  }
}

// node_modules/syllable/index.js
var import_pluralize = __toESM(require_pluralize(), 1);
var import_normalize_strings = __toESM(require_normalize_strings(), 1);

// node_modules/syllable/problematic.js
var problematic = {
  abalone: 4,
  abare: 3,
  abbruzzese: 4,
  abed: 2,
  aborigine: 5,
  abruzzese: 4,
  acreage: 3,
  adame: 3,
  adieu: 2,
  adobe: 3,
  anemone: 4,
  anyone: 3,
  apache: 3,
  aphrodite: 4,
  apostrophe: 4,
  ariadne: 4,
  cafe: 2,
  calliope: 4,
  catastrophe: 4,
  chile: 2,
  chloe: 2,
  circe: 2,
  coyote: 3,
  daphne: 2,
  epitome: 4,
  eurydice: 4,
  euterpe: 3,
  every: 2,
  everywhere: 3,
  forever: 3,
  gethsemane: 4,
  guacamole: 4,
  hermione: 4,
  hyperbole: 4,
  jesse: 2,
  jukebox: 2,
  karate: 3,
  machete: 3,
  maybe: 2,
  naive: 2,
  newlywed: 3,
  penelope: 4,
  people: 2,
  persephone: 4,
  phoebe: 2,
  pulse: 1,
  queue: 1,
  recipe: 3,
  riverbed: 3,
  sesame: 3,
  shoreline: 2,
  simile: 3,
  snuffleupagus: 5,
  sometimes: 2,
  syncope: 3,
  tamale: 3,
  waterbed: 3,
  wednesday: 2,
  yosemite: 4,
  zoe: 2
};

// node_modules/syllable/index.js
var own = {}.hasOwnProperty;
var EXPRESSION_MONOSYLLABIC_ONE = new RegExp(["awe($|d|so)", "cia(?:l|$)", "tia", "cius", "cious", "[^aeiou]giu", "[aeiouy][^aeiouy]ion", "iou", "sia$", "eous$", "[oa]gue$", ".[^aeiuoycgltdb]{2,}ed$", ".ely$", "^jua", "uai", "eau", "^busi$", "(?:[aeiouy](?:" + ["[bcfgklmnprsvwxyz]", "ch", "dg", "g[hn]", "lch", "l[lv]", "mm", "nch", "n[cgn]", "r[bcnsv]", "squ", "s[chkls]", "th"].join("|") + ")ed$)", "(?:[aeiouy](?:" + ["[bdfklmnprstvy]", "ch", "g[hn]", "lch", "l[lv]", "mm", "nch", "nn", "r[nsv]", "squ", "s[cklst]", "th"].join("|") + ")es$)"].join("|"), "g");
var EXPRESSION_MONOSYLLABIC_TWO = new RegExp("[aeiouy](?:" + ["[bcdfgklmnprstvyz]", "ch", "dg", "g[hn]", "l[lv]", "mm", "n[cgns]", "r[cnsv]", "squ", "s[cklst]", "th"].join("|") + ")e$", "g");
var EXPRESSION_DOUBLE_SYLLABIC_ONE = new RegExp("(?:" + [
  "([^aeiouy])\\1l",
  "[^aeiouy]ie(?:r|s?t)",
  "[aeiouym]bl",
  "eo",
  "ism",
  "asm",
  "thm",
  "dnt",
  "snt",
  "uity",
  "dea",
  "gean",
  "oa",
  "ua",
  "react?",
  "orbed",
  // Cancel `'.[^aeiuoycgltdb]{2,}ed$',`
  "shred",
  // Cancel `'.[^aeiuoycgltdb]{2,}ed$',`
  "eings?",
  "[aeiouy]sh?e[rs]"
].join("|") + ")$", "g");
var EXPRESSION_DOUBLE_SYLLABIC_TWO = new RegExp(["creat(?!u)", "[^gq]ua[^auieo]", "[aeiou]{3}", "^(?:ia|mc|coa[dglx].)", "^re(app|es|im|us)", "(th|d)eist"].join("|"), "g");
var EXPRESSION_DOUBLE_SYLLABIC_THREE = new RegExp(["[^aeiou]y[ae]", "[^l]lien", "riet", "dien", "iu", "io", "ii", "uen", "[aeilotu]real", "real[aeilotu]", "iell", "eo[^aeiou]", "[aeiou]y[aeiou]"].join("|"), "g");
var EXPRESSION_DOUBLE_SYLLABIC_FOUR = /[^s]ia/;
var EXPRESSION_SINGLE = new RegExp(["^(?:" + ["un", "fore", "ware", "none?", "out", "post", "sub", "pre", "pro", "dis", "side", "some"].join("|") + ")", "(?:" + ["ly", "less", "some", "ful", "ers?", "ness", "cians?", "ments?", "ettes?", "villes?", "ships?", "sides?", "ports?", "shires?", "[gnst]ion(?:ed|s)?"].join("|") + ")$"].join("|"), "g");
var EXPRESSION_DOUBLE = new RegExp(["^(?:" + ["above", "anti", "ante", "counter", "hyper", "afore", "agri", "infra", "intra", "inter", "over", "semi", "ultra", "under", "extra", "dia", "micro", "mega", "kilo", "pico", "nano", "macro", "somer"].join("|") + ")", "(?:fully|berry|woman|women|edly|union|((?:[bcdfghjklmnpqrstvwxz])|[aeiou])ye?ing)$"].join("|"), "g");
var EXPRESSION_TRIPLE = /(creations?|ology|ologist|onomy|onomist)$/g;
function syllable(value) {
  const values = (0, import_normalize_strings.default)(String(value)).toLowerCase().replace(/['’]/g, "").split(/\b/g);
  let index = -1;
  let sum = 0;
  while (++index < values.length) {
    sum += one(values[index].replace(/[^a-z]/g, ""));
  }
  return sum;
}
function one(value) {
  let count = 0;
  if (value.length === 0) {
    return count;
  }
  if (value.length < 3) {
    return 1;
  }
  if (own.call(problematic, value)) {
    return problematic[value];
  }
  const singular = (0, import_pluralize.default)(value, 1);
  if (own.call(problematic, singular)) {
    return problematic[singular];
  }
  const addOne = returnFactory(1);
  const subtractOne = returnFactory(-1);
  value = value.replace(EXPRESSION_TRIPLE, countFactory(3)).replace(EXPRESSION_DOUBLE, countFactory(2)).replace(EXPRESSION_SINGLE, countFactory(1));
  const parts = value.split(/[^aeiouy]+/);
  let index = -1;
  while (++index < parts.length) {
    if (parts[index] !== "") {
      count++;
    }
  }
  value.replace(EXPRESSION_MONOSYLLABIC_ONE, subtractOne).replace(EXPRESSION_MONOSYLLABIC_TWO, subtractOne);
  value.replace(EXPRESSION_DOUBLE_SYLLABIC_ONE, addOne).replace(EXPRESSION_DOUBLE_SYLLABIC_TWO, addOne).replace(EXPRESSION_DOUBLE_SYLLABIC_THREE, addOne).replace(EXPRESSION_DOUBLE_SYLLABIC_FOUR, addOne);
  return count || 1;
  function countFactory(addition) {
    return counter;
    function counter() {
      count += addition;
      return "";
    }
  }
  function returnFactory(addition) {
    return returner;
    function returner($0) {
      count += addition;
      return $0;
    }
  }
}

// node_modules/text-readability/main.js
var import_pluralize2 = __toESM(require_pluralize(), 1);

// node_modules/text-readability/easy_words.js
var easyWords = ["a", "able", "aboard", "about", "above", "absent", "accept", "accident", "account", "ache", "aching", "acorn", "acre", "across", "act", "acts", "add", "address", "admire", "adventure", "afar", "afraid", "after", "afternoon", "afterward", "afterwards", "again", "against", "age", "aged", "ago", "agree", "ah", "ahead", "aid", "aim", "air", "airfield", "airplane", "airport", "airship", "airy", "alarm", "alike", "alive", "all", "alley", "alligator", "allow", "almost", "alone", "along", "aloud", "already", "also", "always", "am", "america", "american", "among", "amount", "an", "and", "angel", "anger", "angry", "animal", "another", "answer", "ant", "any", "anybody", "anyhow", "anyone", "anything", "anyway", "anywhere", "apart", "apartment", "ape", "apiece", "appear", "apple", "april", "apron", "are", "aren't", "arise", "arithmetic", "arm", "armful", "army", "arose", "around", "arrange", "arrive", "arrived", "arrow", "art", "artist", "as", "ash", "ashes", "aside", "ask", "asleep", "at", "ate", "attack", "attend", "attention", "august", "aunt", "author", "auto", "automobile", "autumn", "avenue", "awake", "awaken", "away", "awful", "awfully", "awhile", "ax", "axe", "baa", "babe", "babies", "back", "background", "backward", "backwards", "bacon", "bad", "badge", "badly", "bag", "bake", "baker", "bakery", "baking", "ball", "balloon", "banana", "band", "bandage", "bang", "banjo", "bank", "banker", "bar", "barber", "bare", "barefoot", "barely", "bark", "barn", "barrel", "base", "baseball", "basement", "basket", "bat", "batch", "bath", "bathe", "bathing", "bathroom", "bathtub", "battle", "battleship", "bay", "be", "beach", "bead", "beam", "bean", "bear", "beard", "beast", "beat", "beating", "beautiful", "beautify", "beauty", "became", "because", "become", "becoming", "bed", "bedbug", "bedroom", "bedspread", "bedtime", "bee", "beech", "beef", "beefsteak", "beehive", "been", "beer", "beet", "before", "beg", "began", "beggar", "begged", "begin", "beginning", "begun", "behave", "behind", "being", "believe", "bell", "belong", "below", "belt", "bench", "bend", "beneath", "bent", "berries", "berry", "beside", "besides", "best", "bet", "better", "between", "bib", "bible", "bicycle", "bid", "big", "bigger", "bill", "billboard", "bin", "bind", "bird", "birth", "birthday", "biscuit", "bit", "bite", "biting", "bitter", "black", "blackberry", "blackbird", "blackboard", "blackness", "blacksmith", "blame", "blank", "blanket", "blast", "blaze", "bleed", "bless", "blessing", "blew", "blind", "blindfold", "blinds", "block", "blood", "bloom", "blossom", "blot", "blow", "blue", "blueberry", "bluebird", "blush", "board", "boast", "boat", "bob", "bobwhite", "bodies", "body", "boil", "boiler", "bold", "bone", "bonnet", "boo", "book", "bookcase", "bookkeeper", "boom", "boot", "born", "borrow", "boss", "both", "bother", "bottle", "bottom", "bought", "bounce", "bow", "bowl", "bow-wow", "box", "boxcar", "boxer", "boxes", "boy", "boyhood", "bracelet", "brain", "brake", "bran", "branch", "brass", "brave", "bread", "break", "breakfast", "breast", "breath", "breathe", "breeze", "brick", "bride", "bridge", "bright", "brightness", "bring", "broad", "broadcast", "broke", "broken", "brook", "broom", "brother", "brought", "brown", "brush", "bubble", "bucket", "buckle", "bud", "buffalo", "bug", "buggy", "build", "building", "built", "bulb", "bull", "bullet", "bum", "bumblebee", "bump", "bun", "bunch", "bundle", "bunny", "burn", "burst", "bury", "bus", "bush", "bushel", "business", "busy", "but", "butcher", "butt", "butter", "buttercup", "butterfly", "buttermilk", "butterscotch", "button", "buttonhole", "buy", "buzz", "by", "bye", "cab", "cabbage", "cabin", "cabinet", "cackle", "cage", "cake", "calendar", "calf", "call", "caller", "calling", "came", "camel", "camp", "campfire", "can", "canal", "canary", "candle", "candlestick", "candy", "cane", "cannon", "cannot", "canoe", "can't", "canyon", "cap", "cape", "capital", "captain", "car", "card", "cardboard", "care", "careful", "careless", "carelessness", "carload", "carpenter", "carpet", "carriage", "carrot", "carry", "cart", "carve", "case", "cash", "cashier", "castle", "cat", "catbird", "catch", "catcher", "caterpillar", "catfish", "catsup", "cattle", "caught", "cause", "cave", "ceiling", "cell", "cellar", "cent", "center", "cereal", "certain", "certainly", "chain", "chair", "chalk", "champion", "chance", "change", "chap", "charge", "charm", "chart", "chase", "chatter", "cheap", "cheat", "check", "checkers", "cheek", "cheer", "cheese", "cherry", "chest", "chew", "chick", "chicken", "chief", "child", "childhood", "children", "chill", "chilly", "chimney", "chin", "china", "chip", "chipmunk", "chocolate", "choice", "choose", "chop", "chorus", "chose", "chosen", "christen", "christmas", "church", "churn", "cigarette", "circle", "circus", "citizen", "city", "clang", "clap", "class", "classmate", "classroom", "claw", "clay", "clean", "cleaner", "clear", "clerk", "clever", "click", "cliff", "climb", "clip", "cloak", "clock", "close", "closet", "cloth", "clothes", "clothing", "cloud", "cloudy", "clover", "clown", "club", "cluck", "clump", "coach", "coal", "coast", "coat", "cob", "cobbler", "cocoa", "coconut", "cocoon", "cod", "codfish", "coffee", "coffeepot", "coin", "cold", "collar", "college", "color", "colored", "colt", "column", "comb", "come", "comfort", "comic", "coming", "company", "compare", "conductor", "cone", "connect", "coo", "cook", "cooked", "cooking", "cookie", "cookies", "cool", "cooler", "coop", "copper", "copy", "cord", "cork", "corn", "corner", "correct", "cost", "cot", "cottage", "cotton", "couch", "cough", "could", "couldn't", "count", "counter", "country", "county", "course", "court", "cousin", "cover", "cow", "coward", "cowardly", "cowboy", "cozy", "crab", "crack", "cracker", "cradle", "cramps", "cranberry", "crank", "cranky", "crash", "crawl", "crazy", "cream", "creamy", "creek", "creep", "crept", "cried", "croak", "crook", "crooked", "crop", "cross", "crossing", "cross-eyed", "crow", "crowd", "crowded", "crown", "cruel", "crumb", "crumble", "crush", "crust", "cry", "cries", "cub", "cuff", "cup", "cuff", "cup", "cupboard", "cupful", "cure", "curl", "curly", "curtain", "curve", "cushion", "custard", "customer", "cut", "cute", "cutting", "dab", "dad", "daddy", "daily", "dairy", "daisy", "dam", "damage", "dame", "damp", "dance", "dancer", "dancing", "dandy", "danger", "dangerous", "dare", "dark", "darkness", "darling", "darn", "dart", "dash", "date", "daughter", "dawn", "day", "daybreak", "daytime", "dead", "deaf", "deal", "dear", "death", "december", "decide", "deck", "deed", "deep", "deer", "defeat", "defend", "defense", "delight", "den", "dentist", "depend", "deposit", "describe", "desert", "deserve", "desire", "desk", "destroy", "devil", "dew", "diamond", "did", "didn't", "die", "died", "dies", "difference", "different", "dig", "dim", "dime", "dine", "ding-dong", "dinner", "dip", "direct", "direction", "dirt", "dirty", "discover", "dish", "dislike", "dismiss", "ditch", "dive", "diver", "divide", "do", "dock", "doctor", "does", "doesn't", "dog", "doll", "dollar", "dolly", "done", "donkey", "don't", "door", "doorbell", "doorknob", "doorstep", "dope", "dot", "double", "dough", "dove", "down", "downstairs", "downtown", "dozen", "drag", "drain", "drank", "draw", "drawer", "draw", "drawing", "dream", "dress", "dresser", "dressmaker", "drew", "dried", "drift", "drill", "drink", "drip", "drive", "driven", "driver", "drop", "drove", "drown", "drowsy", "drub", "drum", "drunk", "dry", "duck", "due", "dug", "dull", "dumb", "dump", "during", "dust", "dusty", "duty", "dwarf", "dwell", "dwelt", "dying", "each", "eager", "eagle", "ear", "early", "earn", "earth", "east", "eastern", "easy", "eat", "eaten", "edge", "egg", "eh", "eight", "eighteen", "eighth", "eighty", "either", "elbow", "elder", "eldest", "electric", "electricity", "elephant", "eleven", "elf", "elm", "else", "elsewhere", "empty", "end", "ending", "enemy", "engine", "engineer", "english", "enjoy", "enough", "enter", "envelope", "equal", "erase", "eraser", "errand", "escape", "eve", "even", "evening", "ever", "every", "everybody", "everyday", "everyone", "everything", "everywhere", "evil", "exact", "except", "exchange", "excited", "exciting", "excuse", "exit", "expect", "explain", "extra", "eye", "eyebrow", "fable", "face", "facing", "fact", "factory", "fail", "faint", "fair", "fairy", "faith", "fake", "fall", "false", "family", "fan", "fancy", "far", "faraway", "fare", "farmer", "farm", "farming", "far-off", "farther", "fashion", "fast", "fasten", "fat", "father", "fault", "favor", "favorite", "fear", "feast", "feather", "february", "fed", "feed", "feel", "feet", "fell", "fellow", "felt", "fence", "fever", "few", "fib", "fiddle", "field", "fife", "fifteen", "fifth", "fifty", "fig", "fight", "figure", "file", "fill", "film", "finally", "find", "fine", "finger", "finish", "fire", "firearm", "firecracker", "fireplace", "fireworks", "firing", "first", "fish", "fisherman", "fist", "fit", "fits", "five", "fix", "flag", "flake", "flame", "flap", "flash", "flashlight", "flat", "flea", "flesh", "flew", "flies", "flight", "flip", "flip-flop", "float", "flock", "flood", "floor", "flop", "flour", "flow", "flower", "flowery", "flutter", "fly", "foam", "fog", "foggy", "fold", "folks", "follow", "following", "fond", "food", "fool", "foolish", "foot", "football", "footprint", "for", "forehead", "forest", "forget", "forgive", "forgot", "forgotten", "fork", "form", "fort", "forth", "fortune", "forty", "forward", "fought", "found", "fountain", "four", "fourteen", "fourth", "fox", "frame", "free", "freedom", "freeze", "freight", "french", "fresh", "fret", "friday", "fried", "friend", "friendly", "friendship", "frighten", "frog", "from", "front", "frost", "frown", "froze", "fruit", "fry", "fudge", "fuel", "full", "fully", "fun", "funny", "fur", "furniture", "further", "fuzzy", "gain", "gallon", "gallop", "game", "gang", "garage", "garbage", "garden", "gas", "gasoline", "gate", "gather", "gave", "gay", "gear", "geese", "general", "gentle", "gentleman", "gentlemen", "geography", "get", "getting", "giant", "gift", "gingerbread", "girl", "give", "given", "giving", "glad", "gladly", "glance", "glass", "glasses", "gleam", "glide", "glory", "glove", "glow", "glue", "go", "going", "goes", "goal", "goat", "gobble", "god", "god", "godmother", "gold", "golden", "goldfish", "golf", "gone", "good", "goods", "goodbye", "good-by", "goodbye", "good-bye", "good-looking", "goodness", "goody", "goose", "gooseberry", "got", "govern", "government", "gown", "grab", "gracious", "grade", "grain", "grand", "grandchild", "grandchildren", "granddaughter", "grandfather", "grandma", "grandmother", "grandpa", "grandson", "grandstand", "grape", "grapes", "grapefruit", "grass", "grasshopper", "grateful", "grave", "gravel", "graveyard", "gravy", "gray", "graze", "grease", "great", "green", "greet", "grew", "grind", "groan", "grocery", "ground", "group", "grove", "grow", "guard", "guess", "guest", "guide", "gulf", "gum", "gun", "gunpowder", "guy", "ha", "habit", "had", "hadn't", "hail", "hair", "haircut", "hairpin", "half", "hall", "halt", "ham", "hammer", "hand", "handful", "handkerchief", "handle", "handwriting", "hang", "happen", "happily", "happiness", "happy", "harbor", "hard", "hardly", "hardship", "hardware", "hare", "hark", "harm", "harness", "harp", "harvest", "has", "hasn't", "haste", "hasten", "hasty", "hat", "hatch", "hatchet", "hate", "haul", "have", "haven't", "having", "hawk", "hay", "hayfield", "haystack", "he", "head", "headache", "heal", "health", "healthy", "heap", "hear", "hearing", "heard", "heart", "heat", "heater", "heaven", "heavy", "he'd", "heel", "height", "held", "hell", "he'll", "hello", "helmet", "help", "helper", "helpful", "hem", "hen", "henhouse", "her", "hers", "herd", "here", "here's", "hero", "herself", "he's", "hey", "hickory", "hid", "hidden", "hide", "high", "highway", "hill", "hillside", "hilltop", "hilly", "him", "himself", "hind", "hint", "hip", "hire", "his", "hiss", "history", "hit", "hitch", "hive", "ho", "hoe", "hog", "hold", "holder", "hole", "holiday", "hollow", "holy", "home", "homely", "homesick", "honest", "honey", "honeybee", "honeymoon", "honk", "honor", "hood", "hoof", "hook", "hoop", "hop", "hope", "hopeful", "hopeless", "horn", "horse", "horseback", "horseshoe", "hose", "hospital", "host", "hot", "hotel", "hound", "hour", "house", "housetop", "housewife", "housework", "how", "however", "howl", "hug", "huge", "hum", "humble", "hump", "hundred", "hung", "hunger", "hungry", "hunk", "hunt", "hunter", "hurrah", "hurried", "hurry", "hurt", "husband", "hush", "hut", "hymn", "i", "ice", "icy", "i'd", "idea", "ideal", "if", "ill", "i'll", "i'm", "important", "impossible", "improve", "in", "inch", "inches", "income", "indeed", "indian", "indoors", "ink", "inn", "insect", "inside", "instant", "instead", "insult", "intend", "interested", "interesting", "into", "invite", "iron", "is", "island", "isn't", "it", "its", "it's", "itself", "i've", "ivory", "ivy", "jacket", "jacks", "jail", "jam", "january", "jar", "jaw", "jay", "jelly", "jellyfish", "jerk", "jig", "job", "jockey", "join", "joke", "joking", "jolly", "journey", "joy", "joyful", "joyous", "judge", "jug", "juice", "juicy", "july", "jump", "june", "junior", "junk", "just", "keen", "keep", "kept", "kettle", "key", "kick", "kid", "kill", "killed", "kind", "kindly", "kindness", "king", "kingdom", "kiss", "kitchen", "kite", "kitten", "kitty", "knee", "kneel", "knew", "knife", "knit", "knives", "knob", "knock", "knot", "know", "known", "lace", "lad", "ladder", "ladies", "lady", "laid", "lake", "lamb", "lame", "lamp", "land", "lane", "language", "lantern", "lap", "lard", "large", "lash", "lass", "last", "late", "laugh", "laundry", "law", "lawn", "lawyer", "lay", "lazy", "lead", "leader", "leaf", "leak", "lean", "leap", "learn", "learned", "least", "leather", "leave", "leaving", "led", "left", "leg", "lemon", "lemonade", "lend", "length", "less", "lesson", "let", "let's", "letter", "letting", "lettuce", "level", "liberty", "library", "lice", "lick", "lid", "lie", "life", "lift", "light", "lightness", "lightning", "like", "likely", "liking", "lily", "limb", "lime", "limp", "line", "linen", "lion", "lip", "list", "listen", "lit", "little", "live", "lives", "lively", "liver", "living", "lizard", "load", "loaf", "loan", "loaves", "lock", "locomotive", "log", "lone", "lonely", "lonesome", "long", "look", "lookout", "loop", "loose", "lord", "lose", "loser", "loss", "lost", "lot", "loud", "love", "lovely", "lover", "low", "luck", "lucky", "lumber", "lump", "lunch", "lying", "machine", "machinery", "mad", "made", "magazine", "magic", "maid", "mail", "mailbox", "mailman", "major", "make", "making", "male", "mama", "mamma", "man", "manager", "mane", "manger", "many", "map", "maple", "marble", "march", "march", "mare", "mark", "market", "marriage", "married", "marry", "mask", "mast", "master", "mat", "match", "matter", "mattress", "may", "may", "maybe", "mayor", "maypole", "me", "meadow", "meal", "mean", "means", "meant", "measure", "meat", "medicine", "meet", "meeting", "melt", "member", "men", "mend", "meow", "merry", "mess", "message", "met", "metal", "mew", "mice", "middle", "midnight", "might", "mighty", "mile", "milk", "milkman", "mill", "miler", "million", "mind", "mine", "miner", "mint", "minute", "mirror", "mischief", "miss", "miss", "misspell", "mistake", "misty", "mitt", "mitten", "mix", "moment", "monday", "money", "monkey", "month", "moo", "moon", "moonlight", "moose", "mop", "more", "morning", "morrow", "moss", "most", "mostly", "mother", "motor", "mount", "mountain", "mouse", "mouth", "move", "movie", "movies", "moving", "mow", "mr.", "mrs.", "much", "mud", "muddy", "mug", "mule", "multiply", "murder", "music", "must", "my", "myself", "nail", "name", "nap", "napkin", "narrow", "nasty", "naughty", "navy", "near", "nearby", "nearly", "neat", "neck", "necktie", "need", "needle", "needn't", "negro", "neighbor", "neighborhood", "neither", "nerve", "nest", "net", "never", "nevermore", "new", "news", "newspaper", "next", "nibble", "nice", "nickel", "night", "nightgown", "nine", "nineteen", "ninety", "no", "nobody", "nod", "noise", "noisy", "none", "noon", "nor", "north", "northern", "nose", "not", "note", "nothing", "notice", "november", "now", "nowhere", "number", "nurse", "nut", "oak", "oar", "oatmeal", "oats", "obey", "ocean", "o'clock", "october", "odd", "of", "off", "offer", "office", "officer", "often", "oh", "oil", "old", "old-fashioned", "on", "once", "one", "onion", "only", "onward", "open", "or", "orange", "orchard", "order", "ore", "organ", "other", "otherwise", "ouch", "ought", "our", "ours", "ourselves", "out", "outdoors", "outfit", "outlaw", "outline", "outside", "outward", "oven", "over", "overalls", "overcoat", "overeat", "overhead", "overhear", "overnight", "overturn", "owe", "owing", "owl", "own", "owner", "ox", "pa", "pace", "pack", "package", "pad", "page", "paid", "pail", "pain", "painful", "paint", "painter", "painting", "pair", "pal", "palace", "pale", "pan", "pancake", "pane", "pansy", "pants", "papa", "paper", "parade", "pardon", "parent", "park", "part", "partly", "partner", "party", "pass", "passenger", "past", "paste", "pasture", "pat", "patch", "path", "patter", "pave", "pavement", "paw", "pay", "payment", "pea", "peas", "peace", "peaceful", "peach", "peaches", "peak", "peanut", "pear", "pearl", "peck", "peek", "peel", "peep", "peg", "pen", "pencil", "penny", "people", "pepper", "peppermint", "perfume", "perhaps", "person", "pet", "phone", "piano", "pick", "pickle", "picnic", "picture", "pie", "piece", "pig", "pigeon", "piggy", "pile", "pill", "pillow", "pin", "pine", "pineapple", "pink", "pint", "pipe", "pistol", "pit", "pitch", "pitcher", "pity", "place", "plain", "plan", "plane", "plant", "plate", "platform", "platter", "play", "player", "playground", "playhouse", "playmate", "plaything", "pleasant", "please", "pleasure", "plenty", "plow", "plug", "plum", "pocket", "pocketbook", "poem", "point", "poison", "poke", "pole", "police", "policeman", "polish", "polite", "pond", "ponies", "pony", "pool", "poor", "pop", "popcorn", "popped", "porch", "pork", "possible", "post", "postage", "postman", "pot", "potato", "potatoes", "pound", "pour", "powder", "power", "powerful", "praise", "pray", "prayer", "prepare", "present", "pretty", "price", "prick", "prince", "princess", "print", "prison", "prize", "promise", "proper", "protect", "proud", "prove", "prune", "public", "puddle", "puff", "pull", "pump", "pumpkin", "punch", "punish", "pup", "pupil", "puppy", "pure", "purple", "purse", "push", "puss", "pussy", "pussycat", "put", "putting", "puzzle", "quack", "quart", "quarter", "queen", "queer", "question", "quick", "quickly", "quiet", "quilt", "quit", "quite", "rabbit", "race", "rack", "radio", "radish", "rag", "rail", "railroad", "railway", "rain", "rainy", "rainbow", "raise", "raisin", "rake", "ram", "ran", "ranch", "rang", "rap", "rapidly", "rat", "rate", "rather", "rattle", "raw", "ray", "reach", "read", "reader", "reading", "ready", "real", "really", "reap", "rear", "reason", "rebuild", "receive", "recess", "record", "red", "redbird", "redbreast", "refuse", "reindeer", "rejoice", "remain", "remember", "remind", "remove", "rent", "repair", "repay", "repeat", "report", "rest", "return", "review", "reward", "rib", "ribbon", "rice", "rich", "rid", "riddle", "ride", "rider", "riding", "right", "rim", "ring", "rip", "ripe", "rise", "rising", "river", "road", "roadside", "roar", "roast", "rob", "robber", "robe", "robin", "rock", "rocky", "rocket", "rode", "roll", "roller", "roof", "room", "rooster", "root", "rope", "rose", "rosebud", "rot", "rotten", "rough", "round", "route", "row", "rowboat", "royal", "rub", "rubbed", "rubber", "rubbish", "rug", "rule", "ruler", "rumble", "run", "rung", "runner", "running", "rush", "rust", "rusty", "rye", "sack", "sad", "saddle", "sadness", "safe", "safety", "said", "sail", "sailboat", "sailor", "saint", "salad", "sale", "salt", "same", "sand", "sandy", "sandwich", "sang", "sank", "sap", "sash", "sat", "satin", "satisfactory", "saturday", "sausage", "savage", "save", "savings", "saw", "say", "scab", "scales", "scare", "scarf", "school", "schoolboy", "schoolhouse", "schoolmaster", "schoolroom", "scorch", "score", "scrap", "scrape", "scratch", "scream", "screen", "screw", "scrub", "sea", "seal", "seam", "search", "season", "seat", "second", "secret", "see", "seeing", "seed", "seek", "seem", "seen", "seesaw", "select", "self", "selfish", "sell", "send", "sense", "sent", "sentence", "separate", "september", "servant", "serve", "service", "set", "setting", "settle", "settlement", "seven", "seventeen", "seventh", "seventy", "several", "sew", "shade", "shadow", "shady", "shake", "shaker", "shaking", "shall", "shame", "shan't", "shape", "share", "sharp", "shave", "she", "she'd", "she'll", "she's", "shear", "shears", "shed", "sheep", "sheet", "shelf", "shell", "shepherd", "shine", "shining", "shiny", "ship", "shirt", "shock", "shoe", "shoemaker", "shone", "shook", "shoot", "shop", "shopping", "shore", "short", "shot", "should", "shoulder", "shouldn't", "shout", "shovel", "show", "shower", "shut", "shy", "sick", "sickness", "side", "sidewalk", "sideways", "sigh", "sight", "sign", "silence", "silent", "silk", "sill", "silly", "silver", "simple", "sin", "since", "sing", "singer", "single", "sink", "sip", "sir", "sis", "sissy", "sister", "sit", "sitting", "six", "sixteen", "sixth", "sixty", "size", "skate", "skater", "ski", "skin", "skip", "skirt", "sky", "slam", "slap", "slate", "slave", "sled", "sleep", "sleepy", "sleeve", "sleigh", "slept", "slice", "slid", "slide", "sling", "slip", "slipped", "slipper", "slippery", "slit", "slow", "slowly", "sly", "smack", "small", "smart", "smell", "smile", "smoke", "smooth", "snail", "snake", "snap", "snapping", "sneeze", "snow", "snowy", "snowball", "snowflake", "snuff", "snug", "so", "soak", "soap", "sob", "socks", "sod", "soda", "sofa", "soft", "soil", "sold", "soldier", "sole", "some", "somebody", "somehow", "someone", "something", "sometime", "sometimes", "somewhere", "son", "song", "soon", "sore", "sorrow", "sorry", "sort", "soul", "sound", "soup", "sour", "south", "southern", "space", "spade", "spank", "sparrow", "speak", "speaker", "spear", "speech", "speed", "spell", "spelling", "spend", "spent", "spider", "spike", "spill", "spin", "spinach", "spirit", "spit", "splash", "spoil", "spoke", "spook", "spoon", "sport", "spot", "spread", "spring", "springtime", "sprinkle", "square", "squash", "squeak", "squeeze", "squirrel", "stable", "stack", "stage", "stair", "stall", "stamp", "stand", "star", "stare", "start", "starve", "state", "station", "stay", "steak", "steal", "steam", "steamboat", "steamer", "steel", "steep", "steeple", "steer", "stem", "step", "stepping", "stick", "sticky", "stiff", "still", "stillness", "sting", "stir", "stitch", "stock", "stocking", "stole", "stone", "stood", "stool", "stoop", "stop", "stopped", "stopping", "store", "stork", "stories", "storm", "stormy", "story", "stove", "straight", "strange", "stranger", "strap", "straw", "strawberry", "stream", "street", "stretch", "string", "strip", "stripes", "strong", "stuck", "study", "stuff", "stump", "stung", "subject", "such", "suck", "sudden", "suffer", "sugar", "suit", "sum", "summer", "sun", "sunday", "sunflower", "sung", "sunk", "sunlight", "sunny", "sunrise", "sunset", "sunshine", "supper", "suppose", "sure", "surely", "surface", "surprise", "swallow", "swam", "swamp", "swan", "swat", "swear", "sweat", "sweater", "sweep", "sweet", "sweetness", "sweetheart", "swell", "swept", "swift", "swim", "swimming", "swing", "switch", "sword", "swore", "table", "tablecloth", "tablespoon", "tablet", "tack", "tag", "tail", "tailor", "take", "taken", "taking", "tale", "talk", "talker", "tall", "tame", "tan", "tank", "tap", "tape", "tar", "tardy", "task", "taste", "taught", "tax", "tea", "teach", "teacher", "team", "tear", "tease", "teaspoon", "teeth", "telephone", "tell", "temper", "ten", "tennis", "tent", "term", "terrible", "test", "than", "thank", "thanks", "thankful", "thanksgiving", "that", "that's", "the", "theater", "thee", "their", "them", "then", "there", "these", "they", "they'd", "they'll", "they're", "they've", "thick", "thief", "thimble", "thin", "thing", "think", "third", "thirsty", "thirteen", "thirty", "this", "thorn", "those", "though", "thought", "thousand", "thread", "three", "threw", "throat", "throne", "through", "throw", "thrown", "thumb", "thunder", "thursday", "thy", "tick", "ticket", "tickle", "tie", "tiger", "tight", "till", "time", "tin", "tinkle", "tiny", "tip", "tiptoe", "tire", "tired", "title", "to", "toad", "toadstool", "toast", "tobacco", "today", "toe", "together", "toilet", "told", "tomato", "tomorrow", "ton", "tone", "tongue", "tonight", "too", "took", "tool", "toot", "tooth", "toothbrush", "toothpick", "top", "tore", "torn", "toss", "touch", "tow", "toward", "towards", "towel", "tower", "town", "toy", "trace", "track", "trade", "train", "tramp", "trap", "tray", "treasure", "treat", "tree", "trick", "tricycle", "tried", "trim", "trip", "trolley", "trouble", "truck", "true", "truly", "trunk", "trust", "truth", "try", "tub", "tuesday", "tug", "tulip", "tumble", "tune", "tunnel", "turkey", "turn", "turtle", "twelve", "twenty", "twice", "twig", "twin", "two", "ugly", "umbrella", "uncle", "under", "understand", "underwear", "undress", "unfair", "unfinished", "unfold", "unfriendly", "unhappy", "unhurt", "uniform", "united", "states", "unkind", "unknown", "unless", "unpleasant", "until", "unwilling", "up", "upon", "upper", "upset", "upside", "upstairs", "uptown", "upward", "us", "use", "used", "useful", "valentine", "valley", "valuable", "value", "vase", "vegetable", "velvet", "very", "vessel", "victory", "view", "village", "vine", "violet", "visit", "visitor", "voice", "vote", "wag", "wagon", "waist", "wait", "wake", "waken", "walk", "wall", "walnut", "want", "war", "warm", "warn", "was", "wash", "washer", "washtub", "wasn't", "waste", "watch", "watchman", "water", "watermelon", "waterproof", "wave", "wax", "way", "wayside", "we", "weak", "weakness", "weaken", "wealth", "weapon", "wear", "weary", "weather", "weave", "web", "we'd", "wedding", "wednesday", "wee", "weed", "week", "we'll", "weep", "weigh", "welcome", "well", "went", "were", "we're", "west", "western", "wet", "we've", "whale", "what", "what's", "wheat", "wheel", "when", "whenever", "where", "which", "while", "whip", "whipped", "whirl", "whisky", "whiskey", "whisper", "whistle", "white", "who", "who'd", "whole", "who'll", "whom", "who's", "whose", "why", "wicked", "wide", "wife", "wiggle", "wild", "wildcat", "will", "willing", "willow", "win", "wind", "windy", "windmill", "window", "wine", "wing", "wink", "winner", "winter", "wipe", "wire", "wise", "wish", "wit", "witch", "with", "without", "woke", "wolf", "woman", "women", "won", "wonder", "wonderful", "won't", "wood", "wooden", "woodpecker", "woods", "wool", "woolen", "word", "wore", "work", "worker", "workman", "world", "worm", "worn", "worry", "worse", "worst", "worth", "would", "wouldn't", "wound", "wove", "wrap", "wrapped", "wreck", "wren", "wring", "write", "writing", "written", "wrong", "wrote", "wrung", "yard", "yarn", "year", "yell", "yellow", "yes", "yesterday", "yet", "yolk", "yonder", "you", "you'd", "you'll", "young", "youngster", "your", "yours", "you're", "yourself", "yourselves", "youth", "you've"];
var easy_words_default = easyWords;

// node_modules/text-readability/main.js
var punctuationRE = /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,\-./:;<=>?@[\]^_`{|}~]/g;
var easyWordSet = new Set(easy_words_default);
Math.copySign = (x, y) => {
  if (y === 0) return 0;
  return x * (y / Math.abs(y));
};
Math.legacyRound = (number, points = 0) => {
  const p = 10 ** points;
  return Math.floor(number * p + Math.copySign(0.5, number)) / p;
};
var Readability = class _Readability {
  static getGradeSuffix(grade) {
    grade = Math.floor(grade);
    const gradeMap = {
      1: "st",
      2: "nd",
      3: "rd"
    };
    return gradeMap[grade] ? gradeMap[grade] : "th";
  }
  charCount(text, ignoreSpaces = true) {
    if (ignoreSpaces) text = text.replace(/ /g, "");
    return text.length;
  }
  letterCount(text, ignoreSpaces = true) {
    if (ignoreSpaces) text = text.replace(/ /g, "");
    return this.removePunctuation(text).length;
  }
  removePunctuation(text) {
    text = text.replace(punctuationRE, "");
    return text;
  }
  static split(text) {
    text = text.split(/,| |\n|\r/g);
    text = text.filter((n) => n);
    return text;
  }
  lexiconCount(text, removePunctuation = true) {
    if (removePunctuation) text = this.removePunctuation(text);
    text = text.split(/,| |\n|\r/g);
    text = text.filter((n) => n);
    return text.length;
  }
  syllableCount(text, lang = "en-US") {
    text = text.toLocaleLowerCase(lang);
    text = this.removePunctuation(text);
    if (!text) return 0;
    const count = syllable(text);
    return count;
  }
  sentenceCount(text) {
    let ignoreCount = 0;
    let sentences = text.split(/ *[.?!]['")\]]*[ |\n](?=[A-Z])/g);
    for (let sentence of sentences) {
      if (this.lexiconCount(sentence) <= 2) ignoreCount += 1;
    }
    const validSentences = sentences.length - ignoreCount;
    return validSentences > 1 ? validSentences : 1;
  }
  averageSentenceLength(text) {
    const asl = this.lexiconCount(text) / this.sentenceCount(text);
    const returnVal = Math.legacyRound(asl, 1);
    return !isNaN(returnVal) ? returnVal : 0;
  }
  averageSyllablePerWord(text) {
    const syllables = this.syllableCount(text);
    const words = this.lexiconCount(text);
    const syllablePerWord = syllables / words;
    const returnVal = Math.legacyRound(syllablePerWord, 1);
    return !isNaN(returnVal) ? returnVal : 0;
  }
  averageCharacterPerWord(text) {
    const charactersPerWord = this.charCount(text) / this.lexiconCount(text);
    const returnVal = Math.legacyRound(charactersPerWord, 2);
    return !isNaN(returnVal) ? returnVal : 0;
  }
  averageLetterPerWord(text) {
    const lettersPerWord = this.letterCount(text) / this.lexiconCount(text);
    const returnVal = Math.legacyRound(lettersPerWord, 2);
    return !isNaN(returnVal) ? returnVal : 0;
  }
  averageSentencePerWord(text) {
    const sentencesPerWord = this.sentenceCount(text) / this.lexiconCount(text);
    const returnVal = Math.legacyRound(sentencesPerWord, 2);
    return !isNaN(returnVal) ? returnVal : 0;
  }
  fleschReadingEase(text) {
    const sentenceLength = this.averageSentenceLength(text);
    const syllablesPerWord = this.averageSyllablePerWord(text);
    const flesch = 206.835 - 1.015 * sentenceLength - 84.6 * syllablesPerWord;
    const returnVal = Math.legacyRound(flesch, 2);
    return returnVal;
  }
  fleschReadingEaseToGrade(score) {
    if (score >= 90) return 5;
    else if (score < 90 && score >= 80) return 6;
    else if (score < 80 && score >= 70) return 7;
    else if (score < 70 && score >= 60) return 8.5;
    else if (score < 60 && score >= 50) return 11;
    else if (score < 50 && score >= 40) return 13;
    else if (score < 40 && score >= 30) return 15;
    else return 16;
  }
  fleschKincaidGrade(text) {
    const sentenceLength = this.averageSentenceLength(text);
    const syllablePerWord = this.averageSyllablePerWord(text);
    const flesch = 0.39 * sentenceLength + 11.8 * syllablePerWord - 15.59;
    const returnVal = Math.legacyRound(flesch, 1);
    return returnVal;
  }
  polySyllableCount(text) {
    let count = 0;
    let wrds;
    for (let word of _Readability.split(text)) {
      wrds = this.syllableCount(word);
      if (wrds >= 3) count += 1;
    }
    return count;
  }
  smogIndex(text) {
    const sentences = this.sentenceCount(text);
    if (sentences >= 3) {
      const polySyllab = this.polySyllableCount(text);
      const smog = 1.043 * (30 * (polySyllab / sentences)) ** 0.5 + 3.1291;
      const returnVal = Math.legacyRound(smog, 1);
      return !isNaN(returnVal) ? returnVal : 0;
    }
    return 0;
  }
  colemanLiauIndex(text) {
    const letters = Math.legacyRound(this.averageLetterPerWord(text) * 100, 2);
    const sentences = Math.legacyRound(this.averageSentencePerWord(text) * 100, 2);
    const coleman = 0.058 * letters - 0.296 * sentences - 15.8;
    return Math.legacyRound(coleman, 2);
  }
  automatedReadabilityIndex(text) {
    const characters = this.charCount(text);
    const words = this.lexiconCount(text);
    const sentences = this.sentenceCount(text);
    const averageCharacterPerWord = characters / words;
    const averageWordPerSentence = words / sentences;
    const readability2 = 4.71 * Math.legacyRound(averageCharacterPerWord, 2) + 0.5 * Math.legacyRound(averageWordPerSentence, 2) - 21.43;
    const returnVal = Math.legacyRound(readability2, 1);
    return !isNaN(returnVal) ? returnVal : 0;
  }
  linsearWriteFormula(text) {
    let easyWord = 0;
    let difficultWord = 0;
    let textList = _Readability.split(text).slice(0, 100);
    for (let word of textList) {
      if (this.syllableCount(word) < 3) {
        easyWord += 1;
      } else {
        difficultWord += 1;
      }
    }
    text = textList.join(" ");
    let number = (easyWord * 1 + difficultWord * 3) / this.sentenceCount(text);
    let returnVal = number <= 20 ? (number - 2) / 2 : number / 2;
    return Math.legacyRound(returnVal, 1);
  }
  presentTense(word) {
    if (word.length < 6) return word;
    if (word.endsWith("ed")) {
      if (easyWordSet.has(word.slice(0, -1))) return word.slice(0, -1);
      else return word.slice(0, -2);
    }
    if (word.endsWith("ing")) {
      const suffixIngToE = word.slice(0, -3) + "e";
      if (easyWordSet.has(suffixIngToE)) return suffixIngToE;
      else return word.slice(0, -3);
    }
    return word;
  }
  difficultWords(text, syllableThreshold) {
    return [...this.difficultWordsSet(text, syllableThreshold)].length;
  }
  difficultWordsSet(text, syllableThreshold = 2) {
    const textList = text.match(/[\w=‘’]+/g);
    const diffWordsSet = /* @__PURE__ */ new Set();
    if (textList === null) return diffWordsSet;
    for (let word of textList) {
      const normalized = this.presentTense((0, import_pluralize2.default)(word.toLocaleLowerCase(), 1));
      if (!easyWordSet.has(normalized) && this.syllableCount(word) >= syllableThreshold) {
        diffWordsSet.add(word);
      }
    }
    return diffWordsSet;
  }
  daleChallReadabilityScore(text) {
    const wordCount = this.lexiconCount(text);
    const count = wordCount - this.difficultWords(text);
    const per = count / wordCount * 100;
    if (isNaN(per)) return 0;
    const difficultWords = 100 - per;
    let score = 0.1579 * difficultWords + 0.0496 * this.averageSentenceLength(text);
    if (difficultWords > 5) score += 3.6365;
    return Math.legacyRound(score, 2);
  }
  daleChallToGrade(score) {
    if (score <= 4.9) return 4;
    if (score < 5.9) return 5;
    if (score < 6.9) return 7;
    if (score < 7.9) return 9;
    if (score < 8.9) return 11;
    if (score < 9.9) return 13;
    else return 16;
  }
  gunningFog(text) {
    const perDiffWords = this.difficultWords(text, 3) / this.lexiconCount(text) * 100;
    if (isNaN(perDiffWords)) return 0;
    const grade = 0.4 * (this.averageSentenceLength(text) + perDiffWords);
    return Math.legacyRound(grade, 2);
  }
  lix(text) {
    const words = _Readability.split(text);
    const wordsLen = words.length;
    const longWords = words.filter((wrd) => wrd.length > 6).length;
    const perLongWords = longWords * 100 / wordsLen;
    const asl = this.averageSentenceLength(text);
    const lix = asl + perLongWords;
    return Math.legacyRound(lix, 2);
  }
  rix(text) {
    const words = _Readability.split(text);
    const longWordsCount = words.filter((wrd) => wrd.length > 6).length;
    const sentencesCount = this.sentenceCount(text);
    const rix = longWordsCount / sentencesCount;
    return !isNaN(rix) ? Math.legacyRound(rix, 2) : 0;
  }
  textStandard(text, floatOutput = null) {
    const grade = [];
    let lower = Math.legacyRound(this.fleschKincaidGrade(text));
    let upper = Math.ceil(this.fleschKincaidGrade(text));
    grade.push(Math.floor(lower));
    grade.push(Math.floor(upper));
    let score = this.fleschReadingEase(text);
    let freGrade = this.fleschReadingEaseToGrade(score);
    grade.push(freGrade);
    lower = Math.legacyRound(this.smogIndex(text));
    upper = Math.ceil(this.smogIndex(text));
    grade.push(Math.floor(lower));
    grade.push(Math.floor(upper));
    lower = Math.legacyRound(this.colemanLiauIndex(text));
    upper = Math.ceil(this.colemanLiauIndex(text));
    grade.push(Math.floor(lower));
    grade.push(Math.floor(upper));
    lower = Math.legacyRound(this.automatedReadabilityIndex(text));
    upper = Math.ceil(this.automatedReadabilityIndex(text));
    grade.push(Math.floor(lower));
    grade.push(Math.floor(upper));
    lower = Math.legacyRound(this.daleChallToGrade(this.daleChallReadabilityScore(text)));
    upper = Math.ceil(this.daleChallToGrade(this.daleChallReadabilityScore(text)));
    grade.push(Math.floor(lower));
    grade.push(Math.floor(upper));
    lower = Math.legacyRound(this.linsearWriteFormula(text));
    upper = Math.ceil(this.linsearWriteFormula(text));
    grade.push(Math.floor(lower));
    grade.push(Math.floor(upper));
    lower = Math.legacyRound(this.gunningFog(text));
    upper = Math.ceil(this.gunningFog(text));
    grade.push(Math.floor(lower));
    grade.push(Math.floor(upper));
    const counterMap = [...new Set(grade)].map((x) => [x, grade.filter((y) => y === x).length]);
    const finalGrade = counterMap.reduce((x, y) => y[1] >= x[1] ? y : x);
    score = finalGrade[0];
    if (floatOutput) return score;
    const lowerScore = Math.floor(score) - 1;
    const upperScore = lowerScore + 1;
    return `${lowerScore}${_Readability.getGradeSuffix(lowerScore)} and ${upperScore}${_Readability.getGradeSuffix(upperScore)} grade`;
  }
  textMedian(text) {
    const grade = [];
    grade.push(this.fleschKincaidGrade(text));
    const score = this.fleschReadingEase(text);
    const freGrade = this.fleschReadingEaseToGrade(score);
    grade.push(freGrade);
    grade.push(this.smogIndex(text));
    grade.push(this.colemanLiauIndex(text));
    grade.push(this.automatedReadabilityIndex(text));
    grade.push(this.daleChallToGrade(this.daleChallReadabilityScore(text)));
    grade.push(this.linsearWriteFormula(text));
    grade.push(this.gunningFog(text));
    grade.sort(function(a, b) {
      return a - b;
    });
    let half = Math.floor(grade.length / 2);
    if (half & 1) return (grade[half - 1] + grade[half]) / 2;
    else return grade[half];
  }
};
var readability = new Readability();
var main_default = readability;

// src/app/services/fetch.service.ts
var FetchService = class _FetchService {
  translate = inject(TranslateService);
  //Block unknown hosts
  prodHost = "www.canada.ca";
  protoHosts = /* @__PURE__ */ new Set([
    `${environment.defaultOrg}.github.io`,
    "proto-cra.github.io",
    //"cra-design.github.io", //Currently blocked by browser because it looks like a phishing site
    //"cra-proto.github.io", //Is currently cra-test-arc.canada.ca
    "cra-test-arc.canada.ca",
    "test.canada.ca",
    //"gc-proto.github.io", //CORS error but redirects to test.canada.ca which works
    "aleblanc3.github.io",
    "canada-preview.adobecqms.net",
    "cra-ut.isvcs.net"
  ]);
  getAllowedHosts(mode) {
    const allowed = /* @__PURE__ */ new Set();
    if (mode === "prod" || mode === "both")
      allowed.add(this.prodHost);
    if (mode === "proto" || mode === "both")
      this.protoHosts.forEach((host) => allowed.add(host));
    return allowed;
  }
  //Validates URL and checks if it's in the specified allowed host list
  validateHost(url, hostMode) {
    url = url.trim();
    let hostname;
    try {
      const parsedUrl = new URL(url);
      if (/\s/.test(url))
        throw new Error();
      hostname = parsedUrl.hostname.toLowerCase();
      const isUT = hostname === "cra-ut.isvcs.net";
      if (parsedUrl.protocol !== "https:" && !isUT)
        throw new Error();
    } catch {
      throw new Error(`Invalid URL: ${url}`);
    }
    if (hostMode !== "none") {
      const allowedHosts = this.getAllowedHosts(hostMode);
      if (!allowedHosts.has(hostname)) {
        throw new Error(`Blocked host: ${hostname} blocked for url ${url}`);
      }
    }
    return url;
  }
  //Uses specified fetch method and retries if initial fetch fails (can happen due to intermittent server issues etc.)
  fetchWithRetry(url, mode = "HEAD", retries = 3, delay = "none", suppressErrors = false) {
    return __async(this, null, function* () {
      for (let attempt = 1; attempt <= retries; attempt++) {
        yield this.simulateDelay(delay);
        try {
          const response = mode === "HEAD" ? yield fetch(url, { method: "HEAD" }) : yield fetch(url);
          if (response.ok)
            return response;
          else {
            if (!suppressErrors) {
              console.warn(`Fetch attempt #${attempt}. Status: ${response.status}. Method: ${mode}`);
            }
            if (attempt < retries) {
              const backoffDelay = Math.pow(2, attempt - 1) * 300;
              yield this.delay(backoffDelay);
              continue;
            }
            if (suppressErrors)
              return this.suppressError(url);
            throw new Error(`Fetch failed ${attempt} times. Method: ${mode}. Status: ${response.status} for ${url}`);
          }
        } catch (error) {
          if (attempt < retries) {
            const backoffDelay = Math.pow(2, attempt - 1) * 300;
            yield this.delay(backoffDelay);
            continue;
          }
          if (suppressErrors === true)
            return this.suppressError(url);
          else if (attempt === retries)
            throw new Error(error.message);
        }
      }
      if (suppressErrors === true)
        return this.suppressError(url);
      else
        throw new Error(`Unexpected error for ${url}`);
    });
  }
  fetchContent(url, hostMode = "both", retries = 3, delay = "none", suppressErrors = false) {
    return __async(this, null, function* () {
      url = this.validateHost(url, hostMode);
      const response = yield this.fetchWithRetry(url, "GET", retries, delay, suppressErrors);
      const html = yield response.text();
      return new DOMParser().parseFromString(html, "text/html");
    });
  }
  fetchContentAndStatus(url, hostMode = "both", retries = 3, delay = "none", suppressErrors = false) {
    return __async(this, null, function* () {
      url = this.validateHost(url, hostMode);
      const response = yield this.fetchWithRetry(url, "GET", retries, delay, suppressErrors);
      const html = yield response.text();
      const doc = new DOMParser().parseFromString(html, "text/html");
      const finalUrl = response.url || url;
      return { doc, finalUrl };
    });
  }
  fetchStatus(url, hostMode = "both", retries = 3, delay = "none", delayBetweenRequests = 100) {
    return __async(this, null, function* () {
      url = this.validateHost(url, hostMode);
      if (delayBetweenRequests > 0) {
        yield this.delay(delayBetweenRequests);
      }
      return this.fetchWithRetry(url, "HEAD", retries, delay, true);
    });
  }
  fetchJSON(url, fields) {
    return __async(this, null, function* () {
      const date = (/* @__PURE__ */ new Date()).toDateString;
      const jsonUrl = url.replace(".html", `/jcr:content.json?nocache=${date}`);
      const result = {};
      try {
        const response = yield this.fetchWithRetry(jsonUrl, "GET", 3, "none", true);
        const json = yield response.json();
        for (const field of fields) {
          result[field] = json[field] ?? void 0;
        }
      } catch (error) {
        console.error(`Error fetching content.json for ${url}:`, error);
      }
      return result;
    });
  }
  fetchPageJSON(url) {
    return __async(this, null, function* () {
      const fields = ["gcContributor", "gcBranch", "gcLastPublished", "gcModifiedIsOverridden", "gcModifiedOverride", "cq:lastModified", "cq:template"];
      const data = yield this.fetchJSON(url, fields);
      return {
        owner: data["gcContributor"] ?? void 0,
        email: data["gcBranch"] ?? void 0,
        lastPublished: data["gcLastPublished"] ? data["gcLastPublished"] : void 0,
        lastModified: data["gcModifiedIsOverridden"] === "true" && data["gcModifiedOverride"] ? data["gcModifiedOverride"] : data["cq:lastModified"] ? data["cq:lastModified"] : void 0,
        isFreestyle: data["cq:template"]?.includes("freestyle") ?? false
      };
    });
  }
  //only delays on development build
  simulateDelay(delay = "none") {
    return __async(this, null, function* () {
      if (environment.production || delay === "none")
        return;
      if (delay === "random") {
        yield new Promise((resolve) => setTimeout(resolve, 100 + Math.random() * 1500));
      } else if (typeof delay === "number" && delay > 0) {
        yield new Promise((resolve) => setTimeout(resolve, delay));
      }
    });
  }
  //adds delay on both dev and prod (useful for adding short delays before retrying a failed fetch, only use this if the delay is required on prod)
  delay(delay) {
    return __async(this, null, function* () {
      yield new Promise((resolve) => setTimeout(resolve, delay));
    });
  }
  //fake Response for suppressing CORS errors (should only be used when fetching external content, hostMode = "none:")
  suppressError(url, status = 500, statusText = "Suppressed fetch error") {
    return new Response(null, {
      status,
      statusText,
      headers: { "X-Suppressed-Error": "true", "X-Source-Url": url }
    });
  }
  // Extracts metadata from an HTML document
  extractPageMetadata(doc, url) {
    return __async(this, null, function* () {
      const htmlLang = doc.documentElement.getAttribute("lang");
      const metaLang = doc.querySelector('meta[name="dcterms.language"]')?.getAttribute("content");
      const normalizedMetaLang = metaLang === "eng" ? "en" : metaLang === "fra" ? "fr" : null;
      const urlLang = url.includes("/en/") ? "en" : url.includes("/fr/") ? "fr" : null;
      const currentLang = htmlLang || normalizedMetaLang || urlLang || "en";
      const oppLang = currentLang === "en" ? "fr" : "en";
      const oppUrl = doc.querySelector(`link[rel="alternate"][hreflang="${oppLang}"]`)?.getAttribute("href") || "";
      const h1Elements = Array.from(doc.querySelectorAll("h1")).filter((h12) => !h12.classList.contains("wb-inv"));
      const h1Texts = h1Elements.map((e) => e.textContent?.trim()).filter(Boolean);
      let doubleH1 = doc.querySelector("hgroup p:has(+ h1)")?.innerHTML || doc.querySelector("p.lead:has(+ h1)")?.innerHTML || "";
      let h1 = "";
      if (h1Texts.length === 1) {
        h1 = h1Texts[0] ?? "";
      } else if (h1Texts.length > 1) {
        doubleH1 = h1Texts[0] ?? "";
        h1 = h1Texts.slice(1).join("<br>");
      }
      const mainContent = doc.querySelector("main")?.innerHTML ?? "";
      const contentHash = yield crypto.subtle.digest("SHA-256", new TextEncoder().encode(mainContent)).then((buf) => Array.from(new Uint8Array(buf)).map((b) => b.toString(16).padStart(2, "0")).join(""));
      const lastChecked = (/* @__PURE__ */ new Date()).toISOString();
      const title = doc.querySelector('meta[name="dcterms.title"]')?.getAttribute("content") || "";
      const description = doc.querySelector('meta[name="description"]')?.getAttribute("content") || "";
      const keywords = doc.querySelector('meta[name="keywords"]')?.getAttribute("content") || doc.querySelector('data[id="pageKeywords"]')?.getAttribute("value") || "";
      const robotsContent = doc.querySelector('meta[name="robots"]')?.getAttribute("content") || "";
      const noindex = robotsContent.includes("noindex");
      const isArchived = doc.querySelector(".gc-archv") !== null;
      const linksToPortal = Array.from(doc.querySelectorAll("a")).some((link) => isPortalDomain(link.href));
      const hasChatbot = !!doc.querySelector("chatbot");
      const parentUrl = this.getBreadcrumb(doc, url)?.at(-1)?.url;
      const parentPath = parentUrl ? this.generatePath(parentUrl) : void 0;
      const text = doc.querySelector("main")?.textContent || "";
      const words = text.trim().split(/\s+/).filter((word) => word.length > 0);
      const wordCount = words.length;
      const hasSubway = doc.querySelector(".gc-subway") !== null;
      const hasOldSubway = doc.querySelector(".gc-navseq") !== null;
      const hasMostRequested = doc.querySelector(".most-requested-bullets") !== null;
      const hasGcSrvinfo = doc.querySelector(".gc-srvinfo") !== null;
      const hasDoormatComponent = doc.querySelector(".mwsdoormat-links-container") !== null;
      const isContactH1 = h1.startsWith("Contact") || h1.startsWith("Contactez");
      const isCampaignUrl = url.includes("/campaigns/") || url.includes("/campagnes/");
      const isNewsUrl = /\/(news|nouvelles)\/\d{4}\//.test(url);
      const isTaxtip = url.includes("/newsroom/tax-tips/") || url.includes("/salle-presse/conseils-fiscaux/");
      const isTFSMK = url.includes("/tax-tips/tax-filing-season-media-kit") || url.includes("/conseils-fiscaux/trousse-medias-periode-production-declarations-revenus");
      const isEnforcementNotice = url.includes("/newsroom/criminal-investigations-actions-charges-convictions") || url.includes("/salle-presse/mesures-relatives-enquetes-criminelles-accusations-condamnations");
      const isMultimedia = url.includes("/news/cra-multimedia-library/") || url.includes("/nouvelles/bibliotheque-multimedia-arc/");
      const hasVideo = doc.querySelector("video") !== null;
      const hasTranscriptH2 = Array.from(doc.querySelectorAll("h2")).some((h2) => /transcript/i.test(h2.textContent?.trim() ?? ""));
      const isVideoTranscript = hasVideo && hasTranscriptH2 && isMultimedia;
      const isFormReadme = url.includes("/forms-publications/forms/") || url.includes("/formulaires-publications/formulaires/");
      const isPub = url.includes("/forms-publications/publications/") || url.includes("/formulaires-publications/publications/");
      const isPubReadme = /\/(forms-publications\/publications|formulaires-publications\/publications)\/[a-z0-9-]+\.html$/.test(url);
      const is5000g = url.includes("/general-income-tax-benefit-package/5000-g.html") || url.includes("/trousse-generale-impot-prestations/5000-g.html");
      const isT1Readme = /\/(general-income-tax-benefit-package|trousse-generale-impot-prestations)\/([a-z-]+\/)?5\d{3}-[a-z]{1,5}\.html$/.test(url);
      const isT1Pub = /\/(general-income-tax-benefit-package|trousse-generale-impot-prestations)\/([a-z-]+\/)?5\d{3}-[a-z]{1,5}\/[a-z0-9-]+\.html$/.test(url);
      const isTD1Readme = /\/(td1-forms-pay-received-on-january-1-(\d{4}-)?later|formulaires-td1-paies-recues-1er-janvier-(\d{4}-)?apres)\/[a-z0-9-]+\.html$/.test(url);
      const payrollPatterns = [
        "t4127-payroll-deductions-formulas",
        "t4127-formules-calcul-retenues-paie",
        "payroll-deductions-t4127-payroll-deductions-formulas",
        "t4127-formules-calcul-retenues-paie-annees-precedentes",
        "t4032-payroll-deductions-tables",
        "t4032-tables-retenues-paie",
        "t4032-payroll-deductions-tables-previous-years",
        "t4032-tables-retenues-paie-documents-annees-anterieures",
        "t4008-payroll-deductions-supplementary-tables",
        "t4008-tables-supplementaires-retenues-paie",
        "t4008-payroll-deductions-supplementary-tables-previous-years",
        "t4008-tables-supplementaires-retenues-paie-annees-anterieures"
      ];
      const isPayrollReadme = new RegExp(`\\/(${payrollPatterns.join("|")})\\/[a-z0-9-]+\\.html$`).test(url);
      const listGroupItemCount = doc.querySelectorAll(".list-group-item").length;
      const listGroupLinkCount = doc.querySelectorAll(".list-group-item a").length;
      const isOldTopic = listGroupItemCount > 0 && listGroupLinkCount / listGroupItemCount >= 0.8;
      const mainElement = doc.querySelector("main");
      const mainText = mainElement?.innerText.trim() ?? "";
      const mainLinks = mainElement?.querySelectorAll("a") ?? [];
      const linkCount = mainLinks.length ?? 0;
      const linkText = Array.from(mainLinks).map((a) => a.innerText.trim()).join("");
      const isNavigational = mainText.length > 0 && linkText.length / mainText.length >= 0.7;
      const hasPdfDownloadLink = doc.querySelector('a[href$=".pdf"].btn.stretched-link') !== null;
      const hasThumbnailContainer = doc.querySelector(".thumbnail") !== null;
      const hasPdfMetadata = Array.from(doc.querySelectorAll("small")).some((small) => /PDF,.*(KB|Ko).*page/i.test(small.textContent?.trim() ?? ""));
      const isPdfDownload = hasPdfDownloadLink && (hasThumbnailContainer || hasPdfMetadata);
      const isBrochure = doc.querySelector(".panel-heading.bg-primary") !== null;
      let template = PageTemplate.Content;
      if (hasSubway) {
        template = PageTemplate.Subway;
      } else if (hasOldSubway) {
        template = PageTemplate.OldSubway;
      } else if (isNewsUrl) {
        template = PageTemplate.Newsroom;
      } else if (isVideoTranscript) {
        template = PageTemplate.VideoTranscript;
      } else if (isCampaignUrl) {
        template = PageTemplate.Campaign;
      } else if (isFormReadme) {
        template = PageTemplate.ReadmeForm;
      } else if (isPubReadme) {
        template = PageTemplate.ReadmeGuide;
      } else if (isPub) {
        template = PageTemplate.Guide;
      } else if (is5000g) {
        template = PageTemplate.GuideT1;
      } else if (isT1Readme) {
        template = PageTemplate.ReadmeT1;
      } else if (isT1Pub) {
        template = PageTemplate.GuideT1;
      } else if (isTD1Readme) {
        template = PageTemplate.ReadmeTD1;
      } else if (isPayrollReadme) {
        template = PageTemplate.ReadmePayroll;
      } else if (isContactH1) {
        template = PageTemplate.Contact;
      } else if (hasMostRequested || hasGcSrvinfo || hasDoormatComponent) {
        template = PageTemplate.Topic;
      } else if (isOldTopic) {
        template = PageTemplate.OldTopic;
      } else if (isNavigational) {
        template = PageTemplate.Navigation;
      } else if (isBrochure) {
        template = PageTemplate.Brochure;
      } else if (isPdfDownload) {
        template = PageTemplate.PdfDownload;
      } else if (isMultimedia) {
        template = PageTemplate.MultimediaGallery;
      } else if (isTaxtip) {
        template = PageTemplate.Taxtip;
      } else if (isTFSMK) {
        template = PageTemplate.TaxFilingSeasonMediaKit;
      } else if (isEnforcementNotice) {
        template = PageTemplate.EnforcementNotice;
      }
      const links = this.getLinks(doc, url);
      const { fleschKincaid, gunningFog } = this.getReadability(doc);
      const phoneRegex = /(?:\+?1[-.\s]?)?\(?\d{3}\)?[-.\s]\d{3}[-.\s]\d{4}/g;
      const phoneNumbers = [...new Set(mainText.match(phoneRegex) ?? [])].map((n) => n.trim());
      return { oppUrl, h1, doubleH1, contentHash, lastChecked, title, description, keywords, noindex, isArchived, linksToPortal, hasChatbot, parentPath, wordCount, linkCount, template, links, fleschKincaid, gunningFog, phoneNumbers };
    });
  }
  markForTranslation() {
    marker("template.content");
    marker("template.subway");
    marker("template.oldSubway");
    marker("template.newsroom");
    marker("template.videoTranscript");
    marker("template.campaign");
    marker("template.readmeForm");
    marker("template.readmeGuide");
    marker("template.guide");
    marker("template.guideT1");
    marker("template.readmeT1");
    marker("template.readmeTD1");
    marker("template.readmePayroll");
    marker("template.contact");
    marker("template.topic");
    marker("template.oldTopic");
    marker("template.navigation");
    marker("template.brochure");
    marker("template.pdfDownload");
    marker("template.multimediaGallery");
    marker("template.taxtip");
    marker("template.taxFilingSeasonMediaKit");
    marker("template.enforcementNotice");
    marker("template.freestyle");
  }
  //Get breadcrumb
  getBreadcrumb(doc, baseUrl) {
    const breadcrumbItems = doc.querySelectorAll(".breadcrumb li a");
    const breadcrumbArray = [];
    breadcrumbItems.forEach((el) => {
      const rawHref = el.getAttribute("href") || "";
      let absoluteUrl = "";
      try {
        absoluteUrl = new URL(rawHref, baseUrl).href.replace("/content/canadasite", "");
      } catch {
        console.warn(`Invalid breadcrumb href: ${rawHref}`);
      }
      breadcrumbArray.push({
        label: el.textContent?.trim() || "",
        url: absoluteUrl
      });
    });
    return breadcrumbArray;
  }
  //Get same-domain links
  getLinks(doc, baseUrl) {
    const baseDomain = new URL(baseUrl).origin;
    const links = Array.from(doc.querySelectorAll("main a")).map((a) => a.getAttribute("href")).filter((href) => !!href).map((href) => {
      try {
        const url = new URL(href, baseUrl);
        url.hash = "";
        url.search = "";
        return url.href.replace("/content/canadasite", "");
      } catch {
        return null;
      }
    }).filter((href) => !!href).filter((href) => new URL(href).origin === baseDomain);
    return [...new Set(links)];
  }
  //Fetch same-domain paths
  getPaths(url) {
    return __async(this, null, function* () {
      try {
        const doc = yield this.fetchContent(url, "both", 2);
        const links = this.getLinks(doc, url);
        return [...new Set(links.map((link) => this.generatePath(link)))];
      } catch (error) {
        console.warn(`Failed to fetch links for "${url}"`, error);
        return [];
      }
    });
  }
  /**
   * Fetches page content from a different origin (UT, AEM preview etc.) by relaying
   * the request through a same-origin proxy page. Only use if {@link fetchContent} is unsuccessful.
   *
   * This function must be triggered by the user or the popup may be blocked resulting in
   * inconsistent behaviour for different users.
   *
   * @param targetUrl The full URL to fetch. Must be on an allowed origin or this will throw. (see {@link generateQuery} for allowed origins)
   * @returns a string with the HTML content. For just a status check, use {@link fetchStatusViaProxy} instead.
   */
  fetchViaProxy(targetUrl) {
    return new Promise((resolve, reject) => {
      let fetchQuery;
      let fetchOrigin;
      try {
        ({ fetchQuery, fetchOrigin } = this.generateQuery(targetUrl, false));
      } catch (error) {
        reject(error);
        return;
      }
      const popup = window.open(fetchQuery, "_blank", "width=1,height=1,left=9999,top=9999");
      if (!popup) {
        reject(new Error("Popup blocked. Please allow popups for this site."));
        return;
      }
      const handler = (event) => {
        if (event.origin !== fetchOrigin)
          return;
        window.removeEventListener("message", handler);
        clearTimeout(timeout);
        popup.close();
        if (event.data.success) {
          resolve(event.data.html);
        } else {
          reject(new Error(event.data.error || "Failed to fetch preview content"));
        }
      };
      window.addEventListener("message", handler);
      const timeout = setTimeout(() => {
        window.removeEventListener("message", handler);
        popup.close();
        reject(new Error("Timeout waiting for preview content"));
      }, 1e4);
    });
  }
  /**
   * Fetches page status from a different origin (UT, AEM preview etc.) by relaying
   * the request through a same-origin proxy page. Only use if {@link fetchStatus} is unsuccessful.
   *
   * This function must be triggered by the user or the popup may be blocked resulting in
   * inconsistent behaviour for different users.
   *
   * @param targetUrl The full URL to fetch. Must be on an allowed origin or this will throw. (see {@link generateQuery} for allowed origins)
   * @returns true if the page exists. For a content fetch, use {@link fetchViaProxy} instead.
   */
  fetchStatusViaProxy(targetUrl) {
    return new Promise((resolve) => {
      let fetchQuery;
      let fetchOrigin;
      try {
        ({ fetchQuery, fetchOrigin } = this.generateQuery(targetUrl, true));
      } catch {
        resolve(false);
        return;
      }
      const popup = window.open(fetchQuery, "_blank", "width=1,height=1,left=9999,top=9999");
      if (!popup) {
        resolve(false);
        return;
      }
      const handler = (event) => {
        if (event.origin !== fetchOrigin)
          return;
        window.removeEventListener("message", handler);
        clearTimeout(timeout);
        popup.close();
        resolve(event.data.success || false);
      };
      window.addEventListener("message", handler);
      const timeout = setTimeout(() => {
        window.removeEventListener("message", handler);
        popup.close();
        resolve(false);
      }, 5e3);
    });
  }
  /**
   * Generates the url query string needed for {@link fetchViaProxy} and {@link fetchStatusViaProxy}
   *
   * If you want to enable a new origin, add the origin and the same-origin proxy page with proxy.js to the paths records.
   *
   * @param targetUrl The full URL for the query.
   * @param statusCheck False by default. Set it to true to add an optional parameter to limit the fetch to page status and no content.
   * @returns fetchQuery (The proxy page with your target url as the query) and fetchOrigin (the origin we are fetching from)
   * @throws Throws if targetUrl is not an allowed origin (see paths variable)
   */
  generateQuery(targetUrl, statusCheck = false) {
    const targetOrigin = new URL(targetUrl).origin;
    const paths = {
      "https://canada-preview.adobecqms.net": "https://canada-preview.adobecqms.net/en/revenue-agency/web-services-test/amber/test.html?fetch=",
      "http://cra-ut.isvcs.net": "http://cra-ut.isvcs.net/test/aida/_Tools/fetch.html?fetch="
    };
    const fetchUrl = paths[targetOrigin];
    if (!fetchUrl) {
      throw new Error(`Unhandled target URL: ${targetUrl}`);
    }
    return {
      fetchQuery: `${fetchUrl}${encodeURIComponent(targetUrl)}&check=${statusCheck}`,
      fetchOrigin: targetOrigin
    };
  }
  // Generate other URLs from Canada.ca URL
  generateOtherUrl(productionUrl, type = "prototype", owner, repo) {
    if (!productionUrl || !owner || !repo) {
      return "";
    }
    const isCRAproto = owner === "cra-proto";
    const isGCproto = owner === "gc-proto";
    try {
      const url = new URL(productionUrl);
      const path = url.pathname;
      if (type === "preview") {
        return `https://canada-preview.adobecqms.net${path}`;
      } else {
        const repoSuffix = type === "baseline" ? `${repo}-baseline` : repo;
        let prototypeUrl = `https://${owner}.github.io/${repoSuffix}${path}`;
        if (isCRAproto) {
          prototypeUrl = `https://cra-test-arc.canada.ca/${repoSuffix}${path}`;
        } else if (isGCproto) {
          prototypeUrl = `https://test.canada.ca/${repoSuffix}${path}`;
        }
        return prototypeUrl;
      }
    } catch (error) {
      console.error("Failed to generate prototype URL:", error);
      return "";
    }
  }
  getReadability(doc) {
    doc.querySelectorAll(".wb-fieldflow, .wb-fieldflow-sub, .pagedetails, script, nav, style").forEach((el) => el.remove());
    doc.querySelectorAll("li").forEach((el) => {
      const text2 = el.textContent?.trim() ?? "";
      if (text2 && !text2.match(/[.!?]$/)) {
        el.textContent = text2 + ".";
      }
    });
    doc.querySelectorAll("h1, h2, h3, h4, h5, h6").forEach((el) => {
      const text2 = el.textContent?.trim() ?? "";
      if (text2 && !text2.match(/[.!?]$/)) {
        el.textContent = text2 + ".";
      }
    });
    const text = doc.querySelector("main")?.textContent?.trim() ?? doc.body?.innerText ?? doc.body?.textContent ?? "";
    const cleanText = text.replace(/\s+/g, " ").trim();
    const fleschKincaid = main_default.fleschKincaidGrade(cleanText);
    const gunningFog = main_default.gunningFog(cleanText);
    return { fleschKincaid, gunningFog };
  }
  //Get relative path
  generatePath(url) {
    const isLocal = url.includes("cra-ut.isvcs.net");
    const isGithub = url.includes("cra-test-arc.canada.ca") || url.includes("test.canada.ca") || url.includes("github.io");
    const slice = isLocal ? 4 : isGithub ? 2 : 1;
    try {
      return new URL(url).pathname.split("/").slice(slice).join("/");
    } catch {
      return url;
    }
  }
  //Generate url for specific version
  generateUrl(path, version = "live", owner, repo) {
    const repoDomain = owner === "cra-proto" ? "https://cra-test-arc.canada.ca" : owner === "gc-proto" ? "https://test.canada.ca" : `https://${owner}.github.io`;
    switch (version) {
      case "live":
        return `https://www.canada.ca/${path}`;
      case "prototype":
        return `${repoDomain}/${repo}/${path}`;
      case "baseline":
        return `${repoDomain}/${repo}-baseline/${path}`;
      case "preview":
        return `https://canada-preview.adobecqms.net/${path}`;
      case "ut":
        return `http://cra-ut.isvcs.net/test/aida/${repo}/${path}`;
      case "ut-base":
        return `http://cra-ut.isvcs.net/test/aida/${repo}-baseline/${path}`;
      case "upd": {
        const currentLang = this.translate.currentLang?.startsWith("fr") ? "&lang=FR" : "";
        return `https://cra-arc.alpha.canada.ca/en/pages?url=https://www.canada.ca/${path}${currentLang}`;
      }
      default:
        return `https://www.canada.ca/${path}`;
    }
  }
  //Get url language
  getLang(url) {
    if (url.includes("/en/") || url.endsWith("en.html") || url.startsWith("en/"))
      return "en";
    else if (url.includes("/fr/") || url.endsWith("fr.html") || url.startsWith("fr/"))
      return "fr";
    else
      return null;
  }
  static \u0275fac = function FetchService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FetchService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _FetchService, factory: _FetchService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FetchService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/services/github/github-auth.service.ts
var GitHubAuthService = class _GitHubAuthService {
  http = inject(HttpClient);
  router = inject(Router);
  BACKEND_URL = environment.apiGateway;
  TOKEN_KEY = "github_access_token";
  USER_KEY = "github_user";
  // Signals
  accessToken = signal(this.getStoredToken());
  currentUser = signal(this.getStoredUser());
  // Computed signals
  isAuthenticated = computed(() => !!this.accessToken());
  user = computed(() => this.currentUser());
  constructor() {
    effect(() => {
      const token = this.accessToken();
      if (token) {
        localStorage.setItem(this.TOKEN_KEY, token);
      } else {
        localStorage.removeItem(this.TOKEN_KEY);
      }
    });
    effect(() => {
      const user = this.currentUser();
      if (user) {
        localStorage.setItem(this.USER_KEY, JSON.stringify(user));
      } else {
        localStorage.removeItem(this.USER_KEY);
      }
    });
    if (this.accessToken() && !this.currentUser()) {
      this.fetchUserInfo();
    }
  }
  /**
   * Initiate GitHub OAuth flow by calling backend to get authorization URL
   */
  login() {
    return __async(this, null, function* () {
      try {
        const currentUrl = this.router.url;
        sessionStorage.setItem("github_oauth_return_url", currentUrl);
        const state = this.generateState();
        sessionStorage.setItem("github_oauth_state", state);
        const response = yield firstValueFrom(this.http.get(`${this.BACKEND_URL}/auth/github/url`));
        const authUrlWithState = `${response.authUrl}&state=${state}`;
        window.location.href = authUrlWithState;
      } catch (error) {
        console.error("Failed to initiate GitHub login:", error);
        throw error;
      }
    });
  }
  /**
   * Handle OAuth callback from GitHub
   */
  handleCallback(code, state) {
    return __async(this, null, function* () {
      const storedState = sessionStorage.getItem("github_oauth_state");
      if (state !== storedState) {
        throw new Error("Invalid state parameter - possible CSRF attack");
      }
      sessionStorage.removeItem("github_oauth_state");
      try {
        const response = yield firstValueFrom(this.http.post(`${this.BACKEND_URL}/auth/github/callback`, { code }));
        this.accessToken.set(response.access_token);
        yield this.fetchUserInfo();
      } catch (error) {
        console.error("Failed to handle GitHub callback:", error);
        throw error;
      }
    });
  }
  /**
   * Fetch user information from GitHub API using the access token
   */
  fetchUserInfo() {
    return __async(this, null, function* () {
      const token = this.accessToken();
      if (!token) {
        return;
      }
      try {
        const user = yield firstValueFrom(this.http.get("https://api.github.com/user", {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/vnd.github.v3+json"
          }
        }).pipe(catchError((error) => {
          console.error("Failed to fetch user info:", error);
          this.logout();
          return of(null);
        })));
        if (user) {
          const mappedUser = {
            login: user.login,
            id: user.id,
            avatar_url: user.avatar_url,
            name: user.name,
            email: user.email
          };
          this.currentUser.set(mappedUser);
        }
      } catch (error) {
        console.error("Error fetching user info:", error);
      }
    });
  }
  /**
   * Logout and clear stored data
   */
  logout() {
    this.accessToken.set(null);
    this.currentUser.set(null);
  }
  /**
   * Get current access token value (for making authenticated GitHub API calls)
   */
  getToken() {
    return this.accessToken();
  }
  getStoredToken() {
    return localStorage.getItem(this.TOKEN_KEY);
  }
  getStoredUser() {
    const user = localStorage.getItem(this.USER_KEY);
    return user ? JSON.parse(user) : null;
  }
  generateState() {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  }
  static \u0275fac = function GitHubAuthService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _GitHubAuthService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _GitHubAuthService, factory: _GitHubAuthService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GitHubAuthService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [], null);
})();

// src/app/services/github/export-github.service.ts
var ExportGitHubService = class _ExportGitHubService {
  fetchService = inject(FetchService);
  authService = inject(GitHubAuthService);
  templateOrg = environment.templateOrg;
  // Manage GitHub token & user integration from OAuth and PAT
  token = computed(() => this.authService.isAuthenticated() ? this.authService.getToken() ?? "" : this.patToken());
  user = computed(() => this.authService.isAuthenticated() ? this.authService.user() : this.patUser());
  // PAT - token (fallback access when OAuth not available)
  PAT_STORAGE_KEY = "github_pat";
  PAT_USER_STORAGE_KEY = "github_pat_user";
  patToken = signal(this.loadPAT());
  patUser = signal(this.loadPATUser());
  get pat() {
    return this.patToken();
  }
  set pat(value) {
    this.patToken.set(value);
    sessionStorage.setItem(this.PAT_STORAGE_KEY, value);
  }
  //Note: we do not need get/set for the patUser. It's updated when the token is validated.
  loadPAT() {
    return sessionStorage.getItem(this.PAT_STORAGE_KEY) ?? "";
  }
  loadPATUser() {
    const stored = sessionStorage.getItem(this.PAT_USER_STORAGE_KEY);
    return stored ? JSON.parse(stored) : null;
  }
  clearPAT() {
    this.patToken.set("");
    this.patUser.set(null);
    sessionStorage.removeItem(this.PAT_STORAGE_KEY);
    sessionStorage.removeItem(this.PAT_USER_STORAGE_KEY);
  }
  // PAT - user (fallback access when OAuth not available)
  mapGitHubUser(patUser) {
    const user = patUser;
    return {
      login: user["login"],
      id: user["id"],
      avatar_url: user["avatar_url"],
      name: user["name"],
      email: user["email"]
    };
  }
  // Validate PAT
  validatePAT() {
    return __async(this, null, function* () {
      const token = this.pat;
      try {
        const userResponse = yield fetch("https://api.github.com/user", {
          headers: {
            "Authorization": `Bearer ${token}`,
            "Accept": "application/vnd.github+json"
          }
        });
        if (!userResponse.ok) {
          this.clearPAT();
        } else {
          const user = yield userResponse.json();
          this.patUser.set(this.mapGitHubUser(user));
          sessionStorage.setItem(this.PAT_USER_STORAGE_KEY, JSON.stringify(user));
          console.log("patUser set:", this.patUser());
          console.log("user computed:", this.user());
        }
      } catch {
        console.log("Network error validating token");
      }
    });
  }
  // Validate GitHub token
  validateToken(token, owner, repo) {
    return __async(this, null, function* () {
      try {
        const userResponse = yield fetch("https://api.github.com/user", {
          headers: {
            "Authorization": `Bearer ${token}`,
            "Accept": "application/vnd.github+json"
          }
        });
        if (!userResponse.ok) {
          const error = userResponse.status === 401 ? "Invalid or expired token" : `GitHub API error: ${userResponse.status}`;
          return { valid: false, error };
        }
        const user = yield userResponse.json();
        const tokenScopes = userResponse.headers.get("x-oauth-scopes")?.split(",").map((s) => s.trim()) ?? [];
        const repoResponse = yield fetch(`https://api.github.com/repos/${owner}/${repo}`, {
          headers: {
            "Authorization": `Bearer ${token}`,
            "Accept": "application/vnd.github+json"
          }
        });
        if (repoResponse.ok) {
          const repoData = yield repoResponse.json();
          let hasWriteAccess = false;
          if (this.authService.isAuthenticated()) {
            hasWriteAccess = repoData.permissions?.push === true || repoData.permissions?.admin === true;
          } else {
            hasWriteAccess = yield this.checkWritePermission(token, owner, repo, user.login);
          }
          return {
            valid: true,
            repoExists: true,
            hasRepoAccess: hasWriteAccess,
            showDisclaimer: false
          };
        } else if (repoResponse.status === 404) {
          let canCreate = false;
          let showDisclaimer = false;
          if (this.authService.isAuthenticated()) {
            if (owner === user.login) {
              canCreate = tokenScopes.includes("repo") || tokenScopes.includes("public_repo");
            } else {
              const orgMemberResponse = yield fetch(`https://api.github.com/orgs/${owner}/memberships/${user.login}`, {
                headers: {
                  "Authorization": `Bearer ${token}`,
                  "Accept": "application/vnd.github+json"
                }
              });
              if (orgMemberResponse.ok) {
                const memberData = yield orgMemberResponse.json();
                canCreate = memberData.role === "admin" || memberData.state === "active";
              }
            }
          } else {
            const repoList = yield this.getRepoList(owner);
            if (repoList.length > 0) {
              const testRepo = repoList[0].name;
              canCreate = yield this.checkWritePermission(token, owner, testRepo, user.login);
            } else {
              if (owner === user.login) {
                canCreate = true;
                showDisclaimer = true;
              } else {
                const orgMemberResponse = yield fetch(`https://api.github.com/orgs/${owner}/memberships/${user.login}`, {
                  headers: {
                    "Authorization": `Bearer ${token}`,
                    "Accept": "application/vnd.github+json"
                  }
                });
                canCreate = orgMemberResponse.ok;
                showDisclaimer = orgMemberResponse.ok;
              }
            }
          }
          return {
            valid: true,
            repoExists: false,
            canCreateRepo: canCreate,
            showDisclaimer
          };
        } else {
          return { valid: false, error: `Error checking repo: ${repoResponse.status}` };
        }
      } catch {
        return { valid: false, error: "Network error validating token" };
      }
    });
  }
  checkWritePermission(token, owner, repo, userLogin) {
    return __async(this, null, function* () {
      const response = yield fetch(`https://api.github.com/repos/${owner}/${repo}/collaborators/${userLogin}/permission`, {
        headers: {
          "Authorization": `Bearer ${token}`,
          "Accept": "application/vnd.github+json"
        }
      });
      if (response.ok) {
        const data = yield response.json();
        return data.permission === "admin" || data.permission === "write";
      }
      return false;
    });
  }
  //TODO: replace this with version from html-normalization service
  formatHtmlWithPrettier(html) {
    return __async(this, null, function* () {
      if (!navigator.languages?.length) {
        Object.assign(navigator, { languages: ["en"] });
      }
      try {
        const [{ default: prettier }, parserHtml] = yield Promise.all([
          import("./chunk-CH3NT4TS.js"),
          import("./chunk-5OYHKORP.js")
        ]);
        return prettier.format(html, {
          parser: "html",
          plugins: [parserHtml],
          printWidth: Infinity,
          tabWidth: 4,
          useTabs: false,
          htmlWhitespaceSensitivity: "css",
          arrowParens: "always",
          bracketSameLine: false,
          bracketSpacing: false,
          embeddedLanguageFormatting: "auto",
          endOfLine: "crlf",
          jsxSingleQuote: false,
          objectWrap: "collapse",
          ProseWrap: "never",
          quoteProps: "consistent",
          singleAttributePerLine: false,
          singleQuote: false,
          trailingComma: "none",
          vueIndentScriptAndStyle: true
        });
      } catch (error) {
        console.error("Prettier formatting error:", error);
        return html;
      }
    });
  }
  formatDocumentAsJekyll(doc, url, owner, repo, breadcrumbs) {
    return __async(this, null, function* () {
      let layout = "default";
      const title = doc.querySelector('meta[name="dcterms.title"]')?.content.trim() || doc.title.trim() || "";
      const description = doc.querySelector('meta[name="description"]')?.content.trim() || "";
      const subject = doc.querySelector('meta[name="dcterms.subject"]')?.content.trim() || "";
      const keywords = doc.querySelector('meta[name="keywords"]')?.content.trim() || "";
      const pageLang = doc.querySelector('meta[name="dcterms.language"]')?.content?.slice(0, 2) || "en";
      const issued = doc.querySelector('meta[name="dcterms.issued"]')?.content || "";
      const modified = doc.querySelector('meta[name="dcterms.modified"]')?.content || "";
      const robots = doc.querySelector('meta[name="robots"]')?.content || "";
      const robotsYaml = robots ? '\r\nrobots: "' + robots + '"' : "";
      const limitedWidth = doc.querySelector(".cnt-wdth-lmtd") ? "\r\npageclass: cnt-wdth-lmtd" : "";
      const altLangPage = Array.from(doc.querySelectorAll('link[rel="alternate"]')).find((link) => link.getAttribute("hreflang") !== pageLang)?.href || "";
      let crumbsYaml;
      if (breadcrumbs) {
        crumbsYaml = breadcrumbs.length > 0 ? breadcrumbs.map((crumb) => `  - title: "${crumb.title}"\r
    link: "${crumb.link}"`).join("\r\n") : "  []";
      } else {
        const crumbs = Array.from(doc.querySelectorAll("ol.breadcrumb li")).slice(1).map((li) => {
          const a = li.querySelector("a");
          if (!a)
            return null;
          const rawHref = a.getAttribute("href") || "";
          return {
            title: a.textContent?.trim() || "",
            link: rawHref.startsWith("http") ? a.href : `https://www.canada.ca${a.getAttribute("href")}`
          };
        }).filter(Boolean);
        crumbsYaml = crumbs.length > 0 ? crumbs.map((crumb) => `  - title: "${crumb.title}"\r
    link: "${crumb.link}"`).join("\r\n") : "  []";
      }
      const auth = pageLang === "en" ? `auth:\r
  type: "contextual"\r
  label: "Sign in"\r
  labelExtended: "CRA sign in"\r
  link: "https://www.canada.ca/en/revenue-agency/services/e-services/cra-login-services.html"` : `auth:\r
  type: "contextual"\r
  label: "Se connecter"\r
  labelExtended: "Se connecter \xE0 l'ARC"\r
  link: "https://www.canada.ca/fr/agence-revenu/services/services-electroniques/services-ouverture-session-arc.html"`;
      const fra = pageLang === "en" ? "" : `\r
lang: fr\r
feedbackPath: https://www.canada.ca/etc/designs/canada/wet-boew/assets/feedback/page-feedback-fr.html\r
privacyUrl: https://www.canada.ca/fr/agence-revenu/organisation/avis-confidentialite.html\r
termsURL: https://www.canada.ca/fr/transparence/avis.html\r
sitemenuPath: https://www.canada.ca/content/dam/canada/sitemenu/sitemenu-v2-fr.html\r
contextualFooter:\r
  title: "Agence du revenu du Canada (ARC)"\r
  links:\r
    - text: "Contacter l'ARC"\r
      url: "https://www.canada.ca/fr/agence-revenu/organisation/coordonnees.html"\r
    - text: "Mettre \xE0 jour vos renseignements"\r
      url: "https://www.canada.ca/fr/agence-revenu/services/mettre-a-jour-renseignements-arc.html"\r
    - text: "\xC0 propos de l'ARC"\r
      url: "https://www.canada.ca/fr/agence-revenu/organisation/a-propos-agence-revenu-canada-arc.html"`;
      const mainEl = doc.querySelector("main");
      let pageContent = "";
      const styles = Array.from(doc.querySelectorAll("style")).map((s) => `<style>${s.textContent}</style>`).join("\r\n");
      const scripts = Array.from(doc.querySelectorAll("body script:not([src])")).map((s) => `<script>${s.textContent}<\/script>`).join("\r\n");
      if (mainEl) {
        mainEl.querySelectorAll("section.pagedetails").forEach((s) => s.remove());
        mainEl.querySelectorAll("div.pagedetails").forEach((d) => d.remove());
        mainEl.querySelectorAll('div[class^="mws"]').forEach((div) => {
          while (div.firstChild) {
            div.parentNode?.insertBefore(div.firstChild, div);
          }
          div.remove();
        });
        mainEl.querySelectorAll("*").forEach((el) => {
          for (const attr of Array.from(el.attributes)) {
            if (attr?.value.includes('"/')) {
              attr.value = attr.value.replace(/"\//g, '"https://www.canada.ca/');
            }
            if (attr?.value.startsWith("/")) {
              attr.value = `https://www.canada.ca${attr.value}`;
            }
          }
        });
        const h1s = doc.querySelectorAll("h1");
        const hasSubway = doc.querySelector(".gc-subway");
        const hasLeadAboveH1 = h1s[0]?.previousElementSibling?.matches("p.lead") || !!h1s[0]?.previousElementSibling?.querySelector?.("p.lead");
        const hasHgroup = doc.querySelector("hgroup");
        if (hasSubway || h1s.length > 1 || h1s[0] && h1s[0].textContent?.trim().replace("&nbsp;", " ") !== title || h1s[0]?.closest(".well") || hasLeadAboveH1 || hasHgroup) {
          layout = "without-h1";
        } else if (!mainEl.classList.contains("container")) {
          layout = "no-container";
        } else {
          h1s[0]?.remove();
        }
        pageContent = mainEl.innerHTML.replace(/[ \t]+$/gm, "").replace(/\n{2,}/g, "\n").split("\n").map((line) => line.replace(/(\S)( {2,})/g, (m, first) => first + " ")).join("\n");
      }
      pageContent = yield this.formatHtmlWithPrettier(pageContent);
      const frontMatter = `---\r
layout: ${layout}\r
title: "${title}"\r
description: "${description}"\r
subject: "${subject}"\r
keywords: "${keywords}"\r
${auth}${fra}${robotsYaml}${limitedWidth}\r
altLangPage: "${altLangPage}"\r
dateModified: ${modified}\r
dateIssued: ${issued}\r
breadcrumbs: # By default the Canada.ca crumbs is already set\r
${crumbsYaml || "  []"}\r
feedbackData:\r
  section: "${title}"\r
notedlinks:\r
  - title: "${title}"\r
    link: "${url}"\r
  - title: "Repository sitemap"\r
    link: "https://${owner}.github.io/${repo}/index.html"\r
---\r
\r
${styles}\r
${pageContent}\r
${scripts}`;
      return frontMatter;
    });
  }
  formatNewPageAsJekyll(node, breadcrumbs, owner, repo, lang = "en", version = "prototype") {
    const url = node.data.live?.[lang].url;
    const altLangPage = lang === "en" ? node.data.live?.fr.url || "" : node.data.live?.en.url || "";
    const title = node.data[version][lang].h1 || "";
    const description = node.data[version][lang].desciption || "";
    const keywords = node.data[version][lang].keywords || "";
    const dateModified = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
    const limitedWidth = "\r\npageclass: cnt-wdth-lmtd";
    const crumbsYaml = breadcrumbs.length > 0 ? breadcrumbs.map((crumb) => `  - title: "${crumb.title}"\r
    link: "${crumb.link}"`).join("\r\n") : "  []";
    const auth = lang === "en" ? `auth:\r
  type: "contextual"\r
  label: "Sign in"\r
  labelExtended: "CRA sign in"\r
  link: "https://www.canada.ca/en/revenue-agency/services/e-services/cra-login-services.html"` : `auth:\r
  type: "contextual"\r
  label: "Se connecter"\r
  labelExtended: "Se connecter \xE0 l'ARC"\r
  link: "https://www.canada.ca/fr/agence-revenu/services/services-electroniques/services-ouverture-session-arc.html"`;
    const fra = lang === "en" ? "" : `\r
lang: fr\r
feedbackPath: https://www.canada.ca/etc/designs/canada/wet-boew/assets/feedback/page-feedback-fr.html\r
privacyUrl: https://www.canada.ca/fr/agence-revenu/organisation/avis-confidentialite.html\r
termsURL: https://www.canada.ca/fr/transparence/avis.html\r
sitemenuPath: https://www.canada.ca/content/dam/canada/sitemenu/sitemenu-v2-fr.html\r
contextualFooter:\r
  title: "Agence du revenu du Canada (ARC)"\r
  links:\r
    - text: "Contacter l'ARCA"\r
      url: "https://www.canada.ca/fr/agence-revenu/organisation/coordonnees.html"\r
    - text: "Mettre \xE0 jour vos renseignements"\r
      url: "https://www.canada.ca/fr/agence-revenu/services/mettre-a-jour-renseignements-arc.html"\r
    - text: "\xC0 propos de l'ARC"\r
      url: "https://www.canada.ca/fr/agence-revenu/organisation/a-propos-agence-revenu-canada-arc.html"`;
    const frontMatter = `---\r
layout: default\r
title: "${title}"\r
description: "${description}"\r
subject: ""\r
keywords: "${keywords}"\r
${auth}${fra}${limitedWidth}\r
altLangPage: "${altLangPage}"\r
dateModified: ${dateModified}\r
dateIssued: ${dateModified}\r
breadcrumbs: # By default the Canada.ca crumbs is already set\r
${crumbsYaml}\r
feedbackData:\r
  section: "${title}"\r
notedlinks:\r
  - title: "${title}"\r
    link: "${url}"\r
  - title: "Repository sitemap"\r
    link: "https://${owner}.github.io/${repo}/index.html"\r
---\r
\r
<!-- Add your content here -->`;
    return frontMatter;
  }
  createConfigYaml(owner, repo, branch, token, existingFiles) {
    return __async(this, null, function* () {
      const orgUrl = owner === "cra-proto" ? "https://cra-test-arc.canada.ca" : `https://${owner}.github.io`;
      const templateUrl = this.templateOrg === "cra-proto" ? "https://cra-test-arc.canada.ca" : `https://${owner}.github.io`;
      const content = `---
# standard jekyll configuration
content_editable: true
baseurl: /${repo}
url: ${orgUrl}
repository: ${owner}/${repo}
website: https://www.canada.ca/en.html

# Remote theme, use the latest version
remote_theme: wet-boew/gcweb-jekyll

# Files excluded from Jekyll builds
exclude:
 - README.md
 - Gemfile
 - Gemfile.lock
 - gcweb-jekyll.gemspec

# Site settings
assets: https://wet-boew.github.io/themes-dist
creator:
  en: "Canada Revenue Agency"
  fr: "Agence du revenu du Canada"

# Custom settings
developerOptions: false
devOptionsLocStore: "gitCRATemplateDevOptions"
exitByURL: false
exitPage:
  en: "/${repo}/source/exit-intent-e.html"
  fr: "/${repo}/source/exit-intent-f.html"
externalOrigin: "https://www.canada.ca"
modifiedLinkList: "/${repo}/source/data/exclude-redirect-links.json"
relativeExternalLinks: false
robots: "noindex, nofollow"
testBanner: true

# Page front matter defaults
defaults:
  - scope:
      path: "" # Ensure it's applied to all pages
      type: pages
    values:
      layout: default
      lang: en
      share: true
      sitemenu: true
      sitesearch: true
      feedback: true
      feedbackData:
        theme: "Taxes"
      feedbackPath: https://www.canada.ca/etc/designs/canada/wet-boew/assets/feedback/page-feedback-en.html
      privacyUrl: https://www.canada.ca/en/revenue-agency/corporate/privacy-notice.html
      termsURL: https://www.canada.ca/en/transparency/terms.html
      sitemenuPath: https://www.canada.ca/content/dam/canada/sitemenu/sitemenu-v2-en.html
      contextualFooter:
        title: "Canada Revenue Agency (CRA)"
        links:
          - text: "Contact the CRA"
            url: "https://www.canada.ca/en/revenue-agency/corporate/contact-information.html"
          - text: "Update your information"
            url: "https://www.canada.ca/en/revenue-agency/services/update-information-cra.html"
          - text: "About the CRA"
            url: "https://www.canada.ca/en/revenue-agency/corporate/about-canada-revenue-agency-cra.html"
      css:
        - https://use.fontawesome.com/releases/v5.15.4/css/all.css
        - https://wet-boew.github.io/themes-dist/GCWeb/GCWeb/m%C3%A9li-m%C3%A9lo/2025-12-mille-iles.css
        - ${templateUrl}/core-prototype/source/css/testing-banner.css
      script:
        - https://wet-boew.github.io/themes-dist/GCWeb/GCWeb/m%C3%A9li-m%C3%A9lo/2025-12-mille-iles.js
        - ${templateUrl}/core-prototype/source/scripts/external-link-detour.js
        `;
      try {
        console.log(`Creating _config.yml for ${repo}`);
        yield this.exportToGitHub(owner, repo, branch, "_config.yml", "_config.yml", content, token, existingFiles, true, false);
      } catch (error) {
        console.error(`Failed to create _config.yml for ${repo}:`, error);
      }
    });
  }
  // Create index.html (sitemap)
  createSitemap(owner, repo, branch, token, existingFiles) {
    return __async(this, null, function* () {
      const date = /* @__PURE__ */ new Date();
      const today = date.toISOString().split("T")[0];
      const content = `---
testBanner: false
title: "${repo} repository sitemap"
dateModified: ${today}
dateIssued: ${today}
nositesearch: true
nomenu: true
breadcrumbs: false
feedback: false
share: false
noFooterContextual: true
noFooterCorporate: true
noFooterMain: true
---

<div class="mrgn-tp-md">
    <div class="row">
        <ul class="toc lst-spcd col-md-12">
            <li class="col-md-4 col-sm-6"><a class="list-group-item active" data-exit="false" href="{{ site.github.repository_url }}">GitHub repository</a></li>
        </ul>
    </div>
</div>
{% comment %} Separate English and French pages {% endcomment %}
{% assign englishPages = site.pages | where_exp: "p", "p.url contains '/en/'" | sort: "url" %}
{% assign frenchPages = site.pages | where_exp: "p", "p.url contains '/fr/'" | sort: "url" %}

{% if frenchPages.size > 0 %}
    {% comment %} Two-column layout {% endcomment %}
    {% comment %} Track which French pages we've already paired {% endcomment %}
    {% assign pairedFrenchUrls = "" | split: "" %}
    
    <table class="table table-striped">
        <thead>
            <tr>
                <th>English</th>
                <th>Fran\xE7ais</th>
            </tr>
        </thead>
        <tbody>
        {% for enPage in englishPages %}
            <tr>
                <td><a href="{{ site.baseurl }}{{ enPage.url }}">{{ enPage.title | default: enPage.url }}</a></td>
                <td>
                {% assign foundFrench = false %}
                {% if enPage.altLangPage %}
                    {% comment %} Look up French page by English altLangPage {% endcomment %}
                    {% for frPage in frenchPages %}
                        {% if enPage.altLangPage contains frPage.url %}
                            <a href="{{ site.baseurl }}{{ frPage.url }}">{{ frPage.title | default: frPage.url }}</a>
                            {% assign pairedFrenchUrls = pairedFrenchUrls | push: frPage.url %}
                            {% assign foundFrench = true %}
                            {% break %}
                        {% endif %}
                    {% endfor %}
                {% endif %}
                {% unless foundFrench %}<i class="fa fa-minus"></i>{% endunless %}
                </td>
            </tr>
        {% endfor %}
        
        {% comment %} Add unpaired French pages {% endcomment %}
        {% for frPage in frenchPages %}
            {% unless pairedFrenchUrls contains frPage.url %}
                <tr>
                    <td><i class="fa fa-minus"></i></td>
                    <td><a href="{{ site.baseurl }}{{ frPage.url }}">{{ frPage.title | default: frPage.url }}</a></td>
                </tr>
            {% endunless %}
        {% endfor %}
        </tbody>
    </table>
{% else %}
    {% comment %} Single-column layout (English only) {% endcomment %}
    <ul>
    {% for enPage in englishPages %}
        <li><a href="{{ site.baseurl }}{{ enPage.url }}">{{ enPage.title | default: enPage.url }}</a></li>
    {% endfor %}
    </ul>
{% endif %}`;
      try {
        console.log(`Creating sitemap for ${repo}`);
        yield this.exportToGitHub(owner, repo, branch, "index.html", "index.html", content, token, existingFiles, true, false);
      } catch (error) {
        console.error(`Failed to create sitemap for ${repo}:`, error);
      }
    });
  }
  // Create robots.txt file
  createRobotsTxt(owner, repo, branch, token, existingFiles) {
    return __async(this, null, function* () {
      const content = `User-agent: *
Disallow: /
`;
      try {
        console.log(`Creating robots.txt for ${repo}`);
        yield this.exportToGitHub(owner, repo, branch, "robots.txt", "robots.txt", content, token, existingFiles, true, false);
      } catch (error) {
        console.error(`Failed to create robots.txt for ${repo}:`, error);
      }
    });
  }
  //Set up README.md <-- add mermaid chart to this
  createInitialReadme(owner, repo, branch, token, projectName, existingFiles, treeNodes) {
    return __async(this, null, function* () {
      const filename = "README.md";
      const date = /* @__PURE__ */ new Date();
      const today = date.toISOString().split("T")[0];
      date.setDate(date.getDate() - 14);
      const startDate = date.toISOString().split("T")[0];
      date.setDate(date.getDate() + 98);
      const endDate = date.toISOString().split("T")[0];
      const orgUrl = owner === "cra-proto" ? "https://cra-test-arc.canada.ca" : `https://${owner}.github.io`;
      const mermaidChart = treeNodes ? this.generateMermaidChart(treeNodes) : "flowchart TD;\n    A[No pages in project]";
      const content = `# ${projectName}

*description of the project*

**Timeframe** ${startDate} - ${endDate}

## Overview

This repository was created via the **Design Assistant**.  
It contains the template files and in-scope pages needed to get started.

GitHub Pages: [${orgUrl}/${repo}](${orgUrl}/${repo})

---
## Update procedures

Add information on how to manage your repo here.

---
## Design phase roadmap:

- [x] Initial content inventory and repo setup
- [ ] Prototype: co-design navigation and content
- [ ] SME review and accuracy check
- [ ] Validation usability testing (including accessibility review)
- [ ] Refine prototype (if required)
- [ ] Spot check usability (if required)

**Updated:**  ${today}

## Information Architecture
\`\`\`mermaid
${mermaidChart}
\`\`\`
`;
      try {
        console.log(`Creating initial README.md for ${repo}`);
        yield this.exportToGitHub(owner, repo, branch, filename, filename, content, token, existingFiles, true, false);
      } catch (error) {
        console.error(`Failed to create README.md for ${repo}:`, error);
      }
    });
  }
  filesToCopy = [
    `https://raw.githubusercontent.com/${this.templateOrg}/core-prototype/main/_includes/header/header.html`,
    `https://raw.githubusercontent.com/${this.templateOrg}/core-prototype/main/_includes/headers-includes/sitesearch.html`,
    `https://raw.githubusercontent.com/${this.templateOrg}/core-prototype/main/_includes/resources-inc/footer.html`,
    `https://raw.githubusercontent.com/${this.templateOrg}/core-prototype/main/_includes/i18n.liquid`,
    `https://raw.githubusercontent.com/${this.templateOrg}/core-prototype/main/_includes/metadata.html`,
    `https://raw.githubusercontent.com/${this.templateOrg}/core-prototype/main/source/exit-intent-e.html`,
    `https://raw.githubusercontent.com/${this.templateOrg}/core-prototype/main/source/exit-intent-f.html`,
    `https://raw.githubusercontent.com/${this.templateOrg}/core-prototype/main/404.html`
  ];
  copyCoreFiles(owner, repo, branch, token, existingFiles, templateFilesToExport) {
    return __async(this, null, function* () {
      const templateTree = yield this.getRepoTree(this.templateOrg, "core-prototype", "main", token);
      const includesFiles = Array.from(templateTree.keys()).filter((path) => path.startsWith("_includes/")).map((path) => `https://raw.githubusercontent.com/${this.templateOrg}/core-prototype/main/${path}`);
      const allFilesToCopy = [
        ...includesFiles,
        `https://raw.githubusercontent.com/${this.templateOrg}/core-prototype/main/source/exit-intent-e.html`,
        `https://raw.githubusercontent.com/${this.templateOrg}/core-prototype/main/source/exit-intent-f.html`,
        `https://raw.githubusercontent.com/${this.templateOrg}/core-prototype/main/404.html`
      ];
      for (const file of allFilesToCopy) {
        try {
          const urlParts = new URL(file).pathname.split("/");
          const destPath = urlParts.slice(4).join("/");
          const includesAllowed = templateFilesToExport.includes("_includes/*") && destPath.startsWith("_includes/");
          if (!templateFilesToExport.includes(destPath) && !includesAllowed) {
            console.log(`Skipping ${destPath} - not in export list`);
            continue;
          }
          const response = yield this.fetchService.fetchWithRetry(file, "GET");
          if (!response.ok)
            throw new Error(`Failed to fetch: ${file}`);
          const content = yield response.text();
          yield this.exportToGitHub(owner, repo, branch, destPath, destPath.split("/").pop() || destPath, content, token, existingFiles, true, true);
        } catch (error) {
          console.error(`Error copying core file ${file}:`, error);
        }
      }
    });
  }
  // Get list of public repos for an owner (user or org)
  getRepoList(owner) {
    return __async(this, null, function* () {
      const type = yield this.getOwnerType(owner);
      const url = type === "Organization" ? `https://api.github.com/orgs/${owner}/repos?per_page=100&type=public` : `https://api.github.com/users/${owner}/repos?per_page=100&type=public`;
      const response = yield fetch(url, {
        headers: {
          "Accept": "application/vnd.github+json"
        }
      });
      if (!response.ok) {
        throw new Error(`Failed to load repos: ${response.status}`);
      }
      return response.json();
    });
  }
  // Determine if owner is a user or organization
  getOwnerType(owner) {
    return __async(this, null, function* () {
      const response = yield fetch(`https://api.github.com/users/${owner}`, {
        headers: { "Accept": "application/vnd.github+json" }
      });
      if (!response.ok) {
        throw new Error(`Failed to fetch owner type for ${owner}: ${response.status}`);
      }
      const data = yield response.json();
      return data.type;
    });
  }
  //Check if repo exists
  repoExists(owner, repo) {
    return __async(this, null, function* () {
      const response = yield fetch(`https://api.github.com/repos/${owner}/${repo}`, {
        headers: { "Accept": "application/vnd.github+json" }
      });
      return response.ok;
    });
  }
  createRepo(owner, repo, branch, token, projectName) {
    return __async(this, null, function* () {
      console.log(`Repo ${owner}/${repo} not found. Creating...`);
      const type = yield this.getOwnerType(owner);
      const url = type === "Organization" ? `https://api.github.com/orgs/${owner}/repos` : `https://api.github.com/user/repos`;
      const createdDate = (/* @__PURE__ */ new Date()).toLocaleDateString("en-CA", { month: "short", year: "numeric" });
      const indexPage = owner === "cra-proto" ? `https://cra-test-arc.canada.ca/${repo}` : owner === "gc-proto" ? `https://test.canada.ca/${repo}` : `https://${owner}.github.io/${repo}/`;
      const response = yield fetch(url, {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${token}`,
          "Accept": "application/vnd.github+json"
        },
        body: JSON.stringify({
          name: repo,
          private: false,
          auto_init: true,
          default_branch: branch,
          description: `${projectName} (${createdDate}) - initialized via AIDA`,
          homepage: indexPage,
          has_issues: false,
          has_wiki: false,
          has_projects: false,
          has_downloads: false,
          has_discussions: false,
          license_template: "mit"
        })
      });
      if (!response.ok) {
        throw new Error(`Failed to create repo: ${response.status}`);
      }
      console.log(`New repo "${repo}" created.`);
      return response.json();
    });
  }
  enablePages(owner, repo, branch, token) {
    return __async(this, null, function* () {
      const checkResponse = yield fetch(`https://api.github.com/repos/${owner}/${repo}/pages`, {
        headers: {
          "Authorization": `Bearer ${token}`,
          "Accept": "application/vnd.github+json"
        }
      });
      if (checkResponse.ok) {
        console.log(`GitHub Pages already enabled on ${owner}/${repo}`);
        return checkResponse.json();
      }
      const response = yield fetch(`https://api.github.com/repos/${owner}/${repo}/pages`, {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${token}`,
          "Accept": "application/vnd.github+json"
        },
        body: JSON.stringify({
          source: {
            branch,
            path: "/"
          }
        })
      });
      if (!response.ok) {
        const errorBody = yield response.text();
        throw new Error(`Failed to enable Pages: ${response.status} - ${errorBody}`);
      }
      console.log(`GitHub Pages enabled on ${branch} branch.`);
      return response.json();
    });
  }
  setupRepo(owner, repo, branch, token, projectName, templateFilesToExport, treeNodes) {
    return __async(this, null, function* () {
      try {
        const exists = yield this.repoExists(owner, repo);
        if (!exists) {
          yield this.createRepo(owner, repo, branch, token, projectName);
          yield new Promise((resolve) => setTimeout(resolve, 2e3));
        } else {
          console.log(`Repo ${owner}/${repo} already exists. Skipping creation.`);
        }
        yield this.enablePages(owner, repo, branch, token);
        const existingFiles = yield this.getRepoTree(owner, repo, branch, token);
        if (templateFilesToExport.includes("README.md")) {
          yield this.createInitialReadme(owner, repo, branch, token, projectName, existingFiles, treeNodes);
        }
        if (templateFilesToExport.includes("_config.yml")) {
          yield this.createConfigYaml(owner, repo, branch, token, existingFiles);
        }
        if (templateFilesToExport.includes("index.html")) {
          yield this.createSitemap(owner, repo, branch, token, existingFiles);
        }
        if (templateFilesToExport.includes("robots.txt")) {
          yield this.createRobotsTxt(owner, repo, branch, token, existingFiles);
        }
        yield this.copyCoreFiles(owner, repo, branch, token, existingFiles, templateFilesToExport);
        return { success: true };
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error occurred";
        const statusMatch = errorMessage.match(/(\d{3})/);
        const status = statusMatch ? parseInt(statusMatch[1]) : 500;
        return {
          success: false,
          error: {
            status,
            message: errorMessage
          }
        };
      }
    });
  }
  //Check for existing files in a repo
  getRepoTree(owner, repo, branch, token) {
    return __async(this, null, function* () {
      const treeUrl = `https://api.github.com/repos/${owner}/${repo}/git/trees/${branch}?recursive=1`;
      const headers = {};
      if (token)
        headers["Authorization"] = `token ${token}`;
      const response = yield fetch(treeUrl, { headers });
      if (!response.ok) {
        console.warn(`Failed to fetch repo tree: ${response.status}`);
        return /* @__PURE__ */ new Map();
      }
      const data = yield response.json();
      const fileMap = /* @__PURE__ */ new Map();
      if (Array.isArray(data.tree)) {
        for (const item of data.tree) {
          if (item.type === "blob") {
            fileMap.set(item.path, item.sha);
          }
        }
      }
      return fileMap;
    });
  }
  b64EncodeUnicode(str) {
    const utf8Bytes = new TextEncoder().encode(str);
    let binary = "";
    utf8Bytes.forEach((b) => binary += String.fromCharCode(b));
    return btoa(binary);
  }
  exportToGitHub(owner, repo, branch, path, filename, content, token, existingFiles, overwrite = false, copyFromCore = false) {
    return __async(this, null, function* () {
      const url = `https://api.github.com/repos/${owner}/${repo}/contents/${path}`;
      if (!overwrite && existingFiles?.has(path)) {
        console.log(`Skipping ${path} (already exists, overwrite=false)`);
        return { skipped: true, path, reason: "exists" };
      }
      let sha;
      if (overwrite && existingFiles?.has(path)) {
        sha = existingFiles.get(path);
      }
      const body = {
        message: copyFromCore ? `Copy ${filename} from core-prototype (via Design Assistant)` : sha ? `Update ${filename} (via Design Assistant)` : `Add ${filename} (via Design Assistant)`,
        content: this.b64EncodeUnicode(content),
        branch
      };
      if (sha) {
        body.sha = sha;
      }
      const response = yield fetch(url, {
        method: "PUT",
        headers: {
          "Authorization": `token ${token}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
      });
      if (!response.ok) {
        const error = yield response.json().catch(() => ({}));
        throw new Error(`GitHub API error: ${response.status} ${error.message || ""}`);
      }
      return response.json();
    });
  }
  generateMermaidChart(treeNodes, version = "prototype") {
    if (!treeNodes || treeNodes.length === 0) {
      return "flowchart TD;\n    A[No pages in project]";
    }
    const firstUrl = treeNodes[0].data?.url || "";
    const lang = firstUrl.includes("/fr/") || firstUrl.includes("/fr.html") ? "fr" : "en";
    let nodeCounter = 1;
    const nodeDefinitions = [];
    const relationships = [];
    const clickHandlers = [];
    const inScopeNodes = [];
    const isRotNodes = [];
    const isNewNodes = [];
    const isMovedNodes = [];
    const traverse = (node, parentId) => {
      const nodeId = `node${nodeCounter++}`;
      const h1 = node.data[version][lang].h1 || "Untitled";
      const url = node.data[version][lang].url || "";
      const inScope = node.data?.status?.inScope || false;
      const isRot = node.data?.status?.isRot || false;
      const isNew = node.data?.status?.isNew || false;
      const isMoved = node.data?.status?.isMoved || false;
      const isOrphan = node.data[version][lang].isOrphan || false;
      nodeDefinitions.push(`    ${nodeId}(${this.sanitizeMermaidLabel(h1)})`);
      if (parentId) {
        const arrow = isOrphan ? "--x" : "-->";
        relationships.push(`    ${parentId} ${arrow} ${nodeId}`);
      }
      if (url) {
        clickHandlers.push(`    click ${nodeId} "${url}" _blank`);
      }
      if (isRot) {
        isRotNodes.push(nodeId);
      } else if (isNew) {
        isNewNodes.push(nodeId);
      } else if (isMoved) {
        isMovedNodes.push(nodeId);
      }
      if (inScope) {
        inScopeNodes.push(nodeId);
      }
      if (node.children && node.children.length > 0) {
        node.children.forEach((child) => traverse(child, nodeId));
      }
    };
    treeNodes.forEach((rootNode) => traverse(rootNode));
    let chart = "flowchart TD;\n";
    chart += nodeDefinitions.join("\n") + "\n";
    chart += relationships.join("\n") + "\n";
    chart += clickHandlers.join("\n");
    if (inScopeNodes.length > 0) {
      chart += "\n    classDef inscope stroke:#7636ab,stroke-width:3px";
      chart += `
    class ${inScopeNodes.join(",")} inscope`;
    }
    if (isRotNodes.length > 0) {
      chart += "\n    classDef isrot fill:#c50028,color:#fff";
      chart += `
    class ${isRotNodes.join(",")} isrot`;
    }
    if (isNewNodes.length > 0) {
      chart += "\n    classDef isnew fill:#00706f,color:#fff";
      chart += `
    class ${isNewNodes.join(",")} isnew`;
    }
    if (isMovedNodes.length > 0) {
      chart += "\n    classDef ismoved fill:#eab308,color:#000";
      chart += `
    class ${isMovedNodes.join(",")} ismoved`;
    }
    console.log(chart);
    return chart;
  }
  // Helper method to sanitize labels for mermaid (escape special characters)
  sanitizeMermaidLabel(label) {
    return label.replace(/"/g, "#quot;").replace(/\(/g, "#40;").replace(/\)/g, "#41;").replace(/\[/g, "#91;").replace(/\]/g, "#93;").trim();
  }
  // Get last modified date
  getLastModified(url, owner, repo, branch, token) {
    return __async(this, null, function* () {
      try {
        const headers = {};
        if (token)
          headers["Authorization"] = `token ${token}`;
        const filePath = new URL(url).pathname;
        const response = yield fetch(`https://api.github.com/repos/${owner}/${repo}/commits?path=${filePath}&sha=${branch}&per_page=1`, { headers });
        const commits = yield response.json();
        return commits[0]?.commit?.committer?.date ?? void 0;
      } catch {
        return void 0;
      }
    });
  }
  // Pull request method for prompt updates
  createPullRequestForPrompts(category, path, filename, content) {
    return __async(this, null, function* () {
      const owner = this.templateOrg;
      const repo = "ai-design-assistant";
      const baseBranch = "dev";
      const token = this.token();
      if (!token) {
        throw new Error("GitHub token not found. Please configure your Personal Access Token.");
      }
      const now = /* @__PURE__ */ new Date();
      const dateStr = now.toISOString().split("T")[0];
      const timeStr = now.toTimeString().slice(0, 5).replace(":", "");
      const branchName = `prompts/update-${category}-${dateStr}-${timeStr}`;
      const refResponse = yield fetch(`https://api.github.com/repos/${owner}/${repo}/git/ref/heads/${baseBranch}`, { headers: { Authorization: `token ${token}` } });
      if (!refResponse.ok) {
        throw new Error(`Failed to get ${baseBranch} branch SHA: ${refResponse.status}`);
      }
      const refData = yield refResponse.json();
      const baseSha = refData.object.sha;
      const createBranchResponse = yield fetch(`https://api.github.com/repos/${owner}/${repo}/git/refs`, {
        method: "POST",
        headers: {
          Authorization: `token ${token}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          ref: `refs/heads/${branchName}`,
          sha: baseSha
        })
      });
      if (!createBranchResponse.ok) {
        const error = yield createBranchResponse.json().catch(() => ({}));
        throw new Error(`Failed to create branch: ${createBranchResponse.status} ${error.message || ""}`);
      }
      yield this.exportToGitHub(owner, repo, branchName, path, filename, content, token, /* @__PURE__ */ new Map(), true, false);
      const prResponse = yield fetch(`https://api.github.com/repos/${owner}/${repo}/pulls`, {
        method: "POST",
        headers: {
          Authorization: `token ${token}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          title: `Update ${category} prompts`,
          head: branchName,
          base: baseBranch,
          body: `Update  to ${category} prompts via Design Assistant.

**File:** \`${path}\`
**Branch:** \`${branchName}\`
**UserID:** \`${this.user()?.id}\`
**Username:** \`${this.user()?.login}\``
        })
      });
      if (!prResponse.ok) {
        const error = yield prResponse.json().catch(() => ({}));
        throw new Error(`Failed to create PR: ${prResponse.status} ${error.message || ""}`);
      }
      const prData = yield prResponse.json();
      return {
        prUrl: prData.html_url,
        branchName
      };
    });
  }
  static \u0275fac = function ExportGitHubService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ExportGitHubService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ExportGitHubService, factory: _ExportGitHubService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExportGitHubService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  ProjectPhase,
  PhaseStatus,
  PageTemplate,
  FIELD_FILTERS,
  COLUMN_GROUPS,
  FetchService,
  GitHubAuthService,
  ExportGitHubService
};
//# sourceMappingURL=chunk-VNVQO4CG.js.map
