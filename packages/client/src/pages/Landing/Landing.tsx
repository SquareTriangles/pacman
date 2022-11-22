import type React from "react";
import { Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Avatar, Divider, Grid } from "@mui/material";
import styles from './styles.module.css'


import pacman_image from '../../assets/images/pac-man.png'
import react_image from '../../assets/images/React.png'
import docker_image from '../../assets/images/docker.png'
import expressjs_image from '../../assets/images/Expressjs.png'
import git_image from '../../assets/images/git.png'
import nodejs_image from '../../assets/images/nodejs.png'
import oauth_image from '../../assets/images/oauth.png'
import redux_image from '../../assets/images/redux.png'

type TTecnology = {
    image: string,
    alt: string,
}

const Tecnology: React.FC<TTecnology> = ({ image, alt }) => (
    <Grid item xs="auto">
        <Avatar
            src={image}
            alt={alt}
            className={styles.image}
            sx={{
                width: '100px',
                height: '100px',
            }} />
    </Grid>)



const Landing: React.FC = () => (
    <Container
        sx={{
            marginTop: '50px'
        }}
    >
        <div className={styles.row}>
            <Avatar
                src={pacman_image}
                variant="square"
                alt='pacman'
                sx={{
                    width: '100px',
                    height: '100px',
                }} />
            <Typography
                component="span"
                sx={{
                    marginLeft: '20px',
                    fontSize: '28px',
                    fontFamily: 'Inter',
                }}
            >
                Наша команда <span style={{ fontWeight: 800 }}> Square-triangles </span>
                из 17 когорты Яндекс Практикума.В поте лица разрабатывает всем известную игру
                <span style={{ fontWeight: 800 }}> Pacman</span>.
            </Typography>
        </div>
        <Typography
            component="h3"
            sx={{
                fontSize: '28px',
                fontFamily: 'Inter',
                fontWeight: 800,
                marginTop: '50px',
            }}
        >
            Используемые технологии
        </Typography>
        <Grid container spacing={3}
        >
            <Tecnology image={react_image} alt={'react'} />
            <Tecnology image={redux_image} alt={'redux'} />
            <Tecnology image={nodejs_image} alt={'nodejs'} />
            <Tecnology image={expressjs_image} alt={'expressjs'} />
            <Tecnology image={oauth_image} alt={'oauth'} />
            <Tecnology image={docker_image} alt={'docker'} />
            <Tecnology image={git_image} alt={'git'} />
        </Grid>
    </Container>
)

export default Landing
