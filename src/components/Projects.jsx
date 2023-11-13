import React from 'react'
import '../styles/projects.scss'

const Projects = () => {
  return (
    <div>
        <h2>Projects</h2>
        <div class="project-one">
  <div class="project-one-img">
    <img src="/public/images/project-placeholder-image.svg" alt="Project Placeholder Image of a yellow lightning bolt on a pink background" />
  </div>
  <div class="project-one-content">Project One</div>
</div>

<div class="project-two">
  <div class="project-two-img">
  <img src="/public/images/project-placeholder-image.svg" alt="Project Placeholder Image of a yellow lightning bolt on a pink background" />
  </div>
  <div class="project-two-content">Project Two</div>
</div>

<div class="project-three">
  <div class="project-one-img">
  <img src="/public/images/project-placeholder-image.svg" alt="Project Placeholder Image of a yellow lightning bolt on a pink background" />
  </div>
  <div class="project-one-content">Project Three</div>
</div>

<div class="project-four">
  <div class="project-two-img">
  <img src="/public/images/project-placeholder-image.svg" alt="Project Placeholder Image of a yellow lightning bolt on a pink background" />
  </div>
  <div class="project-two-content">Project Four</div>
</div>
    </div>
  )
}

export default Projects