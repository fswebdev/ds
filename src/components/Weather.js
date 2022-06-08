import React from 'react';
//import './styles.css';
import { Card } from 'semantic-ui-react';
import moment from 'moment';

const CardExampleCard = ({weatherData}) => (
    <Card>
        <Card.Content>
            <Card.Header className='header'>City Name: {weatherData.name}</Card.Header>
            <p>Temperature: {(weatherData.main.temp * 1.8 + 32).toFixed(2)}</p>
            <p>Day: {moment().format('ddddd')}</p>
            <p>Date: {moment().format('LL')}</p>
        </Card.Content>
    </Card>
)

export default CardExampleCard;
