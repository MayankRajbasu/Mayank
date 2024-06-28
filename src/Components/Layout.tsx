import React from 'react';

interface LayoutProps {
  id: string;
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ id, children }) => {
  return (
    <section id={id} className='sm:mx-0 md:mx-2 lg:mx-32 relative'>
      {children}
    </section>
  );
};

export default Layout;
