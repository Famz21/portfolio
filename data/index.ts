export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building AI Medical Q&A Agentic RAG",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Want to see my professional background?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Khmer Speech Recognition",
    des: "Upload an audio file or record your voice to get the transcription in Khmer-English.",
    img: "/Khmer ASR.webp",
    iconLists: [
      "PyTorch_logo_icon.svg",
      "/hf-logo.svg",
      "/icons8-python.svg",
      "/gradio.svg",
    ],
    link: "https://huggingface.co/spaces/Vira21/Whisper-Small-Khmer", // Correct link
  },
  {
    id: 2,
    title: "Legal AI Risk Management",
    des: "Created an AI Risk Chatbot to educate 50 teams on AI risks, ethics, and mitigation, fostering responsible AI adoption and cross-team collaboration.",
    img: "/RAG Application.png",
    iconLists: [
      "/logos--qdrant.svg",
      "/langchain-color (1).svg",
      "/openai-svgrepo-com.svg",
      "/chainlit.svg",
      "/hf-logo.svg",
    ],
    link: "https://github.com/Famz21/Legal-AI-Risk-Management", // Correct link
  },
  {
    id: 3,
    title: "AI Data Analysis : Text-to-SQL",
    des: "Built an AI tool using dynamic databases for text-to-SQL and text-to-chart outputs, enabling quick insights and efficient data visualization.",
    img: "/Text-toSQL.webp",
    iconLists: [
      "/logos--qdrant.svg",
      "/openai-svgrepo-com.svg",
      "/chainlit.svg",
      "/icons8-python.svg",
      "/postgresql-logo-svgrepo-com.svg",
    ],
    link: "https://github.com/Famz21/AI-Data-Analysis-", // Fixed: Absolute URL
  },
  {
    id: 4,
    title: "AI Medical Q&A Agentic RAG",
    des: "Developed a medical Q&A app with Gemini, Next.js, Pinecone, and Shadcn/ui, leveraging RAG to analyze medical reports and deliver personalized healthcare insights.",
    img: "/AI Medical.webp",
    iconLists: [
      "/next.svg",
      "/tail.svg",
      "/ts.svg",
      "/langchain-color (1).svg",
      "/Google_Gemini_logo.svg",
    ],
    link: "https://github.com/Famz21/AI-Medical-Agentic-RAG-System", // Fixed: Absolute URL
  },
  {
  id: 4,
  title: "Multi-Agent RAG Marketing Content Enhancer",
  des: "The Multi-Agent RAG platform drafts, edits, cites, and adapts, ensuring accurate content with future visual and scalable features.",
  img: "/Multi-Agent RAG Marketing Content Enhancer.webp", // Ensure you have this image in your public folder
  link: "https://github.com/Famz21/Agentic-Marketing-Content-Enhancer",
  iconLists: [
    "/langchain-color (1).svg", // Ensure these icons are in your public folder
    "/chainlit.svg",
    "/icons8-python.svg",
    "/hf-logo.svg",
    "/openai-svgrepo-com.svg",
    "/logos--qdrant.svg"
  ],
},
{
  id: 5,
  title: "AI-Driven Threat Detection",
  des: "MLOps-based network security model detects threats (intrusions, malware, anomalies). Uses MLFlow, Dagshub, GitHub Actions, Docker, and AWS for scalable, automated deployment and real-time analysis.",
  img: "/MLOps.png", // Ensure you have this image in your public folder
  link: "https://github.com/Famz21/SecuMLOps-AI-Driven-Threat-Detection",
  iconLists: [
    "/icons8-python.svg",
    "/AWS.svg",
    "/dock.svg",
    "/MongoDB.svg",
    "/mlflow.svg",
    "/GitHub Actions.svg"
  ],
},
];

export const testimonials = [];

export const companies = [
  {
    id: 1,
    name: "Python",
    img: "/icons8-python.svg", // Replace with the path to Python logo
  },
  {
    id: 2,
    name: "PyTorch",
    img: "/PyTorch_logo_icon.svg", // Replace with the path to PyTorch logo
  },
  {
    id: 4,
    name: "Hugging Face",
    img: "/hf-logo.svg", // Replace with the path to Hugging Face logo
  },
  {
    id: 5,
    name: "Docker",
    img: "/dock.svg",
  },
  {
    id: 6,
    name: "OpenAI",
    img: "/openai-svgrepo-com.svg", // Replace with the path to OpenAI logo
  },
  {
    id: 7,
    name: "Next.js",
    img: "/next.svg", // Replace with the path to MLflow logo
  },
  {
    id: 11,
    name: "AWS",
    img: "/AWS.svg", // Replace with the path to AWS logo
  },
  {
    id: 12,
    name: "Power BI",
    img: "/powerbi.png", // Replace with the path to Power BI logo
  },
  {
    id: 15,
    name: "Git",
    img: "/git.png", // Replace with the path to Apache Airflow logo
  },
  {
    id: 16,
    name: "Postgres",
    img: "/postgres.png", // Replace with the path to Apache Kafka logo
  },
  {
    id: 19,
    name: "FastAPI",
    img: "/fastapi.png", // Replace with the path to Ansible logo
  },
  {
    id: 20,
    name: "Kubernetes",
    img: "/Kubernetes.svg", // Replace with the path to Kubernetes logo
  },
  {
    id: 21,
    name: "Type Script",
    img: "/ts.svg", // Replace with the path to Jenkins logo
  },
  {
    id: 22,
    name: "Tailwind css",
    img: "/tail.svg", // Replace with the path to NGINX logo
  },
  {
    id: 23,
    name: "Langchain",
    img: "/langchain-color (1).svg", // Replace with the path to Flutter logo
  },
  {
    id: 24,
    name: "MLFLOW",
    img: "/mlflow.svg", // Replace with the path to Vue.js logo
  },
  {
    id: 25,
    name: "QDrant",
    img: "/logos--qdrant.svg", // Replace with the path to Laravel logo
  },
  {
    id: 26,
    name: "Azure",
    img: "/Azure.svg", // Replace with the path to Node.js logo
  },
  {
    id: 27,
    name: "Chainlit",
    img: "/chainlit.svg",
  },
  {
    id: 28,
    name: "Gradio",
    img: "/gradio.svg",
  },
  {
    id: 29,
    name: "Jenkins",
    img: "/Jenkins.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "AI Engineer",
    desc: "Hands-on experience in building AI agentic systems, specializing in developing AI-driven solutions for data analysis, speech recognition, and machine learning. Focused on creating tools that enable efficient data visualization, accurate speech-to-text conversion, and precise forecasting models.",
    company: "DataTicon",
    duration: "02/2024-Present", // Current experience
    className: "md:col-span-2",
    thumbnail: "/DataTicon.png",
  },
  {
    id: 2,
    title: "Data Specialist",
    desc: "Specialized in data warehousing, AI-powered sales analysis, and hazard vulnerability analysis. Built tools for data transformation, sales forecasting, and risk assessment.",
    company: "DataU Academy",
    duration: "08/2023 - 01/2024", // Past experience
    className: "md:col-span-2",
    thumbnail: "/DataU_Academy.png",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/Famz21",
  },
  {
    id: 2,
    img: "/huggingface.svg",
    link: "https://huggingface.co/Vira21",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/rithyvira/",
  },
];
