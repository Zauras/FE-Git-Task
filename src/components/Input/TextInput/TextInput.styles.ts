import styled from '@emotion/styled';

const TextInputSC = styled.input<{ minWidth?: string }>`
    height: 1.5rem;
    min-width: ${({ minWidth }) => (minWidth ? minWidth : '5rem')};

    border: 2px solid ${(props) => props.theme.colors.border};
    border-radius: 5px;
    padding: 0.25rem 0.5rem;

    font-size: ${(props) => props.theme.fontSize.md};

    outline: none;

    :focus {
        border: 2px solid ${(props) => props.theme.colors.primary};
        box-shadow: ${(props) => props.theme.colors.primaryHover} 0px 0px 3px 1px inset;
    }

    ::placeholder {
        /* Chrome, Firefox, Opera, Safari 10.1+ */
        color: ${(props) => props.theme.colors.lightTextGray};
        opacity: 1; /* Firefox */
    }
`;

export default TextInputSC;
