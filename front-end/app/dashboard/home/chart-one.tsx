"use client"

import { useEffect, useState } from "react"
import { getRequest } from "@/lib/request"
import { Card, CardContent, CardHeader, CardTitle } from "@/registry/ui/card"
import { Funnel, FunnelChart, LabelList, ResponsiveContainer, Tooltip } from "recharts"

export function ChartOne() {

    const [data, setData] = useState<any>({})

    const getList = async () => {
        setData((await getRequest("employees/analiz", {})) || []);
    }

    useEffect(() => { getList(); }, [])

    return (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-8">
            <Card className="col-span-8">
                <CardHeader>
                    <CardTitle>Overview</CardTitle>
                </CardHeader>
                <CardContent className="pl-2">
                    <ResponsiveContainer width="100%" height={500}>
                        <FunnelChart width={730} height={500}>
                            <Tooltip />
                            <Funnel dataKey="count" data={data?.arr1} isAnimationActive  >
                                <LabelList position="right" fill="#000" stroke="none" dataKey="name" />
                            </Funnel>
                        </FunnelChart>
                    </ResponsiveContainer>
                </CardContent>
            </Card>

        </div>
    )
}