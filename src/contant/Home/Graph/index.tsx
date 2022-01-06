import { Col, Row } from 'antd';
import style from './graph.module.scss';
import graph from '../../../assets/svg/img/graph.svg'
import lineGraph from '../../../assets/svg/img/lineGraph.svg'


function Graph() {
    return (
        <Row gutter={[44,21]} className={style.waper}>
            <Col flex="100px" className={style.moneyList}>
                <span className={style.money}>260tr</span>
                <span className={style.money}>220tr</span>
                <span className={style.money}>180tr</span>
                <span className={style.money}>140tr</span>
            </Col>
            <Col flex="auto">
                <Row style={{ position: 'relative' }}>
                    <div className={style.line}></div>
                    <div className={style.line}></div>
                    <div className={style.line}></div>
                    <img src={graph} alt="" className={style.graph}/>
                    <img src={lineGraph} alt="" className={style.lineGraph}/>
                    <div className={style.line}></div>
                </Row>
                <Row justify="space-between" style={{ marginRight : "39px"}}>
                    <span className={style.date}>Thứ 2</span>
                    <span className={style.date}>Thứ 3</span>
                    <span className={style.date}>Thứ 4</span>
                    <span className={style.date}>Thứ 5</span>
                    <span className={style.date}>Thứ 6</span>
                    <span className={style.date}>Thứ 7</span>
                    <span className={style.date}>CN</span>
                </Row>
            </Col>
        </Row>
    );
}

export default Graph;