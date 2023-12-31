import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 60px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;

  ul {
    list-style: none;
    display: flex;
    gap: 1rem;

    li {
      a {
        display: flex;
        align-items: center;
        gap: 8px;
        transition: all 200ms ease;

        color: #999;
        font-size: 1rem;

        &:hover {
          svg {
            fill: #dd002e;
          }

          color: #dd002e;
        }

        svg {
          fill: #999;
        }
      }

      .active {
        color: #dd002e;

        svg {
          fill: #dd002e;
        }
      }
    }
  }

  @media (max-width: 1030px) {
    padding: 0 24px;
  }
`;

export const ContentLogo = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  svg,
  img {
    margin-bottom: 0;
  }
`;

export const ContentInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const Container = styled.div`
  max-width: 1000px;
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ContentAvatar = styled.div`
  margin-left: 45px;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;

  > span {
    font-size: 10px;
    color: #999;
  }

  @media (max-width: 700px) {
    display: none;
  }
`;

export const Avatar = styled.div`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  background-color: #ddd;
`;
