import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

:root {
    --color-primery: #BDFF2E;
    --color-text: #424242;

    --font-weight-light: 300;
    --font-weight-regular: 500;
    --font-weight-bold: 800;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: yellow;
};

body {
    font-family: "Source Sans Pro";
}
    
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Source+Code+Pro:ital,wght@0,200..900;1,200..900&display=swap"')

`

export const Title = styled.h1 `
color: var(--color-primary);
font-weight: var( --font-weight-bold);
`

/*



*/