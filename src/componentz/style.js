import {makeStyles} from '@material-ui/core/styles';

export default makeStyles({
    container:{
        padding: '0 5%',
        width: '100%',
        margin: 0,
    },
    main:{
        height:'100vh',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'column',
    },
    tilt:{
        backgroundImage: 'linear-gradient(89deg,#000000, #00f)',
        borderRadius: '10px',
    },
    Inner:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
    },
    title:{
        fontWeight:'bold'
    }
});