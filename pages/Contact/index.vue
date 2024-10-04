<template>
  <div class="wrapper">
    <div style="width: 50vw">
      <div class="links-container">
        <!-- LinkedIn -->
        <a
          href="https://www.linkedin.com/in/sai-mukesh-kumar-akkala-8469b6200/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            height="50px"
            width="50px"
            src="~/assets/images/Linkedin.svg"
            alt="linkedin-logo"
          />
        </a>
        <a href="mailto:mukeshdiksha2018@gmail.com">
          <img
            height="50px"
            width="50px"
            src="~/assets/images/email.svg"
            alt="email-logo"
          />
        </a>

        <!-- GitHub -->
        <a
          href="https://github.com/Mukeshdiksha2018"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            height="50px"
            width="50px"
            src="~/assets/images/github-mark.svg"
            alt="github-logo"
          />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.wrapper {
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 10% 25%;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
}

.el-form-item {
  margin-bottom: 15px;
}

.links-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 100px;
  justify-items: center;
  align-items: center;
  margin-top: 20px;
}

/* Mobile responsiveness */
@media (max-width: 600px) {
  h1 {
    font-size: 24px;
  }

  .el-form-item {
    margin-bottom: 10px;
  }

  .el-button {
    width: 100%;
    padding: 10px;
  }

  .el-input,
  .el-input__inner {
    font-size: 14px;
  }
}
</style>
