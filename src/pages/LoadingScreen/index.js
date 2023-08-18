import styled from "styled-components";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <Loading>
      <div className="contentLoading">
        <div className="loadingScreen">
          <p>loading</p>
          <span></span>
        </div>
      </div>
    </Loading>
  );
};

const Loading = styled.div`
  background-color: hsl(var(--hue), 10%, 90%);
  color: hsl(var(--hue), 10%, 10%);
  font: 1em/1.5 sans-serif;
  height: 100vh;
  display: grid;
  place-items: center;
  .contentLoading {
    width: 100%;
    height: 100vh;
    background-color: #171f30;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .contentLoading .loadingScreen {
    width: 80px;
    height: 50px;
    position: relative;
  }
  .contentLoading .loadingScreen p {
    top: 0;
    padding: 0;
    margin: 0;
    color: #5389a6;
    font-family: "Oxygen", sans-serif;
    animation: text 3.5s ease both infinite;
    font-size: 12px;
    letter-spacing: 1px;
  }
  @keyframes text {
    0% {
      letter-spacing: 1px;
      transform: translateX(0px);
    }
    40% {
      letter-spacing: 2px;
      transform: translateX(26px);
    }
    80% {
      letter-spacing: 1px;
      transform: translateX(32px);
    }
    90% {
      letter-spacing: 2px;
      transform: translateX(0px);
    }
    100% {
      letter-spacing: 1px;
      transform: translateX(0px);
    }
  }
  .contentLoading .loadingScreen span {
    background-color: #5389a6;
    border-radius: 50px;
    display: block;
    height: 16px;
    width: 16px;
    bottom: 0;
    position: absolute;
    transform: translateX(64px);
    animation: loadingScreen 3.5s ease both infinite;
  }
  .contentLoading .loadingScreen span:before {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    background-color: #a6dcee;
    border-radius: inherit;
    animation: loading2 3.5s ease both infinite;
  }
  @keyframes loadingScreen {
    0% {
      width: 16px;
      transform: translateX(0px);
    }
    40% {
      width: 100%;
      transform: translateX(0px);
    }
    80% {
      width: 16px;
      transform: translateX(64px);
    }
    90% {
      width: 100%;
      transform: translateX(0px);
    }
    100% {
      width: 16px;
      transform: translateX(0px);
    }
  }
  @keyframes loading2 {
    0% {
      transform: translateX(0px);
      width: 16px;
    }
    40% {
      transform: translateX(0%);
      width: 80%;
    }
    80% {
      width: 100%;
      transform: translateX(0px);
    }
    90% {
      width: 80%;
      transform: translateX(15px);
    }
    100% {
      transform: translateX(0px);
      width: 16px;
    }
  }
`;