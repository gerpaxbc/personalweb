import React from 'react'
import styles from './Main.module.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function main() {
    return (
        <div className={styles.mainPage}>
            <Container>
                <Row>
                    <Col>
                        <br />
                        <h1 className={styles.letraGrande}>FULL STACK DEVELOPER</h1>
                    </Col>
                </Row>

                <Row>
                    <Col>
                    </Col>
                    
                    <Col>
                    </Col>
                </Row>
                <Row>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                </Row>
            </Container>       
        </div>
    )
}
