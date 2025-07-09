"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

interface PollResultsChartProps {
    data: { name: string; votes: number }[];
}

export function PollResultsChart({ data }: PollResultsChartProps) {
  const chartConfig = {
    votes: {
      label: "Votes",
      color: "hsl(var(--primary))",
    },
  }

  return (
    <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
      <BarChart accessibilityLayer data={data} layout="vertical" margin={{ left: 0 }}>
        <CartesianGrid horizontal={false} />
        <YAxis
            dataKey="name"
            type="category"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tick={{fontSize: 12}}
            className="w-24"
        />
        <XAxis dataKey="votes" type="number" hide />
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent indicator="line" />}
        />
        <Bar dataKey="votes" layout="vertical" fill="var(--color-votes)" radius={4} />
      </BarChart>
    </ChartContainer>
  )
}
