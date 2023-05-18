import { Breadcrumb, theme } from 'antd';
import { Content } from 'antd/es/layout/layout';
import { FC, ReactNode } from 'react';

interface ContainerContentProps {
  children: ReactNode;
  breadcrumbItems: Array<{ title: string | ReactNode }>;
}

const ContainerContent: FC<ContainerContentProps> = ({ children, breadcrumbItems }) => {
  const {
    token: { colorBgContainer }
  } = theme.useToken();

  return (
    <Content
      className="site-layout"
      style={{ padding: '0 50px', display: 'flex', flexDirection: 'column' }}>
      <Breadcrumb style={{ margin: '16px 0' }} items={breadcrumbItems} />
      <div style={{ padding: 24, minHeight: 380, background: colorBgContainer, flex: '1 0 auto' }}>
        {children}
      </div>
    </Content>
  );
};

export default ContainerContent;
