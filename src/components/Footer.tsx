import React, { useEffect, useState } from 'react';

const Footer = () => {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const currentYear = new Date().getFullYear();
    setYear(currentYear);
  }, []);

  return (
    <div className="footer">
        <span className='name'>FashionLive</span>
        <span>+7 (888) 111-22-33</span>
        <span>magazin@gmail.com</span>
    </div>
  );
};

export default Footer;