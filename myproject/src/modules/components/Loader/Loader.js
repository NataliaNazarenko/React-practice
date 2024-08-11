import PacmanLoader from "react-spinners/PacmanLoader";

const Loader = ({ loading, size = 50 }) => {
  return (
    <div style={styles.loaderContainer}>
      <PacmanLoader
        color="#e8ae3d"
        loading={loading}
        margin={2}
        size={size}
        speedMultiplier={1}
        display="block"
      />
    </div>
  );
};

const styles = {
  loaderContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh', // Це забезпечить вирівнювання по вертикалі, заповнюючи весь екран
  },
};

export default Loader;