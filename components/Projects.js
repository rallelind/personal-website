import { Text, Grid, Card, Container, Pagination } from "@nextui-org/react"
import { GrStripe, GrReactjs } from "react-icons/gr"
import { SiMongodb, SiExpress, SiNodedotjs, SiJavascript, SiBootstrap } from "react-icons/si"
import stylesProject from "../styles/Project.module.css"
import { useState } from "react"

const Projects = () => {

    const [image, setImage] = useState("/loginMERN.png")

    const showImage = (page) => {
        if (page === 1) {
            setImage("/loginMERN.png")
        }
        if(page === 2) {
            setImage("/dashboardMERN.png")
        }
        if(page === 3) {
            setImage("/aboutMERN.png")
        }
        if(page === 4) {
            setImage("/featuresMERN.png")
        }
        if(page === 5) {
            setImage("/productpageMERN.png")
        }
        if(page === 6) {
            setImage("/paymentMERN.png")
        }
        if(page === 7) {
            setImage("/profilepageMERN.png")
        }
        if(page === 8) {
            setImage("/uploadvanMERN.png")
        }
    }

    return (
        <div className={stylesProject.container}>
            <Grid.Container gap={3} justify="center">
                <Grid xs={12} sm={8} lg={5}>
                    <div>
                        <Text
                            h3
                            css={{
                                textGradient: '45deg, $blue500 -20%, $pink500 50%'
                            }}
                        >
                            Full-Stack MERN project
                        </Text>
                        <Text>
                            I build a project where a user could rent out their livable adventure vans. This app
                            has multiple moving parts and is the biggest project i have worked on. A user could
                            sign up and log in. Furthermore a user could post their van and on their profile page
                            they could see their vans posted and delete them if they wanted to. Furthermore i build
                            a booking capability where a user could go on the product page and pick a date they wanted
                            to rent the van. The payment capability is still a work in progress but it is build with
                            the stripe api. Lastly i also build a dashboard to view the vans posted. This is 
                            therefore by far the largest project i have been working on myself and it is still a 
                            work in progress.
                            This project was build using the MERN stack. This means that for the backend i used
                            express and node.js. For the database i used mongoDB and finally for the frontend i
                            used React. The reason i used this stack was because i wanted a scalable tech stack
                            which the MERN stack offers with mongoDB for the database. Another benefit is only
                            having to use one language which makes development fast and intuitive. 
                        </Text>
                        <Container>
                                <GrStripe className={stylesProject.icons} size={40}/>
                                <GrReactjs className={stylesProject.icons} size={40} />
                                <SiMongodb className={stylesProject.icons} size={40} />
                                <SiExpress className={stylesProject.icons} size={40} />
                                <SiNodedotjs className={stylesProject.icons} size={40} />
                                <SiJavascript className={stylesProject.icons} size={40} />
                                <SiBootstrap className={stylesProject.icons} size={40} />
                        </Container>
                    </div>
                </Grid>
                <Grid xs={12} sm={8} lg={5}>
                    <Card shadow={false} >
                        <Card.Header>
                            <Card.Image
                                    src={image}
                                    height={340}
                                    width="100%"
                                    alt="Card image background"
                                    />
                        </Card.Header>
                            <Container className={stylesProject.pagination}>
                                <Pagination onChange={showImage} loop color="gradient" onlyDots size="md" total={8} />
                            </Container>
                    </Card>
                </Grid>
            </Grid.Container>
        </div>
    )
}

export default Projects
