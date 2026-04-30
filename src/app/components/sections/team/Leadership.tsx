"use client";

import TeamMemberCard from "./TeamMemberCard";
import FadeIn from "../../ui/FadeIn";

const leadership = [
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
    name: "Vineet Singhal",
    degree: "BE, MBA",
    role: "Chief Operating Officer",
    image: "/images/Team/vineet.png",
    bio: [
      "Vineet Singhal is an accomplished business leader with 23+ years of experience in the Pharmaceuticals industry. He has held key leadership positions, including Country Head of Shire/Baxalta/Takeda in India and Novartis Consumer Health India & SE Asia. With expertise in Strategic Planning, Business Development, and Leadership roles, Vineet has operated successfully in the USA, Europe, SE Asia, and India. He excels in growing businesses and building strong organizations. Vineet holds a Bachelor's degree in Mechanical Engineering from Delhi University and an MBA from Cranfield School of Management, UK.",
    ],
  },
  {
    name: "Pranav Patel",
    degree: "Ph.D.",
    role: "Vice President R&D",
    image: "/images/Team/pranav.png",
    bio: [
      "Dr. Pranav Patel is a highly experienced scientist who leads the GM R&D team and brings over 25 years of extensive R&D experience in the pharmaceutical industry, spanning several domains such as synthetic chemistry, formulation sciences, analytical sciences, and GMP manufacturing. He has a strong track record, leading the successful development of numerous pharmaceutical products that have obtained marketing approval from the US Food and Drug Administration (FDA). Dr. Patel holds a Ph.D. in Medicinal Chemistry from the Florida Institute of Technology, under the mentorship of Dr. Joshua Rokach, a well-renowned Isoprostanes & Prostaglandins pioneer (former President, Merck & Co., who led the discovery of the asthma drug \"Singulair\").",
      "Dr. Patel's contributions and achievements in pharmaceutical research and development have positioned him as a knowledgeable and respected professional in the industry. Currently, he is also a Collaborative Professor, Dept. of Molecular Medicine, Morsani College of Medicine, University of South Florida Health; Assistant Professor, Affiliate, Dept. of Pharmaceutical Sciences, USF College of Pharmacy and, a Committee Member, Industry Advisory Council (IAC), USF Health. Through his expertise and dedication, Dr. Patel continues to make significant contributions to advancing healthcare and improving patient outcomes.",
    ],
  },
  {
    name: "Shoibal Mukherjee",
    degree: "M.D., DM.",
    role: "Clinical Development & Regulatory Consultant",
    image: "/images/Team/shoibal.png",
    bio: [
      "Dr. Shoibal Mukherjee is a highly experienced professional with over 30 years of expertise in drug development and pharmaceutical medicine. He has held leadership positions in Pfizer India, Ranbaxy Laboratories, GVK Biosciences, and Quintiles Asia, heading medical and research departments. As the founder and former President of the Indian Society for Clinical Research, Dr. Mukherjee has played a crucial role in advancing clinical research in India. Currently working as an independent consultant, he undertakes assignments in tropical disease, biologicals, vaccines, and phytopharmaceutical research. Dr. Mukherjee's extensive experience has led to his membership on research advisory boards for private and public sector organizations, as well as guest faculty positions at prestigious medical institutions in India.",
    ],
  },
];

export default function Leadership() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section header */}
        <FadeIn>
          <div className="flex items-center gap-6 mb-16">
            <div>
              <h2
                className="text-6xl  font-semibold leading-none text-[#0a1f35]"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Leadership
              </h2>
            </div>
            <div
              className="flex-1 hidden sm:block"
              style={{ height: "1px", background: "rgba(14,91,155,0.10)" }}
            />
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {leadership.map((m, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <TeamMemberCard {...m} />
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}