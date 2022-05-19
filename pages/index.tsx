import { Grid, Card, Text, Link } from '@nextui-org/react'
import NextLink from 'next/link'

const ROUTES = {
  PSEUDO_CLASS_SELECTOR: '/css/pseudo-class-selector',
  CONTAINER_QUERY: '/css/container-queries',
  CASCADE_LAYERS: '/css/cascade-layers',
  SUBGRID: '/css/css-subgrid',
  VIEWPORT_UNITS: '/css/viewport-units',
  COLORS: '/css/css-colors',
}

function FeatureCard({ children = '', page = '' }) {
  return (
    <NextLink passHref href={page}>
      <Link color="secondary" style={{ width: '100%' }}>
        <Card
          color="primary"
          css={{
            h: '$24',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Text h4 color="white" css={{ mt: 0 }}>
            {children}
          </Text>
        </Card>
      </Link>
    </NextLink>
  )
}

// Pseudo-Class Selector in CSS (quiz with reveal)
// CSS Colors (code + show what can be done)
// CSS Masking and Clipping (code + show what can be done)
// CSS Blend Modes (code + show what can be done)
// CSS Proportional Scaling
// CSS Scroll Snap (images scrolling, toggle to enable and disable)
// Gap in Grid and Flexbox (briefly mention + polyfill)
// CSS Logic Properties (comparison with rtl toggle)
// CSS Content Visibility
// CSS @Rules
// CSS Comparison Functions
// CSS Media Query

function Home() {
  return (
    <>
      <Text
        h1
        size={60}
        css={{
          textGradient: '45deg, $blue500 -20%, $pink500 50%',
          textAlign: 'center',
          marginTop: '10vh',
        }}
        weight="bold"
      >
        What is new in CSS 2022
      </Text>
      <Grid.Container gap={2} justify="center">
        <Grid xs={4}>
          <FeatureCard page={ROUTES.CONTAINER_QUERY}>
            1. CSS Container Queries
          </FeatureCard>
        </Grid>

        <Grid xs={4}>
          <FeatureCard page={ROUTES.PSEUDO_CLASS_SELECTOR}>
            2. Pseudo-Class Selector
          </FeatureCard>
        </Grid>

        <Grid xs={4}>
          <FeatureCard page={ROUTES.COLORS}>3. CSS Colors Units</FeatureCard>
        </Grid>

        <Grid xs={4}>
          <FeatureCard page={ROUTES.VIEWPORT_UNITS}>
            4. Viewport Units
          </FeatureCard>
        </Grid>

        <Grid xs={4}>
          <FeatureCard page={ROUTES.CASCADE_LAYERS}>
            5. Cascade Layers
          </FeatureCard>
        </Grid>

        <Grid xs={4}>
          <FeatureCard page={ROUTES.SUBGRID}>6. CSS Subgrid</FeatureCard>
        </Grid>
      </Grid.Container>
    </>
  )
}

export default Home
