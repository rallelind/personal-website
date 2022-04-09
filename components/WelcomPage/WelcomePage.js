import Image from "next/image"
import { Grid, Text } from "@nextui-org/react"
import stylesWelcomePage from "../../styles/WelcomePage.module.css"
import Cards from "./Cards"
import Typewriter from 'typewriter-effect';


const WelcomePage = () => {
    return (
        <>
            <Grid.Container justify="center">
                <Grid className={stylesWelcomePage.gridContainer}>
                    <Image className={stylesWelcomePage.image} src="/avatar-picture.JPG" height="500px" width="400px" />
                </Grid>
                <Grid lg={4} md={4}>
                    <div className={stylesWelcomePage.typewriter}>
                        <Text 
                            h2
                            css={{
                                textGradient: '45deg, $blue500 -20%, $pink500 50%'
                            }}
                        >
                            <Typewriter 
                                onInit={(typewriter) => {
                                    typewriter.typeString('Hi my name is Rasmus and i am a software developer')
                                    .start()
                                }}
                            />
                        </Text>
                    </div>
                </Grid>
            </Grid.Container>
            <Cards />
        </>
    )
}

export default WelcomePage
