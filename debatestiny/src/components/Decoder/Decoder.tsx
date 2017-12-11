import * as React from 'react';
import { connect } from 'react-redux';

import { Dispatch, RootStateType, ActionType } from '../../constants/types';
import { addFinalTranscript, setInterimTranscript } from '../../redux/app/actions';

import Speech from '../SpeechSetup';
import './Decoder.css';

const recognition = Speech.Recognition();
recognition.lang = 'en-US';
recognition.continuous = true; // Doesn't stop when user stops speeking
recognition.interimResults = true;

interface Props {
    transcript: string;
}

interface DispatchProps {
    addFinalTranscript(t: string): ActionType<string>;
    setInterimTranscript(t: string): ActionType<string>;
}

class Decoder extends React.Component<Props & DispatchProps, { running: boolean; }> {
    state = {
        running: false,
    };

    transcriptUpdate = (event: SpeechRecognitionEvent) => {
        let transcript = '';

        for (let i = event.resultIndex; i < event.results.length; ++i) {
            if (event.results[i].isFinal) {
                this.props.addFinalTranscript(event.results[i][0].transcript);
            } else {
                transcript += event.results[i][0].transcript;
            }
        }

        this.props.setInterimTranscript(transcript);
    }

    toggleRecognizer = () => {
        this.state.running ? recognition.stop() : recognition.start();
        this.setState({
            running: !this.state.running,
        });
    }

    render() {
        recognition.onresult = this.transcriptUpdate;
        recognition.onaudioend = this.transcriptUpdate;

        return (
            <div className="decoder">
                <h5>Speech to Text</h5>
                <button onClick={this.toggleRecognizer}>
                    {this.state.running ? 'Stop' : 'Start'}
                </button>
                <hr />
                <div>
                    <span className="interim">{this.props.transcript}</span>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (rootState: RootStateType, ownProps: {}): Props => {
    return {
        transcript: rootState.app.transcript,
    };
};

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => {
    return {
        addFinalTranscript: (t: string) => dispatch(addFinalTranscript(t)),
        setInterimTranscript: (t: string) => dispatch(setInterimTranscript(t)),
    };
};

export default connect<Props, DispatchProps, {}>(
    mapStateToProps,
    mapDispatchToProps)(Decoder);
