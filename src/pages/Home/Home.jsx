import Header from '../../components/header/header'
import Button from '../../components/button_Home/buttonHome'
import Fox from '../../components/Fox/Fox'
import { useCallback, useState } from 'react'
import BoxContainer from '../../components/BoxContainer/BoxContainer'


const Home = () => {
  const [visibilityFox, setvisibilityFox] = useState(false)
  const handleVisibilityFoxy = useCallback(() => {
    setvisibilityFox(true)
    setTimeout(()=> setvisibilityFox(false), 6000)
  },[])

  return (
    <>
        <BoxContainer>
          <Header onClick = {() => handleVisibilityFoxy()} to={'/'}/>
          <Button to={'/menu'}/>
        </BoxContainer>
      {visibilityFox && <Fox/>}
    </>
  );
}

export default Home