import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.section`
  margin: auto;
  padding: 50px 0;
  width: 900px;

  ul {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
    justify-items: center;

    li {
      display: flex;
      flex-direction: column;
      background: #fff;
      border-radius: 4px;
      padding: 16px;
      width: 200px;

      img {
       align-self: center;
       max-width: 140px; 
      }

      > strong {
        line-height: 20px;
        color: #999;
        margin: 8px 0;
      }

      > span {
        font-size: 24px;
        margin: 8px 0;
        font-weight: bold;
        margin-top: auto;
      }

      button {
        background: #33bfcb;
        border: 0;
        color: #fff;
        border-radius: 4px;
        overflow: hidden;
        height: 36px;
        padding: 0 10px;
        text-transform: uppercase;
        font-weight: bold;

        &:hover {
          background: ${darken(0.05, "#33bfcb")};
        }

        > div {
          display: flex;
          align-items: center;
          justify-content: center;

          span {
            margin-left: 6px;
          }

          svg {
            margin-right: 3px;
          }
        }
      }
    }
  }
`;
