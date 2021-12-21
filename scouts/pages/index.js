import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import ScoutCard from '../components/ScoutCard';
import Button from '@mui/material/Button';
import CoolButton from '../components/CoolButton';
export default function Home() {
  return (
    <div>
    <Container maxWidth="lg">      
      <Grid container spacing={3}>
        <Grid item xl={4} lg={4}  md={4} sm={4} xs={4}>
          <img src="/img/Logo.png" alt="AGSMAC Logo" />
        </Grid> 
        
        <Grid item xl={4} lg={4}  md={4} sm={4} xs={4}>
        </Grid>

        <Grid item xl={4} lg={4}  md={4} sm={4} xs={4}>
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
          <Grid container spacing={2}>
            <Grid item xl={6} lg={6}  md={6} sm={6} xs={6}>
              <h3
              style={{textAlign:'center'}}
              >Jovenes Construyendo Un Mejor México</h3>
            </Grid>
          </Grid> 
          <Grid container spacing={2}>
            <Grid item xl={6}>
              <h3>Conoce más</h3>
            </Grid>
          </Grid>       
        </Grid>
        <Grid item xl={6}>
          <img 
          src="https://lh3.googleusercontent.com/sF3ShmUrodLBbvD8_dSg3u7vTsNq7RUmZ2xmoOWV34wjg_FYJKX--MQtuKSZVxenQyjQgbdTmqNQeOYKI8YRxva_WVUMvx6c9-TPDMZ8WQH0tWBJOKHI0Ze48941pUKh11g4xwEgvgZ-8Aa1jNyQhxA8ozOGXYEN-ab1yTnVhPVlGS8ppEx1qZBNaByrLmHlHZ5zdzJhHBilW2MjLe2X5GZQd7p4VNU40DgYV8FnDuxKXtyk5QokV2qZph14BymSvc8usNwsp-HIzME5Kmz1ZhuqJoLB_7SPlxkoTcvI0pvzngQr4yZg5WsHn754yfVU0VaHgDcDSL1_IMuxjJXTsM7iYy0_32IOVFb9d0O2U746-ctBuqH1xNdydORURvpx_diS8H4tyaRD51GwwolX5hGvzXS5GPsgMGabqGqWmBEC0UZ1f8YwA1LKnlQU-1XOxXA_JyxMZuA8k4oly1_cF29ILFNDg2Xh8J6rPbXjt5vNAM78qlu-FrBkGObaVeH_iyIoEamDfDsXXnJ9_xbN_rROMsio1crHnJ44GohH3DIBPFIer7-pLLgW-U5cOgFKaVeiW2bxACDW_DNS9LPGUkuWNe29LR5NXnULxz0PcJ9sldXhipzmCY8BLE2dBv5hri0ilr1OZZ7nl7wxYo2IgAFwWFokE3Ptq1HGu-7bBtryunNmHQWn1D1S6o2vzFuP0hnve1gEEK76NwbcZA3n5dpf=w1174-h880-no?authuser=6" 
          style={{width: '100%'}}
          />
        </Grid>  
      </Grid>
      <Grid container spacing={3}>
        <Grid item xl={12} lg={12} md={12} sm={12 } xs={12}>
          <h1
          style={{textAlign:'center'}}
          >Multiples tropas, una sola misión</h1>
        </Grid>  
      </Grid>
      <Grid container spacing={3}>
        <Grid item xl={3} lg={3} md={6} sm={6} xs={12}>
          <ScoutCard image="" name="Colonia de Castores" />
        </Grid>  
        <Grid item xl={3} lg={3} md={6} sm={6} xs={12}>
          <ScoutCard image="" name="Manada de Gacelas" />
        </Grid>  
        <Grid item xl={3} lg={3} md={6} sm={6} xs={12}>
          <ScoutCard image="" name="Clan de Percusoras" />
        </Grid>  
        <Grid item xl={3} lg={3} md={6} sm={6} xs={12}>
          <ScoutCard image="" name="Clan de Rovers" />
        </Grid>  
        <Grid item xl={3} lg={3} md={6} sm={6} xs={12}>
          <ScoutCard image="" name="Manada de Lobos" />
        </Grid>  
        <Grid item xl={3} lg={3} md={6} sm={6} xs={12}>
          <ScoutCard image="" name="Tropa Scout" />
        </Grid>  
        <Grid item xl={3} lg={3} md={6} sm={6} xs={12}>
          <ScoutCard image="" name="Tropa de Muchachas" />
        </Grid>  
        <Grid item xl={3} lg={3} md={6} sm={6} xs={12}>
          <ScoutCard image="" name="Scouters y Dirigentes" />
        </Grid>  

      </Grid>       

    </Container>

    </div>
  )
}
