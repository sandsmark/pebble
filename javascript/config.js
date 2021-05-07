// In IE, navigator.userLanguage returns the operating system region and language setting. 
// In Firefox, Opera, Safari and Chrome, navigator.language returns the browser application language setting. 
// So, we can use them to get the user language and decide what language content to return.

// Figure out the language, default to English because that's what I speak.

// en = English, de = German, cs = Czechoslovakia, cz = Czech Republic,  fr = French, pt = Portugese, es = Castellano
var known = {
     en: true,
     cs: true,
     cz: true,
     de: true,
     fr: true,
     pt: true,
     es: true
};

// var lang = (navigator.language) ? navigator.language : navigator.userLanguage;
// lang = lang.substr(1,2);

var lang = (navigator.language || navigator.userLanguage || 'en').substr(0, 2);

if(!known[lang])
  {
    lang = 'en';
  }

var locale = "cs_" + lang;