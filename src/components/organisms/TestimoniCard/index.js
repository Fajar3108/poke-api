import React from "react";
import { Card, Paragraph } from "../../atoms";
import { Profile } from "../../molleculs";
import './style.css';

const TestimoniCard = ({ detail }) => {
    return (
        <Card className="testimoni-card">
            <Paragraph content={detail} />
            <Profile name="Maulana Fajar Ibrahim" email="maulanafajaribrahim@gmail.com" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHQv_th9wq3ivQ1CVk7UZRxhbPq64oQrg5Q&usqp=CAU" />
        </Card>
    )
}

export default TestimoniCard;