// import CommonForm from "@/components/common-form";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { signInFormControls, signUpFormControls } from "@/config";
// import { AuthContext } from "@/context/auth-context";
// import { TabsContent } from "@radix-ui/react-tabs";
// import { GraduationCap } from "lucide-react";
// import { useContext, useState } from "react";
// import { Link } from "react-router-dom";

// export const Auth = () => {
//   const [activeTab, setActiveTab] = useState("SignIn");

//   const {
//     signInFormData,
//     setSignInFormData,
//     signUpFormData,
//     setSignUpFormData,
//   } = useContext(AuthContext);

//   function handleChange(value) {
//     setActiveTab(value);
//   }

//   console.log(signInFormData);
//   console.log(signUpFormData);

//   return (
//     <div className="flex flex-col min-h-screen">
//       <header className="px-4 lg:px-6 h-14 flex items-center border-b">
//         <Link to={"/"} className="flex items-center justify-center">
//           <GraduationCap className="h-8 w-8 mr-4" />
//           <span className="font-extrabold text-xl">StudyWithUs</span>
//         </Link>
//       </header>
//       <div className="flex items-center justify-center min-h-screen bg-background">
//         <Tabs
//           className="w-full max-w-md "
//           value={activeTab}
//           defaultValue="SignIn"
//           onValueChange={handleChange}
//         >
//           <TabsList className="grid w-full grid-cols-2 ">
//             <TabsTrigger value="SignIn"> Sign In</TabsTrigger>
//             <TabsTrigger value="SignUp"> Sign Up</TabsTrigger>
//           </TabsList>
//           <TabsContent value="SignIn">
//             <Card className="p-6 space-y-4">
//               <CardHeader className="text-center">
//                 <CardTitle>Sign in to your account </CardTitle>
//               </CardHeader>
//               <CardContent className="space-y-2">
//                 <CommonForm
//                   formControls={signInFormControls}
//                   buttonText={"Sign In"}
//                   formData={signInFormData}
//                   setSignInFormData={setSignInFormData}
//                 />
//               </CardContent>
//             </Card>
//           </TabsContent>
//           <TabsContent value="SignUp">
//             <Card className="p-6 space-y-4">
//               <CardHeader className="text-center">
//                 <CardTitle>Sign Up to create a new account </CardTitle>
//               </CardHeader>
//               <CardContent className="space-y-2">
//                 <CommonForm
//                   formControls={signUpFormControls}
//                   buttonText={"Sign Up"}
//                   formData={signUpFormData}
//                   setSignUpFormData={setSignUpFormData}
//                 />
//               </CardContent>
//             </Card>
//           </TabsContent>
//         </Tabs>
//       </div>
//     </div>
//   );
// };

import CommonForm from "@/components/common-form";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { signInFormControls, signUpFormControls } from "@/config";
import { AuthContext } from "@/context/auth-context";
import { GraduationCap } from "lucide-react";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";

function AuthPage() {
  const [activeTab, setActiveTab] = useState("signin");
  const {
    signInFormData,
    setSignInFormData,
    signUpFormData,
    setSignUpFormData,
    handleRegisterUser,
    handleLoginUser,
  } = useContext(AuthContext);

  function handleTabChange(value) {
    setActiveTab(value);
  }

  function checkIfSignInFormIsValid() {
    return (
      signInFormData &&
      signInFormData.userEmail !== "" &&
      signInFormData.password !== ""
    );
  }

  function checkIfSignUpFormIsValid() {
    return (
      signUpFormData &&
      signUpFormData.userName !== "" &&
      signUpFormData.userEmail !== "" &&
      signUpFormData.password !== ""
    );
  }

  console.log(signInFormData);
  console.log(signUpFormData);

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center border-b">
        <Link to={"/"} className="flex items-center justify-center">
          <GraduationCap className="h-8 w-8 mr-4" />
          <span className="font-extrabold text-xl">LMS LEARN</span>
        </Link>
      </header>
      <div className="flex items-center justify-center min-h-screen bg-background">
        <Tabs
          value={activeTab}
          defaultValue="signin"
          onValueChange={handleTabChange}
          className="w-full max-w-md"
        >
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="signin">Sign In</TabsTrigger>
            <TabsTrigger value="signup">Sign Up</TabsTrigger>
          </TabsList>
          <TabsContent value="signin">
            <Card className="p-6 space-y-4">
              <CardHeader className="text-center">
                <CardTitle>Sign in to your account </CardTitle>
              </CardHeader>

              <CardContent className="space-y-2">
                <CommonForm
                  formControls={signInFormControls}
                  buttonText={"Sign In"}
                  formData={signInFormData}
                  setFormData={setSignInFormData}
                  isButtonDisabled={!checkIfSignInFormIsValid()}
                  handleSubmit={handleLoginUser}
                />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="signup">
            <Card className="p-6 space-y-4">
              <CardHeader className="text-center">
                <CardTitle>Sign Up to create a new account </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <CommonForm
                  formControls={signUpFormControls}
                  buttonText={"Sign Up"}
                  formData={signUpFormData}
                  setFormData={setSignUpFormData}
                  isButtonDisabled={!checkIfSignUpFormIsValid()}
                  handleSubmit={handleRegisterUser}
                />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export default AuthPage;
