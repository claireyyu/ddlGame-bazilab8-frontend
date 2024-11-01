import moment from 'moment-timezone';

const majorTimezones = [
  { label: 'Baker Island Time', value: 'Etc/GMT+12' },
  { label: 'Samoa Standard Time', value: 'Pacific/Pago_Pago' },
  { label: 'Hawaii-Aleutian Standard Time', value: 'Pacific/Honolulu' },
  { label: 'Alaska Standard Time', value: 'America/Anchorage' },
  { label: 'Pacific Standard Time', value: 'America/Los_Angeles' },
  { label: 'Mountain Standard Time', value: 'America/Denver' },
  { label: 'Central Standard Time', value: 'America/Chicago' },
  { label: 'Eastern Standard Time', value: 'America/New_York' },
  { label: 'Atlantic Standard Time', value: 'America/Halifax' },
  { label: 'Argentina Time', value: 'America/Argentina/Buenos_Aires' },
  { label: 'South Georgia Time', value: 'Atlantic/South_Georgia' },
  { label: 'Azores Time', value: 'Atlantic/Azores' },
  { label: 'Greenwich Mean Time', value: 'Etc/GMT' },
  { label: 'Central European Time', value: 'Europe/Berlin' },
  { label: 'Eastern European Time', value: 'Europe/Kiev' },
  { label: 'Moscow Time', value: 'Europe/Moscow' },
  { label: 'United Arab Emirates Standard Time', value: 'Asia/Dubai' },
  { label: 'Pakistan Standard Time', value: 'Asia/Karachi' },
  { label: 'Bangladesh Time', value: 'Asia/Dhaka' },
  { label: 'Vietnam Time', value: 'Asia/Bangkok' },
  { label: 'China Standard Time', value: 'Asia/Shanghai' },
  { label: 'Japan Standard Time', value: 'Asia/Tokyo' },
  { label: 'Australian Eastern Standard Time', value: 'Australia/Sydney' },
  { label: 'Solomon Islands Time', value: 'Pacific/Guadalcanal' }
];

  // Generate list of major timezones with UTC offset
  export const timezones = majorTimezones.map((tz) => {
    const offset = moment.tz(tz.value).format('Z');
    return { label: `${tz.label} (UTC${offset})`, value: tz.value };
  });