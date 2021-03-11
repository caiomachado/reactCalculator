import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .calculator {
    width: 280px;
    height: 600px;
    background: ${props => 
      props.theme === 'dark' ? 'linear-gradient(#948e8e, #272626)' : 'linear-gradient(#fff, #e4dfdf)'};
    border-radius: 20px;
    box-shadow: 6px 8px 12px black;
    
    display: flex;
    flex-direction: column;

    .screen {
      width: 100%;
      height: 30%;
      border-bottom: 5px solid ${props => props.theme === 'dark' ? '#948e8e' : '#c6c8c5'};
      border-radius: 10px;

      display: flex;
      flex-direction: column;
      align-items: flex-end;
      justify-content: flex-end;

      p {
        font-size: 25px;
        padding: 0 10px;
        max-width: 100%;
        color: ${props => props.theme === 'dark' ? '#c6c8c5' : 'black'};
      }

      .result {
        font-size: 36px;
      }
    }

    .buttons {
      width: 100%;
      height: 70%;
      padding: 10px 15px;

      .value-item {

        button {
          color: ${props => props.theme === 'dark' ? '#c6c8c5' : 'black'};
          display: flex;
          align-items: center;
          justify-content: center;
          width: 50px;
          height: 50px;
          border: none;
          outline: none;
          border-radius: 50%;
          background-color: ${props => props.theme === 'dark' ? '#393a3c' : '#f2f3f5'};
          box-shadow: 3px 3px 6px black;
          cursor: pointer;
          transition: all 0.1s ease-in-out;
          font-size: 20px;

          &:hover {
            transform: scale(1.05);
          }
        }
      }

      .theme-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        font-size: 12px;
        font-weight: bold;

        margin-bottom: 10px;

        .switch-wrapper {
          display: flex;
          align-items: center;

          p {
            text-transform: uppercase;
          }
          
          .switch {
            display: flex;
            justify-content: ${props => props.theme === 'dark' ? 'flex-end' : 'flex-start'};
            width: 40px;
            height: 20px;
            border-radius: 30px;
            background-color: ${props => props.theme === 'dark' ? '#393a3c' : '#fff'};
            box-shadow: 0 0 6px ${props => props.theme === 'dark' ? '#fff' : '#393a3c'};
            margin-right: 5px;
            cursor: pointer;
            
            .lever {
              width: 20px;
              height: 20px;
              border-radius: 50%;
              background-color: ${props => props.theme === 'dark' ? '#fff' : '#393a3c'};
              outline: none;
              border: 0;
            }
          }
        }
      }

      .math-part {
        display: flex;
        width: 100%;

        .values {
          display: flex;
          flex-direction: column;
          width: 100%;

          .value-row {
            display: flex;
            align-items: center;
            justify-items: space-between;
            width: 100%;

            margin-bottom: 5px;

            &:last-of-type {
              margin-bottom: 0;
            }

            .value-item {
              margin-right: 10px;

              &:last-of-type {
                margin-right: 0;
              }
            }

            .yellow {
              button {
                background-color: ${props => props.theme === 'dark' ? '#fdb82c' : '#fdb82d'};
                color: white;
                font-weight: bold;
              }
            }

            .light-yellow {
              button {
                background-color: ${props => props.theme === 'dark' ? '#4f483e' : '#f5e7bc'};
                color: ${props => props.theme === 'dark' ? '#d09a2e' : '#bfaa7c'};
              }
            }
          }
        }

        .operations {
          display: flex;
          flex-direction: column;
          align-items: center;

          .value-item {
            margin-bottom: 5px;

            button {
              background-color: ${props => props.theme === 'dark' ? '#48335c' : '#e1d5e9'};
              color: ${props => props.theme === 'dark' ? '#bc7ae6' : '#57087e'};
              
            }
            
            &:last-of-type {
              margin-bottom: 0;
            }
          }

          .large-size {
            height: 32%;

            button {
              height: 100%;
              border-radius: 20px;
              background-color: ${props => props.theme === 'dark' ? '#972aeb' : '#9b2df2'};
              color: white;
              font-weight: bold;
              font-size: 38px;
            }
          }
        }
      }
    }
  }
`;
