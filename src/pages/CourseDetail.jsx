import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { courses } from "../data/courses";
import Sidebar from "../components/Sidebar";
import { useState } from "react";

function CourseDetail() {
  const { id } = useParams();
  const course = courses.find((c) => c.id === id);
  const [activeTab, setActiveTab] = useState("overview");

  if (!course) return <div className="p-4">Course not found.</div>;

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 min-h-screen bg-gray-100 ml-0 md:ml-16 lg:ml-64">

          {/* mobile mode */}
        <div className="sticky top-0 z-10 block md:hidden w-full bg-gray-700 text-white px-20 py-4 text-lg font-bold shadow">
          Course Details
        </div>
        
        {/* Breadcrumb */}
        <div className="bg-gray-200 p-4 text-sm">
        <Link to="/" className="text-blue-600 hover:underline">Dashboard</Link>
        &nbsp;&gt;&nbsp;
        <span className="text-blue-600">{course.title}</span>
        &nbsp;&gt;&nbsp;
        <span>Modules</span>
        </div>

        {/* Course Header */}
        <div className="p-6 bg-white shadow-sm">
          <h1 className="text-3xl font-semibold">{course.title}</h1>
          <p className="text-gray-600">Instructor: {course.instructor}</p>
        </div>

        {/* Tabs */}
        <div className="px-6 mt-4">
          <div className="flex space-x-4 border-b border-gray-300">
            {["overview", "assignments", "grades"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-2 px-4 ${
                  activeTab === tab
                    ? "border-b-2 border-blue-600 font-semibold"
                    : "text-gray-500"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="mt-6">
            {activeTab === "overview" && (
              <p className="text-gray-700">{course.description}</p>
            )}

            {activeTab === "assignments" && (
              <ul className="list-disc pl-5 text-gray-700">
                {course.assignments.map((a, i) => (
                  <li key={i}>
                    <strong>{a.name}</strong> – due {a.due}
                  </li>
                ))}
              </ul>
            )}

            {activeTab === "grades" && (
              <ul className="list-disc pl-5 text-gray-700">
                {course.grades.map((g, i) => (
                  <li key={i}>
                    <strong>{g.name}</strong>: {g.score}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseDetail;
