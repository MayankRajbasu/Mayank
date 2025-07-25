import React from 'react';

interface LayoutProps {
  id: string;
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ id, children }) => {
  return (
    <section id={id} className='w-full relative'>
      {children}
    </section>
  );
};

export default Layout;
