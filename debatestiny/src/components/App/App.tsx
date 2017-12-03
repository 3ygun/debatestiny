import * as React from 'react';
import './App.css';
import Speech from  './SpeechSetup';

const recognition = Speech.Recognition();
recognition.lang = 'en-US';
recognition.interimResults = true;

// tslint:disable-next-line:interface-name
interface ITranscriber {
  transcript: string;
  running: boolean;
}

class Transcriber implements ITranscriber {
  constructor(
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
    var transcript = '';
    for (var i = 0; i < event.results.length; i++) {
      transcript += event.results[i][0].transcript;
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

    return (
      <div className="App">
        <h1>Speech to Text</h1>
        <button onClick={this.toggleRecording}>
          Toggle to {this.state.running ? 'Stop' : 'Start'}
        </button>
        <hr/>
        <div>
          {this.state.transcript}
        </div>
      </div>
    );
  }
}

export default App;
