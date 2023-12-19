"use client"

import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/registry/ui/select";
import { getRequest, postRequest } from "@/lib/request";
import { Button } from "@/registry/ui/button";
import { Input } from "@/registry/ui/input";
import { Separator } from "@/registry/ui/separator";
import { useToast } from "@/registry/ui/use-toast";
import { Key, useEffect, useState } from "react";
import { useParams, useRouter } from 'next/navigation'
import { Regions } from "@/lib/types";
import { SkeletonV1 } from "@/components/skeleton";
import { Label } from "@radix-ui/react-label";

export function EditInfoTab() {
    const params = useParams()
    const { toast } = useToast()
    const [input, setInput] = useState({ regions_id: '0', district_id: '0', experience: "0", gender: "", tg_id: "0", start: 1, end: 1, interval: 1 })
    const [load, setLoad] = useState(true)
    const [regions, setRegions] = useState<Regions[]>([])
    const [district, setDistrict] = useState<Regions[]>([])

    let onChange = (e: any) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    }

    let onSelect = (name: string, e: any) => {
        setInput({ ...input, [name]: e });
        if (name == "regions_id") {
            setDistrict([]);
            getDistrict(e);
        }
    }

    let editInfo = async () => {
        setLoad(true);
        setInput({ regions_id: '0', district_id: '0', experience: "0", gender: "", tg_id: "0", start: 1, end: 1, interval: 1 });
        const res = (await postRequest("/doctors/info", { id: params.id, ...input }))
        if (res.err) {
            return toast({
                variant: "destructive",
                title: "Uh oh! Something went wrong.",
                description: "Sorry, the can't update data!"
            })
        }
        toast({
            title: "Wow! News.",
            description: "Data success update!!!"
        })
        await getInfo();
    }

    let getInfo = async () => {
        const res = await getRequest(`/doctors/info/${params.id}`);
        if (res.err) {
            return toast({
                variant: "destructive",
                title: "Uh oh! Something went wrong.",
                description: "Sorry, the can't get data!"
            })
        }
        setInput(res?.data?.arr || []);
        await getDistrict(res?.data?.arr?.regions_id);
        setLoad(false);
    }

    let getRegions = async () => {
        const res = (await getRequest("/data/regions"))
        if (res.err) {
            return toast({
                variant: "destructive",
                title: "Uh oh! Something went wrong.",
                description: "Sorry, the can't get data!"
            })
        }
        setRegions(res?.data?.regions || []);
    }

    let getDistrict = async (id: string) => {
        const res = (await getRequest(`/data/district/${id}`))
        if (res.err) {
            return toast({
                variant: "destructive",
                title: "Uh oh! Something went wrong.",
                description: "Sorry, the can't get data!"
            })
        }
        setDistrict(res?.data?.regions || []);
    }

    useEffect(() => { getInfo(); getRegions(); }, [])

    return (
        <div className="w-full">
            <div className="flex items-center justify-between">
                <p className="text-sm"> Doctor data edit info part!  </p>
            </div>
            <Separator className="my-4" />
            {load && <SkeletonV1 />}
            {!load && <>
                <div className="grid grid-cols-6 gap-4 mb-2">
                    <div className="col-span-2" >
                        <Label >Regions: </Label>
                        <Select value={input.regions_id} onValueChange={(e) => { onSelect("regions_id", e) }}>
                            <SelectTrigger>
                                <SelectValue placeholder="Select a regions" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Regions:</SelectLabel>
                                    {regions && regions.length > 0 && regions.map((item) => (
                                        <SelectItem key={item.id as Key} value={item.id}>{item?.name}</SelectItem>
                                    ))}
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="col-span-2" >
                        <Label >District: </Label>
                        <Select value={input.district_id} onValueChange={(e) => { onSelect("district_id", e) }}>
                            <SelectTrigger className="col-span-2" value={input.district_id}>
                                <SelectValue placeholder="Select a district" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>District:</SelectLabel>
                                    {district && district.length > 0 && district.map((item) => (
                                        <SelectItem key={item.id as Key} value={item.id as string}>{item?.name}</SelectItem>
                                    ))}
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
                <div className="grid grid-cols-6 gap-4 mb-2">
                    <div className="col-span-2">
                        <Label >Experience: </Label>
                        <Input type="number" placeholder="Experience ... " name="experience" value={input.experience} onChange={onChange} />
                    </div>
                    <div className="col-span-2">
                        <Label >Gender: </Label>
                        <Select value={input.gender} onValueChange={(e) => { onSelect("gender", e) }}>
                            <SelectTrigger className="col-span-2" value={input.gender}>
                                <SelectValue placeholder="Select a Gender" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Gender:</SelectLabel>
                                    <SelectItem value="M">Male</SelectItem>
                                    <SelectItem value="F">Female</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
                <div className="grid grid-cols-6 gap-4 mb-2">
                    <div className="col-span-2">
                        <Label >Telegram Chat Id: </Label>
                        <Input type="text" placeholder="Telegram Chat Id ... " name="tg_id" value={input.tg_id} onChange={onChange} />
                    </div>
                </div>
                <div className="grid grid-cols-6 gap-4 mb-2">
                    <div className="col-span-2">
                        <Label >Start hour: </Label>
                        <Input type="text" placeholder="Start hour ... " name="start" value={input.start} onChange={onChange} />
                    </div>
                    <div className="col-span-2">
                        <Label >End hour: </Label>
                        <Input type="text" placeholder="End hour ... " name="end" value={input.end} onChange={onChange} />
                    </div>
                    <div className="col-span-2">
                        <Label >Interval minuts: </Label>
                        <Input type="text" placeholder="Interval minuts ... " name="interval" value={input.interval} onChange={onChange} />
                    </div>
                </div>
                <Button onClick={editInfo}>Edit Data</Button>
            </>
            }

        </div>
    )
}