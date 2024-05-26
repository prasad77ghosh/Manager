import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head, router } from "@inertiajs/react";
import React from "react";
import TaskTable from "./TaskTable";

const Index = ({ auth, tasks, queryParams = null }) => {
  return (
    <Authenticated
      user={auth.user}
      header={
        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
          Tasks
        </h2>
      }
    >
      <Head title="Tasks" />

      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 text-gray-900">
              {/* <pre>{JSON.stringify(projects, undefined, 2)}</pre> */}
              <TaskTable tasks={tasks} queryParams={queryParams} />
            </div>
          </div>
        </div>
      </div>
    </Authenticated>
  );
};

// table heading

export default Index;
