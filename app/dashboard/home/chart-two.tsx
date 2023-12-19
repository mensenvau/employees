"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/registry/ui/card"
import { Bar, BarChart, CartesianGrid, Funnel, FunnelChart, LabelList, Legend, Line, LineChart, ResponsiveContainer, Tooltip, Treemap, XAxis, YAxis } from "recharts"

const data = [
    {
        "value": 100,
        "name": "Lorem 1",
        "fill": "#8884d8"
    },
    {
        "value": 80,
        "name": "Lorem 2",
        "fill": "#83a6ed"
    },
    {
        "value": 50,
        "name": "Lorem 3",
        "fill": "#8dd1e1"
    },
    {
        "value": 40,
        "name": "Lorem 4",
        "fill": "#82ca9d"
    },
    {
        "value": 26,
        "name": "Lorem 5",
        "fill": "#a4de6c"
    }
]

const data1 = [
    {
        "name": "axis",
        "children": [
            {
                "name": "Axis",
                "size": 24593
            },
            {
                "name": "Axes",
                "size": 1302
            },
            {
                "name": "AxisGridLine",
                "size": 652
            },
            {
                "name": "AxisLabel",
                "size": 636
            },
            {
                "name": "CartesianAxes",
                "size": 6703
            }
        ]
    },
    {
        "name": "controls",
        "children": [
            {
                "name": "TooltipControl",
                "size": 8435
            },
            {
                "name": "SelectionControl",
                "size": 7862
            },
            {
                "name": "PanZoomControl",
                "size": 5222
            },
            {
                "name": "HoverControl",
                "size": 4896
            },
            {
                "name": "ControlList",
                "size": 4665
            },
            {
                "name": "ClickControl",
                "size": 3824
            },
            {
                "name": "ExpandControl",
                "size": 2832
            },
            {
                "name": "DragControl",
                "size": 2649
            },
            {
                "name": "AnchorControl",
                "size": 2138
            },
            {
                "name": "Control",
                "size": 1353
            },
            {
                "name": "IControl",
                "size": 763
            }
        ]
    },
    {
        "name": "data",
        "children": [
            {
                "name": "Data",
                "size": 20544
            },
            {
                "name": "NodeSprite",
                "size": 19382
            },
            {
                "name": "DataList",
                "size": 19788
            },
            {
                "name": "DataSprite",
                "size": 10349
            },
            {
                "name": "EdgeSprite",
                "size": 3301
            },
            {
                "name": "render",
                "children": [
                    {
                        "name": "EdgeRenderer",
                        "size": 5569
                    },
                    {
                        "name": "ShapeRenderer",
                        "size": 2247
                    },
                    {
                        "name": "ArrowType",
                        "size": 698
                    },
                    {
                        "name": "IRenderer",
                        "size": 353
                    }
                ]
            },
            {
                "name": "ScaleBinding",
                "size": 11275
            },
            {
                "name": "TreeBuilder",
                "size": 9930
            },
            {
                "name": "Tree",
                "size": 7147
            }
        ]
    },
    {
        "name": "events",
        "children": [
            {
                "name": "DataEvent",
                "size": 7313
            },
            {
                "name": "SelectionEvent",
                "size": 6880
            },
            {
                "name": "TooltipEvent",
                "size": 3701
            },
            {
                "name": "VisualizationEvent",
                "size": 2117
            }
        ]
    },
    {
        "name": "legend",
        "children": [
            {
                "name": "Legend",
                "size": 20859
            },
            {
                "name": "LegendRange",
                "size": 10530
            },
            {
                "name": "LegendItem",
                "size": 4614
            }
        ]
    },
    {
        "name": "operator",
        "children": [
            {
                "name": "distortion",
                "children": [
                    {
                        "name": "Distortion",
                        "size": 6314
                    },
                    {
                        "name": "BifocalDistortion",
                        "size": 4461
                    },
                    {
                        "name": "FisheyeDistortion",
                        "size": 3444
                    }
                ]
            },
            {
                "name": "encoder",
                "children": [
                    {
                        "name": "PropertyEncoder",
                        "size": 4138
                    },
                    {
                        "name": "Encoder",
                        "size": 4060
                    },
                    {
                        "name": "ColorEncoder",
                        "size": 3179
                    },
                    {
                        "name": "SizeEncoder",
                        "size": 1830
                    },
                    {
                        "name": "ShapeEncoder",
                        "size": 1690
                    }
                ]
            },
            {
                "name": "filter",
                "children": [
                    {
                        "name": "FisheyeTreeFilter",
                        "size": 5219
                    },
                    {
                        "name": "VisibilityFilter",
                        "size": 3509
                    },
                    {
                        "name": "GraphDistanceFilter",
                        "size": 3165
                    }
                ]
            },
            {
                "name": "IOperator",
                "size": 1286
            },
            {
                "name": "label",
                "children": [
                    {
                        "name": "Labeler",
                        "size": 9956
                    },
                    {
                        "name": "RadialLabeler",
                        "size": 3899
                    },
                    {
                        "name": "StackedAreaLabeler",
                        "size": 3202
                    }
                ]
            },
            {
                "name": "layout",
                "children": [
                    {
                        "name": "RadialTreeLayout",
                        "size": 12348
                    },
                    {
                        "name": "NodeLinkTreeLayout",
                        "size": 12870
                    },
                    {
                        "name": "CirclePackingLayout",
                        "size": 12003
                    },
                    {
                        "name": "CircleLayout",
                        "size": 9317
                    },
                    {
                        "name": "TreeMapLayout",
                        "size": 9191
                    },
                    {
                        "name": "StackedAreaLayout",
                        "size": 9121
                    },
                    {
                        "name": "Layout",
                        "size": 7881
                    },
                    {
                        "name": "AxisLayout",
                        "size": 6725
                    },
                    {
                        "name": "IcicleTreeLayout",
                        "size": 4864
                    },
                    {
                        "name": "DendrogramLayout",
                        "size": 4853
                    },
                    {
                        "name": "ForceDirectedLayout",
                        "size": 8411
                    },
                    {
                        "name": "BundledEdgeRouter",
                        "size": 3727
                    },
                    {
                        "name": "IndentedTreeLayout",
                        "size": 3174
                    },
                    {
                        "name": "PieLayout",
                        "size": 2728
                    },
                    {
                        "name": "RandomLayout",
                        "size": 870
                    }
                ]
            },
            {
                "name": "OperatorList",
                "size": 5248
            },
            {
                "name": "OperatorSequence",
                "size": 4190
            },
            {
                "name": "OperatorSwitch",
                "size": 2581
            },
            {
                "name": "Operator",
                "size": 2490
            },
            {
                "name": "SortOperator",
                "size": 2023
            }
        ]
    }
]

export function ChartTwo() {
    return (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-8">

            <Card className="col-span-4">
                <CardHeader>
                    <CardTitle>Overview</CardTitle>
                </CardHeader>
                <CardContent className="pl-2">
                    <ResponsiveContainer width="100%" height={350}>
                        <FunnelChart width={730} height={250}>
                            <Tooltip />
                            <Funnel dataKey="value" data={data} isAnimationActive  >
                                <LabelList position="right" fill="#000" stroke="none" dataKey="name" />
                            </Funnel>
                        </FunnelChart>
                    </ResponsiveContainer>
                </CardContent>
            </Card>

            <Card className="col-span-4">
                <CardHeader>
                    <CardTitle>Overview</CardTitle>
                </CardHeader>
                <CardContent className="pl-2">
                    <ResponsiveContainer width="100%" height={350}>
                        <Treemap
                            width={730}
                            height={250}
                            data={data1}
                            dataKey="size"
                            aspectRatio={4 / 3}
                            stroke="#fff"
                            fill="#8884d8"
                        />
                    </ResponsiveContainer>
                </CardContent>
            </Card>
        </div>
    )
}