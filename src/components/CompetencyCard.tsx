import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { LucideIcon } from "lucide-react";

interface CompetencyCardProps {
  title: string;
  progress: number;
  icon: LucideIcon;
  color: string;
  description: string;
}

export const CompetencyCard = ({ title, progress, icon: Icon, color, description }: CompetencyCardProps) => {
  return (
    <Card className="hover:shadow-elegant transition-all duration-300 border-2">
      <CardHeader className="pb-3">
        <div className="flex items-start gap-3">
          <div className={`p-3 rounded-xl ${color}`}>
            <Icon className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <CardTitle className="text-lg font-semibold">{title}</CardTitle>
            <p className="text-sm text-muted-foreground mt-1">{description}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Progress</span>
            <span className="font-semibold text-foreground">{progress}%</span>
          </div>
          <Progress value={progress} className="h-2.5" />
        </div>
      </CardContent>
    </Card>
  );
};
