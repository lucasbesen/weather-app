import * as React from 'react';
import { Image } from 'react-native';

type Props = {
  icon: string;
};

const WeatherImage = ({ icon }: Props) => (
  <Image
    source={{ uri: `https://openweathermap.org/img/wn/${icon}@2x.png` }}
    style={{ width: 200, height: 130 }}
  />
);

export default WeatherImage;
