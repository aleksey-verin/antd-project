import { Footer } from 'antd/es/layout/layout';
import { FC } from 'react';

interface ContainerFooterProps {}

const ContainerFooter: FC<ContainerFooterProps> = () => {
  return (
    <Footer style={{ textAlign: 'center' }}>
      Posts from JSON.placeholder ©2023 Created by Aleksey Verin
    </Footer>
  );
};

export default ContainerFooter;
