import { Grid, Card, Text } from '@nextui-org/react';
import { useState } from 'react'
import stylesCards from "../styles/Cards.module.css"
import { BsCodeSlash } from "react-icons/bs"
import Link from 'next/link';
import Modal from './Modal';


const Cards = () => {

    const [visible, setVisible] = useState(false);
    const handler = () => setVisible(true);
    const closeHandler = () => setVisible(false);
    

    const MockItem = ({text, modal}) => {
        return (
            <Card 
                clickable 
                hoverable 
                color="gradient" css={{ h: '$50' }}
                onClick={handler}
            >
              <Text h6 size={15} color="white" css={{ mt: 0 }}>
                {text}
                  </Text>
                  <Card.Footer className={stylesCards.images}>
                    <BsCodeSlash size={100}/>
                  </Card.Footer>
            </Card>
        );
    }

    return (
      <div className={stylesCards.gridContainer}>
          <Grid.Container gap={2} justify="center">
          <Grid xs={8} sm={4} md={4} lg={4}>
              <MockItem 
                text="Click to view code snippet from a full stack MERN project"
              />
                <Modal 
                    open={visible}
                    onClose={closeHandler}
                    image={"/personal-website-snippet.png"}
                    href={<a href="https://github.com/rallelind/personal-website">https://github.com/rallelind/personal-website</a>}
                />
          </Grid>
          <Grid xs={8} sm={4} md={4} lg={4}>
              <MockItem 
                text="Click to view a code snippet from website i build for a customer" 
              />
          </Grid>
          <Grid xs={8} sm={4} md={4} lg={4}>
              <MockItem 
                text="Click here to view a code snippet from this very project" 
              />
          </Grid>
          </Grid.Container>
      </div>
    )
}

export default Cards