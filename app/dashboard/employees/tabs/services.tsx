"use client"

import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow, } from "@/registry/ui/table"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/registry/ui/select";
import { SkeletonV1 } from "@/components/skeleton"
import { getRequest, postRequest } from "@/lib/request"
import { Badge } from "@/registry/ui/badge"
import { Button } from "@/registry/ui/button"
import { Input } from "@/registry/ui/input"
import { useToast } from "@/registry/ui/use-toast"
import { Category, Service } from "@/lib/types"
import { TrashIcon } from "@radix-ui/react-icons"
import { Separator } from "@radix-ui/react-menu"
import { useParams } from "next/navigation"
import { Key, useEffect, useState } from "react"

export function ServicesTab() {
    const params = useParams()
    const { toast } = useToast()
    const [input, setInput] = useState<Service[]>([])
    const [category, setCategory] = useState<Category[]>([])
    const [categoryId, setCategoryID] = useState("")
    const [load, setLoad] = useState(true)
    const [price, setPrice] = useState(0)

    let onChange = (e: any) => { setPrice(e.target.value) }
    let onSelect = (e: any) => { setCategoryID(e) }

    let getServices = async () => {
        setLoad(true);
        const res = (await postRequest("/data/services/", { foreign_id: params.id, type: "doctor" }))
        if (res.err) {
            return toast({
                variant: "destructive",
                title: "Uh oh! Something went wrong.",
                description: "Sorry, the can't get data!"
            })
        }
        setInput(res?.data?.arr || []);
        setLoad(false);
    }

    let deleteServices = async (id: string) => {
        const res = (await postRequest("/data/services/delete", { id }))
        if (res.err) {
            return toast({
                variant: "destructive",
                title: "Uh oh! Something went wrong.",
                description: "Sorry, the can't delete data!"
            })
        }
        getServices();
    }

    let addServices = async () => {
        const res = (await postRequest("/data/services/add", { foreign_id: params.id, type: "doctor", category_id: categoryId, price }))
        if (res.err) {
            return toast({
                variant: "destructive",
                title: "Uh oh! Something went wrong.",
                description: "Sorry, the can't add data!"
            })
        }
        setPrice(0)
        setCategoryID("")
        await getServices();
    }

    let getListCategory = async () => {
        const res = (await getRequest("/data/category", {}))
        if (res.err) {
            return toast({
                variant: "destructive",
                title: "Uh oh! Something went wrong.",
                description: "Sorry, the can't get data!"
            })
        }
        setCategory(res?.data?.category || []);
    }

    useEffect(() => { getServices(); getListCategory(); }, []);

    return (
        <div className="w-full">
            <div className="flex items-center justify-between">
                <p className="text-sm"> Doctor services data and management.</p>
            </div>
            <Separator className="my-4" />
            <div className="grid grid-cols-6 gap-4 mb-4">
                <div className="col-span-2" >
                    <Select value={categoryId} onValueChange={onSelect}>
                        <SelectTrigger>
                            <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Category:</SelectLabel>
                                {category && category.length > 0 && category.map((item) => (
                                    <SelectItem key={item.id as Key} value={item.id}>{item?.name}</SelectItem>
                                ))}
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
                <div className="col-span-2" >
                    <Input type="number" className="col-span-2" placeholder="Price ..." value={price} onChange={onChange} />
                </div>
                <div className="col-span-2" >
                    <Button onClick={addServices}>Create new</Button>
                </div>
            </div>

            {load && <SkeletonV1 />}
            {!load &&
                <Table>
                    <TableCaption>A list of your data.</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead>#</TableHead>
                            <TableHead>Category</TableHead>
                            <TableHead>Price</TableHead>
                            <TableHead className="text-right">Method</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {input.length > 0 && input.map((item) => (
                            <TableRow key={item.id as Key}>
                                <TableCell className="font-medium">{item.id}</TableCell>
                                <TableCell>{item.name}</TableCell>
                                <TableCell>{item.price}</TableCell>
                                <TableCell className="text-right">
                                    <Badge className="cursor-pointer" onClick={() => { deleteServices(item.id) }}> Delete <TrashIcon /></Badge>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            }
        </div>
    )
}
