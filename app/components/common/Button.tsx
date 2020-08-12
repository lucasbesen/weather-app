import * as React from 'react';
import styled from 'styled-components/native';
import {
  space,
  SpaceProps,
  color,
  ColorProps,
  layout,
  LayoutProps,
} from 'styled-system';

import theme from 'app/config/theme';

import Text from './Text';

type TouchableProps = SpaceProps & ColorProps & LayoutProps;

const Touchable = styled.TouchableOpacity<TouchableProps>`
  ${space}
  ${color}
  ${layout}
  border-radius: 25px;
  align-items: center;
  justify-content: center;
`;

type Props = {
  textColor?: string;
  textSize?: string;
  isTextBold?: boolean;
  children: string;
} & React.ComponentProps<typeof Touchable>;

const Button = ({
  width = '30%',
  height = '50px',
  isTextBold = false,
  textSize = '20px',
  backgroundColor = theme.colors.white,
  textColor = theme.colors.blue,
  children,
  ...props
}: Props) => (
  <Touchable
    backgroundColor={backgroundColor}
    width={width}
    height={height}
    mb="15px"
    {...props}
  >
    <Text
      fontSize={textSize}
      fontWeight={isTextBold ? 'bold' : 'normal'}
      color={textColor}
    >
      {children}
    </Text>
  </Touchable>
);

export default Button;
