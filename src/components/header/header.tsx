import { Navigation } from "@components/navigation";
import { NAVIGATION_LINKS } from "@constants/main-page/constants";
import { Button, Col, Row, Typography } from "antd";
import { SettingOutlined } from "@ant-design/icons";
import styles from "./style.module.css";

export const Header = () => {
    return (
        <header className={styles.header}>
            <Navigation links={NAVIGATION_LINKS} />
            <Row className={styles.subheader}>
                <Col sm={20}>
                    <Typography.Title className={styles.title}>
                        Приветствуем тебя в CleverFit — приложении, <br/> которое поможет тебе добиться
                        своей мечты!
                    </Typography.Title>
                </Col>
                <Col sm={4}>
                    <div className={styles.settings}>
                        <Button type='text' icon={<SettingOutlined />}>
                            Настройки
                        </Button>
                    </div>
                </Col>
            </Row>
        </header>
    );
}
