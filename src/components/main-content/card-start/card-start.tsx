import { Col, Row, Grid } from 'antd';
import { CardAction } from '@components/card-action';
import { CalendarIcon, ProfileIcon } from '@components/sidebar/icons';
import { HeartFilled } from '@ant-design/icons';

const { useBreakpoint } = Grid;

export const CardStart = () => {
    const { md } = useBreakpoint();

    return (
        <Row gutter={md ? [16, 0] : [0, 10]}>
            <Col md={8} sm={24} xs={24}>
                <CardAction
                    title='Расписать тренировки'
                    icon={<HeartFilled />}
                    name={'Тренировки'}
                />
            </Col>
            <Col md={8} sm={24} xs={24}>
                <CardAction
                    title='Назначить календарь'
                    icon={<CalendarIcon />}
                    name={'Календарь'}
                />
            </Col>
            <Col md={8} sm={24} xs={24}>
                <CardAction title='Заполнить профиль' icon={<ProfileIcon />} name={'Профиль'} />
            </Col>
        </Row>
    );
};
