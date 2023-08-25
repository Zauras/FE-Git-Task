import styled from '@emotion/styled';

const TextInputSC = styled.input<{ minWidth?: string }>`
    border: 1px solid ${(props) => props.theme.colors.borderGray};
    border-radius: 5px;
    padding: 0.5rem 0.5rem;

    min-width: ${({ minWidth }) => (minWidth ? minWidth : '5rem')};

    ::placeholder {
        /* Chrome, Firefox, Opera, Safari 10.1+ */
        color: ${(props) => props.theme.colors.lightTextGray};
        opacity: 1; /* Firefox */
    }
`;

export default TextInputSC;
