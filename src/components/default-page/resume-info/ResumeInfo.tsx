/* eslint-disable no-useless-concat */
import React from "react";
import styles from "./ResumeInfo.module.scss";
import { ProgressBar } from "primereact/progressbar";

type skillObjType = {
  name: string,
  level: number
}

const ResumeInfo = () => {
  const skillsArray: skillObjType[] = [{
    name: "HTML5",
    level: 95
  }
    , {
    name: "CSS3",
    level: 95
  },
  {
    name: 'JS',
    level: 95,
  },
  {
    name: 'TypeScript',
    level: 90,
  },
  {
    name: 'UI Development',
    level: 100,
  },
  {
    name: 'Git',
    level: 80,
  },
  ]
  return (
    <>
      <div className={"w-full my-8" + " " + styles["contact-info-container"]} id="resume-section">
        <div className="container w-full mx-auto h-full relative">
          <div className={styles.contenttitle + " text-2xl font-medium pb-6 text-color"}> <span className="main-text-color">My</span> Resume </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-3 gap-4 sm:grid-cols-1">
            <div className={styles.resumecard + " p-6 "}>
              <h3 className={styles.sectiontitle + " text-medium text-color text-xl mb-3 pb-2"}>Work Experience</h3>
              <div className={styles["experience-item"] + " mb-4 pb-4"}>
                <div className="flex justify-between items-end mb-2 list-inside list-disc">
                  <h5 className="main-text-color text-md font-medium ">Polestar Solutions</h5>
                  <div className="text-xs font-medium text-color">June,21 - July,23</div>
                </div>
                <h6 className="text-sm font-normal text-color mb-2">UI Designer/Developer</h6>
                <p className="p-text-color text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium distinctio nemo suscipit molestiae cum exercitationem aliquam alias dignissimos cumque incidunt.</p>
              </div>
              <div className={styles["experience-item"] + " mb-4 pb-4"}>
                <div className="flex justify-between items-end mb-2 list-inside list-disc">
                  <h5 className="main-text-color text-md font-medium ">Workfore Solutions</h5>
                  <div className="text-xs font-medium text-color">July,23 - Present</div>
                </div>
                <h6 className="text-sm font-normal text-color mb-2">Frontend Developer</h6>
                <p className="p-text-color text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium distinctio nemo suscipit molestiae cum exercitationem aliquam alias dignissimos cumque incidunt.</p>
              </div>
            </div>
            <div className={styles.resumecard + " p-6 "}>
              <h3 className={styles.sectiontitle + " text-medium text-color text-xl mb-3 pb-2"}>Education</h3>
              <div className={styles["experience-item"] + " mb-4 pb-4"}>
                <div className="flex justify-between items-end mb-2 list-inside list-disc">
                  <h5 className="main-text-color text-md font-medium ">Jadavpur University</h5>
                  <div className="text-xs font-medium text-color"> Aug,2017 - Jun,21</div>
                </div>
                <h6 className="text-sm font-normal text-color mb-2">B.E in Electrical Engineering</h6>
                <h6 className="text-sm font-normal text-color mb-2">CGPA : 8.2/10</h6>
                <p className="p-text-color text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium distinctio nemo suscipit molestiae cum exercitationem aliquam alias dignissimos cumque incidunt.</p>
              </div>
              <div className={styles["experience-item"] + " mb-4 pb-4"}>
                <div className="flex justify-between items-end mb-2 list-inside list-disc">
                  <h5 className="main-text-color text-md font-medium ">12th (State Board)</h5>
                  <div className="text-xs font-medium text-color">2016</div>
                </div>
                <h6 className="text-sm font-normal text-color mb-2">Marks : 87.8%</h6>
                <p className="p-text-color text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium distinctio nemo suscipit molestiae cum exercitationem aliquam alias dignissimos cumque incidunt.</p>
              </div>
              <div className={styles["experience-item"] + " mb-4 pb-4"}>
                <div className="flex justify-between items-end mb-2 list-inside list-disc">
                  <h5 className="main-text-color text-md font-medium ">10th (State Board)</h5>
                  <div className="text-xs font-medium text-color"> 2014</div>
                </div>
                <h6 className="text-sm font-normal text-color mb-2">Marks : 90%</h6>
                <p className="p-text-color text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium distinctio nemo suscipit molestiae cum exercitationem aliquam alias dignissimos cumque incidunt.</p>
              </div>
            </div>

            <div className="sub-grid row-span-2">
              <div className={styles.resumecard + " p-6 mb-4"}>
                <h3 className={styles.sectiontitle + " text-medium text-color text-xl mb-3 pb-2"}>Skills</h3>
                {skillsArray.map((skill: skillObjType, index: number) =>
                  <>
                    <div className={styles["skill-item"] + " mb-2 pb-1 font-normal"} key={index}>
                      <h6 className="text-xs mb-2 font-medium">{skill.name}</h6>
                      <ProgressBar value={skill.level} pt={{
                        value: { style: { background: 'linear-gradient(to right, #F85C70, #212325)', borderRadius: '0.5rem' } },
                        root: {className:'h-3'}
                      }} showValue={false}
                      ></ProgressBar>
                    </div>
                  </>
                )}
              </div>
              <div className={styles.resumecard + " p-6 mb-4"}>
                <h3 className={styles.sectiontitle + " text-medium text-color text-xl mb-3 pb-2"}>Framework</h3>
                <ul className="list-disc list-inside">
                  <li className="text-sm p-text-color">Angular</li>
                  <li className="text-sm p-text-color">React</li>
                  <li className="text-sm p-text-color">Ionic 6</li>
                  <li className="text-sm p-text-color">React Native</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResumeInfo;
