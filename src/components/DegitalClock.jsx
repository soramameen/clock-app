import  {useEffect, useState} from "react";

const Example=()=>{
  const [date, setDate] = useState([])
  const [time, setTime] = useState([])

  useEffect(() => {
      setInterval(() => {
      let d = new Date();
      let year = d.getFullYear();
      let month = d.getMonth() + 1;
      let day = d.getDate();
      // let dayofweek = d.getDay();

      // const dayname = ['日','月','火','水','木','金','土'];

      setDate(year + '/' + month + '/' + day+'  ' );

      let hour = d.getHours().toString().padStart(2, '0');
      let minute = d.getMinutes().toString().padStart(2, '0');
      setTime(hour + ':' + minute);
      });

  },[])

  return(<>
  <p className='degital-clock'>{date}<span>{time}</span></p>
  </>)
}
export default Example;