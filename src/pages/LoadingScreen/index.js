import styled from "styled-components";
import "./style.css";

const Loading = styled.div`
  background-color: hsl(var(--hue), 10%, 90%);
  color: hsl(var(--hue), 10%, 10%);
  font: 1em/1.5 sans-serif;
  height: 100vh;
  display: grid;
  place-items: center;
`;

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
