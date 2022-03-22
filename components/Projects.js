import { Text, Grid, Card, Container, Pagination, Spacer } from "@nextui-org/react"
import { Link } from "@nextui-org/react"
import { GrStripe, GrReactjs } from "react-icons/gr"
import { SiMongodb, SiExpress, SiNodedotjs, SiNextdotjs, SiBootstrap } from "react-icons/si"
import stylesProject from "../styles/Project.module.css"
import { useState } from "react"

const Projects = () => {

    const [image, setImage] = useState("/loginMERN.png")

    const showImageMERN = (page) => {
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

    const [imageSoMe, setImageSoMe] = useState("/landingpageSOME.png")


    const showImageSoMe = (page) => {
        if(page === 1) {
            setImageSoMe("/landingpageSOME.png")
        }
        if(page === 2) {
            setImageSoMe("/landingpage2SOME.png")
        }
        if(page === 3) {
            setImageSoMe("/aboutSOME.png")
        }
        if(page === 4) {
            setImageSoMe("/contactSOME.png")
        }
    }

    return (
        <div className={stylesProject.container}>
            <Grid.Container gap={4} justify="center">
                <Grid xs={12} sm={8} md={6} lg={4}>
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
                <Grid xs={12} sm={6} md={6} lg={5}>
                    <Card>
                            <Card.Body>
                                <Card.Image
                                        loading="eager"
                                        src={image}
                                        height={400}
                                        width="100%"
                                        alt="Card image background"
                                        />
                                </Card.Body>
                                <Container className={stylesProject.pagination}>
                                    <Pagination onChange={showImageMERN} loop color="gradient" onlyDots size="md" total={8} />
                                </Container>
                            <Card.Footer>
                                <Text>Link to github: <Link href="https://github.com/rallelind/full-stack-mern">https://github.com/rallelind/full-stack-mern</Link></Text>
                            </Card.Footer>
                    </Card>
                </Grid>
                    <Grid className={stylesProject.secondGridContainer} xs={12} sm={6} md={6} lg={5}>
                        <Card>
                                <Card.Body>
                                    <Card.Image
                                            loading="eager"
                                            src={imageSoMe}
                                            height={400}
                                            width="100%"
                                            alt="Card image background"
                                            />
                                    </Card.Body>
                                    <Container className={stylesProject.pagination}>
                                        <Pagination onChange={showImageSoMe} loop color="gradient" onlyDots size="md" total={4} />
                                    </Container>
                                <Card.Footer>
                                    <Text>Link to github: <Link href="https://github.com/rallelind/some-marketing-website">https://github.com/rallelind/some-marketing-website</Link></Text>
                                </Card.Footer>
                        </Card>
                    </Grid>
                    <Spacer y={2} />
                    <Grid xs={12} sm={8} md={6} lg={4}>
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
