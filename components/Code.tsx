import { Box, Code } from "@chakra-ui/react";
import { ReactNode } from "react";
import hljs from 'highlight.js'
import python from 'highlight.js/lib/languages/python'


hljs.registerLanguage('python', python)

type CodeBlockProps = {
  content: string
  isPython: boolean | undefined
}
export default function CodeBlock(props: CodeBlockProps) {
  const text = props.isPython ? hljs.highlight(props.content, {language: 'python'}).value : props.content
  return <Box background='gray.900' px={2} py={2} rounded='lg' boxShadow='md'>
    <pre><Code background='gray.900' textColor='white' dangerouslySetInnerHTML={{__html: text}} /></pre>
  </Box>
}
