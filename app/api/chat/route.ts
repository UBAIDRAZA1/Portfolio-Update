// app/api/chat/route.ts
import { StreamingTextResponse, Message } from 'ai';
import { NextRequest } from 'next/server';

// Define the client information as constants
const CLIENT_INFO = {
  name: "Muhammad Ubaid Raza",
  email: "ubaidraza3657767@gmail.com",
  phone: "+92 316-3657767",
  location: "Karachi, Pakistan",
  dob: "06-02-2002",
  linkedin: "/in/muhammad-ubaid-raza-21b8503002",
  github: "/UBAIDRAZA1",
  portfolio: "nutri-track-ai.netlify.app",
  objective: "Motivated Software Engineering undergraduate with strong skills in web development and modern technologies including AI, Web 3.0, and cloud-based applications. Passionate about building efficient, user-friendly solutions and eager to contribute to a professional team while continuously learning and growing.",
  education: [
    { degree: "BS Software Engineering", institution: "Ilma University, Karachi", details: "CGPA 3.4, In Progress" },
    { degree: "Intermediate (Pre-Engineering)", institution: "BIEK, Karachi", details: "B Grade" },
    { degree: "Matriculation (Computer Science)", institution: "BSEK, Karachi", details: "A Grade" }
  ],
  religiousQualification: [
    { course: "Darse Nizami (Alim Course, 8 years program)", institution: "Board of Kanzul Madaris", details: "7th year completed" },
    { course: "Hifzul Quran ul Karim (Hafiz)", institution: "Madarsa tul Madina", details: "" }
  ],
  certifications: [
    { title: "Certified AI, Metaverse & Web 3.0 Developer", issuer: "Governor House Karachi", details: "Quarter 4 in progress" },
    { title: "CIT Web Development", issuer: "IOBM, NAVTTC", details: "3 months, 2024 - HTML, CSS, JavaScript, MySQL, Bootstrap" }
  ],
  experience: [
    { role: "Web Developer Intern", company: "Arch Technology", duration: "2 months" }
  ],
  projects: [
    { name: "E-commerce (Chairy)", description: "Furniture e-commerce, library stool chair, recliner, modern UI", url: "https://e-commerce-ur.netlify.app" },
    { name: "Nutri Track AI", description: "AI-powered nutrition tracker, smart recommendations", url: "https://nutri-tracks-ai.netlify.app" },
    { name: "Task Master (Todo + Chatbot)", description: "Todo app with integrated AI chatbot assistant", url: "https://todo-app-chatboot.vercel.app" },
    { name: "Physical AI & Humanoid Robotics", description: "3D robotics simulation, humanoid control interface", url: "https://physical-ai-humanoid-robotics-ubaid.vercel.app" },
    { name: "Perfume & Watch Collection", description: "Luxury products: chain/leather straps watches, perfumes, earbuds", url: "https://next-js-website-ubaid.netlify.app/components/project08" },
    { name: "Urdu Literature Hub (Urdu Books + Urdu Bazar)", description: "Platform to buy/sell Urdu literature", url: "https://next-js-website-ubaid.netlify.app/components/project06" }
  ]
};

