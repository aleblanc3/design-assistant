import {
  Checkbox,
  MinusIcon
} from "./chunk-MDDFLQAP.js";
import {
  environment
} from "./chunk-MYYNWJMU.js";
import {
  marker
} from "./chunk-NHG2MSCL.js";
import {
  ChevronDownIcon,
  IconField,
  InputIcon,
  InputText,
  ObjectUtils,
  Overlay,
  Scroller,
  SearchIcon,
  TimesIcon,
  Tooltip
} from "./chunk-FBUTZ4K6.js";
import {
  AutoFocus,
  BaseComponent,
  BaseIcon,
  BaseStyle,
  ButtonModule,
  CheckIcon,
  CommonModule,
  DomHandler,
  FilterService,
  Footer,
  FormsModule,
  Header,
  HttpClient,
  NG_VALUE_ACCESSOR,
  NgClass,
  NgControl,
  NgControlStatus,
  NgForOf,
  NgIf,
  NgModel,
  NgStyle,
  NgTemplateOutlet,
  OverlayService,
  PrimeTemplate,
  Ripple,
  Router,
  SharedModule,
  TranslateService,
  TranslationKeys,
  findSingle,
  focus,
  getFirstFocusableElement,
  getFocusableElements,
  getLastFocusableElement,
  hasClass,
  isHidden,
  unblockBodyScroll,
  uuid
} from "./chunk-WUTT2HFF.js";
import {
  animate,
  state,
  style,
  transition,
  trigger
} from "./chunk-JKR6TEEB.js";
import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ContentChildren,
  EventEmitter,
  HostBinding,
  Injectable,
  Injector,
  Input,
  NgModule,
  NgZone,
  Output,
  ViewChild,
  ViewEncapsulation,
  booleanAttribute,
  catchError,
  computed,
  effect,
  firstValueFrom,
  forwardRef,
  inject,
  numberAttribute,
  of,
  setClassMetadata,
  signal,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵpureFunction5,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleMap,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-C6EWZDCK.js";
