import React,{useState} from 'react'

const Radios = () => {
    const [games, setGames] = useState("");
    const [days, setDays] = useState("");

    const Games = ['Cricket', 'Football', 'Badminton','Tennis'];
    const Days = ['Weekday', 'Weekend'];
 
  return (
    <div>
        <h2>Which Game Play?</h2>
         {Games.map((game,i)=>{
            return(
                <div key={i}>
                    <input type="radio" 
                    name="games"
                    value={game}
                    onChange={(e)=>setGames(e.target.value)}    
                    />
                    <label htmlFor="">{game}</label>
                </div>
            )
         })}
         <h2>Select Day</h2>
         {Days.map((day,i)=>{
            return(
                <div key={i}>
                    <input type="radio" 
                    name="days"
                    value={day}
                    onChange={(e)=>setDays(e.target.value)}    
                    />
                    <label htmlFor="">{day}</label>
                </div>
            )
         })}
          <h3>{games} is play on {days}.</h3>
    </div>
  )
}

export default Radios