import * as React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './App.css';

import DebatestinyNavbar from '../Navbar/Navbar';
import Decoder from '../Decoder/Decoder';

interface ISection {
    title: string;
    children?: any;
}

const Section = (props: ISection) => (
    <Col>
        <h3 className="sectionTitle">{props.title}</h3>
        {props.children}
    </Col>
);

class App extends React.Component<{}, { collapsed: boolean }> {
    constructor(props: object) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true
        };
    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    render() {
        return (
            <div>
                <DebatestinyNavbar />
                <Container>
                    <Row>
                        <Section title="Notes" />
                        <Section title="Search" />
                        <Section title="Live">
                            <Decoder />
                        </Section>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default App;
