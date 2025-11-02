import { CompetencyCard } from "@/components/CompetencyCard";
import { AIAssistant } from "@/components/AIAssistant";
import { ProgressOverview } from "@/components/ProgressOverview";
import { ResourceCard } from "@/components/ResourceCard";
import { Brain, MessageCircle, Lightbulb, Users, Globe, Wrench, Heart } from "lucide-react";

const Index = () => {
  const competencies = [
    {
      title: "Communication & Collaboration",
      progress: 75,
      icon: MessageCircle,
      color: "bg-primary",
      description: "Speaking, listening, and working together",
    },
    {
      title: "Critical Thinking & Problem Solving",
      progress: 62,
      icon: Brain,
      color: "bg-secondary",
      description: "Analyzing and solving challenges",
    },
    {
      title: "Creativity & Imagination",
      progress: 80,
      icon: Lightbulb,
      color: "bg-accent",
      description: "Creating new ideas and solutions",
    },
    {
      title: "Citizenship",
      progress: 55,
      icon: Users,
      color: "bg-info",
      description: "Understanding community and rights",
    },
    {
      title: "Digital Literacy",
      progress: 70,
      icon: Globe,
      color: "bg-warning",
      description: "Using technology safely and effectively",
    },
    {
      title: "Learning to Learn",
      progress: 65,
      icon: Wrench,
      color: "bg-success",
      description: "Self-management and reflection",
    },
    {
      title: "Self-Efficacy",
      progress: 58,
      icon: Heart,
      color: "bg-secondary",
      description: "Confidence and self-belief",
    },
  ];

  const resources = [
    {
      title: "Understanding Number Patterns",
      type: "video" as const,
      subject: "Mathematics",
      duration: "15 min",
      difficulty: "beginner" as const,
    },
    {
      title: "Kenyan Heroes and Leaders",
      type: "article" as const,
      subject: "Social Studies",
      duration: "10 min",
      difficulty: "intermediate" as const,
    },
    {
      title: "Plant Growth Experiment",
      type: "exercise" as const,
      subject: "Science",
      duration: "30 min",
      difficulty: "beginner" as const,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="gradient-primary text-white shadow-elegant">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">Jielimishe AI</h1>
              <p className="text-sm opacity-90 mt-1">Your CBC Learning Companion</p>
            </div>
            <div className="text-right">
              <p className="text-sm opacity-90">Welcome back,</p>
              <p className="text-lg font-semibold">Student</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Progress Overview */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-foreground">Your Progress</h2>
          <ProgressOverview />
        </section>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Competencies Section */}
          <section className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-4 text-foreground">CBC Competencies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {competencies.map((competency, index) => (
                <CompetencyCard key={index} {...competency} />
              ))}
            </div>

            {/* Resources Section */}
            <div className="mt-8">
              <h2 className="text-2xl font-bold mb-4 text-foreground">Recommended Resources</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {resources.map((resource, index) => (
                  <ResourceCard key={index} {...resource} />
                ))}
              </div>
            </div>
          </section>

          {/* AI Assistant Section */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">AI Assistant</h2>
            <AIAssistant />
          </section>
        </div>
      </main>
    </div>
  );
};

export default Index;
