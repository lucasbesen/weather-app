export const convertKelvinToCelsius = (temperatureInKelvin: number): string =>
  (temperatureInKelvin - 273.15).toFixed(0);

const MESSAGES = {
  CLEAR_SKY: 'A perfect day to be outside and do your activities',
  CLOUDS:
    "It's a good day to be outside, but be careful, there are some clouds. Better to take an umbrella",
  RAIN: "Don't forget your umbrella. It's raining!",
  THUNDERSTOM: 'Be careful! There is a thunderstorm',
  SNOW: 'Take your jacket. There is snow outside!',
  MIST: "There is fog outside. Be careful if you'll drive!",
};

export const getWeatherPhrase = (kind: string): string => {
  switch (kind) {
    case 'clear sky':
      return MESSAGES.CLEAR_SKY;
    case 'few clouds':
      return MESSAGES.CLOUDS;
    case 'scattered clouds':
      return MESSAGES.CLOUDS;
    case 'broken clouds':
      return MESSAGES.CLOUDS;
    case 'shower rain':
      return MESSAGES.RAIN;
    case 'light rain':
      return MESSAGES.RAIN;
    case 'thunderstorm':
      return MESSAGES.THUNDERSTOM;
    case 'snow':
      return MESSAGES.SNOW;
    case 'mist':
      return MESSAGES.MIST;
    default:
      return MESSAGES.CLOUDS;
  }
};
