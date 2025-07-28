import CourseCard from "./CourseCard";

const mockCourses = [
  {
    id: "1",
    title: "Data Structures",
    instructor: "Adam Bravo",
    progress: 70,
  },
  {
    id: "2",
    title: "Web Development",
    instructor: "Clara Delta",
    progress: 45,
  },
  {
    id: "3",
    title: "Operating Systems",
    instructor: "Ethan Frost",
    progress: 85,
  },
  {
    id: "4",
    title: "Database Systems",
    instructor: "Bruno Clark",
    progress: 60,
  },
  {
    id: "5",
    title: "Computer Networks",
    instructor: "Diana Swift",
    progress: 90,
  },
  {
    id: "6",
    title: "Machine Learning",
    instructor: "Charlie Stone",
    progress: 35,
  },
];

function CourseGrid() {
  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {mockCourses.map((course, idx) => (
        <CourseCard
          key={idx}
          id={course.id}
          title={course.title}
          instructor={course.instructor}
          progress={course.progress}
        />

      ))}
    </div>
  );
}

export default CourseGrid;
