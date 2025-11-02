import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Award, Target } from "lucide-react";

export const ProgressOverview = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Card className="border-2 hover:shadow-elegant transition-all duration-300">
        <CardHeader className="pb-3">
          <CardTitle className="text-sm font-medium text-muted-foreground">Overall Progress</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-primary">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-3xl font-bold text-foreground">68%</p>
              <p className="text-xs text-muted-foreground">+12% this month</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 hover:shadow-elegant transition-all duration-300">
        <CardHeader className="pb-3">
          <CardTitle className="text-sm font-medium text-muted-foreground">Achievements</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-accent">
              <Award className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-3xl font-bold text-foreground">24</p>
              <p className="text-xs text-muted-foreground">Badges earned</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 hover:shadow-elegant transition-all duration-300">
        <CardHeader className="pb-3">
          <CardTitle className="text-sm font-medium text-muted-foreground">Active Goals</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-secondary">
              <Target className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-3xl font-bold text-foreground">5</p>
              <p className="text-xs text-muted-foreground">2 due this week</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
