import { Navigation } from "@components/navigation";
import { NAVIGATION_LINKS } from "@constants/main-page/constants";
import { Button, Col, Grid, Row, Typography } from "antd";
import { SettingOutlined } from "@ant-design/icons";
import styles from "./style.module.css";

const { useBreakpoint } = Grid;

export const Header = () => {
    const { xs, sm } = useBreakpoint();
    return (
        <header className={styles.header}>
            <Navigation links={NAVIGATION_LINKS} />
            <Row className={styles.subheader}>
                <Col md={20} sm={17} xs={21}>
                    <Typography.Title className={styles.title}>
                        Приветствуем тебя в&nbsp;CleverFit — приложении, <br /> которое поможет тебе
                        добиться своей мечты!
                    </Typography.Title>
                </Col>
                <Col md={4} sm={7} xs={3}>
                    <div className={styles.settings}>
                        {sm && (
                            <Button type='text' icon={<SettingOutlined />}>
                                Настройки
                            </Button>
                        )}
                        {xs && <Button shape='circle' icon={<SettingOutlined />} />}
                    </div>
                </Col>
            </Row>
        </header>
    );
}
