
import { NavLink } from "react-router-dom";

const styles = {
    container: {
      // minHeight: 'calc(100vh - 50px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
    },
    title: {
      fontWeight: 500,
      fontSize: 48,
      textAlign: 'center',
      marginBottom: 20, 
    },
  };
  
  export default function Home() {
    return (
      <div style={styles.container}>
        <h1 style={styles.title}>
        Cars for the most demanding customers at reasonable prices
        </h1>
        <div>
        <NavLink to="/catalog" title="Try !">
        Car park
        </NavLink>
        </div>
      </div>
    );
  }
  