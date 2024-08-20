import SplitScreen from "./SplitScreen";

const LeftHandComponent = ({ name }: { name: string }) => {
  return <h1>{name}</h1>;
};
const RightHandComponent = ({ message }: { message: string }) => {
  return <p>{message}</p>;
};

function App() {
  return (
    <SplitScreen
      // left={LeftHandComponent}
      // right={RightHandComponent}
      rightWeight={4}
      leftBgColor="#f5f5f5"
    >
      <LeftHandComponent name="Hi,👋🏼" />
      <RightHandComponent message="This is the right side of the layout" />
    </SplitScreen>
  );
}

export default App;
