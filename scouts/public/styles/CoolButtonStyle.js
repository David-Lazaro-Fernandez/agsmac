import {makeStyles} from '@mui/styles';

export const useStyles = makeStyles((theme) =>({

    primary:{
        backgroundColor: '#2E2270',
        color: 'white',
        borderRadius:'100px',
        height: '56px',
        width: '225px',
        fontSize: '18px',
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        textAlign:'center',
        border: '0px',

    }, 
    secondary:{
        backgroundColor: '#E7E4FA',
        color: '#2E2270',
        borderRadius:'100px',
        height: '56px',
        width: '225px',
        fontSize: '18px',
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        textAlign:'center',
        border: '0px',
    },
}));