import * as React from 'react';
import { connect } from 'react-redux';
import { Row } from 'reactstrap';

import { RootStateType } from '../../constants/types';
import Decoder from '../Decoder/Decoder';

interface Props {
    currentTranscript: string[];
}

class Conversation extends React.Component<Props, {}> {
    render() {
        return (
            <div>
                <Decoder />
                <hr />
                {this.props.currentTranscript.map((snippet, i) => {
                    return (
                        <Row key={i}>
                            {snippet}
                        </Row>
                    );
                })}
            </div>
        );
    }
}

const mapStateToProps = (rootState: RootStateType, ownProps: {}): Props => {
    return {
        currentTranscript: rootState.app.conversation.transcript,
    };
};

export default connect<Props, {}, {}>(mapStateToProps)(Conversation);
