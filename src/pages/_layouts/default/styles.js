import styled from 'styled-components';

const imageSize = 150;

export const Container = styled.div`
  background: #fdfdfd;
  max-width: 1000px;
  height: auto;
  margin: ${imageSize / 2}px auto 20px;
  padding: 15px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.26);
`;

export const Header = styled.div`
  position: relative;
  padding: ${imageSize / 2 + 10}px 10px 20px;
  margin-bottom: 10px;
  text-align: center;
  border-bottom: 3px double #efefef;
  h1,
  h2 {
    color: #444;
    font-weight: 700;
    font-size: 36px;
    span {
      color: #ff6633;
    }
  }
  h2 {
    font-size: 22px;
  }
  a {
    color: #444;
    font-style: italic;
    font-size: 0.8rem;
  }
`;

export const ImagePlace = styled.div`
  border-radius: 50%;
  position: absolute;
  width: ${imageSize}px;
  height: ${imageSize}px;
  top: -${imageSize / 2 + 15}px;
  left: 50%;
  transform: translateX(-50%);
  background: #929292;
`;
export const Image = styled.img`
  border-radius: 50%;
  margin: 5px;
  width: calc(100% - 10px);
  height: calc(100% - 10px);
  background: #fff;
  background: linear-gradient(
    90deg,
    rgba(157, 157, 157, 1) 0%,
    rgba(146, 146, 146, 1) 100%
  );
  /* box-shadow: 0 3px 6px rgba(0, 0, 0, 0.26); */
`;