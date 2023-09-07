import { BubbleMenu, Editor } from "@tiptap/react";
import { Italic, Bold, Strikethrough, Underline, Code } from "lucide-react";

import { Toggle } from "@/components/ui/toggle";

interface HoverMenuProps {
	editor: Editor | null;
}

export default function HoverMenu({ editor }: HoverMenuProps) {
	if (!editor) return null;

	const menuList = [
		{
			label: "Toggle bold",
			icon: Bold,
			handler: () => editor.chain().focus().toggleBold().run(),
		},
		{
			label: "Toggle italic",
			icon: Italic,
			handler: () => editor.chain().focus().toggleItalic().run(),
		},
		{
			label: "Toggle underline",
			icon: Underline,
			handler: () => editor.chain().focus().toggleUnderline().run(),
		},
		{
			label: "Toggle strikethrough",
			icon: Strikethrough,
			handler: () => editor.chain().focus().toggleStrike().run(),
		},
		{
			label: "Toggle code",
			icon: Code,
			handler: () => editor.chain().focus().toggleCode().run(),
		},
	];

	return (
		<BubbleMenu
			className="flex w-full items-center justify-between space-x-1 overflow-hidden rounded-lg border border-slate-200 p-1 shadow-lg transition-all dark:border-slate-800"
			editor={editor}
			tippyOptions={{ duration: 300, animation: "fade" }}
		>
			{menuList.map((item) => (
				<Toggle onClick={item.handler} aria-label={item.label}>
					<item.icon className="h-4 w-4" />
				</Toggle>
			))}
		</BubbleMenu>
	);
}
