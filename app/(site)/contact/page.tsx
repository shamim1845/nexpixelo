import ContactForm from "@/components/ContactForm";
import Image from "next/image";

export const metadata = {
    title: "Contact Us | Nexpixelo",
    description: "Get in touch with us for your next project. We'd love to hear from you!",
};

export default function ContactPage() {
    return (
        <main className="min-h-screen pt-32 pb-20 md:pt-40 md:pb-28  relative overflow-hidden" style={{
            background: "linear-gradient(180deg, #E4E3FF 0%, #FFE6F9 43.27%, #FFFFFF 100%)",
        }}>
            {/* Top Hero Section */}
            <div className="content_container relative pb-20 lg:pb-32">
                <div className="flex flex-col lg:flex-row items-start justify-between gap-10">
                    <div className="w-full md:w-[300px] flex flex-col items-start gap-32 pt-10">
                        <p className="text-gray-400 font-semibold text-[20px] md:text-[24px]  uppercase tracking-widest">Contact</p>
                        <div className="pl-10">
                            {/* Star Icon */}
                            <svg width="91" height="91" viewBox="0 0 91 91" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M44.3643 0.847614C44.5135 0.34611 44.9757 0 45.5 0C46.0243 0 46.4865 0.34611 46.6357 0.847614C46.6357 0.847614 48.7143 7.81509 50.9422 15.2882C54.4922 27.1943 63.8057 36.5078 75.7118 40.0578C83.1849 42.2857 90.1524 44.3643 90.1524 44.3643C90.6539 44.5135 91 44.9757 91 45.5C91 46.0243 90.6539 46.4865 90.1524 46.6357C90.1524 46.6357 83.1849 48.7143 75.7118 50.9422C63.8057 54.4922 54.4922 63.8057 50.9422 75.7118C48.7143 83.1849 46.6357 90.1524 46.6357 90.1524C46.4865 90.6539 46.0243 91 45.5 91C44.9757 91 44.5135 90.6539 44.3643 90.1524C44.3643 90.1524 42.2857 83.1849 40.0578 75.7118C36.5078 63.8057 27.1943 54.4922 15.2882 50.9422C7.8151 48.7143 0.847614 46.6357 0.847614 46.6357C0.346079 46.4865 0 46.0243 0 45.5C0 44.9757 0.346079 44.5135 0.847614 44.3643C0.847614 44.3643 7.8151 42.2857 15.2882 40.0578C27.1943 36.5078 36.5078 27.1943 40.0578 15.2882C42.2857 7.81509 44.3643 0.847614 44.3643 0.847614Z" fill="black" />
                            </svg>

                        </div>
                    </div>

                    <div className="flex-1">
                        <h1 className="text-[clamp(2.5rem,7vw,110px)] font-daysOne leading-[1] text-black max-w-5xl">
                            Let&apos;s Turn Your Idea Into Action — Contact Us Now
                        </h1>
                    </div>
                </div>
            </div>

            {/* Middle Section: Form & Address */}
            <div className="content_container relative z-10">
                <div className="flex flex-col lg:flex-row gap-20 lg:gap-32">

                    {/* Left Column: Heading & Info */}
                    <div className="flex-1 space-y-12">
                        <div className="space-y-6">
                            <p className="text-gray-500 font-medium text-lg">Get In Touch</p>
                            <h2 className="text-4xl md:text-5xl font-daysOne leading-[1.1] text-black max-w-lg">
                                Drop Us A Message And Let&apos;s Make It Happen
                            </h2>
                        </div>

                        {/* Orange Address Box */}
                        <div className="bg-[#FFB75E] p-10 rounded-[40px] space-y-8 max-w-md shadow-sm">
                            <div className="space-y-1">
                                <h3 className="text-2xl font-bold font-daysOne">Our Address</h3>
                                <p className="text-black font-medium">Bangladesh</p>
                            </div>

                            <div className="space-y-4">
                                <p className="text-2xl font-bold font-daysOne uppercase">Rangpur Bangladesh</p>
                                <p className="text-xl font-bold">nexpixelo@gmail.com</p>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="flex items-center gap-6 pt-4">
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-gray-300" />
                                <a href="#" className="text-black font-medium hover:text-gray-600 transition-colors">Instagram</a>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-gray-300" />
                                <a href="#" className="text-black font-medium hover:text-gray-600 transition-colors">Dribbble</a>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-gray-300" />
                                <a href="#" className="text-black font-medium hover:text-gray-600 transition-colors">Linkedin</a>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Form */}
                    <div className="flex-1 pt-12 lg:pt-20">
                        <ContactForm />
                    </div>

                </div>
            </div>

            {/* Bottom Section: Image Gallery */}
            <div className="content_container pt-32 lg:pt-48 pb-20 relative">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
                    <div className="rounded-[32px] overflow-hidden aspect-[4/3] relative">
                        <Image
                            src="/contact_image_1.png"
                            alt="Project Work 1"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="rounded-[32px] overflow-hidden aspect-[4/3] relative">
                        <Image
                            src="/contact_image_2.png"
                            alt="Project Work 2"
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Overlapping Black Box */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-20 md:translate-y-40 bg-black text-white p-10 md:p-14 rounded-[32px] w-[90%] max-w-lg text-center space-y-4 shadow-2xl z-20">
                        <h3 className="text-3xl md:text-4xl font-daysOne">Get In Touch</h3>
                        <p className="text-gray-400 text-lg">
                            Let&apos;s team up and bring your ideas to life
                        </p>
                        <p className="text-xl md:text-2xl font-bold pt-2">nexpixelo@gmail.com</p>
                    </div>
                </div>
            </div>
        </main>
    );
}
