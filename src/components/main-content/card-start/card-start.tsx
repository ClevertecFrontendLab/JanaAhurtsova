import { HeartFilled } from "@ant-design/icons";
import { CalendarIcon, ProfileIcon } from "@components/sidebar/icons";
import { Col, Row, Grid } from 'antd';
import styles from "./style.module.css";
import { CardAction } from "@components/card-action/card-action";

const {useBreakpoint} = Grid;

export const CardStart = () => {
    const {md} = useBreakpoint();

    return (
        <Row gutter={md ? [16, 0] : [0, 10]} className={styles.cards}>
            <Col md={8} sm={24} xs={24}>
                <CardAction title='Расписать тренировки' icon={<HeartFilled />} name={"Тренировки"} />
            </Col>
            <Col md={8} sm={24} xs={24}>
                <CardAction title='Назначить календарь' icon={<CalendarIcon />} name={"Календарь"}/>
            </Col>
            <Col md={8} sm={24} xs={24}>
                <CardAction title='Заполнить профиль' icon={<ProfileIcon />} name={"Профиль"}/>
            </Col>
        </Row>
    );
}
