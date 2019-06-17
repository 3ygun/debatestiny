
// Chrome support for the Web Speech API is hidden behind a webkit-prefixe
// Therefor we need to add this types file for the Chrome versions of the main API types
// These types are based off the `declare var SpeechRecognition` in Typescript's lib.dom.d.ts file

declare var webkitSpeechRecognition: {
    prototype: SpeechRecognition;
    new(): SpeechRecognition;
};

declare var webkitSpeechGrammar: {
    prototype: SpeechGrammar;
    new(): SpeechGrammar;
};

declare var webkitSpeechGrammarList: {
    prototype: SpeechGrammarList;
    new(): SpeechGrammarList;
};
