'use client'

import { useEditor, EditorContent } from '@tiptap/react'


import StarterKit from '@tiptap/starter-kit'
import Typography from "@tiptap/extension-typography"
import Underline from "@tiptap/extension-underline"

export default function TiptapEditor () {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Typography,
      Underline,
    ],
    content: '<p>Hello World! 🌎️</p>',
  })

  return (
    <EditorContent editor={editor} />
  )
}