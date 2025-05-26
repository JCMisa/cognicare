import { getCurrentUser } from "@/lib/actions/user.action";
import { getDoctorByDoctorId } from "@/lib/actions/virtualDoctor.action";
import { ClockIcon } from "lucide-react";
import Image from "next/image";
import { redirect } from "next/navigation";
import VirtualDoctorComponent from "./_components/VirtualDoctorComponent";

interface SessionDoctorProps {
  params: Promise<{ doctorId: string }>;
}

const SessionDoctor = async ({ params }: SessionDoctorProps) => {
  const { doctorId } = await params;
  const virtualDoctor: { data: VirtualDoctorType } = await getDoctorByDoctorId(
    doctorId
  );
  const user: { data: UserType } = await getCurrentUser();

  if (!user) redirect("/sign-in");
  if (!virtualDoctor) redirect(`/my-checkups/${user.data.userId}`);

  return (
    <main>
      <article className="flex rounded-lg shadow-lg justify-between p-6 max-md:flex-col">
        <div className="flex items-center gap-2">
          <div className="size-[72px] flex items-center justify-center rounded-lg max-md:hidden">
            <Image
              src={
                virtualDoctor.data.voice === "male"
                  ? "/cogni-male.webp"
                  : virtualDoctor.data.voice === "female"
                  ? "/cogni-female.png"
                  : "/empty-img.png"
              }
              loading="lazy"
              placeholder="blur"
              blurDataURL="/blur.jpg"
              alt="doc-logo"
              width={35}
              height={35}
              className="p-3 rounded-full bg-light-100 dark:bg-dark-100 w-20 h-20"
            />
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <p className="font-bold text-2xl">Dr. Cogni</p>
              <div className="p-2 px-5 rounded-full bg-light-200 dark:bg-dark-200 text-xs max-sm:hidden line-clamp-1">
                {virtualDoctor.data.title}
              </div>
            </div>
            <p className="text-lg line-clamp-1">{virtualDoctor.data.topic}</p>
          </div>
        </div>
        <div className="text-2xl max-md:hidden flex items-center gap-2">
          <ClockIcon /> {virtualDoctor.data.duration} minutes
        </div>
      </article>

      <VirtualDoctorComponent
        virtualDoctor={virtualDoctor.data}
        virtualDoctorId={doctorId}
        userName={user.data.firstName!}
        userImage={user.data.imageUrl!}
        userId={user.data.userId!}
      />
    </main>
  );
};

export default SessionDoctor;
