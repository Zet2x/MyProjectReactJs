import { Container, Row, Col } from "react-bootstrap"
import logo from '../component/img/logo.svg'
import navIcon1 from '../component/img/nav-icon1.svg'
import navIcon2 from '../component/img/nav-icon2.svg'
import navIcon3 from '../component/img/nav-icon3.svg'

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-item-center">
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href=""><img src={navIcon1} /></a>
                            <a href=""><img src={navIcon2} /></a>
                            <a href=""><img src={navIcon3} /></a>
                        </div>
                        <p className="textCopy">CopyRight 2024. Все права защищены.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}