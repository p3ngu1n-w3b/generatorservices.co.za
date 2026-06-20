export const PHONE_DISPLAY = '082 210 5077';
export const PHONE_TEL = '+27822105077';
export const EMAIL = 'info@generatorservices.co.za';
export const WHATSAPP_NUMBER = '27822105077';

export const wa = (message) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export const WA_DEFAULT = wa(
  'Hi Garden Route Generator Services, I need help with a generator.'
);
export const WA_QUOTE = wa(
  'Hi Garden Route Generator Services, I would like a quote for my generator requirements.'
);
