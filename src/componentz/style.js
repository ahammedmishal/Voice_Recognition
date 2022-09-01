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
        borderRadius: '10px',
        color: "white",
        padding: '10%',
        overflow: "hidden",
        boxShadow: "20px 20px 50px rgb(0 0 0 / 50%)",
        borderLeft:"1px solid rgb(255, 255, 255,0.5)",
        borderRadius:"10px",
        backdropFilter: "blur(5px)",
    },
    Inner:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
    },
    title:{
        fontWeight:'bold'
    },
    h1:{
        display: "block",
        fontSize:"2em",
        marginBlockStart:"0.67em",
        marginBlockEnd:"0.67em",
        marginInlineStart:"0px",
        marginInlineEnd:"0px",
    },
    h2:{
        display: "block",
        fontSize:"1.1em",
        marginBlockStart:"0.67em",
        marginBlockEnd:"0.67em",
        marginInlineStart:"0px",
        marginInlineEnd:"0px",
    },
});