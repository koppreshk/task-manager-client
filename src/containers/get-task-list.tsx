import React from "react";
import { TaskList } from "../components/task-list"
import { ITaskMetadata } from "../types";

export const GetTaskList = () => {
    const [tasksList, setTaskList] = React.useState<ITaskMetadata[]>([]);
    React.useEffect(() => {
        fetch('http://localhost:9000/api/v1/tasks')
            .then(response => response.json())
            .then(data => setTaskList(data.tasks))
            .catch(err => console.log(err));

    }, []);
    console.log('tasksList: ', tasksList);

    return (
        <TaskList tasksList={tasksList} />
    )
}