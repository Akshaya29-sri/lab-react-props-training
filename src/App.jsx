import "./App.css";
import IdCard from "./components/Idcard";
import Greetings from "./components/Greetings";
import Random from "./components/Random";

function App() {
  return (
    <div className="App">
      <IdCard
  lastName='Doe'
  firstName='John'
  gender='male'
  height={178}
  birth={new Date("1992-07-14")}
  picture="https://randomuser.me/api/portraits/men/44.jpg"
/>

<IdCard
  lastName='Delores '
  firstName='Obrien'
  gender='female'
  height={172}
  birth={new Date("1988-05-11")}
  picture="https://randomuser.me/api/portraits/women/44.jpg"
/>
<Greetings lang='de'>Ludwig</Greetings>
<Greetings lang='fr'>Francois</Greetings>  
<Random min={1} max={6} />
    </div>
  );
}

export default App;
