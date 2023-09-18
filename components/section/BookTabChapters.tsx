"use client"

import Link from "next/link"
import { useParams } from "next/navigation"
import * as React from "react"
import {
   ColumnDef,
   ColumnFiltersState,
   SortingState,
   VisibilityState,
   flexRender,
   getCoreRowModel,
   getFilteredRowModel,
   getPaginationRowModel,
   getSortedRowModel,
   useReactTable,
} from "@tanstack/react-table"
import { ArrowUpDown, ChevronDown, MoreHorizontal, Settings2, Edit2, Trash } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { DeleteChapterToast, DeleteChapterDialog } from "@/components/action/DeleteChapter"
import {
   DropdownMenu,
   DropdownMenuCheckboxItem,
   DropdownMenuContent,
   DropdownMenuItem,
   DropdownMenuLabel,
   DropdownMenuSeparator,
   DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const data: Chapter[] = [
   {
      id: "1",
      words: 1500,
      status: "approved",
      title: "Chapter 1: The Beginning",
      createdAt: "2023-08-01",
      updated: "2023-08-10",
   },
   {
      id: "2",
      words: 2000,
      status: "approved",
      title: "Chapter 2: Into the Unknown",
      createdAt: "2023-08-15",
      updated: "2023-08-25",
   },
   {
      id: "3",
      words: 1800,
      status: "editing",
      title: "Chapter 3: A Twist of Fate",
      createdAt: "2023-09-02",
      updated: "2023-09-12",
   },
   {
      id: "4",
      words: 2200,
      status: "editing",
      title: "Chapter 4: Secrets Revealed",
      createdAt: "2023-09-18",
      updated: "2023-09-28",
   },
   {
      id: "5",
      words: 1900,
      status: "drafting",
      title: "Chapter 5: The Quest Begins",
      createdAt: "2023-10-05",
      updated: "2023-10-15",
   },
   {
      id: "6",
      words: 2400,
      status: "drafting",
      title: "Chapter 6: Trials and Tribulations",
      createdAt: "2023-10-20",
      updated: "2023-10-30",
   },
   {
      id: "7",
      words: 2100,
      status: "planning",
      title: "Chapter 7: The Turning Point",
      createdAt: "2023-11-05",
      updated: "2023-11-15",
   },
   {
      id: "8",
      words: 2000,
      status: "planning",
      title: "Chapter 8: Crossroads",
      createdAt: "2023-11-20",
      updated: "2023-11-30",
   },
   {
      id: "9",
      words: 2300,
      status: "approved",
      title: "Chapter 9: Resolutions",
      createdAt: "2023-12-05",
      updated: "2023-12-15",
   },
   {
      id: "10",
      words: 1700,
      status: "approved",
      title: "Chapter 10: The Final Act",
      createdAt: "2023-12-20",
      updated: "2023-12-30",
   },
]

export type Chapter = {
   id: string
   words: number
   status: "planning" | "drafting" | "editing" | "approved"
   title: string
   createdAt: string
   updated: string
}

export default function BookTabChapters() {
   return (
      <section className="">
         <DataTableDemo />
      </section>
   )
}

export const columns: ColumnDef<Chapter>[] = [
   {
      id: "select",
      header: ({ table }) => (
         <Checkbox
            checked={table.getIsAllPageRowsSelected()}
            onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
            aria-label="Select all"
         />
      ),
      cell: ({ row }) => (
         <Checkbox
            checked={row.getIsSelected()}
            onCheckedChange={(value) => row.toggleSelected(!!value)}
            aria-label="Select row"
         />
      ),
      enableSorting: false,
      enableHiding: false,
   },
   {
      accessorKey: "title",
      header: ({ column }) => {
         return (
            <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
               Title
               <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
         )
      },
      cell: ({ row }) => <div className="">{row.getValue("title")}</div>,
   },
   {
      accessorKey: "words",
      header: () => <div className="">Words</div>,
      cell: ({ row }) => {
         return <div className="font-medium">{row.getValue("words")}</div>
      },
   },
   {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => <div className="capitalize">{row.getValue("status")}</div>,
   },
   {
      accessorKey: "updated",
      header: "Updated",
      cell: ({ row }) => {
         return <div className="capitalize">{row.getValue("updated")}</div>
      },
   },
   {
      accessorKey: "createdAt",
      header: "Created",
      cell: ({ row }) => {
         return <div className="capitalize">{row.getValue("createdAt")}</div>
      },
   },
   {
      id: "actions",
      enableHiding: false,
      cell: ({ row }) => {
         const { id } = useParams()
         const chapter = row.original
         const [open, onOpenChange] = React.useState(false)

         return (
            <>
               <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                     <Button variant="ghost" className="h-8 w-8 p-0 float-right">
                        <span className="sr-only">Open menu</span>
                        <MoreHorizontal className="h-4 w-4" />
                     </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                     <DropdownMenuItem asChild>
                        <Link href={`/author/books/${id}/edit/${chapter.id}`}>
                           <Edit2 className="h-4 w-4 mr-2" /> Edit
                        </Link>
                     </DropdownMenuItem>

                     {/* <DeleteChapterToast chapterId={chapter.id} /> */}

                     <DeleteChapterDialog open={open} onOpenChange={onOpenChange} />
                  </DropdownMenuContent>
               </DropdownMenu>
            </>
         )
      },
   },
]

export function DataTableDemo() {
   const [sorting, setSorting] = React.useState<SortingState>([])
   const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([])
   const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({ updated: false, createdAt: false })
   const [rowSelection, setRowSelection] = React.useState({})

   const table = useReactTable({
      data,
      columns,
      onSortingChange: setSorting,
      onColumnFiltersChange: setColumnFilters,
      getCoreRowModel: getCoreRowModel(),
      getPaginationRowModel: getPaginationRowModel(),
      getSortedRowModel: getSortedRowModel(),
      getFilteredRowModel: getFilteredRowModel(),
      onColumnVisibilityChange: setColumnVisibility,
      onRowSelectionChange: setRowSelection,
      state: {
         sorting,
         columnFilters,
         columnVisibility,
         rowSelection,
      },
   })

   return (
      <div className="w-full">
         <div className="flex items-center py-4">
            <Input
               placeholder="Filter by title..."
               value={(table.getColumn("title")?.getFilterValue() as string) ?? ""}
               onChange={(event) => table.getColumn("title")?.setFilterValue(event.target.value)}
               className="max-w-sm"
            />
            <DropdownMenu>
               <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="ml-auto">
                     <Settings2 className="mr-2 h-4 w-4" />
                     View
                  </Button>
               </DropdownMenuTrigger>
               <DropdownMenuContent align="end">
                  {table
                     .getAllColumns()
                     .filter((column) => column.getCanHide())
                     .map((column) => {
                        return (
                           <DropdownMenuCheckboxItem
                              key={column.id}
                              className="capitalize"
                              checked={column.getIsVisible()}
                              onCheckedChange={(value) => column.toggleVisibility(!!value)}
                           >
                              {column.id}
                           </DropdownMenuCheckboxItem>
                        )
                     })}
               </DropdownMenuContent>
            </DropdownMenu>
         </div>

         <div className="rounded-md border">
            <Table>
               <TableHeader>
                  {table.getHeaderGroups().map((headerGroup) => (
                     <TableRow key={headerGroup.id}>
                        {headerGroup.headers.map((header) => {
                           return (
                              <TableHead key={header.id}>
                                 {header.isPlaceholder
                                    ? null
                                    : flexRender(header.column.columnDef.header, header.getContext())}
                              </TableHead>
                           )
                        })}
                     </TableRow>
                  ))}
               </TableHeader>
               <TableBody>
                  {table.getRowModel().rows?.length ? (
                     table.getRowModel().rows.map((row) => (
                        <TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
                           {row.getVisibleCells().map((cell) => (
                              <TableCell key={cell.id}>
                                 {flexRender(cell.column.columnDef.cell, cell.getContext())}
                              </TableCell>
                           ))}
                        </TableRow>
                     ))
                  ) : (
                     <TableRow>
                        <TableCell colSpan={columns.length} className="h-24 text-center">
                           This books has no chapter.
                        </TableCell>
                     </TableRow>
                  )}
               </TableBody>
            </Table>
         </div>

         <div className="flex items-center justify-end space-x-2 py-4">
            <div className="flex-1 text-sm text-muted-foreground">
               {table.getFilteredSelectedRowModel().rows.length} of {table.getFilteredRowModel().rows.length} chapter(s)
               selected.
            </div>
            <div className="space-x-2">
               <Button
                  variant="outline"
                  size="sm"
                  onClick={() => table.previousPage()}
                  disabled={!table.getCanPreviousPage()}
               >
                  Previous
               </Button>
               <Button variant="outline" size="sm" onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
                  Next
               </Button>
            </div>
         </div>
      </div>
   )
}
