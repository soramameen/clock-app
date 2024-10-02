const Example=({setDegitalOrAnalog})=>{
  const change=()=>{
    setDegitalOrAnalog(prev => !prev);
  }
  return(<>
  <button className='change-button' onClick={change}>Change</button></>)
}
export default Example;