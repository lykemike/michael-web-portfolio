import { Card, CardContent } from "@/components/ui/card";
import GlobeComponent from "./Globe";
import Link from "next/link";
import Image from "next/image";

export function AviationSection() {
  return (
    <div>
      <div className="mb-6 mt-6">
        <h2 className="text-2xl font-semibold text-foreground mb-1">
          Aviation & Travel
        </h2>
        <p className="text-sm text-muted-foreground">
          Exploring the world and aviation passion
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Travel Map */}

        <Card className="relative overflow-hidden shadow-none border border-gray-400 hover:border-red-500 transition-colors duration-300 group">
          <Link href="/travel">
            <CardContent className="p-6 relative z-10">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">
                    Countries I visited
                  </h3>
                  <p className="text-sm text-white">My travel adventures</p>
                </div>
                <div className="text-white">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="transition-all duration-300 group-hover:stroke-red-500 group-hover:translate-x-1 group-hover:-translate-y-1"
                  >
                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </div>
              </div>
            </CardContent>

            <div className="absolute inset-0 z-0">
              <GlobeComponent />
            </div>

            <div className="absolute inset-0 bg-black/30 z-0"></div>
          </Link>
        </Card>

        {/* Favorite Aircraft */}
        <Card className="relative overflow-hidden shadow-none border border-gray-400 hover:border-red-500 transition-colors duration-300 group">
          <Link href="#">
            <CardContent className="p-6 relative z-10">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">
                    Favorite Aircraft
                  </h3>
                  <p className="text-white text-sm">Airbus A330-300</p>
                </div>
                <div className="text-white">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="transition-all duration-300 group-hover:stroke-red-500 group-hover:translate-x-1 group-hover:-translate-y-1"
                  >
                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </div>
              </div>
            </CardContent>

            <div className="absolute inset-0 z-0">
              <div className="relative w-full h-full">
                <Image
                  src="/lifestyle/a330-1.jpg"
                  alt="Airbus A330-300"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 50vw, 100vw"
                  priority={false}
                />
              </div>
            </div>

            <div className="absolute inset-0 bg-black/40 z-0"></div>
          </Link>
        </Card>
      </div>
    </div>
  );
}
