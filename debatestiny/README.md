# Debatestiny Frontend

<!-- TOC depthFrom:2 -->

- [Run](#run)
    - [Possible Fixes](#possible-fixes)

<!-- /TOC -->

## Run

1. Install dependencies: `yarn install`
1. Run the frontend: `yarn start`

### Possible Fixes

- If you get an error about `onaudioend` not being in the type `SpeechRecognition`
    - Fix by modifying the `webspeechapi` node module to add `onaudioend: (ev: Event) => any;` to the `SpeechRecognition` interface
