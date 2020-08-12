import * as React from 'react';
import styled from 'styled-components/native';
import { useHeaderHeight } from '@react-navigation/stack';

import theme from 'app/config/theme';

import Wrapper from './Wrapper';

const SafeAreaWrapper = styled.SafeAreaView`
  flex: 1;
`;

type Props = {
  children: React.ReactNode;
};

const Container = ({ children }: Props) => {
  const height = useHeaderHeight();

  return (
    <Wrapper flex={1} pt={height} backgroundColor={theme.colors.blue}>
      <SafeAreaWrapper>{children}</SafeAreaWrapper>
    </Wrapper>
  );
};

export default Container;
