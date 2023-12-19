"use client"

import { useEffect, useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/registry/ui/table"
import { CaretSortIcon, ChevronDownIcon, DotsHorizontalIcon } from "@radix-ui/react-icons"
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger, } from "@/registry/ui/dropdown-menu"
import { ColumnDef, ColumnFiltersState, SortingState, VisibilityState, flexRender, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, getSortedRowModel, useReactTable, } from "@tanstack/react-table"
import { useToast } from "@/registry/ui/use-toast"
import { Separator } from "@/registry/ui/separator";
import { Button } from "@/registry/ui/button"
import { Input } from "@/registry/ui/input"
import { useRouter } from "next/navigation"
import { getRequest, postRequest } from "@/lib/request"
import { Employee } from "@/lib/types"
import Link from "next/link"

export function ListTab() {

    const columns: ColumnDef<Employee>[] = [
        {
            accessorKey: "id",
            header: "#",
            cell: ({ row }) => (
                <div className="capitalize">{row.getValue("id")}</div>
            ),
        }, {
            accessorKey: "name",
            header: ({ column }) => {
                return (
                    <Button variant="ghost" className="p-0" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")} >
                        Name
                        <CaretSortIcon className="ml-2 h-4 w-4" />
                    </Button>
                )
            }, cell: ({ row }) => <div className="lowercase">
                <Link href={`/dashboard/doctors/${row.original?.id}`} className="underline underline-offset-1">{row.getValue("name")}</Link>
            </div>,
        }, {
            accessorKey: "gender",
            header: () => <div className="text-right">Gender</div>,
            cell: ({ row }) => (
                <div className="text-right">{row.getValue("gender")}</div>
            ),
        }, {
            id: "actions", enableHiding: false, cell: ({ row }) => {
                const rw = row.original
                return (
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                                <span className="sr-only">Open menu</span>
                                <DotsHorizontalIcon className="h-4 w-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem onClick={() => navigator.clipboard.writeText(rw?.id)} > Copy ID</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem onClick={() => { router.push(`/dashboard/doctors/${rw?.id}`) }}>Edit</DropdownMenuItem>
                            <DropdownMenuItem onClick={() => { deleteOne(rw?.id) }}>Delete</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                )
            }
        }
    ]

    const router = useRouter()
    const [data, setData] = useState<Employee[]>([])
    const [sorting, setSorting] = useState<SortingState>([])
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
    const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({})
    const [rowSelection, setRowSelection] = useState({})
    const { toast } = useToast()

    const table = useReactTable({
        data, columns, onSortingChange: setSorting, onColumnFiltersChange: setColumnFilters, getCoreRowModel: getCoreRowModel(), getPaginationRowModel: getPaginationRowModel(), getSortedRowModel: getSortedRowModel(), getFilteredRowModel: getFilteredRowModel(), onColumnVisibilityChange: setColumnVisibility, onRowSelectionChange: setRowSelection,
        state: { sorting, columnFilters, columnVisibility, rowSelection }
    })

    const getList = async () => {
        setData((await getRequest("/doctors/list", {}))?.data?.arr || []);
    }

    let deleteOne = async (id: string) => {
        const res = (await postRequest("/doctors/delete", { id }))
        if (res.err) {
            return toast({ variant: "destructive", title: "Uh oh! Something went wrong.", description: "Sorry, the can't delete data!" })
        }
        await getList();
    }

    useEffect(() => { getList() }, [])

    return (
        <div className="w-full">
            <div className="flex items-center justify-between">
                <p className="text-sm"> Employees data and management.</p>
            </div>
            <Separator className="my-4" />
            <div className="flex items-center py-4">
                <Input
                    placeholder="Filter name ..."
                    value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
                    onChange={(event) => table.getColumn("name")?.setFilterValue(event.target.value)}
                    className="max-w-sm"
                />
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" className="ml-auto">
                            Columns <ChevronDownIcon className="ml-2 h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        {table.getAllColumns().filter((column) => column.getCanHide()).map((column) => {
                            return (
                                <DropdownMenuCheckboxItem
                                    key={column.id}
                                    className="capitalize"
                                    checked={column.getIsVisible()}
                                    onCheckedChange={(value) => column.toggleVisibility(!!value)}
                                > {column.id} </DropdownMenuCheckboxItem>
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
                                                : flexRender(
                                                    header.column.columnDef.header, header.getContext()
                                                )}
                                        </TableHead>
                                    )
                                })}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row: any) => (
                                <TableRow key={row.id} data-state={row.getIsSelected() && "selected"} >
                                    {row.getVisibleCells().map((cell: any) => (
                                        <TableCell key={cell.id}>
                                            {flexRender(
                                                cell.column.columnDef.cell, cell.getContext()
                                            )}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={columns.length} className="h-24 text-center" >  No results.  </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
            <div className="flex items-center justify-end space-x-2 py-4">
                <div className="flex-1 text-sm text-muted-foreground">
                    {table.getFilteredSelectedRowModel().rows.length} of{" "}
                    {table.getFilteredRowModel().rows.length} row(s) selected.
                </div>
                <div className="space-x-2">
                    <Button variant="outline" size="sm" onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}> Previous </Button>
                    <Button variant="outline" size="sm" onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}
                    > Next </Button>
                </div>
            </div>
        </div>
    )
}
