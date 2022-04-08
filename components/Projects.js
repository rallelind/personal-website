import { Text, Grid, Card, Container, Pagination, Spacer } from "@nextui-org/react"
import { Link } from "@nextui-org/react"
import { GrStripe, GrReactjs } from "react-icons/gr"
import { SiMongodb, SiExpress, SiNodedotjs, SiNextdotjs, SiBootstrap } from "react-icons/si"
import stylesProject from "../styles/Project.module.css"
import { useState } from "react"
import ImageSlider from "./ImageSlider"

const Projects = () => {

    const mernProject = [
        "/loginMERN.png", 
        "/dashboardMERN.png", 
        "/aboutMERN.png", 
        "/featuresMERN.png", 
        "/productpageMERN.png",
        "/paymentMERN.png",
        "/profilepageMERN.png",
        "/uploadvanMERN.png"
    ]

    const soMeProject = [
        "/landingpageSOME.png",
        "/landingpage2SOME.png",
        "/aboutSOME.png",
        "/contactSOME.png"
    ]

    return (
        <div className={stylesProject.container}>
            <Grid.Container gap={4} justify="center">
                <Grid xs={9} sm={5}>
                    {Grid.xs === true && <h1>Hello</h1>}
                    <div className={stylesProject.textContainer}>
                        <Text
                            h3
                            css={{
                                textGradient: '45deg, $blue500 -20%, $pink500 50%'
                            }}
                        >
                            Full-Stack MERN project
                        </Text>
                        <Spacer y={1} />
                        <Text span>
                            I build a project where a user can rent out their van with the MERN stack.
                            This is a project with multiple moving parts like payments with stripe,
                            user authentication, CRUD operations and much more. 
                            <Text                             
                                css={{
                                textGradient: '45deg, $blue500 -20%, $pink500 50%'
                            }}>(This is still a work in progress...)</Text>
                        </Text>
                        <Spacer y={1} />
                        <div>
                                <GrStripe className={stylesProject.icons} size={40}/>
                                <GrReactjs className={stylesProject.icons} size={40} />
                                <SiMongodb className={stylesProject.icons} size={40} />
                                <SiExpress className={stylesProject.icons} size={40} />
                                <SiNodedotjs className={stylesProject.icons} size={40} />
                                <SiBootstrap className={stylesProject.icons} size={40} />
                        </div>
                    </div>
                </Grid>
                <Grid xs={9} sm={5}>
                    <Card>
                            <Card.Body style={{ overflow: "hidden" }}>
                                    <ImageSlider 
                                        images={mernProject.map(image => image)}
                                    />
                            </Card.Body>
                            <Card.Footer>
                                <Text>Link to github: <Link href="https://github.com/rallelind/full-stack-mern">https://github.com/rallelind/full-stack-mern</Link></Text>
                            </Card.Footer>
                    </Card>
                </Grid>
                    <Grid className={stylesProject.secondGridContainer} xs={9} sm={5}>
                        <Card>
                                <Card.Body style={{ overflow: "hidden" }}>
                                    <ImageSlider 
                                        images={soMeProject.map(images => images)}
                                    />
                                </Card.Body>
                                <Card.Footer>
                                    <Text>Link to github: <Link href="https://github.com/rallelind/some-marketing-website">https://github.com/rallelind/some-marketing-website</Link></Text>
                                </Card.Footer>
                        </Card>
                    </Grid>
                    <Spacer y={2} />
                    <Grid xs={9} sm={5}>
                        <div className={stylesProject.textContainer}>
                            <Text
                                h3
                                css={{
                                    textGradient: '45deg, $blue500 -20%, $pink500 50%'
                                }}
                            >
                                SoMe marketing website
                            </Text>
                            <Spacer y={1} />
                            <Text span>
                                I build a professionel website for a friend who does
                                social media marketing. This was my first freelance job
                                and i build it using next.js and sendgrid to send emails
                                for a serverless contactform. The ui was build with
                                Next.js UI.
                            </Text>
                            <Spacer y={1} />
                            <div>
                                    <SiNextdotjs className={stylesProject.icons} size={40} />
                                    <GrReactjs className={stylesProject.icons} size={40} />
                                    <SiNodedotjs className={stylesProject.icons} size={40} />
                            </div>
                        </div>
                    </Grid>
            </Grid.Container>
        </div>
    )
}

export default Projects
