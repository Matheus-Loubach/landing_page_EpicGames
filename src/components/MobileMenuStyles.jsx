import styled, {css} from "styled-components";
export const Container = styled.section`
position: absolute;
backdrop-filter: blur(3px);
width: 100%;
height: 100%;
top: 0;
left: 0;
right: 0;
bottom: 0;
z-index: 5;
display: flex;
align-items: center;
justify-content: center;
background: rgba(17, 18, 17, 0.95);
background: linear-gradient(34deg, #2681FF 0%, rgba(17,18,17,0.95) 95%);
opacity: 0;
pointer-events: none;
transform: translateY(50px);
transition: .5s;
> img {
  position: absolute;
  top: 1rem;
  right: 1rem;
  transition: .7s;
  transform: rotate(40deg);
  background-color: rgba(255, 255, 255, 0.32);
}

img:hover{
  background-color: red;
  cursor: pointer;
}

nav {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;
  transform: scale(0.7);
  transition: .7s;
}

nav ul{

  list-style-type: none;
}

nav li a{
  text-decoration: none;
  color: #FFFFFF
}


${({ IsVisible }) => IsVisible && css`
  opacity: 1;
  pointer-events: auto;
  transform: translateY(0px);
  > img {
    transform: rotate(0deg);
  }
  nav {
    transform: scale(1);
  }
`}
`;