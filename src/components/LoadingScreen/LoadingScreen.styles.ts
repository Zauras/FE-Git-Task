import styled from '@emotion/styled';

const LoadingScreenSC = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 50px;

    .overlay-mask {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: white;
        opacity: 0.7;
        z-index: 10;
    }

    .spinner {
        z-index: 10;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        transform: -webkit-translate(-50%, -50%);
        transform: -moz-translate(-50%, -50%);
        transform: -ms-translate(-50%, -50%);

        width: 3rem;
        height: 3rem;

        transform-origin: center;
        animation-name: animation;
        animation-duration: 1.2s;
        animation-timing-function: linear;
        animation-iteration-count: infinite;

        circle {
            fill: transparent;
            stroke: ${(props) => props.theme.colors.primary};
            stroke-width: 0.5rem;
            stroke-linecap: round;
            filter: url(#shadow);
        }

        @keyframes animation {
            0% {
                stroke-dasharray: 1 98;
                stroke-dashoffset: -105;
            }
            50% {
                stroke-dasharray: 80 10;
                stroke-dashoffset: -160;
            }
            100% {
                stroke-dasharray: 1 98;
                stroke-dashoffset: -300;
            }
        }
    }
`;

export default LoadingScreenSC;
