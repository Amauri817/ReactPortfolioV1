import React from "react";

const skillsAdd: React.FC = () => {
  // Skill List
  const codingSkills = [
    { skill: "Python", rating: 3 },
    { skill: "C++", rating: 4 },
    { skill: "React", rating: 4 },
    { skill: "HTML", rating: 5 },
    { skill: "CSS", rating: 5 },
    { skill: "APIs", rating: 2 },
    { skill: "JavaScript", rating: 4 },
    { skill: "TypeScript", rating: 4 },
    { skill: "Node.js/Express", rating: 4 },
    { skill: "SQL", rating: 3 }
  ];

  const otherSkills = [
    { skill: "UI/UX", rating: 4 },
    { skill: "Maya", rating: 3 },
    { skill: "Blender", rating: 4 },
    { skill: "Unity", rating: 3 },
    { skill: "Unreal Engine 5", rating: 3 },
    { skill: "Microsoft PowerApps", rating: 5 },
    { skill: "Figma", rating: 3 },
  ];

  // Render Star Rating
  const renderStars = (rating: number) => (
    <>
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} className={`fa fa-star ${i < rating ? "blue-star" : "gray-star"}`}></span>
      ))}
    </>
  );

  // Render Skill List
  const renderSkills = (skills: { skill: string, rating: number }[]) => (
    <div className="grid">
      {skills.map(({ skill, rating }) => (
        <dl key={skill} className="stars">
          <dt className="starPositionLeft">{skill}</dt>
          <dd className="starPositionLeft">{renderStars(rating)}</dd>
        </dl>
      ))}
    </div>
  );

  return (
    <body style={{paddingTop:'50px', marginTop:'100px'}} id="skills">
        <div className="container">
            <div>
                <h3>Skills</h3>
                <div className="row">
                    <div className="col-md">
                        <h1 style={{textAlign:'left'}}>Coding</h1>
                        {renderSkills(codingSkills)}
                    </div>
                    <div className="col-md" style={{textAlign:'right'}}>
                    <h1 style={{textAlign:'right'}}>Others</h1>
                        {renderSkills(otherSkills)}
                    </div>
                </div>
                <p style={{marginTop:'15px', textAlign:'center'}}>
                *Relative to someone with similar amount of experience and age*
                </p>
            </div>
        </div>
    </body>

  );
};

export default skillsAdd;