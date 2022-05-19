import React from 'react'
import {
  Text,
  Container,
  Row,
  Col,
  Card,
  Spacer,
  Link,
} from '@nextui-org/react'

import { Navigation } from '../../components/Navigation'
import { CodeBlock } from '../../components/CodeBlock'

import styles from './index.module.scss'

const mdIsWhereHTML = `
~~~jsx
<main className="main">
 <p className="p">A purple paragraph</p>
</main>
<header className="header">
 <p className="p">I am a also purple</p>
</header>
~~~
`

const mdIsWhereCSS = `
~~~css
.header .p,
.main .p {
  color: green;
}

:is(.header, .main) .p {
  color: purple;
}

:where(.header, .main) .p {
  color: red;
}

.p, .header {
  color: blue;
}
~~~
`

const mdNotHasHTML = `
~~~jsx
<form>
  <div className="title">
    <p>select at least one fruit</p>
    <div className="valid">✅</div>
  </div>
  <div>
    <input type="checkbox" id="apple" name="apple" />
    <label htmlFor="scales">🍎 apple</label>
  </div>
  <div>
    <input type="checkbox" id="banana" name="banana" />
    <label htmlFor="scales">🍌 banana</label>
  </div>
</form>
~~~
`

const mdNotHasCSS = `
~~~css
form:not(:has(input[type="checkbox"]:checked)) {
  border: 1px solid firebrick;
}

form:has(input[type="checkbox"]:checked) {
  border: 1px solid yellowgreen;
}

.valid {
  display: none;
}

form:has(input[type="checkbox"]:checked) .valid {
 display: block;
}
~~~
`

function PseudoClassSelector() {
  return (
    <Container>
      <Navigation />
      <Text
        h1
        size={60}
        css={{
          textGradient: '45deg, $purple500 -20%, $pink500 100%',
        }}
        weight="bold"
      >
        Pseudo-Class Selector
      </Text>
      <section>
        <Text
          h2
          css={{
            textGradient: '45deg, $yellow500 -20%, $red500 100%',
          }}
          weight="bold"
        >
          :has()
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
              <CodeBlock>{mdNotHasHTML}</CodeBlock>
            </Col>
            <Col>
              <Text h5 css={{ mb: '$4' }}>
                CSS
              </Text>
              <CodeBlock>{mdNotHasCSS}</CodeBlock>
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
                  <div className={styles.notHas}>
                    <form>
                      <div className={styles.title}>
                        <p>select at least one fruit</p>
                        <div className={styles.valid}>✅</div>
                      </div>
                      <div>
                        <input type="checkbox" id="apple" name="apple" />
                        <label htmlFor="scales">🍎 apple</label>
                      </div>
                      <div>
                        <input type="checkbox" id="banana" name="banana" />
                        <label htmlFor="scales">🍌 banana</label>
                      </div>
                    </form>
                  </div>
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
                <Link href="https://caniuse.com/css-has" icon target="_blank">
                  Browser support - :has()
                </Link>
              </Text>
              <Text>
                <Link
                  href="https://www.smashingmagazine.com/2021/06/has-native-css-parent-selector/#css-has-pseudo-class-specification"
                  icon
                  target="_blank"
                >
                  Meet :has, A Native CSS Parent Selector (And More)
                </Link>
              </Text>
              <Text>
                <Link
                  href="https://www.bram.us/2021/12/21/the-css-has-selector-is-way-more-than-a-parent-selector/"
                  icon
                  target="_blank"
                >
                  The CSS :has() selector is way more than a “Parent Selector”
                </Link>
              </Text>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Text
          h2
          css={{
            textGradient: '45deg, $yellow500 -20%, $red500 100%',
          }}
          weight="bold"
        >
          :is() and :where()
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
              <CodeBlock>{mdIsWhereHTML}</CodeBlock>
            </Col>
            <Col>
              <Text h5 css={{ mb: '$4' }}>
                CSS
              </Text>
              <CodeBlock>{mdIsWhereCSS}</CodeBlock>
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
                  <div className={styles.isWhere}>
                    <main className={styles.main}>
                      <p className={styles.p}>A purple paragraph</p>
                    </main>
                    <header className={styles.header}>
                      <p className={styles.p}>I am a also purple</p>
                    </header>
                  </div>
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
                  href="https://caniuse.com/css-matches-pseudo"
                  icon
                  target="_blank"
                >
                  Browser support - :is()
                </Link>
              </Text>
              <Text>
                <Link
                  href="https://caniuse.com/mdn-css_selectors_where"
                  icon
                  target="_blank"
                >
                  Browser support - :where()
                </Link>
              </Text>
            </Col>
          </Row>
        </Container>
      </section>
    </Container>
  )
}

export { PseudoClassSelector }
