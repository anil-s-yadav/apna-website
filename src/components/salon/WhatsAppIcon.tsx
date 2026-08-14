import React from 'react';

interface WhatsAppIconProps {
  size?: number;
  className?: string;
  fill?: string;
}

export const WhatsAppIcon: React.FC<WhatsAppIconProps> = ({ 
  size = 24, 
  className = "", 
}) => {
  return (
    <img 
      src="/whatsapp-official.png" 
      alt="WhatsApp" 
      width={size} 
      height={size} 
      className={`object-contain inline-block shrink-0 ${className}`}
      style={{ width: `${size}px`, height: `${size}px` }}
    />
  );
};

export default WhatsAppIcon;
