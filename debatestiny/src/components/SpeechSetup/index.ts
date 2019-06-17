export default class Speech {
    static Recognition(): SpeechRecognition {
        try {
            return new SpeechRecognition();
        } catch (e) {
            return new webkitSpeechRecognition();
        }
    }
    static Grammar(): SpeechGrammar {
        try {
            return new SpeechGrammar();
        } catch (e) {
            return new webkitSpeechGrammar();
        }
    }
    static GrammarList(): SpeechGrammarList {
        try {
            return new SpeechGrammarList();
        } catch (e) {
            return new webkitSpeechGrammarList();
        }
    }
}
