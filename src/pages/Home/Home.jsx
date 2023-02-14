import Header from '../../components/header/header'
import Button from '../../components/button_Home/buttonHome'
import Fox from '../../components/Fox/Fox'
import { useCallback, useState } from 'react'
import classes from '../../styles/box.module.scss'


const Home = () => {
  const [visibilityFox, setvisibilityFox] = useState(false)
  const handleVisibilityFoxy = useCallback(() => {
    setvisibilityFox(true)
    setTimeout(()=> setvisibilityFox(false), 6000)
  },[])

  return (
    <div className={classes.background}>
      <div className={classes.box}>
        <div className={classes.box__page}>
          <Header onClick = {() => handleVisibilityFoxy()} to={'/'}/>
          <Button to={'/menu'}/>
        </div>
        <div className={classes.shadow}/>
      </div>
      {visibilityFox && <Fox/>}
    </div>
  );
}

export default Home