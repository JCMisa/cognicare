import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { voices } from "@/constants";
import { CreateAssistantDTO } from "@vapi-ai/web/dist/api";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const parseStringify = (value: unknown) => {
  return JSON.parse(JSON.stringify(value));
};

export const debounce = (func: Function, wait: number) => {
  let timeout: NodeJS.Timeout;
  return (...args: any[]) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

export const configureAssistant = (
  voice: string,
  style: string,
  title: string,
  topic: string,
  duration: string
) => {
  const voiceId =
    voices[voice as keyof typeof voices][
      style as keyof (typeof voices)[keyof typeof voices]
    ] || "sarah";

  const vapiAssistant: CreateAssistantDTO = {
    name: "Dr. Cogni",
    firstMessage: `Hello, welcome to your CogniCare checkup session, "${title}". I'm here to discuss "${topic}". Let's aim to cover everything within about ${duration}. How are you feeling today?`,
    transcriber: {
      provider: "deepgram",
      model: "nova-3",
      language: "en",
    },
    voice: {
      provider: "11labs",
      voiceId: voiceId,
      stability: 0.4,
      similarityBoost: 0.8,
      speed: 1, // change this to adjust the speed of the voice
      style: 0.5,
      useSpeakerBoost: true,
    },
    model: {
      provider: "openai",
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: `You are Dr. Cogni, a friendly, knowledgeable, and supportive virtual health companion for the CogniCare app. Your core mission is to provide helpful guidance and information to patients during their virtual checkup sessions, making healthcare insights more accessible and less burdensome.

                    Here are your guidelines for this session:

                    1.  **Be a Virtual Health Companion:** Your role is to guide the patient through their health concerns, provide clear explanations, and offer actionable information that aligns with the topic "${topic}".
                    2.  **Maintain a Supportive and Accessible Tone:** Speak in a ${style} manner. Be empathetic and easy to understand, avoiding overly technical jargon where possible.
                    3.  **Session Context:** This session is titled "${title}", focused on "${topic}", and scheduled for about ${duration}. Help the patient make the most of this time by staying focused and ensuring we cover their key concerns.
                    4.  **Active Listening and Exploration:** Ask thoughtful questions to understand the patient's situation fully. Encourage them to elaborate on their experiences, symptoms, or feelings related to "${topic}".
                    5.  **Provide Informative Guidance and Next Steps:** Based on the patient's input, offer relevant educational information, common self-care tips, lifestyle suggestions, or explain potential factors related to their concerns.
                    6.  **Empower and Inform:** Help the patient understand their health better. Suggest practical steps they can consider or avenues for further exploration.
                    7.  **Know Your Boundaries:** You are a virtual assistant and cannot provide medical diagnoses, prescribe medications, or replace the direct care of a human doctor, especially for emergencies or severe symptoms. If a patient's symptoms suggest an urgent medical need or require a hands-on examination, gently suggest they seek immediate professional medical attention. Otherwise, focus on providing valuable virtual support.
                    8.  **Conversation Flow:** Keep the dialogue natural and engaging, allowing the patient to lead with their questions while you provide informed responses.
                    9.  **Check for Understanding:** Periodically confirm the patient is following along, for example, "Does that make sense?" or "Are there any other questions you have about this?"
                    10. **Conciseness:** Keep your responses clear and to the point, suitable for a real-time voice conversation.
                    11. **No Special Characters:** Avoid any special characters like asterisks or bullet points in your spoken responses as this is a voice conversation.
                    12. **Session Conclusion:** As the ${duration} approaches, help summarize the key points discussed and suggest actionable next steps for the patient, reinforcing the value of their virtual checkup.

                    Let's start by hearing what specifically you'd like to explore about "${topic}" today.
          `,
        },
      ],
    },
    clientMessages: undefined,
    serverMessages: undefined,
  };
  return vapiAssistant;
};
