import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: '50vh',
    padding: '10%',
    borderRadius: 10,

    color: 'white',
    boxShadow:"20px 20px 50px rgb(0, 0, 0,0.5)",
    borderRadius: '10px',
    borderTop:'1px solid rgb(255, 255, 255,0.5)',
    borderLeft:'1px solid rgb(255, 255, 255,0.5)',
    backdropFilter:"blur(5px)",

  },
  infoCard: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
  },
  container: {
    padding: '0 5%',
    width: '100%',
    margin: 0,
  },
});

//   position: 'relative',
// width: '280px',
// height: '400px',
// margin: '30px',


// background: 'rgb(255, 255, 255,0.1)',
// overflow: 'hidden',
// display: 'flex',
