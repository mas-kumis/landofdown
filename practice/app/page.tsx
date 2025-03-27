import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import RegisterForm from "../components/RegisterForm";

export default function Home() {
  return (
    <div className="flex w-screen h-screen items-center justify-center">
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
        </CardHeader>
        <CardContent>
          <RegisterForm />
        </CardContent>
      </Card>
    </div>
  );
}
