import * as React from 'react';
import './App.css';
import Speech from  '../SpeechSetup';

const recognition = Speech.Recognition();
recognition.lang = 'en-US';
recognition.continuous = true; // Doesn't stop when user stops speeking
recognition.interimResults = true;

// tslint:disable-next-line:interface-name
interface ITranscriber {
  finalTranscript: string;
  transcript: string;
  running: boolean;
}

class Transcriber implements ITranscriber {
  constructor(
    public finalTranscript: string = '',
    public transcript: string = '',
    public running: boolean = false,
  ) {}
}

class App extends React.Component<{}, ITranscriber> {
  constructor(props: object) {
    super(props);

    this.state = new Transcriber();

    this.transcriptUpdate = this.transcriptUpdate.bind(this);
    this.toggleRecording = this.toggleRecording.bind(this);
  }

  transcriptUpdate(event: SpeechRecognitionEvent) {
    let transcript = '';

    for (let i = event.resultIndex; i < event.results.length; ++i) {
      if (event.results[i].isFinal) {
        this.setState({ finalTranscript: this.state.finalTranscript + event.results[i][0].transcript, });
      } else {
        transcript += event.results[i][0].transcript;
      }
    }

    this.setState({
      transcript: transcript,
    });
  }

  toggleRecording() {
    this.state.running ? recognition.stop() : recognition.start();
    this.setState({running: !this.state.running});
  }

  render() {
    recognition.onresult = this.transcriptUpdate;
    recognition.onaudioend = this.toggleRecording;

    return (
      <div className="App">
        <h1>Speech to Text</h1>
        <button onClick={this.toggleRecording}>
          Toggle to {this.state.running ? 'Stop' : 'Start'}
        </button>
        <hr/>
        <div>
          <span className="Final">{this.state.finalTranscript}</span>
          <span className="Interim">{this.state.transcript}</span>
        </div>
      </div>
    );
  }
}

export default App;
