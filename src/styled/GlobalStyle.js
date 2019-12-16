import { createGlobalStyle } from 'styled-components';
import { orange, blue } from 'styled/colors';
import animations from 'styled/animations';

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900&display=swap&subset=latin-ext');
    @import url('https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900&display=swap&subset=latin-ext');

    *, *::after, *::before {
        margin: 0;
        padding: 0;
        border: 0;
        outline: 0;
        font-weight: inherit;
        font-style: inherit;
        box-sizing: inherit;
        vertical-align: baseline;
        text-decoration: none;
        list-style: none;
        transition-timing-function: ease;
        transition-duration: .3s;
    }

    body {
        position: relative;
        overflow-x: hidden;
        margin-top: 75px;
        min-width: 315px;
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
        animation: ${animations.opacityZeroToOne} 1.5s ease backwards;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    a {
        color: ${orange};
        transition-property: color;

        &:hover {color: ${blue}}
    }
`;

export default GlobalStyle;
