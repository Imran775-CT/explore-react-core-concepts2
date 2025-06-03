import Friends from './Friends'
import Users from './Users'
import Team from './team'
import './App.css'
import Counter from './Counter'
function App() {


  function handleClick(){
    alert('button clicked!')
  }

  const handleClick2 = () => alert('button 2 clicked!')





  return (
    <>
    
      <h3>React Core Concepts 2</h3>
      <Friends></Friends>
         <Users></Users>
      <Team></Team>
      <Counter></Counter>
      <button onClick={handleClick}>Click ME</button>
      <button onClick={handleClick2}>Click 2</button>
      <button>Click 3</button>
      <button>Four</button>
    </>
  )
}

export default App
