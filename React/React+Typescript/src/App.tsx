import "./App.css";

type TitleProps = {
  text: string;
};

const Title = ({ text }: TitleProps) => {
  return <h1>{text}</h1>;
};

function App() {

  return (
    <div className="App">
      <Title text="Olá Mundo" />
    </div>
  );
}

export default App;


