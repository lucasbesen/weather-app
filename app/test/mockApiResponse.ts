const mockApiResponse = {
  cod: 200,
  name: 'San Francisco',
  main: {
    temp: 291.15,
  },
  weather: [
    {
      description: 'few clouds',
      main: 'Clouds',
      icon: '03d',
    },
  ],
  sys: {
    country: 'US',
  },
};

export default mockApiResponse;
