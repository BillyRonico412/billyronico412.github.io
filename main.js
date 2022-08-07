// Notre App Vue

const App = Vue.createApp({
  data() {
    return {
      afficheMenu: false,
      textInteractive: '',
      animerPipe: false,
      idSection: 0,
      idCompetence: 0
    }
  },
  watch: {
    idSection() {
      this.afficheMenu = false
    }
  },
  methods: {

    // Gestion du texte interactive dans l'acceuil
    interactiveFun() {
      const tabTexte = ["Student", "Developper", "Futur Engineer", "21 Years Old"];

      let indexLecture = 0
      let teteDeLecture = 0
      let boolEcriture = true
      let timerInterval = 0

      const intervalEcriture = setInterval(() => {
        if (boolEcriture) {
          if (teteDeLecture === tabTexte[indexLecture].length - 1) boolEcriture = false
          this.textInteractive += tabTexte[indexLecture].charAt(teteDeLecture)
          teteDeLecture++
        } else {
          if (timerInterval < 30) {
            timerInterval++
            this.animerPipe = true
          } else if (teteDeLecture !== 0) {
            this.animerPipe = false
            teteDeLecture--
            this.textInteractive = this.textInteractive.slice(0, teteDeLecture)
          } else {
            boolEcriture = true
            timerInterval = 0
            indexLecture = (indexLecture + 1) % tabTexte.length
          }
        }
      }, 100)
    },

  },
  created() {
    this.interactiveFun()
  },
  mounted() {
    // Intersection observer
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          console.log(entry.target.id)
          switch (entry.target.id) {
            case "h1-acceuil":
              this.idSection = 0
              break
            case "a-propos":
              this.idSection = 1
              break
            case "competences":
              this.idSection = 2
              break
            case "portfolio":
              this.idSection = 3
              break
            case "contact":
              this.idSection = 4
              break
          }
        }
      })
    }, { threshold: 0.6 })

    obs.observe(document.querySelector("#h1-acceuil"))
    obs.observe(document.querySelector("#a-propos"))
    obs.observe(document.querySelector("#competences"))
    obs.observe(document.querySelector("#portfolio"))
    obs.observe(document.querySelector("#contact"))
  },
  components: {
    "barre-progression": {
      template: `
                <div class="lg:w-2/5">
                    <div class="flex font-bold">
                        <div class="">{{ text }}</div>
                        <div class="ml-auto">{{ progress }}%</div>
                    </div>
                    <div class="bg-bleu-transparent h-2 ombre">
                        <div class="bg-bleu-clair h-2" ref="progress"></div>
                    </div>
                </div>
            `,
      props: {
        progress: String,
        text: String
      },
      mounted() {
        this.$refs.progress.style.width = `${this.progress}%`
      }
    },
    "projet": {
      template: `
                <a :href="linkView" class="w-80 sm:w-[23rem] ombre rounded overflow-hidden pb-8 border border-[#0001]">
                    <div class="w-80 sm:w-[23rem] sm:h-72 h-64 overflow-hidden">
                        <img :src="image" :alt="name + 'image'"
                             class="w-full h-full hover:scale-[105%] transition-all">
                    </div>
                    <div>
                        <h3 class="font-2 text-2xl mt-4 text-center">{{ name }}</h3>
                        <ul class="font-2 mt-4 flex gap-x-2 justify-center items-center">
                            <li v-if="icons.includes('html')">
                                <html-icons></html-icons>
                            </li>
                            <li v-if="icons.includes('css')">
                                <css-icons></css-icons>
                            </li>
                            <li v-if="icons.includes('tailwind')">
                                <tailwind-icons></tailwind-icons>
                            </li>
                            <li v-if="icons.includes('js')">
                                <js-icons></js-icons>
                            </li>
                            <li v-if="icons.includes('vue')">
                                <vue-icons></vue-icons>
                            </li>
                            <li v-if="icons.includes('api')">
                                <api-icons></api-icons>
                            </li>
                            <li v-if="icons.includes('ts')">
                                <ts-icons></ts-icons>
                            </li>
                            <li v-if="icons.includes('react')">
                                <react-icons></react-icons>
                            </li>
                            <li v-if="icons.includes('pwa')">
                                <pwa-icons></pwa-icons>
                            </li>
                        </ul>
                        <div class="flex justify-center mt-6 gap-x-4">
                            <a :href="linkView"
                               class="font-bold font-2 bg-[#000C] hover:bg-[#000] transition-colors duration-[0.3s] text-white px-4 rounded py-1 block ombre">
                                <i class="fas fa-eye"></i>
                                Voir
                            </a>
                            <a :href="linkGithub"
                               class="font-bold font-2 bg-[#000C] hover:bg-[#000] transition-colors duration-[0.3s] text-white px-4 rounded py-1 block ombre">
                                <i class="fab fa-github"></i>
                                GitHub
                            </a>
                        </div>
                    </div>
                    
                </a>
            `,
      props: {
        "name": String,
        "icons": Array,
        "image": String,
        "link-view": String,
        "link-github": String
      },
      components: {
        "html-icons": {
          template: `
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                     aria-hidden="true" role="img" class="iconify iconify--vscode-icons" width="32" height="32"
                     preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32">
                    <path fill="#e44f26"
                          d="M5.902 27.201L3.655 2h24.69l-2.25 25.197L15.985 30L5.902 27.201z"></path>
                    <path fill="#f1662a" d="M16 27.858l8.17-2.265l1.922-21.532H16v23.797z"></path>
                    <path fill="#ebebeb"
                          d="M16 13.407h-4.09l-.282-3.165H16V7.151H8.25l.074.83l.759 8.517H16v-3.091z"></path>
                    <path fill="#ebebeb"
                          d="M16 21.434l-.014.004l-3.442-.929l-.22-2.465H9.221l.433 4.852l6.332 1.758l.014-.004v-3.216z"></path>
                    <path fill="#fff"
                          d="M15.989 13.407v3.091h3.806l-.358 4.009l-3.448.93v3.216l6.337-1.757l.046-.522l.726-8.137l.076-.83H15.989z"></path>
                    <path fill="#fff"
                          d="M15.989 7.151V10.242h7.466l.062-.694l.141-1.567l.074-.83h-7.743z"></path>
                </svg>
            `
        },
        "css-icons": {
          template: `
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                     aria-hidden="true" role="img" class="iconify iconify--vscode-icons" width="32" height="32"
                     preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32">
                    <path fill="#1572b6"
                          d="M5.902 27.201L3.656 2h24.688l-2.249 25.197L15.985 30L5.902 27.201z"></path>
                    <path fill="#33a9dc" d="M16 27.858l8.17-2.265l1.922-21.532H16v23.797z"></path>
                    <path fill="#fff"
                          d="M16 13.191h4.09l.282-3.165H16V6.935h7.75l-.074.829l-.759 8.518H16v-3.091z"></path>
                    <path fill="#ebebeb"
                          d="M16.019 21.218l-.014.004l-3.442-.93l-.22-2.465H9.24l.433 4.853l6.331 1.758l.015-.004v-3.216z"></path>
                    <path fill="#fff"
                          d="M19.827 16.151l-.372 4.139l-3.447.93v3.216l6.336-1.756l.047-.522l.537-6.007h-3.101z"></path>
                    <path fill="#ebebeb"
                          d="M16.011 6.935v3.091H8.545l-.062-.695l-.141-1.567l-.074-.829h7.743z"></path>
                    <path fill="#ebebeb"
                          d="M16 13.191v3.091H12.601l-.062-.695l-.14-1.567l-.074-.829H16z"></path>
                </svg>
            `
        },
        "js-icons": {
          template: `
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                     aria-hidden="true" role="img" class="iconify iconify--vscode-icons" width="32" height="32"
                     preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32">
                    <path fill="#f5de19" d="M2 2h28v28H2z"></path>
                    <path d="M20.809 23.875a2.866 2.866 0 0 0 2.6 1.6c1.09 0 1.787-.545 1.787-1.3c0-.9-.716-1.222-1.916-1.747l-.658-.282c-1.9-.809-3.16-1.822-3.16-3.964c0-1.973 1.5-3.476 3.853-3.476a3.889 3.889 0 0 1 3.742 2.107L25 18.128A1.789 1.789 0 0 0 23.311 17a1.145 1.145 0 0 0-1.259 1.128c0 .789.489 1.109 1.618 1.6l.658.282c2.236.959 3.5 1.936 3.5 4.133c0 2.369-1.861 3.667-4.36 3.667a5.055 5.055 0 0 1-4.795-2.691zm-9.295.228c.413.733.789 1.353 1.693 1.353c.864 0 1.41-.338 1.41-1.653v-8.947h2.631v8.982c0 2.724-1.6 3.964-3.929 3.964a4.085 4.085 0 0 1-3.947-2.4z"
                          fill="#000"></path>
                </svg>
            `
        },
        "vue-icons": {
          template: `
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                     aria-hidden="true" role="img" class="iconify iconify--vscode-icons" width="32" height="32"
                     preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32">
                    <path d="M24.4 3.925H30l-14 24.15L2 3.925h10.71l3.29 5.6l3.22-5.6z" fill="#41b883"></path>
                    <path d="M2 3.925l14 24.15l14-24.15h-5.6L16 18.415L7.53 3.925z" fill="#41b883"></path>
                    <path d="M7.53 3.925L16 18.485l8.4-14.56h-5.18L16 9.525l-3.29-5.6z" fill="#35495e"></path>
                </svg>
            `
        },
        "api-icons": {
          template: `
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                     aria-hidden="true" role="img" class="iconify iconify--mdi" width="32" height="32"
                     preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                    <path d="M7 7H5a2 2 0 0 0-2 2v8h2v-4h2v4h2V9a2 2 0 0 0-2-2m0 4H5V9h2m7-2h-4v10h2v-4h2a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2m0 4h-2V9h2m6 0v6h1v2h-4v-2h1V9h-1V7h4v2z"
                          fill="#888888"></path>
                </svg>
            `
        },
        "ts-icons": {
          template: `
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true"
                     role="img" class="iconify iconify--vscode-icons" width="32" height="32"
                     preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32">
                    <rect x="2" y="2" width="28" height="28" rx="1.312" fill="#3178c6"></rect>
                    <path d="M18.245 23.759v3.068a6.492 6.492 0 0 0 1.764.575a11.56 11.56 0 0 0 2.146.192a9.968 9.968 0 0 0 2.088-.211a5.11 5.11 0 0 0 1.735-.7a3.542 3.542 0 0 0 1.181-1.266a4.469 4.469 0 0 0 .186-3.394a3.409 3.409 0 0 0-.717-1.117a5.236 5.236 0 0 0-1.123-.877a12.027 12.027 0 0 0-1.477-.734q-.6-.249-1.08-.484a5.5 5.5 0 0 1-.813-.479a2.089 2.089 0 0 1-.516-.518a1.091 1.091 0 0 1-.181-.618a1.039 1.039 0 0 1 .162-.571a1.4 1.4 0 0 1 .459-.436a2.439 2.439 0 0 1 .726-.283a4.211 4.211 0 0 1 .956-.1a5.942 5.942 0 0 1 .808.058a6.292 6.292 0 0 1 .856.177a5.994 5.994 0 0 1 .836.3a4.657 4.657 0 0 1 .751.422V13.9a7.509 7.509 0 0 0-1.525-.4a12.426 12.426 0 0 0-1.9-.129a8.767 8.767 0 0 0-2.064.235a5.239 5.239 0 0 0-1.716.733a3.655 3.655 0 0 0-1.171 1.271a3.731 3.731 0 0 0-.431 1.845a3.588 3.588 0 0 0 .789 2.34a6 6 0 0 0 2.395 1.639q.63.26 1.175.509a6.458 6.458 0 0 1 .942.517a2.463 2.463 0 0 1 .626.585a1.2 1.2 0 0 1 .23.719a1.1 1.1 0 0 1-.144.552a1.269 1.269 0 0 1-.435.441a2.381 2.381 0 0 1-.726.292a4.377 4.377 0 0 1-1.018.105a5.773 5.773 0 0 1-1.969-.35a5.874 5.874 0 0 1-1.805-1.045zm-5.154-7.638h4v-2.527H5.938v2.527H9.92v11.254h3.171z"
                          fill="#fff" fill-rule="evenodd"></path>
                </svg>
                    `
        },
        "tailwind-icons": {
          template: `
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true"
                     role="img" class="iconify iconify--vscode-icons" width="32" height="32"
                     preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32">
                    <path d="M9 13.7q1.4-5.6 7-5.6c5.6 0 6.3 4.2 9.1 4.9q2.8.7 4.9-2.1q-1.4 5.6-7 5.6c-5.6 0-6.3-4.2-9.1-4.9q-2.8-.7-4.9 2.1zm-7 8.4q1.4-5.6 7-5.6c5.6 0 6.3 4.2 9.1 4.9q2.8.7 4.9-2.1q-1.4 5.6-7 5.6c-5.6 0-6.3-4.2-9.1-4.9q-2.8-.7-4.9 2.1z"
                          fill="#44a8b3"></path>
                </svg>
                    `
        },
        "react-icons": {
          template: `
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="-11.5 -10.23174 23 20.46348" width="32" height="32">
                  <title>React Logo</title>
                  <circle cx="0" cy="0" r="2.05" fill="#61dafb"/>
                  <g stroke="#61dafb" stroke-width="1" fill="none">
                    <ellipse rx="11" ry="4.2"/>
                    <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
                    <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
                  </g>
                </svg>
                    `
        },
        "pwa-icons": {
          template: `
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--logos" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 193">
            <path fill="#3D3D3D" d="m376.818 158.244l14.791-37.403h42.707l-20.267-56.739L439.397 0L512 192.769h-53.542l-12.407-34.525z"></path>
            <path fill="#5A0FC8" d="M331.14 192.77L408.863 0l-51.528.001l-53.167 124.571L266.361.001h-39.607l-40.595 124.571l-28.629-56.764l-25.907 79.817l26.304 45.145h50.71L245.32 81.056l34.976 111.714z"></path>
            <path fill="#3D3D3D" d="M48.912 126.595H80.65c9.614 0 18.175-1.073 25.683-3.22l8.208-25.287l22.94-70.674a56.47 56.47 0 0 0-5.986-7.858C119.716 6.518 102.484 0 79.795 0H0v192.77h48.912v-66.175Zm42.01-82.247c4.601 4.63 6.901 10.827 6.901 18.59c0 7.822-2.023 14.026-6.069 18.611c-4.435 5.095-12.602 7.642-24.5 7.642H48.912V37.404h18.476c11.09 0 18.934 2.315 23.534 6.945Z"></path>
          </svg>
                    `
        }
      }
    }
  }
})

App.mount('#app')

// Initialisation de Sal.js

sal()