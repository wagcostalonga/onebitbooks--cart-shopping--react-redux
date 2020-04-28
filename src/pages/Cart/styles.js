import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.section`
  margin: 50px auto;
  padding: 50px 30px;
  width: 700px;
  background: #fff;
  border-radius: 4px;

  table {
    width: 100%;

    thead th {
      color: #999;
      text-align: left;
      padding: 12px;
      text-transform: uppercase;
    }

    tbody td {
      padding: 12px;
      border-bottom: 1px solid #eee;

      img {
        height: 100px;
      }

      > strong {
        color: #333;
        display: block;
      }

      > span {
        display: block;
        margin-top: 5px;
        font-size: 18px;
        font-weight: bold;
      }

      > div {
        display: flex;
        align-items: center;

        input {
          border: 1px solid #ddd;
          border-radius: 4px;
          color: #999;
          padding: 6px;
          width: 50px;
        }
      }

        button {
          background: none;
          border: 0;
          padding: 6px;
        }
    }
  }

  footer {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    > button {
      background: #33bfcb;
      border: 0;
      color: #fff;
      border-radius: 4px;
      overflow: hidden;
      height: 36px;
      padding: 0 10px;
      transition: all 0.2s;

      &:hover {
        background: ${darken(0.05, "#33bfcb")};
      }
    }

    span {
      color: #999;
      font-weight: bold;
    }

    strong {
      font-size: 28px;
      margin-left: 10px;
    }
  }
`;
