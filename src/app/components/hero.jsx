import Image from 'next/image'

export default function Hero() {
    return (
        <section className="container mx-auto px-6 py-16 mt-8 w-full flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-3/4 space-y-6">
                <h1 className="text-7xl font-bold leading-tight">Algorithm Visualizer</h1>
                <p className="text-3xl text-muted-foreground">
                    Explore algorithms with step-by-step visualizations,
                    simplifying the learning process and making it more engaging
                    for a better understanding

                </p>
            </div>
            <div className="md:w-1/4">
                <Image
                    src="/images/algorithm.png"
                    alt="Hero image"
                    width={300}
                    height={200}
                    // className="rounded-lg shadow-lg"
                />
            </div>
        </section>
    )
}

