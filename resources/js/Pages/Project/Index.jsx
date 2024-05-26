import Pagination from "@/Components/Pagination";
import TableHeading from "@/Components/TableHeading";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { PROJECT_STATUS_CLASS_MAP, PROJECT_STATUS_TEXT_MAP } from "@/constant";
import { Head } from "@inertiajs/react";
import React from "react";
import { MdOutlineDelete, MdOutlineEdit } from "react-icons/md";

const PROJECT_STATUS_CLASS_MAP_2 = {
  pending: "bg-amber-500",
  in_progress: "bg-blue-500 ",
  completed: "bg-green-500",
};
const Index = ({ auth, projects }) => {
  return (
    <Authenticated
      user={auth.user}
      header={
        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
          Projects
        </h2>
      }
    >
      <Head title="Projects" />

      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 text-gray-900">
              {/* <pre>{JSON.stringify(projects, undefined, 2)}</pre> */}
              <div className="overflow-auto">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  {/* Headings */}
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 border-b-2 border-gray-500">
                    <tr className="text-nowrap">
                      <TableHeading name="id">ID</TableHeading>
                      <th className="px-3 py-3">Image</th>
                      <TableHeading name="name">Name</TableHeading>
                      <TableHeading name="status">Status</TableHeading>
                      <TableHeading name="created_at">Create Date</TableHeading>
                      <TableHeading name="due_date">Due Date</TableHeading>
                      <th className="px-3 py-3">Created By</th>
                      <th className="px-3 py-3 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {projects.data.map((project) => (
                      <tr
                        className="bg-white border-b text-gray-700 dark:border-gray-700"
                        key={project.id}
                      >
                        <td className="px-3 py-2">{project.id}</td>
                        <td className="px-3 py-2">
                          <img src={project.image_path} style={{ width: 60 }} />
                        </td>
                        <th className="px-3 py-2 text-gray-700 text-wrap hover:underline">
                          {project.name}
                          {/* <Link href={route("project.show", project.id)}>
                          </Link> */}
                        </th>
                        <td className="px-3 py-2">
                          <span
                            className={`px-2 py-1 rounded text-white ${
                              PROJECT_STATUS_CLASS_MAP_2[project.status]
                            }`}
                          >
                            {PROJECT_STATUS_TEXT_MAP[project.status]}
                          </span>
                        </td>
                        <td className="px-3 py-2 text-nowrap">
                          {project.created_at}
                        </td>
                        <td className="px-3 py-2 text-nowrap">
                          {project.due_date}
                        </td>
                        <td className="px-3 py-2">{project.createdBy.name}</td>
                        <td className="px-3 py-2 text-nowrap flex items-center justify-center">
                          <button>
                            <MdOutlineEdit size={25} />
                          </button>
                          {/* <Link
                            href={route("project.edit", project.id)}
                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline mx-1"
                          ></Link> */}
                          <button
                            // onClick={(e) => deleteProject(project)}
                            className="font-medium text-red-600 dark:text-red-500 hover:underline mx-1"
                          >
                            <MdOutlineDelete size={25} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <Pagination links={projects.meta.links} />
            </div>
          </div>
        </div>
      </div>
    </Authenticated>
  );
};

// table heading

export default Index;
