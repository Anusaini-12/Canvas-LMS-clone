export default function Header({ studentName }) {
  const today = new Date();
  const dateFormat = today.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <header className="bg-white w-full shadow px-6 py-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        <h1 className="text-xl font-semibold text-gray-800">
          Welcome, {studentName}!
        </h1>
        <p className="text-gray-500 text-sm mt-1 md:mt-0">{dateFormat}</p>
      </div>
    </header>
  );
}
