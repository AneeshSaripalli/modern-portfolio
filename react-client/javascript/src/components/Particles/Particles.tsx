import React from "react";
import Particles from "react-particles-js";
// import {IPolygonMask} from "tsparticles"

export default () => (
  <Particles
    params={{
      particles: {
        number: {
          value: 120,
          density: {
            enable: true,
            value_area: 1803.4120608655228,
          },
        },
        links: {
          color: "rgb(63,209,206)",
          distance: 150,
          enable: true,
          opacity: 0.4,
          width: 1,
        },
        color: {
          value: "#ffffff",
        },
        shape: {
          type: "circle",
          stroke: {
            width: 5,
            color: "rgb(86,233,170)",
          },
          polygon: {
            nb_sides: 4,
          },
        },
        opacity: {
          value: 0.4008530152163807,
          random: false,
          anim: {
            enable: false,
            speed: 1,
            opacity_min: 0.1,
            sync: false,
          },
        },
        size: {
          value: 1.5,
          random: true,
          anim: {
            enable: false,
            speed: 40,
            size_min: 0.1,
            sync: false,
          },
        },
        move: {
          enable: true,
          speed: 6,
          direction: "none",
          random: true,
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200,
          },
        },
      },
      interactivity: {
        detect_on: "window",
        events: {
          onclick: {
            enable: true,
            mode: "push",
          },
          resize: true,
        },
      },
      retina_detect: true,
    }}
  />
);
