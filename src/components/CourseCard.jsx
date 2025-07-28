import { useNavigate } from "react-router-dom";
function CourseCard({ id, title, instructor, progress }) {
  const navigate = useNavigate();

  const GoToCourse = () => {
    navigate(`/courses/${id}`);
  };

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-sm text-gray-600">Instructor: {instructor}</p>
      <div className="h-2 bg-gray-200 rounded my-2">
        <div className="h-2 bg-blue-500 rounded" style={{ width: `${progress}%` }}></div>
      </div>
      <button
        onClick={GoToCourse}
        className="mt-2 px-3 py-1 bg-blue-600 text-white rounded text-sm"
      >
        Go to Course
      </button>
    </div>
  );
}

export default CourseCard;
