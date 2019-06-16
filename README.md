# Debatestiny

A debate help application which provides:
- [ ] Speech-to-text translation of the conversation
- [ ] Display conversation (togglable between the following)
    - [ ] DESC time order (old Twitter)
    - [ ] ASC time order (Twitch chat)
- [ ] Full text search of the conversation
- [ ] Replayable audio clips
- [ ] Note taking capibilities
- [ ] Download/load data locally

More details are in the [notes.md file](/notes.md)

## Technology

- For Speech-to-text
    - Use the WebSpeechApi (It's free and easy to install on a personal computer e.g. download a browser)
        - Implementation details:
            - [Google - Voice Driven Web Apps Introduction to the Web Speech API](https://developers.google.com/web/updates/2013/01/Voice-Driven-Web-Apps-Introduction-to-the-Web-Speech-API)
            - [MDN - SpeechRecognition API](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition)
- Display converstaion
- Full text search
    - Use [LunrJS](https://lunrjs.com/) and the matching [@types/lunr](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/lunr)
- Replayable audio clips
    - Possible ideas
        - Get Twitch clip or timestamp
        - Replay from downloaded file
- Note taking capibilities
- Download/load data locally

## Thank You

- [React TS Starter - by rocky-jaiswal](https://github.com/rocky-jaiswal/react-ts-starter)
    - Helped simplify my React Redux config
