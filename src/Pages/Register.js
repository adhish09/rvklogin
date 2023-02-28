import { Button, TextField } from "@mui/material";
import { green } from "@mui/material/colors";
import React from "react";

const Register = ({ onClose }) => {
  return (
    <>
    <div
      style={{
        position: "relative",
        width: "500px",
        height: "600px",
        maxWidth: "100%",
        maxHeight: "100%",
        overflow: "auto",
        left:"32%",
        textAlign: "center",
        fontSize: "10px",
        color: "#000",
        fontFamily: "Inter",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "-1px",
          left: "0px",
          borderRadius: "10px",
          backgroundColor: "#cecece",
          border: "1px solid #898989",
          boxSizing: "border-box",
          width: "500px",
          height: "600px",
        }}
      />
      <Button
        style={{ position: "absolute", top: "452px", left: "150px", color: "white", background: "green" }}
        sx={{ width: 200 }}
        variant="outlined"
        color="primary"
      >
        Sign up
      </Button>
      <div
        style={{
          position: "absolute",
          top: "504px",
          left: "188px",
          fontSize: "8px",
          letterSpacing: "-0.24px",
          lineHeight: "12px",
          display: "inline-block",
          width: "125px",
          height: "22px",
        }}
      >
        <p style={{ marginBlockStart: "0", marginBlockEnd: "0px" }}>
          <span>By sign up you are agree to RVK</span>
        </p>
        <p style={{ margin: "0", color: "#f00404" }}>
          <span
            style={{ fontWeight: "600", fontFamily: "Inter", color: "#f00404" }}
          >
            Terms of use
          </span>
          <span style={{ fontFamily: "Inter" }}>
            <span style={{ color: "#fff" }}>{` `}</span>
            <span style={{ color: "#000" }}>and</span>
            <span style={{ color: "#fff" }}>{` `}</span>
          </span>
          <span style={{ fontWeight: "600" }}>Privacy policies</span>
        </p>
      </div>
      <div
        style={{
          position: "absolute",
          top: "556px",
          left: "123px",
          fontSize: "14px",
          letterSpacing: "-0.24px",
          lineHeight: "25px",
          display: "flex",
          alignItems: "center",
          width: "255px",
          height: "13px",
        }}
      >
        <span style={{ lineBreak: "anywhere", width: "100%" }}>
          <span>{`Already have an account? `}</span>
          <span style={{ fontWeight: "600" }}>Sign in</span>
        </span>
      </div>
      <div
        style={{
          position: "absolute",
          top: "204px",
          left: "107px",
          width: "287px",
          height: "50px",
          textAlign: "left",
          color: "#8d8d8d",
        }}
      >
        <div
          style={{
            position: "absolute",
            height: "76.92%",
            width: "72.47%",
            top: "23.08%",
            right: "0%",
            bottom: "0%",
            left: "27.53%",
            borderRadius: "4px",
            backgroundColor: "#fff",
            display: "flex",
            flexDirection: "row",
            padding: "9px 10px",
            boxSizing: "border-box",
            alignItems: "flex-start",
            justifyContent: "flex-start",
          }}
        >
          <div
            style={{
              position: "relative",
              letterSpacing: "-0.24px",
              lineHeight: "20px",
            }}
          >
            Enter Phone here
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            height: "76.92%",
            width: "24.39%",
            top: "23.08%",
            right: "75.61%",
            bottom: "0%",
            left: "0%",
            borderRadius: "4px",
            backgroundColor: "#fff",
            display: "flex",
            flexDirection: "row",
            padding: "8px",
            boxSizing: "border-box",
            alignItems: "center",
            justifyContent: "center",
            gap: "6px",
          }}
        >
          <div
            style={{
              position: "relative",
              letterSpacing: "-0.24px",
              lineHeight: "20px",
            }}
          >
            Enter
          </div>
          <div
            style={{
              position: "relative",
              letterSpacing: "-0.24px",
              lineHeight: "20px",
            }}
          >
            Enter
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            height: "15.38%",
            width: "37.98%",
            top: "0%",
            left: "0%",
            fontSize: "12px",
            letterSpacing: "-0.24px",
            lineHeight: "20px",
            color: "#fff",
            display: "flex",
            alignItems: "center",
          }}
        >
          Phone Number*
        </div>
      </div>
      <textarea
        style={{
          border: "none",
          backgroundColor: "white",
          fontFamily: "Inter",
          fontSize: "10px",
          position: "absolute",
          top: "132px",
          left: "107px",
          width: "287px",
          height: "52px",
        }}
        placeholder="Enter name here"
        defaultValue="Name*"
      />
      <TextField
        style={{ position: "absolute", top: "276px", left: "107px", backgroundColor:"white"}}
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
        style={{ position: "absolute", top: "348px", left: "107px", backgroundColor:"white" }}
        sx={{ width: 287 }}
        color="primary"
        
        variant="standard"
        defaultValue="Password*"
        multiline
        label="Enter password here"
        placeholder="Textarea placeholder"
        margin="none"
      />
     
      <div
        style={{
          position: "absolute",
          top: "75px",
          left: "128px",
          fontSize: "18px",
          letterSpacing: "-0.24px",
          lineHeight: "12px",
          fontFamily: "Poppins",
        }}
      >
        Create an account with RVK
      </div>
      <div
        style={{
          position: "absolute",
          top: "408px",
          left: "107px",
          letterSpacing: "-0.24px",
          lineHeight: "20px",
          fontWeight: "500",
          color: "#f00404",
          textAlign: "left",
          display: "flex",
          alignItems: "center",
          width: "85px",
          height: "9px",
        }}
      >
        Forgot password ?
      </div>
    </div>
    </>
  );
};

export default Register;
