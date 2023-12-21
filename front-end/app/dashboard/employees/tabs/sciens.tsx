"use client"

import { Key, useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow, } from "@/registry/ui/table"
import { deleteRequest, getRequest, postRequest } from "@/lib/request";
import { SkeletonV1 } from "@/components/skeleton"
import { useToast } from "@/registry/ui/use-toast"
import { Separator } from "@radix-ui/react-menu"
import { Input } from "@/registry/ui/input";
import { Button } from "@/registry/ui/button"
import { Badge } from "@/registry/ui/badge"

export default function SciensTab() {
    const params = useParams()
    const router = useRouter()
    const [data, setData] = useState<any[]>([])
    const [input, setInput] = useState<any>({ name: "", num: "", specialty: "", years: "", emp_id: params.id })
    const [load, setLoad] = useState(true)
    const { toast } = useToast()

    let onChange = (e: any) => { setInput({ ...input, [e.target.getAttribute("name")]: e.target.value }) }

    let getList = async () => {
        setLoad(true);
        const res = (await getRequest(`employees/sciens?id=${params.id}`,))
        if (res.err)
            return toast({ variant: "destructive", title: "Uh oh! Something went wrong.", description: "Sorry, the can't get data!" })
        setData(res?.arr || []);
        setLoad(false);
    }

    let addNew = async () => {
        const res = (await postRequest("employees/sciens", { ...input }))
        if (res.err)
            return toast({ variant: "destructive", title: "Uh oh! Something went wrong.", description: "Sorry, the name should not be empty!" })
        getList()
        setInput({ name: "", num: "", specialty: "", years: "", emp_id: params.id })
    }

    let delOne = async (id: any) => {
        const res = (await deleteRequest(`employees/sciens?id=${id}`))
        if (res.err)
            return toast({ variant: "destructive", title: "Uh oh! Something went wrong.", description: "Sorry, the name should not be empty!" })
        getList()
    }

    useEffect(() => { getList() }, []);

    return (
        <div className="col-span-4 lg:col-span-5 lg:border-l">
            <div className="h-full px-4 py-6 lg:px-8">
                <div className="w-full">
                    <div className="flex items-center justify-between">
                        <p className="text-sm"> Xodim bitirgan oliygohlar.</p>
                    </div>
                    <Separator className="my-4" />

                    <div className="grid grid-cols-6 gap-4 w-full">
                        <div className="col-span-2" >
                            <Input type="text" placeholder="Ilimiy Daraja" name="name" value={input?.name} onChange={onChange} />
                        </div>
                        <div className="col-span-2" >
                            <Input type="text" placeholder="Guvohnama raqami" name="num" value={input?.num} onChange={onChange} />
                        </div>
                    </div>

                    <div className="grid grid-cols-6 gap-4 w-full mt-2">
                        <div className="col-span-2" >
                            <Input type="text" placeholder="Muassasislik" name="specialty" value={input?.specialty} onChange={onChange} />
                        </div>
                        <div className="col-span-2" >
                            <Input type="text" placeholder="Yillar" name="years" value={input?.years} onChange={onChange} />
                        </div>
                        <div className="col-span-2">
                            <Button onClick={addNew}>Add </Button>
                        </div>
                    </div>

                    {load && <SkeletonV1 />}
                    {!load &&
                        <Table>
                            <TableCaption>A list of your data.</TableCaption>
                            <TableHeader>
                                <TableRow>
                                    <TableHead> #</TableHead>
                                    <TableHead> Ilimiy daraja</TableHead>
                                    <TableHead >Guvohnama raqami</TableHead>
                                    <TableHead >Muassasislik</TableHead>
                                    <TableHead >Yillar</TableHead>
                                    <TableHead >Method</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {data.length > 0 && data.map((item) => (
                                    <TableRow key={item.id as Key}>
                                        <TableCell className="font-medium">{item.id}</TableCell>
                                        <TableCell>{item.name}</TableCell>
                                        <TableCell>{item.num}</TableCell>
                                        <TableCell>{item.specialty}</TableCell>
                                        <TableCell>{item.years}</TableCell>
                                        <TableCell><Badge className="cursor-pointer" onClick={() => delOne(item.id)}> Delete </Badge></TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    }
                </div>
            </div>
        </div>
    )
}
