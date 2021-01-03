import styled from 'styled-components';

const StyledForm = styled.div`
  @media (min-width: 1250px) {
    width: 1250px;
    height: 834px;
    margin: auto;
    position: relative;
    text-align: center;

    form {
      position: absolute;
      top: 0;
      right: 0;
      display: grid;
      background: rgba(0,0,0, 0.7);
      height: 100%;
      width: 50%;
      grid-template-areas: 
        "title"
        "error"
        "inputs"
        "ln"
        "submit";
      
      grid-template-rows: 20% 8% 32% 15% 15%;
      
      h2 {
        grid-area: title;
        font-size: 1.8em;
        letter-spacing: 7px;
      }

      .links {
        grid-area: ln;
        width: 75%;
        padding: 0 12.5%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: flex-start;
      
        a {
          color: white;
          text-decoration: none;
          font-size: 0.6em;
          cursor: pointer;
        }

        .forgot {
          font-size: 0.4em;
        }
      }

      .inputContainer {
        grid-area: inputs;
        display: flex;
        flex-direction: column;
        justify-content: center;


        input[type=text], input[type=password], select {
          border: 0;
          background: transparent;
          color: #CDCDCD;
          outline: none;
        }

        option {
          background: rgba(0, 0, 0, 1)
        }

        input[type=text], input[type=password], .select {
          margin: auto;
          width: 75%;
          padding: 20px 0px;
          margin: 8px auto;
          border-bottom: 1px solid white;
          font-size: 0.7em;

          select {
            width: 100%;
            height: 100%;
            font-size: 1em;
          }
        }

        ${'' /* .select {
            width: 100%;
            min-width: 15ch;
            max-width: 30ch;
            border: 1px solid var(--select-border);
            border-radius: 0.25em;
            padding: 0.25em 0.5em;
            font-size: 1.25rem;
            cursor: pointer;
            line-height: 1.1;
            background-color: #fff;
            background-image: linear-gradient(to top, #f9f9f9, #fff 33%);
          } */}

        input[type=checkbox] {
          display: none;
        }

        label {
          display: block;
          position: absolute;
          margin-right: 10px;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: transparent;
          content: "";
          transition: all 0.3s ease-in-out;
          cursor: pointer;
          border: 3px solid white;
        }

      }

      .formError {
        display: flex;
        justify-content: center;
      
        grid-area: error;
        text-align: center;
        ${'' /* background: white; */}
        color: indianred;
        border-bottom: none;
        width: 100%;
        transition: visibility 0.3s, opacity 0.3s linear;
        visibility: visible;
        opacity: 1;
      }

      .errorMessage {
        margin: auto;
        width: 300px;
        font-size: 0.7em;
      }
    }

    input[type=submit] {
      background: #1FCE6D;
      border: 0;
      width: 75%;
      justify-self: center;
      align-self: center;
      height: 40px;
      border-radius: 3px;
      color: #fff;
      font-size: 0.6em;
      cursor: pointer;
      transition: background 0.8s ease-in-out;
    }
    
    input[type=submit]:hover {
      background: #16aa56;
    }
    
    input[type=submit]:disabled {
      background: #6D7781;
      color: #fff;
      cursor: not-allowed;
    }

    .flipped {
      transform: scaleX(${props => props.invert ? -1 : 1});
    }

    .hidden {
      visibility: hidden;
      opacity: 0;
    }
  }
`;

export default StyledForm;
