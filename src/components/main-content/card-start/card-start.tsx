import { Col, Row, Grid } from 'antd';
import { CardAction } from '@components/card-action';
import { CalendarIcon, ProfileIcon } from '@components/sidebar/icons';
import { HeartFilled } from '@ant-design/icons';

const { useBreakpoint } = Grid;

const cards = [
    { title: 'Расписать тренировки', icon: <HeartFilled />, name: 'Тренировки' },
    { title: 'Назначить календарь', icon: <CalendarIcon />, name: 'Календарь' },
    { title: 'Заполнить профиль', icon: <ProfileIcon />, name: 'Профиль' },
];

export const CardStart = () => {
    const { md } = useBreakpoint();

    return (
        <Row gutter={md ? [16, 0] : [0, 10]}>
            {cards.map((card) => (
                <Col md={8} sm={24} xs={24}>
                    <CardAction title={card.title} icon={card.icon} name={card.name} />
                </Col>
            ))}
        </Row>
    );
};
