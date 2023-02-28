import { TextField, Button } from "@mui/material";

const Login = () => {
  return (
    <>
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "500px",
        textAlign: "left",
        fontSize: "12px",
        color: "#000",
        fontFamily: "Inter",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "0px",
          left: "35%",
          borderRadius: "10px",
          backgroundColor: "#cecece",
          border: "1px solid #fff",
          boxSizing: "border-box",
          width: "500px",
          height: "500px",
        }}
      />
      <TextField
        style={{ position: "absolute", top: "136px", left: "42%", backgroundColor:"white" }}
        sx={{ width: 287 }}
        color="primary"
        variant="standard"
        defaultValue="Email*"
        multiline
        label="Enter text here"
        placeholder="Textarea placeholder"
        margin="none"
      />
      <TextField
        style={{ position: "absolute", top: "208px", left: "42%", backgroundColor:"white" }}
        sx={{ width: 287 }}
        color="primary"
        variant="standard"
        defaultValue="Password*"
        multiline
        label="Enter password here"
        placeholder="Textarea placeholder"
        margin="none"
      />
      <Button
        style={{ position: "absolute", top: "328px", left: "45%" , color:"white",background:"green"}}
        sx={{ width: 200 }}
        variant="outlined"
        color="primary"
      >
        Login
      </Button>
      <div
        style={{
          position: "absolute",
          top: "438px",
          left: "43%",
          letterSpacing: "-0.24px",
          lineHeight: "25px",
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          width: "255px",
        }}
      >
        <span style={{ lineBreak: "anywhere", width: "100%", left: "45%" }}>
          <span>
            <span>Don’t have an account?</span>
            <span style={{ color: "#f00404" }}>{` `}</span>
          </span>
          <span
            style={{ fontSize: "14px", fontWeight: "600", color: "#306d50" }}
          >
            Sign up
          </span>
        </span>
      </div>
      <div
        style={{
          position: "absolute",
          top: "268px",
          left: "42%",
          fontSize: "10px",
          letterSpacing: "-0.24px",
          lineHeight: "20px",
          fontWeight: "500",
          color: "#f00404",
        }}
      >
        Forgot password ?
      </div>
     
      <div
        style={{
          position: "absolute",
          top: "75px",
          left: "45%",
          fontSize: "18px",
          fontFamily: "Roboto",
        }}
      >
        Welcome back to RVK
      </div>
    </div>
    </>
  );
};

export default Login;
