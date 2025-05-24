declare interface UserType {
  id: number;
  userId: string;
  firstName: string;
  lastName: string;
  email: string;
  imageUrl: string;
  role: string;
  subscriptionId: string;
  createdAt: Date;
  updatedAt: Date;
}

declare interface VirtualDoctorType {
  id: number;
  doctorId: string;
  userId: string;
  name: string;
  title: string;
  topic: string;
  style: string;
  voice: string;
  duration: number;
  createdAt: Date;
  updatedAt: Date;
}

declare interface SessionType {
  id: number;
  sessionId: string;
  doctorId: string;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
}
