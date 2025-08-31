import '@/styles/client/home/subscribe.css';
import { Form, Input, Button, Typography } from 'antd';
import AOS from 'aos';
import { useEffect } from 'react';
import { NotificationInstance } from 'antd/es/notification/interface';
import { FaBell } from 'react-icons/fa';

const { Title } = Typography;

type Props = {
  api: NotificationInstance;
};

const SubscribeCard: React.FC<Props> = ({ api }: Props) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      className="newsletter-container"
      data-aos="fade-up"
      data-aos-delay="100"
      style={{ marginTop: 50, textAlign: 'center' }}
    >
      <div className="newsletter-section">
        <Title level={3} className="newsletter-title">Đăng ký nhận bài viết mới nhất</Title>

        <Form
          layout="inline"
          style={{ justifyContent: 'center', marginTop: 20 }}
        >
          <div className="newsletter-receiver">
            <Form.Item name="email">
              <Input placeholder="Email của bạn" size="large" className="newsletter-input" />
            </Form.Item>

            <Form.Item>
              <Button htmlType="submit" size="large" className="newsletter-btn">
                <FaBell /> Đăng ký
              </Button>
            </Form.Item>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default SubscribeCard;
