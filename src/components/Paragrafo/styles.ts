import styled from 'styled-components'

import { Props } from '.'

import { Theme } from '../../themes/dark'

export const P = styled.p<Props>`
    font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '14px')};
    color: ${(props) =>
        props.tipo === 'principal'
            ? (props.theme as unknown as Theme).corPrincipal
            : (props.theme as unknown as Theme).corSecundaria};
    line-height: 22px;
`
