import React from "react";
import { Container } from "@mui/material";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

const Landing: React.FC = () => {
    return (
        <Container>
            <Typography sx={{
                textAlign: "center",
                marginBottom: '150px'
            }} variant="h1" component="h1">
                Packman
            </Typography>
            <Stack spacing={2}
                sx={{
                    justifyContent: "center"
                }}
                direction="row">
                <Link className="landing__link_signin" to="/signin">Войти</Link>
                <Link className="landing__link_signup" to="/signup">Зарегистрироваться</Link>
            </Stack>
        </Container>
    )
}

export default Landing
