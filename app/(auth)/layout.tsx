import React from 'react';

const AuthLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
   return <div className="flex justify-center pt-20">{children}</div>;
};

export default AuthLayout;
