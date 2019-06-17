# Debatestiny Frontend

<!-- TOC depthFrom:2 -->

- [Run](#run)
- [Notes](#notes)
- [Known Problems](#known-problems)
    - [Firefox](#firefox)

<!-- /TOC -->

## Run

1. Install dependencies: `yarn install`
1. Run the frontend: `yarn start`

## Notes

- Need to revert the `tslint.json` change to disable `no-any` checking

## Known Problems

### Firefox

- Enable the `media.webspeech` API in `about:config` to get the page to load at all currently
    - Should watch something like [enable Web Speech API on Firefox](https://stackoverflow.com/questions/38529098/enable-web-speech-api-on-mozilla-firefox)
- If getting a `NS_ERROR_NOT_IMPLEMENTED` then comment out `recognition.continuous = true; // Doesn't stop when user stops speeking` as it doesn't seem to be implemented on Firefox even when you enable all the `media.webspeech` settings
- When running on Firefox after clicking the `Start` button I get the following error:

```text
InvalidStateError: An attempt was made to use an object that is not, or is no longer, usable 2 Decoder.tsx:47
    toggleRecognizer Decoder.tsx:49
    callCallback 1.chunk.js:10423
    invokeGuardedCallbackDev 1.chunk.js:10472
    invokeGuardedCallback 1.chunk.js:10526
    invokeGuardedCallbackAndCatchFirstError 1.chunk.js:10541
    executeDispatch 1.chunk.js:10847
    executeDispatchesInOrder 1.chunk.js:10872
    executeDispatchesAndRelease 1.chunk.js:10971
    executeDispatchesAndReleaseTopLevel 1.chunk.js:10980
    forEachAccumulated 1.chunk.js:10952
    runEventsInBatch 1.chunk.js:11120
    runExtractedEventsInBatch 1.chunk.js:11128
    handleTopLevel 1.chunk.js:15306
    batchedUpdates$1 1.chunk.js:31745
    batchedUpdates 1.chunk.js:12523
    dispatchEvent 1.chunk.js:15386
    1 1.chunk.js:31802
    unstable_runWithPriority 1.chunk.js:50648
    interactiveUpdates$1 1.chunk.js:31801
    interactiveUpdates 1.chunk.js:12544
    dispatchInteractiveEvent 1.chunk.js:15362
    dispatchInteractiveEvent self-hosted:1047
```
