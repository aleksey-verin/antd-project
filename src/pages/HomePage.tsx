import { FC } from 'react';
import ContainerContent from '../components/ContainerContent';
import { Col, Divider, List, Row, Typography } from 'antd';

const { Title } = Typography;

const data = [
  'React 18.2',
  'TypeScript',
  'Redux (@reduxjs/toolkit)',
  'React-router-dom (for routing)',
  'React-hot-toast (for notifications)',
  'Ant Design (UI library)',
  'Vite (build tool)',
  'Eslint and Prettier'
];

const breadcrumbItems = [
  {
    title: 'Home'
  }
];

const HomePage: FC = () => {
  return (
    <ContainerContent breadcrumbItems={breadcrumbItems}>
      <Title style={{ textAlign: 'center' }}>PICASSO Company Test Assignment</Title>
      <div>
        <Row>
          <Col span={12} offset={6}>
            <Divider orientation="center">
              The application is built using the following stack:
            </Divider>
            <List
              size="large"
              bordered
              dataSource={data}
              renderItem={(item) => <List.Item>{item}</List.Item>}
            />
          </Col>
        </Row>
      </div>
    </ContainerContent>
  );
};

export default HomePage;
