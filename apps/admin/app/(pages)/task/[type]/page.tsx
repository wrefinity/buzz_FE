import AddTaskForm from "@/app/components/task/add-task-form";
export default async function NewVideoPage({
  params
}: {
  params: { type: "social" | "video"; };
}) {
  console.log(params.type);
  const actualType = params.type.split('-')[1]

  return (
    <div className="container max-w-4xl py-10 mx-auto">
      <AddTaskForm type={actualType as "social" | "video"}  />
    </div>
  );
}
