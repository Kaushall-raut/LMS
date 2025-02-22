import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TabsContent } from "@radix-ui/react-tabs";
import { GraduationCap } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Auth = () => {
  const [activeTab, setActiveTab] = useState("SignIn");

  function handleChange(value) {
    setActiveTab(value);
  }
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center border-b">
        <Link to={"/"} className="flex items-center justify-center">
          <GraduationCap className="h-8 w-8 mr-4" />
          <span className="font-extrabold text-xl">StudyWithUs</span>
        </Link>
      </header>
      <div className="flex items-center justify-center min-h-screen bg-background">
        <Tabs
          className="w-full max-w-md "
          value={activeTab}
          defaultValue="SignIn"
          onValueChange={handleChange}
        >
          <TabsList className="grid w-full grid-cols-2 ">
            <TabsTrigger value="SignIn"> Sign In</TabsTrigger>
            <TabsTrigger value="SignUp"> Sign Up</TabsTrigger>
          </TabsList>
          <TabsContent value="SignIn">in</TabsContent>
          <TabsContent value="SignUp">up</TabsContent>
        </Tabs>
      </div>
    </div>
  );
};