import {
  deepEquals,
  equals,
  findLastIndex,
  isArray,
  isNotEmpty,
  isPrintableCharacter,
  resolveFieldData
} from "./chunk-6EM4UOB6.js";
import {
  __async,
  __commonJS,
  __require,
  __spreadProps,
  __spreadValues,
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
    "canada-preview.adobecqms.net",
    "aleblanc3.github.io"
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
      if (parsedUrl.protocol !== "https:" || /\s/.test(url))
        throw new Error();
      hostname = parsedUrl.hostname.toLowerCase();
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
  //Get preview content
  fetchPreview(targetUrl) {
    return new Promise((resolve, reject) => {
      const previewUrl = `https://canada-preview.adobecqms.net/en/revenue-agency/web-services-test/amber/test.html?fetch=${encodeURIComponent(targetUrl)}`;
      const popup = window.open(previewUrl, "_blank", "width=1,height=1,left=9999,top=9999");
      if (!popup) {
        reject(new Error("Popup blocked. Please allow popups for this site."));
        return;
      }
      const handler = (event) => {
        if (event.origin !== "https://canada-preview.adobecqms.net")
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
  fetchPreviewStatus(targetUrl) {
    return new Promise((resolve) => {
      const previewUrl = `https://canada-preview.adobecqms.net/en/revenue-agency/web-services-test/amber/test.html?fetch=${encodeURIComponent(targetUrl)}&check=true`;
      const popup = window.open(previewUrl, "_blank", "width=1,height=1,left=9999,top=9999");
      if (!popup) {
        resolve(false);
        return;
      }
      const handler = (event) => {
        if (event.origin !== "https://canada-preview.adobecqms.net")
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
    const GITHUB_DOMAINS = /cra-test-arc\.canada\.ca|test\.canada\.ca|github\.io/;
    const LOCAL_DOMAINS = /cra-ut\.isvcs\.net/;
    const slice = LOCAL_DOMAINS.test(url) ? 4 : GITHUB_DOMAINS.test(url) ? 2 : 1;
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
      case "upd":
        const currentLang = this.translate.currentLang?.startsWith("fr") ? "&lang=FR" : "";
        return `https://cra-arc.alpha.canada.ca/en/pages?url=https://www.canada.ca/${path}${currentLang}`;
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
    return __async(this, arguments, function* (scopes = ["repo", "user"]) {
      try {
        const currentUrl = this.router.url;
        sessionStorage.setItem("github_oauth_return_url", currentUrl);
        const state2 = this.generateState();
        sessionStorage.setItem("github_oauth_state", state2);
        const response = yield firstValueFrom(this.http.get(`${this.BACKEND_URL}/auth/github/url`));
        const authUrlWithState = `${response.authUrl}&state=${state2}`;
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
  handleCallback(code, state2) {
    return __async(this, null, function* () {
      const storedState = sessionStorage.getItem("github_oauth_state");
      if (state2 !== storedState) {
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
    return {
      login: patUser.login,
      id: patUser.id,
      avatar_url: patUser.avatar_url,
      name: patUser.name,
      email: patUser.email
    };
  }
  // Validate PAT
  validatePAT() {
    return __async(this, null, function* () {
      const token = this.pat;
      console.log("Validating: " + token);
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
        }
      } catch (error) {
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
        const tokenScopes = userResponse.headers.get("x-oauth-scopes")?.split(",").map((s) => s.trim()) || [];
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
      } catch (error) {
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
      if (!navigator.languages) {
        navigator.languages = ["en"];
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
            if (attr.value && attr.value.includes('"/')) {
              attr.value = attr.value.replace(/"\//g, '"https://www.canada.ca/');
            }
            if (attr.value && attr.value.startsWith("/")) {
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

// node_modules/primeng/fesm2022/primeng-icons-plus.mjs
var PlusIcon = class _PlusIcon extends BaseIcon {
  pathId;
  ngOnInit() {
    this.pathId = "url(#" + uuid() + ")";
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275PlusIcon_BaseFactory;
    return function PlusIcon_Factory(__ngFactoryType__) {
      return (\u0275PlusIcon_BaseFactory || (\u0275PlusIcon_BaseFactory = \u0275\u0275getInheritedFactory(_PlusIcon)))(__ngFactoryType__ || _PlusIcon);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _PlusIcon,
    selectors: [["PlusIcon"]],
    features: [\u0275\u0275InheritDefinitionFeature],
    decls: 6,
    vars: 7,
    consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M7.67742 6.32258V0.677419C7.67742 0.497757 7.60605 0.325452 7.47901 0.198411C7.35197 0.0713707 7.17966 0 7 0C6.82034 0 6.64803 0.0713707 6.52099 0.198411C6.39395 0.325452 6.32258 0.497757 6.32258 0.677419V6.32258H0.677419C0.497757 6.32258 0.325452 6.39395 0.198411 6.52099C0.0713707 6.64803 0 6.82034 0 7C0 7.17966 0.0713707 7.35197 0.198411 7.47901C0.325452 7.60605 0.497757 7.67742 0.677419 7.67742H6.32258V13.3226C6.32492 13.5015 6.39704 13.6725 6.52358 13.799C6.65012 13.9255 6.82106 13.9977 7 14C7.17966 14 7.35197 13.9286 7.47901 13.8016C7.60605 13.6745 7.67742 13.5022 7.67742 13.3226V7.67742H13.3226C13.5022 7.67742 13.6745 7.60605 13.8016 7.47901C13.9286 7.35197 14 7.17966 14 7C13.9977 6.82106 13.9255 6.65012 13.799 6.52358C13.6725 6.39704 13.5015 6.32492 13.3226 6.32258H7.67742Z", "fill", "currentColor"], [3, "id"], ["width", "14", "height", "14", "fill", "white"]],
    template: function PlusIcon_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(0, "svg", 0)(1, "g");
        \u0275\u0275element(2, "path", 1);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "defs")(4, "clipPath", 2);
        \u0275\u0275element(5, "rect", 3);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275classMap(ctx.getClassNames());
        \u0275\u0275attribute("aria-label", ctx.ariaLabel)("aria-hidden", ctx.ariaHidden)("role", ctx.role);
        \u0275\u0275advance();
        \u0275\u0275attribute("clip-path", ctx.pathId);
        \u0275\u0275advance(3);
        \u0275\u0275property("id", ctx.pathId);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PlusIcon, [{
    type: Component,
    args: [{
      selector: "PlusIcon",
      standalone: true,
      template: `
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" [attr.aria-label]="ariaLabel" [attr.aria-hidden]="ariaHidden" [attr.role]="role" [class]="getClassNames()">
            <g [attr.clip-path]="pathId">
                <path
                    d="M7.67742 6.32258V0.677419C7.67742 0.497757 7.60605 0.325452 7.47901 0.198411C7.35197 0.0713707 7.17966 0 7 0C6.82034 0 6.64803 0.0713707 6.52099 0.198411C6.39395 0.325452 6.32258 0.497757 6.32258 0.677419V6.32258H0.677419C0.497757 6.32258 0.325452 6.39395 0.198411 6.52099C0.0713707 6.64803 0 6.82034 0 7C0 7.17966 0.0713707 7.35197 0.198411 7.47901C0.325452 7.60605 0.497757 7.67742 0.677419 7.67742H6.32258V13.3226C6.32492 13.5015 6.39704 13.6725 6.52358 13.799C6.65012 13.9255 6.82106 13.9977 7 14C7.17966 14 7.35197 13.9286 7.47901 13.8016C7.60605 13.6745 7.67742 13.5022 7.67742 13.3226V7.67742H13.3226C13.5022 7.67742 13.6745 7.60605 13.8016 7.47901C13.9286 7.35197 14 7.17966 14 7C13.9977 6.82106 13.9255 6.65012 13.799 6.52358C13.6725 6.39704 13.5015 6.32492 13.3226 6.32258H7.67742Z"
                    fill="currentColor"
                />
            </g>
            <defs>
                <clipPath [id]="pathId">
                    <rect width="14" height="14" fill="white" />
                </clipPath>
            </defs>
        </svg>
    `
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-icons-timescircle.mjs
var TimesCircleIcon = class _TimesCircleIcon extends BaseIcon {
  pathId;
  ngOnInit() {
    this.pathId = "url(#" + uuid() + ")";
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275TimesCircleIcon_BaseFactory;
    return function TimesCircleIcon_Factory(__ngFactoryType__) {
      return (\u0275TimesCircleIcon_BaseFactory || (\u0275TimesCircleIcon_BaseFactory = \u0275\u0275getInheritedFactory(_TimesCircleIcon)))(__ngFactoryType__ || _TimesCircleIcon);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _TimesCircleIcon,
    selectors: [["TimesCircleIcon"]],
    features: [\u0275\u0275InheritDefinitionFeature],
    decls: 6,
    vars: 7,
    consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M7 14C5.61553 14 4.26215 13.5895 3.11101 12.8203C1.95987 12.0511 1.06266 10.9579 0.532846 9.67879C0.00303296 8.3997 -0.13559 6.99224 0.134506 5.63437C0.404603 4.2765 1.07129 3.02922 2.05026 2.05026C3.02922 1.07129 4.2765 0.404603 5.63437 0.134506C6.99224 -0.13559 8.3997 0.00303296 9.67879 0.532846C10.9579 1.06266 12.0511 1.95987 12.8203 3.11101C13.5895 4.26215 14 5.61553 14 7C14 8.85652 13.2625 10.637 11.9497 11.9497C10.637 13.2625 8.85652 14 7 14ZM7 1.16667C5.84628 1.16667 4.71846 1.50879 3.75918 2.14976C2.79989 2.79074 2.05222 3.70178 1.61071 4.76768C1.16919 5.83358 1.05367 7.00647 1.27876 8.13803C1.50384 9.26958 2.05941 10.309 2.87521 11.1248C3.69102 11.9406 4.73042 12.4962 5.86198 12.7212C6.99353 12.9463 8.16642 12.8308 9.23232 12.3893C10.2982 11.9478 11.2093 11.2001 11.8502 10.2408C12.4912 9.28154 12.8333 8.15373 12.8333 7C12.8333 5.45291 12.2188 3.96918 11.1248 2.87521C10.0308 1.78125 8.5471 1.16667 7 1.16667ZM4.66662 9.91668C4.58998 9.91704 4.51404 9.90209 4.44325 9.87271C4.37246 9.84333 4.30826 9.8001 4.2544 9.74557C4.14516 9.6362 4.0838 9.48793 4.0838 9.33335C4.0838 9.17876 4.14516 9.0305 4.2544 8.92113L6.17553 7L4.25443 5.07891C4.15139 4.96832 4.09529 4.82207 4.09796 4.67094C4.10063 4.51982 4.16185 4.37563 4.26872 4.26876C4.3756 4.16188 4.51979 4.10066 4.67091 4.09799C4.82204 4.09532 4.96829 4.15142 5.07887 4.25446L6.99997 6.17556L8.92106 4.25446C9.03164 4.15142 9.1779 4.09532 9.32903 4.09799C9.48015 4.10066 9.62434 4.16188 9.73121 4.26876C9.83809 4.37563 9.89931 4.51982 9.90198 4.67094C9.90464 4.82207 9.84855 4.96832 9.74551 5.07891L7.82441 7L9.74554 8.92113C9.85478 9.0305 9.91614 9.17876 9.91614 9.33335C9.91614 9.48793 9.85478 9.6362 9.74554 9.74557C9.69168 9.8001 9.62748 9.84333 9.55669 9.87271C9.4859 9.90209 9.40996 9.91704 9.33332 9.91668C9.25668 9.91704 9.18073 9.90209 9.10995 9.87271C9.03916 9.84333 8.97495 9.8001 8.9211 9.74557L6.99997 7.82444L5.07884 9.74557C5.02499 9.8001 4.96078 9.84333 4.88999 9.87271C4.81921 9.90209 4.74326 9.91704 4.66662 9.91668Z", "fill", "currentColor"], [3, "id"], ["width", "14", "height", "14", "fill", "white"]],
    template: function TimesCircleIcon_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(0, "svg", 0)(1, "g");
        \u0275\u0275element(2, "path", 1);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "defs")(4, "clipPath", 2);
        \u0275\u0275element(5, "rect", 3);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275classMap(ctx.getClassNames());
        \u0275\u0275attribute("aria-label", ctx.ariaLabel)("aria-hidden", ctx.ariaHidden)("role", ctx.role);
        \u0275\u0275advance();
        \u0275\u0275attribute("clip-path", ctx.pathId);
        \u0275\u0275advance(3);
        \u0275\u0275property("id", ctx.pathId);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TimesCircleIcon, [{
    type: Component,
    args: [{
      selector: "TimesCircleIcon",
      standalone: true,
      template: `
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" [attr.aria-label]="ariaLabel" [attr.aria-hidden]="ariaHidden" [attr.role]="role" [class]="getClassNames()">
            <g [attr.clip-path]="pathId">
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7 14C5.61553 14 4.26215 13.5895 3.11101 12.8203C1.95987 12.0511 1.06266 10.9579 0.532846 9.67879C0.00303296 8.3997 -0.13559 6.99224 0.134506 5.63437C0.404603 4.2765 1.07129 3.02922 2.05026 2.05026C3.02922 1.07129 4.2765 0.404603 5.63437 0.134506C6.99224 -0.13559 8.3997 0.00303296 9.67879 0.532846C10.9579 1.06266 12.0511 1.95987 12.8203 3.11101C13.5895 4.26215 14 5.61553 14 7C14 8.85652 13.2625 10.637 11.9497 11.9497C10.637 13.2625 8.85652 14 7 14ZM7 1.16667C5.84628 1.16667 4.71846 1.50879 3.75918 2.14976C2.79989 2.79074 2.05222 3.70178 1.61071 4.76768C1.16919 5.83358 1.05367 7.00647 1.27876 8.13803C1.50384 9.26958 2.05941 10.309 2.87521 11.1248C3.69102 11.9406 4.73042 12.4962 5.86198 12.7212C6.99353 12.9463 8.16642 12.8308 9.23232 12.3893C10.2982 11.9478 11.2093 11.2001 11.8502 10.2408C12.4912 9.28154 12.8333 8.15373 12.8333 7C12.8333 5.45291 12.2188 3.96918 11.1248 2.87521C10.0308 1.78125 8.5471 1.16667 7 1.16667ZM4.66662 9.91668C4.58998 9.91704 4.51404 9.90209 4.44325 9.87271C4.37246 9.84333 4.30826 9.8001 4.2544 9.74557C4.14516 9.6362 4.0838 9.48793 4.0838 9.33335C4.0838 9.17876 4.14516 9.0305 4.2544 8.92113L6.17553 7L4.25443 5.07891C4.15139 4.96832 4.09529 4.82207 4.09796 4.67094C4.10063 4.51982 4.16185 4.37563 4.26872 4.26876C4.3756 4.16188 4.51979 4.10066 4.67091 4.09799C4.82204 4.09532 4.96829 4.15142 5.07887 4.25446L6.99997 6.17556L8.92106 4.25446C9.03164 4.15142 9.1779 4.09532 9.32903 4.09799C9.48015 4.10066 9.62434 4.16188 9.73121 4.26876C9.83809 4.37563 9.89931 4.51982 9.90198 4.67094C9.90464 4.82207 9.84855 4.96832 9.74551 5.07891L7.82441 7L9.74554 8.92113C9.85478 9.0305 9.91614 9.17876 9.91614 9.33335C9.91614 9.48793 9.85478 9.6362 9.74554 9.74557C9.69168 9.8001 9.62748 9.84333 9.55669 9.87271C9.4859 9.90209 9.40996 9.91704 9.33332 9.91668C9.25668 9.91704 9.18073 9.90209 9.10995 9.87271C9.03916 9.84333 8.97495 9.8001 8.9211 9.74557L6.99997 7.82444L5.07884 9.74557C5.02499 9.8001 4.96078 9.84333 4.88999 9.87271C4.81921 9.90209 4.74326 9.91704 4.66662 9.91668Z"
                    fill="currentColor"
                />
            </g>
            <defs>
                <clipPath [id]="pathId">
                    <rect width="14" height="14" fill="white" />
                </clipPath>
            </defs>
        </svg>
    `
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-fieldset.mjs
var _c0 = ["header"];
var _c1 = ["expandicon"];
var _c2 = ["collapseicon"];
var _c3 = ["content"];
var _c4 = ["*", [["p-header"]]];
var _c5 = ["*", "p-header"];
var _c6 = (a0, a1) => ({
  "p-fieldset p-component": true,
  "p-fieldset-toggleable": a0,
  "p-fieldset-expanded": a1
});
var _c7 = (a0) => ({
  transitionParams: a0,
  height: "0"
});
var _c8 = (a0) => ({
  value: "hidden",
  params: a0
});
var _c9 = (a0) => ({
  transitionParams: a0,
  height: "*"
});
var _c10 = (a0) => ({
  value: "visible",
  params: a0
});
function Fieldset_ng_container_2_ng_container_2_PlusIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "PlusIcon", 11);
  }
  if (rf & 2) {
    \u0275\u0275property("styleClass", "p-fieldset-toggler");
    \u0275\u0275attribute("data-pc-section", "togglericon");
  }
}
function Fieldset_ng_container_2_ng_container_2_span_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Fieldset_ng_container_2_ng_container_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 12);
    \u0275\u0275template(1, Fieldset_ng_container_2_ng_container_2_span_2_ng_container_1_Template, 1, 0, "ng-container", 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275attribute("data-pc-section", "togglericon");
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r2.expandIconTemplate || ctx_r2._expandIconTemplate);
  }
}
function Fieldset_ng_container_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Fieldset_ng_container_2_ng_container_2_PlusIcon_1_Template, 1, 2, "PlusIcon", 9)(2, Fieldset_ng_container_2_ng_container_2_span_2_Template, 2, 2, "span", 10);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.expandIconTemplate && !ctx_r2._expandIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.expandIconTemplate || ctx_r2._expandIconTemplate);
  }
}
function Fieldset_ng_container_2_ng_container_3_MinusIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "MinusIcon", 11);
  }
  if (rf & 2) {
    \u0275\u0275property("styleClass", "p-fieldset-toggler");
    \u0275\u0275attribute("aria-hidden", true)("data-pc-section", "togglericon");
  }
}
function Fieldset_ng_container_2_ng_container_3_span_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Fieldset_ng_container_2_ng_container_3_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 12);
    \u0275\u0275template(1, Fieldset_ng_container_2_ng_container_3_span_2_ng_container_1_Template, 1, 0, "ng-container", 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275attribute("data-pc-section", "togglericon");
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r2.collapseIconTemplate || ctx_r2._collapseIconTemplate);
  }
}
function Fieldset_ng_container_2_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Fieldset_ng_container_2_ng_container_3_MinusIcon_1_Template, 1, 3, "MinusIcon", 9)(2, Fieldset_ng_container_2_ng_container_3_span_2_Template, 2, 2, "span", 10);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.collapseIconTemplate && !ctx_r2._collapseIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.collapseIconTemplate || ctx_r2._collapseIconTemplate);
  }
}
function Fieldset_ng_container_2_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Fieldset_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "button", 7);
    \u0275\u0275listener("click", function Fieldset_ng_container_2_Template_button_click_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggle($event));
    })("keydown", function Fieldset_ng_container_2_Template_button_keydown_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onKeyDown($event));
    });
    \u0275\u0275template(2, Fieldset_ng_container_2_ng_container_2_Template, 3, 2, "ng-container", 8)(3, Fieldset_ng_container_2_ng_container_3_Template, 3, 2, "ng-container", 8)(4, Fieldset_ng_container_2_ng_container_4_Template, 1, 0, "ng-container", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    const legendContent_r4 = \u0275\u0275reference(4);
    \u0275\u0275advance();
    \u0275\u0275attribute("id", ctx_r2.id + "_header")("aria-controls", ctx_r2.id + "_content")("aria-expanded", !ctx_r2.collapsed)("aria-label", ctx_r2.buttonAriaLabel);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.collapsed);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.collapsed);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", legendContent_r4);
  }
}
function Fieldset_ng_template_3_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Fieldset_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275projection(2, 1);
    \u0275\u0275template(3, Fieldset_ng_template_3_ng_container_3_Template, 1, 0, "ng-container", 6);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275attribute("data-pc-section", "legendtitle");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.legend);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r2.headerTemplate || ctx_r2._headerTemplate);
  }
}
function Fieldset_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
var theme = ({
  dt
}) => `
.p-fieldset {
    background: ${dt("fieldset.background")};
    border: 1px solid ${dt("fieldset.border.color")};
    border-radius: ${dt("fieldset.border.radius")};
    color: ${dt("fieldset.color")};
    padding:  ${dt("fieldset.padding")};
    margin: 0;
}

.p-fieldset-legend {
    background: ${dt("fieldset.legend.background")};
    border-radius: ${dt("fieldset.legend.border.radius")};
    border-width: ${dt("fieldset.legend.border.width")};
    border-style: solid;
    border-color: ${dt("fieldset.legend.border.color")};
    color: ${dt("fieldset.legend.color")};
    padding: ${dt("fieldset.legend.padding")};
    transition: background ${dt("fieldset.transition.duration")}, color ${dt("fieldset.transition.duration")}, outline-color ${dt("fieldset.transition.duration")}, box-shadow ${dt("fieldset.transition.duration")};
}

.p-fieldset-toggleable > .p-fieldset-legend {
    padding: 0;
}

.p-fieldset-toggle-button {
    cursor: pointer;
    user-select: none;
    overflow: hidden;
    position: relative;
    text-decoration: none;
    display: flex;
    gap: ${dt("fieldset.legend.gap")};
    align-items: center;
    justify-content: center;
    padding: ${dt("fieldset.legend.padding")};
    background: transparent;
    border: 0 none;
    border-radius: ${dt("fieldset.legend.border.radius")};
    transition: background ${dt("fieldset.transition.duration")}, color ${dt("fieldset.transition.duration")}, outline-color ${dt("fieldset.transition.duration")}, box-shadow ${dt("fieldset.transition.duration")};
    outline-color: transparent;
}

.p-fieldset-legend-label {
    font-weight: ${dt("fieldset.legend.font.weight")};
}

.p-fieldset-toggle-button:focus-visible {
    box-shadow: ${dt("fieldset.legend.focus.ring.shadow")};
    outline: ${dt("fieldset.legend.focus.ring.width")} ${dt("fieldset.legend.focus.ring.style")} ${dt("fieldset.legend.focus.ring.color")};
    outline-offset: ${dt("fieldset.legend.focus.ring.offset")};
}

.p-fieldset-toggleable > .p-fieldset-legend:hover {
    color: ${dt("fieldset.legend.hover.color")};
    background: ${dt("fieldset.legend.hover.background")};
}

.p-fieldset-toggle-icon {
    color: ${dt("fieldset.toggle.icon.color")};
    transition: color ${dt("fieldset.transition.duration")};
}

.p-fieldset-toggleable > .p-fieldset-legend:hover .p-fieldset-toggle-icon {
    color: ${dt("fieldset.toggle.icon.hover.color")};
}

.p-fieldset .p-fieldset-content {
    padding: ${dt("fieldset.content.padding")};
}

/* For PrimeNG */
.p-fieldset-toggleable.p-fieldset-expanded > .p-fieldset-content-container:not(.ng-animating) {
    overflow: visible
}

.p-fieldset-toggleable .p-fieldset-content-container {
    overflow: hidden;
}
`;
var classes = {
  root: ({
    props
  }) => ["p-fieldset p-component", {
    "p-fieldset-toggleable": props.toggleable
  }],
  legend: "p-fieldset-legend",
  legendLabel: "p-fieldset-legend-label",
  toggleButton: "p-fieldset-toggle-button",
  toggleIcon: "p-fieldset-toggle-icon",
  contentContainer: "p-fieldset-content-container",
  content: "p-fieldset-content"
};
var FieldsetStyle = class _FieldsetStyle extends BaseStyle {
  name = "fieldset";
  theme = theme;
  classes = classes;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275FieldsetStyle_BaseFactory;
    return function FieldsetStyle_Factory(__ngFactoryType__) {
      return (\u0275FieldsetStyle_BaseFactory || (\u0275FieldsetStyle_BaseFactory = \u0275\u0275getInheritedFactory(_FieldsetStyle)))(__ngFactoryType__ || _FieldsetStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _FieldsetStyle,
    factory: _FieldsetStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FieldsetStyle, [{
    type: Injectable
  }], null, null);
})();
var FieldsetClasses;
(function(FieldsetClasses2) {
  FieldsetClasses2["root"] = "p-fieldset";
  FieldsetClasses2["legend"] = "p-fieldset-legend";
  FieldsetClasses2["legendLabel"] = "p-fieldset-legend-label";
  FieldsetClasses2["toggleIcon"] = "p-fieldset-toggle-icon";
  FieldsetClasses2["contentContainer"] = "p-fieldset-content-container";
  FieldsetClasses2["content"] = "p-fieldset-content";
})(FieldsetClasses || (FieldsetClasses = {}));
var Fieldset = class _Fieldset extends BaseComponent {
  /**
   * Header text of the fieldset.
   * @group Props
   */
  legend;
  /**
   * When specified, content can toggled by clicking the legend.
   * @group Props
   * @defaultValue false
   */
  toggleable;
  /**
   * Defines the default visibility state of the content.
   * * @group Props
   */
  collapsed = false;
  /**
   * Inline style of the component.
   * @group Props
   */
  style;
  /**
   * Style class of the component.
   * @group Props
   */
  styleClass;
  /**
   * Transition options of the panel animation.
   * @group Props
   */
  transitionOptions = "400ms cubic-bezier(0.86, 0, 0.07, 1)";
  /**
   * Emits when the collapsed state changes.
   * @param {boolean} value - New value.
   * @group Emits
   */
  collapsedChange = new EventEmitter();
  /**
   * Callback to invoke before panel toggle.
   * @param {PanelBeforeToggleEvent} event - Custom toggle event
   * @group Emits
   */
  onBeforeToggle = new EventEmitter();
  /**
   * Callback to invoke after panel toggle.
   * @param {PanelAfterToggleEvent} event - Custom toggle event
   * @group Emits
   */
  onAfterToggle = new EventEmitter();
  get id() {
    return uuid("pn_id_");
  }
  get buttonAriaLabel() {
    return this.legend;
  }
  animating;
  _componentStyle = inject(FieldsetStyle);
  /**
   * Defines the header template.
   * @group Templates
   */
  headerTemplate;
  /**
   * Defines the expandicon template.
   * @group Templates
   */
  expandIconTemplate;
  /**
   * Defines the collapseicon template.
   * @group Templates
   */
  collapseIconTemplate;
  /**
   * Defines the content template.
   * @group Templates
   */
  contentTemplate;
  toggle(event) {
    if (this.animating) {
      return false;
    }
    this.animating = true;
    this.onBeforeToggle.emit({
      originalEvent: event,
      collapsed: this.collapsed
    });
    if (this.collapsed) this.expand();
    else this.collapse();
    this.onAfterToggle.emit({
      originalEvent: event,
      collapsed: this.collapsed
    });
    event.preventDefault();
  }
  onKeyDown(event) {
    if (event.code === "Enter" || event.code === "Space") {
      this.toggle(event);
      event.preventDefault();
    }
  }
  expand() {
    this.collapsed = false;
    this.collapsedChange.emit(this.collapsed);
  }
  collapse() {
    this.collapsed = true;
    this.collapsedChange.emit(this.collapsed);
  }
  getBlockableElement() {
    return this.el.nativeElement.children[0];
  }
  onToggleDone() {
    this.animating = false;
  }
  _headerTemplate;
  _expandIconTemplate;
  _collapseIconTemplate;
  _contentTemplate;
  templates;
  ngAfterContentInit() {
    this.templates.forEach((item) => {
      switch (item.getType()) {
        case "header":
          this._headerTemplate = item.template;
          break;
        case "expandicon":
          this._expandIconTemplate = item.template;
          break;
        case "collapseicon":
          this._collapseIconTemplate = item.template;
          break;
        case "content":
          this._contentTemplate = item.template;
          break;
      }
    });
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275Fieldset_BaseFactory;
    return function Fieldset_Factory(__ngFactoryType__) {
      return (\u0275Fieldset_BaseFactory || (\u0275Fieldset_BaseFactory = \u0275\u0275getInheritedFactory(_Fieldset)))(__ngFactoryType__ || _Fieldset);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _Fieldset,
    selectors: [["p-fieldset"]],
    contentQueries: function Fieldset_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, _c0, 4);
        \u0275\u0275contentQuery(dirIndex, _c1, 4);
        \u0275\u0275contentQuery(dirIndex, _c2, 4);
        \u0275\u0275contentQuery(dirIndex, _c3, 4);
        \u0275\u0275contentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.headerTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.expandIconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.collapseIconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.contentTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.templates = _t);
      }
    },
    inputs: {
      legend: "legend",
      toggleable: [2, "toggleable", "toggleable", booleanAttribute],
      collapsed: [2, "collapsed", "collapsed", booleanAttribute],
      style: "style",
      styleClass: "styleClass",
      transitionOptions: "transitionOptions"
    },
    outputs: {
      collapsedChange: "collapsedChange",
      onBeforeToggle: "onBeforeToggle",
      onAfterToggle: "onAfterToggle"
    },
    features: [\u0275\u0275ProvidersFeature([FieldsetStyle]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c5,
    decls: 9,
    vars: 28,
    consts: [["legendContent", ""], [3, "ngClass", "ngStyle"], [1, "p-fieldset-legend"], [4, "ngIf", "ngIfElse"], ["role", "region", 1, "p-fieldset-content-container"], [1, "p-fieldset-content"], [4, "ngTemplateOutlet"], ["tabindex", "0", "role", "button", 1, "p-fieldset-toggle-button", 3, "click", "keydown"], [4, "ngIf"], [3, "styleClass", 4, "ngIf"], ["class", "p-fieldset-toggler", 4, "ngIf"], [3, "styleClass"], [1, "p-fieldset-toggler"], [1, "p-fieldset-legend-label"]],
    template: function Fieldset_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275projectionDef(_c4);
        \u0275\u0275elementStart(0, "fieldset", 1)(1, "legend", 2);
        \u0275\u0275template(2, Fieldset_ng_container_2_Template, 5, 7, "ng-container", 3)(3, Fieldset_ng_template_3_Template, 4, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div", 4);
        \u0275\u0275listener("@fieldsetContent.done", function Fieldset_Template_div_animation_fieldsetContent_done_5_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onToggleDone());
        });
        \u0275\u0275elementStart(6, "div", 5);
        \u0275\u0275projection(7);
        \u0275\u0275template(8, Fieldset_ng_container_8_Template, 1, 0, "ng-container", 6);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        const legendContent_r4 = \u0275\u0275reference(4);
        \u0275\u0275classMap(ctx.styleClass);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(17, _c6, ctx.toggleable, !ctx.collapsed && ctx.toggleable))("ngStyle", ctx.style);
        \u0275\u0275attribute("id", ctx.id)("data-pc-name", "fieldset")("data-pc-section", "root");
        \u0275\u0275advance();
        \u0275\u0275attribute("data-pc-section", "legend");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.toggleable)("ngIfElse", legendContent_r4);
        \u0275\u0275advance(3);
        \u0275\u0275property("@fieldsetContent", ctx.collapsed ? \u0275\u0275pureFunction1(22, _c8, \u0275\u0275pureFunction1(20, _c7, ctx.transitionOptions)) : \u0275\u0275pureFunction1(26, _c10, \u0275\u0275pureFunction1(24, _c9, ctx.animating ? ctx.transitionOptions : "0ms")));
        \u0275\u0275attribute("id", ctx.id + "_content")("aria-labelledby", ctx.id + "_header")("aria-hidden", ctx.collapsed)("data-pc-section", "toggleablecontent");
        \u0275\u0275advance();
        \u0275\u0275attribute("data-pc-section", "content");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngTemplateOutlet", ctx.contentTemplate || ctx._contentTemplate);
      }
    },
    dependencies: [CommonModule, NgClass, NgIf, NgTemplateOutlet, NgStyle, ButtonModule, MinusIcon, PlusIcon, SharedModule],
    encapsulation: 2,
    data: {
      animation: [trigger("fieldsetContent", [state("hidden", style({
        height: "0"
      })), state("visible", style({
        height: "*"
      })), transition("visible <=> hidden", [animate("{{transitionParams}}")]), transition("void => *", animate(0))])]
    },
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Fieldset, [{
    type: Component,
    args: [{
      selector: "p-fieldset",
      standalone: true,
      imports: [CommonModule, ButtonModule, MinusIcon, PlusIcon, SharedModule],
      template: `
        <fieldset
            [attr.id]="id"
            [ngClass]="{
                'p-fieldset p-component': true,
                'p-fieldset-toggleable': toggleable,
                'p-fieldset-expanded': !collapsed && toggleable
            }"
            [ngStyle]="style"
            [class]="styleClass"
            [attr.data-pc-name]="'fieldset'"
            [attr.data-pc-section]="'root'"
        >
            <legend class="p-fieldset-legend" [attr.data-pc-section]="'legend'">
                <ng-container *ngIf="toggleable; else legendContent">
                    <button
                        [attr.id]="id + '_header'"
                        tabindex="0"
                        role="button"
                        [attr.aria-controls]="id + '_content'"
                        [attr.aria-expanded]="!collapsed"
                        [attr.aria-label]="buttonAriaLabel"
                        (click)="toggle($event)"
                        (keydown)="onKeyDown($event)"
                        class="p-fieldset-toggle-button"
                    >
                        <ng-container *ngIf="collapsed">
                            <PlusIcon *ngIf="!expandIconTemplate && !_expandIconTemplate" [styleClass]="'p-fieldset-toggler'" [attr.data-pc-section]="'togglericon'" />
                            <span *ngIf="expandIconTemplate || _expandIconTemplate" class="p-fieldset-toggler" [attr.data-pc-section]="'togglericon'">
                                <ng-container *ngTemplateOutlet="expandIconTemplate || _expandIconTemplate"></ng-container>
                            </span>
                        </ng-container>
                        <ng-container *ngIf="!collapsed">
                            <MinusIcon *ngIf="!collapseIconTemplate && !_collapseIconTemplate" [styleClass]="'p-fieldset-toggler'" [attr.aria-hidden]="true" [attr.data-pc-section]="'togglericon'" />
                            <span *ngIf="collapseIconTemplate || _collapseIconTemplate" class="p-fieldset-toggler" [attr.data-pc-section]="'togglericon'">
                                <ng-container *ngTemplateOutlet="collapseIconTemplate || _collapseIconTemplate"></ng-container>
                            </span>
                        </ng-container>
                        <ng-container *ngTemplateOutlet="legendContent"></ng-container>
                    </button>
                </ng-container>
                <ng-template #legendContent>
                    <span class="p-fieldset-legend-label" [attr.data-pc-section]="'legendtitle'">{{ legend }}</span>
                    <ng-content select="p-header"></ng-content>
                    <ng-container *ngTemplateOutlet="headerTemplate || _headerTemplate"></ng-container>
                </ng-template>
            </legend>
            <div
                [attr.id]="id + '_content'"
                role="region"
                class="p-fieldset-content-container"
                [@fieldsetContent]="collapsed ? { value: 'hidden', params: { transitionParams: transitionOptions, height: '0' } } : { value: 'visible', params: { transitionParams: animating ? transitionOptions : '0ms', height: '*' } }"
                [attr.aria-labelledby]="id + '_header'"
                [attr.aria-hidden]="collapsed"
                [attr.data-pc-section]="'toggleablecontent'"
                (@fieldsetContent.done)="onToggleDone()"
            >
                <div class="p-fieldset-content" [attr.data-pc-section]="'content'">
                    <ng-content></ng-content>
                    <ng-container *ngTemplateOutlet="contentTemplate || _contentTemplate"></ng-container>
                </div>
            </div>
        </fieldset>
    `,
      animations: [trigger("fieldsetContent", [state("hidden", style({
        height: "0"
      })), state("visible", style({
        height: "*"
      })), transition("visible <=> hidden", [animate("{{transitionParams}}")]), transition("void => *", animate(0))])],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [FieldsetStyle]
    }]
  }], null, {
    legend: [{
      type: Input
    }],
    toggleable: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    collapsed: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    transitionOptions: [{
      type: Input
    }],
    collapsedChange: [{
      type: Output
    }],
    onBeforeToggle: [{
      type: Output
    }],
    onAfterToggle: [{
      type: Output
    }],
    headerTemplate: [{
      type: ContentChild,
      args: ["header", {
        descendants: false
      }]
    }],
    expandIconTemplate: [{
      type: ContentChild,
      args: ["expandicon", {
        descendants: false
      }]
    }],
    collapseIconTemplate: [{
      type: ContentChild,
      args: ["collapseicon", {
        descendants: false
      }]
    }],
    contentTemplate: [{
      type: ContentChild,
      args: ["content", {
        descendants: false
      }]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var FieldsetModule = class _FieldsetModule {
  static \u0275fac = function FieldsetModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FieldsetModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _FieldsetModule,
    imports: [Fieldset, SharedModule],
    exports: [Fieldset, SharedModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [Fieldset, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FieldsetModule, [{
    type: NgModule,
    args: [{
      imports: [Fieldset, SharedModule],
      exports: [Fieldset, SharedModule]
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-radiobutton.mjs
var _c02 = ["input"];
var _c12 = (a0, a1, a2, a3, a4) => ({
  "p-radiobutton p-component": true,
  "p-radiobutton-checked": a0,
  "p-disabled": a1,
  "p-variant-filled": a2,
  "p-radiobutton-sm p-inputfield-sm": a3,
  "p-radiobutton-lg p-inputfield-lg": a4
});
var theme2 = ({
  dt
}) => `
.p-radiobutton {
    position: relative;
    display: inline-flex;
    user-select: none;
    vertical-align: bottom;
    width: ${dt("radiobutton.width")};
    height: ${dt("radiobutton.height")};
}

.p-radiobutton-input {
    cursor: pointer;
    appearance: none;
    position: absolute;
    top: 0;
    inset-inline-start: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: 1;
    outline: 0 none;
    border: 1px solid transparent;
    border-radius: 50%;
}

.p-radiobutton-box {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    border: 1px solid ${dt("radiobutton.border.color")};
    background: ${dt("radiobutton.background")};
    width: ${dt("radiobutton.width")};
    height: ${dt("radiobutton.height")};
    transition: background ${dt("radiobutton.transition.duration")}, color ${dt("radiobutton.transition.duration")}, border-color ${dt("radiobutton.transition.duration")}, box-shadow ${dt("radiobutton.transition.duration")}, outline-color ${dt("radiobutton.transition.duration")};
    outline-color: transparent;
    box-shadow: ${dt("radiobutton.shadow")};
}

.p-radiobutton-icon {
    transition-duration: ${dt("radiobutton.transition.duration")};
    background: transparent;
    font-size: ${dt("radiobutton.icon.size")};
    width: ${dt("radiobutton.icon.size")};
    height: ${dt("radiobutton.icon.size")};
    border-radius: 50%;
    backface-visibility: hidden;
    transform: translateZ(0) scale(0.1);
}

.p-radiobutton:not(.p-disabled):has(.p-radiobutton-input:hover) .p-radiobutton-box {
    border-color: ${dt("radiobutton.hover.border.color")};
}

.p-radiobutton-checked .p-radiobutton-box {
    border-color: ${dt("radiobutton.checked.border.color")};
    background: ${dt("radiobutton.checked.background")};
}

.p-radiobutton-checked .p-radiobutton-box .p-radiobutton-icon {
    background: ${dt("radiobutton.icon.checked.color")};
    transform: translateZ(0) scale(1, 1);
    visibility: visible;
}

.p-radiobutton-checked:not(.p-disabled):has(.p-radiobutton-input:hover) .p-radiobutton-box {
    border-color: ${dt("radiobutton.checked.hover.border.color")};
    background: ${dt("radiobutton.checked.hover.background")};
}

.p-radiobutton:not(.p-disabled):has(.p-radiobutton-input:hover).p-radiobutton-checked .p-radiobutton-box .p-radiobutton-icon {
    background: ${dt("radiobutton.icon.checked.hover.color")};
}

.p-radiobutton:not(.p-disabled):has(.p-radiobutton-input:focus-visible) .p-radiobutton-box {
    border-color: ${dt("radiobutton.focus.border.color")};
    box-shadow: ${dt("radiobutton.focus.ring.shadow")};
    outline: ${dt("radiobutton.focus.ring.width")} ${dt("radiobutton.focus.ring.style")} ${dt("radiobutton.focus.ring.color")};
    outline-offset: ${dt("radiobutton.focus.ring.offset")};
}

.p-radiobutton-checked:not(.p-disabled):has(.p-radiobutton-input:focus-visible) .p-radiobutton-box {
    border-color: ${dt("radiobutton.checked.focus.border.color")};
}

p-radioButton.ng-invalid.ng-dirty .p-radiobutton-box,
p-radio-button.ng-invalid.ng-dirty .p-radiobutton-box,
p-radiobutton.ng-invalid.ng-dirty .p-radiobutton-box {
    border-color: ${dt("radiobutton.invalid.border.color")};
}

.p-radiobutton.p-variant-filled .p-radiobutton-box {
    background: ${dt("radiobutton.filled.background")};
}

.p-radiobutton.p-variant-filled.p-radiobutton-checked .p-radiobutton-box {
    background: ${dt("radiobutton.checked.background")};
}

.p-radiobutton.p-variant-filled:not(.p-disabled):has(.p-radiobutton-input:hover).p-radiobutton-checked .p-radiobutton-box {
    background: ${dt("radiobutton.checked.hover.background")};
}

.p-radiobutton.p-disabled {
    opacity: 1;
}

.p-radiobutton.p-disabled .p-radiobutton-box {
    background: ${dt("radiobutton.disabled.background")};
    border-color: ${dt("radiobutton.checked.disabled.border.color")};
}

.p-radiobutton-checked.p-disabled .p-radiobutton-box .p-radiobutton-icon {
    background: ${dt("radiobutton.icon.disabled.color")};
}

.p-radiobutton-sm,
.p-radiobutton-sm .p-radiobutton-box {
    width: ${dt("radiobutton.sm.width")};
    height: ${dt("radiobutton.sm.height")};
}

.p-radiobutton-sm .p-radiobutton-icon {
    font-size: ${dt("radiobutton.icon.sm.size")};
    width: ${dt("radiobutton.icon.sm.size")};
    height: ${dt("radiobutton.icon.sm.size")};
}

.p-radiobutton-lg,
.p-radiobutton-lg .p-radiobutton-box {
    width: ${dt("radiobutton.lg.width")};
    height: ${dt("radiobutton.lg.height")};
}

.p-radiobutton-lg .p-radiobutton-icon {
    font-size: ${dt("radiobutton.icon.lg.size")};
    width: ${dt("radiobutton.icon.lg.size")};
    height: ${dt("radiobutton.icon.lg.size")};
}
`;
var classes2 = {
  root: ({
    instance,
    props
  }) => ["p-radiobutton p-component", {
    "p-radiobutton-checked": instance.checked,
    "p-disabled": props.disabled,
    "p-invalid": props.invalid,
    "p-variant-filled": props.variant ? props.variant === "filled" : instance.config.inputStyle === "filled" || instance.config.inputVariant === "filled"
  }],
  box: "p-radiobutton-box",
  input: "p-radiobutton-input",
  icon: "p-radiobutton-icon"
};
var RadioButtonStyle = class _RadioButtonStyle extends BaseStyle {
  name = "radiobutton";
  theme = theme2;
  classes = classes2;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275RadioButtonStyle_BaseFactory;
    return function RadioButtonStyle_Factory(__ngFactoryType__) {
      return (\u0275RadioButtonStyle_BaseFactory || (\u0275RadioButtonStyle_BaseFactory = \u0275\u0275getInheritedFactory(_RadioButtonStyle)))(__ngFactoryType__ || _RadioButtonStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _RadioButtonStyle,
    factory: _RadioButtonStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RadioButtonStyle, [{
    type: Injectable
  }], null, null);
})();
var RadioButtonClasses;
(function(RadioButtonClasses2) {
  RadioButtonClasses2["root"] = "p-radiobutton";
  RadioButtonClasses2["box"] = "p-radiobutton-box";
  RadioButtonClasses2["input"] = "p-radiobutton-input";
  RadioButtonClasses2["icon"] = "p-radiobutton-icon";
})(RadioButtonClasses || (RadioButtonClasses = {}));
var RADIO_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => RadioButton),
  multi: true
};
var RadioControlRegistry = class _RadioControlRegistry {
  accessors = [];
  add(control, accessor) {
    this.accessors.push([control, accessor]);
  }
  remove(accessor) {
    this.accessors = this.accessors.filter((c) => {
      return c[1] !== accessor;
    });
  }
  select(accessor) {
    this.accessors.forEach((c) => {
      if (this.isSameGroup(c, accessor) && c[1] !== accessor) {
        c[1].writeValue(accessor.value);
      }
    });
  }
  isSameGroup(controlPair, accessor) {
    if (!controlPair[0].control) {
      return false;
    }
    return controlPair[0].control.root === accessor.control.control.root && controlPair[1].name === accessor.name;
  }
  static \u0275fac = function RadioControlRegistry_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RadioControlRegistry)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _RadioControlRegistry,
    factory: _RadioControlRegistry.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RadioControlRegistry, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var RadioButton = class _RadioButton extends BaseComponent {
  /**
   * Value of the radiobutton.
   * @group Props
   */
  value;
  /**
   * The name of the form control.
   * @group Props
   */
  formControlName;
  /**
   * Name of the radiobutton group.
   * @group Props
   */
  name;
  /**
   * When present, it specifies that the element should be disabled.
   * @group Props
   */
  disabled;
  /**
   * Specifies the input variant of the component.
   * @group Props
   */
  variant;
  /**
   * Defines the size of the component.
   * @group Props
   */
  size;
  /**
   * Index of the element in tabbing order.
   * @group Props
   */
  tabindex;
  /**
   * Identifier of the focus input to match a label defined for the component.
   * @group Props
   */
  inputId;
  /**
   * Establishes relationships between the component and label(s) where its value should be one or more element IDs.
   * @group Props
   */
  ariaLabelledBy;
  /**
   * Used to define a string that labels the input element.
   * @group Props
   */
  ariaLabel;
  /**
   * Inline style of the component.
   * @group Props
   */
  style;
  /**
   * Style class of the component.
   * @group Props
   */
  styleClass;
  /**
   * When present, it specifies that the component should automatically get focus on load.
   * @group Props
   */
  autofocus;
  /**
   * Allows to select a boolean value.
   * @group Props
   */
  binary;
  /**
   * Callback to invoke on radio button click.
   * @param {RadioButtonClickEvent} event - Custom click event.
   * @group Emits
   */
  onClick = new EventEmitter();
  /**
   * Callback to invoke when the receives focus.
   * @param {Event} event - Browser event.
   * @group Emits
   */
  onFocus = new EventEmitter();
  /**
   * Callback to invoke when the loses focus.
   * @param {Event} event - Browser event.
   * @group Emits
   */
  onBlur = new EventEmitter();
  inputViewChild;
  onModelChange = () => {
  };
  onModelTouched = () => {
  };
  checked;
  focused;
  control;
  _componentStyle = inject(RadioButtonStyle);
  injector = inject(Injector);
  registry = inject(RadioControlRegistry);
  ngOnInit() {
    super.ngOnInit();
    this.control = this.injector.get(NgControl);
    this.checkName();
    this.registry.add(this.control, this);
  }
  onChange(event) {
    if (!this.disabled) {
      this.select(event);
    }
  }
  select(event) {
    if (!this.disabled) {
      this.checked = true;
      this.onModelChange(this.value);
      this.registry.select(this);
      this.onClick.emit({
        originalEvent: event,
        value: this.value
      });
    }
  }
  writeValue(value) {
    if (!this.binary) {
      this.checked = value == this.value;
    } else {
      this.checked = !!value;
    }
    if (this.inputViewChild && this.inputViewChild.nativeElement) {
      this.inputViewChild.nativeElement.checked = this.checked;
    }
    this.cd.markForCheck();
  }
  registerOnChange(fn) {
    this.onModelChange = fn;
  }
  registerOnTouched(fn) {
    this.onModelTouched = fn;
  }
  setDisabledState(val) {
    this.disabled = val;
    this.cd.markForCheck();
  }
  onInputFocus(event) {
    this.focused = true;
    this.onFocus.emit(event);
  }
  onInputBlur(event) {
    this.focused = false;
    this.onModelTouched();
    this.onBlur.emit(event);
  }
  /**
   * Applies focus to input field.
   * @group Method
   */
  focus() {
    this.inputViewChild.nativeElement.focus();
  }
  ngOnDestroy() {
    this.registry.remove(this);
    super.ngOnDestroy();
  }
  checkName() {
    if (this.name && this.formControlName && this.name !== this.formControlName) {
      this.throwNameError();
    }
    if (!this.name && this.formControlName) {
      this.name = this.formControlName;
    }
  }
  throwNameError() {
    throw new Error(`
          If you define both a name and a formControlName attribute on your radio button, their values
          must match. Ex: <p-radioButton formControlName="food" name="food"></p-radioButton>
        `);
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275RadioButton_BaseFactory;
    return function RadioButton_Factory(__ngFactoryType__) {
      return (\u0275RadioButton_BaseFactory || (\u0275RadioButton_BaseFactory = \u0275\u0275getInheritedFactory(_RadioButton)))(__ngFactoryType__ || _RadioButton);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _RadioButton,
    selectors: [["p-radioButton"], ["p-radiobutton"], ["p-radio-button"]],
    viewQuery: function RadioButton_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c02, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.inputViewChild = _t.first);
      }
    },
    inputs: {
      value: "value",
      formControlName: "formControlName",
      name: "name",
      disabled: [2, "disabled", "disabled", booleanAttribute],
      variant: "variant",
      size: "size",
      tabindex: [2, "tabindex", "tabindex", numberAttribute],
      inputId: "inputId",
      ariaLabelledBy: "ariaLabelledBy",
      ariaLabel: "ariaLabel",
      style: "style",
      styleClass: "styleClass",
      autofocus: [2, "autofocus", "autofocus", booleanAttribute],
      binary: [2, "binary", "binary", booleanAttribute]
    },
    outputs: {
      onClick: "onClick",
      onFocus: "onFocus",
      onBlur: "onBlur"
    },
    features: [\u0275\u0275ProvidersFeature([RADIO_VALUE_ACCESSOR, RadioButtonStyle]), \u0275\u0275InheritDefinitionFeature],
    decls: 5,
    vars: 24,
    consts: [["input", ""], [3, "ngStyle", "ngClass"], ["type", "radio", 1, "p-radiobutton-input", 3, "focus", "blur", "change", "checked", "disabled", "value", "pAutoFocus"], [1, "p-radiobutton-box"], [1, "p-radiobutton-icon"]],
    template: function RadioButton_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 1)(1, "input", 2, 0);
        \u0275\u0275listener("focus", function RadioButton_Template_input_focus_1_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onInputFocus($event));
        })("blur", function RadioButton_Template_input_blur_1_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onInputBlur($event));
        })("change", function RadioButton_Template_input_change_1_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onChange($event));
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "div", 3);
        \u0275\u0275element(4, "div", 4);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275classMap(ctx.styleClass);
        \u0275\u0275property("ngStyle", ctx.style)("ngClass", \u0275\u0275pureFunction5(18, _c12, ctx.checked, ctx.disabled, ctx.variant === "filled" || ctx.config.inputStyle() === "filled" || ctx.config.inputVariant() === "filled", ctx.size === "small", ctx.size === "large"));
        \u0275\u0275attribute("data-pc-name", "radiobutton")("data-pc-section", "root");
        \u0275\u0275advance();
        \u0275\u0275property("checked", ctx.checked)("disabled", ctx.disabled)("value", ctx.value)("pAutoFocus", ctx.autofocus);
        \u0275\u0275attribute("id", ctx.inputId)("name", ctx.name)("aria-labelledby", ctx.ariaLabelledBy)("aria-label", ctx.ariaLabel)("tabindex", ctx.tabindex)("aria-checked", ctx.checked);
        \u0275\u0275advance(2);
        \u0275\u0275attribute("data-pc-section", "input");
        \u0275\u0275advance();
        \u0275\u0275attribute("data-pc-section", "icon");
      }
    },
    dependencies: [CommonModule, NgClass, NgStyle, AutoFocus, SharedModule],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RadioButton, [{
    type: Component,
    args: [{
      selector: "p-radioButton, p-radiobutton, p-radio-button",
      standalone: true,
      imports: [CommonModule, AutoFocus, SharedModule],
      template: `
        <div
            [ngStyle]="style"
            [ngClass]="{
                'p-radiobutton p-component': true,
                'p-radiobutton-checked': checked,
                'p-disabled': disabled,
                'p-variant-filled': variant === 'filled' || config.inputStyle() === 'filled' || config.inputVariant() === 'filled',
                'p-radiobutton-sm p-inputfield-sm': size === 'small',
                'p-radiobutton-lg p-inputfield-lg': size === 'large'
            }"
            [class]="styleClass"
            [attr.data-pc-name]="'radiobutton'"
            [attr.data-pc-section]="'root'"
        >
            <input
                #input
                [attr.id]="inputId"
                type="radio"
                class="p-radiobutton-input"
                [attr.name]="name"
                [checked]="checked"
                [disabled]="disabled"
                [value]="value"
                [attr.aria-labelledby]="ariaLabelledBy"
                [attr.aria-label]="ariaLabel"
                [attr.tabindex]="tabindex"
                [attr.aria-checked]="checked"
                (focus)="onInputFocus($event)"
                (blur)="onInputBlur($event)"
                (change)="onChange($event)"
                [pAutoFocus]="autofocus"
            />
            <div class="p-radiobutton-box" [attr.data-pc-section]="'input'">
                <div class="p-radiobutton-icon" [attr.data-pc-section]="'icon'"></div>
            </div>
        </div>
    `,
      providers: [RADIO_VALUE_ACCESSOR, RadioButtonStyle],
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], null, {
    value: [{
      type: Input
    }],
    formControlName: [{
      type: Input
    }],
    name: [{
      type: Input
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    variant: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    tabindex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    inputId: [{
      type: Input
    }],
    ariaLabelledBy: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input
    }],
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    autofocus: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    binary: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    onClick: [{
      type: Output
    }],
    onFocus: [{
      type: Output
    }],
    onBlur: [{
      type: Output
    }],
    inputViewChild: [{
      type: ViewChild,
      args: ["input"]
    }]
  });
})();
var RadioButtonModule = class _RadioButtonModule {
  static \u0275fac = function RadioButtonModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RadioButtonModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _RadioButtonModule,
    imports: [RadioButton, SharedModule],
    exports: [RadioButton, SharedModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [RadioButton, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RadioButtonModule, [{
    type: NgModule,
    args: [{
      imports: [RadioButton, SharedModule],
      exports: [RadioButton, SharedModule]
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-chip.mjs
var _c03 = ["removeicon"];
var _c13 = ["*"];
function Chip_img_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "img", 4);
    \u0275\u0275listener("error", function Chip_img_1_Template_img_error_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.imageError($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("src", ctx_r1.image, \u0275\u0275sanitizeUrl)("alt", ctx_r1.alt);
  }
}
function Chip_ng_template_2_span_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 6);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r1.icon);
    \u0275\u0275property("ngClass", "p-chip-icon");
    \u0275\u0275attribute("data-pc-section", "icon");
  }
}
function Chip_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Chip_ng_template_2_span_0_Template, 1, 4, "span", 5);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngIf", ctx_r1.icon);
  }
}
function Chip_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275attribute("data-pc-section", "label");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.label);
  }
}
function Chip_ng_container_5_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 11);
    \u0275\u0275listener("click", function Chip_ng_container_5_ng_container_1_span_1_Template_span_click_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.close($event));
    })("keydown", function Chip_ng_container_5_ng_container_1_span_1_Template_span_keydown_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onKeydown($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r1.removeIcon);
    \u0275\u0275property("ngClass", "p-chip-remove-icon");
    \u0275\u0275attribute("data-pc-section", "removeicon")("aria-label", ctx_r1.removeAriaLabel);
  }
}
function Chip_ng_container_5_ng_container_1_TimesCircleIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "TimesCircleIcon", 12);
    \u0275\u0275listener("click", function Chip_ng_container_5_ng_container_1_TimesCircleIcon_2_Template_TimesCircleIcon_click_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.close($event));
    })("keydown", function Chip_ng_container_5_ng_container_1_TimesCircleIcon_2_Template_TimesCircleIcon_keydown_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onKeydown($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap("p-chip-remove-icon");
    \u0275\u0275attribute("data-pc-section", "removeicon")("aria-label", ctx_r1.removeAriaLabel);
  }
}
function Chip_ng_container_5_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Chip_ng_container_5_ng_container_1_span_1_Template, 1, 5, "span", 9)(2, Chip_ng_container_5_ng_container_1_TimesCircleIcon_2_Template, 1, 4, "TimesCircleIcon", 10);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.removeIcon);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.removeIcon);
  }
}
function Chip_ng_container_5_span_2_1_ng_template_0_Template(rf, ctx) {
}
function Chip_ng_container_5_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Chip_ng_container_5_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Chip_ng_container_5_span_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 13);
    \u0275\u0275listener("click", function Chip_ng_container_5_span_2_Template_span_click_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.close($event));
    })("keydown", function Chip_ng_container_5_span_2_Template_span_keydown_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onKeydown($event));
    });
    \u0275\u0275template(1, Chip_ng_container_5_span_2_1_Template, 1, 0, null, 14);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275attribute("data-pc-section", "removeicon")("aria-label", ctx_r1.removeAriaLabel);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.removeIconTemplate || ctx_r1._removeIconTemplate);
  }
}
function Chip_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Chip_ng_container_5_ng_container_1_Template, 3, 2, "ng-container", 3)(2, Chip_ng_container_5_span_2_Template, 2, 3, "span", 8);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.removeIconTemplate && !ctx_r1._removeIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.removeIconTemplate || ctx_r1._removeIconTemplate);
  }
}
var theme3 = ({
  dt
}) => `
.p-chip {
    display: inline-flex;
    align-items: center;
    background: ${dt("chip.background")};
    color: ${dt("chip.color")};
    border-radius: ${dt("chip.border.radius")};
    padding: ${dt("chip.padding.y")} ${dt("chip.padding.x")};
    gap: ${dt("chip.gap")};
}

.p-chip-icon {
    color: ${dt("chip.icon.color")};
    font-size: ${dt("chip.icon.font.size")};
    width: ${dt("chip.icon.size")};
    height: ${dt("chip.icon.size")};
}

.p-chip-image {
    border-radius: 50%;
    width: ${dt("chip.image.width")};
    height: ${dt("chip.image.height")};
    margin-left: calc(-1 * ${dt("chip.padding.y")});
}

.p-chip:has(.p-chip-remove-icon) {
    padding-inline-end: ${dt("chip.padding.y")};
}

.p-chip:has(.p-chip-image) {
    padding-top: calc(${dt("chip.padding.y")} / 2);
    padding-bottom: calc(${dt("chip.padding.y")} / 2);
}

.p-chip-remove-icon {
    cursor: pointer;
    font-size: ${dt("chip.remove.icon.font.size")};
    width: ${dt("chip.remove.icon.size")};
    height: ${dt("chip.remove.icon.size")};
    color: ${dt("chip.remove.icon.color")};
    border-radius: 50%;
    transition: outline-color ${dt("chip.transition.duration")}, box-shadow ${dt("chip.transition.duration")};
    outline-color: transparent;
}

.p-chip-remove-icon:focus-visible {
    box-shadow: ${dt("chip.remove.icon.focus.ring.shadow")};
    outline: ${dt("chip.remove.icon.focus.ring.width")} ${dt("chip.remove.icon.focus.ring.style")} ${dt("chip.remove.icon.focus.ring.color")};
    outline-offset: ${dt("chip.remove.icon.focus.ring.offset")};
}
`;
var classes3 = {
  root: "p-chip p-component",
  image: "p-chip-image",
  icon: "p-chip-icon",
  label: "p-chip-label",
  removeIcon: "p-chip-remove-icon"
};
var ChipStyle = class _ChipStyle extends BaseStyle {
  name = "chip";
  theme = theme3;
  classes = classes3;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ChipStyle_BaseFactory;
    return function ChipStyle_Factory(__ngFactoryType__) {
      return (\u0275ChipStyle_BaseFactory || (\u0275ChipStyle_BaseFactory = \u0275\u0275getInheritedFactory(_ChipStyle)))(__ngFactoryType__ || _ChipStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _ChipStyle,
    factory: _ChipStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChipStyle, [{
    type: Injectable
  }], null, null);
})();
var ChipClasses;
(function(ChipClasses2) {
  ChipClasses2["root"] = "p-chip";
  ChipClasses2["image"] = "p-chip-image";
  ChipClasses2["icon"] = "p-chip-icon";
  ChipClasses2["label"] = "p-chip-label";
  ChipClasses2["removeIcon"] = "p-chip-remove-icon";
})(ChipClasses || (ChipClasses = {}));
var Chip = class _Chip extends BaseComponent {
  /**
   * Defines the text to display.
   * @group Props
   */
  label;
  /**
   * Defines the icon to display.
   * @group Props
   */
  icon;
  /**
   * Defines the image to display.
   * @group Props
   */
  image;
  /**
   * Alt attribute of the image.
   * @group Props
   */
  alt;
  /**
   * Inline style of the element.
   * @group Props
   */
  style;
  /**
   * Class of the element.
   * @group Props
   */
  styleClass;
  /**
   * Whether to display a remove icon.
   * @group Props
   */
  removable = false;
  /**
   * Icon of the remove element.
   * @group Props
   */
  removeIcon;
  /**
   * Callback to invoke when a chip is removed.
   * @param {MouseEvent} event - Mouse event.
   * @group Emits
   */
  onRemove = new EventEmitter();
  /**
   * This event is triggered if an error occurs while loading an image file.
   * @param {Event} event - Browser event.
   * @group Emits
   */
  onImageError = new EventEmitter();
  visible = true;
  get removeAriaLabel() {
    return this.config.getTranslation(TranslationKeys.ARIA)["removeLabel"];
  }
  /**
   * Used to pass all properties of the chipProps to the Chip component.
   * @group Props
   */
  get chipProps() {
    return this._chipProps;
  }
  set chipProps(val) {
    this._chipProps = val;
    if (val && typeof val === "object") {
      Object.entries(val).forEach(([k, v]) => this[`_${k}`] !== v && (this[`_${k}`] = v));
    }
  }
  _chipProps;
  _componentStyle = inject(ChipStyle);
  removeIconTemplate;
  templates;
  _removeIconTemplate;
  ngAfterContentInit() {
    this.templates.forEach((item) => {
      switch (item.getType()) {
        case "removeicon":
          this._removeIconTemplate = item.template;
          break;
        default:
          this._removeIconTemplate = item.template;
          break;
      }
    });
  }
  ngOnChanges(simpleChanges) {
    super.ngOnChanges(simpleChanges);
    if (simpleChanges.chipProps && simpleChanges.chipProps.currentValue) {
      const {
        currentValue
      } = simpleChanges.chipProps;
      if (currentValue.label !== void 0) {
        this.label = currentValue.label;
      }
      if (currentValue.icon !== void 0) {
        this.icon = currentValue.icon;
      }
      if (currentValue.image !== void 0) {
        this.image = currentValue.image;
      }
      if (currentValue.alt !== void 0) {
        this.alt = currentValue.alt;
      }
      if (currentValue.style !== void 0) {
        this.style = currentValue.style;
      }
      if (currentValue.styleClass !== void 0) {
        this.styleClass = currentValue.styleClass;
      }
      if (currentValue.removable !== void 0) {
        this.removable = currentValue.removable;
      }
      if (currentValue.removeIcon !== void 0) {
        this.removeIcon = currentValue.removeIcon;
      }
    }
  }
  containerClass() {
    let classes6 = "p-chip p-component";
    if (this.styleClass) {
      classes6 += ` ${this.styleClass}`;
    }
    return classes6;
  }
  close(event) {
    this.visible = false;
    this.onRemove.emit(event);
  }
  onKeydown(event) {
    if (event.key === "Enter" || event.key === "Backspace") {
      this.close(event);
    }
  }
  imageError(event) {
    this.onImageError.emit(event);
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275Chip_BaseFactory;
    return function Chip_Factory(__ngFactoryType__) {
      return (\u0275Chip_BaseFactory || (\u0275Chip_BaseFactory = \u0275\u0275getInheritedFactory(_Chip)))(__ngFactoryType__ || _Chip);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _Chip,
    selectors: [["p-chip"]],
    contentQueries: function Chip_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, _c03, 4);
        \u0275\u0275contentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.removeIconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.templates = _t);
      }
    },
    hostVars: 9,
    hostBindings: function Chip_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("data-pc-name", "chip")("aria-label", ctx.label)("data-pc-section", "root");
        \u0275\u0275styleMap(ctx.style);
        \u0275\u0275classMap(ctx.containerClass());
        \u0275\u0275styleProp("display", !ctx.visible && "none");
      }
    },
    inputs: {
      label: "label",
      icon: "icon",
      image: "image",
      alt: "alt",
      style: "style",
      styleClass: "styleClass",
      removable: [2, "removable", "removable", booleanAttribute],
      removeIcon: "removeIcon",
      chipProps: "chipProps"
    },
    outputs: {
      onRemove: "onRemove",
      onImageError: "onImageError"
    },
    features: [\u0275\u0275ProvidersFeature([ChipStyle]), \u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature],
    ngContentSelectors: _c13,
    decls: 6,
    vars: 4,
    consts: [["iconTemplate", ""], ["class", "p-chip-image", 3, "src", "alt", "error", 4, "ngIf", "ngIfElse"], ["class", "p-chip-label", 4, "ngIf"], [4, "ngIf"], [1, "p-chip-image", 3, "error", "src", "alt"], [3, "class", "ngClass", 4, "ngIf"], [3, "ngClass"], [1, "p-chip-label"], ["tabindex", "0", "class", "p-chip-remove-icon", "role", "button", 3, "click", "keydown", 4, "ngIf"], ["tabindex", "0", "role", "button", 3, "class", "ngClass", "click", "keydown", 4, "ngIf"], ["tabindex", "0", "role", "button", 3, "class", "click", "keydown", 4, "ngIf"], ["tabindex", "0", "role", "button", 3, "click", "keydown", "ngClass"], ["tabindex", "0", "role", "button", 3, "click", "keydown"], ["tabindex", "0", "role", "button", 1, "p-chip-remove-icon", 3, "click", "keydown"], [4, "ngTemplateOutlet"]],
    template: function Chip_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
        \u0275\u0275template(1, Chip_img_1_Template, 1, 2, "img", 1)(2, Chip_ng_template_2_Template, 1, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(4, Chip_div_4_Template, 2, 2, "div", 2)(5, Chip_ng_container_5_Template, 3, 2, "ng-container", 3);
      }
      if (rf & 2) {
        const iconTemplate_r6 = \u0275\u0275reference(3);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.image)("ngIfElse", iconTemplate_r6);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.label);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.removable);
      }
    },
    dependencies: [CommonModule, NgClass, NgIf, NgTemplateOutlet, TimesCircleIcon, SharedModule],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Chip, [{
    type: Component,
    args: [{
      selector: "p-chip",
      standalone: true,
      imports: [CommonModule, TimesCircleIcon, SharedModule],
      template: `
        <ng-content></ng-content>
        <img class="p-chip-image" [src]="image" *ngIf="image; else iconTemplate" (error)="imageError($event)" [alt]="alt" />
        <ng-template #iconTemplate><span *ngIf="icon" [class]="icon" [ngClass]="'p-chip-icon'" [attr.data-pc-section]="'icon'"></span></ng-template>
        <div class="p-chip-label" *ngIf="label" [attr.data-pc-section]="'label'">{{ label }}</div>
        <ng-container *ngIf="removable">
            <ng-container *ngIf="!removeIconTemplate && !_removeIconTemplate">
                <span
                    tabindex="0"
                    *ngIf="removeIcon"
                    [class]="removeIcon"
                    [ngClass]="'p-chip-remove-icon'"
                    [attr.data-pc-section]="'removeicon'"
                    (click)="close($event)"
                    (keydown)="onKeydown($event)"
                    [attr.aria-label]="removeAriaLabel"
                    role="button"
                ></span>
                <TimesCircleIcon tabindex="0" *ngIf="!removeIcon" [class]="'p-chip-remove-icon'" [attr.data-pc-section]="'removeicon'" (click)="close($event)" (keydown)="onKeydown($event)" [attr.aria-label]="removeAriaLabel" role="button" />
            </ng-container>
            <span *ngIf="removeIconTemplate || _removeIconTemplate" tabindex="0" [attr.data-pc-section]="'removeicon'" class="p-chip-remove-icon" (click)="close($event)" (keydown)="onKeydown($event)" [attr.aria-label]="removeAriaLabel" role="button">
                <ng-template *ngTemplateOutlet="removeIconTemplate || _removeIconTemplate"></ng-template>
            </span>
        </ng-container>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [ChipStyle],
      host: {
        "[class]": "containerClass()",
        "[style]": "style",
        "[style.display]": '!visible && "none"',
        "[attr.data-pc-name]": "'chip'",
        "[attr.aria-label]": "label",
        "[attr.data-pc-section]": "'root'"
      }
    }]
  }], null, {
    label: [{
      type: Input
    }],
    icon: [{
      type: Input
    }],
    image: [{
      type: Input
    }],
    alt: [{
      type: Input
    }],
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    removable: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    removeIcon: [{
      type: Input
    }],
    onRemove: [{
      type: Output
    }],
    onImageError: [{
      type: Output
    }],
    chipProps: [{
      type: Input
    }],
    removeIconTemplate: [{
      type: ContentChild,
      args: ["removeicon", {
        descendants: false
      }]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var ChipModule = class _ChipModule {
  static \u0275fac = function ChipModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ChipModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _ChipModule,
    imports: [Chip, SharedModule],
    exports: [Chip, SharedModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [Chip, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChipModule, [{
    type: NgModule,
    args: [{
      imports: [Chip, SharedModule],
      exports: [Chip, SharedModule]
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-multiselect.mjs
var _c04 = (a0) => ({
  height: a0
});
var _c14 = (a0, a1, a2) => ({
  "p-multiselect-option-selected": a0,
  "p-disabled": a1,
  "p-focus": a2
});
var _c22 = (a0) => ({
  $implicit: a0
});
var _c32 = (a0, a1) => ({
  checked: a0,
  class: a1
});
function MultiSelectItem_ng_container_2_ng_template_1_0_ng_template_0_Template(rf, ctx) {
}
function MultiSelectItem_ng_container_2_ng_template_1_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MultiSelectItem_ng_container_2_ng_template_1_0_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function MultiSelectItem_ng_container_2_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MultiSelectItem_ng_container_2_ng_template_1_0_Template, 1, 0, null, 4);
  }
  if (rf & 2) {
    const klass_r1 = ctx.class;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.itemCheckboxIconTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction2(2, _c32, ctx_r1.selected, klass_r1));
  }
}
function MultiSelectItem_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, MultiSelectItem_ng_container_2_ng_template_1_Template, 1, 5, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementContainerEnd();
  }
}
function MultiSelectItem_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate((tmp_1_0 = ctx_r1.label) !== null && tmp_1_0 !== void 0 ? tmp_1_0 : "empty");
  }
}
function MultiSelectItem_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
var _c42 = ["item"];
var _c52 = ["group"];
var _c62 = ["loader"];
var _c72 = ["header"];
var _c82 = ["filter"];
var _c92 = ["footer"];
var _c102 = ["emptyfilter"];
var _c11 = ["empty"];
var _c122 = ["selecteditems"];
var _c132 = ["checkicon"];
var _c142 = ["loadingicon"];
var _c15 = ["filtericon"];
var _c16 = ["removetokenicon"];
var _c17 = ["chipicon"];
var _c18 = ["clearicon"];
var _c19 = ["dropdownicon"];
var _c20 = ["itemcheckboxicon"];
var _c21 = ["headercheckboxicon"];
var _c222 = ["overlay"];
var _c23 = ["filterInput"];
var _c24 = ["focusInput"];
var _c25 = ["items"];
var _c26 = ["scroller"];
var _c27 = ["lastHiddenFocusableEl"];
var _c28 = ["firstHiddenFocusableEl"];
var _c29 = ["headerCheckbox"];
var _c30 = [[["p-header"]], [["p-footer"]]];
var _c31 = ["p-header", "p-footer"];
var _c322 = () => ({
  class: "p-multiselect-chip-icon"
});
var _c33 = (a0, a1) => ({
  $implicit: a0,
  removeChip: a1
});
var _c34 = (a0) => ({
  options: a0
});
var _c35 = (a0, a1, a2) => ({
  checked: a0,
  partialSelected: a1,
  class: a2
});
var _c36 = (a0, a1) => ({
  $implicit: a0,
  options: a1
});
var _c37 = () => ({});
function MultiSelect_ng_container_5_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.label() || "empty");
  }
}
function MultiSelect_ng_container_5_ng_container_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.getSelectedItemsLabel(), " ");
  }
}
function MultiSelect_ng_container_5_ng_container_2_Conditional_2_div_0_ng_container_3_ng_template_1_ng_container_0_span_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function MultiSelect_ng_container_5_ng_container_2_Conditional_2_div_0_ng_container_3_ng_template_1_ng_container_0_span_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 28);
    \u0275\u0275listener("click", function MultiSelect_ng_container_5_ng_container_2_Conditional_2_div_0_ng_container_3_ng_template_1_ng_container_0_span_1_Template_span_click_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const item_r4 = \u0275\u0275nextContext(4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.removeOption(item_r4, $event));
    });
    \u0275\u0275template(1, MultiSelect_ng_container_5_ng_container_2_Conditional_2_div_0_ng_container_3_ng_template_1_ng_container_0_span_1_ng_container_1_Template, 1, 0, "ng-container", 29);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(8);
    \u0275\u0275attribute("data-pc-section", "clearicon")("aria-hidden", true);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.chipIconTemplate || ctx_r1._chipIconTemplate || ctx_r1.removeTokenIconTemplate || ctx_r1._removeTokenIconTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction0(4, _c322));
  }
}
function MultiSelect_ng_container_5_ng_container_2_Conditional_2_div_0_ng_container_3_ng_template_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, MultiSelect_ng_container_5_ng_container_2_Conditional_2_div_0_ng_container_3_ng_template_1_ng_container_0_span_1_Template, 2, 5, "span", 27);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(7);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.chipIconTemplate || ctx_r1._chipIconTemplate || ctx_r1.removeTokenIconTemplate || ctx_r1._removeTokenIconTemplate);
  }
}
function MultiSelect_ng_container_5_ng_container_2_Conditional_2_div_0_ng_container_3_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MultiSelect_ng_container_5_ng_container_2_Conditional_2_div_0_ng_container_3_ng_template_1_ng_container_0_Template, 2, 1, "ng-container", 20);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(6);
    \u0275\u0275property("ngIf", !ctx_r1.disabled && !ctx_r1.readonly);
  }
}
function MultiSelect_ng_container_5_ng_container_2_Conditional_2_div_0_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, MultiSelect_ng_container_5_ng_container_2_Conditional_2_div_0_ng_container_3_ng_template_1_Template, 1, 1, "ng-template", null, 5, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementContainerEnd();
  }
}
function MultiSelect_ng_container_5_ng_container_2_Conditional_2_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 24, 4)(2, "p-chip", 26);
    \u0275\u0275listener("onRemove", function MultiSelect_ng_container_5_ng_container_2_Conditional_2_div_0_Template_p_chip_onRemove_2_listener($event) {
      const item_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.removeOption(item_r4, $event));
    });
    \u0275\u0275template(3, MultiSelect_ng_container_5_ng_container_2_Conditional_2_div_0_ng_container_3_Template, 3, 0, "ng-container", 20);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275property("label", ctx_r1.getLabelByValue(item_r4))("removable", !ctx_r1.disabled && !ctx_r1.readonly)("removeIcon", ctx_r1.chipIcon);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.chipIconTemplate || ctx_r1._chipIconTemplate || ctx_r1.removeTokenIconTemplate || ctx_r1._removeTokenIconTemplate);
  }
}
function MultiSelect_ng_container_5_ng_container_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MultiSelect_ng_container_5_ng_container_2_Conditional_2_div_0_Template, 4, 4, "div", 25);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngForOf", ctx_r1.chipSelectedItems());
  }
}
function MultiSelect_ng_container_5_ng_container_2_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.placeholder() || ctx_r1.defaultLabel || "empty");
  }
}
function MultiSelect_ng_container_5_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, MultiSelect_ng_container_5_ng_container_2_Conditional_1_Template, 1, 1)(2, MultiSelect_ng_container_5_ng_container_2_Conditional_2_Template, 1, 1, "div", 24)(3, MultiSelect_ng_container_5_ng_container_2_ng_container_3_Template, 2, 1, "ng-container", 20);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.chipSelectedItems() && ctx_r1.chipSelectedItems().length === ctx_r1.maxSelectedLabels ? 1 : 2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r1.modelValue() || ctx_r1.modelValue().length === 0);
  }
}
function MultiSelect_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, MultiSelect_ng_container_5_ng_container_1_Template, 2, 1, "ng-container", 20)(2, MultiSelect_ng_container_5_ng_container_2_Template, 4, 2, "ng-container", 20);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.display === "comma");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.display === "chip");
  }
}
function MultiSelect_ng_container_6_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function MultiSelect_ng_container_6_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.placeholder() || ctx_r1.defaultLabel || "empty");
  }
}
function MultiSelect_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, MultiSelect_ng_container_6_ng_container_1_Template, 1, 0, "ng-container", 29)(2, MultiSelect_ng_container_6_ng_container_2_Template, 2, 1, "ng-container", 20);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.selectedItemsTemplate || ctx_r1._selectedItemsTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction2(3, _c33, ctx_r1.selectedOptions, ctx_r1.removeOption.bind(ctx_r1)));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.modelValue() || ctx_r1.modelValue().length === 0);
  }
}
function MultiSelect_ng_container_7_TimesIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "TimesIcon", 31);
    \u0275\u0275listener("click", function MultiSelect_ng_container_7_TimesIcon_1_Template_TimesIcon_click_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.clear($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275attribute("data-pc-section", "clearicon")("aria-hidden", true);
  }
}
function MultiSelect_ng_container_7_span_2_1_ng_template_0_Template(rf, ctx) {
}
function MultiSelect_ng_container_7_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MultiSelect_ng_container_7_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function MultiSelect_ng_container_7_span_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 31);
    \u0275\u0275listener("click", function MultiSelect_ng_container_7_span_2_Template_span_click_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.clear($event));
    });
    \u0275\u0275template(1, MultiSelect_ng_container_7_span_2_1_Template, 1, 0, null, 32);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275attribute("data-pc-section", "clearicon")("aria-hidden", true);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.clearIconTemplate || ctx_r1._clearIconTemplate);
  }
}
function MultiSelect_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, MultiSelect_ng_container_7_TimesIcon_1_Template, 1, 2, "TimesIcon", 30)(2, MultiSelect_ng_container_7_span_2_Template, 2, 3, "span", 30);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.clearIconTemplate && !ctx_r1._clearIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.clearIconTemplate || ctx_r1._clearIconTemplate);
  }
}
function MultiSelect_ng_container_9_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function MultiSelect_ng_container_9_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, MultiSelect_ng_container_9_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 32);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.loadingIconTemplate || ctx_r1._loadingIconTemplate);
  }
}
function MultiSelect_ng_container_9_ng_container_2_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 35);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngClass", "p-multiselect-loading-icon pi-spin " + ctx_r1.loadingIcon);
  }
}
function MultiSelect_ng_container_9_ng_container_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 36);
  }
  if (rf & 2) {
    \u0275\u0275classMap("p-multiselect-loading-icon pi pi-spinner pi-spin");
  }
}
function MultiSelect_ng_container_9_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, MultiSelect_ng_container_9_ng_container_2_span_1_Template, 1, 1, "span", 33)(2, MultiSelect_ng_container_9_ng_container_2_span_2_Template, 1, 2, "span", 34);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.loadingIcon);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loadingIcon);
  }
}
function MultiSelect_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, MultiSelect_ng_container_9_ng_container_1_Template, 2, 1, "ng-container", 20)(2, MultiSelect_ng_container_9_ng_container_2_Template, 3, 2, "ng-container", 20);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.loadingIconTemplate || ctx_r1._loadingIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loadingIconTemplate && !ctx_r1._loadingIconTemplate);
  }
}
function MultiSelect_ng_template_10_ng_container_0_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 40);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngClass", ctx_r1.dropdownIcon);
    \u0275\u0275attribute("data-pc-section", "triggericon")("aria-hidden", true);
  }
}
function MultiSelect_ng_template_10_ng_container_0_ChevronDownIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ChevronDownIcon", 41);
  }
  if (rf & 2) {
    \u0275\u0275property("styleClass", "p-multiselect-dropdown-icon");
    \u0275\u0275attribute("data-pc-section", "triggericon")("aria-hidden", true);
  }
}
function MultiSelect_ng_template_10_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, MultiSelect_ng_template_10_ng_container_0_span_1_Template, 1, 3, "span", 38)(2, MultiSelect_ng_template_10_ng_container_0_ChevronDownIcon_2_Template, 1, 3, "ChevronDownIcon", 39);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.dropdownIcon);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.dropdownIcon);
  }
}
function MultiSelect_ng_template_10_span_1_1_ng_template_0_Template(rf, ctx) {
}
function MultiSelect_ng_template_10_span_1_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MultiSelect_ng_template_10_span_1_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function MultiSelect_ng_template_10_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 42);
    \u0275\u0275template(1, MultiSelect_ng_template_10_span_1_1_Template, 1, 0, null, 32);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275attribute("data-pc-section", "triggericon")("aria-hidden", true);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.dropdownIconTemplate || ctx_r1._dropdownIconTemplate);
  }
}
function MultiSelect_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MultiSelect_ng_template_10_ng_container_0_Template, 3, 2, "ng-container", 20)(1, MultiSelect_ng_template_10_span_1_Template, 2, 3, "span", 37);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngIf", !ctx_r1.dropdownIconTemplate && !ctx_r1._dropdownIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.dropdownIconTemplate || ctx_r1._dropdownIconTemplate);
  }
}
function MultiSelect_ng_template_14_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function MultiSelect_ng_template_14_div_4_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function MultiSelect_ng_template_14_div_4_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, MultiSelect_ng_template_14_div_4_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 29);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.filterTemplate || ctx_r1._filterTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c34, ctx_r1.filterOptions));
  }
}
function MultiSelect_ng_template_14_div_4_ng_template_3_p_checkbox_0_ng_template_2_CheckIcon_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "CheckIcon", 41);
  }
  if (rf & 2) {
    const klass_r10 = \u0275\u0275nextContext().class;
    \u0275\u0275property("styleClass", klass_r10);
    \u0275\u0275attribute("data-pc-section", "icon");
  }
}
function MultiSelect_ng_template_14_div_4_ng_template_3_p_checkbox_0_ng_template_2_1_ng_template_0_Template(rf, ctx) {
}
function MultiSelect_ng_template_14_div_4_ng_template_3_p_checkbox_0_ng_template_2_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MultiSelect_ng_template_14_div_4_ng_template_3_p_checkbox_0_ng_template_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function MultiSelect_ng_template_14_div_4_ng_template_3_p_checkbox_0_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MultiSelect_ng_template_14_div_4_ng_template_3_p_checkbox_0_ng_template_2_CheckIcon_0_Template, 1, 2, "CheckIcon", 39)(1, MultiSelect_ng_template_14_div_4_ng_template_3_p_checkbox_0_ng_template_2_1_Template, 1, 0, null, 29);
  }
  if (rf & 2) {
    const klass_r10 = ctx.class;
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275property("ngIf", !ctx_r1.headerCheckboxIconTemplate && !ctx_r1._headerCheckboxIconTemplate && ctx_r1.allSelected());
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.headerCheckboxIconTemplate || ctx_r1._headerCheckboxIconTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction3(3, _c35, ctx_r1.allSelected(), ctx_r1.partialSelected(), klass_r10));
  }
}
function MultiSelect_ng_template_14_div_4_ng_template_3_p_checkbox_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-checkbox", 51, 10);
    \u0275\u0275listener("onChange", function MultiSelect_ng_template_14_div_4_ng_template_3_p_checkbox_0_Template_p_checkbox_onChange_0_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.onToggleAll($event));
    });
    \u0275\u0275template(2, MultiSelect_ng_template_14_div_4_ng_template_3_p_checkbox_0_ng_template_2_Template, 2, 7, "ng-template", null, 11, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("ngModel", ctx_r1.allSelected())("ariaLabel", ctx_r1.toggleAllAriaLabel)("binary", true)("variant", ctx_r1.variant)("disabled", ctx_r1.disabled);
  }
}
function MultiSelect_ng_template_14_div_4_ng_template_3_div_1_SearchIcon_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "SearchIcon", 41);
  }
  if (rf & 2) {
    \u0275\u0275property("styleClass", "p-multiselect-filter-icon");
  }
}
function MultiSelect_ng_template_14_div_4_ng_template_3_div_1_span_6_1_ng_template_0_Template(rf, ctx) {
}
function MultiSelect_ng_template_14_div_4_ng_template_3_div_1_span_6_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MultiSelect_ng_template_14_div_4_ng_template_3_div_1_span_6_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function MultiSelect_ng_template_14_div_4_ng_template_3_div_1_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 55);
    \u0275\u0275template(1, MultiSelect_ng_template_14_div_4_ng_template_3_div_1_span_6_1_Template, 1, 0, null, 32);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.filterIconTemplate || ctx_r1._filterIconTemplate);
  }
}
function MultiSelect_ng_template_14_div_4_ng_template_3_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 52)(1, "p-iconfield")(2, "input", 53, 12);
    \u0275\u0275listener("input", function MultiSelect_ng_template_14_div_4_ng_template_3_div_1_Template_input_input_2_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.onFilterInputChange($event));
    })("keydown", function MultiSelect_ng_template_14_div_4_ng_template_3_div_1_Template_input_keydown_2_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.onFilterKeyDown($event));
    })("click", function MultiSelect_ng_template_14_div_4_ng_template_3_div_1_Template_input_click_2_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.onInputClick($event));
    })("blur", function MultiSelect_ng_template_14_div_4_ng_template_3_div_1_Template_input_blur_2_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.onFilterBlur($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p-inputicon");
    \u0275\u0275template(5, MultiSelect_ng_template_14_div_4_ng_template_3_div_1_SearchIcon_5_Template, 1, 1, "SearchIcon", 39)(6, MultiSelect_ng_template_14_div_4_ng_template_3_div_1_span_6_Template, 2, 1, "span", 54);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275property("variant", ctx_r1.variant)("value", ctx_r1._filterValue() || "")("disabled", ctx_r1.disabled);
    \u0275\u0275attribute("autocomplete", ctx_r1.autocomplete)("aria-owns", ctx_r1.id + "_list")("aria-activedescendant", ctx_r1.focusedOptionId)("placeholder", ctx_r1.filterPlaceHolder)("aria-label", ctx_r1.ariaFilterLabel);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !ctx_r1.filterIconTemplate && !ctx_r1._filterIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.filterIconTemplate || ctx_r1._filterIconTemplate);
  }
}
function MultiSelect_ng_template_14_div_4_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MultiSelect_ng_template_14_div_4_ng_template_3_p_checkbox_0_Template, 4, 5, "p-checkbox", 49)(1, MultiSelect_ng_template_14_div_4_ng_template_3_div_1_Template, 7, 10, "div", 50);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngIf", ctx_r1.showToggleAll && !ctx_r1.selectionLimit);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.filter);
  }
}
function MultiSelect_ng_template_14_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48);
    \u0275\u0275projection(1);
    \u0275\u0275template(2, MultiSelect_ng_template_14_div_4_ng_container_2_Template, 2, 4, "ng-container", 22)(3, MultiSelect_ng_template_14_div_4_ng_template_3_Template, 2, 2, "ng-template", null, 9, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const builtInFilterElement_r12 = \u0275\u0275reference(4);
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.filterTemplate || ctx_r1._filterTemplate)("ngIfElse", builtInFilterElement_r12);
  }
}
function MultiSelect_ng_template_14_p_scroller_6_ng_template_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function MultiSelect_ng_template_14_p_scroller_6_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MultiSelect_ng_template_14_p_scroller_6_ng_template_2_ng_container_0_Template, 1, 0, "ng-container", 29);
  }
  if (rf & 2) {
    const items_r14 = ctx.$implicit;
    const scrollerOptions_r15 = ctx.options;
    \u0275\u0275nextContext(2);
    const buildInItems_r16 = \u0275\u0275reference(9);
    \u0275\u0275property("ngTemplateOutlet", buildInItems_r16)("ngTemplateOutletContext", \u0275\u0275pureFunction2(2, _c36, items_r14, scrollerOptions_r15));
  }
}
function MultiSelect_ng_template_14_p_scroller_6_ng_container_4_ng_template_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function MultiSelect_ng_template_14_p_scroller_6_ng_container_4_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MultiSelect_ng_template_14_p_scroller_6_ng_container_4_ng_template_1_ng_container_0_Template, 1, 0, "ng-container", 29);
  }
  if (rf & 2) {
    const scrollerOptions_r17 = ctx.options;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.loaderTemplate || ctx_r1._loaderTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c34, scrollerOptions_r17));
  }
}
function MultiSelect_ng_template_14_p_scroller_6_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, MultiSelect_ng_template_14_p_scroller_6_ng_container_4_ng_template_1_Template, 1, 4, "ng-template", null, 14, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementContainerEnd();
  }
}
function MultiSelect_ng_template_14_p_scroller_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-scroller", 56, 13);
    \u0275\u0275listener("onLazyLoad", function MultiSelect_ng_template_14_p_scroller_6_Template_p_scroller_onLazyLoad_0_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onLazyLoad.emit($event));
    });
    \u0275\u0275template(2, MultiSelect_ng_template_14_p_scroller_6_ng_template_2_Template, 1, 5, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(4, MultiSelect_ng_template_14_p_scroller_6_ng_container_4_Template, 3, 0, "ng-container", 20);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275styleMap(\u0275\u0275pureFunction1(9, _c04, ctx_r1.scrollHeight));
    \u0275\u0275property("items", ctx_r1.visibleOptions())("itemSize", ctx_r1.virtualScrollItemSize || ctx_r1._itemSize)("autoSize", true)("tabindex", -1)("lazy", ctx_r1.lazy)("options", ctx_r1.virtualScrollOptions);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.loaderTemplate || ctx_r1._loaderTemplate);
  }
}
function MultiSelect_ng_template_14_ng_container_7_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function MultiSelect_ng_template_14_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, MultiSelect_ng_template_14_ng_container_7_ng_container_1_Template, 1, 0, "ng-container", 29);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const buildInItems_r16 = \u0275\u0275reference(9);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", buildInItems_r16)("ngTemplateOutletContext", \u0275\u0275pureFunction2(3, _c36, ctx_r1.visibleOptions(), \u0275\u0275pureFunction0(2, _c37)));
  }
}
function MultiSelect_ng_template_14_ng_template_8_ng_template_2_ng_container_0_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r18 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getOptionGroupLabel(option_r18.optionGroup));
  }
}
function MultiSelect_ng_template_14_ng_template_8_ng_template_2_ng_container_0_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function MultiSelect_ng_template_14_ng_template_8_ng_template_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "li", 60);
    \u0275\u0275template(2, MultiSelect_ng_template_14_ng_template_8_ng_template_2_ng_container_0_span_2_Template, 2, 1, "span", 20)(3, MultiSelect_ng_template_14_ng_template_8_ng_template_2_ng_container_0_ng_container_3_Template, 1, 0, "ng-container", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r18 = \u0275\u0275nextContext();
    const option_r18 = ctx_r18.$implicit;
    const i_r20 = ctx_r18.index;
    const scrollerOptions_r21 = \u0275\u0275nextContext().options;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(5, _c04, scrollerOptions_r21.itemSize + "px"));
    \u0275\u0275attribute("id", ctx_r1.id + "_" + ctx_r1.getOptionIndex(i_r20, scrollerOptions_r21));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.groupTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.groupTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(7, _c22, option_r18.optionGroup));
  }
}
function MultiSelect_ng_template_14_ng_template_8_ng_template_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "p-multiselect-item", 61);
    \u0275\u0275listener("onClick", function MultiSelect_ng_template_14_ng_template_8_ng_template_2_ng_container_1_Template_p_multiselect_item_onClick_1_listener($event) {
      \u0275\u0275restoreView(_r22);
      const i_r20 = \u0275\u0275nextContext().index;
      const scrollerOptions_r21 = \u0275\u0275nextContext().options;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onOptionSelect($event, false, ctx_r1.getOptionIndex(i_r20, scrollerOptions_r21)));
    })("onMouseEnter", function MultiSelect_ng_template_14_ng_template_8_ng_template_2_ng_container_1_Template_p_multiselect_item_onMouseEnter_1_listener($event) {
      \u0275\u0275restoreView(_r22);
      const i_r20 = \u0275\u0275nextContext().index;
      const scrollerOptions_r21 = \u0275\u0275nextContext().options;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onOptionMouseEnter($event, ctx_r1.getOptionIndex(i_r20, scrollerOptions_r21)));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r18 = \u0275\u0275nextContext();
    const option_r18 = ctx_r18.$implicit;
    const i_r20 = ctx_r18.index;
    const scrollerOptions_r21 = \u0275\u0275nextContext().options;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("id", ctx_r1.id + "_" + ctx_r1.getOptionIndex(i_r20, scrollerOptions_r21))("option", option_r18)("selected", ctx_r1.isSelected(option_r18))("label", ctx_r1.getOptionLabel(option_r18))("disabled", ctx_r1.isOptionDisabled(option_r18))("template", ctx_r1.itemTemplate || ctx_r1._itemTemplate)("checkIconTemplate", ctx_r1.checkIconTemplate || ctx_r1._checkIconTemplate)("itemCheckboxIconTemplate", ctx_r1.itemCheckboxIconTemplate || ctx_r1._itemCheckboxIconTemplate)("itemSize", scrollerOptions_r21.itemSize)("focused", ctx_r1.focusedOptionIndex() === ctx_r1.getOptionIndex(i_r20, scrollerOptions_r21))("ariaPosInset", ctx_r1.getAriaPosInset(ctx_r1.getOptionIndex(i_r20, scrollerOptions_r21)))("ariaSetSize", ctx_r1.ariaSetSize)("variant", ctx_r1.variant)("highlightOnSelect", ctx_r1.highlightOnSelect);
  }
}
function MultiSelect_ng_template_14_ng_template_8_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MultiSelect_ng_template_14_ng_template_8_ng_template_2_ng_container_0_Template, 4, 9, "ng-container", 20)(1, MultiSelect_ng_template_14_ng_template_8_ng_template_2_ng_container_1_Template, 2, 14, "ng-container", 20);
  }
  if (rf & 2) {
    const option_r18 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngIf", ctx_r1.isOptionGroup(option_r18));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isOptionGroup(option_r18));
  }
}
function MultiSelect_ng_template_14_ng_template_8_li_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.emptyFilterMessageLabel, " ");
  }
}
function MultiSelect_ng_template_14_ng_template_8_li_3_Conditional_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function MultiSelect_ng_template_14_ng_template_8_li_3_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MultiSelect_ng_template_14_ng_template_8_li_3_Conditional_2_ng_container_0_Template, 1, 0, "ng-container", 32);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.emptyFilterTemplate || ctx_r1._emptyFilterTemplate || ctx_r1.emptyTemplate || ctx_r1._emptyFilterTemplate);
  }
}
function MultiSelect_ng_template_14_ng_template_8_li_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 62);
    \u0275\u0275template(1, MultiSelect_ng_template_14_ng_template_8_li_3_Conditional_1_Template, 1, 1)(2, MultiSelect_ng_template_14_ng_template_8_li_3_Conditional_2_Template, 1, 1, "ng-container");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const scrollerOptions_r21 = \u0275\u0275nextContext().options;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(2, _c04, scrollerOptions_r21.itemSize + "px"));
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.emptyFilterTemplate && !ctx_r1._emptyFilterTemplate && !ctx_r1.emptyTemplate && !ctx_r1._emptyTemplate ? 1 : 2);
  }
}
function MultiSelect_ng_template_14_ng_template_8_li_4_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.emptyMessageLabel, " ");
  }
}
function MultiSelect_ng_template_14_ng_template_8_li_4_Conditional_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function MultiSelect_ng_template_14_ng_template_8_li_4_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MultiSelect_ng_template_14_ng_template_8_li_4_Conditional_2_ng_container_0_Template, 1, 0, "ng-container", 32);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.emptyTemplate || ctx_r1._emptyTemplate);
  }
}
function MultiSelect_ng_template_14_ng_template_8_li_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 62);
    \u0275\u0275template(1, MultiSelect_ng_template_14_ng_template_8_li_4_Conditional_1_Template, 1, 1)(2, MultiSelect_ng_template_14_ng_template_8_li_4_Conditional_2_Template, 1, 1, "ng-container");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const scrollerOptions_r21 = \u0275\u0275nextContext().options;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(2, _c04, scrollerOptions_r21.itemSize + "px"));
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.emptyTemplate && !ctx_r1._emptyTemplate ? 1 : 2);
  }
}
function MultiSelect_ng_template_14_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 57, 15);
    \u0275\u0275template(2, MultiSelect_ng_template_14_ng_template_8_ng_template_2_Template, 2, 2, "ng-template", 58)(3, MultiSelect_ng_template_14_ng_template_8_li_3_Template, 3, 4, "li", 59)(4, MultiSelect_ng_template_14_ng_template_8_li_4_Template, 3, 4, "li", 59);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const items_r23 = ctx.$implicit;
    const scrollerOptions_r21 = ctx.options;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275styleMap(scrollerOptions_r21.contentStyle);
    \u0275\u0275property("ngClass", scrollerOptions_r21.contentStyleClass);
    \u0275\u0275attribute("aria-label", ctx_r1.listLabel);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", items_r23);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.hasFilter() && ctx_r1.isEmpty());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.hasFilter() && ctx_r1.isEmpty());
  }
}
function MultiSelect_ng_template_14_div_10_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function MultiSelect_ng_template_14_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275projection(1, 1);
    \u0275\u0275template(2, MultiSelect_ng_template_14_div_10_ng_container_2_Template, 1, 0, "ng-container", 32);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.footerTemplate || ctx_r1._footerTemplate);
  }
}
function MultiSelect_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 43)(1, "span", 44, 6);
    \u0275\u0275listener("focus", function MultiSelect_ng_template_14_Template_span_focus_1_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onFirstHiddenFocus($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, MultiSelect_ng_template_14_ng_container_3_Template, 1, 0, "ng-container", 32)(4, MultiSelect_ng_template_14_div_4_Template, 5, 2, "div", 45);
    \u0275\u0275elementStart(5, "div", 46);
    \u0275\u0275template(6, MultiSelect_ng_template_14_p_scroller_6_Template, 5, 11, "p-scroller", 47)(7, MultiSelect_ng_template_14_ng_container_7_Template, 2, 6, "ng-container", 20)(8, MultiSelect_ng_template_14_ng_template_8_Template, 5, 7, "ng-template", null, 7, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, MultiSelect_ng_template_14_div_10_Template, 3, 1, "div", 20);
    \u0275\u0275elementStart(11, "span", 44, 8);
    \u0275\u0275listener("focus", function MultiSelect_ng_template_14_Template_span_focus_11_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onLastHiddenFocus($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r1.panelStyleClass);
    \u0275\u0275property("ngClass", "p-multiselect-overlay p-component")("ngStyle", ctx_r1.panelStyle);
    \u0275\u0275attribute("id", ctx_r1.id + "_list");
    \u0275\u0275advance();
    \u0275\u0275attribute("tabindex", 0)("data-p-hidden-accessible", true)("data-p-hidden-focusable", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.headerTemplate || ctx_r1._headerTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showHeader);
    \u0275\u0275advance();
    \u0275\u0275styleProp("max-height", ctx_r1.virtualScroll ? "auto" : ctx_r1.scrollHeight || "auto");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.virtualScroll);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.virtualScroll);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.footerFacet || ctx_r1.footerTemplate || ctx_r1._footerTemplate);
    \u0275\u0275advance();
    \u0275\u0275attribute("tabindex", 0)("data-p-hidden-accessible", true)("data-p-hidden-focusable", true);
  }
}
var theme4 = ({
  dt
}) => `
.p-multiselect {
    display: inline-flex;
    cursor: pointer;
    position: relative;
    user-select: none;
    background: ${dt("multiselect.background")};
    border: 1px solid ${dt("multiselect.border.color")};
    transition: background ${dt("multiselect.transition.duration")}, color ${dt("multiselect.transition.duration")}, border-color ${dt("multiselect.transition.duration")}, outline-color ${dt("multiselect.transition.duration")}, box-shadow ${dt("multiselect.transition.duration")};
    border-radius: ${dt("multiselect.border.radius")};
    outline-color: transparent;
    box-shadow: ${dt("multiselect.shadow")};
}

.p-multiselect.ng-invalid.ng-dirty {
    border-color: ${dt("multiselect.invalid.border.color")};
}

.p-multiselect:not(.p-disabled):hover {
    border-color: ${dt("multiselect.hover.border.color")};
}

.p-multiselect:not(.p-disabled).p-focus {
    border-color: ${dt("multiselect.focus.border.color")};
    box-shadow: ${dt("multiselect.focus.ring.shadow")};
    outline: ${dt("multiselect.focus.ring.width")} ${dt("multiselect.focus.ring.style")} ${dt("multiselect.focus.ring.color")};
    outline-offset: ${dt("multiselect.focus.ring.offset")};
}

.p-multiselect.p-variant-filled {
    background: ${dt("multiselect.filled.background")};
}

.p-multiselect.p-variant-filled:not(.p-disabled):hover {
    background: ${dt("multiselect.filled.hover.background")};
}

.p-multiselect.p-variant-filled.p-focus {
    background: ${dt("multiselect.filled.focus.background")};
}

.p-multiselect.p-disabled {
    opacity: 1;
    background: ${dt("multiselect.disabled.background")};
}

.p-multiselect-dropdown {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    background: transparent;
    color: ${dt("multiselect.dropdown.color")};
    width: ${dt("multiselect.dropdown.width")};
    border-start-end-radius: ${dt("multiselect.border.radius")};
    border-end-end-radius: ${dt("multiselect.border.radius")};
}

.p-multiselect-label-container {
    overflow: hidden;
    flex: 1 1 auto;
    cursor: pointer;
}

.p-multiselect-label {
    white-space: nowrap;
    cursor: pointer;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: ${dt("multiselect.padding.y")} ${dt("multiselect.padding.x")};
    color: ${dt("multiselect.color")};
}

.p-multiselect-display-chip .p-multiselect-label {
    display: flex;
    align-items: center;
    gap: calc(dt('multiselect.padding.y') / 2);
}

.p-multiselect-label.p-placeholder {
    color: ${dt("multiselect.placeholder.color")};
}

p-multiSelect.ng-invalid.ng-dirty .p-multiselect-label.p-placeholder,
p-multi-select.ng-invalid.ng-dirty .p-multiselect-label.p-placeholder,
p-multiselect.ng-invalid.ng-dirty .p-multiselect-label.p-placeholder {
    color: ${dt("multiselect.invalid.placeholder.color")};
}

.p-multiselect.p-disabled .p-multiselect-label {
    color: ${dt("multiselect.disabled.color")};
}

.p-multiselect-label-empty {
    overflow: hidden;
    visibility: hidden;
}

.p-multiselect .p-multiselect-overlay {
    min-width: 100%;
}

.p-multiselect-overlay {
    background: ${dt("multiselect.overlay.background")};
    color: ${dt("multiselect.overlay.color")};
    border: 1px solid ${dt("multiselect.overlay.border.color")};
    border-radius: ${dt("multiselect.overlay.border.radius")};
    box-shadow: ${dt("multiselect.overlay.shadow")};
}

.p-multiselect-header {
    display: flex;
    align-items: center;
    padding: ${dt("multiselect.list.header.padding")};
}

.p-multiselect-header .p-checkbox {
    margin-inline-end: ${dt("multiselect.option.gap")};
}

.p-multiselect-filter-container {
    flex: 1 1 auto;
}

.p-multiselect-filter {
    width: 100%;
}

.p-multiselect-list-container {
    overflow: auto;
}

.p-multiselect-list {
    margin: 0;
    padding: 0;
    list-style-type: none;
    padding: ${dt("multiselect.list.padding")};
    display: flex;
    flex-direction: column;
    gap: ${dt("multiselect.list.gap")}
}

.p-multiselect-option {
    cursor: pointer;
    font-weight: normal;
    white-space: nowrap;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    gap: ${dt("multiselect.option.gap")};
    padding: ${dt("multiselect.option.padding")};
    border: 0 none;
    color: ${dt("multiselect.option.color")};
    background: transparent;
    transition: background ${dt("multiselect.transition.duration")}, color ${dt("multiselect.transition.duration")}, border-color ${dt("multiselect.transition.duration")}, box-shadow ${dt("multiselect.transition.duration")}, outline-color ${dt("multiselect.transition.duration")};
    border-radius: ${dt("multiselect.option.border.radius")}
}

.p-multiselect-option:not(.p-multiselect-option-selected):not(.p-disabled).p-focus {
    background: ${dt("multiselect.option.focus.background")};
    color: ${dt("multiselect.option.focus.color")};
}

.p-multiselect-option.p-multiselect-option-selected {
    background: ${dt("multiselect.option.selected.background")};
    color: ${dt("multiselect.option.selected.color")};
}

.p-multiselect-option.p-multiselect-option-selected.p-focus {
    background: ${dt("multiselect.option.selected.focus.background")};
    color: ${dt("multiselect.option.selected.focus.color")};
}

.p-multiselect-option-group {
    cursor: auto;
    margin: 0;
    padding: ${dt("multiselect.option.group.padding")};
    background: ${dt("multiselect.option.group.background")};
    color: ${dt("multiselect.option.group.color")};
    font-weight: ${dt("multiselect.option.group.font.weight")};
}

.p-multiselect-empty-message {
    padding: ${dt("multiselect.empty.message.padding")};
}

.p-multiselect-label .p-chip {
    padding-top: calc(${dt("multiselect.padding.y")} / 2);
    padding-bottom: calc(${dt("multiselect.padding.y")} / 2);
    border-radius: ${dt("multiselect.chip.border.radius")};
}

.p-multiselect-label:has(.p-chip) {
    padding: calc(${dt("multiselect.padding.y")} / 2) calc(${dt("multiselect.padding.x")} / 2);
}

.p-multiselect-fluid {
    display: flex;
}

.p-multiselect-sm .p-multiselect-label {
    font-size: ${dt("multiselect.sm.font.size")};
    padding-block: ${dt("multiselect.sm.padding.y")};
    padding-inline: ${dt("multiselect.sm.padding.x")};
}

.p-multiselect-sm .p-multiselect-dropdown .p-icon {
    font-size: ${dt("multiselect.sm.font.size")};
    width: ${dt("multiselect.sm.font.size")};
    height: ${dt("multiselect.sm.font.size")};
}

.p-multiselect-lg .p-multiselect-label {
    font-size: ${dt("multiselect.lg.font.size")};
    padding-block: ${dt("multiselect.lg.padding.y")};
    padding-inline: ${dt("multiselect.lg.padding.x")};
}

.p-multiselect-lg .p-multiselect-dropdown .p-icon {
    font-size: ${dt("multiselect.lg.font.size")};
    width: ${dt("multiselect.lg.font.size")};
    height: ${dt("multiselect.lg.font.size")};
}

.p-multiselect-clear-icon {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    background: transparent;
    color: ${dt("multiselect.clear.icon.color")};
}`;
var inlineStyles = {
  root: ({
    props
  }) => ({
    position: props.appendTo === "self" ? "relative" : void 0
  })
};
var classes4 = {
  root: ({
    instance
  }) => ({
    "p-multiselect p-component p-inputwrapper": true,
    "p-multiselect-display-chip": instance.display === "chip",
    "p-disabled": instance.disabled,
    "p-invalid": instance.invalid,
    "p-variant-filled": instance.variant ? instance.variant === "filled" : instance.config.inputStyle === "filled",
    "p-focus": instance.focused,
    "p-inputwrapper-filled": instance.filled,
    "p-inputwrapper-focus": instance.focused || instance.overlayVisible,
    "p-multiselect-open": instance.overlayVisible,
    "p-multiselect-fluid": instance.hasFluid,
    "p-multiselect-sm p-inputfield-sm": instance.size === "small",
    "p-multiselect-lg p-inputfield-lg": instance.size === "large"
  }),
  labelContainer: "p-multiselect-label-container",
  label: ({
    instance
  }) => ({
    "p-multiselect-label": true,
    "p-placeholder": instance.label() === instance.placeholder(),
    "p-multiselect-label-empty": !instance.placeholder() && !instance.defaultLabel && (!instance.modelValue() || instance.modelValue().length === 0)
  }),
  chipItem: "p-multiselect-chip-item",
  pcChip: "p-multiselect-chip",
  chipIcon: "p-multiselect-chip-icon",
  dropdown: "p-multiselect-dropdown",
  loadingIcon: "p-multiselect-loading-icon",
  dropdownIcon: "p-multiselect-dropdown-icon",
  overlay: "p-multiselect-overlay p-component",
  header: "p-multiselect-header",
  pcFilterContainer: "p-multiselect-filter-container",
  pcFilter: "p-multiselect-filter",
  listContainer: "p-multiselect-list-container",
  list: "p-multiselect-list",
  optionGroup: "p-multiselect-option-group",
  option: ({
    instance,
    option,
    index,
    getItemOptions
  }) => ({
    "p-multiselect-option": true,
    "p-multiselect-option-selected": instance.isSelected(option) && instance.highlightOnSelect,
    "p-focus": instance.focusedOptionIndex === instance.getOptionIndex(index, getItemOptions),
    "p-disabled": instance.isOptionDisabled(option)
  }),
  emptyMessage: "p-multiselect-empty-message"
};
var MultiSelectStyle = class _MultiSelectStyle extends BaseStyle {
  name = "multiselect";
  theme = theme4;
  classes = classes4;
  inlineStyles = inlineStyles;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MultiSelectStyle_BaseFactory;
    return function MultiSelectStyle_Factory(__ngFactoryType__) {
      return (\u0275MultiSelectStyle_BaseFactory || (\u0275MultiSelectStyle_BaseFactory = \u0275\u0275getInheritedFactory(_MultiSelectStyle)))(__ngFactoryType__ || _MultiSelectStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _MultiSelectStyle,
    factory: _MultiSelectStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MultiSelectStyle, [{
    type: Injectable
  }], null, null);
})();
var MultiSelectClasses;
(function(MultiSelectClasses2) {
  MultiSelectClasses2["root"] = "p-multiselect";
  MultiSelectClasses2["labelContainer"] = "p-multiselect-label-container";
  MultiSelectClasses2["label"] = "p-multiselect-label";
  MultiSelectClasses2["chipItem"] = "p-multiselect-chip-item";
  MultiSelectClasses2["pcChip"] = "p-multiselect-chip";
  MultiSelectClasses2["chipIcon"] = "p-multiselect-chip-icon";
  MultiSelectClasses2["dropdown"] = "p-multiselect-dropdown";
  MultiSelectClasses2["loadingIcon"] = "p-multiselect-loading-icon";
  MultiSelectClasses2["dropdownIcon"] = "p-multiselect-dropdown-icon";
  MultiSelectClasses2["overlay"] = "p-multiselect-overlay";
  MultiSelectClasses2["header"] = "p-multiselect-header";
  MultiSelectClasses2["pcFilterContainer"] = "p-multiselect-filter-container";
  MultiSelectClasses2["pcFilter"] = "p-multiselect-filter";
  MultiSelectClasses2["listContainer"] = "p-multiselect-list-container";
  MultiSelectClasses2["list"] = "p-multiselect-list";
  MultiSelectClasses2["optionGroup"] = "p-multiselect-option-group";
  MultiSelectClasses2["option"] = "p-multiselect-option";
  MultiSelectClasses2["emptyMessage"] = "p-multiselect-empty-message";
})(MultiSelectClasses || (MultiSelectClasses = {}));
var MULTISELECT_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => MultiSelect),
  multi: true
};
var MultiSelectItem = class _MultiSelectItem extends BaseComponent {
  id;
  option;
  selected;
  label;
  disabled;
  itemSize;
  focused;
  ariaPosInset;
  ariaSetSize;
  variant;
  template;
  checkIconTemplate;
  itemCheckboxIconTemplate;
  highlightOnSelect;
  onClick = new EventEmitter();
  onMouseEnter = new EventEmitter();
  onOptionClick(event) {
    this.onClick.emit({
      originalEvent: event,
      option: this.option,
      selected: this.selected
    });
    event.stopPropagation();
    event.preventDefault();
  }
  onOptionMouseEnter(event) {
    this.onMouseEnter.emit({
      originalEvent: event,
      option: this.option,
      selected: this.selected
    });
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MultiSelectItem_BaseFactory;
    return function MultiSelectItem_Factory(__ngFactoryType__) {
      return (\u0275MultiSelectItem_BaseFactory || (\u0275MultiSelectItem_BaseFactory = \u0275\u0275getInheritedFactory(_MultiSelectItem)))(__ngFactoryType__ || _MultiSelectItem);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MultiSelectItem,
    selectors: [["p-multiSelectItem"], ["p-multiselect-item"]],
    inputs: {
      id: "id",
      option: "option",
      selected: [2, "selected", "selected", booleanAttribute],
      label: "label",
      disabled: [2, "disabled", "disabled", booleanAttribute],
      itemSize: [2, "itemSize", "itemSize", numberAttribute],
      focused: [2, "focused", "focused", booleanAttribute],
      ariaPosInset: "ariaPosInset",
      ariaSetSize: "ariaSetSize",
      variant: "variant",
      template: "template",
      checkIconTemplate: "checkIconTemplate",
      itemCheckboxIconTemplate: "itemCheckboxIconTemplate",
      highlightOnSelect: [2, "highlightOnSelect", "highlightOnSelect", booleanAttribute]
    },
    outputs: {
      onClick: "onClick",
      onMouseEnter: "onMouseEnter"
    },
    features: [\u0275\u0275InheritDefinitionFeature],
    decls: 5,
    vars: 28,
    consts: [["checkboxicon", ""], ["pRipple", "", "role", "option", 1, "p-multiselect-option", 3, "click", "mouseenter", "ngStyle", "ngClass", "id"], [3, "ngModel", "binary", "tabindex", "variant", "ariaLabel"], [4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]],
    template: function MultiSelectItem_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "li", 1);
        \u0275\u0275listener("click", function MultiSelectItem_Template_li_click_0_listener($event) {
          return ctx.onOptionClick($event);
        })("mouseenter", function MultiSelectItem_Template_li_mouseenter_0_listener($event) {
          return ctx.onOptionMouseEnter($event);
        });
        \u0275\u0275elementStart(1, "p-checkbox", 2);
        \u0275\u0275template(2, MultiSelectItem_ng_container_2_Template, 3, 0, "ng-container", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275template(3, MultiSelectItem_span_3_Template, 2, 1, "span", 3)(4, MultiSelectItem_ng_container_4_Template, 1, 0, "ng-container", 4);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(20, _c04, ctx.itemSize + "px"))("ngClass", \u0275\u0275pureFunction3(22, _c14, ctx.selected && ctx.highlightOnSelect, ctx.disabled, ctx.focused))("id", ctx.id);
        \u0275\u0275attribute("aria-label", ctx.label)("aria-setsize", ctx.ariaSetSize)("aria-posinset", ctx.ariaPosInset)("aria-selected", ctx.selected)("data-p-focused", ctx.focused)("data-p-highlight", ctx.selected)("data-p-disabled", ctx.disabled)("aria-checked", ctx.selected);
        \u0275\u0275advance();
        \u0275\u0275property("ngModel", ctx.selected)("binary", true)("tabindex", -1)("variant", ctx.variant)("ariaLabel", ctx.label);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.itemCheckboxIconTemplate);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.template);
        \u0275\u0275advance();
        \u0275\u0275property("ngTemplateOutlet", ctx.template)("ngTemplateOutletContext", \u0275\u0275pureFunction1(26, _c22, ctx.option));
      }
    },
    dependencies: [CommonModule, NgClass, NgIf, NgTemplateOutlet, NgStyle, Checkbox, FormsModule, NgControlStatus, NgModel, Ripple, SharedModule],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MultiSelectItem, [{
    type: Component,
    args: [{
      selector: "p-multiSelectItem, p-multiselect-item",
      standalone: true,
      imports: [CommonModule, Checkbox, FormsModule, Ripple, SharedModule],
      template: `
        <li
            pRipple
            class="p-multiselect-option"
            role="option"
            [ngStyle]="{ height: itemSize + 'px' }"
            [ngClass]="{
                'p-multiselect-option-selected': selected && highlightOnSelect,
                'p-disabled': disabled,
                'p-focus': focused
            }"
            [id]="id"
            [attr.aria-label]="label"
            [attr.aria-setsize]="ariaSetSize"
            [attr.aria-posinset]="ariaPosInset"
            [attr.aria-selected]="selected"
            [attr.data-p-focused]="focused"
            [attr.data-p-highlight]="selected"
            [attr.data-p-disabled]="disabled"
            [attr.aria-checked]="selected"
            (click)="onOptionClick($event)"
            (mouseenter)="onOptionMouseEnter($event)"
        >
            <p-checkbox [ngModel]="selected" [binary]="true" [tabindex]="-1" [variant]="variant" [ariaLabel]="label">
                <ng-container *ngIf="itemCheckboxIconTemplate">
                    <ng-template #checkboxicon let-klass="class">
                        <ng-template *ngTemplateOutlet="itemCheckboxIconTemplate; context: { checked: selected, class: klass }"></ng-template>
                    </ng-template>
                </ng-container>
            </p-checkbox>
            <span *ngIf="!template">{{ label ?? 'empty' }}</span>
            <ng-container *ngTemplateOutlet="template; context: { $implicit: option }"></ng-container>
        </li>
    `,
      encapsulation: ViewEncapsulation.None
    }]
  }], null, {
    id: [{
      type: Input
    }],
    option: [{
      type: Input
    }],
    selected: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    label: [{
      type: Input
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    itemSize: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    focused: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    ariaPosInset: [{
      type: Input
    }],
    ariaSetSize: [{
      type: Input
    }],
    variant: [{
      type: Input
    }],
    template: [{
      type: Input
    }],
    checkIconTemplate: [{
      type: Input
    }],
    itemCheckboxIconTemplate: [{
      type: Input
    }],
    highlightOnSelect: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    onClick: [{
      type: Output
    }],
    onMouseEnter: [{
      type: Output
    }]
  });
})();
var MultiSelect = class _MultiSelect extends BaseComponent {
  zone;
  filterService;
  overlayService;
  /**
   * Unique identifier of the component
   * @group Props
   */
  id;
  /**
   * Defines a string that labels the input for accessibility.
   * @group Props
   */
  ariaLabel;
  /**
   * Inline style of the element.
   * @group Props
   */
  style;
  /**
   * Style class of the element.
   * @group Props
   */
  styleClass;
  /**
   * Inline style of the overlay panel.
   * @group Props
   */
  panelStyle;
  /**
   * Style class of the overlay panel element.
   * @group Props
   */
  panelStyleClass;
  /**
   * Identifier of the focus input to match a label defined for the component.
   * @group Props
   */
  inputId;
  /**
   * When present, it specifies that the element should be disabled.
   * @group Props
   */
  disabled;
  /**
   * Spans 100% width of the container when enabled.
   * @group Props
   */
  fluid;
  /**
   * When present, it specifies that the component cannot be edited.
   * @group Props
   */
  readonly;
  /**
   * Whether to display options as grouped when nested options are provided.
   * @group Props
   */
  group;
  /**
   * When specified, displays an input field to filter the items on keyup.
   * @group Props
   */
  filter = true;
  /**
   * Defines placeholder of the filter input.
   * @group Props
   */
  filterPlaceHolder;
  /**
   * Locale to use in filtering. The default locale is the host environment's current locale.
   * @group Props
   */
  filterLocale;
  /**
   * Specifies the visibility of the options panel.
   * @group Props
   */
  overlayVisible;
  /**
   * Index of the element in tabbing order.
   * @group Props
   */
  tabindex = 0;
  /**
   * Specifies the input variant of the component.
   * @group Props
   */
  variant;
  /**
   * Target element to attach the overlay, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name).
   * @group Props
   */
  appendTo;
  /**
   * A property to uniquely identify a value in options.
   * @group Props
   */
  dataKey;
  /**
   * Name of the input element.
   * @group Props
   */
  name;
  /**
   * Establishes relationships between the component and label(s) where its value should be one or more element IDs.
   * @group Props
   */
  ariaLabelledBy;
  /**
   * Whether to show labels of selected item labels or use default label.
   * @group Props
   * @defaultValue true
   */
  set displaySelectedLabel(val) {
    this._displaySelectedLabel = val;
  }
  get displaySelectedLabel() {
    return this._displaySelectedLabel;
  }
  /**
   * Decides how many selected item labels to show at most.
   * @group Props
   * @defaultValue 3
   */
  set maxSelectedLabels(val) {
    this._maxSelectedLabels = val;
  }
  get maxSelectedLabels() {
    return this._maxSelectedLabels;
  }
  /**
   * Maximum number of selectable items.
   * @group Props
   */
  selectionLimit;
  /**
   * Label to display after exceeding max selected labels e.g. ({0} items selected), defaults "ellipsis" keyword to indicate a text-overflow.
   * @group Props
   */
  selectedItemsLabel;
  /**
   * Whether to show the checkbox at header to toggle all items at once.
   * @group Props
   */
  showToggleAll = true;
  /**
   * Text to display when filtering does not return any results.
   * @group Props
   */
  emptyFilterMessage = "";
  /**
   * Text to display when there is no data. Defaults to global value in i18n translation configuration.
   * @group Props
   */
  emptyMessage = "";
  /**
   * Clears the filter value when hiding the dropdown.
   * @group Props
   */
  resetFilterOnHide = false;
  /**
   * Icon class of the dropdown icon.
   * @group Props
   */
  dropdownIcon;
  /**
   * Icon class of the chip icon.
   * @group Props
   */
  chipIcon;
  /**
   * Name of the label field of an option.
   * @group Props
   */
  optionLabel;
  /**
   * Name of the value field of an option.
   * @group Props
   */
  optionValue;
  /**
   * Name of the disabled field of an option.
   * @group Props
   */
  optionDisabled;
  /**
   * Name of the label field of an option group.
   * @group Props
   */
  optionGroupLabel = "label";
  /**
   * Name of the options field of an option group.
   * @group Props
   */
  optionGroupChildren = "items";
  /**
   * Whether to show the header.
   * @group Props
   */
  showHeader = true;
  /**
   * When filtering is enabled, filterBy decides which field or fields (comma separated) to search against.
   * @group Props
   */
  filterBy;
  /**
   * Height of the viewport in pixels, a scrollbar is defined if height of list exceeds this value.
   * @group Props
   */
  scrollHeight = "200px";
  /**
   * Defines if data is loaded and interacted with in lazy manner.
   * @group Props
   */
  lazy = false;
  /**
   * Whether the data should be loaded on demand during scroll.
   * @group Props
   */
  virtualScroll;
  /**
   * Whether the multiselect is in loading state.
   * @group Props
   */
  loading = false;
  /**
   * Height of an item in the list for VirtualScrolling.
   * @group Props
   */
  virtualScrollItemSize;
  /**
   * Icon to display in loading state.
   * @group Props
   */
  loadingIcon;
  /**
   * Whether to use the scroller feature. The properties of scroller component can be used like an object in it.
   * @group Props
   */
  virtualScrollOptions;
  /**
   * Whether to use overlay API feature. The properties of overlay API can be used like an object in it.
   * @group Props
   */
  overlayOptions;
  /**
   * Defines a string that labels the filter input.
   * @group Props
   */
  ariaFilterLabel;
  /**
   * Defines how the items are filtered.
   * @group Props
   */
  filterMatchMode = "contains";
  /**
   * Advisory information to display in a tooltip on hover.
   * @group Props
   */
  tooltip = "";
  /**
   * Position of the tooltip.
   * @group Props
   */
  tooltipPosition = "right";
  /**
   * Type of CSS position.
   * @group Props
   */
  tooltipPositionStyle = "absolute";
  /**
   * Style class of the tooltip.
   * @group Props
   */
  tooltipStyleClass;
  /**
   * Applies focus to the filter element when the overlay is shown.
   * @group Props
   */
  autofocusFilter = false;
  /**
   * Defines how the selected items are displayed.
   * @group Props
   */
  display = "comma";
  /**
   * Defines the autocomplete is active.
   * @group Props
   */
  autocomplete = "off";
  /**
   * Defines the size of the component.
   * @group Props
   */
  size;
  /**
   * When enabled, a clear icon is displayed to clear the value.
   * @group Props
   */
  showClear = false;
  /**
   * When present, it specifies that the component should automatically get focus on load.
   * @group Props
   */
  autofocus;
  /**
   * @deprecated since v14.2.0, use overlayOptions property instead.
   * Whether to automatically manage layering.
   * @group Props
   */
  get autoZIndex() {
    return this._autoZIndex;
  }
  set autoZIndex(val) {
    this._autoZIndex = val;
    console.log("The autoZIndex property is deprecated since v14.2.0, use overlayOptions property instead.");
  }
  /**
   * @deprecated since v14.2.0, use overlayOptions property instead.
   * Base zIndex value to use in layering.
   * @group Props
   */
  get baseZIndex() {
    return this._baseZIndex;
  }
  set baseZIndex(val) {
    this._baseZIndex = val;
    console.log("The baseZIndex property is deprecated since v14.2.0, use overlayOptions property instead.");
  }
  /**
   * Transition options of the show animation.
   * @group Props
   * @deprecated since v14.2.0, use overlayOptions property instead.
   */
  get showTransitionOptions() {
    return this._showTransitionOptions;
  }
  set showTransitionOptions(val) {
    this._showTransitionOptions = val;
    console.log("The showTransitionOptions property is deprecated since v14.2.0, use overlayOptions property instead.");
  }
  /**
   * Transition options of the hide animation.
   * @group Props
   * @deprecated since v14.2.0, use overlayOptions property instead.
   */
  get hideTransitionOptions() {
    return this._hideTransitionOptions;
  }
  set hideTransitionOptions(val) {
    this._hideTransitionOptions = val;
    console.log("The hideTransitionOptions property is deprecated since v14.2.0, use overlayOptions property instead.");
  }
  /**
   * Label to display when there are no selections.
   * @group Props
   * @deprecated Use placeholder instead.
   */
  set defaultLabel(val) {
    this._defaultLabel = val;
    console.log("defaultLabel property is deprecated since 16.6.0, use placeholder instead");
  }
  get defaultLabel() {
    return this._defaultLabel;
  }
  /**
   * Label to display when there are no selections.
   * @group Props
   */
  set placeholder(val) {
    this._placeholder.set(val);
  }
  get placeholder() {
    return this._placeholder.asReadonly();
  }
  /**
   * An array of objects to display as the available options.
   * @group Props
   */
  get options() {
    return this._options();
  }
  set options(val) {
    if (!deepEquals(this._options(), val)) {
      this._options.set(val);
    }
  }
  /**
   * When specified, filter displays with this value.
   * @group Props
   */
  get filterValue() {
    return this._filterValue();
  }
  set filterValue(val) {
    this._filterValue.set(val);
  }
  /**
   * Item size of item to be virtual scrolled.
   * @group Props
   * @deprecated use virtualScrollItemSize property instead.
   */
  get itemSize() {
    return this._itemSize;
  }
  set itemSize(val) {
    this._itemSize = val;
    console.log("The itemSize property is deprecated, use virtualScrollItemSize property instead.");
  }
  /**
   * Whether all data is selected.
   * @group Props
   */
  get selectAll() {
    return this._selectAll;
  }
  set selectAll(value) {
    this._selectAll = value;
  }
  /**
   * Indicates whether to focus on options when hovering over them, defaults to optionLabel.
   * @group Props
   */
  focusOnHover = true;
  /**
   * Fields used when filtering the options, defaults to optionLabel.
   * @group Props
   */
  filterFields;
  /**
   * Determines if the option will be selected on focus.
   * @group Props
   */
  selectOnFocus = false;
  /**
   * Whether to focus on the first visible or selected element when the overlay panel is shown.
   * @group Props
   */
  autoOptionFocus = false;
  /**
   * Whether the selected option will be add highlight class.
   * @group Props
   */
  highlightOnSelect = true;
  /**
   * Callback to invoke when value changes.
   * @param {MultiSelectChangeEvent} event - Custom change event.
   * @group Emits
   */
  onChange = new EventEmitter();
  /**
   * Callback to invoke when data is filtered.
   * @param {MultiSelectFilterEvent} event - Custom filter event.
   * @group Emits
   */
  onFilter = new EventEmitter();
  /**
   * Callback to invoke when multiselect receives focus.
   * @param {MultiSelectFocusEvent} event - Custom focus event.
   * @group Emits
   */
  onFocus = new EventEmitter();
  /**
   * Callback to invoke when multiselect loses focus.
   * @param {MultiSelectBlurEvent} event - Custom blur event.
   * @group Emits
   */
  onBlur = new EventEmitter();
  /**
   * Callback to invoke when component is clicked.
   * @param {Event} event - Browser event.
   * @group Emits
   */
  onClick = new EventEmitter();
  /**
   * Callback to invoke when input field is cleared.
   * @group Emits
   */
  onClear = new EventEmitter();
  /**
   * Callback to invoke when overlay panel becomes visible.
   * @param {AnimationEvent} event - Animation event.
   * @group Emits
   */
  onPanelShow = new EventEmitter();
  /**
   * Callback to invoke when overlay panel becomes hidden.
   * @param {AnimationEvent} event - Animation event.
   * @group Emits
   */
  onPanelHide = new EventEmitter();
  /**
   * Callback to invoke in lazy mode to load new data.
   * @param {MultiSelectLazyLoadEvent} event - Lazy load event.
   * @group Emits
   */
  onLazyLoad = new EventEmitter();
  /**
   * Callback to invoke in lazy mode to load new data.
   * @param {MultiSelectRemoveEvent} event - Remove event.
   * @group Emits
   */
  onRemove = new EventEmitter();
  /**
   * Callback to invoke when all data is selected.
   * @param {MultiSelectSelectAllChangeEvent} event - Custom select event.
   * @group Emits
   */
  onSelectAllChange = new EventEmitter();
  overlayViewChild;
  filterInputChild;
  focusInputViewChild;
  itemsViewChild;
  scroller;
  lastHiddenFocusableElementOnOverlay;
  firstHiddenFocusableElementOnOverlay;
  headerCheckboxViewChild;
  footerFacet;
  headerFacet;
  _componentStyle = inject(MultiSelectStyle);
  searchValue;
  searchTimeout;
  _selectAll = null;
  _autoZIndex;
  _baseZIndex;
  _showTransitionOptions;
  _hideTransitionOptions;
  _defaultLabel;
  _placeholder = signal(void 0);
  _itemSize;
  _selectionLimit;
  _disableTooltip = false;
  value;
  _filteredOptions;
  onModelChange = () => {
  };
  onModelTouched = () => {
  };
  valuesAsString;
  focus;
  filtered;
  itemTemplate;
  groupTemplate;
  loaderTemplate;
  headerTemplate;
  filterTemplate;
  footerTemplate;
  emptyFilterTemplate;
  emptyTemplate;
  selectedItemsTemplate;
  checkIconTemplate;
  loadingIconTemplate;
  filterIconTemplate;
  removeTokenIconTemplate;
  chipIconTemplate;
  clearIconTemplate;
  dropdownIconTemplate;
  itemCheckboxIconTemplate;
  headerCheckboxIconTemplate;
  templates;
  _itemTemplate;
  _groupTemplate;
  _loaderTemplate;
  _headerTemplate;
  _filterTemplate;
  _footerTemplate;
  _emptyFilterTemplate;
  _emptyTemplate;
  _selectedItemsTemplate;
  _checkIconTemplate;
  _loadingIconTemplate;
  _filterIconTemplate;
  _removeTokenIconTemplate;
  _chipIconTemplate;
  _clearIconTemplate;
  _dropdownIconTemplate;
  _itemCheckboxIconTemplate;
  _headerCheckboxIconTemplate;
  ngAfterContentInit() {
    this.templates.forEach((item) => {
      switch (item.getType()) {
        case "item":
          this._itemTemplate = item.template;
          break;
        case "group":
          this._groupTemplate = item.template;
          break;
        case "selectedItems":
        case "selecteditems":
          this._selectedItemsTemplate = item.template;
          break;
        case "header":
          this._headerTemplate = item.template;
          break;
        case "filter":
          this._filterTemplate = item.template;
          break;
        case "emptyfilter":
          this._emptyFilterTemplate = item.template;
          break;
        case "empty":
          this._emptyTemplate = item.template;
          break;
        case "footer":
          this._footerTemplate = item.template;
          break;
        case "loader":
          this._loaderTemplate = item.template;
          break;
        case "checkicon":
          this._checkIconTemplate = item.template;
          console.warn("checkicon is deprecated and will removed in future. Use itemcheckboxicon or headercheckboxicon templates instead.");
          break;
        case "headercheckboxicon":
          this._headerCheckboxIconTemplate = item.template;
          break;
        case "loadingicon":
          this._loadingIconTemplate = item.template;
          break;
        case "filtericon":
          this._filterIconTemplate = item.template;
          break;
        case "removetokenicon":
          this._removeTokenIconTemplate = item.template;
          break;
        case "clearicon":
          this._clearIconTemplate = item.template;
          break;
        case "dropdownicon":
          this._dropdownIconTemplate = item.template;
          break;
        case "itemcheckboxicon":
          this._itemCheckboxIconTemplate = item.template;
          break;
        case "chipicon":
          this._chipIconTemplate = item.template;
          break;
        default:
          this._itemTemplate = item.template;
          break;
      }
    });
  }
  headerCheckboxFocus;
  filterOptions;
  preventModelTouched;
  preventDocumentDefault;
  focused = false;
  itemsWrapper;
  _displaySelectedLabel = true;
  _maxSelectedLabels = 3;
  modelValue = signal(null);
  _filterValue = signal(null);
  _options = signal(null);
  startRangeIndex = signal(-1);
  focusedOptionIndex = signal(-1);
  selectedOptions;
  clickInProgress = false;
  get hostClasses() {
    const classes6 = [];
    if (typeof this.rootClass === "string") {
      classes6.push(this.rootClass);
    } else if (Array.isArray(this.rootClass)) {
      classes6.push(...this.rootClass);
    } else if (typeof this.rootClass === "object") {
      Object.keys(this.rootClass).filter((key) => this.rootClass[key]).forEach((key) => classes6.push(key));
    }
    if (this.styleClass) {
      classes6.push(this.styleClass);
    }
    return classes6.join(" ");
  }
  get rootClass() {
    return this._componentStyle.classes.root({
      instance: this
    });
  }
  get labelClass() {
    return this._componentStyle.classes.label({
      instance: this
    });
  }
  get emptyMessageLabel() {
    return this.emptyMessage || this.config.getTranslation(TranslationKeys.EMPTY_MESSAGE);
  }
  get emptyFilterMessageLabel() {
    return this.emptyFilterMessage || this.config.getTranslation(TranslationKeys.EMPTY_FILTER_MESSAGE);
  }
  get filled() {
    if (typeof this.modelValue() === "string") return !!this.modelValue();
    return isNotEmpty(this.modelValue());
  }
  get isVisibleClearIcon() {
    return this.modelValue() != null && this.modelValue() !== "" && isNotEmpty(this.modelValue()) && this.showClear && !this.disabled && !this.readonly && this.filled;
  }
  get toggleAllAriaLabel() {
    return this.config.translation.aria ? this.config.translation.aria[this.allSelected() ? "selectAll" : "unselectAll"] : void 0;
  }
  get closeAriaLabel() {
    return this.config.translation.aria ? this.config.translation.aria.close : void 0;
  }
  get listLabel() {
    return this.config.getTranslation(TranslationKeys.ARIA)["listLabel"];
  }
  get hasFluid() {
    const nativeElement = this.el.nativeElement;
    const fluidComponent = nativeElement.closest("p-fluid");
    return this.fluid || !!fluidComponent;
  }
  getAllVisibleAndNonVisibleOptions() {
    return this.group ? this.flatOptions(this.options) : this.options || [];
  }
  visibleOptions = computed(() => {
    const options = this.getAllVisibleAndNonVisibleOptions();
    const isArrayOfObjects = isArray(options) && ObjectUtils.isObject(options[0]);
    if (this._filterValue()) {
      let filteredOptions;
      if (isArrayOfObjects) {
        filteredOptions = this.filterService.filter(options, this.searchFields(), this._filterValue(), this.filterMatchMode, this.filterLocale);
      } else {
        filteredOptions = options.filter((option) => option.toString().toLocaleLowerCase().includes(this._filterValue().toLocaleLowerCase()));
      }
      if (this.group) {
        const optionGroups = this.options || [];
        const filtered = [];
        optionGroups.forEach((group) => {
          const groupChildren = this.getOptionGroupChildren(group);
          const filteredItems = groupChildren.filter((item) => filteredOptions.includes(item));
          if (filteredItems.length > 0) filtered.push(__spreadProps(__spreadValues({}, group), {
            [typeof this.optionGroupChildren === "string" ? this.optionGroupChildren : "items"]: [...filteredItems]
          }));
        });
        return this.flatOptions(filtered);
      }
      return filteredOptions;
    }
    return options;
  });
  label = computed(() => {
    let label;
    const modelValue = this.modelValue();
    if (modelValue && modelValue.length && this.displaySelectedLabel) {
      if (isNotEmpty(this.maxSelectedLabels) && modelValue.length > this.maxSelectedLabels) {
        return this.getSelectedItemsLabel();
      } else {
        label = "";
        for (let i = 0; i < modelValue.length; i++) {
          if (i !== 0) {
            label += ", ";
          }
          label += this.getLabelByValue(modelValue[i]);
        }
      }
    } else {
      label = this.placeholder() || this.defaultLabel || "";
    }
    return label;
  });
  chipSelectedItems = computed(() => {
    return isNotEmpty(this.maxSelectedLabels) && this.modelValue() && this.modelValue().length > this.maxSelectedLabels ? this.modelValue().slice(0, this.maxSelectedLabels) : this.modelValue();
  });
  constructor(zone, filterService, overlayService) {
    super();
    this.zone = zone;
    this.filterService = filterService;
    this.overlayService = overlayService;
    effect(() => {
      const modelValue = this.modelValue();
      const allVisibleAndNonVisibleOptions = this.getAllVisibleAndNonVisibleOptions();
      if (allVisibleAndNonVisibleOptions && isNotEmpty(allVisibleAndNonVisibleOptions)) {
        if (this.optionValue && this.optionLabel && modelValue) {
          this.selectedOptions = allVisibleAndNonVisibleOptions.filter((option) => modelValue.includes(option[this.optionLabel]) || modelValue.includes(option[this.optionValue]));
        } else {
          this.selectedOptions = modelValue;
        }
        this.cd.markForCheck();
      }
    });
  }
  ngOnInit() {
    super.ngOnInit();
    this.id = this.id || uuid("pn_id_");
    this.autoUpdateModel();
    if (this.filterBy) {
      this.filterOptions = {
        filter: (value) => this.onFilterInputChange(value),
        reset: () => this.resetFilter()
      };
    }
  }
  maxSelectionLimitReached() {
    return this.selectionLimit && this.modelValue() && this.modelValue().length === this.selectionLimit;
  }
  ngAfterViewInit() {
    super.ngAfterViewInit();
    if (this.overlayVisible) {
      this.show();
    }
  }
  ngAfterViewChecked() {
    if (this.filtered) {
      this.zone.runOutsideAngular(() => {
        setTimeout(() => {
          this.overlayViewChild?.alignOverlay();
        }, 1);
      });
      this.filtered = false;
    }
  }
  flatOptions(options) {
    return (options || []).reduce((result, option, index) => {
      result.push({
        optionGroup: option,
        group: true,
        index
      });
      const optionGroupChildren = this.getOptionGroupChildren(option);
      optionGroupChildren && optionGroupChildren.forEach((o) => result.push(o));
      return result;
    }, []);
  }
  autoUpdateModel() {
    if (this.selectOnFocus && this.autoOptionFocus && !this.hasSelectedOption()) {
      this.focusedOptionIndex.set(this.findFirstFocusedOptionIndex());
      const value = this.getOptionValue(this.visibleOptions()[this.focusedOptionIndex()]);
      this.onOptionSelect({
        originalEvent: null,
        option: [value]
      });
    }
  }
  /**
   * Updates the model value.
   * @group Method
   */
  updateModel(value, event) {
    this.value = value;
    this.onModelChange(value);
    this.modelValue.set(value);
  }
  onInputClick(event) {
    event.stopPropagation();
    event.preventDefault();
    this.focusedOptionIndex.set(-1);
  }
  onOptionSelect(event, isFocus = false, index = -1) {
    const {
      originalEvent,
      option
    } = event;
    if (this.disabled || this.isOptionDisabled(option)) {
      return;
    }
    let selected = this.isSelected(option);
    let value = null;
    if (selected) {
      value = this.modelValue().filter((val) => !equals(val, this.getOptionValue(option), this.equalityKey()));
    } else {
      value = [...this.modelValue() || [], this.getOptionValue(option)];
    }
    this.updateModel(value, originalEvent);
    index !== -1 && this.focusedOptionIndex.set(index);
    isFocus && focus(this.focusInputViewChild?.nativeElement);
    this.onChange.emit({
      originalEvent: event,
      value,
      itemValue: option
    });
  }
  findSelectedOptionIndex() {
    return this.hasSelectedOption() ? this.visibleOptions().findIndex((option) => this.isValidSelectedOption(option)) : -1;
  }
  onOptionSelectRange(event, start = -1, end = -1) {
    start === -1 && (start = this.findNearestSelectedOptionIndex(end, true));
    end === -1 && (end = this.findNearestSelectedOptionIndex(start));
    if (start !== -1 && end !== -1) {
      const rangeStart = Math.min(start, end);
      const rangeEnd = Math.max(start, end);
      const value = this.visibleOptions().slice(rangeStart, rangeEnd + 1).filter((option) => this.isValidOption(option)).map((option) => this.getOptionValue(option));
      this.updateModel(value, event);
    }
  }
  searchFields() {
    return (this.filterBy || this.optionLabel || "label").split(",");
  }
  findNearestSelectedOptionIndex(index, firstCheckUp = false) {
    let matchedOptionIndex = -1;
    if (this.hasSelectedOption()) {
      if (firstCheckUp) {
        matchedOptionIndex = this.findPrevSelectedOptionIndex(index);
        matchedOptionIndex = matchedOptionIndex === -1 ? this.findNextSelectedOptionIndex(index) : matchedOptionIndex;
      } else {
        matchedOptionIndex = this.findNextSelectedOptionIndex(index);
        matchedOptionIndex = matchedOptionIndex === -1 ? this.findPrevSelectedOptionIndex(index) : matchedOptionIndex;
      }
    }
    return matchedOptionIndex > -1 ? matchedOptionIndex : index;
  }
  findPrevSelectedOptionIndex(index) {
    const matchedOptionIndex = this.hasSelectedOption() && index > 0 ? findLastIndex(this.visibleOptions().slice(0, index), (option) => this.isValidSelectedOption(option)) : -1;
    return matchedOptionIndex > -1 ? matchedOptionIndex : -1;
  }
  findFirstFocusedOptionIndex() {
    const selectedIndex = this.findFirstSelectedOptionIndex();
    return selectedIndex < 0 ? this.findFirstOptionIndex() : selectedIndex;
  }
  findFirstOptionIndex() {
    return this.visibleOptions().findIndex((option) => this.isValidOption(option));
  }
  findFirstSelectedOptionIndex() {
    return this.hasSelectedOption() ? this.visibleOptions().findIndex((option) => this.isValidSelectedOption(option)) : -1;
  }
  findNextSelectedOptionIndex(index) {
    const matchedOptionIndex = this.hasSelectedOption() && index < this.visibleOptions().length - 1 ? this.visibleOptions().slice(index + 1).findIndex((option) => this.isValidSelectedOption(option)) : -1;
    return matchedOptionIndex > -1 ? matchedOptionIndex + index + 1 : -1;
  }
  equalityKey() {
    return this.optionValue ? null : this.dataKey;
  }
  hasSelectedOption() {
    return isNotEmpty(this.modelValue());
  }
  isValidSelectedOption(option) {
    return this.isValidOption(option) && this.isSelected(option);
  }
  isOptionGroup(option) {
    return (this.group || this.optionGroupLabel) && option.optionGroup && option.group;
  }
  isValidOption(option) {
    return option && !(this.isOptionDisabled(option) || this.isOptionGroup(option));
  }
  isOptionDisabled(option) {
    if (this.maxSelectionLimitReached() && !this.isSelected(option)) {
      return true;
    }
    return this.optionDisabled ? resolveFieldData(option, this.optionDisabled) : option && option.disabled !== void 0 ? option.disabled : false;
  }
  isSelected(option) {
    const optionValue = this.getOptionValue(option);
    return (this.modelValue() || []).some((value) => equals(value, optionValue, this.equalityKey()));
  }
  isOptionMatched(option) {
    return this.isValidOption(option) && this.getOptionLabel(option).toString().toLocaleLowerCase(this.filterLocale).startsWith(this.searchValue.toLocaleLowerCase(this.filterLocale));
  }
  isEmpty() {
    return !this._options() || this.visibleOptions() && this.visibleOptions().length === 0;
  }
  getOptionIndex(index, scrollerOptions) {
    return this.virtualScrollerDisabled ? index : scrollerOptions && scrollerOptions.getItemOptions(index)["index"];
  }
  getAriaPosInset(index) {
    return (this.optionGroupLabel ? index - this.visibleOptions().slice(0, index).filter((option) => this.isOptionGroup(option)).length : index) + 1;
  }
  get ariaSetSize() {
    return this.visibleOptions().filter((option) => !this.isOptionGroup(option)).length;
  }
  getLabelByValue(value) {
    const options = this.group ? this.flatOptions(this._options()) : this._options() || [];
    const matchedOption = options.find((option) => !this.isOptionGroup(option) && equals(this.getOptionValue(option), value, this.equalityKey()));
    return matchedOption ? this.getOptionLabel(matchedOption) : null;
  }
  getSelectedItemsLabel() {
    let pattern = /{(.*?)}/;
    let message = this.selectedItemsLabel ? this.selectedItemsLabel : this.config.getTranslation(TranslationKeys.SELECTION_MESSAGE);
    if (pattern.test(message)) {
      return message.replace(message.match(pattern)[0], this.modelValue().length + "");
    }
    return message;
  }
  getOptionLabel(option) {
    return this.optionLabel ? resolveFieldData(option, this.optionLabel) : option && option.label != void 0 ? option.label : option;
  }
  getOptionValue(option) {
    return this.optionValue ? resolveFieldData(option, this.optionValue) : !this.optionLabel && option && option.value !== void 0 ? option.value : option;
  }
  getOptionGroupLabel(optionGroup) {
    return this.optionGroupLabel ? resolveFieldData(optionGroup, this.optionGroupLabel) : optionGroup && optionGroup.label != void 0 ? optionGroup.label : optionGroup;
  }
  getOptionGroupChildren(optionGroup) {
    return this.optionGroupChildren ? resolveFieldData(optionGroup, this.optionGroupChildren) : optionGroup.items;
  }
  onKeyDown(event) {
    if (this.disabled) {
      event.preventDefault();
      return;
    }
    const metaKey = event.metaKey || event.ctrlKey;
    switch (event.code) {
      case "ArrowDown":
        this.onArrowDownKey(event);
        break;
      case "ArrowUp":
        this.onArrowUpKey(event);
        break;
      case "Home":
        this.onHomeKey(event);
        break;
      case "End":
        this.onEndKey(event);
        break;
      case "PageDown":
        this.onPageDownKey(event);
        break;
      case "PageUp":
        this.onPageUpKey(event);
        break;
      case "Enter":
      case "Space":
        this.onEnterKey(event);
        break;
      case "Escape":
        this.onEscapeKey(event);
        break;
      case "Tab":
        this.onTabKey(event);
        break;
      case "ShiftLeft":
      case "ShiftRight":
        this.onShiftKey();
        break;
      default:
        if (event.code === "KeyA" && metaKey) {
          const value = this.visibleOptions().filter((option) => this.isValidOption(option)).map((option) => this.getOptionValue(option));
          this.updateModel(value, event);
          event.preventDefault();
          break;
        }
        if (!metaKey && isPrintableCharacter(event.key)) {
          !this.overlayVisible && this.show();
          this.searchOptions(event, event.key);
          event.preventDefault();
        }
        break;
    }
  }
  onFilterKeyDown(event) {
    switch (event.code) {
      case "ArrowDown":
        this.onArrowDownKey(event);
        break;
      case "ArrowUp":
        this.onArrowUpKey(event, true);
        break;
      case "ArrowLeft":
      case "ArrowRight":
        this.onArrowLeftKey(event, true);
        break;
      case "Home":
        this.onHomeKey(event, true);
        break;
      case "End":
        this.onEndKey(event, true);
        break;
      case "Enter":
      case "NumpadEnter":
        this.onEnterKey(event);
        break;
      case "Escape":
        this.onEscapeKey(event);
        break;
      case "Tab":
        this.onTabKey(event, true);
        break;
      default:
        break;
    }
  }
  onArrowLeftKey(event, pressedInInputText = false) {
    pressedInInputText && this.focusedOptionIndex.set(-1);
  }
  onArrowDownKey(event) {
    const optionIndex = this.focusedOptionIndex() !== -1 ? this.findNextOptionIndex(this.focusedOptionIndex()) : this.findFirstFocusedOptionIndex();
    if (event.shiftKey) {
      this.onOptionSelectRange(event, this.startRangeIndex(), optionIndex);
    }
    this.changeFocusedOptionIndex(event, optionIndex);
    !this.overlayVisible && this.show();
    event.preventDefault();
    event.stopPropagation();
  }
  onArrowUpKey(event, pressedInInputText = false) {
    if (event.altKey && !pressedInInputText) {
      if (this.focusedOptionIndex() !== -1) {
        this.onOptionSelect(event, this.visibleOptions()[this.focusedOptionIndex()]);
      }
      this.overlayVisible && this.hide();
      event.preventDefault();
    } else {
      const optionIndex = this.focusedOptionIndex() !== -1 ? this.findPrevOptionIndex(this.focusedOptionIndex()) : this.findLastFocusedOptionIndex();
      if (event.shiftKey) {
        this.onOptionSelectRange(event, optionIndex, this.startRangeIndex());
      }
      this.changeFocusedOptionIndex(event, optionIndex);
      !this.overlayVisible && this.show();
      event.preventDefault();
    }
    event.stopPropagation();
  }
  onHomeKey(event, pressedInInputText = false) {
    const {
      currentTarget
    } = event;
    if (pressedInInputText) {
      const len = currentTarget.value.length;
      currentTarget.setSelectionRange(0, event.shiftKey ? len : 0);
      this.focusedOptionIndex.set(-1);
    } else {
      let metaKey = event.metaKey || event.ctrlKey;
      let optionIndex = this.findFirstOptionIndex();
      if (event.shiftKey && metaKey) {
        this.onOptionSelectRange(event, optionIndex, this.startRangeIndex());
      }
      this.changeFocusedOptionIndex(event, optionIndex);
      !this.overlayVisible && this.show();
    }
    event.preventDefault();
  }
  onEndKey(event, pressedInInputText = false) {
    const {
      currentTarget
    } = event;
    if (pressedInInputText) {
      const len = currentTarget.value.length;
      currentTarget.setSelectionRange(event.shiftKey ? 0 : len, len);
      this.focusedOptionIndex.set(-1);
    } else {
      let metaKey = event.metaKey || event.ctrlKey;
      let optionIndex = this.findLastFocusedOptionIndex();
      if (event.shiftKey && metaKey) {
        this.onOptionSelectRange(event, this.startRangeIndex(), optionIndex);
      }
      this.changeFocusedOptionIndex(event, optionIndex);
      !this.overlayVisible && this.show();
    }
    event.preventDefault();
  }
  onPageDownKey(event) {
    this.scrollInView(this.visibleOptions().length - 1);
    event.preventDefault();
  }
  onPageUpKey(event) {
    this.scrollInView(0);
    event.preventDefault();
  }
  onEnterKey(event) {
    if (!this.overlayVisible) {
      this.onArrowDownKey(event);
    } else {
      if (this.focusedOptionIndex() !== -1) {
        if (event.shiftKey) {
          this.onOptionSelectRange(event, this.focusedOptionIndex());
        } else {
          this.onOptionSelect({
            originalEvent: event,
            option: this.visibleOptions()[this.focusedOptionIndex()]
          });
        }
      }
    }
    event.preventDefault();
  }
  onEscapeKey(event) {
    this.overlayVisible && this.hide(true);
    event.stopPropagation();
    event.preventDefault();
  }
  onDeleteKey(event) {
    if (this.showClear) {
      this.clear(event);
      event.preventDefault();
    }
  }
  onTabKey(event, pressedInInputText = false) {
    if (!pressedInInputText) {
      if (this.overlayVisible && this.hasFocusableElements()) {
        focus(event.shiftKey ? this.lastHiddenFocusableElementOnOverlay.nativeElement : this.firstHiddenFocusableElementOnOverlay.nativeElement);
        event.preventDefault();
      } else {
        if (this.focusedOptionIndex() !== -1) {
          this.onOptionSelect({
            originalEvent: event,
            option: this.visibleOptions()[this.focusedOptionIndex()]
          });
        }
        this.overlayVisible && this.hide(this.filter);
      }
    }
  }
  onShiftKey() {
    this.startRangeIndex.set(this.focusedOptionIndex());
  }
  onContainerClick(event) {
    if (this.disabled || this.loading || this.readonly || event.target.isSameNode(this.focusInputViewChild?.nativeElement)) {
      return;
    }
    if (!this.overlayViewChild || !this.overlayViewChild.el.nativeElement.contains(event.target)) {
      if (this.clickInProgress) {
        return;
      }
      this.clickInProgress = true;
      setTimeout(() => {
        this.clickInProgress = false;
      }, 150);
      this.overlayVisible ? this.hide(true) : this.show(true);
    }
    this.focusInputViewChild?.nativeElement.focus({
      preventScroll: true
    });
    this.onClick.emit(event);
    this.cd.detectChanges();
  }
  onFirstHiddenFocus(event) {
    const focusableEl = event.relatedTarget === this.focusInputViewChild?.nativeElement ? getFirstFocusableElement(this.overlayViewChild?.overlayViewChild?.nativeElement, ':not([data-p-hidden-focusable="true"])') : this.focusInputViewChild?.nativeElement;
    focus(focusableEl);
  }
  onInputFocus(event) {
    this.focused = true;
    const focusedOptionIndex = this.focusedOptionIndex() !== -1 ? this.focusedOptionIndex() : this.overlayVisible && this.autoOptionFocus ? this.findFirstFocusedOptionIndex() : -1;
    this.focusedOptionIndex.set(focusedOptionIndex);
    this.overlayVisible && this.scrollInView(this.focusedOptionIndex());
    this.onFocus.emit({
      originalEvent: event
    });
  }
  onInputBlur(event) {
    this.focused = false;
    this.onBlur.emit({
      originalEvent: event
    });
    if (!this.preventModelTouched) {
      this.onModelTouched();
    }
    this.preventModelTouched = false;
  }
  onFilterInputChange(event) {
    let value = event.target.value;
    this._filterValue.set(value);
    this.focusedOptionIndex.set(-1);
    this.onFilter.emit({
      originalEvent: event,
      filter: this._filterValue()
    });
    !this.virtualScrollerDisabled && this.scroller.scrollToIndex(0);
    setTimeout(() => {
      this.overlayViewChild.alignOverlay();
    });
  }
  onLastHiddenFocus(event) {
    const focusableEl = event.relatedTarget === this.focusInputViewChild?.nativeElement ? getLastFocusableElement(this.overlayViewChild?.overlayViewChild?.nativeElement, ':not([data-p-hidden-focusable="true"])') : this.focusInputViewChild?.nativeElement;
    focus(focusableEl);
  }
  onOptionMouseEnter(event, index) {
    if (this.focusOnHover) {
      this.changeFocusedOptionIndex(event, index);
    }
  }
  onHeaderCheckboxKeyDown(event) {
    if (this.disabled) {
      event.preventDefault();
      return;
    }
    switch (event.code) {
      case "Space":
        this.onToggleAll(event);
        break;
      case "Enter":
        this.onToggleAll(event);
        break;
      default:
        break;
    }
  }
  onFilterBlur(event) {
    this.focusedOptionIndex.set(-1);
  }
  onHeaderCheckboxFocus() {
    this.headerCheckboxFocus = true;
  }
  onHeaderCheckboxBlur() {
    this.headerCheckboxFocus = false;
  }
  onToggleAll(event) {
    if (this.disabled || this.readonly) {
      return;
    }
    if (this.selectAll != null) {
      this.onSelectAllChange.emit({
        originalEvent: event,
        checked: !this.allSelected()
      });
    } else {
      const selectedDisabledOptions = this.getAllVisibleAndNonVisibleOptions().filter((option) => this.isSelected(option) && (this.optionDisabled ? resolveFieldData(option, this.optionDisabled) : option && option.disabled !== void 0 ? option.disabled : false));
      const visibleOptions = this.allSelected() ? this.visibleOptions().filter((option) => !this.isValidOption(option) && this.isSelected(option)) : this.visibleOptions().filter((option) => this.isSelected(option) || this.isValidOption(option));
      const selectedOptionsBeforeSearch = this.filter && !this.allSelected() ? this.getAllVisibleAndNonVisibleOptions().filter((option) => this.isSelected(option) && this.isValidOption(option)) : [];
      const optionValues = [...selectedOptionsBeforeSearch, ...selectedDisabledOptions, ...visibleOptions].map((option) => this.getOptionValue(option));
      const value = [...new Set(optionValues)];
      this.updateModel(value, event);
      if (!value.length || value.length === this.getAllVisibleAndNonVisibleOptions().length) {
        this.onSelectAllChange.emit({
          originalEvent: event,
          checked: !!value.length
        });
      }
    }
    if (this.partialSelected()) {
      this.selectedOptions = null;
      this.cd.markForCheck();
    }
    this.onChange.emit({
      originalEvent: event,
      value: this.value
    });
    DomHandler.focus(this.headerCheckboxViewChild?.inputViewChild?.nativeElement);
    this.headerCheckboxFocus = true;
    event.originalEvent.preventDefault();
    event.originalEvent.stopPropagation();
  }
  changeFocusedOptionIndex(event, index) {
    if (this.focusedOptionIndex() !== index) {
      this.focusedOptionIndex.set(index);
      this.scrollInView();
    }
  }
  get virtualScrollerDisabled() {
    return !this.virtualScroll;
  }
  scrollInView(index = -1) {
    const id = index !== -1 ? `${this.id}_${index}` : this.focusedOptionId;
    if (this.itemsViewChild && this.itemsViewChild.nativeElement) {
      const element = findSingle(this.itemsViewChild.nativeElement, `li[id="${id}"]`);
      if (element) {
        element.scrollIntoView && element.scrollIntoView({
          block: "nearest",
          inline: "nearest"
        });
      } else if (!this.virtualScrollerDisabled) {
        setTimeout(() => {
          this.virtualScroll && this.scroller?.scrollToIndex(index !== -1 ? index : this.focusedOptionIndex());
        }, 0);
      }
    }
  }
  get focusedOptionId() {
    return this.focusedOptionIndex() !== -1 ? `${this.id}_${this.focusedOptionIndex()}` : null;
  }
  writeValue(value) {
    this.value = value;
    this.modelValue.set(this.value);
    this.cd.markForCheck();
  }
  registerOnChange(fn) {
    this.onModelChange = fn;
  }
  registerOnTouched(fn) {
    this.onModelTouched = fn;
  }
  setDisabledState(val) {
    this.disabled = val;
    this.cd.markForCheck();
  }
  allSelected() {
    return this.selectAll !== null ? this.selectAll : isNotEmpty(this.visibleOptions()) && this.visibleOptions().every((option) => this.isOptionGroup(option) || this.isOptionDisabled(option) || this.isSelected(option));
  }
  partialSelected() {
    return this.selectedOptions && this.selectedOptions.length > 0 && this.selectedOptions.length < this.options.length;
  }
  /**
   * Displays the panel.
   * @group Method
   */
  show(isFocus) {
    this.overlayVisible = true;
    const focusedOptionIndex = this.focusedOptionIndex() !== -1 ? this.focusedOptionIndex() : this.autoOptionFocus ? this.findFirstFocusedOptionIndex() : this.findSelectedOptionIndex();
    this.focusedOptionIndex.set(focusedOptionIndex);
    if (isFocus) {
      focus(this.focusInputViewChild?.nativeElement);
    }
    this.cd.markForCheck();
  }
  /**
   * Hides the panel.
   * @group Method
   */
  hide(isFocus) {
    this.overlayVisible = false;
    this.focusedOptionIndex.set(-1);
    if (this.filter && this.resetFilterOnHide) {
      this.resetFilter();
    }
    if (this.overlayOptions?.mode === "modal") {
      unblockBodyScroll();
    }
    isFocus && focus(this.focusInputViewChild?.nativeElement);
    this.cd.markForCheck();
  }
  onOverlayAnimationStart(event) {
    if (event.toState === "visible") {
      this.itemsWrapper = findSingle(this.overlayViewChild?.overlayViewChild?.nativeElement, this.virtualScroll ? ".p-scroller" : ".p-multiselect-list-container");
      this.virtualScroll && this.scroller?.setContentEl(this.itemsViewChild?.nativeElement);
      if (this.options && this.options.length) {
        if (this.virtualScroll) {
          const selectedIndex = this.modelValue() ? this.focusedOptionIndex() : -1;
          if (selectedIndex !== -1) {
            this.scroller?.scrollToIndex(selectedIndex);
          }
        } else {
          let selectedListItem = findSingle(this.itemsWrapper, '[data-p-highlight="true"]');
          if (selectedListItem) {
            selectedListItem.scrollIntoView({
              block: "nearest",
              inline: "nearest"
            });
          }
        }
      }
      if (this.filterInputChild && this.filterInputChild.nativeElement) {
        this.preventModelTouched = true;
        if (this.autofocusFilter) {
          this.filterInputChild.nativeElement.focus();
        }
      }
      this.onPanelShow.emit(event);
    }
    if (event.toState === "void") {
      this.itemsWrapper = null;
      this.onModelTouched();
      this.onPanelHide.emit(event);
    }
  }
  resetFilter() {
    if (this.filterInputChild && this.filterInputChild.nativeElement) {
      this.filterInputChild.nativeElement.value = "";
    }
    this._filterValue.set(null);
    this._filteredOptions = null;
  }
  close(event) {
    this.hide();
    event.preventDefault();
    event.stopPropagation();
  }
  clear(event) {
    this.value = null;
    this.updateModel(null, event);
    this.selectedOptions = null;
    this.onClear.emit();
    this._disableTooltip = true;
    event.stopPropagation();
  }
  labelContainerMouseLeave() {
    if (this._disableTooltip) this._disableTooltip = false;
  }
  removeOption(optionValue, event) {
    let value = this.modelValue().filter((val) => !equals(val, optionValue, this.equalityKey()));
    this.updateModel(value, event);
    this.onChange.emit({
      originalEvent: event,
      value,
      itemValue: optionValue
    });
    this.onRemove.emit({
      newValue: value,
      removed: optionValue
    });
    event && event.stopPropagation();
  }
  findNextItem(item) {
    let nextItem = item.nextElementSibling;
    if (nextItem) return hasClass(nextItem.children[0], "p-disabled") || isHidden(nextItem.children[0]) || hasClass(nextItem, "p-multiselect-item-group") ? this.findNextItem(nextItem) : nextItem.children[0];
    else return null;
  }
  findPrevItem(item) {
    let prevItem = item.previousElementSibling;
    if (prevItem) return hasClass(prevItem.children[0], "p-disabled") || isHidden(prevItem.children[0]) || hasClass(prevItem, "p-multiselect-item-group") ? this.findPrevItem(prevItem) : prevItem.children[0];
    else return null;
  }
  findNextOptionIndex(index) {
    const matchedOptionIndex = index < this.visibleOptions().length - 1 ? this.visibleOptions().slice(index + 1).findIndex((option) => this.isValidOption(option)) : -1;
    return matchedOptionIndex > -1 ? matchedOptionIndex + index + 1 : index;
  }
  findPrevOptionIndex(index) {
    const matchedOptionIndex = index > 0 ? findLastIndex(this.visibleOptions().slice(0, index), (option) => this.isValidOption(option)) : -1;
    return matchedOptionIndex > -1 ? matchedOptionIndex : index;
  }
  findLastSelectedOptionIndex() {
    return this.hasSelectedOption() ? findLastIndex(this.visibleOptions(), (option) => this.isValidSelectedOption(option)) : -1;
  }
  findLastFocusedOptionIndex() {
    const selectedIndex = this.findLastSelectedOptionIndex();
    return selectedIndex < 0 ? this.findLastOptionIndex() : selectedIndex;
  }
  findLastOptionIndex() {
    return findLastIndex(this.visibleOptions(), (option) => this.isValidOption(option));
  }
  searchOptions(event, char) {
    this.searchValue = (this.searchValue || "") + char;
    let optionIndex = -1;
    let matched = false;
    if (this.focusedOptionIndex() !== -1) {
      optionIndex = this.visibleOptions().slice(this.focusedOptionIndex()).findIndex((option) => this.isOptionMatched(option));
      optionIndex = optionIndex === -1 ? this.visibleOptions().slice(0, this.focusedOptionIndex()).findIndex((option) => this.isOptionMatched(option)) : optionIndex + this.focusedOptionIndex();
    } else {
      optionIndex = this.visibleOptions().findIndex((option) => this.isOptionMatched(option));
    }
    if (optionIndex !== -1) {
      matched = true;
    }
    if (optionIndex === -1 && this.focusedOptionIndex() === -1) {
      optionIndex = this.findFirstFocusedOptionIndex();
    }
    if (optionIndex !== -1) {
      this.changeFocusedOptionIndex(event, optionIndex);
    }
    if (this.searchTimeout) {
      clearTimeout(this.searchTimeout);
    }
    this.searchTimeout = setTimeout(() => {
      this.searchValue = "";
      this.searchTimeout = null;
    }, 500);
    return matched;
  }
  activateFilter() {
    if (this.hasFilter() && this._options) {
      if (this.group) {
        let filteredGroups = [];
        for (let optgroup of this.options) {
          let filteredSubOptions = this.filterService.filter(this.getOptionGroupChildren(optgroup), this.searchFields(), this.filterValue, this.filterMatchMode, this.filterLocale);
          if (filteredSubOptions && filteredSubOptions.length) {
            filteredGroups.push(__spreadValues(__spreadValues({}, optgroup), {
              [this.optionGroupChildren]: filteredSubOptions
            }));
          }
        }
        this._filteredOptions = filteredGroups;
      } else {
        this._filteredOptions = this.filterService.filter(this.options, this.searchFields(), this.filterValue, this.filterMatchMode, this.filterLocale);
      }
    } else {
      this._filteredOptions = null;
    }
  }
  hasFocusableElements() {
    return getFocusableElements(this.overlayViewChild.overlayViewChild.nativeElement, ':not([data-p-hidden-focusable="true"])').length > 0;
  }
  hasFilter() {
    return this._filterValue() && this._filterValue().trim().length > 0;
  }
  static \u0275fac = function MultiSelect_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MultiSelect)(\u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(FilterService), \u0275\u0275directiveInject(OverlayService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MultiSelect,
    selectors: [["p-multiSelect"], ["p-multiselect"], ["p-multi-select"]],
    contentQueries: function MultiSelect_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, Footer, 5);
        \u0275\u0275contentQuery(dirIndex, Header, 5);
        \u0275\u0275contentQuery(dirIndex, _c42, 4);
        \u0275\u0275contentQuery(dirIndex, _c52, 4);
        \u0275\u0275contentQuery(dirIndex, _c62, 4);
        \u0275\u0275contentQuery(dirIndex, _c72, 4);
        \u0275\u0275contentQuery(dirIndex, _c82, 4);
        \u0275\u0275contentQuery(dirIndex, _c92, 4);
        \u0275\u0275contentQuery(dirIndex, _c102, 4);
        \u0275\u0275contentQuery(dirIndex, _c11, 4);
        \u0275\u0275contentQuery(dirIndex, _c122, 4);
        \u0275\u0275contentQuery(dirIndex, _c132, 4);
        \u0275\u0275contentQuery(dirIndex, _c142, 4);
        \u0275\u0275contentQuery(dirIndex, _c15, 4);
        \u0275\u0275contentQuery(dirIndex, _c16, 4);
        \u0275\u0275contentQuery(dirIndex, _c17, 4);
        \u0275\u0275contentQuery(dirIndex, _c18, 4);
        \u0275\u0275contentQuery(dirIndex, _c19, 4);
        \u0275\u0275contentQuery(dirIndex, _c20, 4);
        \u0275\u0275contentQuery(dirIndex, _c21, 4);
        \u0275\u0275contentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.footerFacet = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.headerFacet = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.itemTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.groupTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.loaderTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.headerTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.filterTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.footerTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.emptyFilterTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.emptyTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.selectedItemsTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.checkIconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.loadingIconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.filterIconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.removeTokenIconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.chipIconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.clearIconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.dropdownIconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.itemCheckboxIconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.headerCheckboxIconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.templates = _t);
      }
    },
    viewQuery: function MultiSelect_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c222, 5);
        \u0275\u0275viewQuery(_c23, 5);
        \u0275\u0275viewQuery(_c24, 5);
        \u0275\u0275viewQuery(_c25, 5);
        \u0275\u0275viewQuery(_c26, 5);
        \u0275\u0275viewQuery(_c27, 5);
        \u0275\u0275viewQuery(_c28, 5);
        \u0275\u0275viewQuery(_c29, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.overlayViewChild = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.filterInputChild = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.focusInputViewChild = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.itemsViewChild = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.scroller = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.lastHiddenFocusableElementOnOverlay = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.firstHiddenFocusableElementOnOverlay = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.headerCheckboxViewChild = _t.first);
      }
    },
    hostVars: 7,
    hostBindings: function MultiSelect_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function MultiSelect_click_HostBindingHandler($event) {
          return ctx.onContainerClick($event);
        });
      }
      if (rf & 2) {
        \u0275\u0275attribute("id", ctx.id);
        \u0275\u0275styleMap(ctx.style);
        \u0275\u0275classMap(ctx.hostClasses);
        \u0275\u0275classProp("p-variant-filled", ctx.variant === "filled" || ctx.config.inputVariant() === "filled" || ctx.config.inputStyle() === "filled");
      }
    },
    inputs: {
      id: "id",
      ariaLabel: "ariaLabel",
      style: "style",
      styleClass: "styleClass",
      panelStyle: "panelStyle",
      panelStyleClass: "panelStyleClass",
      inputId: "inputId",
      disabled: [2, "disabled", "disabled", booleanAttribute],
      fluid: [2, "fluid", "fluid", booleanAttribute],
      readonly: [2, "readonly", "readonly", booleanAttribute],
      group: [2, "group", "group", booleanAttribute],
      filter: [2, "filter", "filter", booleanAttribute],
      filterPlaceHolder: "filterPlaceHolder",
      filterLocale: "filterLocale",
      overlayVisible: [2, "overlayVisible", "overlayVisible", booleanAttribute],
      tabindex: [2, "tabindex", "tabindex", numberAttribute],
      variant: "variant",
      appendTo: "appendTo",
      dataKey: "dataKey",
      name: "name",
      ariaLabelledBy: "ariaLabelledBy",
      displaySelectedLabel: "displaySelectedLabel",
      maxSelectedLabels: "maxSelectedLabels",
      selectionLimit: [2, "selectionLimit", "selectionLimit", numberAttribute],
      selectedItemsLabel: "selectedItemsLabel",
      showToggleAll: [2, "showToggleAll", "showToggleAll", booleanAttribute],
      emptyFilterMessage: "emptyFilterMessage",
      emptyMessage: "emptyMessage",
      resetFilterOnHide: [2, "resetFilterOnHide", "resetFilterOnHide", booleanAttribute],
      dropdownIcon: "dropdownIcon",
      chipIcon: "chipIcon",
      optionLabel: "optionLabel",
      optionValue: "optionValue",
      optionDisabled: "optionDisabled",
      optionGroupLabel: "optionGroupLabel",
      optionGroupChildren: "optionGroupChildren",
      showHeader: [2, "showHeader", "showHeader", booleanAttribute],
      filterBy: "filterBy",
      scrollHeight: "scrollHeight",
      lazy: [2, "lazy", "lazy", booleanAttribute],
      virtualScroll: [2, "virtualScroll", "virtualScroll", booleanAttribute],
      loading: [2, "loading", "loading", booleanAttribute],
      virtualScrollItemSize: [2, "virtualScrollItemSize", "virtualScrollItemSize", numberAttribute],
      loadingIcon: "loadingIcon",
      virtualScrollOptions: "virtualScrollOptions",
      overlayOptions: "overlayOptions",
      ariaFilterLabel: "ariaFilterLabel",
      filterMatchMode: "filterMatchMode",
      tooltip: "tooltip",
      tooltipPosition: "tooltipPosition",
      tooltipPositionStyle: "tooltipPositionStyle",
      tooltipStyleClass: "tooltipStyleClass",
      autofocusFilter: [2, "autofocusFilter", "autofocusFilter", booleanAttribute],
      display: "display",
      autocomplete: "autocomplete",
      size: "size",
      showClear: [2, "showClear", "showClear", booleanAttribute],
      autofocus: [2, "autofocus", "autofocus", booleanAttribute],
      autoZIndex: "autoZIndex",
      baseZIndex: "baseZIndex",
      showTransitionOptions: "showTransitionOptions",
      hideTransitionOptions: "hideTransitionOptions",
      defaultLabel: "defaultLabel",
      placeholder: "placeholder",
      options: "options",
      filterValue: "filterValue",
      itemSize: "itemSize",
      selectAll: "selectAll",
      focusOnHover: [2, "focusOnHover", "focusOnHover", booleanAttribute],
      filterFields: "filterFields",
      selectOnFocus: [2, "selectOnFocus", "selectOnFocus", booleanAttribute],
      autoOptionFocus: [2, "autoOptionFocus", "autoOptionFocus", booleanAttribute],
      highlightOnSelect: [2, "highlightOnSelect", "highlightOnSelect", booleanAttribute]
    },
    outputs: {
      onChange: "onChange",
      onFilter: "onFilter",
      onFocus: "onFocus",
      onBlur: "onBlur",
      onClick: "onClick",
      onClear: "onClear",
      onPanelShow: "onPanelShow",
      onPanelHide: "onPanelHide",
      onLazyLoad: "onLazyLoad",
      onRemove: "onRemove",
      onSelectAllChange: "onSelectAllChange"
    },
    features: [\u0275\u0275ProvidersFeature([MULTISELECT_VALUE_ACCESSOR, MultiSelectStyle]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c31,
    decls: 16,
    vars: 35,
    consts: [["focusInput", ""], ["elseBlock", ""], ["overlay", ""], ["content", ""], ["token", ""], ["removeicon", ""], ["firstHiddenFocusableEl", ""], ["buildInItems", ""], ["lastHiddenFocusableEl", ""], ["builtInFilterElement", ""], ["headerCheckbox", ""], ["checkboxicon", ""], ["filterInput", ""], ["scroller", ""], ["loader", ""], ["items", ""], [1, "p-hidden-accessible"], ["role", "combobox", 3, "focus", "blur", "keydown", "pTooltip", "tooltipPosition", "positionStyle", "tooltipStyleClass", "pAutoFocus"], [1, "p-multiselect-label-container", 3, "mouseleave", "pTooltip", "tooltipDisabled", "tooltipPosition", "positionStyle", "tooltipStyleClass"], [3, "ngClass"], [4, "ngIf"], [1, "p-multiselect-dropdown"], [4, "ngIf", "ngIfElse"], [3, "visibleChange", "onAnimationStart", "onHide", "visible", "options", "target", "appendTo", "autoZIndex", "baseZIndex", "showTransitionOptions", "hideTransitionOptions"], [1, "p-multiselect-chip-item"], ["class", "p-multiselect-chip-item", 4, "ngFor", "ngForOf"], ["styleClass", "p-multiselect-chip", 3, "onRemove", "label", "removable", "removeIcon"], ["class", "p-multiselect-chip-icon", 3, "click", 4, "ngIf"], [1, "p-multiselect-chip-icon", 3, "click"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["class", "p-multiselect-clear-icon", 3, "click", 4, "ngIf"], [1, "p-multiselect-clear-icon", 3, "click"], [4, "ngTemplateOutlet"], ["aria-hidden", "true", 3, "ngClass", 4, "ngIf"], ["aria-hidden", "true", 3, "class", 4, "ngIf"], ["aria-hidden", "true", 3, "ngClass"], ["aria-hidden", "true"], ["class", "p-multiselect-dropdown-icon", 4, "ngIf"], ["class", "p-multiselect-dropdown-icon", 3, "ngClass", 4, "ngIf"], [3, "styleClass", 4, "ngIf"], [1, "p-multiselect-dropdown-icon", 3, "ngClass"], [3, "styleClass"], [1, "p-multiselect-dropdown-icon"], [3, "ngClass", "ngStyle"], ["role", "presentation", 1, "p-hidden-accessible", "p-hidden-focusable", 3, "focus"], ["class", "p-multiselect-header", 4, "ngIf"], [1, "p-multiselect-list-container"], [3, "items", "style", "itemSize", "autoSize", "tabindex", "lazy", "options", "onLazyLoad", 4, "ngIf"], [1, "p-multiselect-header"], [3, "ngModel", "ariaLabel", "binary", "variant", "disabled", "onChange", 4, "ngIf"], ["class", "p-multiselect-filter-container", 4, "ngIf"], [3, "onChange", "ngModel", "ariaLabel", "binary", "variant", "disabled"], [1, "p-multiselect-filter-container"], ["pInputText", "", "type", "text", "role", "searchbox", 1, "p-multiselect-filter", 3, "input", "keydown", "click", "blur", "variant", "value", "disabled"], ["class", "p-multiselect-filter-icon", 4, "ngIf"], [1, "p-multiselect-filter-icon"], [3, "onLazyLoad", "items", "itemSize", "autoSize", "tabindex", "lazy", "options"], ["role", "listbox", "aria-multiselectable", "true", 1, "p-multiselect-list", 3, "ngClass"], ["ngFor", "", 3, "ngForOf"], ["class", "p-multiselect-empty-message", "role", "option", 3, "ngStyle", 4, "ngIf"], ["role", "option", 1, "p-multiselect-option-group", 3, "ngStyle"], [3, "onClick", "onMouseEnter", "id", "option", "selected", "label", "disabled", "template", "checkIconTemplate", "itemCheckboxIconTemplate", "itemSize", "focused", "ariaPosInset", "ariaSetSize", "variant", "highlightOnSelect"], ["role", "option", 1, "p-multiselect-empty-message", 3, "ngStyle"]],
    template: function MultiSelect_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275projectionDef(_c30);
        \u0275\u0275elementStart(0, "div", 16)(1, "input", 17, 0);
        \u0275\u0275listener("focus", function MultiSelect_Template_input_focus_1_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onInputFocus($event));
        })("blur", function MultiSelect_Template_input_blur_1_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onInputBlur($event));
        })("keydown", function MultiSelect_Template_input_keydown_1_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onKeyDown($event));
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(3, "div", 18);
        \u0275\u0275listener("mouseleave", function MultiSelect_Template_div_mouseleave_3_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.labelContainerMouseLeave());
        });
        \u0275\u0275elementStart(4, "div", 19);
        \u0275\u0275template(5, MultiSelect_ng_container_5_Template, 3, 2, "ng-container", 20)(6, MultiSelect_ng_container_6_Template, 3, 6, "ng-container", 20);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(7, MultiSelect_ng_container_7_Template, 3, 2, "ng-container", 20);
        \u0275\u0275elementStart(8, "div", 21);
        \u0275\u0275template(9, MultiSelect_ng_container_9_Template, 3, 2, "ng-container", 22)(10, MultiSelect_ng_template_10_Template, 2, 2, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "p-overlay", 23, 2);
        \u0275\u0275twoWayListener("visibleChange", function MultiSelect_Template_p_overlay_visibleChange_12_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.overlayVisible, $event) || (ctx.overlayVisible = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275listener("onAnimationStart", function MultiSelect_Template_p_overlay_onAnimationStart_12_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onOverlayAnimationStart($event));
        })("onHide", function MultiSelect_Template_p_overlay_onHide_12_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.hide());
        });
        \u0275\u0275template(14, MultiSelect_ng_template_14_Template, 13, 18, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        let tmp_15_0;
        const elseBlock_r24 = \u0275\u0275reference(11);
        \u0275\u0275attribute("data-p-hidden-accessible", true);
        \u0275\u0275advance();
        \u0275\u0275property("pTooltip", ctx.tooltip)("tooltipPosition", ctx.tooltipPosition)("positionStyle", ctx.tooltipPositionStyle)("tooltipStyleClass", ctx.tooltipStyleClass)("pAutoFocus", ctx.autofocus);
        \u0275\u0275attribute("aria-disabled", ctx.disabled)("id", ctx.inputId)("aria-label", ctx.ariaLabel)("aria-labelledby", ctx.ariaLabelledBy)("aria-haspopup", "listbox")("aria-expanded", (tmp_15_0 = ctx.overlayVisible) !== null && tmp_15_0 !== void 0 ? tmp_15_0 : false)("aria-controls", ctx.overlayVisible ? ctx.id + "_list" : null)("tabindex", !ctx.disabled ? ctx.tabindex : -1)("aria-activedescendant", ctx.focused ? ctx.focusedOptionId : void 0)("value", ctx.label() || "empty");
        \u0275\u0275advance(2);
        \u0275\u0275property("pTooltip", ctx.tooltip)("tooltipDisabled", ctx._disableTooltip)("tooltipPosition", ctx.tooltipPosition)("positionStyle", ctx.tooltipPositionStyle)("tooltipStyleClass", ctx.tooltipStyleClass);
        \u0275\u0275advance();
        \u0275\u0275property("ngClass", ctx.labelClass);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.selectedItemsTemplate && !ctx._selectedItemsTemplate);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.selectedItemsTemplate || ctx._selectedItemsTemplate);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.isVisibleClearIcon);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.loading)("ngIfElse", elseBlock_r24);
        \u0275\u0275advance(3);
        \u0275\u0275twoWayProperty("visible", ctx.overlayVisible);
        \u0275\u0275property("options", ctx.overlayOptions)("target", "@parent")("appendTo", ctx.appendTo)("autoZIndex", ctx.autoZIndex)("baseZIndex", ctx.baseZIndex)("showTransitionOptions", ctx.showTransitionOptions)("hideTransitionOptions", ctx.hideTransitionOptions);
      }
    },
    dependencies: [CommonModule, NgClass, NgForOf, NgIf, NgTemplateOutlet, NgStyle, MultiSelectItem, Overlay, SharedModule, Tooltip, Scroller, AutoFocus, CheckIcon, SearchIcon, TimesIcon, ChevronDownIcon, IconField, InputIcon, InputText, Chip, Checkbox, FormsModule, NgControlStatus, NgModel],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MultiSelect, [{
    type: Component,
    args: [{
      selector: "p-multiSelect, p-multiselect, p-multi-select",
      standalone: true,
      imports: [CommonModule, MultiSelectItem, Overlay, SharedModule, Tooltip, Scroller, AutoFocus, CheckIcon, SearchIcon, TimesIcon, ChevronDownIcon, IconField, InputIcon, InputText, Chip, Checkbox, FormsModule],
      template: `
        <div class="p-hidden-accessible" [attr.data-p-hidden-accessible]="true">
            <input
                #focusInput
                [pTooltip]="tooltip"
                [tooltipPosition]="tooltipPosition"
                [positionStyle]="tooltipPositionStyle"
                [tooltipStyleClass]="tooltipStyleClass"
                [attr.aria-disabled]="disabled"
                [attr.id]="inputId"
                role="combobox"
                [attr.aria-label]="ariaLabel"
                [attr.aria-labelledby]="ariaLabelledBy"
                [attr.aria-haspopup]="'listbox'"
                [attr.aria-expanded]="overlayVisible ?? false"
                [attr.aria-controls]="overlayVisible ? id + '_list' : null"
                [attr.tabindex]="!disabled ? tabindex : -1"
                [attr.aria-activedescendant]="focused ? focusedOptionId : undefined"
                (focus)="onInputFocus($event)"
                (blur)="onInputBlur($event)"
                (keydown)="onKeyDown($event)"
                [pAutoFocus]="autofocus"
                [attr.value]="label() || 'empty'"
            />
        </div>
        <div
            class="p-multiselect-label-container"
            [pTooltip]="tooltip"
            (mouseleave)="labelContainerMouseLeave()"
            [tooltipDisabled]="_disableTooltip"
            [tooltipPosition]="tooltipPosition"
            [positionStyle]="tooltipPositionStyle"
            [tooltipStyleClass]="tooltipStyleClass"
        >
            <div [ngClass]="labelClass">
                <ng-container *ngIf="!selectedItemsTemplate && !_selectedItemsTemplate">
                    <ng-container *ngIf="display === 'comma'">{{ label() || 'empty' }}</ng-container>
                    <ng-container *ngIf="display === 'chip'">
                        @if (chipSelectedItems() && chipSelectedItems().length === maxSelectedLabels) {
                            {{ getSelectedItemsLabel() }}
                        } @else {
                            <div #token *ngFor="let item of chipSelectedItems(); let i = index" class="p-multiselect-chip-item">
                                <p-chip styleClass="p-multiselect-chip" [label]="getLabelByValue(item)" [removable]="!disabled && !readonly" (onRemove)="removeOption(item, $event)" [removeIcon]="chipIcon">
                                    <ng-container *ngIf="chipIconTemplate || _chipIconTemplate || removeTokenIconTemplate || _removeTokenIconTemplate">
                                        <ng-template #removeicon>
                                            <ng-container *ngIf="!disabled && !readonly">
                                                <span
                                                    class="p-multiselect-chip-icon"
                                                    *ngIf="chipIconTemplate || _chipIconTemplate || removeTokenIconTemplate || _removeTokenIconTemplate"
                                                    (click)="removeOption(item, $event)"
                                                    [attr.data-pc-section]="'clearicon'"
                                                    [attr.aria-hidden]="true"
                                                >
                                                    <ng-container *ngTemplateOutlet="chipIconTemplate || _chipIconTemplate || removeTokenIconTemplate || _removeTokenIconTemplate; context: { class: 'p-multiselect-chip-icon' }"></ng-container>
                                                </span>
                                            </ng-container>
                                        </ng-template>
                                    </ng-container>
                                </p-chip>
                            </div>
                        }
                        <ng-container *ngIf="!modelValue() || modelValue().length === 0">{{ placeholder() || defaultLabel || 'empty' }}</ng-container>
                    </ng-container>
                </ng-container>
                <ng-container *ngIf="selectedItemsTemplate || _selectedItemsTemplate">
                    <ng-container *ngTemplateOutlet="selectedItemsTemplate || _selectedItemsTemplate; context: { $implicit: selectedOptions, removeChip: removeOption.bind(this) }"></ng-container>
                    <ng-container *ngIf="!modelValue() || modelValue().length === 0">{{ placeholder() || defaultLabel || 'empty' }}</ng-container>
                </ng-container>
            </div>
        </div>
        <ng-container *ngIf="isVisibleClearIcon">
            <TimesIcon *ngIf="!clearIconTemplate && !_clearIconTemplate" class="p-multiselect-clear-icon" (click)="clear($event)" [attr.data-pc-section]="'clearicon'" [attr.aria-hidden]="true" />
            <span *ngIf="clearIconTemplate || _clearIconTemplate" class="p-multiselect-clear-icon" (click)="clear($event)" [attr.data-pc-section]="'clearicon'" [attr.aria-hidden]="true">
                <ng-template *ngTemplateOutlet="clearIconTemplate || _clearIconTemplate"></ng-template>
            </span>
        </ng-container>
        <div class="p-multiselect-dropdown">
            <ng-container *ngIf="loading; else elseBlock">
                <ng-container *ngIf="loadingIconTemplate || _loadingIconTemplate">
                    <ng-container *ngTemplateOutlet="loadingIconTemplate || _loadingIconTemplate"></ng-container>
                </ng-container>
                <ng-container *ngIf="!loadingIconTemplate && !_loadingIconTemplate">
                    <span *ngIf="loadingIcon" [ngClass]="'p-multiselect-loading-icon pi-spin ' + loadingIcon" aria-hidden="true"></span>
                    <span *ngIf="!loadingIcon" [class]="'p-multiselect-loading-icon pi pi-spinner pi-spin'" aria-hidden="true"></span>
                </ng-container>
            </ng-container>
            <ng-template #elseBlock>
                <ng-container *ngIf="!dropdownIconTemplate && !_dropdownIconTemplate">
                    <span *ngIf="dropdownIcon" class="p-multiselect-dropdown-icon" [ngClass]="dropdownIcon" [attr.data-pc-section]="'triggericon'" [attr.aria-hidden]="true"></span>
                    <ChevronDownIcon *ngIf="!dropdownIcon" [styleClass]="'p-multiselect-dropdown-icon'" [attr.data-pc-section]="'triggericon'" [attr.aria-hidden]="true" />
                </ng-container>
                <span *ngIf="dropdownIconTemplate || _dropdownIconTemplate" class="p-multiselect-dropdown-icon" [attr.data-pc-section]="'triggericon'" [attr.aria-hidden]="true">
                    <ng-template *ngTemplateOutlet="dropdownIconTemplate || _dropdownIconTemplate"></ng-template>
                </span>
            </ng-template>
        </div>
        <p-overlay
            #overlay
            [(visible)]="overlayVisible"
            [options]="overlayOptions"
            [target]="'@parent'"
            [appendTo]="appendTo"
            [autoZIndex]="autoZIndex"
            [baseZIndex]="baseZIndex"
            [showTransitionOptions]="showTransitionOptions"
            [hideTransitionOptions]="hideTransitionOptions"
            (onAnimationStart)="onOverlayAnimationStart($event)"
            (onHide)="hide()"
        >
            <ng-template #content>
                <div [attr.id]="id + '_list'" [ngClass]="'p-multiselect-overlay p-component'" [ngStyle]="panelStyle" [class]="panelStyleClass">
                    <span
                        #firstHiddenFocusableEl
                        role="presentation"
                        class="p-hidden-accessible p-hidden-focusable"
                        [attr.tabindex]="0"
                        (focus)="onFirstHiddenFocus($event)"
                        [attr.data-p-hidden-accessible]="true"
                        [attr.data-p-hidden-focusable]="true"
                    >
                    </span>
                    <ng-container *ngTemplateOutlet="headerTemplate || _headerTemplate"></ng-container>
                    <div class="p-multiselect-header" *ngIf="showHeader">
                        <ng-content select="p-header"></ng-content>
                        <ng-container *ngIf="filterTemplate || _filterTemplate; else builtInFilterElement">
                            <ng-container *ngTemplateOutlet="filterTemplate || _filterTemplate; context: { options: filterOptions }"></ng-container>
                        </ng-container>
                        <ng-template #builtInFilterElement>
                            <p-checkbox [ngModel]="allSelected()" [ariaLabel]="toggleAllAriaLabel" [binary]="true" (onChange)="onToggleAll($event)" *ngIf="showToggleAll && !selectionLimit" [variant]="variant" [disabled]="disabled" #headerCheckbox>
                                <ng-template #checkboxicon let-klass="class">
                                    <CheckIcon *ngIf="!headerCheckboxIconTemplate && !_headerCheckboxIconTemplate && allSelected()" [styleClass]="klass" [attr.data-pc-section]="'icon'" />
                                    <ng-template
                                        *ngTemplateOutlet="
                                            headerCheckboxIconTemplate || _headerCheckboxIconTemplate;
                                            context: {
                                                checked: allSelected(),
                                                partialSelected: partialSelected(),
                                                class: klass
                                            }
                                        "
                                    ></ng-template>
                                </ng-template>
                            </p-checkbox>

                            <div class="p-multiselect-filter-container" *ngIf="filter">
                                <p-iconfield>
                                    <input
                                        #filterInput
                                        pInputText
                                        [variant]="variant"
                                        type="text"
                                        [attr.autocomplete]="autocomplete"
                                        role="searchbox"
                                        [attr.aria-owns]="id + '_list'"
                                        [attr.aria-activedescendant]="focusedOptionId"
                                        [value]="_filterValue() || ''"
                                        (input)="onFilterInputChange($event)"
                                        (keydown)="onFilterKeyDown($event)"
                                        (click)="onInputClick($event)"
                                        (blur)="onFilterBlur($event)"
                                        class="p-multiselect-filter"
                                        [disabled]="disabled"
                                        [attr.placeholder]="filterPlaceHolder"
                                        [attr.aria-label]="ariaFilterLabel"
                                    />
                                    <p-inputicon>
                                        <SearchIcon [styleClass]="'p-multiselect-filter-icon'" *ngIf="!filterIconTemplate && !_filterIconTemplate" />
                                        <span *ngIf="filterIconTemplate || _filterIconTemplate" class="p-multiselect-filter-icon">
                                            <ng-template *ngTemplateOutlet="filterIconTemplate || _filterIconTemplate"></ng-template>
                                        </span>
                                    </p-inputicon>
                                </p-iconfield>
                            </div>
                        </ng-template>
                    </div>
                    <div class="p-multiselect-list-container" [style.max-height]="virtualScroll ? 'auto' : scrollHeight || 'auto'">
                        <p-scroller
                            *ngIf="virtualScroll"
                            #scroller
                            [items]="visibleOptions()"
                            [style]="{ height: scrollHeight }"
                            [itemSize]="virtualScrollItemSize || _itemSize"
                            [autoSize]="true"
                            [tabindex]="-1"
                            [lazy]="lazy"
                            (onLazyLoad)="onLazyLoad.emit($event)"
                            [options]="virtualScrollOptions"
                        >
                            <ng-template #content let-items let-scrollerOptions="options">
                                <ng-container *ngTemplateOutlet="buildInItems; context: { $implicit: items, options: scrollerOptions }"></ng-container>
                            </ng-template>
                            <ng-container *ngIf="loaderTemplate || _loaderTemplate">
                                <ng-template #loader let-scrollerOptions="options">
                                    <ng-container *ngTemplateOutlet="loaderTemplate || _loaderTemplate; context: { options: scrollerOptions }"></ng-container>
                                </ng-template>
                            </ng-container>
                        </p-scroller>
                        <ng-container *ngIf="!virtualScroll">
                            <ng-container *ngTemplateOutlet="buildInItems; context: { $implicit: visibleOptions(), options: {} }"></ng-container>
                        </ng-container>

                        <ng-template #buildInItems let-items let-scrollerOptions="options">
                            <ul #items class="p-multiselect-list" [ngClass]="scrollerOptions.contentStyleClass" [style]="scrollerOptions.contentStyle" role="listbox" aria-multiselectable="true" [attr.aria-label]="listLabel">
                                <ng-template ngFor let-option [ngForOf]="items" let-i="index">
                                    <ng-container *ngIf="isOptionGroup(option)">
                                        <li [attr.id]="id + '_' + getOptionIndex(i, scrollerOptions)" class="p-multiselect-option-group" [ngStyle]="{ height: scrollerOptions.itemSize + 'px' }" role="option">
                                            <span *ngIf="!groupTemplate">{{ getOptionGroupLabel(option.optionGroup) }}</span>
                                            <ng-container *ngTemplateOutlet="groupTemplate; context: { $implicit: option.optionGroup }"></ng-container>
                                        </li>
                                    </ng-container>
                                    <ng-container *ngIf="!isOptionGroup(option)">
                                        <p-multiselect-item
                                            [id]="id + '_' + getOptionIndex(i, scrollerOptions)"
                                            [option]="option"
                                            [selected]="isSelected(option)"
                                            [label]="getOptionLabel(option)"
                                            [disabled]="isOptionDisabled(option)"
                                            [template]="itemTemplate || _itemTemplate"
                                            [checkIconTemplate]="checkIconTemplate || _checkIconTemplate"
                                            [itemCheckboxIconTemplate]="itemCheckboxIconTemplate || _itemCheckboxIconTemplate"
                                            [itemSize]="scrollerOptions.itemSize"
                                            [focused]="focusedOptionIndex() === getOptionIndex(i, scrollerOptions)"
                                            [ariaPosInset]="getAriaPosInset(getOptionIndex(i, scrollerOptions))"
                                            [ariaSetSize]="ariaSetSize"
                                            [variant]="variant"
                                            [highlightOnSelect]="highlightOnSelect"
                                            (onClick)="onOptionSelect($event, false, getOptionIndex(i, scrollerOptions))"
                                            (onMouseEnter)="onOptionMouseEnter($event, getOptionIndex(i, scrollerOptions))"
                                        ></p-multiselect-item>
                                    </ng-container>
                                </ng-template>

                                <li *ngIf="hasFilter() && isEmpty()" class="p-multiselect-empty-message" [ngStyle]="{ height: scrollerOptions.itemSize + 'px' }" role="option">
                                    @if (!emptyFilterTemplate && !_emptyFilterTemplate && !emptyTemplate && !_emptyTemplate) {
                                        {{ emptyFilterMessageLabel }}
                                    } @else {
                                        <ng-container *ngTemplateOutlet="emptyFilterTemplate || _emptyFilterTemplate || emptyTemplate || _emptyFilterTemplate"></ng-container>
                                    }
                                </li>
                                <li *ngIf="!hasFilter() && isEmpty()" class="p-multiselect-empty-message" [ngStyle]="{ height: scrollerOptions.itemSize + 'px' }" role="option">
                                    @if (!emptyTemplate && !_emptyTemplate) {
                                        {{ emptyMessageLabel }}
                                    } @else {
                                        <ng-container *ngTemplateOutlet="emptyTemplate || _emptyTemplate"></ng-container>
                                    }
                                </li>
                            </ul>
                        </ng-template>
                    </div>
                    <div *ngIf="footerFacet || footerTemplate || _footerTemplate">
                        <ng-content select="p-footer"></ng-content>
                        <ng-container *ngTemplateOutlet="footerTemplate || _footerTemplate"></ng-container>
                    </div>

                    <span
                        #lastHiddenFocusableEl
                        role="presentation"
                        class="p-hidden-accessible p-hidden-focusable"
                        [attr.tabindex]="0"
                        (focus)="onLastHiddenFocus($event)"
                        [attr.data-p-hidden-accessible]="true"
                        [attr.data-p-hidden-focusable]="true"
                    ></span>
                </div>
            </ng-template>
        </p-overlay>
    `,
      providers: [MULTISELECT_VALUE_ACCESSOR, MultiSelectStyle],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      host: {
        "[attr.id]": "id",
        "[style]": "style",
        "(click)": "onContainerClick($event)",
        "[class.p-variant-filled]": 'variant === "filled" || config.inputVariant() === "filled" || config.inputStyle() === "filled" '
      }
    }]
  }], () => [{
    type: NgZone
  }, {
    type: FilterService
  }, {
    type: OverlayService
  }], {
    id: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input
    }],
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    panelStyle: [{
      type: Input
    }],
    panelStyleClass: [{
      type: Input
    }],
    inputId: [{
      type: Input
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    fluid: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    readonly: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    group: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    filter: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    filterPlaceHolder: [{
      type: Input
    }],
    filterLocale: [{
      type: Input
    }],
    overlayVisible: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    tabindex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    variant: [{
      type: Input
    }],
    appendTo: [{
      type: Input
    }],
    dataKey: [{
      type: Input
    }],
    name: [{
      type: Input
    }],
    ariaLabelledBy: [{
      type: Input
    }],
    displaySelectedLabel: [{
      type: Input
    }],
    maxSelectedLabels: [{
      type: Input
    }],
    selectionLimit: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    selectedItemsLabel: [{
      type: Input
    }],
    showToggleAll: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    emptyFilterMessage: [{
      type: Input
    }],
    emptyMessage: [{
      type: Input
    }],
    resetFilterOnHide: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    dropdownIcon: [{
      type: Input
    }],
    chipIcon: [{
      type: Input
    }],
    optionLabel: [{
      type: Input
    }],
    optionValue: [{
      type: Input
    }],
    optionDisabled: [{
      type: Input
    }],
    optionGroupLabel: [{
      type: Input
    }],
    optionGroupChildren: [{
      type: Input
    }],
    showHeader: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    filterBy: [{
      type: Input
    }],
    scrollHeight: [{
      type: Input
    }],
    lazy: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    virtualScroll: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    loading: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    virtualScrollItemSize: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    loadingIcon: [{
      type: Input
    }],
    virtualScrollOptions: [{
      type: Input
    }],
    overlayOptions: [{
      type: Input
    }],
    ariaFilterLabel: [{
      type: Input
    }],
    filterMatchMode: [{
      type: Input
    }],
    tooltip: [{
      type: Input
    }],
    tooltipPosition: [{
      type: Input
    }],
    tooltipPositionStyle: [{
      type: Input
    }],
    tooltipStyleClass: [{
      type: Input
    }],
    autofocusFilter: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    display: [{
      type: Input
    }],
    autocomplete: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    showClear: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    autofocus: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    autoZIndex: [{
      type: Input
    }],
    baseZIndex: [{
      type: Input
    }],
    showTransitionOptions: [{
      type: Input
    }],
    hideTransitionOptions: [{
      type: Input
    }],
    defaultLabel: [{
      type: Input
    }],
    placeholder: [{
      type: Input
    }],
    options: [{
      type: Input
    }],
    filterValue: [{
      type: Input
    }],
    itemSize: [{
      type: Input
    }],
    selectAll: [{
      type: Input
    }],
    focusOnHover: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    filterFields: [{
      type: Input
    }],
    selectOnFocus: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    autoOptionFocus: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    highlightOnSelect: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    onChange: [{
      type: Output
    }],
    onFilter: [{
      type: Output
    }],
    onFocus: [{
      type: Output
    }],
    onBlur: [{
      type: Output
    }],
    onClick: [{
      type: Output
    }],
    onClear: [{
      type: Output
    }],
    onPanelShow: [{
      type: Output
    }],
    onPanelHide: [{
      type: Output
    }],
    onLazyLoad: [{
      type: Output
    }],
    onRemove: [{
      type: Output
    }],
    onSelectAllChange: [{
      type: Output
    }],
    overlayViewChild: [{
      type: ViewChild,
      args: ["overlay"]
    }],
    filterInputChild: [{
      type: ViewChild,
      args: ["filterInput"]
    }],
    focusInputViewChild: [{
      type: ViewChild,
      args: ["focusInput"]
    }],
    itemsViewChild: [{
      type: ViewChild,
      args: ["items"]
    }],
    scroller: [{
      type: ViewChild,
      args: ["scroller"]
    }],
    lastHiddenFocusableElementOnOverlay: [{
      type: ViewChild,
      args: ["lastHiddenFocusableEl"]
    }],
    firstHiddenFocusableElementOnOverlay: [{
      type: ViewChild,
      args: ["firstHiddenFocusableEl"]
    }],
    headerCheckboxViewChild: [{
      type: ViewChild,
      args: ["headerCheckbox"]
    }],
    footerFacet: [{
      type: ContentChild,
      args: [Footer]
    }],
    headerFacet: [{
      type: ContentChild,
      args: [Header]
    }],
    itemTemplate: [{
      type: ContentChild,
      args: ["item", {
        descendants: false
      }]
    }],
    groupTemplate: [{
      type: ContentChild,
      args: ["group", {
        descendants: false
      }]
    }],
    loaderTemplate: [{
      type: ContentChild,
      args: ["loader", {
        descendants: false
      }]
    }],
    headerTemplate: [{
      type: ContentChild,
      args: ["header", {
        descendants: false
      }]
    }],
    filterTemplate: [{
      type: ContentChild,
      args: ["filter", {
        descendants: false
      }]
    }],
    footerTemplate: [{
      type: ContentChild,
      args: ["footer", {
        descendants: false
      }]
    }],
    emptyFilterTemplate: [{
      type: ContentChild,
      args: ["emptyfilter", {
        descendants: false
      }]
    }],
    emptyTemplate: [{
      type: ContentChild,
      args: ["empty", {
        descendants: false
      }]
    }],
    selectedItemsTemplate: [{
      type: ContentChild,
      args: ["selecteditems", {
        descendants: false
      }]
    }],
    checkIconTemplate: [{
      type: ContentChild,
      args: ["checkicon", {
        descendants: false
      }]
    }],
    loadingIconTemplate: [{
      type: ContentChild,
      args: ["loadingicon", {
        descendants: false
      }]
    }],
    filterIconTemplate: [{
      type: ContentChild,
      args: ["filtericon", {
        descendants: false
      }]
    }],
    removeTokenIconTemplate: [{
      type: ContentChild,
      args: ["removetokenicon", {
        descendants: false
      }]
    }],
    chipIconTemplate: [{
      type: ContentChild,
      args: ["chipicon", {
        descendants: false
      }]
    }],
    clearIconTemplate: [{
      type: ContentChild,
      args: ["clearicon", {
        descendants: false
      }]
    }],
    dropdownIconTemplate: [{
      type: ContentChild,
      args: ["dropdownicon", {
        descendants: false
      }]
    }],
    itemCheckboxIconTemplate: [{
      type: ContentChild,
      args: ["itemcheckboxicon", {
        descendants: false
      }]
    }],
    headerCheckboxIconTemplate: [{
      type: ContentChild,
      args: ["headercheckboxicon", {
        descendants: false
      }]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var MultiSelectModule = class _MultiSelectModule {
  static \u0275fac = function MultiSelectModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MultiSelectModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _MultiSelectModule,
    imports: [MultiSelect, SharedModule],
    exports: [MultiSelect, SharedModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [MultiSelect, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MultiSelectModule, [{
    type: NgModule,
    args: [{
      imports: [MultiSelect, SharedModule],
      exports: [MultiSelect, SharedModule]
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-progressspinner.mjs
var theme5 = ({
  dt
}) => `
.p-progressspinner {
    position: relative;
    margin: 0 auto;
    width: 100px;
    height: 100px;
    display: inline-block;
}

.p-progressspinner::before {
    content: "";
    display: block;
    padding-top: 100%;
}

.p-progressspinner-spin {
    height: 100%;
    transform-origin: center center;
    width: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    animation: p-progressspinner-rotate 2s linear infinite;
}

.p-progressspinner-circle {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: 0;
    stroke: ${dt("progressspinner.colorOne")};
    animation: p-progressspinner-dash 1.5s ease-in-out infinite, p-progressspinner-color 6s ease-in-out infinite;
    stroke-linecap: round;
}

@keyframes p-progressspinner-rotate {
    100% {
        transform: rotate(360deg);
    }
}
@keyframes p-progressspinner-dash {
    0% {
        stroke-dasharray: 1, 200;
        stroke-dashoffset: 0;
    }
    50% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -35px;
    }
    100% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -124px;
    }
}
@keyframes p-progressspinner-color {
    100%,
    0% {
        stroke: ${dt("progressspinner.colorOne")};
    }
    40% {
        stroke: ${dt("progressspinner.colorTwo")};
    }
    66% {
        stroke: ${dt("progressspinner.colorThree")};
    }
    80%,
    90% {
        stroke: ${dt("progressspinner.colorFour")};
    }
}
`;
var classes5 = {
  root: "p-progressspinner",
  spin: "p-progressspinner-spin",
  circle: "p-progressspinner-circle"
};
var ProgressSpinnerStyle = class _ProgressSpinnerStyle extends BaseStyle {
  name = "progressspinner";
  theme = theme5;
  classes = classes5;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ProgressSpinnerStyle_BaseFactory;
    return function ProgressSpinnerStyle_Factory(__ngFactoryType__) {
      return (\u0275ProgressSpinnerStyle_BaseFactory || (\u0275ProgressSpinnerStyle_BaseFactory = \u0275\u0275getInheritedFactory(_ProgressSpinnerStyle)))(__ngFactoryType__ || _ProgressSpinnerStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _ProgressSpinnerStyle,
    factory: _ProgressSpinnerStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProgressSpinnerStyle, [{
    type: Injectable
  }], null, null);
})();
var ProgressSpinnerClasses;
(function(ProgressSpinnerClasses2) {
  ProgressSpinnerClasses2["root"] = "p-progressspinner";
  ProgressSpinnerClasses2["spin"] = "p-progressspinner-spin";
  ProgressSpinnerClasses2["circle"] = "p-progressspinner-circle";
})(ProgressSpinnerClasses || (ProgressSpinnerClasses = {}));
var ProgressSpinner = class _ProgressSpinner extends BaseComponent {
  /**
   * Class of the element.
   * @group Props
   */
  styleClass;
  /**
   * Inline style of the element.
   * @group Props
   */
  style;
  /**
   * Width of the circle stroke.
   * @group Props
   */
  strokeWidth = "2";
  /**
   * Color for the background of the circle.
   * @group Props
   */
  fill = "none";
  /**
   * Duration of the rotate animation.
   * @group Props
   */
  animationDuration = "2s";
  /**
   * Used to define a aria label attribute the current element.
   * @group Props
   */
  ariaLabel;
  _componentStyle = inject(ProgressSpinnerStyle);
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ProgressSpinner_BaseFactory;
    return function ProgressSpinner_Factory(__ngFactoryType__) {
      return (\u0275ProgressSpinner_BaseFactory || (\u0275ProgressSpinner_BaseFactory = \u0275\u0275getInheritedFactory(_ProgressSpinner)))(__ngFactoryType__ || _ProgressSpinner);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _ProgressSpinner,
    selectors: [["p-progressSpinner"], ["p-progress-spinner"], ["p-progressspinner"]],
    inputs: {
      styleClass: "styleClass",
      style: "style",
      strokeWidth: "strokeWidth",
      fill: "fill",
      animationDuration: "animationDuration",
      ariaLabel: "ariaLabel"
    },
    features: [\u0275\u0275ProvidersFeature([ProgressSpinnerStyle]), \u0275\u0275InheritDefinitionFeature],
    decls: 3,
    vars: 11,
    consts: [["role", "progressbar", 1, "p-progressspinner", 3, "ngStyle", "ngClass"], ["viewBox", "25 25 50 50", 1, "p-progressspinner-spin"], ["cx", "50", "cy", "50", "r", "20", "stroke-miterlimit", "10", 1, "p-progressspinner-circle"]],
    template: function ProgressSpinner_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(1, "svg", 1);
        \u0275\u0275element(2, "circle", 2);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275property("ngStyle", ctx.style)("ngClass", ctx.styleClass);
        \u0275\u0275attribute("aria-label", ctx.ariaLabel)("aria-busy", true)("data-pc-name", "progressspinner")("data-pc-section", "root");
        \u0275\u0275advance();
        \u0275\u0275styleProp("animation-duration", ctx.animationDuration);
        \u0275\u0275attribute("data-pc-section", "root");
        \u0275\u0275advance();
        \u0275\u0275attribute("fill", ctx.fill)("stroke-width", ctx.strokeWidth);
      }
    },
    dependencies: [CommonModule, NgClass, NgStyle, SharedModule],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProgressSpinner, [{
    type: Component,
    args: [{
      selector: "p-progressSpinner, p-progress-spinner, p-progressspinner",
      standalone: true,
      imports: [CommonModule, SharedModule],
      template: `
        <div class="p-progressspinner" [ngStyle]="style" [ngClass]="styleClass" role="progressbar" [attr.aria-label]="ariaLabel" [attr.aria-busy]="true" [attr.data-pc-name]="'progressspinner'" [attr.data-pc-section]="'root'">
            <svg class="p-progressspinner-spin" viewBox="25 25 50 50" [style.animation-duration]="animationDuration" [attr.data-pc-section]="'root'">
                <circle class="p-progressspinner-circle" cx="50" cy="50" r="20" [attr.fill]="fill" [attr.stroke-width]="strokeWidth" stroke-miterlimit="10" />
            </svg>
        </div>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [ProgressSpinnerStyle]
    }]
  }], null, {
    styleClass: [{
      type: Input
    }],
    style: [{
      type: Input
    }],
    strokeWidth: [{
      type: Input
    }],
    fill: [{
      type: Input
    }],
    animationDuration: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input
    }]
  });
})();
var ProgressSpinnerModule = class _ProgressSpinnerModule {
  static \u0275fac = function ProgressSpinnerModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProgressSpinnerModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _ProgressSpinnerModule,
    imports: [ProgressSpinner, SharedModule],
    exports: [ProgressSpinner, SharedModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [ProgressSpinner, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProgressSpinnerModule, [{
    type: NgModule,
    args: [{
      imports: [ProgressSpinner, SharedModule],
      exports: [ProgressSpinner, SharedModule]
    }]
  }], null, null);
})();

