import { Stack, TextField, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { onClose } from "../../slice/auth";
import "./reg.scss";

function Reg() {
  const dispatch = useDispatch();

  const { loggedIn, } = useSelector((state) => state.auth);

    const closep = () =>{
        dispatch(onClose())
    }


  return (
    <div className={loggedIn?'regpanel show':'regpanel'}>
      <div className="reg">
        <img src="../../img/logo 1.png" alt="" />
        <h1>Ro’yxatdan o’tish</h1>
        <p>
          "Xush kelibsiz! Iltimos, kelgusi tadbirimizga yozilish uchun quyidagi
          ro'yxatdan o'tish formasini to'ldiring.
        </p>
        <Stack mt={3}>
          <Typography
            variant="h1"
            display={"flex"}
            alignItems={"center"}
            color={"#141414"}
            mb={.5}
            sx={{ fontSize: { xs: "14px", lg: "18px" } }}
          >
            Ism Familiya
          </Typography>
          <TextField
            variant="outlined"
            type={'text'}
            placeholder="Ism Familiyangizni kiriting"
            sx={{
              "& label.Mui-focused": {
                color: "white",
              },
              "& .MuiInput-underline:after": {
                borderColor: "transparent",
              },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "white",
                },
                "&:hover fieldset": {
                  borderColor: "white",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "white",
                },
                bgcolor: "white",
                border: "1px solid #141414",
                height: "45px",
                fontSize: "15px",
              },
            }}
          />
        </Stack>
        <Stack mt={3}>
          <Typography
            variant="h1"
            display={"flex"}
            alignItems={"center"}
            color={"#141414"}
            mb={1}
            sx={{ fontSize: { xs: "14px", lg: "18px" } }}
          >
            Telefon raqam
          </Typography>
          <TextField
            variant="outlined"
            type={'number'}
            placeholder="+998 90 123 45 67"
            sx={{
              "& label.Mui-focused": {
                color: "white",
              },
              "& .MuiInput-underline:after": {
                borderColor: "transparent",
              },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "white",
                },
                "&:hover fieldset": {
                  borderColor: "white",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "white",
                },
                bgcolor: "white",
                border: "1px solid #141414",
                height: "45px",
                fontSize: "15px",
              },
            }}
          />
        </Stack>
        <Stack mt={3}>
          <Typography
            variant="h1"
            display={"flex"}
            alignItems={"center"}
            color={"#141414"}
            mb={1}
            sx={{ fontSize: { xs: "14px", lg: "18px" } }}
          >
            Email
          </Typography>
          <TextField
            variant="outlined"
            type={'email'}
            placeholder="Emailingizni kiriting"
            sx={{
              "& label.Mui-focused": {
                color: "white",
              },
              "& .MuiInput-underline:after": {
                borderColor: "transparent",
              },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "white",
                },
                "&:hover fieldset": {
                  borderColor: "white",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "white",
                },
                bgcolor: "white",
                border: "1px solid #141414",
                height: "45px",
                fontSize: "15px",
              },
            }}
          />
        </Stack>
        <button onClick={() => closep()} className="registerb"></button>
      </div>
    </div>
  );
}

export default Reg;
