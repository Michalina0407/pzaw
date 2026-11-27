// import { useState } from 'react'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)


  // function setIsPublic(isPublic: boolean) {
  //   console.log("Czy postać jest publiczna: ", isPublic)
  // }


  return (
    <form>
      <label htmlFor="imie">Nazwa postaci</label> {/* htmlfor laczy label z inputem */}<br/>
      <input 
        type="text" 
        name="imie"
        id="imie"
      />
      <br/><br/>
      <label htmlFor="rasa">Rasa</label><br/>
      <select name="rasa" id="rasa">
        <option value="wybierajRasa">Wybierz rasę</option>
        <option value="czlowiek">Człowiek</option>
        <option value="elf">Elf</option>
        <option value="krasnolud">Krasnolud</option>
        <option value="ork">Ork</option>
      </select>
      <br/><br/>

      <label htmlFor="klasa">Klasa</label><br/>
      <select name="klasa" id="klasa">
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
      />
      <br/><br/>
      <label htmlFor="opis">Opis</label><br/>
      <textarea 
        name = "opis"
        id = "opis"
        maxLength={200}
      />

      <br/><br/>
      <label htmlFor ="postacPub">Czy postać ma być publiczna</label><br/>
      <input 
        type = "checkbox"
        name = "postacPub"
        id = "postacPub"
        // onChange={(event) => setIsPublic(event.target.checked)}
        checked={true}
      />
      
      <button type="submit">Utwórz postać</button>




    </form>
  )
}

export default App