// src/app/common/prompts/prompt.model.ts
var RoleKey;
(function(RoleKey2) {
  RoleKey2["None"] = "aiPrompt.role.none";
  RoleKey2["ContentDesigner"] = "aiPrompt.role.contentDesigner";
  RoleKey2["SeoExpert"] = "aiPrompt.role.seoExpert";
  RoleKey2["AccessibilityExpert"] = "aiPrompt.role.accessibilityExpert";
  RoleKey2["Translator"] = "aiPrompt.role.translator";
})(RoleKey || (RoleKey = {}));
var OutputKey;
(function(OutputKey2) {
  OutputKey2["Text"] = "aiPrompt.output.text";
  OutputKey2["Html"] = "aiPrompt.output.html";
  OutputKey2["Json"] = "aiPrompt.output.json";
})(OutputKey || (OutputKey = {}));
var RubricKey;
(function(RubricKey2) {
  RubricKey2["NoCommentary"] = "aiPrompt.rubric.noCommentary";
  RubricKey2["PreserveHtmlStructure"] = "aiPrompt.rubric.preserveHtmlStructure";
  RubricKey2["CharacterLimit"] = "aiPrompt.rubric.characterLimit";
  RubricKey2["Description"] = "aiPrompt.rubric.description";
  RubricKey2["DescriptionEN"] = "aiPrompt.rubric.descriptionEN";
  RubricKey2["DescriptionFR"] = "aiPrompt.rubric.descriptionFR";
  RubricKey2["Keywords"] = "aiPrompt.rubric.keywords";
  RubricKey2["CraTermTranslations"] = "aiPrompt.rubric.craTermTranslations";
})(RubricKey || (RubricKey = {}));
var InventoryPromptKey;
(function(InventoryPromptKey2) {
  InventoryPromptKey2["Metadata"] = "aiPrompt.inventory.metadata";
  InventoryPromptKey2["Description"] = "aiPrompt.inventory.description";
  InventoryPromptKey2["Keywords"] = "aiPrompt.inventory.keywords";
})(InventoryPromptKey || (InventoryPromptKey = {}));
var PagePromptKey;
(function(PagePromptKey2) {
  PagePromptKey2["Headings"] = "aiPrompt.page.headings";
  PagePromptKey2["Doormats"] = "aiPrompt.page.doormats";
  PagePromptKey2["PlainLanguage"] = "aiPrompt.page.plainLanguage";
})(PagePromptKey || (PagePromptKey = {}));
var ProblemPromptKey;
(function(ProblemPromptKey2) {
  ProblemPromptKey2["Alerts"] = "aiPrompt.problem.alerts";
})(ProblemPromptKey || (ProblemPromptKey = {}));

