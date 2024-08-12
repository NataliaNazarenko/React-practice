import PacmanLoader from "react-spinners/PacmanLoader";

const Loader = ({loading, size=30}) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <PacmanLoader
        color="#e8ae3d"
        loading={loading}
        margin={2}
        size={size}
        speedMultiplier={1}
      />
    </div>
  );
}

export default Loader;