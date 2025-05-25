interface SessionDoctorProps {
  params: Promise<{ doctorId: string }>;
}

const SessionDoctor = async ({ params }: SessionDoctorProps) => {
  const { doctorId } = await params;
  return <div>Doctor ID: {doctorId}</div>;
};

export default SessionDoctor;
