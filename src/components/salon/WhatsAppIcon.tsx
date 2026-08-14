import React from 'react';

interface WhatsAppIconProps {
  size?: number;
  className?: string;
  fill?: string;
}

export const WhatsAppIcon: React.FC<WhatsAppIconProps> = ({ 
  size = 24, 
  className = "", 
  fill = "currentColor" 
}) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill={fill} 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ display: 'inline-block', verticalAlign: 'middle' }}
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d="M12 2C6.477 2 2 6.477 2 12c0 2.152.68 4.144 1.838 5.776L2.5 21.5l3.856-1.31A9.957 9.957 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm.05 16.5a6.47 6.47 0 01-3.32-.91l-.24-.14-2.46.84.85-2.39-.16-.25a6.45 6.45 0 01-1.02-3.65c0-3.59 2.92-6.5 6.5-6.5 3.59 0 6.5 2.91 6.5 6.5s-2.91 6.5-6.45 6.5zm3.56-4.87c-.19-.1-.13-.29-.32-1.23-.19-.94-.86-1.16-1.05-1.16-.19 0-.41.09-.59.29-.19.19-.71.7-.87.89-.16.19-.32.22-.51.13-.19-.1-.81-.3-1.54-.95-.57-.51-.96-1.14-1.07-1.33-.11-.19 0-.29.09-.39.09-.09.19-.22.28-.33.09-.11.13-.19.19-.32.06-.13.03-.25-.01-.36-.05-.1-.41-1.01-.56-1.38-.15-.37-.3-.32-.41-.32h-.35c-.13 0-.33.05-.5.23-.17.19-.66.65-.66 1.58 0 .93.68 1.83.77 1.96.1.13 1.34 2.05 3.25 2.87.45.2.81.32 1.09.4.46.15.88.13 1.21.08.37-.06 1.13-.46 1.29-.9.16-.44.16-.82.11-.9-.05-.08-.18-.13-.37-.23z"
      />
    </svg>
  );
};

export default WhatsAppIcon;
