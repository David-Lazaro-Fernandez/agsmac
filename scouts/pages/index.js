import {useState} from 'react';
import Head from 'next/head'

import {Grid, Container, Button, Paper} from '@mui/material';

import ScoutCard from '../components/ScoutCard';
import CoolButton from '../components/CoolButton';
import CoolLink from '../components/CoolLink';
import FAQ from '../components/FAQ';

import { GoogleMap, useJsApiLoader, useLoadScript } from '@react-google-maps/api';
import credentials from '../credentials';


export default function Home() {
  
  const containerStyle = {
    width: '100%',
    height: '500px',
    borderRadius:'0px',
    border:'0px',

  }

  const [mapZoom, setMapZoom] = useState(7)
  const [coordinates, setCoordinates] = useState({
    lat:20.036159135066864, 
    lng:-99.5750629360116
  })
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: credentials.mapKey,
  });
  if (loadError) return 'Error loading maps';
  if (!isLoaded) return 'Loading Maps'; 
  
  return (
    <div>
      <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="True" />
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap" rel="stylesheet" />
      </Head>
    <Container maxWidth="lg">      
      <Grid container spacing={3}>
        <Grid item xl={4} lg={4}  md={4} sm={4} xs={4}>
          <img 
          src="/img/Logo.png" 
          alt="AGSMAC Logo" 
          />
        </Grid> 
        
        <Grid item xl={3} lg={3}  md={3} sm={3} xs={3}>
        </Grid>

        <Grid item xl={5} lg={5}  md={5} sm={5} xs={5}>
          <Grid container spacing={2}>
            <Grid item xl={6}>
              <CoolButton type="secondary" text="¡Encuentra tu tropa!"/>
            </Grid>
            <Grid item xl={6} lg={6}  md={6} sm={6} xs={6}>
            <CoolButton type="primary" text="Ingresar"/>
            </Grid>  
          </Grid>  
        </Grid> 
      </Grid>  
      <Grid container spacing={3}>
        <Grid item xl={6}>
          <Grid 
          container 
          spacing={2}
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-end"
          >
            <Grid item xl={9} lg={9}  md={12} sm={12} xs={12}>
              <h1
              style={{
                color:'#2E2270',
                fontFamily: 'Roboto',
                fontWeight: '900',
                fontSize:'50px',
}}
              >Jovenes Construyendo Un Mejor México</h1>
            </Grid>
          </Grid> 
          <Grid 
            container 
            spacing={2}
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
          >
            <Grid item xl={6}>
            <CoolButton type="secondary" text="Conoce más"/>
            </Grid>
          </Grid>       
        </Grid>
        <Grid item xl={6}>
          <img 
          src="https://lh3.googleusercontent.com/sF3ShmUrodLBbvD8_dSg3u7vTsNq7RUmZ2xmoOWV34wjg_FYJKX--MQtuKSZVxenQyjQgbdTmqNQeOYKI8YRxva_WVUMvx6c9-TPDMZ8WQH0tWBJOKHI0Ze48941pUKh11g4xwEgvgZ-8Aa1jNyQhxA8ozOGXYEN-ab1yTnVhPVlGS8ppEx1qZBNaByrLmHlHZ5zdzJhHBilW2MjLe2X5GZQd7p4VNU40DgYV8FnDuxKXtyk5QokV2qZph14BymSvc8usNwsp-HIzME5Kmz1ZhuqJoLB_7SPlxkoTcvI0pvzngQr4yZg5WsHn754yfVU0VaHgDcDSL1_IMuxjJXTsM7iYy0_32IOVFb9d0O2U746-ctBuqH1xNdydORURvpx_diS8H4tyaRD51GwwolX5hGvzXS5GPsgMGabqGqWmBEC0UZ1f8YwA1LKnlQU-1XOxXA_JyxMZuA8k4oly1_cF29ILFNDg2Xh8J6rPbXjt5vNAM78qlu-FrBkGObaVeH_iyIoEamDfDsXXnJ9_xbN_rROMsio1crHnJ44GohH3DIBPFIer7-pLLgW-U5cOgFKaVeiW2bxACDW_DNS9LPGUkuWNe29LR5NXnULxz0PcJ9sldXhipzmCY8BLE2dBv5hri0ilr1OZZ7nl7wxYo2IgAFwWFokE3Ptq1HGu-7bBtryunNmHQWn1D1S6o2vzFuP0hnve1gEEK76NwbcZA3n5dpf=w1174-h880-no?authuser=6" 
          style={{
            width: '100%',
            objectFit: 'none',
          }}
          />
        </Grid>  
      </Grid>
      <Grid container spacing={3}>
        <Grid item xl={12} lg={12} md={12} sm={12 } xs={12}>
          <h1
          style={{
            textAlign:'center',
            color:'#2E2270',
          }}
          >Multiples tropas, una sola misión</h1>
        </Grid>  
      </Grid>

      <Grid container spacing={3}>
        <Grid item xl={3} lg={3} md={6} sm={6} xs={12}>
          <ScoutCard 
            image="/img/Castores.png" 
            name="Colonia de Castores" 
            borders="986400"
            background="C0A062"
            fontColor="FAFAFA" 
          />
        </Grid>  
        <Grid item xl={3} lg={3} md={6} sm={6} xs={12}>
          <ScoutCard 
            image="/img/Gacelas.png" 
            name="Manada de Gacelas" 
            borders="DA251D"
            background="FFF500"
            fontColor="DA251D" 
          />
        </Grid>  
        <Grid item xl={3} lg={3} md={6} sm={6} xs={12}>
          <ScoutCard 
            image="/img/Clan Percusores.png" 
            name="Clan de Percusoras"
            borders="DA251D"
            background="FAFAFA"
            fontColor="DA251D"  
          />
        </Grid>  
        <Grid item xl={3} lg={3} md={6} sm={6} xs={12}>
          <ScoutCard 
            image="/img/Clan Robers.png" 
            name="Clan de Robers"
            borders="DA251D"
            background="FAFAFA"
            fontColor="DA251D"  
          />
        </Grid>  
        <Grid item xl={3} lg={3} md={6} sm={6} xs={12}>
          <ScoutCard 
            image="/img/Manada de lobos.png" 
            name="Manada de Lobos"
            borders="230E6F"
            background="FFF500"
            fontColor="230E6F" 
          />
        </Grid>  
        <Grid item xl={3} lg={3} md={6} sm={6} xs={12}>
          <ScoutCard 
            image="/img/Tropa scout.png" 
            name="Tropa Scout"
            borders="B9DC7D"
            background="1F4C3E"
            fontColor="B9DC7D"
          />
        </Grid>  
        <Grid item xl={3} lg={3} md={6} sm={6} xs={12}>
          <ScoutCard 
            image="/img/Tropa mujeres.png" 
            name="Tropa De Muchachas"
            borders="B9DC7D"
            background="1F4C3E"
            fontColor="B9DC7D"
          />
        </Grid>  
        <Grid item xl={3} lg={3} md={6} sm={6} xs={12}>
          <ScoutCard 
            image="/img/Scouters.png" 
            name="Scouters y Dirigentes"
            borders="FAFAFA"
            background="000000"
            fontColor="FAFAFA"
          />
        </Grid>  

      </Grid>

      <Grid 
      container 
      spacing={2}
      style={{ marginTop:'10px'}}
      >
        <Grid item xl={6} lg={6} md={12} sm={12} xs={12}>
          <CoolLink image="/img/expediciones.jpg" text="Expediciones" height="460" transparency="0.5"/>
        </Grid>    
        <Grid item xl={6} lg={6} md={12} sm={12} xs={12}>
          <Grid container spacing={2}>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              <CoolLink image="/img/campamentos.jpg" text="Campamentos" height="220" transparency="0.5"/>  
            </Grid>
          </Grid>
          <Grid container spacing={2} style={{marginTop:'1px'}}>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              <CoolLink image="/img/cursos.jpg" text="Cursos de inducción" height="220" transparency="0.5"/>  
            </Grid>
          </Grid>
        </Grid>    

      </Grid>
      
      <Grid container spacing={2} style={{marginTop:'1px'}}>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <CoolLink image="/img/libro.jpg" text="El libro de oro" height="280" transparency="0.75"
          style={{
            backgroundSize:'contain !important', 
          }}
          />  
        </Grid>
      </Grid>

    <Grid container spacing={2}
      style={{marginTop:'25px'}}
    >
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={coordinates}
            zoom={mapZoom}
          >

          </GoogleMap>
    </Grid>

    <Grid container spacing={2} style={{marginTop:'25px'}}>
      <Grid item xl={6} lg={6} md={12} sm={12} xs={12}>
        <Grid container spacing={2}>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            <CoolLink image="/img/Irally.png" text="I rally Virtual" height="220" transparency="0.5"/>
          </Grid>
        </Grid>
        <Grid container spacing={2} style={{marginTop:'25px'}}>
          <Grid item xl={6} lg={6} md={12} sm={12} xs={12}>
            <CoolLink image="/img/concuscout.jpg" text="Concuscout" height="220" transparency="0.5"/>
          </Grid>
          <Grid item xl={6} lg={6} md={12} sm={12} xs={12}>
            <CoolLink image="/img/canciones.png" text="Canciones" height="220" transparency="0.5"/>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xl={3} lg={3} md={12} sm={12} xs={12}>
        <CoolLink image="/img/caminatas.jpg" text="Caminatas" height="485" transparency="0.5"/>  
      </Grid>
      <Grid item xl={3} lg={3} md={12} sm={12} xs={12}>
        <Grid container spacing={2}>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            <CoolLink image="/img/Aguilas.jpg" text="Aguílas" height="75" transparency="0.5"/>
          </Grid> 
        </Grid>
        <Grid container spacing={2} style={{marginTop:'10px'}}>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            <CoolLink image="/img/ardillas.webp" text="Ardillas" height="75" transparency="0.5"/>
          </Grid> 
        </Grid>
        <Grid container spacing={2} style={{marginTop:'10px'}}>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            <CoolLink image="/img/apus.webp.jpg" text="Apus" height="75" transparency="0.5"/>
          </Grid> 
        </Grid>
        <Grid container spacing={2} style={{marginTop:'10px'}}>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            <CoolLink image="/img/andromeda.jpg" text="Andromeda" height="75" transparency="0.5"/>
          </Grid> 
        </Grid>
        <Grid container spacing={2} style={{marginTop:'10px'}}>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            <CoolLink image="/img/acuario.jpg" text="Acuario" height="75" transparency="0.5"/>
          </Grid> 
        </Grid> 
      </Grid>
    </Grid>

    <Grid container spacing={2} style={{marginTop:'25px'}}>
      <Grid container spacing={3}>
        <Grid item xl={12} lg={12} md={12} sm={12 } xs={12}>
          <h1
          style={{
            textAlign:'center',
            color:'#2E2270',
          }}
          >Preguntas frecuentes</h1>
        </Grid>  
      </Grid>
    </Grid>

    <Grid container spacing={2} style={{marginTop:'25px'}}>
      <Grid item xl={3} lg={3} md={12} sm={12} xs={12}>
          <FAQ image="" icon="" question="" answer=""/>
      </Grid>
    </Grid>
    </Container>

    </div>
  )
}
