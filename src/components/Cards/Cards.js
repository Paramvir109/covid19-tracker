import React from 'react';
import styles from './Cards.module.css';
import CountUp from 'react-countup';
import { Card, Col, Row,Typography   } from 'antd';
import cx from 'classnames';
const { Text,Title} = Typography;


const Cards = ({data : {confirmed, recovered,deaths,lastUpdate}}) => {
    if(!confirmed){
        return "Loading";
    }
    return (
        <div className={styles.container}>
            <Row gutter={8} type="flex">
                <Col xs={24} md={8}>
                    <Card className={cx(styles.card,styles.infected)}>
                        <Text type="secondary">Infected</Text>
                        <Title level={4}>
                            <CountUp
                                start={0}
                                end={confirmed.value}
                                duration={2}
                                separator=","
                            />
                        </Title>
                        <Text type="secondary">{new Date(lastUpdate).toDateString()}</Text>< br/>
                        <Text>No. of active cases of COVID-19</Text>
                    </Card>
                </Col>
                <Col xs={24} md={8} >
                    <Card className={cx(styles.card,styles.recovered)}>
                        <Text type="secondary">Recovered</Text>
                        <Title level={4}>
                            <CountUp
                                start={0}
                                end={recovered.value}
                                duration={2.5}
                                separator=","
                            />
                        </Title>
                        <Text type="secondary">{new Date(lastUpdate).toDateString()}</Text>< br/>
                        <Text>No. of recoveries from COVID-19</Text>
                    </Card>
                </Col>
                <Col xs={24} md={8} >
                    <Card  className={cx(styles.card,styles.deaths)}>
                        <Text type="secondary">Deaths</Text>
                        <Title level={4}><CountUp
                                start={0}
                                end={deaths.value}
                                duration={2}
                                separator=","
                            />
                        </Title>
                        <Text type="secondary">{new Date(lastUpdate).toDateString()}</Text>< br/>
                        <Text>No of deaths caused by COVID-19</Text >
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default Cards;