export async function POST(req: NextRequest) {
  try {
    // Extract the `messages` from the body of the request
    const { messages }: { messages: Message[] } = await req.json();

    // Format the arrays for the prompt
    const educationStr = CLIENT_INFO.education.map(edu =>
      `- ${edu.degree} from ${edu.institution} (${edu.details})`
    ).join('\n');

    const religiousQualificationStr = CLIENT_INFO.religiousQualification.map(rel =>
      `- ${rel.course} from ${rel.institution} (${rel.details})`
    ).join('\n');

    const certificationsStr = CLIENT_INFO.certifications.map(cert =>
      `- ${cert.title} from ${cert.issuer} (${cert.details})`
    ).join('\n');

    const experienceStr = CLIENT_INFO.experience.map(exp =>
      `- ${exp.role} at ${exp.company} (${exp.duration})`
    ).join('\n');

    const projectsStr = CLIENT_INFO.projects.map(proj =>
      `- ${proj.name}: ${proj.description} (Link: ${proj.url})`
    ).join('\n');

    // Create the system message with the client's information
    const systemMessage = `
      You are Proto, an AI assistant for Muhammad Ubaid Raza. Your personality is friendly, knowledgeable, and slightly humorous.
      Respond to the user's query based on the following information about Ubaid:

      Name: ${CLIENT_INFO.name}
      Email: ${CLIENT_INFO.email}
      Phone: ${CLIENT_INFO.phone}
      Location: ${CLIENT_INFO.location}
      Date of Birth: ${CLIENT_INFO.dob}
      LinkedIn: ${CLIENT_INFO.linkedin}
      GitHub: ${CLIENT_INFO.github}
      Portfolio: ${CLIENT_INFO.portfolio}

      Objective: ${CLIENT_INFO.objective}

      Education:
      ${educationStr}

      Religious Qualification:
      ${religiousQualificationStr}

      Certifications:
      ${certificationsStr}

      Experience:
      ${experienceStr}

      Projects:
      ${projectsStr}

      Guidelines:
      - Respond primarily in English, with occasional Hinglish terms as appropriate
      - Keep responses concise but informative
      - If asked about projects, provide details and links
      - Maintain a respectful tone that reflects Ubaid's religious background
      - Add slight humor where appropriate
      - If you don't know something, say so politely
      - Keep responses conversational like WhatsApp messages
      - Use emojis appropriately to make it more engaging
    `;

    // Simple response based on the user's message
    const userMessage = messages[messages.length - 1]?.content || '';
    let responseText = "I'm Proto, your AI assistant for Muhammad Ubaid Raza. How can I help you today?";

    // More conversational responses with WhatsApp-like tone
    const lowerUserMessage = userMessage.toLowerCase();

    if (lowerUserMessage.includes('hello') || lowerUserMessage.includes('hi') || lowerUserMessage.includes('assalam')) {
      responseText = "Wa alaykum assalam! 👋 Hello there! How can I assist you today?";
    } else if (lowerUserMessage.includes('project')) {
      responseText = `Bhai yeh hai kuch projects par jo Ubaid ne kaam kiya hai:\n\n${projectsStr}\n\nAgar koi specific project dekhna hai to bata dijie ga!`;
    } else if (lowerUserMessage.includes('education') || lowerUserMessage.includes('study') || lowerUserMessage.includes('qualification')) {
      responseText = `Yeh dekhiye Ubaid ki educational background:\n\n${educationStr}\n\nReligious qualification:\n${religiousQualificationStr}\n\nHafiz-e-Quran bhi hain!`;
    } else if (lowerUserMessage.includes('contact') || lowerUserMessage.includes('email') || lowerUserMessage.includes('phone') || lowerUserMessage.includes('call')) {
      responseText = `Agar aap Ubaid se baat karni chahte hain to yeh contact details hain:\n\n📧 Email: ${CLIENT_INFO.email}\n📱 Phone: ${CLIENT_INFO.phone}\n📍 Location: ${CLIENT_INFO.location}\n\nMessage jarur kijiye ga!`;
    } else if (lowerUserMessage.includes('skill') || lowerUserMessage.includes('technology') || lowerUserMessage.includes('tech')) {
      responseText = "Bhai Ubaid AI, Web 3.0, aur modern web development technologies mein expert hain. Next.js, TypeScript, aur aur bhi tools use karte hain.\n\nEfficient aur user-friendly solutions banane ka dil hai!";
    } else if (lowerUserMessage.includes('name') || lowerUserMessage.includes('tumhara') || lowerUserMessage.includes('tera')) {
      responseText = "Main Proto hoon, Ubaid ka AI assistant. Aap mujhse koi bhi sawal pooch sakte hain! 😊";
    } else if (lowerUserMessage.includes('thank') || lowerUserMessage.includes('shukriya') || lowerUserMessage.includes('dhanyavaad')) {
      responseText = "Khush rehna! 😊 Agar aur kuch puchna ho to pocho, main hamesha yahan hun!";
    } else if (lowerUserMessage.includes('how are you') || lowerUserMessage.includes('kaisa hai') || lowerUserMessage.includes('kaise ho')) {
      responseText = "Main bilkul theek hun! Aap bataiye kaise madad kar sakta hun? 🤗";
    } else {
      responseText = "Wa alaykum assalam! 😊 Main Proto hoon, Ubaid ka AI assistant.\n\nAap mujhse unke projects, education, skills ya contact information ke baare me poch sakte hain.\n\nKuch aur bhi puchna hai?";
    }

    // Create a simple stream with the response
    const textStream = new ReadableStream({
      start(controller) {
        controller.enqueue(responseText);
        controller.close();
      }
    });

    return new StreamingTextResponse(textStream);
  } catch (error) {
    console.error('Error in chat API:', error);

    // Create a fallback stream
    const errorStream = new ReadableStream({
      start(controller) {
        controller.enqueue("Sorry, I'm having trouble processing your request right now.");
        controller.close();
      }
    });

    return new StreamingTextResponse(errorStream);
  }
}