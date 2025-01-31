import Container from "@/components/global/container";
import Wrapper from "@/components/global/wrapper";
import { Button } from "@/components/ui/button";
import { generateMetadata } from "@/utils";
import { ArrowLeftIcon } from "lucide-react";
import Link from 'next/link';

export const metadata = generateMetadata({
    title: "404",
    description: "The page you're looking for doesn't exist or has been moved.",
    noIndex: true,
});

const NotFoundPage = () => {
    return (
        <main className="relative flex flex-col items-center justify-center px-4 h-dvh">
            <Wrapper>
                <Container className="flex flex-col items-center justify-center mx-auto py-16">
                    <div className="flex items-center justify-center h-full flex-col">
                        <span className="text-sm px-3.5 py-1 rounded-md bg-gradient-to-br from-sky-400 to-blue-600 text-neutral-50 custom-shadow">
                            404
                        </span>
                        <h1 className="text-3xl md:text-5xl font-bold mt-5">
                            Not Found
                        </h1>
                        <p className="text-base text-muted-foreground mt-5 text-center mx-auto max-w-xl">
                            This page doesn&apos;t exist. Please check the URL and try again.
                        </p>
                        <Link href="/">
                            <Button variant="subtle" className="mt-8">
                                <ArrowLeftIcon className="size-4" />
                                Back
                            </Button>
                        </Link>
                    </div>
                </Container>
            </Wrapper>
        </main>
    )
};

export default NotFoundPage;
