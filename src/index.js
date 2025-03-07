// Function to format date as MM DD YYYY
export const formatDate = (data) => {
    const date = new Date(data);
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based
    const day = String(date.getDate()).padStart(2, '0');
    const year = date.getFullYear();

    return `${month} ${day} ${year}`;
};

// Function to get initials from a full name
export function getInitials(fullName) {
    const names = fullName.split(' ');
    const initials = names.slice(0, 2).map((name) => name[0].toUpperCase());
    return initials.join('');
}

// Function to format a date in a readable format
export function dateFormatter(dateString) {
    const inputDate = new Date(dateString);
    return inputDate.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    });
}

// Priority styles for tasks
export const PRIORITY_STYLES = {
    high: { color: "red", label: "High Priority" },
    medium: { color: "orange", label: "Medium Priority" },
    low: { color: "green", label: "Low Priority" }
};

// Task types with icons
export const TASK_TYPE = {
    bug: { icon: "🐞", label: "Bug" },
    feature: { icon: "✨", label: "Feature" },
    improvement: { icon: "⚙️", label: "Improvement" }
};

// Background styles for different task statuses
export const BGS = {
    todo: "bg-blue-200",
    inProgress: "bg-yellow-200",
    completed: "bg-green-200"
};

// Summary of tasks and users
export const Summary = {
    totalTask: 10,
    lastTasks: [
        { id: 1, title: "Fix UI Bug", status: "in progress", assignedTo: "Alice" },
        { id: 2, title: "Implement Auth", status: "todo", assignedTo: "Bob" }
    ],
    users: [
        { id: 1, name: "Alice", role: "Admin" },
        { id: 2, name: "Bob", role: "Editor" },
        { id: 3, name: "Charlie", role: "Viewer" }
    ],
    tasks: {
        todo: 6,
        "in progress": 3,
        complete: 1
    }
};

// Chart data for visualization
export const chartData = [
    { label: "To Do", value: 6 },
    { label: "In Progress", value: 3 },
    { label: "Completed", value: 1 }
];

// List of tasks
export const tasks = [
    { id: 1, title: "Fix UI Bug", description: "Resolve the button alignment issue.", status: "in progress", assignedTo: "Alice", priority: "High" },
    { id: 2, title: "Implement Auth", description: "Setup JWT-based authentication.", status: "todo", assignedTo: "Bob", priority: "Medium" },
    { id: 3, title: "Database Backup", description: "Schedule regular backups.", status: "complete", assignedTo: "Charlie", priority: "Low" }
];
