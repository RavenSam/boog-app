// import { Extension } from "@tiptap/core";
// import Suggestion from "@tiptap/suggestion";

// export const Commands = Extension.create({
//   name: "commands",

//   defaultOptions: {
//     suggestion: {
//       char: "/",
//       startOfLine: false,
//       command: ({ editor, range, props }) => {
//         props.command({ editor, range, props });
//       }
//     }
//   },

//   addProseMirrorPlugins() {
//     return [
//       Suggestion({
//         editor: this.editor,
//         ...this.options.suggestion
//       })
//     ];
//   }
// });

export default function SlashCommand() {
   return <div>slash-command</div>
}
