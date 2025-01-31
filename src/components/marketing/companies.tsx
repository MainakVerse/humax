import Slider from "../global/slider";
import Container from "../global/container";


const Companies = () => {
    return (
        <div className="relative flex flex-col items-center justify-center w-full py-20 mt-16 companies overflow-hidden">
            <Container>
                <div className="flex flex-col items-center justify-center">
                    <h4 className="text-2xl lg:text-4xl font-medium">
                        Trusted by <span className="font-subheading italic">leading</span> brands
                    </h4>
                </div>
            </Container>

            <Container delay={0.1}>
                <Slider />
            </Container>
        </div>
    )
};

export default Companies
