import Header from '../../components/UI/header/header'
import Button from '../../components/UI/button_Home/buttonHome'
import { Link } from 'react-router-dom'
import Fox from '../../components/UI/Fox/Fox'
import { useCallback, useState } from 'react'
import classes from '../../box.module.scss'


const Home = () => {
  const [visibilityFox, setvisibilityFox] = useState(false)

  const handleVisibilityFoxy = useCallback(() =>{
    setvisibilityFox(true)
    setTimeout(()=> setvisibilityFox(false), 6000)
  },[])

  return (

    <div className={classes.background}>
      <div className={classes.box}>
        <div className={classes.box__page}>
          <Link to='/' onClick={handleVisibilityFoxy}>
            <Header/>
          </Link>
          <Link to='/menu'><Button/></Link>
        </div>
        <div className={classes.shadow}></div>
      </div>
      {visibilityFox && <Fox/>}
    </div>
  );
}

export default Home