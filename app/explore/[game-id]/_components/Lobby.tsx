'use client';

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Lobby() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center bg-background ">
        <div className="bg-card rounded-3xl border shadow-lg w-full max-w-md mx-4 overflow-hidden">

        <Image 
          src={'/assets/lobby.jpg'}
          height={1000}
          width={1000}
          alt="Background"
          className="w-full h-[300px] object-cover object-center rounded-xl [mask-image:linear-gradient(to_bottom,black_40%,transparent_100%)]"
          priority
        />
      <div className="p-2 flex flex-col gap-2">
          
          <div className="text-center space-y-2">
            <h1 className="text-2xl font-bold">Monuments</h1>
            <p className="text-muted-foreground text-sm">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam culpa optio molestias provident unde fuga saepe numquam veritatis, voluptatem nihil, eum nesciunt neque fugiat tempora. Illum repellat illo iure cum.
            </p>
          </div>

          <Button 
            size="lg"
            className="w-full rounded-full"
            onClick={() => router.push('/play')}
          >
            Start Game
          </Button>
        </div>
        </div>
      </div>
  );
}
