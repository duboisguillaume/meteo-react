import React, { useEffect, useState } from 'react'
import { Meteo } from '../components/meteo/Meteo';
import { meteoService } from '../services/MeteoService'


export const MeteoLayout = () => {

    const [ville, setVille] = useState("");

    const[meteo,setMeteo] = useState({});

      useEffect((meteo) => {
        meteoService.find('Lille').then(setMeteo);
      }, []);

      const onClickMe = () => {
          if(ville!==''){
              meteoService.find(ville).then(setMeteo);
          }
      }


    return <div>
        <p>Ville<input type="text" value={ville} onChange={(event) => setVille(event.target.value)} /></p>
        <button onClick={onClickMe}>Recherche</button>
        {meteo.name ? <Meteo meteo={meteo}></Meteo> : <p>Ville incorrecte</p>}
    </div>
}


