import { useState, type ChangeEvent } from 'react'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)


  // function setIsPublic(isPublic: boolean) {
  //   console.log("Czy postać jest publiczna: ", isPublic)
  // }


  interface Character {
    name: string;
    race: string;
    class: string;
    level: number;
    description: string;
    isPublic: boolean;
  }


    function handleChange(event: ChangeEvent<HTMLInputElement>) {
      setUserName(event.target.value);
    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
      event.preventDefault();
      console.log("Formularz został wysłany!");
    }


  const [userName, setUserName] = useState("");
  const [userRace, setUserRace] = useState("");
  const [userClass, setUserClass] = useState("");
  const [userLevel, setUserLevel] = useState(1);
  const [userDescription, setUserDescription] = useState("");
  const [isPublic, setIsPublic] = useState(true);
 
  

  return (

    

    <form onSubmit={handleSubmit}>
      <label htmlFor="imie">Nazwa postaci</label> {/* htmlfor laczy label z inputem */}<br/>
      <input 
        type="text" 
        name="imie"
        id="imie"
        value={userName}
        onChange={handleChange}
      />
      <br/><br/>
      <label htmlFor="rasa">Rasa</label><br/>
      <select name="rasa" id="rasa" value={userRace} onChange={(event) => setUserRace(event.target.value)}>
        <option value="wybierajRasa">Wybierz rasę</option>
        <option value="czlowiek">Człowiek</option>
        <option value="elf">Elf</option>
        <option value="krasnolud">Krasnolud</option>
        <option value="ork">Ork</option>
      </select>
      <br/><br/>

      <label htmlFor="klasa">Klasa</label><br/>
      <select name="klasa" id="klasa" value={userClass} onChange={(event) => setUserClass(event.target.value)}>
        <option value="wybierajKlasa">Wybierz klasę</option>
        <option value="wojownik">Wojownik</option>
        <option value="mag">Mag</option>
        <option value="lucznik">Łucznik</option>
      </select>
      <br/><br/>

      <label htmlFor="poziom">Poziom</label><br/>
      <input 
        type="number" 
        name="poziom" 
        id="poziom" 
        min={1} 
        max={100} 
        value={userLevel}
        onChange={(event) => setUserLevel(parseInt(event.target.value))}
      />
      <br/><br/>
      <label htmlFor="opis">Opis</label><br/>
      <textarea 
        name = "opis"
        id = "opis"
        value={userDescription}
        onChange={(event) => setUserDescription(event.target.value)}
        maxLength={200}
      />

      <br/><br/>
      <label htmlFor ="postacPub">Czy postać ma być publiczna</label><br/>
      <input 
        type = "checkbox"
        name = "postacPub"
        id = "postacPub"
        checked = {isPublic}
        onChange={(event) => setIsPublic(event.target.checked)}

      />
      <br/><br/>
      <button type="submit">Utwórz postać</button>




    </form>
  )
}

export default App
