import SubjectList from "./components/subject-list";


function App() {
  return (
    <div className="overflow-y-auto flex gap-5 flex-col justify-center items-start w-full h-screen px-10">
      <h1 className="pr-10 bg-white text-center text-3xl font-bold underline">
        Lista de Actividades
      </h1>
      <div className="py-5 overflow-y-auto w-full flex flex-col gap-2">
        <SubjectList name="SOCIALES" />
      </div>
    </div>
  );
}

export default App;
