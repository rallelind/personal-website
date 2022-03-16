import { Text, Grid, Card, Container, Spacer, Divider } from "@nextui-org/react"
import { FaLaptopCode, FaReact } from "react-icons/fa"
import { BsFileEarmarkCode } from "react-icons/bs"
import { SiNextdotjs, SiJavascript, SiTypescript, SiMongodb, SiExpress } from "react-icons/si"
import { GrMysql, GrNode } from "react-icons/gr"
import { DiCss3 } from "react-icons/di"
import { AiFillHtml5 } from "react-icons/ai"
import stylesTechnologies from "../styles/Technologies.module.css"

const TechnolgiesCards = () => {
    return (
        <Grid.Container className={stylesTechnologies.container} gap={3} justify="center">
            <Grid lg={4}>
                <Card color="gradient" className={stylesTechnologies.center}>
                    <Card.Header>
                        <Container>
                            <Text
                                h3
                                color="white"
                            >
                                Frontend tools
                            </Text>
                            <Spacer y={1} />
                            <FaLaptopCode size={80} />
                        </Container>
                    </Card.Header>
                        <Divider />
                    <Card.Body>
                            <Grid.Container gap={4}>
                                <Grid lg={4} md={4} sm={4} xs={4}>
                                    <FaReact size={40}/>
                                </Grid>
                                <Grid lg={4} md={4} sm={4} xs={4}>
                                    <SiNextdotjs size={40} />
                                </Grid>
                                <Grid lg={4} md={4} sm={4} xs={4}>
                                    <DiCss3 size={40} />
                                </Grid>
                                <Grid lg={4} md={4} sm={4} xs={4}>
                                    <AiFillHtml5 size={40} />
                                </Grid>
                                <Grid lg={4} md={4} sm={4} xs={4}>
                                    <SiJavascript size={40} />
                                </Grid>
                                <Grid lg={4} md={4} sm={4} xs={4}>
                                    <SiTypescript size={40} />
                                </Grid>
                            </Grid.Container>
                    </Card.Body>
                </Card>
            </Grid>
            <Grid lg={4}>
                <Card className={stylesTechnologies.center} color="gradient">
                    <Card.Header>
                        <Container>
                            <Text
                                h3
                                color="white"
                            >
                                Backend tools
                            </Text>
                            <Spacer y={1} />
                            <BsFileEarmarkCode size={80} />
                        </Container>
                    </Card.Header>
                        <Divider />
                    <Card.Body className={stylesTechnologies.container}>
                    <Grid.Container gap={4}>
                            <Grid lg={4} md={4} sm={4} xs={4}>
                                <SiMongodb size={40}/>
                            </Grid>
                            <Grid lg={4} md={4} sm={4} xs={4}>
                                <GrMysql size={40} />
                            </Grid>
                            <Grid lg={4} md={4} sm={4} xs={4}>
                               <GrNode size={40} />
                            </Grid>
                            <Grid lg={4} md={4} sm={4} xs={4}>
                                <SiJavascript size={40} />
                            </Grid>
                            <Grid lg={4} md={4} sm={4} xs={4}>
                                <SiTypescript size={40} />
                            </Grid>
                            <Grid lg={4} md={4} sm={4} xs={4}>
                                <SiExpress size={40} />
                            </Grid>
                        </Grid.Container>
                    </Card.Body>
                </Card>
            </Grid>
        </Grid.Container>
    )
}

export default TechnolgiesCards
