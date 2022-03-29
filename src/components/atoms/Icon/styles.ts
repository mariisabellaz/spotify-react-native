import styled from 'styled-components/native';
import { Feather, AntDesign } from '@expo/vector-icons';

type IconProps = {
    color?: string;
    size?: number;
}

export const IconFeather = styled(Feather)<IconProps>`
    color: ${({ theme, color }) => !color ? theme.COLORS.TITLE : color};
    font-size: ${({ theme, size }) => !size ? theme.SIZES.ICON : size}px;
`;

export const IconAntDesign = styled(AntDesign)<IconProps>`
    color: ${({ theme, color }) => !color ? theme.COLORS.TITLE : color};
    font-size: ${({ theme, size }) => !size ? theme.SIZES.ICON : size}px;
`;