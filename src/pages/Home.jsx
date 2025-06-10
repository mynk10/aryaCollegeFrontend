import React from "react";
import HeroSection from "../components/HeroSection";
import AchievementsSection from "../components/AchievementSection";
import MissionSection from "../components/MissionSection";
import AcademicsSection from "../components/AcademicsSection";
import RecruitmentSection from "../components/RecruitmentSection";
import IndustrialAllianceSection from "../components/IndustrialAllianceSection";
import IndustryLogoCarousel from "../components/IndustryLogoCarousal";
import CollegesCardSection from "../components/CollegesCardSection";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <AchievementsSection />
      <MissionSection />
      <AcademicsSection />
      <RecruitmentSection />
      <IndustrialAllianceSection />
      <IndustryLogoCarousel />
      <CollegesCardSection />
    </div>
  );
};

export default Home;
