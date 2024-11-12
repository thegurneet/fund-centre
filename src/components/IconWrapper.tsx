import React from 'react';
import * as Icons from 'react-feather';
import { styled } from 'styled-components';

type IconWrapperProps = {
  icon: React.ComponentType<Icons.IconProps>;
  fill?: boolean;
  highlight?: boolean;
  iconColor?: string;
};

export const IconWrapper = ({
  icon: Icon,
  fill,
  highlight = false,
  iconColor
}: IconWrapperProps) => {
  return (
    <CircularWrapper fill={!!fill} highlight={highlight}>
      <Icon size={18} color={iconColor} />
    </CircularWrapper>
  );
};

const CircularWrapper = styled.span<{ fill: boolean; highlight: boolean }>`
  display: flex;
  border: ${(props) => (props.highlight ? '1px solid green' : '1px solid darkgreen')};
  justify-content: center;
  border-radius: 120px;
  align-items: center;
  width: 32px;
  height: 32px;
  color: ${(props) => (props.fill ? 'white' : null)};
  background-color: ${(props) => (props.fill ? 'green' : null)};
`;
