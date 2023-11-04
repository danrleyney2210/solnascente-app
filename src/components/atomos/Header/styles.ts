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
        color: #999;
        font-size: 1rem;
        transition: all 200ms ease;

        &:hover {
          color: #dd002e;
        }
      }
    }
  }
`;

export const ContentLogo = styled.div`
  display: flex;
  align-items: center;

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
  max-width: 900px;
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ContentAvatar = styled.div`
  margin-left: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  cursor: pointer;

  > span {
    font-size: 10px;
    color: #999;
  }
`;

export const Avatar = styled.div`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  background-color: #ddd;
`;
