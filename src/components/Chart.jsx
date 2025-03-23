        // import React from "react";
        // import {
        //     Bar,
        //     BarChart,
        //     CartesianGrid,
        //     Legend,
        //     ResponsiveContainer,
        //     Tooltip,
        //     XAxis,
        //     YAxis
        // } from "recharts";
        // import { chartData } from "../assets/data";

        // const Chart = () => {
        //     return (
        //         <div className="w-full h-64 p-4 bg-white rounded-lg shadow-md">
        //             <h2 className="text-lg font-semibold mb-2">Task Overview</h2>
        //             <ResponsiveContainer width="100%" height="100%">
        //                 <BarChart data={chartData}>
        //                     <CartesianGrid strokeDasharray="3 3" />
        //                     <XAxis dataKey="label" />
        //                     <YAxis />
        //                     <Tooltip />
        //                     <Legend />
        //                     <Bar dataKey="value" fill="#4f46e5" />
        //                 </BarChart>
        //             </ResponsiveContainer>
        //         </div>
        //     );
        // };

        // export default Chart;
        import React from "react";
        import {
            Bar,
            BarChart,
            CartesianGrid,
            Legend,
            ResponsiveContainer,
            Tooltip,
            XAxis,
            YAxis
        } from "recharts";
        import { chartData } from "../assets/data";
        
        const Chart = () => {
            return (
                <div className="w-full h-64 p-4 bg-white rounded-lg shadow-md">
                    <h2 className="text-lg font-semibold mb-2">Task Overview</h2>
                    {chartData.length > 0 ? (
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={chartData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="label" />
                                <YAxis label={{ value: "Tasks", angle: -90, position: "insideLeft" }} />
                                <Tooltip formatter={(value) => `${value} tasks`} />
                                <Legend />
                                <Bar dataKey="value" fill="#4f46e5" />
                            </BarChart>
                        </ResponsiveContainer>
                    ) : (
                        <p className="text-center text-gray-500">No data available</p>
                    )}
                </div>
            );
        };
        
        export default Chart;
            