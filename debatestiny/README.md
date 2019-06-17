# Debatestiny Frontend

<!-- TOC depthFrom:2 -->

- [Run](#run)
    - [Possible Fixes](#possible-fixes)
- [Notes](#notes)

<!-- /TOC -->

## Run

1. Install dependencies: `yarn install`
1. Run the frontend: `yarn start`

### Possible Fixes

- If you get an error about `onaudioend` not being in the type `SpeechRecognition`
    - Fix by modifying the `webspeechapi` node module to add `onaudioend: (ev: Event) => any;` to the `SpeechRecognition` interface

## Notes

- Need to revert the `tslint.json` change to disable `no-any` checking
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
