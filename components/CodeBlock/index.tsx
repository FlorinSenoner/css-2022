import dynamic from 'next/dynamic'

const CodeBlock = dynamic(() => import('./CodeBlock'), {
  ssr: false,
})

export { CodeBlock }
