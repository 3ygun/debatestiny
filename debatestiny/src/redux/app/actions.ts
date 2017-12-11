import { ActionType } from '../../constants/types';
import {
    TRANSCRIPT_FINAL_ADD,
    TRANSCRIPT_INTERIM_SET
} from './constants';

export function addFinalTranscript(transcript: string): ActionType<string> {
    return {
        type: TRANSCRIPT_FINAL_ADD,
        transcript,
    };
}

export function setInterimTranscript(transcript: string): ActionType<string> {
    return {
        type: TRANSCRIPT_INTERIM_SET,
        transcript,
    };
}
