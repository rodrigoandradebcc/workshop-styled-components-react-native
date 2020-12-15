import styled, { css } from 'styled-components/native';
import { ICardStyledProps } from './interface';

export const Container = styled.View`
  height: 70px;
  padding: 14px;
  margin: 10px;
  border-radius: 4px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors['neutral-200']};
`;

const fontVariant = css`
  font-family: ${({ theme }) => theme.fonts.label};
  font-size: 24px;
  color: ${({ theme }) => theme.colors['neutral-700']};
`;

export const Label = styled.Text`
  ${fontVariant}
`;

export const Description = styled.Text<ICardStyledProps>`
  ${fontVariant}
  color: ${({ theme, color }) => theme.colors[color]};
`;
