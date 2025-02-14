import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Container, Row, Col } from 'react-bootstrap';
import meter1 from '../component/img/meter1.svg';
import meter3 from '../component/img/meter2.svg';
import meter2 from '../component/img/meter3.svg';
import colorSharp from '../component/img/color-sharp.png'

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className='skill' id='skills'>
            <Container>
                <Row>
                    <Col>
                        <div className='skill-bx'>
                            <h2>
                                Навыки
                            </h2>
                            <p>Мне нравится разрабатывать сайты, но я умею делать и другие, не менее интересные проекты.</p>
                            <Carousel responsive={responsive} infinite={true} className='skill-slider'>
                                <div className='item'>
                                    <img src={meter1} alt='Image' />
                                    <h5>Веб Дизайн</h5>
                                </div>
                                <div className='item'>
                                    <img src={meter2} alt='Image' />
                                    <h5>Создание Телеграмм Ботов</h5>
                                </div>
                                <div className='item'>
                                    <img src={meter3} alt='Image' />
                                    <h5>Парсинг Магазина</h5>
                                </div>
                                <div className='item'>
                                    <img src={meter1} alt='Image' />
                                    <h5>Логотип Компании</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className='background-image-left' src={colorSharp} alt='colorSharp' />
        </section>
    )
}