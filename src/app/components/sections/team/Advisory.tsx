"use client";

import TeamMemberCard from "./TeamMemberCard";
import FadeIn from "../../ui/FadeIn";

const advisoryMembers = [
  {
    name: "Dr. Peter Kaiser",
    degree: "M.D.",
    role: "Vitreoretinal Specialist, Cleveland Clinic",
    image: "/images/Team/peter.jpeg",
    bio: [
      "Peter K. Kaiser, MD, is a staff member of the vitreoretinal faculty at the Cole Eye Institute, Cleveland Clinic. He is the founding director of the Digital Optical Coherence Tomography (OCT) Reading Center.",
      "He trained at Harvard Medical School, Massachusetts General Hospital, Massachusetts Eye and Ear Infirmary, and Bascom Palmer Eye Institute.",
      "Dr. Kaiser is actively involved in retinal clinical research, serving as study chairman for multiple international clinical trials and as a principal investigator in several others.",
      'He has authored over 200 publications and serves on editorial boards of leading ophthalmology journals. He has received Achievement Awards from the American Academy of Ophthalmology and is listed among the "Best Doctors in America".',
    ],
  },
  {
    name: "Dr. Leonard Miller",
    degree: "M.D., FACS, FRCS",
    role: "Founder, Boston Center for Facial Rejuvenation",
    image: "/images/Team/leonard.jpg",
    bio: [
      "Dr. Leonard Miller is a leading plastic surgeon and founder of the Boston Center for Facial Rejuvenation. He is affiliated with Harvard Medical School and major hospitals including Beth Israel Deaconess Hospital.",
      "With over 25 years of experience, he is known for pioneering techniques in aesthetic medicine, including introducing micro-needling to the United States.",
      "He actively participates in clinical trials and contributes to the development of advanced cosmetic technologies.",
      "Dr. Miller also serves as the clinical founder of the ThermiAesthetics Skin Rejuvenation System and is an investor in SGN Nanopharma.",
    ],
  },
  {
    name: "Dr. Tanvir Choudhri",
    degree: "M.D.",
    role: "Neurosurgeon, Mount Sinai",
    image: "/images/Team/tanvir.jpg",
    bio: [
      "Dr. Tanvir Choudhri is a neurosurgeon and Co-Director of the Neurosurgery Spine Program at the Icahn School of Medicine at Mount Sinai.",
      "He trained at Columbia University and completed advanced spine fellowship training at the Barrow Neurological Institute.",
      "Dr. Choudhri is actively involved in national and international neurosurgical education and has contributed to clinical guidelines in spine surgery.",
      'He has been recognized in multiple "Top Doctors" lists and focuses on spinal disorders, minimally invasive surgery, and brain injury research. He is also an investor in SGN Nanopharma.',
    ],
  },
  {
    name: "Dr. Rajeev Sindhwani",
    degree: "M.D.",
    role: "Cardiologist, Mount Sinai",
    image: "/images/Team/rajeev.jpg",
    bio: [
      "Dr. Rajeev Sindhwani is a cardiologist and clinical faculty member at the Icahn School of Medicine at Mount Sinai.",
      "He trained at AIIMS Delhi and completed advanced fellowships in Cardiovascular Disease and Interventional Cardiology in the United States.",
      "He specializes in hypertension, heart failure, and interventional cardiology while actively participating in clinical research.",
      "Dr. Sindhwani is also an investor in SGN Nanopharma.",
    ],
  },

  {
    name: "Dr. Juan Sanchez-Ramos",
    degree: "M.D., Ph.D.",
    role: "Professor of Neurology, University of South Florida",
    image: "/images/Team/Juan.jpg",
    bio: [
      "Dr. Juan Sanchez-Ramos is a Professor of Neurology at the University of South Florida, where he holds the Helen Ellis Endowed Chair for Parkinson’s Disease Research and directs the HDSA Center of Excellence for Huntington’s Disease.",
      "He also serves as Medical Director of the Parkinson Research Foundation. His research spans neurodegeneration, neurotoxicology, and stem cell biology, with a focus on brain repair mechanisms.",
      "He leads a funded research collaboration with SGN Nanopharma on nanoformulations of cannabinoids for nose-to-brain delivery.",
      "Dr. Sanchez-Ramos holds a Ph.D. in Pharmacology and Physiology from the University of Chicago and an M.D. from the University of Illinois, with neurology training at the University of Chicago and fellowship at the University of Miami.",
      "He has authored over 200 peer-reviewed publications."
    ],
  },

  {
    name: "Dr. Stuart A. Newman",
    degree: "Ph.D.",
    role: "Professor of Cell Biology & Anatomy, New York Medical College",
    image: "/images/Team/stuart-newman.jpg",
    bio: [
      "Dr. Stuart A. Newman is a leading theoretical biologist and Professor at New York Medical College.",
      "His work spans biophysical chemistry, embryonic morphogenesis, and evolutionary theory, including models explaining vertebrate limb formation and multicellular development.",
      "He has contributed to both experimental and theoretical biology and is a recognized voice on ethical issues in developmental biology.",
      "Dr. Newman is an editor of the journal 'Biological Theory' and leads international interdisciplinary research projects funded by the John Templeton Foundation.",
      "His work integrates experimental science, theoretical modeling, and philosophy of biology."
    ],
  },

  {
    name: "Dr. Navin Khanna",
    degree: "Ph.D.",
    role: "Padma Shri Awardee, Biochemistry & Biotechnology Expert",
    image: "/images/Team/navin-khanna.png",
    bio: [
      "Dr. Navin Khanna is one of India’s most distinguished scientists and a recipient of the Padma Shri, one of the nation’s highest civilian honors.",
      "He holds a Ph.D. in Biochemistry from AIIMS and has conducted advanced research at the University of Calgary, UC San Diego, and UC Irvine.",
      "Over a 30-year career at ICGEB, New Delhi, he led groundbreaking work in genetically engineered biomolecules, resulting in the commercialization of over 20 diagnostic kits used globally, including for Dengue, HIV, HCV, and HBV.",
      "His work has contributed to partnerships with Sun Pharma for clinical development of novel therapeutics and vaccines.",
      "Dr. Khanna is a Fellow of all three major Indian science academies and has served as an advisor to national and international research bodies.",
      "His current focus is on developing affordable and effective therapeutics and vaccines for emerging markets."
    ],
  },
];

export default function Advisory() {
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
                Advisory Board
              </h2>
              <p
                className="text-sm font-medium tracking-[0.18em] uppercase mb-2 mt-4"
                style={{ color: "#0e5b9b", opacity: 0.9 }}
              >
                Meet our distinguished advisory members!
              </p>
            </div>
            <div
              className="flex-1 hidden sm:block"
              style={{ height: "1px", background: "rgba(14,91,155,0.10)" }}
            />
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {advisoryMembers.map((m, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <TeamMemberCard {...m} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
