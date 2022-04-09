import { Grid, Text, Card, Col } from "@nextui-org/react"

const HobbiesCards = () => {
    return (
        <div style={{marginTop: "3%"}}>
            <Text 
                h3
                css={{
                    textGradient: '45deg, $blue500 -20%, $pink500 50%'
                }}
                >
                    My Hobbies
                </Text>
            <Grid.Container gap={2} justify="center">
                <Grid xs={12} sm={4} md={4} lg={4}>
                    <Card cover>
                        <Card.Header css={{ position: 'absolute', zIndex: 1, top: 5 }}>
                            <Col>
                                <Text
                                size={12}
                                weight="bold"
                                transform="uppercase"
                                color="#ffffffAA"
                                >
                                Formula 1
                                </Text>
                                <Text h4 color="white">
                                Formula 1 is my great passion
                                </Text>
                            </Col>
                        </Card.Header>
                            <Card.Image
                            src='/formula1.jpg'
                            height={340}
                            width="100%"
                            alt="Card image background"
                            />
                    </Card>
                </Grid>
                <Grid xs={12} sm={4} md={4} lg={4}>
                    <Card cover>
                        <Card.Header css={{ position: 'absolute', zIndex: 1, top: 5 }}>
                            <Col>
                                <Text
                                size={12}
                                weight="bold"
                                transform="uppercase"
                                color="#ffffffAA"
                                >
                                Skiing
                                </Text>
                                <Text h4 color="white">
                                My favorite activity is skiing
                                </Text>
                            </Col>
                        </Card.Header>
                            <Card.Image
                            src='/skiing.jpg'
                            height={340}
                            width="100%"
                            alt="Card image background"
                            />
                    </Card>
                </Grid>
                <Grid xs={12} sm={4} md={4} lg={4}>
                    <Card cover>
                        <Card.Header css={{ position: 'absolute', zIndex: 1, top: 5 }}>
                            <Col>
                                <Text
                                size={12}
                                weight="bold"
                                transform="uppercase"
                                color="#ffffffAA"
                                >
                                Outdoors
                                </Text>
                                <Text h4 color="white">
                                I love outdoor living and the mountains
                                </Text>
                            </Col>
                        </Card.Header>
                            <Card.Image
                            src='/mountains.jpg'
                            height={340}
                            width="100%"
                            alt="Card image background"
                            />
                    </Card>
                </Grid>
            </Grid.Container>
        </div>
    )
}

export default HobbiesCards
