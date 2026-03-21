import { Box, Flex, IconButton } from '@chakra-ui/react'
import CodeMirror, { EditorView } from '@uiw/react-codemirror'
import { githubDark, githubLight } from '@uiw/codemirror-themes-all'
import { Extension } from '@codemirror/state'
import { FC, useCallback } from 'react'
import { LuCopy } from 'react-icons/lu'
import { copyToClipboard } from 'src/pages/Main/lib/copyToClipboard.ts'
import { useColorMode } from 'src/shared/ui'
import { toaster } from 'src/shared/ui'

interface CodeBlockProps {
  value: string
  extensions?: Extension[]
  showCopy?: boolean
}

export const CodeBlock: FC<CodeBlockProps> = ({ value, extensions = [], showCopy = true }) => {
  const { colorMode } = useColorMode()

  const handleCopy = useCallback(async () => {
    try {
      await copyToClipboard(value)
      toaster.create({ description: 'Copied to clipboard', type: 'info' })
    } catch {
      toaster.create({ description: 'Failed to copy', type: 'error' })
    }
  }, [value])

  return (
    <Flex position="relative" w="100%" align="center" p="12px">
      <Box flex={1} overflow="hidden">
        <CodeMirror
          value={value}
          extensions={[EditorView.lineWrapping, ...extensions]}
          editable={false}
          theme={colorMode === 'dark' ? githubDark : githubLight}
          width="100%"
          basicSetup={{
            lineNumbers: false,
            foldGutter: false,
            highlightActiveLine: false,
          }}
        />
      </Box>
      {showCopy && (
        <Flex flexShrink={0} px="8px">
          <IconButton aria-label="Copy" variant="ghost" size="sm" onClick={handleCopy}>
            <LuCopy />
          </IconButton>
        </Flex>
      )}
    </Flex>
  )
}
