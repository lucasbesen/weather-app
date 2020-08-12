# Weather App

Weather app made with Expo, React Native and Redux.

<img src="https://user-images.githubusercontent.com/13984388/89965785-faeca400-dc23-11ea-9c81-d0e60c695e88.png" width="300" />

### Technologies
- TypeScript
- React Native
- Redux + redux-thunk
- styled-components + styled-system
- Jest


### Project Structure

```
├── app # source code
|   ├── components
|   |   ├── common # common components reused in the screens
|   |   |── screens # screen components
|   |   |   └── Screen # some app screen
|   |   |      └── components # specific components from the screen
|   ├── config # app common config (i.e. routes and theme)
|   ├── store
|   |   |── modules # modules containing actions, reducers, selectors and thunks
|   |   |   └── __tests__ # modules tests
|   └── test # jest configs
└── App.tsx # root component
```


### Installing

```sh
yarn install
```

### Running

```sh
yarn start
```

### Test

```sh
yarn test
```