
import { useAuth } from '@/contexts/AuthContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { getCurrentShift, getShiftLabel } from '@/utils/shift';
import { Activity, Droplets, Gauge, TrendingUp, AlertTriangle, CheckCircle } from 'lucide-react';

export const Dashboard = () => {
  const { user } = useAuth();
  const currentShift = getCurrentShift();

  return (
    <div className="container mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Operations Dashboard</h1>
          <p className="text-muted-foreground mt-1">Real-time plant monitoring and control</p>
        </div>
        <div className="text-right">
          <Badge variant="default" className="text-base px-4 py-2">
            {getShiftLabel(currentShift)}
          </Badge>
          <p className="text-sm text-muted-foreground mt-2">
            {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Production</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground">0 m³</div>
            <p className="text-xs text-muted-foreground mt-1">Current shift</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Water Supplied</CardTitle>
            <Droplets className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground">0 m³</div>
            <p className="text-xs text-muted-foreground mt-1">High lift pumps</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Plant Uptime</CardTitle>
            <Gauge className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground">0%</div>
            <p className="text-xs text-muted-foreground mt-1">Last 24 hours</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Efficiency</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground">0%</div>
            <p className="text-xs text-muted-foreground mt-1">vs. target</p>
          </CardContent>
        </Card>
      </div>

      {/* Chemical Inventory Status */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Chemical Inventory Status</CardTitle>
            <CardDescription>Current stock levels and alerts</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-8 w-8 text-success" />
                <div>
                  <p className="font-semibold text-foreground">Alum</p>
                  <p className="text-sm text-muted-foreground">Aluminum Sulfate</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-foreground">0 kg</p>
                <Badge variant="success">Normal</Badge>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center gap-3">
                <AlertTriangle className="h-8 w-8 text-warning" />
                <div>
                  <p className="font-semibold text-foreground">Chlorine</p>
                  <p className="text-sm text-muted-foreground">Disinfectant</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-foreground">0 kg</p>
                <Badge variant="warning">Low Stock</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Pump Status */}
        <Card>
          <CardHeader>
            <CardTitle>Pump Operations</CardTitle>
            <CardDescription>Current shift readings</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-foreground">High Lift Pumps (HL1-4)</span>
                <span className="text-lg font-bold text-foreground">0 hrs</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-foreground">Low Lift Pumps (LLF1-2)</span>
                <span className="text-lg font-bold text-foreground">0 hrs</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-foreground">Backwash Pumps (Bw1-2)</span>
                <span className="text-lg font-bold text-foreground">0 hrs</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-foreground">KCB Pump</span>
                <span className="text-lg font-bold text-foreground">0 hrs</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Production Trends Placeholder */}
      <Card>
        <CardHeader>
          <CardTitle>Production Trends</CardTitle>
          <CardDescription>Daily production over the last 7 days</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-64 flex items-center justify-center border-2 border-dashed rounded-lg">
            <p className="text-muted-foreground">Chart visualization will be implemented</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};