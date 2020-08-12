import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import * as Location from 'expo-location';

import { WeatherSelectors, WeatherThunks } from 'app/store/modules/weather';
import { convertKelvinToCelsius, getWeatherPhrase } from 'app/utils/helpers';

import { Button, Container, Text, Wrapper } from 'app/components/common';

import WeatherImage from './components/WeatherImage';

type Coordinates = {
  latitude: number;
  longitude: number;
};

const HomeScreen = () => {
  const [permissionError, setPermissionError] = useState<string>();
  const [coordinates, setCoordinates] = useState<Coordinates>(
    {} as Coordinates,
  );
  const dispatch = useDispatch();
  const weather = useSelector(WeatherSelectors.getWeather);
  const isFetching = useSelector(WeatherSelectors.getIsFetching);
  const weatherError = useSelector(WeatherSelectors.getError);

  const handleRefresh = () => {
    dispatch(
      WeatherThunks.thunkFetchWeather(
        coordinates.latitude,
        coordinates.longitude,
      ),
    );
  };

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestPermissionsAsync();
      if (status !== 'granted') {
        setPermissionError('Permission to access location was denied');
      }

      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync({});

      setCoordinates({ latitude, longitude });

      dispatch(WeatherThunks.thunkFetchWeather(latitude, longitude));
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

  // Show errors
  if (permissionError || weatherError) {
    return (
      <Container>
        <Wrapper flex={1} pl="5%" pr="5%" centralize>
          <Text fontSize="24px" textAlign="center">
            {permissionError || weatherError}
          </Text>
        </Wrapper>
      </Container>
    );
  }

  return (
    <Container>
      <Wrapper centralize pl="5%" pr="5%">
        <WeatherImage icon={weather.icon} />
        <Text fontSize="72px" mt="2%" isBold>
          {convertKelvinToCelsius(weather.temperature)}°
        </Text>
        <Text
          fontSize="24px"
          mt="2%"
        >{`${weather.city}, ${weather.country}`}</Text>
        <Text fontSize="24px" mt="2%">
          {weather.title}
        </Text>
        <Text fontSize="24px" mt="10%" mb="10%" textAlign="center">
          {getWeatherPhrase(weather.kind)}
        </Text>
        <Button isTextBold onPress={handleRefresh}>
          Refresh
        </Button>
      </Wrapper>
    </Container>
  );
};

export default HomeScreen;
