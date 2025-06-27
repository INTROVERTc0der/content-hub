
import { useState } from "react";
import { Settings as SettingsIcon, User, Bell, Palette, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Settings = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [categories, setCategories] = useState({
    technology: true,
    sports: true,
    entertainment: false,
    finance: true,
  });

  const handleCategoryChange = (category: string, enabled: boolean) => {
    setCategories(prev => ({
      ...prev,
      [category]: enabled
    }));
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center gap-3 mb-8">
        <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-gray-600 to-gray-800 rounded-lg">
          <SettingsIcon className="h-6 w-6 text-white" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
          <p className="text-gray-600">Customize your ContentHub experience</p>
        </div>
      </div>

      <div className="space-y-6">
        {/* Profile Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5" />
              Profile Settings
            </CardTitle>
            <CardDescription>
              Manage your profile information and preferences
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label className="text-base font-medium">John Doe</Label>
                <p className="text-sm text-gray-500">Premium Member</p>
              </div>
              <Button variant="outline">Edit Profile</Button>
            </div>
          </CardContent>
        </Card>

        {/* Content Preferences */}
        <Card>
          <CardHeader>
            <CardTitle>Content Preferences</CardTitle>
            <CardDescription>
              Choose which types of content you want to see
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {Object.entries(categories).map(([category, enabled]) => (
              <div key={category} className="flex items-center justify-between">
                <Label htmlFor={category} className="capitalize font-medium">
                  {category}
                </Label>
                <Switch
                  id={category}
                  checked={enabled}
                  onCheckedChange={(checked) => handleCategoryChange(category, checked)}
                />
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Notifications */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="h-5 w-5" />
              Notifications
            </CardTitle>
            <CardDescription>
              Control how you receive updates
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label className="text-base font-medium">Push Notifications</Label>
                <p className="text-sm text-gray-500">Get notified about trending content</p>
              </div>
              <Switch
                checked={notifications}
                onCheckedChange={setNotifications}
              />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div>
                <Label className="text-base font-medium">Email Digest</Label>
                <p className="text-sm text-gray-500">Weekly summary of your favorite topics</p>
              </div>
              <Switch defaultChecked />
            </div>
          </CardContent>  
        </Card>

        {/* Appearance */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Palette className="h-5 w-5" />
              Appearance
            </CardTitle>
            <CardDescription>
              Customize the look and feel
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label className="text-base font-medium">Dark Mode</Label>
                <p className="text-sm text-gray-500">Switch to dark theme</p>
              </div>
              <Switch
                checked={darkMode}
                onCheckedChange={setDarkMode}
              />
            </div>
          </CardContent>
        </Card>

        {/* Privacy & Security */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              Privacy & Security
            </CardTitle>
            <CardDescription>
              Manage your privacy settings
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button variant="outline" className="w-full">
              Export My Data
            </Button>
            <Button variant="destructive" className="w-full">
              Reset All Preferences
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Settings;
