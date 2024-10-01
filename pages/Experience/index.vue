<template>
  <div class="profile-section">
    <el-row :gutter="20">
      <!-- Work Experience -->
      <el-col :xs="24" :sm="24" :md="12" :lg="8">
        <el-card shadow="always">
          <h3>Work Experience</h3>
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
          <h3>Education</h3>
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
          <h3>Skills</h3>
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
            "Developing a no-code platform and document signing system using Vue.js and Nuxt.js.",
        },
        {
          company: "Lavu INC",
          position: "Configuration & On-boarding Executive",
          period: "Jan 2020 - Nov 2021",
          description:
            "Developing a no-code platform and document signing system using Vue.js and Nuxt.js.",
        },
        {
          company: "Genpact",
          position: "Collections Executive",
          period: "Nov 2018 - Aug 2019",
          description:
            "Developing a no-code platform and document signing system using Vue.js and Nuxt.js.",
        },
        {
          company: "Concentrix",
          position: "Customer Service Representative",
          period: "Mar 2017 - May 2018",
          description:
            "Built dynamic user interfaces with Vue.js and improved user experience.",
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
  color: #eb3669;
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
