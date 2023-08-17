import React from "react";
import styled from "styled-components";

const ErrorPage = () => {
  const fixError = () => {
    localStorage.removeItem("applicationState");
    window.location.reload();
  };
  return (
    <Error>
      <div id="error">Error</div>
      <div class="error-num">
        400
        <div class="error-num__clip">400</div>
      </div>
      <p id="desc">Uh oh, there seems to be a problem.</p>
      <p>
        Let me help you find <span onClick={fixError}>a way out</span>
      </p>
    </Error>
  );
};

const Error = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: #333333;
  font-size: 20px;
  font-family: "IBM Plex Mono";
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.25);

  span {
    color: white;
    cursor: pointer;
  }

  #error {
    margin-bottom: 1rem;
    font-size: 2rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.075em;
    color: #c94d4d;
    -webkit-animation: pulse 4s infinite alternate;
    animation: pulse 4s infinite alternate;
    position: relative;
  }
  @-webkit-keyframes pulse {
    from {
      opacity: 0.5;
    }
    50% {
      opacity: 0.5;
    }
  }
  @keyframes pulse {
    from {
      opacity: 0.5;
    }
    50% {
      opacity: 0.5;
    }
  }
  #error::before {
    content: "";
    width: 0.75rem;
    height: 50vh;
    margin-bottom: 0.75em;
    position: absolute;
    left: 50%;
    bottom: 100%;
    transform: translateX(-50%);
    background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.1) 60%,
      transparent 100%
    );
  }

  #desc {
    margin: 2em 0 1em;
  }

  .error-num,
  .error-num__clip,
  .error-num__clip-left,
  .error-num__clip-left::before,
  .error-num__clip::before {
    position: relative;
    font-size: 10rem;
    font-family: "Oswald";
    letter-spacing: -0.01em;
    color: white;
    -webkit-animation: colorSplit 1.25s steps(2, end) infinite;
    animation: colorSplit 1.25s steps(2, end) infinite;
  }
  @-webkit-keyframes colorSplit {
    25% {
      text-shadow: -0.02em 0 0 #ed008c, 0.025em 0 0 #0087ef;
    }
    75% {
      text-shadow: -0.035em 0 0 #ed008c, 0.04em 0 0 #0087ef;
    }
  }
  @keyframes colorSplit {
    25% {
      text-shadow: -0.02em 0 0 #ed008c, 0.025em 0 0 #0087ef;
    }
    75% {
      text-shadow: -0.035em 0 0 #ed008c, 0.04em 0 0 #0087ef;
    }
  }

  .error-num__clip,
  .error-num__clip-left,
  .error-num__clip-left::before,
  .error-num__clip::before {
    position: absolute;
    top: 0;
    left: -2px;
    z-index: 10;
    color: #333;
    overflow: visible;
    -webkit-clip-path: polygon(
      0% 0%,
      100% 0,
      100% 25%,
      0 25%,
      0 30%,
      100% 30%,
      100% 50%,
      0 50%,
      0 60%,
      100% 60%,
      100% 65%,
      0 65%,
      0 80%,
      100% 80%,
      100% 85%,
      0 85%,
      0% 0%
    );
    clip-path: polygon(
      0% 0%,
      100% 0,
      100% 25%,
      0 25%,
      0 30%,
      100% 30%,
      100% 50%,
      0 50%,
      0 60%,
      100% 60%,
      100% 65%,
      0 65%,
      0 80%,
      100% 80%,
      100% 85%,
      0 85%,
      0% 0%
    );
    -webkit-animation: glitch 1s steps(2, start) infinite;
    animation: glitch 1s steps(2, start) infinite;
  }
  @-webkit-keyframes glitch {
    30% {
      left: 0;
    }
    to {
      left: 0;
    }
  }
  @keyframes glitch {
    30% {
      left: 0;
    }
    to {
      left: 0;
    }
  }
  .error-num__clip::before,
  .error-num__clip-left::before {
    content: "400";
    left: 0.05em;
    color: white;
    z-index: 9;
    -webkit-clip-path: polygon(
      0% 0%,
      100% 0,
      100% 26%,
      0 26%,
      0 29%,
      100% 29%,
      100% 51%,
      0 51%,
      0 59%,
      100% 59%,
      100% 66%,
      0 66%,
      0 79%,
      100% 79%,
      100% 86%,
      0 86%,
      0% 0%
    );
    clip-path: polygon(
      0% 0%,
      100% 0,
      100% 26%,
      0 26%,
      0 29%,
      100% 29%,
      100% 51%,
      0 51%,
      0 59%,
      100% 59%,
      100% 66%,
      0 66%,
      0 79%,
      100% 79%,
      100% 86%,
      0 86%,
      0% 0%
    );
  }
`;

export default ErrorPage;
