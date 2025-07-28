import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import CourseGrid from "../components/CourseGrid";
import TodoList from "../components/TodoList";

function Dashboard() {
   return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 min-h-screen transition-all ml-0 md:ml-16 lg:ml-64 bg-gray-100">

        {/* mobile mode */}
        <div className="sticky top-0 z-10 block md:hidden w-full bg-gray-700 text-white px-20 py-4 text-lg font-bold shadow">
          Dashboard
        </div>

        <div className="bg-white shadow-sm">
          <Header studentName="Student" />
        </div>
         
        <div className="p-4">
         <h1 className="text-4xl font-semibold mt-5 mb-8 ml-4 text-gray-800">Courses</h1>
         <CourseGrid />
         <TodoList />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
