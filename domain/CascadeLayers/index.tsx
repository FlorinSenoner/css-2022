import React from 'react'
import {
  Text,
  Container,
  Row,
  Col,
  Spacer,
  Link,
  Card,
} from '@nextui-org/react'

import { Navigation } from '../../components/Navigation'
import { CodeBlock } from '../../components/CodeBlock'

import styles from './index.module.scss'

const mdCascadeLayersHTML = `
~~~jsx
<div className="card">got a blue border thanks to @layer</div>
<div className="card">same for me</div>
~~~
`

const mdCascadeLayersCSS = `
~~~css
@layer lib, base, theme;

/*
  can also be imported using
  @layer lib url(lib.css);
*/
@layer lib {
  /*
    would be applied thanks to higher specificity.
    to override we need to use increase the specificity
    in our stylesheet (!important 😱)
  */
  div.card {
    border: 3px solid hotpink;
  }
}

@layer base {
  .card {
    border: 3px solid black;
  }
}

@layer theme {
  .card {
    border: 3px solid deepskyblue;
  }
}
~~~
`

function CascadeLayers() {
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
        Cascade Layers
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
            <CodeBlock>{mdCascadeLayersHTML}</CodeBlock>
          </Col>
          <Col>
            <Text h5 css={{ mb: '$4' }}>
              CSS
            </Text>
            <CodeBlock>{mdCascadeLayersCSS}</CodeBlock>
          </Col>
        </Row>
        <Spacer y={1} />
        <Row gap={1}>
          <Col>
            <Text h3 css={{ mb: '$6' }}>
              Result
            </Text>
            <Card css={{ mw: '330px' }}>
              <Card.Body css={{ py: '$10' }}>
                <div className={styles.card}>
                  got a blue border thanks to @layer
                </div>
                <div className={styles.card}>same for me</div>
              </Card.Body>
            </Card>
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
                href="https://caniuse.com/css-cascade-layers"
                icon
                target="_blank"
              >
                Browser support - Cascade Layers
              </Link>
            </Text>
            <Text>
              <Link
                href="https://developer.mozilla.org/en-US/docs/Web/CSS/@layer"
                icon
                target="_blank"
              >
                mdn - @layer
              </Link>
            </Text>
          </Col>
        </Row>
      </Container>
      <Navigation />
    </Container>
  )
}
export { CascadeLayers }
