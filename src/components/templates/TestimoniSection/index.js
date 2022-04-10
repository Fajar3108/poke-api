import React from "react";
import { Col, Row, Wrapper } from "../../atoms";
import { TestimoniCard } from "../../organisms";
import './style.css';

const TestimoniSection = () => {
    return (
        <Wrapper className="testimoni">
            <h1>Testimoni</h1>
            <Row>
                <Col>
                    <TestimoniCard detail="Selama pelatihan di bootcamp fazztrack ini, saya mendapatkan banyak manfaat. Dari skill teknikal dan juga soft skill, disana juga mendapatkan pengalaman yang sangat banyak, dari pengalaman project tim, hingga mengerjakan suatu project dengan jangka waktu yang tidak banyak tentunya. Selain itu, didalam pelatihan ini mendapatkan relasi baru dan tentunya ilmu yang sangat bermanfaat." />
                </Col>
                <Col>
                    <TestimoniCard detail="Selama pelatihan di bootcamp fazztrack ini, saya mendapatkan banyak manfaat. Dari skill teknikal dan juga soft skill, disana juga mendapatkan pengalaman yang sangat banyak, dari pengalaman project tim, hingga mengerjakan suatu project dengan jangka waktu yang tidak banyak tentunya. Selain itu, didalam pelatihan ini mendapatkan relasi baru dan tentunya ilmu yang sangat bermanfaat." />
                </Col>
                <Col>
                    <TestimoniCard detail="Selama pelatihan di bootcamp fazztrack ini, saya mendapatkan banyak manfaat. Dari skill teknikal dan juga soft skill, disana juga mendapatkan pengalaman yang sangat banyak, dari pengalaman project tim, hingga mengerjakan suatu project dengan jangka waktu yang tidak banyak tentunya. Selain itu, didalam pelatihan ini mendapatkan relasi baru dan tentunya ilmu yang sangat bermanfaat." />
                </Col>
            </Row>
        </Wrapper>
    )
}

export default TestimoniSection;