// src/app/common/prompts/inventory.prompts.ts
var InventoryPrompts = {
  [InventoryPromptKey.Metadata]: {
    role: RoleKey.SeoExpert,
    task: "Generate a new SEO meta description and a list of target keywords for a webpage in both English and French. The French and English versions should be closely aligned in meaning but localized appropriately, not just translated word-for-word.",
    rubric: [RubricKey.Description, RubricKey.DescriptionEN, RubricKey.DescriptionFR, RubricKey.Keywords, RubricKey.CraTermTranslations],
    output: OutputKey.Json,
    jsonSchema: `{
"en": {
"description": "string (120-160 chars)",
"keywords": ["string", "string", "string", "string", "string", "string", "string", "string", "string", "string"]
},
"fr": {
"description": "string (120-200 chars)",
"keywords": ["string", "string", "string", "string", "string", "string", "string", "string", "string", "string"]
}
}`
  },
  [InventoryPromptKey.Description]: {
    role: RoleKey.SeoExpert,
    task: "Generate a concise meta description in English for the following web page content. The description must capture the main topic and use terminology found in the content.",
    rubric: [RubricKey.CharacterLimit, RubricKey.NoCommentary],
    output: OutputKey.Json,
    jsonSchema: `{
  "title": "string (max 60 chars)",
  "description": "string (max 275 chars)",
  "keywords": ["string", "string", ...]
}`
  },
  [InventoryPromptKey.Keywords]: {
    role: RoleKey.SeoExpert,
    task: "Generate 10 meaningful, topic-specific meta keywords that are DIRECTLY EXTRACTED from or strongly implied by the content. Return only a comma separated list of keywords.",
    rubric: [RubricKey.CharacterLimit, RubricKey.NoCommentary],
    output: OutputKey.Text
  }
};

