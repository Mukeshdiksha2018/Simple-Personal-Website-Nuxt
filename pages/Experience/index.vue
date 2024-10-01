<template>
  <div class="profile-section">
    <el-row :gutter="20">
      <!-- Work Experience -->
      <el-col :xs="24" :sm="24" :md="12" :lg="8">
        <el-card shadow="always">
          <span class="center-text">
            <h3>Work Experience</h3>
          </span>
          <el-timeline>
            <el-timeline-item
              v-for="(job, index) in workExperience"
              :key="index"
              :timestamp="job.period"
              placement="bottom"
            >
              <h4>{{ job.company }}</h4>
              <p>{{ job.position }}</p>
              <p>{{ job.description }}</p>
            </el-timeline-item>
          </el-timeline>
        </el-card>
      </el-col>

      <!-- Education -->
      <el-col :xs="24" :sm="24" :md="12" :lg="8">
        <el-card shadow="always">
          <span class="center-text">
            <h3>Education</h3>
          </span>
          <el-timeline>
            <el-timeline-item
              v-for="(education, index) in educationHistory"
              :key="index"
              :timestamp="education.period"
              placement="bottom"
            >
              <h4>{{ education.institution }}</h4>
              <p>{{ education.degree }}</p>
              <p>{{ education.details }}</p>
            </el-timeline-item>
          </el-timeline>
        </el-card>
      </el-col>

      <!-- Skills -->
      <el-col :xs="24" :sm="24" :md="24" :lg="8">
        <el-card shadow="always">
          <span class="center-text">
            <h3>Skills</h3>
          </span>
          <div class="skills">
            <el-tag
              v-for="(skill, index) in skills"
              :key="index"
              type="success"
              effect="dark"
              class="skill-tag"
            >
              {{ skill }}
            </el-tag>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      workExperience: [
        {
          company: "Hallmark Global Technologies PVT LTD",
          position: "Software Engineer",
          period: "Nov 2021 - Currently working..",
          description:
            "Developing a no-code platform and document signing system using Vue.js and Nuxt.js. My responsibilities include actively participating in code reviews, debugging and developing new functionalities.",
        },
        {
          company: "Lavu INC",
          position: "Configuration & On-boarding Executive",
          period: "Jan 2020 - Nov 2021",
          description:
            "Worked on configuration and onboarding clients for this restaurant POS service provider",
        },
        {
          company: "Genpact",
          position: "Collections Executive",
          period: "Nov 2018 - Aug 2019",
          description:
            "Did credit card collections for Synchrony, which is a leading financial institution in USA",
        },
        {
          company: "Concentrix",
          position: "Customer Service Representative",
          period: "Mar 2017 - May 2018",
          description: "worked here as a customer service executive.",
        },
      ],
      educationHistory: [
        {
          institution: "Manipal University Jaipur",
          degree: "Bachelor of Computer Applications",
          period: "2021 - 2024",
          details: "Specialized in web development and software engineering.",
        },
        {
          institution: "Narayana Junior College",
          degree: "Maths, Physics & Chemistry",
          period: "2010 - 2012",
        },
      ],
      skills: [
        "Vue.js",
        "Nuxt.js",
        "JavaScript",
        "TypeScript",
        "HTML5",
        "CSS3",
        "Element UI",
        "Axios",
      ],
    };
  },
};
</script>

<style scoped>
.profile-section {
  margin: 20px;
}

h3 {
  font-weight: bold;
}

h4 {
  margin: 5px 0;
}

.skills {
  margin-top: 15px;
}

.skill-tag {
  margin: 5px;
}

.center-text {
  display: flex;
  justify-content: center;
}

h3 {
  background-color: cornsilk;
}
/* Media queries for mobile responsiveness */
@media only screen and (max-width: 768px) {
  .profile-section {
    margin: 10px;
  }

  h3,
  h4 {
    font-size: 1.1rem;
  }

  p {
    font-size: 0.9rem;
  }

  .skills {
    margin-top: 10px;
  }
}
</style>
