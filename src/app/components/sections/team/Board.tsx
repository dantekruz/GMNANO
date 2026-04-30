"use client";

import TeamMemberCard from "./TeamMemberCard";
import FadeIn from "../../ui/FadeIn";

const board = [
  {
    name: "Navdeep Jaikaria",
    degree: "Ph.D.",
    role: "Chairman / CEO",
    image: "/images/Team/navdeep.png",
    bio: [
      "Dr. Navdeep Jaikaria has been at the forefront of cutting-edge biotechnologies in his various professional roles and has trained at some of the finest institutions in India and the US and with leading scientists of his times. Before founding GM, Dr. Jaikaria was Managing Director and Head of Equity Research at a leading Healthcare Investment Bank in New York, where he led a team of about 30 equity research analysts. Dr. Jaikaria successfully used his scientific acumen and expertise to consistently identify and value ground-breaking therapies and biopharma technologies as successful investment opportunities in his Wall Street career spanning almost ten years. During his career, he has successfully assembled & managed competent teams of scientific experts and business professionals in high-pressure, productivity-focused environments.",
      "Dr. Jaikaria's industry & investment perspectives have been widely cited in the print & broadcast media including The Wall Street Journal, Financial Times, Businessweek, Forbes. He periodically appeared as a guest commentator on CNNfn, CNBC, CNN India and has provided policy input to the US senate health committee on biodefense. He was named as one of the five best stock-pickers in Biotechnology in the Wall Street Journal's annual \"Best on the Street\" Analysts survey in 2007 and was consistently ranked as a top Biotech analyst on Wall Street.",
      "Dr. Jaikaria obtained B.Sc. in Human Biology from the All India Institute of Medical Sciences, New Delhi, his Ph.D. from New York Medical College and was a Post-Doctoral Fellow at The Rockefeller University, New York. He has won many academic awards throughout, including the Martha Lucas Pate, Ph.D. Memorial Award for academic excellence & leadership at the New York Medical College, the Naval Research Scholarship to conduct research at Stanford University, and was awarded the prestigious National Talent Search Scholarship – the highest scholastic award in India after high school. He was ranked #2 overall at the All India Institute of Medical Sciences.",
      "Over the years, Navdeep is/has been a member of Non-for-profit and Corporate Boards (both Private and Public).",
    ],
  },
  {
    name: "Rahul Singhvi",
    degree: "Sc.D., MBA",
    role: "Board Member",
    image: "/images/Team/rahul.png",
    bio: [
      "Dr. Rahul Singhvi is a global leader in the life sciences industry and serves as the Chief Executive Officer of National Resilience, Inc.",
      "Most recently, Dr. Singhvi was an Operating Partner at Flagship Pioneering, a Boston-based life sciences innovation firm, where he was responsible for founding and operating companies launched from Flagship's innovation foundry, Flagship Labs. Before joining Flagship, Singhvi was the Chief Operating Officer of Takeda's vaccine business unit, where he was responsible for worldwide vaccine CMC and manufacturing operations. Before Takeda, Dr. Singhvi was President and CEO of Novavax, Inc., where he transformed the company from a specialty pharmaceutical business to a vaccine development company. His professional career began at Merck & Co in 1994, where he held several positions in R&D and manufacturing.",
      "Dr. Singhvi serves on the Executive Advisory Board of the Leonard Davis Institute of Health Economics at the University of Pennsylvania and on the Scientific Advisory Board of the anti-microbial resistance research group at the Singapore MIT Advance Research and Technology program. He is a mentor instructor in the Undergraduate Projects Opportunity Program at MIT and is a visiting lecturer at the University College London.",
      "Dr. Singhvi graduated as the top ranked chemical engineer from the Indian Institute of Technology, Kanpur, India, and earned both his M.S. and Sc.D. chemical engineering degrees from MIT. He received an MBA from the Wharton School of the University of Pennsylvania, where he graduated as a Palmer Scholar.",
    ],
  },
  {
    name: "Sunil Gupta",
    degree: "M.D.",
    role: "Board Member",
    image: "/images/Team/sunil.png",
    bio: [
      "Dr. Gupta is a nationally recognized retinal surgeon in the United States, renowned entrepreneur, and healthcare pioneer. He is the founder of the Retina Specialty Institute and serves as the co-founder and chief medical officer of USRetina, one of the largest associations of retina physicians in the country. Additionally, Gupta is the Founder, Chairman, and Chief Medical Officer of Intelligent Retinal Imaging Systems. With a vast range of experiences, he has participated in over 30 clinical studies and serves on the Advisory Boards of prominent pharmaceutical companies such as Novartis, Allergan, and Genentech. Gupta's contributions to the field of retinal surgery and his entrepreneurial endeavors have solidified his reputation as an industry leader.",
    ],
  },
  {
    name: "Elma Hawkins",
    degree: "Ph.D., MBA",
    role: "Board Member",
    image: "/images/Team/elma.png",
    bio: [
      "Dr. Hawkins is a highly experienced pharmaceutical and biotech industry veteran, boasting 40 years of service across major functional areas. She is recognized as a successful CEO and drug developer, having played a pivotal role in the development of multiple approved and marketed products in the US and Europe. Currently, Dr. Hawkins serves as the Executive Chairwoman of Thylacine Biotherapeutics & Chairwoman of Epibone, a company specializing in bone and cartilage reconstruction. She previously held the positions of President, CEO, and co-Founder of Redpin Therapeutics (Kriya Therapeutics), where she contributed to the translational development of a groundbreaking chemogenetics product for nervous system diseases. Dr. Hawkins has also held two additional CEO positions and has a remarkable track record of raising $1 billion in public and private funding.",
    ],
  },
];

export default function Board() {
  return (
    <section className="py-28 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section header */}
        <FadeIn>
          <div className="flex items-center gap-6 mb-16">
            <div>
              <h2
                className="text-6xl font-semibold leading-none text-[#0a1f35]"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
               Our Board Members
              </h2>
               <p
                className="text-sm font-medium tracking-[0.18em] uppercase mb-2 mt-4"
                style={{ color: "#0e5b9b", opacity: 0.9 }}
              >
                Meet our long-serving board members!
              </p>
            </div>
            <div
              className="flex-1 hidden sm:block"
              style={{ height: "1px", background: "rgba(14,91,155,0.10)" }}
            />
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {board.map((m, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <TeamMemberCard {...m} />
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}