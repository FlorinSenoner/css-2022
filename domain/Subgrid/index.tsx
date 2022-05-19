import React from 'react'
import { Text, Container, Row, Col, Spacer, Link } from '@nextui-org/react'

import { Navigation } from '../../components/Navigation'
import { CodeBlock } from '../../components/CodeBlock'

import styles from './index.module.scss'

const mdSubgridHTML = `
~~~html
<div className="card">
  <div className="header">
    <h3 className="title">{title}</h3>
    <h5 className="subtitle">{subtitle}</h5>
    <div className="avatar" />
  </div>
  <div className="imageWrapper">
    <img
      className="image"
      src="https://picsum.photos/1000"
      alt="placeholder image"
    />
  </div>
  <p className="text">{text}</p>
  <button className="button">details</button>
</div>
~~~
`

const mdSubgridCSS = `
~~~css
.container {
  display: grid;
  grid-template-columns: repeat(12, [col-start] fit-content(9rem));
  /* create 4 explicit column tracks */
  grid-auto-rows: fit-content(12rem) minmax(10rem, 14rem) auto auto;
  /* create 4 implicit row tracks */
  gap: 0.5rem;
  /* create the gap between grid columns and rows */
  justify-content: center;
}

.card {
  grid-column: span 3;
  /* every card spans across 3 columns of the main grid */
  grid-row: span 4;
  /* every card spans across 4 rows of the main grid */
  display: grid;
  /* set display to grid in order to create a subgrid */
  grid-template-columns: subgrid [card-start][button-start][col][card-end button-end];
  /* create subgrid for columns to use grid column tracks of the parent and name the column lines*/
  grid-template-rows: subgrid [title-start][title-end photo-start] [photo-end text-start] [text-end button-start] [button-end];
  /* create subgrid for rows to use row column tracks of the parent and name the row lines*/
  row-gap: 0;
  /* override the inherited row gap */
}

.header {
  grid-column: card;
  /* use named tracks to place elements inside the subgrid */
  grid-row: title;
  display: grid;
  /* make it grid container to create another subgrid inside */
  grid-template-columns: subgrid;
  /* create subgrid for columns to use grid column tracks of the parent */
  grid-template-rows: fit-content(6rem) fit-content(6rem);
  /* create two independent rows */
  grid-template-areas: "subtitle subtitle avatar" "title title title";
  /* create named grid areas to place the header elements*/
  align-items: end;
}

.title {
  grid-area: title;
  /* place card title in the named grid area*/
}

.subtitle {
  grid-area: subtitle;
}

.avatar {
  grid-area: avatar;
  align-self: start;
  justify-self: end;
}

.imageWrapper {
  grid-column: card;
  grid-row: photo;
}

.text {
  grid-column: col-start / span 3;
  /* use main grid line names*/
  grid-row: text;
}

.button {
  grid-area: button;
}
~~~
`

function Card({ title = '', subtitle = '', text = '', seed = '0' }) {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h3 className={styles.title}>{title}</h3>
        <h5 className={styles.subtitle}>{subtitle}</h5>
        <div className={styles.avatar} />
      </div>
      <div className={styles.imageWrapper}>
        <img
          className={styles.image}
          src={`https://picsum.photos/seed/${seed}/1000`}
          alt="placeholder image"
        />
      </div>
      <p className={styles.text}>{text}</p>
      <button className={styles.button}>details</button>
    </div>
  )
}

function Subgrid() {
  return (
    <Container>
      <Text
        h1
        size={60}
        css={{
          textGradient: '45deg, $purple500 -20%, $pink500 100%',
        }}
        weight="bold"
      >
        CSS Subgrid
      </Text>

      <Container gap={0} css={{ mb: '$20' }}>
        <Row gap={1}>
          <Text h3 css={{ mb: '$6' }}>
            Code
          </Text>
        </Row>
        <Row gap={1}>
          <Col>
            <Text h5 css={{ mb: '$4' }}>
              HTML
            </Text>
            <CodeBlock>{mdSubgridHTML}</CodeBlock>
          </Col>
        </Row>
        <Spacer y={1} />
        <Row gap={1}>
          <Col>
            <Text h5 css={{ mb: '$4' }}>
              CSS
            </Text>
            <CodeBlock>{mdSubgridCSS}</CodeBlock>
          </Col>
        </Row>
        <Spacer y={1} />
        <Row gap={1}>
          <Col>
            <Text h3 css={{ mb: '$6' }}>
              Result
            </Text>
            <div className={styles.container}>
              <Card
                text="Letterpress single-origin coffee trust fund normcore fashion axe vexillologist migas yr +1 blog"
                title="Food truck 90's af enamel pin"
                subtitle="Williamsburg keffiyeh cray asymmetrical."
                seed="123"
              />

              <Card
                text="Air plant ethical freegan next level, jianbing sriracha palo santo raclette raw denim pitchfork
                mlkshk normcore ennui marfa taiyaki. Microdosing occupy YOLO hashtag fanny pack cray single-origin
                coffee pork belly jianbing. Kickstarter narwhal blog, raclette green juice seitan mumblecore vaporware.
                Try-hard chillwave put a bird on it cold-pressed everyday carry four dollar toast gentrify."
                title="Migas leggings post-ironic air plant star light circumnavigated."
                subtitle="Flannel occupy church-key."
                seed="345"
              />

              <Card
                text="Blue bottle occupy drinking vinegar, microdosing art party kickstarter next level vegan prism
                keytar gluten-free mixtape. Subway tile XOXO neutra YOLO iceland, gluten-free hella copper mug mixtape
                mustache PBR&B. Umami pinterest bicycle rights, kinfolk 3 wolf moon succulents taiyaki meggings pabst."
                title="Cred retro cliche mumblecore thundercats marfa"
                subtitle="Tumeric deep v iceland locavore"
                seed="234"
              />

              <Card
                text="With pretty stories for which there's little good evidence
                  star stuff harvesting star light circumnavigated invent the
                  universe billions upon billions of brilliant syntheses."
                title="The cosmos awaits"
                subtitle="Great turbulent clouds"
                seed="1123"
              />
            </div>
          </Col>
        </Row>
        <Spacer y={1} />
        <Row gap={1}>
          <Col>
            <Text h3 css={{ mb: '$6' }}>
              Links
            </Text>
            <Text>
              <Link href="https://caniuse.com/css-subgrid" icon target="_blank">
                Browser support - CSS Subgrid
              </Link>
            </Text>
            <Text>
              <Link
                href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Subgrid"
                icon
                target="_blank"
              >
                mdn - Subgrid
              </Link>
            </Text>
          </Col>
        </Row>
      </Container>
      <Navigation />
    </Container>
  )
}
export { Subgrid }
