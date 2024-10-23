const weatherData = {
  humidity: { value: '75', description: [0, 100] },
  pressure: { value: '761', description: 'Повышенное' },
  visibility: { value: '28', description: 'Нормальная' },
  sunrise: { value: '8:42', description: '02:47' },
  sunset: { value: '16:37', description: '05:08' },
  wind: { value: '2', description: 'Северо-западный' },
};

const oneDayForecast = [
  { time: '12:00', weather: 'broken-clouds', temperature: -7 },
  { time: '15:00', weather: 'broken-clouds', temperature: -5 },
  { time: '18:00', weather: 'broken-clouds', temperature: -7 },
  { time: '21:00', weather: 'broken-clouds', temperature: -9 },
  { time: '00:00', weather: 'broken-clouds', temperature: -11 },
  { time: '03:00', weather: 'broken-clouds', temperature: -13 },
  { time: '06:00', weather: 'broken-clouds', temperature: -15 },
  { time: '09:00', weather: 'broken-clouds', temperature: -17 },
];

const fiveDaysForecast = [
  { date: 'Вс, 07 янв.', weather: 'few-clouds', temperature: [-17, -11] },
  { date: 'Пн, 08 янв.', weather: 'few-clouds', temperature: [-16, -8] },
  { date: 'Вт, 09 янв.', weather: 'broken-clouds', temperature: [-8, -2] },
  { date: 'Ср, 10 янв.', weather: 'broken-clouds', temperature: [-2, 1] },
  { date: 'Чт, 11 янв.', weather: 'broken-clouds', temperature: [-2, 1] },
];

export { weatherData, oneDayForecast, fiveDaysForecast };
