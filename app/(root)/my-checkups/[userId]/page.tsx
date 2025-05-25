import UserSessionsList from "../../_components/UserSessionsList";

interface MyCheckupsProps {
  params: Promise<{ userId: string }>;
}

const MyCheckups = async ({ params }: MyCheckupsProps) => {
  const { userId } = await params;

  return (
    <div>
      <UserSessionsList />
    </div>
  );
};

export default MyCheckups;
