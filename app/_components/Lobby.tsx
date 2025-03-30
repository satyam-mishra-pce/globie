'use client';

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Lobby() {

  return (
    <div className="min-h-screen flex items-center justify-center bg-background ">
        <div className="bg-card rounded-3xl border shadow-lg w-full max-w-md mx-4 overflow-hidden">

        <Image 
          src={'/assets/taj-mahal.jpg'}
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
              Embark on a global journey to discover iconic monuments. Navigate the world map, locate historical landmarks, and learn fascinating stories about these architectural marvels.
            </p>
          </div>

          <Link href="/explore/monuments">
            <Button 
              size="lg"
              className="w-full rounded-full"
          >
            Start Exploring
          </Button>
          </Link>
        </div>
        </div>
      </div>
  );
}
