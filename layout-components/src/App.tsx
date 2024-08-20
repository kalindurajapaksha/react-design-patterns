import SplitScreen from "./SplitScreen";

const LeftHandComponent = () => {
  return <h1>Left!</h1>;
};
const RightHandComponent = () => {
  return <p>Right!</p>;
};

function App() {
  return (
    <SplitScreen
      // left={LeftHandComponent}
      // right={RightHandComponent}
      rightWeight={4}
      leftBgColor="#f5f5f5"
    >
      <LeftHandComponent />
      <RightHandComponent />
    </SplitScreen>
  );
}

export default App;
