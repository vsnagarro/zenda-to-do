import styled from "styled-components";
import useTodoStore from "../store/useTodoStore";

const primeColors = [
  "#FF0000",
  "#00FF00",
  "#0000FF",
  "#FFFF00",
  "#FF00FF",
  "#00FFFF",
  "#FFA500",
];

const CursorWrapper = styled.div`
  position: absolute;
  pointer-events: none;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0.45;
`;

const CursorSVG = styled.svg`
  width: 24px;
  height: 24px;
  fill: ${(props) => props.color};
`;

const CursorName = styled.div`
  margin-top: 4px;
  font-size: 0.8rem;
  color: ${(props) => props.color};
  padding: 0.2rem 0.5rem;
  border-radius: 5px;
`;

const Cursors = () => {
  const awarenessState = useTodoStore((state) => state.awarenessState);
  const localClientId = useTodoStore((state) => state.localClientId);

  return (
    <>
      {Object.entries(awarenessState)
        .filter(([clientId]) => parseInt(clientId) !== localClientId)
        .map(([clientId, user]: any) => {
          if (!user.cursor) return null;

          const assignedColor = primeColors[parseInt(clientId) % primeColors.length];

          return (
            <CursorWrapper
              key={clientId}
              style={{
                top: user.cursor.y || 0,
                left: user.cursor.x || 0,
              }}
            >
              <CursorSVG
                color={assignedColor}
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 28 28"
                enable-background="new 0 0 28 28"
              >
                <polygon
                  fill="#FFFFFF"
                  points="8.2,20.9 8.2,4.9 19.8,16.5 13,16.5 12.6,16.6 "
                />
                <polygon fill="#FFFFFF" points="17.3,21.6 13.7,23.1 9,12 12.7,10.5 " />
                <rect
                  x="12.5"
                  y="13.6"
                  transform="matrix(0.9221 -0.3871 0.3871 0.9221 -5.7605 6.5909)"
                  width="2"
                  height="8"
                />
                <polygon points="9.2,7.3 9.2,18.5 12.2,15.6 12.6,15.5 17.4,15.5 " />
              </CursorSVG>

              <CursorName color={assignedColor}>{user.name || "Anonymous"}</CursorName>
            </CursorWrapper>
          );
        })}
    </>
  );
};

export default Cursors;
