'use client';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";
import {   
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
 } from "@/components/ui/card";
 import data from '@/../data/analytics';


const AnalyticsChart = () => {
    return ( 
    <>
        <Card>
            <CardHeader>
                <CardTitle>Analytics For this Year</CardTitle>
                <CardDescription>View per month</CardDescription>
            </CardHeader>
            <CardContent>
                <div style={{ height: 300, width: "100%" }}>
                    <ResponsiveContainer width="100%" height={300}>
                        <LineChart
                            width={1100}
                            height={300}
                            data={data}
                        >
                      
                            <Line type="monotone" dataKey="uv" stroke="#8884d8" strokeWidth={2} />
                            <CartesianGrid stroke="#ccc" />
                            <XAxis dataKey="name" />
                            <YAxis />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </CardContent>
        </Card>
    </> 
    );
}
 
export default AnalyticsChart ;