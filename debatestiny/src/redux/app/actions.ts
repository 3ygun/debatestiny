import {
    TRANSCRIPT_FINAL_ADD,
    TRANSCRIPT_INTERIM_SET
} from './constants';

export const addFinalTranscript = (transcript: string) => {
    return {
        type: TRANSCRIPT_FINAL_ADD,
        transcript,
    };
};

export const setInterimTranscript = (transcript: string) => {
    return {
        type: TRANSCRIPT_INTERIM_SET,
        transcript,
    };
};
