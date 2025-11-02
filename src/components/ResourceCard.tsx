import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, PlayCircle, FileText, ExternalLink } from "lucide-react";

interface ResourceCardProps {
  title: string;
  type: "video" | "article" | "exercise";
  subject: string;
  duration: string;
  difficulty: "beginner" | "intermediate" | "advanced";
}

export const ResourceCard = ({ title, type, subject, duration, difficulty }: ResourceCardProps) => {
  const icons = {
    video: PlayCircle,
    article: FileText,
    exercise: BookOpen,
  };

  const colors = {
    beginner: "bg-success text-white",
    intermediate: "bg-warning text-white",
    advanced: "bg-secondary text-white",
  };

  const Icon = icons[type];

  return (
    <Card className="border-2 hover:shadow-elegant transition-all duration-300">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-primary/10">
              <Icon className="w-5 h-5 text-primary" />
            </div>
            <Badge variant="outline" className="text-xs">
              {subject}
            </Badge>
          </div>
          <Badge className={`${colors[difficulty]} text-xs`}>{difficulty}</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <CardTitle className="text-base font-semibold mb-3">{title}</CardTitle>
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">{duration}</span>
          <Button size="sm" variant="ghost" className="gap-2">
            Start
            <ExternalLink className="w-3 h-3" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
