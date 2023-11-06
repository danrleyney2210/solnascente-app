import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 380px;
  width: 100%;
  /* height: 50px; */
  /* background-color: #d2d3d4; */
  border-radius: 10px;
  padding: 16px;

  p {
    margin-top: 4px;
    text-align: center;
    color: #777;
    font-size: 14px;
  }

  .sliderValue {
  }

  span {
    color: #333;
  }

  .field {
    /* position: relative; */
    display: flex;
    gap: 4px;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;

    input[type="range"] {
      -webkit-appearance: none;
      height: 4px;
      width: 100%;
      background-color: #ddd;
      border-radius: 5px;
      outline: none;
      border: none;

      &::-webkit-slider-thumb {
        -webkit-appearance: none;
        height: 15px;
        width: 15px;
        background-color: #dd002e;
        border-radius: 50%;
        cursor: pointer;
        border: 1px solif #dd002e;
      }
    }

    .value {
      /* position: absolute; */
      font-size: 14px;
      font-weight: 600;
      color: #dd002e;
    }

    /* .value.left {
      right: 22px;
    }

    .value.right {
      right: -43px;
    } */
  }
`;

type slideProps = {
  value: number;
};

export const SlideValue = styled.div<slideProps>`
  position: relative;
  width: 100%;
  left: ${(props) => props.value + "%"};

  span {
    margin-left: 17px;
    position: absolute;
    height: 30px;
    width: 30px;
    color: #fff;
    font-weight: 500;
    font-size: 14px;
    top: -35px;
    transform: translateX(-50%);
    line-height: 55px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;

    &::after {
      content: "";
      position: absolute;
      height: 25px;
      width: 25px;
      left: 50%;
      background-color: #dd002e;
      transform: translateX(-50%) rotate(45deg);
      z-index: -1;
      border: 3px solid #fff;
      border-top-left-radius: 50%;
      border-top-right-radius: 50%;
      border-bottom-left-radius: 50%;
    }
  }
`;
