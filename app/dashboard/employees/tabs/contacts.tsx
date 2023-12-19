"use client"

import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow, } from "@/registry/ui/table"
import { SkeletonV1 } from "@/components/skeleton"
import { postRequest } from "@/lib/request"
import { Badge } from "@/registry/ui/badge"
import { Button } from "@/registry/ui/button"
import { Input } from "@/registry/ui/input"
import { useToast } from "@/registry/ui/use-toast"
import { Phone } from "@/lib/types"
import { TrashIcon } from "@radix-ui/react-icons"
import { Separator } from "@radix-ui/react-menu"
import { useParams } from "next/navigation"
import { Key, useEffect, useState } from "react"

export function ContactsTab() {
    const params = useParams()
    const { toast } = useToast()
    const [input, setInput] = useState<Phone[]>([])
    const [load, setLoad] = useState(true)
    const [value, setValue] = useState("")
    const [isValid, setIsValid] = useState(false);

    let onChange = (e: any) => {
        setValue(e.target.value)
        setIsValid(/^\+998\d{9}$/.test(e.target.value));
    }

    let getContacts = async () => {
        setLoad(true);
        const res = (await postRequest("/data/contacts/", { foreign_id: params.id, type: "doctor" }))
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

    let deleteContacts = async (id: string) => {
        const res = (await postRequest("/data/contacts/delete", { id }))
        if (res.err) {
            return toast({
                variant: "destructive",
                title: "Uh oh! Something went wrong.",
                description: "Sorry, the can't delete data!"
            })
        }
        await getContacts();
    }

    let addContacts = async () => {
        const res = (await postRequest("/data/contacts/add", { foreign_id: params.id, type: "doctor", value }))
        if (res.err) {
            return toast({
                variant: "destructive",
                title: "Uh oh! Something went wrong.",
                description: "Sorry, the can't add data!"
            })
        }

        setValue("")
        setIsValid(false)
        await getContacts();
    }

    useEffect(() => { getContacts() }, []);

    return (
        <div className="w-full">
            <div className="flex items-center justify-between">
                <p className="text-sm"> Doctor contacts data and management.</p>
            </div>
            <Separator className="my-4" />

            <div className="grid grid-cols-6 gap-4 mb-4">
                <Input type="name" className="col-span-2" placeholder="+998991234567 formatda kiriting " value={value} onChange={onChange} />
                <Button onClick={addContacts} disabled={!isValid}>Create new</Button>
            </div>

            {load && <SkeletonV1 />}
            {!load &&
                <Table>
                    <TableCaption>A list of your data.</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead>#</TableHead>
                            <TableHead>Number</TableHead>
                            <TableHead className="text-right">Method</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {input.length > 0 && input.map((item) => (
                            <TableRow key={item.id as Key}>
                                <TableCell className="font-medium">{item.id}</TableCell>
                                <TableCell>{item.value}</TableCell>
                                <TableCell className="text-right">
                                    <Badge className="cursor-pointer" onClick={() => { deleteContacts(item.id) }}> Delete <TrashIcon /></Badge>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            }
        </div>
    )
}
