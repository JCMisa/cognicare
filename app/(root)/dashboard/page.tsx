import AllSessionsList from "../_components/AllSessionsList";
import DataCards from "../_components/DataCards";
import UserSessionsList from "../_components/UserSessionsList";

const DashboardPage = () => {
  return (
    <main className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <section className="flex flex-col gap-6 w-full col-span-2">
        <DataCards />
        <UserSessionsList />
      </section>

      <AllSessionsList />
    </main>
  );
};

export default DashboardPage;
