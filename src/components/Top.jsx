import React, { useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styles from './Top.module.css'

export default function Top() {
    
    return (
        <div className={styles.TopPage}>
            <Container >
            <Row>
                <br />
                <Col sm>
                    <div>
                        <h2 className={styles.letraLogo}>Xystems</h2>
                    </div>
                    <div className={styles.letraSlogan}>
                        Mejorando la forma de trabajar...
                    </div>
                </Col>
                <Col sm>
                   
                </Col>
                <Col sm>
                    <br />
                    <a  className={styles.letraLink} href="/"> About</a>
                </Col>
                <Col sm>
                <br />
                    <a  className={styles.letraLink} href="/"> Services</a>
                </Col>
                <Col sm>
                <br />
                    <a  className={styles.letraLink} href="/"> Freelance</a>
                </Col>
                <Col sm>
                    <br />
                    <Button variant="outline-secondary">Contact</Button>{' '}
                </Col>
            </Row>
            </Container>    
        </div>
    )
}