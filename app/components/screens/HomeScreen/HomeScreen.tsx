import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import * as Location from 'expo-location';

import { WeatherSelectors, WeatherThunks } from 'app/store/modules/weather';
import { convertKelvinToCelsius, getWeatherPhrase } from 'app/utils/helpers';

import { Container, Text, Wrapper } from 'app/components/common';

import WeatherImage from './components/WeatherImage';

const HomeScreen = () => {
  const [error, setError] = useState<string>();
  const dispatch = useDispatch();
  const weather = useSelector(WeatherSelectors.getWeather);
  const isFetching = useSelector(WeatherSelectors.getIsFetching);

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestPermissionsAsync();
      if (status !== 'granted') {
        setError('Permission to access location was denied');
      }

      const location = await Location.getCurrentPositionAsync({});
      dispatch(
        WeatherThunks.thunkFetchWeather(
          location.coords.latitude,
          location.coords.longitude,
        ),
      );
    })();
  }, [dispatch]);

  // Show loading state
  if (!weather || isFetching) {
    return (
      <Container>
        <Wrapper flex={1} centralize>
          <ActivityIndicator />
        </Wrapper>
      </Container>
    );
  }

  // Show error if permission to access location was denied
  if (error) {
    return (
      <Container>
        <Wrapper flex={1} centralize>
          <Text fontSize="72px">{error}</Text>
        </Wrapper>
      </Container>
    );
  }

  return (
    <Container>
      <Wrapper centralize pl="5%" pr="5%">
        <WeatherImage icon={weather.icon} />
        <Text fontSize="72px" mt="2%">
          {convertKelvinToCelsius(weather.temperature)}°
        </Text>
        <Text
          fontSize="24px"
          mt="2%"
        >{`${weather.city}, ${weather.country}`}</Text>
        <Text fontSize="24px" mt="2%">
          {weather.title}
        </Text>
        <Text fontSize="24px" mt="10%" textAlign="center">
          {getWeatherPhrase(weather.kind)}
        </Text>
      </Wrapper>
    </Container>
  );
};

export default HomeScreen;
