import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    border: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
  }

  html{
    scroll-behavior: smooth;
  }

::-webkit-scrollbar{
    display: none;
  }
  
  body, input, button , textarea {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }
  
  body {
    background-color: ${(props) => props.theme.color_bg};
    color: ${(props) => props.theme.color_white};
    line-height: 1.7;
    background-image: url('../../src/assets/bg-texture.png');
  }

  .container {
    width: ${(props) => props.theme.container_width_lg};
    margin: 0 auto;
  }

  h1, h2,h3,h4,h5 {
    font-weight: 500;
  }
  
  h1 {
    font-size: 2.5rem;
  }

  section {
    margin-top: 8rem;

    h2, h5 {
      text-align: center;;
      color: ${(props) => props.theme.color_light}
    }

    h2 {
      color: ${(props) => props.theme.color_primary};
      margin-bottom: 3rem;
    }
  }

  .text-alight {
    color: ${(props) => props.theme.color_light};
  }

  a {
    color: ${(props) => props.theme.color_primary};
    transition: ${(props) => props.theme.transition};

    &:hover {
      color: ${(props) => props.theme.color_white};
    }
  }

  .btn {
    width: max-content;
    display: inline-block;
    color: ${(props) => props.theme.color_primary};
    padding: 0.75rem 1.2rem;
    border-radius: 0.4rem;
    cursor: pointer;
    border: 1px solid ${(props) => props.theme.color_primary};
    transition: ${(props) => props.theme.transition};

    &:hover {
      background-color: ${(props) => props.theme.color_white};
      color: ${(props) => props.theme.color_bg};
      border-color: transparent;
    }
  }

  .btn-primary {
    background-color: ${(props) => props.theme.color_primary};
    color: ${(props) => props.theme.color_bg};

  }

  img{
    display: block;
    width: 100%;
    justify-content: center;
    object-fit: cover;
  }

  @media screen and ( max-width: 1024px ) {
    .container {
      width: ${(props) => props.theme.container_width_md};
    }

    section {
      margin-top: 6rem;
    }
  }

  @media screen and ( max-width: 600px ) {
    .container {
      width: ${(props) => props.theme.container_width_sm};
    }

    section {
      h2 {
        margin-bottom: 2rem;
      }
    }
  }






   



`;
