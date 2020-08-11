const ROUTES = {
  HOME: 'Home',
} as const;

export type StackParamsList = {
  [ROUTES.HOME]: undefined;
};

export default ROUTES;
