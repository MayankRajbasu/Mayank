import React from 'react';

interface LayoutProps {
  id: string;
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ id, children }) => {
  return (
    <section id={id} className='xl:mx-32 sd:mx-24 xsm:mx-6 relative'>
      {children}
    </section>
  );
};

export default Layout;
