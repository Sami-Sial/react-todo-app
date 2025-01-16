import CircularProgress from '@mui/material/CircularProgress';

const loader = () => {
  return (
    <>
        <div style={{ width: "100vw", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
              
            <CircularProgress color="success" />
              
        </div>
    </>
  )
}

export default loader
