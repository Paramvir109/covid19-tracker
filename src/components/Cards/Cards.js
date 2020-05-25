import React from 'react';
import styles from './Cards.module.css';
import { Card, Col, Row,Typography   } from 'antd';

const { Text,Title } = Typography;


const Cards = ({data : {confirmed, recovered,deaths,lastUpdate}}) => {
    if(!confirmed){
        return "Loading";
    }
    return (
        <div className={styles.container}>
            <Row gutter={24} justify={"center"}>
                <Col span={8}>
                    <Card >
                        <Text type="secondary">Infected</Text>
                            <Title level={4}>{confirmed.value}</Title>
                        <Text type="secondary">Real Date</Text>< br/>
                        <Text>No. of active cases of COVID-19</Text>
                    </Card>
                </Col>
                <Col span={8}>
                    <Card >
                        <Text type="secondary">Recovered</Text>
                        <Title level={4}>{recovered.value}</Title>
                        <Text type="secondary">Real Date</Text>< br/>
                        <Text>No. of recoveries from COVID-19</Text>
                    </Card>
                </Col>
                <Col span={8}>
                    <Card >
                        <Text type="secondary">Deaths</Text>
                        <Title level={4}>{deaths.value}</Title>
                        <Text type="secondary">Real Date</Text>< br/>
                        <Text>No. of deaths caused by COVID-19</Text >
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default Cards;