// src/app/common/prompts/shared.prompts.ts
var RoleFragment = {
  [RoleKey.SeoExpert]: "You are a bilingual search engine optimization expert (Canadian French and English).",
  [RoleKey.ContentDesigner]: "You are an expert web content designer with 10 years of experience in the Canadian public service.",
  [RoleKey.AccessibilityExpert]: "You are a web accessibility expert.",
  [RoleKey.Translator]: "You are an expert government translator for Canadian English and French.",
  [RoleKey.None]: ""
};
var OutputFragment = {
  [OutputKey.Text]: "Provide ONLY the requested output as plain text with absolutely NO additional commentary, explanations, markdown formatting, or preamble.",
  [OutputKey.Html]: "Return ONLY valid HTML with no markdown code blocks (no ```html). Preserve the original code structure where possible, only modifying the specific elements needed to meet the task requirements.",
  [OutputKey.Json]: "You must return ONLY valid JSON. No markdown (no ```json), no explanations, no preamble. The response must be directly parseable by JSON.parse()."
};
var RubricFragment = {
  [RubricKey.Description]: "Description: The description must capture the main topic and use terminology found in the content.",
  [RubricKey.DescriptionEN]: "English description: Must be between 130 and 160 characters (including spaces).",
  [RubricKey.DescriptionFR]: "French description: Must be concise but is permitted to be longer than the English version, up to a maximum of 275 characters (including spaces).",
  [RubricKey.Keywords]: 'Keywords: Provide 10 highly relevant words or short phrases directly extracted from or strongly implied by the content. Do NOT include "Canada Revenue Agency" or "Agence du revenu du Canada" in the keyword list.',
  [RubricKey.CraTermTranslations]: `Important CRA-specific translations:
    - "Canada Revenue Agency" \u2192 "Agence du revenu du Canada"
    - "income tax" \u2192 "imp\xF4t sur le revenu"
    - "benefits" \u2192 "prestations"
    - "tax return" \u2192 "d\xE9claration de revenus"
    - "GST/HST" \u2192 "TPS/TVH"
    - "business number" \u2192 "num\xE9ro d'entreprise"
    - "tax credit" \u2192 "cr\xE9dit d'imp\xF4t"
    - "deduction" \u2192 "d\xE9duction"
    - "tax-free savings account (TFSA)" \u2192 "compte d'\xE9pargne libre d'imp\xF4t (CELI)"
    - "registered retirement savings plan (RRSP)" \u2192 "r\xE9gime enregistr\xE9 d'\xE9pargne-retraite (REER)"`,
  [RubricKey.NoCommentary]: "Response contains no preamble or explanatory text beyond what was requested.",
  [RubricKey.PreserveHtmlStructure]: "Original HTML structure, attributes, and formatting are maintained where possible.",
  [RubricKey.CharacterLimit]: "Response must be under the specified character limit."
};

