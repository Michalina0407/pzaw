import { useState } from "react";



interface ZadaniaLista {
  nazwazad: string;
  czyzrob: boolean;
}



// const tablicazadan = Zadania.filter((Zadania) => Zadania.includes(Zadania)) ;
function App(){
const [istasks, setTasks] = useState(true);
  const Nieskonczone = istasks.filter((zadanie => !zadanie.czyzrob).length);

  const wypisanezad: ZadaniaLista[] = [
    {nazwazad: "mega trudne 80 zadań", czyzrob: false },
    {nazwazad: "sam się nie wyprowadzi", czyzrob: false}
  ]

  const zmienStatusZadania = (nazwazad: string) => {
    setTasks((terazzadanie) => 
      terazzadanie.map((zadanie) => 
        zadanie.nazwazad == nazwazad ? {...nazwazad, czyzrob: !nazwazad.czyzrob } : nazwazad
      )
    )
  }





  wypisanezad.sort((a, b) => a.nazwazad.localeCompare(b.nazwazad));

  

  const zmienna = wypisanezad.map((zadanie) => (
          <div key={zadanie.nazwazad}>
                  <p>{zadanie.nazwazad}</p>
                  <input 
                    type="checkbox"
                    id={zadanie.nazwazad}
                    checked={zadanie.czyzrob}
                    onChange={() => zmienStatusZadania(zadanie.nazwazad)} />
                </div>   
  ))


    

    return(
      <div>
        {zmienna}
      </div>
    )






}

export default App;