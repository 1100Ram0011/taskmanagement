export const Summary = {
    totalTask: 10,
    lastTasks: [
        { title: "Fix UI Bug", date: "2025-03-01", priority: "High", stage: "Development", assignedTo: "Alice", assets: ["screenshot.png"] },
        { title: "Implement Auth", date: "2025-03-02", priority: "Medium", stage: "Planning", assignedTo: "Bob", assets: ["auth_doc.pdf"] }
    ],
    users: [
        { name: "Alice", role: "Admin", email: "alice@example.com" },
        { name: "Bob", role: "Editor", email: "bob@example.com" },
        { name: "Charlie", role: "Viewer", email: "charlie@example.com" }
    ],
    tasks: {
        todo: 6,
        "in progress": 3,
        complete: 1
    }
};

export const chartData = [
    { label: "To Do", value: 6 },
    { label: "In Progress", value: 3 },
    { label: "Completed", value: 1 }
];

export const tasks = [
    { title: "Fix UI Bug", description: "Resolve the button alignment issue.", date: "2025-03-01", status: "in progress", assignedTo: "Alice", priority: "High", stage: "Development", assets: ["screenshot.png"] },
    { title: "Implement Auth", description: "Setup JWT-based authentication.", date: "2025-03-02", status: "todo", assignedTo: "Bob", priority: "Medium", stage: "Planning", assets: ["auth_doc.pdf"] },
    { title: "Database Backup", description: "Schedule regular backups.", date: "2025-02-28", status: "complete", assignedTo: "Charlie", priority: "Low", stage: "Completed", assets: [] }
];