// src/app/services/ai/prompt.service.ts
var AiPromptService = class _AiPromptService {
  composePrompt(config) {
    const parts = [
      config.role ? `### Role
${RoleFragment[config.role]}` : null,
      config.task ? `### Task
${config.task}` : null,
      this.formatRubric(config.rubric),
      config.output ? `### Output requirements
${OutputFragment[config.output]}` : null
    ].filter((p) => p);
    if (config.output === OutputKey.Json && config.jsonSchema) {
      parts.push(`### JSON schema
${config.jsonSchema}`);
    }
    return parts.join("\n\n");
  }
  formatRubric(rubricKeys) {
    if (!rubricKeys?.length)
      return "";
    const criteria = rubricKeys.map((key) => RubricFragment[key]);
    return `### Quality criteria
${criteria.map((c, i) => `${i + 1}. ${c}`).join("\n")}`;
  }
  static \u0275fac = function AiPromptService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AiPromptService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AiPromptService, factory: _AiPromptService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AiPromptService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/services/ai/openrouter.service.ts
var OpenRouterModels = {
  first: "qwen/qwen3-next-80b-a3b-instruct:free",
  second: "nvidia/nemotron-3-nano-30b-a3b:free",
  third: "stepfun/step-3.5-flash:free"
};
var OpenRouterService = class _OpenRouterService {
  http = inject(HttpClient);
  aiPromptService = inject(AiPromptService);
  apiUrl = environment.openrouterFunctionUrl;
  // Default fallback chain — free models in preference order
  defaultModels = [
    OpenRouterModels.first,
    OpenRouterModels.second,
    OpenRouterModels.third
  ];
  state = signal({
    loading: false,
    error: null,
    respondingModel: null
  });
  // Returns full OpenRouter response
  sendToAI(_0, _1) {
    return __async(this, arguments, function* (config, content, models = this.defaultModels, temperature = 0) {
      this.state.set({ loading: true, error: null, respondingModel: null });
      try {
        const systemPrompt = this.aiPromptService.composePrompt(config);
        const response = yield firstValueFrom(this.http.post(this.apiUrl, {
          models,
          systemPrompt,
          content,
          temperature
        }));
        this.state.set({
          loading: false,
          error: null,
          respondingModel: response.model ?? null
        });
        return response;
      } catch (error) {
        const message = error?.error?.error ?? error?.message ?? "Unknown error";
        this.state.set({ loading: false, error: message, respondingModel: null });
        throw error;
      }
    });
  }
  // Returns just the text from the OpenRouter response
  getTextFromAI(_0, _1) {
    return __async(this, arguments, function* (config, content, models = this.defaultModels, temperature = 0) {
      const response = yield this.sendToAI(config, content, models, temperature);
      return response.choices?.[0]?.message?.content ?? "";
    });
  }
  static \u0275fac = function OpenRouterService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OpenRouterService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _OpenRouterService, factory: _OpenRouterService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OpenRouterService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  PlusIcon,
  TimesCircleIcon,
  ProjectPhase,
  PhaseStatus,
  PageTemplate,
  FIELD_FILTERS,
  COLUMN_GROUPS,
  FetchService,
  GitHubAuthService,
  ExportGitHubService,
  Chip,
  ChipModule,
  Fieldset,
  FieldsetModule,
  RadioButton,
  RadioButtonModule,
  MultiSelect,
  MultiSelectModule,
  ProgressSpinner,
  ProgressSpinnerModule,
  RoleKey,
  OutputKey,
  RubricKey,
  InventoryPromptKey,
  PagePromptKey,
  ProblemPromptKey,
  InventoryPrompts,
  RoleFragment,
  OutputFragment,
  RubricFragment,
  AiPromptService,
  OpenRouterService
};
//# sourceMappingURL=chunk-N3NYJVWZ.js.map
