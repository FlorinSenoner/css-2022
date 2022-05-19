import React from 'react'
import { Text, Container, Row, Col, Spacer, Link } from '@nextui-org/react'

import { Navigation } from '../../components/Navigation'
import { CodeBlock } from '../../components/CodeBlock'

import styles from './index.module.scss'

const mdContainerQueriesHTML = `
~~~jsx
<div className="card">
  <div className="content">
    <img
      className="image"
      src="https://picsum.photos/2000"
      alt="placeholder image"
    />
    <div className="body">
      <p className="title">Marisha Ray</p>
      <p>
        Very important information
      </p>
      <p className="optional">
        Optional text
      </p>
    </div>
  </div>
</div>
~~~
`

const mdContainerQueriesCSS = `
~~~css
.card {
  container-type: inline-size;
  container-name: card;
}

.content{
  background-image: linear-gradient(45deg, #00DBDE 0%, #FC00FF 100%);
}

.image {
  width: 100%;
}

.optional {
  display: none;
}

@container card (min-width: 600px) {
  .content {
    display: flex;
    align-items: center;
    background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
  }

  .image {
    width: 50%;
    max-width: 400px;
    align-self: stretch;
  }

}

@container card (min-width: 1000px) {
  .content {
    background-image: linear-gradient(120deg, #89f7fe 0%, #66a6ff 100%);
  }

  .optional {
    display: block;
  }
}
~~~
`

function Card() {
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <img
          className={styles.image}
          src="https://picsum.photos/seed/784/2000"
          alt="placeholder image"
        />
        <div className={styles.body}>
          <p className={styles.title}>Marisha Ray</p>
          <p>
            I'm baby church-key vexillologist meggings master cleanse photo
            booth. Meditation semiotics unicorn, deep v listicle af gluten-free
            live-edge occupy tilde irony raw denim. Jean shorts tilde deep v DSA
            hella migas cred chia sustainable. Pour-over locavore iceland small
            batch keffiyeh bicycle rights tattooed typewriter.
          </p>
          <p className={styles.optional}>
            Umami ennui fam pinterest, tote bag jianbing la croix gluten-free
            normcore tattooed man bun mumblecore. Beard pickled gochujang plaid,
            godard trust fund echo park letterpress drinking vinegar green juice
            slow-carb bicycle rights knausgaard. Offal DSA readymade, food truck
            brooklyn tote bag godard praxis hot chicken humblebrag echo park
            street art. Affogato 3 wolf moon banjo readymade, leggings keytar
            subway tile farm-to-table fanny pack cold-pressed cred small batch.
            Scenester fingerstache enamel pin viral venmo mumblecore chia
            schlitz master cleanse fanny pack copper mug put a bird on it
            mixtape.
          </p>
        </div>
      </div>
    </div>
  )
}

function ContainerQueries() {
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
        CSS Container Queries
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
            <CodeBlock>{mdContainerQueriesHTML}</CodeBlock>
          </Col>
          <Col>
            <Text h5 css={{ mb: '$4' }}>
              CSS
            </Text>
            <CodeBlock>{mdContainerQueriesCSS}</CodeBlock>
          </Col>
        </Row>
        <Spacer y={1} />
        <Row gap={1}>
          <Col>
            <Text h3 css={{ mb: '$6' }}>
              Result
            </Text>
            <div className={styles.containerQueries}>
              <Card />
              <Card />
              <Card />
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
              <Link
                href="https://caniuse.com/css-container-queries"
                icon
                target="_blank"
              >
                Browser support - CSS Container Queries
              </Link>
            </Text>
          </Col>
        </Row>
      </Container>
      <Navigation />
    </Container>
  )
}
export { ContainerQueries }
