import { FC, PropsWithChildren, Children } from "react";
import styled from "styled-components";

type SplitScreenProps = {
  //   left: ComponentType;
  //   right: ComponentType;
  leftWeight?: number;
  rightWeight?: number;
  leftBgColor?: string;
  rightBgColor?: string;
};

type PaneProps = {
  weight: number;
  bgColor: string;
};

const Container = styled.div`
  display: flex;
`;
const Pane = styled.div<PaneProps>`
  flex: ${(props) => props.weight};
  background-color: ${(props) => props.bgColor};
  height: 100vh;
  padding: 1rem;
`;
const SplitScreen: FC<PropsWithChildren<SplitScreenProps>> = ({
  leftWeight = 1,
  rightWeight = 1,
  leftBgColor = "white",
  rightBgColor = "white",
  children,
}) => {
  const [left, right] = Children.toArray(children);
  return (
    <Container>
      <Pane weight={leftWeight} bgColor={leftBgColor}>
        {left}
      </Pane>
      <Pane weight={rightWeight} bgColor={rightBgColor}>
        {right}
      </Pane>
    </Container>
  );
};

export default SplitScreen;
