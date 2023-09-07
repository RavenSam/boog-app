'use client'

import HoverMenu from '@/components/editor/HoverMenu'
import { useEditor, EditorContent, BubbleMenu } from '@tiptap/react'

import StarterKit from '@tiptap/starter-kit'
import Typography from "@tiptap/extension-typography"
import Underline from "@tiptap/extension-underline"




export default function TiptapEditor () {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Typography,
      Underline
    ],
    content: '<p>Hello World! 🌎️</p>',
  })

  return (
	  	<>
		  	<HoverMenu editor={editor} />

		   <EditorContent editor={editor} />
	   </>
  )
}